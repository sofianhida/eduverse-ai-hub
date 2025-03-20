
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jvmgbkimgyzihfcwkmkf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bWdia2ltZ3l6aWhmY3drbWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjA3NDMsImV4cCI6MjA1ODAzNjc0M30.5hFh3TAxFarLJISvrc4J9E_pJLzNM5GONGAFX3_U_2M";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Helper function to get features for admin/teacher module
export const getAdminFeatures = async () => {
  try {
    const { data, error } = await supabase
      .from('admin_features')
      .select('*')
      .order('display_order');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching admin features:', error);
    return [];
  }
};

// Helper function to get features for student module
export const getStudentFeatures = async () => {
  try {
    const { data, error } = await supabase
      .from('student_features')
      .select('*')
      .order('display_order');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching student features:', error);
    return [];
  }
};
