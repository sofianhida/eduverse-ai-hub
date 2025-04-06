
import React, { useEffect, useState } from 'react';
import { getSubjectsByLevel } from '../integrations/supabase/client';
import { formatBoldText } from '../utils/textFormatting';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from './LoadingSpinner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, AlertCircle } from 'lucide-react';

interface SubjectFeaturesProps {
  activeTab?: string;
}

interface Subject {
  id: number;
  name: string;
  level: string;
  phase: string;
  description: string;
  isRequired: boolean;
  category?: string;
}

const SubjectFeatures: React.FC<SubjectFeaturesProps> = ({ activeTab = 'sd' }) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      try {
        const data = await getSubjectsByLevel(activeTab);
        setSubjects(data);
      } catch (error) {
        console.error('Error fetching subjects:', error);
        toast({
          title: 'Error',
          description: 'Gagal memuat data mata pelajaran',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [activeTab, toast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size="large" text="Memuat mata pelajaran..." />
      </div>
    );
  }

  // Group subjects by category for SMA
  const getGroupedSubjects = () => {
    if (activeTab !== 'sma') return null;
    
    // First filter for required subjects
    const requiredSubjects = subjects.filter(subject => subject.isRequired);
    
    // Then group optional subjects by category
    const optionalSubjectsByCategory: Record<string, Subject[]> = {};
    subjects
      .filter(subject => !subject.isRequired)
      .forEach(subject => {
        const category = subject.category || 'Lainnya';
        if (!optionalSubjectsByCategory[category]) {
          optionalSubjectsByCategory[category] = [];
        }
        optionalSubjectsByCategory[category].push(subject);
      });
      
    return { requiredSubjects, optionalSubjectsByCategory };
  };

  const renderElementarySubjects = () => {
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mata Pelajaran</TableHead>
              <TableHead>Fase</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Deskripsi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell className="font-medium">{formatBoldText(subject.name)}</TableCell>
                <TableCell>{subject.phase}</TableCell>
                <TableCell>
                  {subject.isRequired ? (
                    <span className="flex items-center text-green-600">
                      <Check className="w-4 h-4 mr-1" /> Wajib
                    </span>
                  ) : (
                    <span className="flex items-center text-blue-600">
                      <AlertCircle className="w-4 h-4 mr-1" /> Pilihan
                    </span>
                  )}
                </TableCell>
                <TableCell className="hidden md:table-cell max-w-md">{formatBoldText(subject.description)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  const renderJuniorHighSubjects = () => {
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mata Pelajaran</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Deskripsi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell className="font-medium">{formatBoldText(subject.name)}</TableCell>
                <TableCell>
                  {subject.isRequired ? (
                    <span className="flex items-center text-green-600">
                      <Check className="w-4 h-4 mr-1" /> Wajib
                    </span>
                  ) : (
                    <span className="flex items-center text-blue-600">
                      <AlertCircle className="w-4 h-4 mr-1" /> Pilihan
                    </span>
                  )}
                </TableCell>
                <TableCell className="hidden md:table-cell max-w-md">{formatBoldText(subject.description)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  const renderSeniorHighSubjects = () => {
    const groupedData = getGroupedSubjects();
    if (!groupedData) return null;
    
    const { requiredSubjects, optionalSubjectsByCategory } = groupedData;
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Mata Pelajaran Wajib</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mata Pelajaran</TableHead>
                  <TableHead className="hidden md:table-cell">Deskripsi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requiredSubjects.map((subject) => (
                  <TableRow key={subject.id}>
                    <TableCell className="font-medium">{formatBoldText(subject.name)}</TableCell>
                    <TableCell className="hidden md:table-cell max-w-md">{formatBoldText(subject.description)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Mata Pelajaran Pilihan</h3>
          {Object.keys(optionalSubjectsByCategory).map(category => (
            <div key={category} className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Kelompok {category}</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mata Pelajaran</TableHead>
                      <TableHead className="hidden md:table-cell">Deskripsi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {optionalSubjectsByCategory[category].map((subject) => (
                      <TableRow key={subject.id}>
                        <TableCell className="font-medium">{formatBoldText(subject.name)}</TableCell>
                        <TableCell className="hidden md:table-cell max-w-md">{formatBoldText(subject.description)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-edu-secondary rounded-full text-edu-primary font-medium text-sm mb-4">
            {activeTab === 'sd' ? 'Sekolah Dasar' : activeTab === 'smp' ? 'Sekolah Menengah Pertama' : 'Sekolah Menengah Atas'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Daftar Mata Pelajaran {activeTab.toUpperCase()}
          </h2>
          <p className="text-lg text-edu-dark/80">
            {activeTab === 'sd' && 'Mata pelajaran untuk jenjang Sekolah Dasar (SD) yang dibagi dalam Fase A, B, dan C'}
            {activeTab === 'smp' && 'Mata pelajaran untuk jenjang Sekolah Menengah Pertama (SMP) pada Fase D'}
            {activeTab === 'sma' && 'Mata pelajaran untuk jenjang Sekolah Menengah Atas (SMA) pada Fase E dan F'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {activeTab === 'sd' && renderElementarySubjects()}
          {activeTab === 'smp' && renderJuniorHighSubjects()}
          {activeTab === 'sma' && renderSeniorHighSubjects()}
        </div>
      </div>
    </section>
  );
};

export default SubjectFeatures;
