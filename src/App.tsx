import { useState, useCallback } from 'react';
import Layout, { type PageKey } from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import AcademicCalendar from '@/pages/AcademicCalendar';
import CurriculumFlowchart from '@/pages/CurriculumFlowchart';
import FacultyDirectory from '@/pages/FacultyDirectory';
import DosageConverter from '@/pages/DosageConverter';
import CreditCalculator from '@/pages/CreditCalculator';
import StudyMaterialHub from '@/pages/StudyMaterialHub';
import DrugCheatSheet from '@/pages/DrugCheatSheet';
import Announcements from '@/pages/Announcements';

export default function App() {
  const [page, setPage] = useState<PageKey>('dashboard');

  const handleNavigate = useCallback((p: PageKey) => setPage(p), []);

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'calendar':
        return <AcademicCalendar />;
      case 'curriculum':
        return <CurriculumFlowchart />;
      case 'faculty':
        return <FacultyDirectory />;
      case 'dosage':
        return <DosageConverter />;
      case 'credit':
        return <CreditCalculator />;
      case 'materials':
        return <StudyMaterialHub />;
      case 'drugs':
        return <DrugCheatSheet />;
      case 'announcements':
        return <Announcements />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout current={page} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}
