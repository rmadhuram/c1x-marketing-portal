
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/lib/supabaseClient";
import { User } from '@supabase/supabase-js';

interface UserAvatarProps {
  user: User | null;
  className?: string;
}

const UserAvatar = ({ user, className }: UserAvatarProps) => {
  const [initials, setInitials] = useState<string>("?");

  useEffect(() => {
    if (user?.email) {
      // Create initials from email (first letter before @ sign)
      const emailFirstPart = user.email.split('@')[0];
      const initial = emailFirstPart.charAt(0).toUpperCase();
      setInitials(initial);
    }
  }, [user]);

  // Use user avatar if available (from Google auth), otherwise show initials
  const avatarUrl = user?.user_metadata?.avatar_url || null;

  return (
    <Avatar className={className}>
      <AvatarImage src={avatarUrl || ""} alt="User avatar" />
      <AvatarFallback className="bg-c1x-blue dark:bg-c1x-orange text-white">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
