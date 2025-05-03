
import { createClient } from '@supabase/supabase-js'

// Use the actual Supabase URL and anon key from the automatically generated client
const supabaseUrl = 'https://kfqnbbvdpghiwnagdlid.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmcW5iYnZkcGdoaXduYWdkbGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyODI4MjQsImV4cCI6MjA2MTg1ODgyNH0.x1_QLsZNHZ0PjmbzPYrrQYdOIPGjriAVnR7qyWaUXLE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
