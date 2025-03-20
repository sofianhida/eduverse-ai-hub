
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, LogOut, User, Settings, BookOpen, 
  Bell, Menu, X, Calendar, BarChart3, BookOpenCheck,
  LineChart, School, BrainCircuit, MessageSquare,
  HelpCircle, FileText
} from 'lucide-react';
import AIChat from '../components/AIChat';

const subjects = [
  { id: 'math', name: 'Matematika', icon: <div className="text-purple-500">∑</div> },
  { id: 'physics', name: 'Fisika', icon: <div className="text-blue-500">φ</div> },
  { id: 'chemistry', name: 'Kimia', icon: <div className="text-green-500">⚗️</div> },
  { id: 'biology', name: 'Biologi', icon: <div className="text-red-500">🧬</div> },
  { id: 'indonesian', name: 'Bahasa Indonesia', icon: <div className="text-orange-500">Aa</div> },
  { id: 'english', name: 'Bahasa Inggris', icon: <div className="text-cyan-500">Bb</div> },
];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col bg-edu-light">
      {/* Header */}
      <header className="bg-white border-b border-edu-primary/10 shadow-soft z-20">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-edu-primary/5 mr-2 lg:hidden"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-edu-primary to-edu-accent flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="ml-2 font-bold text-edu-dark">EduVerse AI</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-edu-primary/5 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-edu-primary rounded-full"></span>
            </button>
            
            <button className="flex items-center p-1 rounded-full hover:bg-edu-primary/5">
              <div className="w-8 h-8 rounded-full bg-edu-primary/10 flex items-center justify-center text-edu-primary font-medium">
                S
              </div>
              <span className="ml-2 font-medium hidden md:block">Siswa</span>
            </button>
          </div>
        </div>
      </header>
      
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`bg-white border-r border-edu-primary/10 transition-all duration-300 ${
            isSidebarOpen ? 'w-64' : 'w-0 -translate-x-full lg:translate-x-0 lg:w-20'
          } flex flex-col z-10 fixed lg:static h-[calc(100vh-52px)]`}
        >
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              <Link
                to="/dashboard"
                className="flex items-center p-3 rounded-lg bg-edu-primary/10 text-edu-primary"
              >
                <LayoutDashboard className="w-5 h-5" />
                {isSidebarOpen && <span className="ml-3">Dashboard</span>}
              </Link>
              
              <div className="pt-4 pb-2">
                {isSidebarOpen && (
                  <h3 className="text-xs font-semibold text-edu-dark/50 uppercase tracking-wider px-3 mb-2">
                    Pembelajaran
                  </h3>
                )}
                
                <Link
                  to="/courses"
                  className="flex items-center p-3 rounded-lg hover:bg-edu-primary/5 text-edu-dark"
                >
                  <BookOpen className="w-5 h-5" />
                  {isSidebarOpen && <span className="ml-3">Mata Pelajaran</span>}
                </Link>
                
                <Link
                  to="/assignments"
                  className="flex items-center p-3 rounded-lg hover:bg-edu-primary/5 text-edu-dark"
                >
                  <BookOpenCheck className="w-5 h-5" />
                  {isSidebarOpen && <span className="ml-3">Tugas</span>}
                </Link>
                
                <Link
                  to="/schedule"
                  className="flex items-center p-3 rounded-lg hover:bg-edu-primary/5 text-edu-dark"
                >
                  <Calendar className="w-5 h-5" />
                  {isSidebarOpen && <span className="ml-3">Jadwal</span>}
                </Link>
              </div>
              
              <div className="pt-4 pb-2">
                {isSidebarOpen && (
                  <h3 className="text-xs font-semibold text-edu-dark/50 uppercase tracking-wider px-3 mb-2">
                    Performa
                  </h3>
                )}
                
                <Link
                  to="/progress"
                  className="flex items-center p-3 rounded-lg hover:bg-edu-primary/5 text-edu-dark"
                >
                  <LineChart className="w-5 h-5" />
                  {isSidebarOpen && <span className="ml-3">Kemajuan</span>}
                </Link>
                
                <Link
                  to="/reports"
                  className="flex items-center p-3 rounded-lg hover:bg-edu-primary/5 text-edu-dark"
                >
                  <BarChart3 className="w-5 h-5" />
                  {isSidebarOpen && <span className="ml-3">Laporan</span>}
                </Link>
              </div>
            </nav>
          </div>
          
          <div className="p-4 border-t border-edu-primary/10">
            <nav className="space-y-2">
              <Link
                to="/profile"
                className="flex items-center p-3 rounded-lg hover:bg-edu-primary/5 text-edu-dark"
              >
                <User className="w-5 h-5" />
                {isSidebarOpen && <span className="ml-3">Profil</span>}
              </Link>
              
              <Link
                to="/settings"
                className="flex items-center p-3 rounded-lg hover:bg-edu-primary/5 text-edu-dark"
              >
                <Settings className="w-5 h-5" />
                {isSidebarOpen && <span className="ml-3">Pengaturan</span>}
              </Link>
              
              <Link
                to="/"
                className="flex items-center p-3 rounded-lg hover:bg-edu-primary/5 text-edu-dark"
              >
                <LogOut className="w-5 h-5" />
                {isSidebarOpen && <span className="ml-3">Keluar</span>}
              </Link>
            </nav>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-edu-light">
          <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-edu-dark mb-6">
              AI Tutor
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Subject Selection */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-soft border border-edu-primary/10">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <School className="w-5 h-5 mr-2 text-edu-primary" />
                    Pilih Mata Pelajaran
                  </h2>
                  
                  <div className="space-y-2">
                    {subjects.map((subject) => (
                      <button
                        key={subject.id}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                          selectedSubject.id === subject.id
                            ? 'bg-edu-primary/10 text-edu-primary'
                            : 'hover:bg-edu-primary/5 text-edu-dark'
                        }`}
                        onClick={() => setSelectedSubject(subject)}
                      >
                        <div className="w-8 h-8 rounded-full bg-white border border-edu-primary/20 flex items-center justify-center mr-3">
                          {subject.icon}
                        </div>
                        <span>{subject.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-soft border border-edu-primary/10">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-edu-primary" />
                    Bantuan
                  </h2>
                  
                  <div className="space-y-3 text-sm text-edu-dark/80">
                    <p>
                      AI Tutor dapat membantu Anda mempelajari konsep-konsep sulit, menjawab pertanyaan,
                      dan memberikan latihan soal sesuai dengan kurikulum Indonesia.
                    </p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-start">
                        <BrainCircuit className="w-4 h-4 text-edu-primary mt-0.5 mr-2" />
                        <p>Tanyakan konsep yang ingin Anda pahami</p>
                      </div>
                      
                      <div className="flex items-start">
                        <MessageSquare className="w-4 h-4 text-edu-primary mt-0.5 mr-2" />
                        <p>Diskusikan soal-soal yang sulit</p>
                      </div>
                      
                      <div className="flex items-start">
                        <FileText className="w-4 h-4 text-edu-primary mt-0.5 mr-2" />
                        <p>Minta penjelasan langkah demi langkah</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat Interface */}
              <div className="lg:col-span-2 h-[calc(100vh-220px)]">
                <AIChat 
                  chatTitle={`AI Tutor ${selectedSubject.name}`}
                  initialSystemPrompt={`Kamu adalah tutor ${selectedSubject.name} yang ahli untuk siswa di Indonesia. Berikan penjelasan sesuai kurikulum nasional Indonesia, dengan bahasa yang mudah dipahami dan contoh yang relevan.`}
                  placeholder={`Tanyakan tentang ${selectedSubject.name}...`}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
