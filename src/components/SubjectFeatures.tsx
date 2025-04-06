
import React, { useEffect, useState } from 'react';
import { getSubjectFeatures } from '../integrations/supabase/client';
import { formatBoldText } from '../utils/textFormatting';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from './LoadingSpinner';

const SubjectFeatures = () => {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await getSubjectFeatures();
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
  }, [toast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <section className="py-16 bg-edu-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-edu-secondary rounded-full text-edu-primary font-medium text-sm mb-4">
            Mata Pelajaran
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pembelajaran Interaktif dengan AI
          </h2>
          <p className="text-lg text-edu-dark/80">
            Jelajahi berbagai mata pelajaran dengan bantuan AI yang menyesuaikan dengan gaya belajar dan kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <div 
              key={subject.id} 
              className="bg-white rounded-xl shadow-soft border border-edu-primary/10 p-6 hover:shadow-medium transition-all duration-300 hover:border-edu-primary/30"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-${subject.color}-500/20 flex items-center justify-center mr-4 text-${subject.color}-600 text-xl font-bold`}>
                  {subject.symbol}
                </div>
                <h3 className="text-xl font-bold">{subject.title}</h3>
              </div>
              
              <p className="text-edu-dark/70">
                {formatBoldText(subject.description)}
              </p>

              <div className="mt-5 pt-4 border-t border-edu-primary/10">
                <button className="flex items-center text-edu-primary font-medium hover:text-edu-primary/80 transition-colors">
                  <span>Jelajahi</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-edu-primary text-white rounded-lg hover:bg-edu-primary/90 transition-colors shadow-soft">
            Lihat Semua Mata Pelajaran
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubjectFeatures;
