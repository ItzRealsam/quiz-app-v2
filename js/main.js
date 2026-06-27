import { initializeApp } from './core/app.js';
import { testSupabaseConnection } from './services/database/supabaseConnectionService.js';

initializeApp();

testSupabaseConnection();