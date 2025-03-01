const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPA_BASE_URL; // Found in Dashboard > Project Settings
const supabaseKey = process.env.SUPA_BASE_KEY; // Found in Dashboard > Project Settings > API

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
