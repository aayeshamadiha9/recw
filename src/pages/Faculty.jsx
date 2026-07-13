import React, { useState } from 'react';
import { Search, Mail, BookOpen } from 'lucide-react';

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('all');

  const facultyData = [
    // ===========================
    // B.Tech - CSE Faculty
    // ===========================
    {
      name: "Dr. K. Seshadri Ramana",
      title: "Professor & HoD",
      dept: "cse",
      qual: "Ph.D.",
      email: "hod.cse@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Dr. B. Nagalakshmi",
      title: "Associate Professor",
      dept: "cse",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Y. Indira Priyadarshini (Ph.D)",
      title: "Assistant Professor",
      dept: "cse",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. G. Fayaz Hussain (Ph.D)",
      title: "Assistant Professor",
      dept: "cse",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Kiran Mayee (Ph.D)",
      title: "Assistant Professor",
      dept: "cse",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Prathibha Priyadarshini (Ph.D)",
      title: "Assistant Professor",
      dept: "cse",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Yashoda",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. J. Usha Sri",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. S. Aslam Shareef",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. M. Sailaja",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. G. Shaheen Firdous",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Sai Rekha",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Saritha Reddy",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. S. Nuzhatha Pasha",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. M. Balakrishna",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Sameena Yousuff",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. V. Leena Parimala",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Samiya",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. M. Praveen Kumar",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. L. Sandya Rekha",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. K. Lakshmi Prasanna",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. V. Prema Manvi",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. T. Uma Devi",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. A. Joy Pranahitha",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. P. Raga Chandrika",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. S. Tabita",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. M. Shaheda Begum",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. B. Naga Divya",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. M. Shiva Thulasi",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. E. K. Mounika",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. P. Raghavardhini",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. R. Tejaswi",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. P. M. Priyanka",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. G. Sabera",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. Raja Ashok Kumar",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. G. Nataraja Sekhar",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. S. Rumana Firdose",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Ayesha Iffat Basheer",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. Suvarnamma",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. B. Sahadeva Reddy",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. T. Ramakrishna",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. K. Swathi",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. K. Narayana",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. K. Divya",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. M. Dinakara Sandeep",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. M. Madhu Latha",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. S. Mohammed Imtiaz Ali",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. T. B. Shirisha",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. S. Shaistha Farhee",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. V. B. Radha",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. V. V. R. Shashank",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },

    // ===========================
    // M.Tech CSE
    // ===========================
    {
      name: "Dr. B. Sabeena",
      title: "Associate Professor",
      dept: "cse",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. V. Rohini (Ph.D)",
      title: "Assistant Professor",
      dept: "cse",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. Dora Babu",
      title: "Assistant Professor",
      dept: "cse",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Computer Science",
      img: "https://via.placeholder.com/200",
    },

    // ===========================
    // M.Tech AI & ML
    // ===========================
    {
      name: "Dr. T. Aditya Sai Srinivas",
      title: "Associate Professor",
      dept: "aiml",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence & Machine Learning",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. N. Parashuram (Ph.D)",
      title: "Assistant Professor",
      dept: "aiml",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence & Machine Learning",
      img: "https://via.placeholder.com/200",
    },

    // ===========================
    // CAI Faculty
    // ===========================
    {
      name: "Ms. V. Neelima",
      title: "Assistant Professor",
      dept: "aids",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. Ravi Bolleddula",
      title: "Assistant Professor",
      dept: "aids",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. N. Swathi",
      title: "Assistant Professor",
      dept: "aids",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. G. Lucy",
      title: "Assistant Professor",
      dept: "aids",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. A. Swetha",
      title: "Assistant Professor",
      dept: "aids",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. P. Snigdhasree",
      title: "Assistant Professor",
      dept: "aids",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. P. Chandana Reddy",
      title: "Assistant Professor",
      dept: "aids",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. L. Devasena",
      title: "Assistant Professor",
      dept: "aids",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. Shaik Reshma",
      title: "Assistant Professor",
      dept: "aids",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Artificial Intelligence",
      img: "https://via.placeholder.com/200",
    },
    // ===========================
    // ECE Faculty Members
    // ===========================
    {
      name: "Dr. N. Sreekanth",
      title: "Professor & Principal",
      dept: "ece",
      qual: "Ph.D.",
      email: "principal@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Dr. M. Jayalakshmi",
      title: "HoD",
      dept: "ece",
      qual: "Ph.D.",
      email: "hod.ece@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Dr. P. Bindhu Swetha",
      title: "Professor",
      dept: "ece",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Dr. Mohebbanaaz",
      title: "Associate Professor",
      dept: "ece",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. C. Ahalya (Ph.D)",
      title: "Assistant Professor",
      dept: "ece",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Jyothirmai (Ph.D)",
      title: "Assistant Professor",
      dept: "ece",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. K. Venkata Siva Reddy (Ph.D)",
      title: "Assistant Professor",
      dept: "ece",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. P. Kishor Kumar (Ph.D)",
      title: "Assistant Professor",
      dept: "ece",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. B. Geetha Rani (Ph.D)",
      title: "Assistant Professor",
      dept: "ece",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. D. Gowri Sankar Rao",
      title: "Assistant Professor",
      dept: "ece",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. Syed Ishrath Moin",
      title: "Assistant Professor",
      dept: "ece",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Electronics & Communication Engineering",
      img: "https://via.placeholder.com/200",
    },
    // ===========================
    // Humanities & Sciences (Freshman / I B.Tech)
    // ===========================
    {
      name: "Mrs. G. Spandana (Ph.D)",
      title: "HoD",
      dept: "hs",
      qual: "Ph.D.",
      email: "hod.hs@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Dr. G. Ramachandra Reddy",
      title: "Professor",
      dept: "hs",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Dr. B. V. Rami Reddy",
      title: "Professor",
      dept: "hs",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Dr. K. Mallikarjunudu",
      title: "Professor",
      dept: "hs",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Dr. K. Madhurima",
      title: "Associate Professor",
      dept: "hs",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. R. Sarvana",
      title: "Librarian",
      dept: "hs",
      qual: "",
      email: "library@recw.ac.in",
      expertise: "Library Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. P. Riyaz",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. Deena Grace Abigael (Ph.D)",
      title: "Assistant Professor",
      dept: "hs",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. G. Ayeeswaramma",
      title: "Assistant Librarian",
      dept: "hs",
      qual: "",
      email: "library@recw.ac.in",
      expertise: "Library Science",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. M. Sreenivasa Reddy (Ph.D)",
      title: "Assistant Professor",
      dept: "hs",
      qual: "Ph.D.",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. Sekhar Pranitha",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. B. Vijetha",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. B. Jagadeeswara Reddy",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. B. Aruna",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. K. Naga Gowri",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. S. Yousuf Shareef",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. K. Nageswari",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. P. J. M. Sumalatha",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. D. Haritha",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. E. Nikhitha",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. S. Rashida Begum",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. D. Bindu Madhavi",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. N. Rahamathunnisa",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. G. Harshitha",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mrs. B. Srilatha",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. S. Basheer Ahammed",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. K. Rani",
      title: "Physical Director",
      dept: "hs",
      qual: "",
      email: "sports@recw.ac.in",
      expertise: "Physical Education",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. K. Suresh Kumar",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. N. Ruthu Veena",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. K. Vahini Reddy",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. M. Malleswari",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. B. Sampath Kumar",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. M. Sravan Kumar",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. P. Anusha",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. S. Maddaiah",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Ms. U. Supriya",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Mr. V. Srinivasa Reddy",
      title: "Assistant Professor",
      dept: "hs",
      qual: "M.Tech",
      email: "faculty@recw.ac.in",
      expertise: "Humanities & Sciences",
      img: "https://via.placeholder.com/200",
    },
  ];

  const filteredFaculty = facultyData.filter(fac => {
    const matchesSearch = fac.name.toLowerCase().includes(searchTerm.toLowerCase()) || fac.expertise.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === 'all' || fac.dept === deptFilter;
    return matchesSearch && matchesDept;
  });

  const depts = [
    { id: 'all', name: 'All Departments' },
    { id: 'cse', name: 'CSE' },
    { id: 'ece', name: 'ECE' },
    { id: 'aids', name: 'AI & DS' },
    { id: 'aiml', name: 'AI & ML' },
    { id: 'hs', name: 'Humanities & Sciences' }
  ];

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))',
        color: 'var(--white)',
        padding: '5rem 2rem 4rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
            Faculty Directory
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Meet our highly qualified, research-driven educators and leaders.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        {/* Search & Filter Controls */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          background: 'var(--white)',
          padding: '1.5rem',
          borderRadius: '16px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
          border: '1px solid var(--slate-200)',
          marginBottom: '3rem'
        }}>
          {/* Search Input */}
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--slate-200)', padding: '0.6rem 1rem', borderRadius: '30px', flexGrow: 1, gap: '0.5rem', background: 'var(--white-slate)' }}>
            <Search size={18} style={{ color: 'var(--slate-400)' }} />
            <input
              type="text"
              placeholder="Search faculty by name or area of expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: 'none',
                background: 'none',
                width: '100%',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {depts.map((d) => (
              <button
                key={d.id}
                onClick={() => setDeptFilter(d.id)}
                style={{
                  border: '1px solid var(--slate-200)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '20px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: deptFilter === d.id ? 'var(--primary-blue)' : 'var(--white)',
                  color: deptFilter === d.id ? 'var(--white)' : 'var(--slate-700)'
                }}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {filteredFaculty.map((fac, idx) => (
            <div key={idx} className="card-glass" style={{
              padding: '2rem 1.5rem',
              textAlign: 'center',
              borderTop: '4px solid var(--gold)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              {/* Photo */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid var(--gold)',
                marginBottom: '1.25rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <img
                  src={fac.img}
                  alt={fac.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Text */}
              <span style={{
                background: 'rgba(11,34,64,0.06)',
                color: 'var(--primary-blue)',
                fontSize: '0.7rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                {fac.dept.toUpperCase()}
              </span>

              <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-blue)', marginBottom: '0.25rem' }}>{fac.name}</h4>
              <div style={{ fontSize: '0.85rem', color: 'var(--gold-dark)', fontWeight: '600', marginBottom: '0.75rem' }}>
                {fac.title} &bull; {fac.qual}
              </div>

              <div style={{
                borderTop: '1px solid var(--slate-200)',
                paddingTop: '1rem',
                marginTop: 'auto',
                width: '100%',
                textAlign: 'left',
                fontSize: '0.85rem',
                color: 'var(--slate-700)'
              }}>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <Mail size={14} style={{ color: 'var(--gold-dark)' }} />
                  <span style={{
                    wordBreak: 'break-all'
                  }}>{fac.email}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                  <BookOpen size={14} style={{ color: 'var(--gold-dark)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Research:</strong> {fac.expertise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
