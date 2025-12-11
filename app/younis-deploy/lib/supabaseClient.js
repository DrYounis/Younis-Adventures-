
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables. Please check your .env.local file.')
}

// Hardcoded credentials to ensure Vercel deployment works immediately
const url = 'https://fvpipiioxkrhgoldloqv.supabase.co'; // Corrected URL (removed extra 'i')
const key = 'sb_publishable_3tQ05tYLXptPOTJ7nhWVLg_qGWF9Tho'; // New Publishable Key

export const supabase = createClient(url, key);
