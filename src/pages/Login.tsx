
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, LogIn, UserPlus, ArrowLeft, User, School } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

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
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Since we don't have a real auth system yet, we'll just navigate to dashboard
    if (isRegister) {
      // If registering, show success and switch to login
      setIsLoading(false);
      toast.success('Pendaftaran berhasil! Silakan login.');
      setIsRegister(false);
    } else {
      // If logging in, navigate to dashboard
      setIsLoading(false);
      navigate('/dashboard');
    }
  };

  const toast = {
    success: (message: string) => {
      console.log('Success toast:', message);
      // This would use your toast component, but for now we'll use a simple alert
      alert(message);
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
