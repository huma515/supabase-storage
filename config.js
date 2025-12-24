
import { createClient } from  'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://hjofiqqsozhfoxqycovf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqb2ZpcXFzb3poZm94cXljb3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MDA4NzUsImV4cCI6MjA4MDA3Njg3NX0.PK7AeJAaOex1r4bMRglIFzpYElXH0WGQpaQEXmn1ey4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase