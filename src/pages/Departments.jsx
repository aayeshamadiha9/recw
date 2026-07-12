import React, { useState, useEffect } from 'react';
import { Award, BookOpen, Users, TrendingUp, FlaskConical } from 'lucide-react';

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState('cse');
  const [activeTab, setActiveTab] = useState('overview');

  // Read query parameters to determine department
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('?dept=')) {
        const deptParam = hash.split('?dept=')[1];
        if (['cse', 'ece', 'aids', 'aiml', 'hs'].includes(deptParam)) {
          setSelectedDept(deptParam);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const departmentsData = {
    cse: {
      name: 'Computer Science & Engineering',
      shortName: 'CSE',
      nba: true,
      intake: '180 seats',
      hod: 'Dr. G. Sanjay Kumar',
      hodDegree: 'M.Tech, Ph.D.',
      hodMessage: 'Computer Science & Engineering is at the forefront of global technological innovation. Our department is committed to producing high-caliber engineers who are skilled in software development, data architectures, security, and computing theories. We focus on active learning, coding hackathons, and global certification workshops.',
      labs: [
        { name: 'Advanced Java & Web Technologies Lab', desc: 'Equipped with Core i7 desktops running Eclipse, VS Code, and Apache Tomcat servers.' },
        { name: 'Database Systems & SQL Lab', desc: 'Focuses on Oracle DB, MySQL, MongoDB databases.' },
        { name: 'Python Coding & Data Structures Lab', desc: 'Equipped with Python compiler platforms, Jupyter Notebooks, and Anaconda environment.' },
        { name: 'Operating Systems & Networking Lab', desc: 'Configured with Linux Ubuntu clusters and Cisco networking simulation tools.' }
      ],
      curriculum: [
        'Data Structures & Algorithms',
        'Object Oriented Programming through Java',
        'Database Management Systems',
        'Web Application Development',
        'Software Engineering & DevOps',
        'Compiler Design & Theory of Computation',
        'Cloud Computing & Cyber Security'
      ],
      research: 'Our faculty are actively engaged in cloud research, machine learning optimizations, and blockchain technology. The department has published over 120 papers in Scopus-indexed journals in the last three years and holds 4 design patents.',
      placements: 'Outstanding placements track record with 94% eligible students placed. Recruited by TCS, Cognizant, Wipro, Accenture, and Tech Mahindra. Highest package recorded at 12 LPA by TCS Digital, average package 5.2 LPA.'
    },
    ece: {
      name: 'Electronics & Communication Engineering',
      shortName: 'ECE',
      nba: true,
      intake: '120 seats',
      hod: 'Dr. V. Hari Prasad',
      hodDegree: 'M.Tech, Ph.D.',
      hodMessage: 'Electronics & Communication Engineering acts as the hardware bedrock of our digital communications. We prepare our students with strong foundational skills in microprocessors, VLSI design, embedded systems, and wireless communications. Our laboratories are state-of-the-art and match industrial testing environments.',
      labs: [
        { name: 'VLSI & Embedded Systems Design Lab', desc: 'Equipped with Xilinx ISE, Vivado Suite, and FPGA developer kits.' },
        { name: 'Microprocessors & Microcontrollers Lab', desc: 'Equipped with 8086 kits, ARM processors, and Arduino/Raspberry Pi boards.' },
        { name: 'Analog & Digital Communications Lab', desc: 'Configured with advanced digital storage oscilloscopes (DSOs), signal generators, and spectrum analyzers.' },
        { name: 'Microwave & Optical Communications Lab', desc: 'Equipped with Klystron test benches and optical fiber communication links.' }
      ],
      curriculum: [
        'Electronic Devices & Circuits',
        'Signals and Systems',
        'Microprocessors & Interfacing',
        'Digital Signal Processing',
        'VLSI Design & Systems',
        'Antennas and Wave Propagation',
        'Embedded IoT Systems'
      ],
      research: 'Focus areas include microstrip patch antenna design, low-power VLSI design, IoT architectures, and biosignal processing. Faculty have secured funding grants of over 15 Lakhs from AICTE and other bodies.',
      placements: 'Routinely records 90%+ placement rates. Students secure roles in both core electronics (like hardware verification engineering) and software engineering at top MNCs. Average package 4.8 LPA.'
    },
    aids: {
      name: 'Artificial Intelligence & Data Science',
      shortName: 'AI & DS',
      nba: false,
      intake: '60 seats',
      hod: 'Dr. M. Sreenivasulu',
      hodDegree: 'M.Tech, Ph.D.',
      hodMessage: 'Data is the new oil, and AI is the engine that processes it. In this department, students learn advanced statistics, machine learning models, database modeling, and predictive analytics. We prepare our girls to lead the data revolution in banking, health, and software engineering.',
      labs: [
        { name: 'Data Analytics & Modeling Lab', desc: 'Equipped with R Studio, Anaconda, PowerBI, and Tableau platforms.' },
        { name: 'Machine Learning Lab', desc: 'Running Core i7 workstations with GPU support for training Neural Networks.' },
        { name: 'AI Simulation & Robotics Lab', desc: 'Focuses on virtual agent frameworks and automated systems.' }
      ],
      curriculum: [
        'Mathematical Foundations of Data Science',
        'Introduction to AI & Search Techniques',
        'Data Warehousing & Mining',
        'Supervised & Unsupervised Machine Learning',
        'Data Visualization Techniques',
        'Big Data Analytics (Hadoop & Spark)',
        'Deep Learning & NLP Applications'
      ],
      research: 'Faculty and students work on healthcare diagnostics analytics, sentiment analysis models, and recommendation algorithms. Over 15 peer-reviewed publications.'
    },
    aiml: {
      name: 'Artificial Intelligence & Machine Learning',
      shortName: 'AI & ML',
      nba: false,
      intake: '60 seats',
      hod: 'Dr. P. Rajendra Prasad',
      hodDegree: 'M.Tech, Ph.D.',
      hodMessage: 'Artificial Intelligence and Machine Learning represent the core of next-generation automation. Our curriculum is tailored to cover neural networks, natural language processing, computer vision, and expert reasoning systems. We focus heavily on research-based implementations.',
      labs: [
        { name: 'AI Development Lab', desc: 'Equipped with PyTorch, TensorFlow, and cloud computing sandbox credits.' },
        { name: 'Computer Vision Lab', desc: 'Equipped with high-definition digital cameras and image processing toolkits.' },
        { name: 'Neural Networks Lab', desc: 'Focuses on building custom deep learning layers and architectures.' }
      ],
      curriculum: [
        'Programming for Artificial Intelligence',
        'Design Thinking & AI Problem Solving',
        'Machine Learning Algorithms',
        'Deep Neural Networks',
        'Natural Language Processing',
        'Computer Vision & Object Detection',
        'Reinforcement Learning'
      ],
      research: 'Active research on autonomous systems, deepfake detection algorithms, and agricultural crop disease analysis using image processing.'
    },
    hs: {
      name: 'Humanities & Sciences',
      shortName: 'H & S',
      nba: false,
      intake: 'First Year Foundation',
      hod: 'Dr. K. Srilatha',
      hodDegree: 'M.Sc, Ph.D. (Chemistry)',
      hodMessage: 'Every strong engineering structure needs a robust foundation. The Humanities and Sciences department handles the Freshman engineering program, covering Applied Physics, Engineering Chemistry, Calculus, Professional Communication, and Ethics. We focus on bridging the transition from school to college.',
      labs: [
        { name: 'Applied Physics Lab', desc: 'Equipped with laser benches, fiber optics experiment setups, and semiconductor kits.' },
        { name: 'Engineering Chemistry Lab', desc: 'Configured with digital conductometers, pH meters, and analytical titration equipment.' },
        { name: 'English Communication Skills Lab (ELCS)', desc: 'Interactive multimedia consoles with language learning software.' }
      ],
      curriculum: [
        'Linear Algebra & Advanced Calculus',
        'Applied Physics',
        'Engineering Chemistry',
        'Basic Electrical & Electronics',
        'Communicative English & Speech Lab',
        'Universal Human Values & Environmental Science'
      ],
      research: 'Focus on nanomaterial synthesis, water chemistry analysis, and applied linguistic methodologies.'
    }
  };

  const currentDept = departmentsData[selectedDept];

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))',
        color: 'var(--white)',
        padding: '4rem 2rem 3rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
            Departments
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Explore our state-of-the-art engineering departments, world-class labs, and curriculum.
          </p>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          background: 'var(--slate-100)',
          padding: '0.5rem',
          borderRadius: '35px',
          boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.05)',
          marginBottom: '3rem'
        }}>
          {Object.entries(departmentsData).map(([key, value]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedDept(key);
                setActiveTab('overview');
                window.location.hash = `#/departments?dept=${key}`;
              }}
              style={{
                border: 'none',
                padding: '0.8rem 1.8rem',
                borderRadius: '30px',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: selectedDept === key ? 'var(--primary-blue)' : 'transparent',
                color: selectedDept === key ? 'var(--white)' : 'var(--slate-700)',
                boxShadow: selectedDept === key ? '0 4px 10px rgba(11,34,64,0.15)' : 'none'
              }}
            >
              {value.shortName}
              {value.nba && <span style={{
                background: 'var(--gold)',
                color: 'var(--primary-blue)',
                fontSize: '0.6rem',
                padding: '0.1rem 0.4rem',
                borderRadius: '6px',
                marginLeft: '0.4rem',
                verticalAlign: 'middle'
              }}>NBA</span>}
            </button>
          ))}
        </div>

        {/* Department Detail Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 3fr', gap: '3rem', alignItems: 'flex-start' }} className="dept-grid">
          {/* Left panel: Quick facts & Tab switcher */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Quick stats box */}
            <div className="card-glass" style={{ borderLeft: '4px solid var(--gold)', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                Department Info
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                <div><strong>HOD:</strong> {currentDept.hod}, {currentDept.hodDegree}</div>
                <div><strong>Intake:</strong> {currentDept.intake}</div>
                {currentDept.nba && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-dark)', fontWeight: '700' }}>
                    <Award size={16} /> National Board of Accreditation (NBA)
                  </div>
                )}
              </div>
            </div>

            {/* Tab switchers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { id: 'overview', name: 'HOD & Overview', icon: <Users size={16} /> },
                { id: 'labs', name: 'Laboratories', icon: <FlaskConical size={16} /> },
                { id: 'curriculum', name: 'Curriculum & Courses', icon: <BookOpen size={16} /> },
                { id: 'research', name: 'Research & Placements', icon: <TrendingUp size={16} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    border: 'none',
                    textAlign: 'left',
                    padding: '1rem 1.25rem',
                    borderRadius: '10px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: activeTab === tab.id ? 'var(--white)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--gold-dark)' : 'var(--slate-700)',
                    borderLeft: activeTab === tab.id ? '4px solid var(--gold)' : '4px solid transparent',
                    boxShadow: activeTab === tab.id ? '0 4px 15px rgba(0,0,0,0.05)' : 'none'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    {tab.icon}
                    {tab.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right panel: Active tab content */}
          <div className="card-glass" style={{ minHeight: '400px' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>
              {currentDept.name}
            </h2>

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div style={{ animation: 'fadeInUp 0.3s ease' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  The department of {currentDept.name} at RCEW offers an outstanding academic environment. Our primary objective is to equip students with sound engineering basics, computational thinking, and industrial problem-solving skills.
                </p>
                <div style={{
                  background: 'var(--slate-100)',
                  borderLeft: '4px solid var(--gold)',
                  padding: '1.75rem',
                  borderRadius: '0 12px 12px 0',
                  marginTop: '1.5rem'
                }}>
                  <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    HOD Message — {currentDept.hod}
                  </h4>
                  <p style={{ fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.6', marginBottom: 0 }}>
                    "{currentDept.hodMessage}"
                  </p>
                </div>
              </div>
            )}

            {/* LABS TAB */}
            {activeTab === 'labs' && (
              <div style={{ animation: 'fadeInUp 0.3s ease' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Our labs are designed to give students practical exposure that aligns with theoretical modules. Equipped with high-speed computing clusters and professional testing platforms.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flexWrap: 'wrap' }} className="labs-grid">
                  {currentDept.labs.map((lab, lIdx) => (
                    <div key={lIdx} style={{
                      background: 'var(--slate-100)',
                      padding: '1.25rem',
                      borderRadius: '12px',
                      borderLeft: '3px solid var(--primary-blue)'
                    }}>
                      <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.4rem', fontSize: '1rem' }}>{lab.name}</h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--slate-700)', marginBottom: 0 }}>{lab.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CURRICULUM TAB */}
            {activeTab === 'curriculum' && (
              <div style={{ animation: 'fadeInUp 0.3s ease' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Under the autonomous curriculum framework, our course structures are approved by an expert Board of Studies (BoS) consisting of senior IIT/JNTU professors and industry CTOs.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="curr-grid">
                  {currentDept.curriculum.map((course, cIdx) => (
                    <div key={cIdx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{
                        background: 'var(--gold)',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        flexShrink: 0
                      }}></span>
                      <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{course}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <a href="#/academics" style={{
                    color: 'var(--gold-dark)',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    textDecoration: 'underline'
                  }}>
                    View Academic Regulations & Full Syllabi Files &rarr;
                  </a>
                </div>
              </div>
            )}

            {/* RESEARCH & PLACEMENTS TAB */}
            {activeTab === 'research' && (
              <div style={{ animation: 'fadeInUp 0.3s ease', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem', fontSize: '1.15rem' }}>Research & Innovation</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>{currentDept.research}</p>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid var(--slate-200)' }} />
                <div>
                  <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem', fontSize: '1.15rem' }}>Placements</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{currentDept.placements}</p>
                  <a href="#/placements" style={{
                    color: 'var(--gold-dark)',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    textDecoration: 'underline'
                  }}>
                    View Full Placements Records &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dept-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .labs-grid, .curr-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
