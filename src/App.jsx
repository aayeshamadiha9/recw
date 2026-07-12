import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Management from './pages/Management';
import PrincipalMessage from './pages/PrincipalMessage';
import VisionMission from './pages/VisionMission';
import Departments from './pages/Departments';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import Research from './pages/Research';
import IQAC from './pages/IQAC';
import CampusLife from './pages/CampusLife';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Circulars from './pages/Circulars';
import Exams from './pages/Exams';
import Faculty from './pages/Faculty';
import StudentResources from './pages/StudentResources';
import Contact from './pages/Contact';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentPath(hash);
      // Auto scroll to top on page transition
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Determine current page render
  const renderPage = () => {
    // Standardize route checking by splitting query parameters
    const route = currentPath.split('?')[0];

    switch (route) {
      case '#/':
      case '#/home':
        return <Home />;
      case '#/about':
        return <About />;
      case '#/management':
        return <Management />;
      case '#/principal-message':
        return <PrincipalMessage />;
      case '#/vision-mission':
        return <VisionMission />;
      case '#/departments':
        return <Departments />;
      case '#/academics':
        return <Academics />;
      case '#/admissions':
        return <Admissions />;
      case '#/placements':
        return <Placements />;
      case '#/research':
        return <Research />;
      case '#/iqac':
        return <IQAC />;
      case '#/campus-life':
        return <CampusLife />;
      case '#/gallery':
        return <Gallery />;
      case '#/events':
        return <Events />;
      case '#/circulars':
        return <Circulars />;
      case '#/exams':
        return <Exams />;
      case '#/faculty':
        return <Faculty />;
      case '#/student-resources':
        return <StudentResources />;
      case '#/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {/* Header Info Contacts & Notices */}
      <TopBar />

      {/* Main Navigation menu */}
      <Navbar />

      {/* Renders current active hash route */}
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      {/* Rich Footer */}
      <Footer />
    </>
  );
}

export default App;
