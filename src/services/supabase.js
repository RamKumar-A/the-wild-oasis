import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://rnhvdqgsejscxktilwml.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuaHZkcWdzZWpzY3hrdGlsd21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxOTYzMTQsImV4cCI6MjAxMzc3MjMxNH0.iS0_qTm3My-B2ddBBuos5sig_7LbNkpzp_ECCApjwSk';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
