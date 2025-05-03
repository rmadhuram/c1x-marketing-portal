
import { createClient } from '@supabase/supabase-js'

// Use environment variables if available, or fallback to empty strings
// You will need to replace these with your actual Supabase URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

// Check if the URL is still the placeholder
if (supabaseUrl === 'https://your-project-url.supabase.co') {
  console.warn('Please set your VITE_SUPABASE_URL environment variable')
}

// Check if the key is still the placeholder
if (supabaseAnonKey === 'your-anon-key') {
  console.warn('Please set your VITE_SUPABASE_ANON_KEY environment variable')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
