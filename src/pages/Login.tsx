
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, LogIn, UserPlus, ArrowLeft, User, School } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import { supabase } from '../integrations/supabase/client';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Check if register parameter is in URL
    const params = new URLSearchParams(location.search);
    if (params.get('register') === 'true') {
      setIsRegister(true);
    }

    // Check if user is already logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/dashboard');
      }
    };
    
    checkSession();
  }, [location, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isRegister) {
        // Register new user
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
              user_type: userType,
            }
          }
        });
        
        if (error) throw error;
        
        toast.success('Pendaftaran berhasil! Silakan verifikasi email Anda.');
        setIsRegister(false);
      } else {
        // Login existing user
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        
        if (error) throw error;
        
        toast.success('Login berhasil!');
        navigate('/dashboard');
      }
    } catch (error: any) {
      toast.error(error.message || 'Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/dashboard'
        }
      });
      
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || 'Gagal login dengan Google. Silakan coba lagi.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-edu-light">
      {/* Back Button */}
      <div className="p-6">
        <Link to="/" className="inline-flex items-center text-edu-dark hover:text-edu-primary transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-edu-primary to-edu-accent flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                E
              </div>
              <h1 className="text-2xl font-bold text-edu-dark">
                {isRegister ? 'Buat Akun EduVerse AI' : 'Masuk ke EduVerse AI'}
              </h1>
              <p className="text-edu-dark/70 mt-2">
                {isRegister 
                  ? 'Daftar untuk mengakses semua fitur pembelajaran AI' 
                  : 'Masukkan kredensial Anda untuk melanjutkan'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-edu-dark mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-primary w-full"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-edu-dark mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-primary w-full"
                  placeholder="nama@sekolah.edu.id"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-edu-dark mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-primary w-full pr-10"
                    placeholder="Masukkan password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-edu-dark/50 hover:text-edu-primary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {isRegister && (
                <div>
                  <label className="block text-sm font-medium text-edu-dark mb-1">
                    Jenis Pengguna
                  </label>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <button
                      type="button"
                      className={`flex items-center justify-center p-3 rounded-lg border ${
                        userType === 'student'
                          ? 'bg-edu-primary/10 border-edu-primary text-edu-primary'
                          : 'border-edu-primary/20 text-edu-dark/70 hover:bg-edu-primary/5'
                      } transition-all`}
                      onClick={() => setUserType('student')}
                    >
                      <User className="w-4 h-4 mr-2" />
                      <span>Siswa</span>
                    </button>
                    <button
                      type="button"
                      className={`flex items-center justify-center p-3 rounded-lg border ${
                        userType === 'teacher'
                          ? 'bg-edu-primary/10 border-edu-primary text-edu-primary'
                          : 'border-edu-primary/20 text-edu-dark/70 hover:bg-edu-primary/5'
                      } transition-all`}
                      onClick={() => setUserType('teacher')}
                    >
                      <School className="w-4 h-4 mr-2" />
                      <span>Guru/Admin</span>
                    </button>
                  </div>
                </div>
              )}

              {!isRegister && (
                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-sm text-edu-primary hover:underline">
                    Lupa password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="button-primary w-full flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <LoadingSpinner size="small" />
                ) : isRegister ? (
                  <>
                    <UserPlus className="w-4 h-4 mr-2" />
                    <span>Daftar</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    <span>Masuk</span>
                  </>
                )}
              </button>

              <div className="relative flex items-center gap-4 py-4">
                <div className="h-px flex-1 bg-edu-dark/10"></div>
                <span className="text-xs text-edu-dark/50 leading-none">atau lanjutkan dengan</span>
                <div className="h-px flex-1 bg-edu-dark/10"></div>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 rounded-lg border border-edu-dark/10 bg-white px-4 py-3 text-edu-dark hover:bg-edu-primary/5 transition-colors"
                disabled={isLoading}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.64 9.20455C17.64 8.56637 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4"/>
                  <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
                  <path d="M3.96409 10.7099C3.78409 10.1699 3.68182 9.59313 3.68182 8.99995C3.68182 8.40677 3.78409 7.82995 3.96409 7.28995V4.95813H0.957273C0.347727 6.17313 0 7.54768 0 8.99995C0 10.4522 0.347727 11.8268 0.957273 13.0418L3.96409 10.7099Z" fill="#FBBC05"/>
                  <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
                </svg>
                <span>Google</span>
              </button>

              <div className="mt-6 text-center">
                {isRegister ? (
                  <p className="text-edu-dark/70">
                    Sudah punya akun?{' '}
                    <button
                      type="button"
                      onClick={() => setIsRegister(false)}
                      className="text-edu-primary hover:underline font-medium"
                    >
                      Masuk
                    </button>
                  </p>
                ) : (
                  <p className="text-edu-dark/70">
                    Belum punya akun?{' '}
                    <button
                      type="button"
                      onClick={() => setIsRegister(true)}
                      className="text-edu-primary hover:underline font-medium"
                    >
                      Daftar
                    </button>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Image/Info */}
        <div className="hidden md:w-1/2 md:flex items-center justify-center bg-gradient-to-br from-edu-primary to-edu-accent p-12">
          <div className="max-w-md text-white">
            <h2 className="text-3xl font-bold mb-6">
              {isRegister 
                ? 'Bergabunglah dengan Revolusi Pendidikan Berbasis AI' 
                : 'Selamat Datang Kembali di EduVerse AI'}
            </h2>
            <p className="mb-8 text-white/80">
              Platform pendidikan berbasis AI yang dirancang khusus untuk sekolah-sekolah di Indonesia. 
              Tingkatkan efektivitas manajemen sekolah dan kualitas pembelajaran siswa.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-3">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Untuk Siswa</h3>
                  <p className="text-sm text-white/70">
                    Akses tutor AI personal, latihan soal otomatis, dan materi pembelajaran interaktif yang disesuaikan dengan kebutuhan Anda.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-3">
                  <School className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Untuk Guru & Admin</h3>
                  <p className="text-sm text-white/70">
                    Kelola kelas dengan efisien, pantau perkembangan siswa, dan dapatkan analisis data untuk meningkatkan kualitas pembelajaran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
