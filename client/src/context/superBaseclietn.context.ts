





import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nvldoqouwkdimzumnauz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52bGRvcW91d2tkaW16dW1uYXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3OTQ3MjYsImV4cCI6MjA2NjM3MDcyNn0.zl_judLm0MHnCPrNuq2_xDmjiJjozdXltAizCcQdsPA"
const client = createClient(supabaseUrl, supabaseKey)

export default client