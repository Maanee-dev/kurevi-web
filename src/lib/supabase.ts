import { createClient } from '@supabase/supabase-js';

// We use the credentials provided, falling back to Vite environment variables if configured
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://oxlaitvrencaeqxijgft.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_N-gPG59SV9C01hetdlPXpA_vY283K8Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
