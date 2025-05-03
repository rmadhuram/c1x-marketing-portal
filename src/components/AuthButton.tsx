
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { User } from '@supabase/supabase-js';
import { LogIn, LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";

const AuthButton = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get current session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Button disabled className="bg-c1x-blue hover:bg-c1x-darkBlue dark:bg-c1x-orange dark:hover:bg-c1x-orange/90">
        Loading...
      </Button>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <div className="hidden md:flex flex-col text-right">
          <span className="text-sm font-medium">
            {user.user_metadata.full_name || user.email?.split('@')[0] || 'User'}
          </span>
          <Button 
            variant="link" 
            onClick={handleSignOut} 
            className="h-auto p-0 text-xs text-gray-500 dark:text-gray-400"
          >
            Sign Out
          </Button>
        </div>
        <UserAvatar user={user} />
        <Button 
          onClick={handleSignOut}
          size="icon"
          variant="ghost"
          className="md:hidden"
          aria-label="Sign Out"
        >
          <LogOut size={18} />
        </Button>
      </div>
    );
  }

  return (
    <Button 
      onClick={handleSignIn} 
      className="bg-c1x-blue hover:bg-c1x-darkBlue dark:bg-c1x-orange dark:hover:bg-c1x-orange/90 flex items-center gap-2"
    >
      <LogIn size={16} />
      Sign in with Google
    </Button>
  );
};

export default AuthButton;
