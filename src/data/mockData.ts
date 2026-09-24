// ===== Types =====
export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
  tag: 'Registration' | 'Payment' | 'General' | 'Events' | 'Website';
  urgent?: boolean;
  pinned?: boolean;
}

export interface ScheduleItem {
  id: string;
  title: string;
  type: 'class' | 'exam' | 'lab' | 'deadline';
  day: string;
  time: string;
  location: string;
  instructor?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  category: 'exam' | 'holiday' | 'deadline' | 'event' | 'registration';
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  office: string;
  email: string;
  hours: string;
  avatarColor: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  category: 'Anatomy' | 'Pharmacology' | 'Medicinal Chemistry' | 'Pharmaceutics';
  type: 'Lecture Slides' | 'Lab Manual' | 'PDF' | 'Practice Questions';
  size: string;
  uploaded: string;
}

export interface DrugClass {
  id: string;
  name: string;
  category: string;
  examples: string[];
  mechanism: string;
  sideEffects: string;
  uses: string;
}

export interface Course {
  id: string;
  name: string;
  credits: number;
  year: 1 | 2 | 3 | 4 | 5;
  tier: 'Department Course' | 'College Course' | 'University Course' | 'Elective Course';
  description: string;
}

export interface SemesterCourse {
  id: string;
  code: string;
  name: string;
  credits: number;
  year: number;
  semester: number;
  prerequisites: string[];
}

// ===== Announcements (from KUST F25 Pharmacy Board) =====
export const announcements: Announcement[] = [
  {
    id: 'a1',
    title: 'Registration for Fall 2026',
    body: 'Per university timelines, registration for Fall 2026 is now aimed for August 30th 2026 with F25 window opening at 5:00 PM to 7:00 PM.',
    date: '2026-08-23',
    tag: 'Registration',
    urgent: true,
    pinned: true,
  },
  {
    id: 'a2',
    title: 'Important Notice: Payment Deadline',
    body: 'Payment (1,250,000 IQD) must be completed BEFORE August 27th to participate in the registration period.',
    date: '2026-08-23',
    tag: 'Payment',
    urgent: true,
    pinned: true,
  },
  {
    id: 'a3',
    title: 'Website Under Review',
    body: 'This website is currently under review for approval and official use.',
    date: '2026-08-29',
    tag: 'Website',
  },
  {
    id: 'a4',
    title: 'Pharmacology I Midterm Exam Schedule Released',
    body: 'The Pharmacology I midterm will be held on October 3rd in Hall B from 9:00 AM to 11:00 AM. Bring your student ID and a non-programmable calculator.',
    date: '2026-09-18',
    tag: 'General',
    urgent: true,
  },
  {
    id: 'a5',
    title: 'Guest Lecture: Advances in mRNA Vaccine Technology',
    body: 'Dr. Sarah Chen from the National Institute of Health will deliver a guest lecture on Friday at 2 PM in Auditorium 1. Open to all pharmacy students.',
    date: '2026-09-17',
    tag: 'Events',
  },
  {
    id: 'a6',
    title: 'Timetable Adjustment for Week of Sept 23',
    body: 'The Pharmaceutics lab session moves from Wednesday to Thursday for the week of September 23 due to facility maintenance.',
    date: '2026-09-16',
    tag: 'General',
  },
  {
    id: 'a7',
    title: 'Pharmacy Student Association Welcome Event',
    body: 'Join us for the annual welcome social on September 25th at the Student Center. Free food, networking, and club sign-ups from 5 PM onwards.',
    date: '2026-09-15',
    tag: 'Events',
  },
  {
    id: 'a8',
    title: 'Assignment Deadline: Drug Interaction Report',
    body: 'The drug interaction analysis report for PHAR 301 is due September 29th by 11:59 PM via the student portal.',
    date: '2026-09-14',
    tag: 'General',
  },
  {
    id: 'a9',
    title: 'Library Extended Hours During Exam Period',
    body: 'The pharmacy library will operate 24/7 from October 1st through October 15th to support exam preparation.',
    date: '2026-09-12',
    tag: 'General',
  },
];

// ===== Schedule (Next Up) =====
export const schedule: ScheduleItem[] = [
  {
    id: 's1',
    title: 'Pharmacology I — Lecture',
    type: 'class',
    day: 'Today',
    time: '09:00 – 10:30',
    location: 'Hall B',
    instructor: 'Dr. Alan Pierce',
  },
  {
    id: 's2',
    title: 'Pharmaceutics Lab',
    type: 'lab',
    day: 'Today',
    time: '13:00 – 16:00',
    location: 'Lab 3',
    instructor: 'Dr. Maria Gomez',
  },
  {
    id: 's3',
    title: 'Medicinal Chemistry Tutorial',
    type: 'class',
    day: 'Tomorrow',
    time: '11:00 – 12:30',
    location: 'Room 204',
    instructor: 'Dr. James Lee',
  },
  {
    id: 's4',
    title: 'Pharmacology I Midterm',
    type: 'exam',
    day: 'Oct 3',
    time: '09:00 – 11:00',
    location: 'Hall B',
  },
  {
    id: 's5',
    title: 'Drug Interaction Report Due',
    type: 'deadline',
    day: 'Sep 29',
    time: '23:59',
    location: 'Online Portal',
  },
];

// ===== Calendar Events =====
export const calendarEvents: CalendarEvent[] = [
  { id: 'c1', title: 'Payment Deadline (1,250,000 IQD)', date: '2026-08-27', category: 'deadline' },
  { id: 'c2', title: 'Fall 2026 Registration (5:00–7:00 PM)', date: '2026-08-30', category: 'registration' },
  { id: 'c3', title: 'Pharmacology I Midterm', date: '2026-10-03', category: 'exam' },
  { id: 'c4', title: 'Drug Interaction Report Due', date: '2026-09-29', category: 'deadline' },
  { id: 'c5', title: 'Pharmacy Welcome Event', date: '2026-09-25', category: 'event' },
  { id: 'c6', title: 'HPLC Training Session', date: '2026-09-26', category: 'event' },
  { id: 'c7', title: 'Founders Day (University Holiday)', date: '2026-10-10', category: 'holiday' },
  { id: 'c8', title: 'Medicinal Chemistry Quiz', date: '2026-09-27', category: 'exam' },
  { id: 'c9', title: 'Pharmaceutics Assignment Due', date: '2026-10-08', category: 'deadline' },
  { id: 'c10', title: 'Mid-Semester Break Begins', date: '2026-10-13', category: 'holiday' },
  { id: 'c11', title: 'Mid-Semester Break Ends', date: '2026-10-17', category: 'holiday' },
  { id: 'c12', title: 'Guest Lecture: mRNA Vaccines', date: '2026-09-20', category: 'event' },
  { id: 'c13', title: 'Anatomy Practical Exam', date: '2026-10-15', category: 'exam' },
  { id: 'c14', title: 'Research Symposium', date: '2026-10-22', category: 'event' },
  { id: 'c15', title: 'Final Exams Begin', date: '2026-11-15', category: 'exam' },
  { id: 'c16', title: 'Final Exams End', date: '2026-11-28', category: 'exam' },
  { id: 'c17', title: 'Winter Holiday Begins', date: '2026-12-15', category: 'holiday' },
];

// ===== Faculty =====
export const faculty: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Dr. Alan Pierce',
    role: 'Professor of Pharmacology',
    department: 'Pharmacology',
    office: 'Block A, Room 301',
    email: 'a.pierce@komar.edu.iq',
    hours: 'Mon & Wed, 2–4 PM',
    avatarColor: 'teal',
  },
  {
    id: 'f2',
    name: 'Dr. Maria Gomez',
    role: 'Associate Professor, Pharmaceutics',
    department: 'Pharmaceutics',
    office: 'Block B, Room 112',
    email: 'm.gomez@komar.edu.iq',
    hours: 'Tue & Thu, 10 AM–12 PM',
    avatarColor: 'blue',
  },
  {
    id: 'f3',
    name: 'Dr. James Lee',
    role: 'Assistant Professor, Medicinal Chemistry',
    department: 'Medicinal Chemistry',
    office: 'Block C, Room 220',
    email: 'j.lee@komar.edu.iq',
    hours: 'Mon & Fri, 1–3 PM',
    avatarColor: 'slate',
  },
  {
    id: 'f4',
    name: 'Dr. Priya Nair',
    role: 'Professor of Anatomy',
    department: 'Anatomy',
    office: 'Block A, Room 105',
    email: 'p.nair@komar.edu.iq',
    hours: 'Wed & Fri, 9–11 AM',
    avatarColor: 'teal',
  },
  {
    id: 'f5',
    name: 'Dr. Robert Chen',
    role: 'Department Chair, Clinical Pharmacy',
    department: 'Clinical Pharmacy',
    office: 'Block D, Room 401',
    email: 'r.chen@komar.edu.iq',
    hours: 'Tue, 3–5 PM',
    avatarColor: 'blue',
  },
  {
    id: 'f6',
    name: 'Dr. Emily Watson',
    role: 'Lecturer, Pharmacognosy',
    department: 'Pharmacognosy',
    office: 'Block B, Room 208',
    email: 'e.watson@komar.edu.iq',
    hours: 'Thu, 2–4 PM',
    avatarColor: 'slate',
  },
  {
    id: 'f7',
    name: 'Dr. Omar Hassan',
    role: 'Professor, Pharmaceutical Chemistry',
    department: 'Pharmaceutical Chemistry',
    office: 'Block C, Room 315',
    email: 'o.hassan@komar.edu.iq',
    hours: 'Mon & Wed, 10 AM–12 PM',
    avatarColor: 'teal',
  },
  {
    id: 'f8',
    name: 'Dr. Sophia Martinez',
    role: 'Associate Professor, Biostatistics',
    department: 'Biostatistics',
    office: 'Block D, Room 210',
    email: 's.martinez@komar.edu.iq',
    hours: 'Fri, 11 AM–1 PM',
    avatarColor: 'blue',
  },
];

// ===== KUST F25 Course Descriptions =====
export const courses: Course[] = [
  // Year 1
  { id: 'y1c1', name: 'Medical Terminology', credits: 1, year: 1, tier: 'College Course', description: 'Teaches medical roots, prefixes, and suffixes to build fluently understood clinical vocabulary for healthcare settings.' },
  { id: 'y1c2', name: 'Kurdology', credits: 2, year: 1, tier: 'University Course', description: 'Introduces Kurdish history, culture, language heritage, and social context.' },
  { id: 'y1c3', name: 'Computer Skills', credits: 3, year: 1, tier: 'University Course', description: 'Covers basic computer operations, office software productivity, data management, and digital literacy skills.' },
  { id: 'y1c4', name: 'General Human Anatomy', credits: 2, year: 1, tier: 'Department Course', description: 'Examines major structural systems, organs, and tissues of the human body.' },
  { id: 'y1c5', name: 'General Chemistry & Lab', credits: 4, year: 1, tier: 'College Course', description: 'Covers atomic structure, chemical bonding, reactions, solutions, and practical laboratory techniques.' },
  { id: 'y1c6', name: 'General Medical Biology', credits: 3, year: 1, tier: 'College Course', description: 'Focuses on cellular organization, genetics, and biological processes basic to medical and health sciences.' },
  { id: 'y1c7', name: 'Medical Biophysics', credits: 3, year: 1, tier: 'College Course', description: 'Applies physics principles to biological systems, covering fluid dynamics, radiation, heat, and membrane biophysics.' },
  { id: 'y1c8', name: 'Academic English I', credits: 3, year: 1, tier: 'University Course', description: 'Develops university-level reading comprehension, paragraph writing, vocabulary, and grammar skills.' },
  { id: 'y1c9', name: 'Genetics', credits: 2, year: 1, tier: 'College Course', description: 'Explores gene inheritance, DNA replication, gene expression, and genetic variations in health and disease.' },
  { id: 'y1c10', name: 'Academic Debate', credits: 3, year: 1, tier: 'University Course', description: 'Builds argument construction, public speaking, critical reasoning, and evidence-based debate techniques.' },
  { id: 'y1c11', name: 'Analytical Chemistry & Lab', credits: 4, year: 1, tier: 'College Course', description: 'Covers quantitative analysis, titration, spectroscopy, and chromatography with laboratory practice.' },
  { id: 'y1c12', name: 'Pharmacy Orientation & Calculation', credits: 3, year: 1, tier: 'Department Course', description: 'Introduces the pharmacy profession and covers pharmaceutical calculations and dosage math.' },
  // Year 2
  { id: 'y2c1', name: 'General Histology', credits: 3, year: 2, tier: 'College Course', description: 'Studies microscopic tissue structure and organ histology across body systems.' },
  { id: 'y2c2', name: 'Human Physiology', credits: 4, year: 2, tier: 'College Course', description: 'Examines organ system physiology including neural, cardiovascular, respiratory, and endocrine function.' },
  { id: 'y2c3', name: 'Microbiology I', credits: 3, year: 2, tier: 'College Course', description: 'Introduces bacterial structure, growth, pathogenesis, and laboratory identification methods.' },
  { id: 'y2c4', name: 'Organic Chemistry I', credits: 3, year: 2, tier: 'Department Course', description: 'Focuses on carbon structures, functional groups, stereochemistry, and organic reaction mechanisms.' },
  { id: 'y2c5', name: 'Physical Pharmacy I', credits: 2, year: 2, tier: 'Department Course', description: 'Applies physical chemical principles to pharmaceutical solubility, phase equilibria, and drug dissolution.' },
  { id: 'y2c6', name: 'Public Health Care & First Aid', credits: 2, year: 2, tier: 'Department Course', description: 'Covers public health principles, disease prevention, basic emergency care, and cardiopulmonary resuscitation basics.' },
  { id: 'y2c7', name: 'Microbiology II', credits: 3, year: 2, tier: 'College Course', description: 'Examines systemic medical microbiology, viral and fungal pathogens, and clinical antimicrobial strategies.' },
  { id: 'y2c8', name: 'Pharmacology I', credits: 2, year: 2, tier: 'Department Course', description: 'Introduces drug action principles, receptor binding, pharmacokinetics, and drug actions on organ systems.' },
  { id: 'y2c9', name: 'Basic Immunology', credits: 2, year: 2, tier: 'College Course', description: 'Explores innate and adaptive immune responses, antibodies, cellular immunity, and immunological disorders.' },
  { id: 'y2c10', name: 'Professional Communication', credits: 2, year: 2, tier: 'University Course', description: 'Develops interpersonal, written, and oral communication techniques for professional and clinical environments.' },
  { id: 'y2c11', name: 'Organic Chemistry II', credits: 3, year: 2, tier: 'Department Course', description: 'Continues organic synthesis, complex functional group reactions, and spectroscopy applications in chemistry.' },
  { id: 'y2c12', name: 'Academic English II', credits: 3, year: 2, tier: 'University Course', description: 'Advances academic writing, research paper composition, and critical reading skills.' },
  // Year 3
  { id: 'y3c1', name: 'Physical Pharmacy II', credits: 3, year: 3, tier: 'Department Course', description: 'Covers disperse systems, colloids, rheology, surface phenomena, and stability of pharmaceutical dosage forms.' },
  { id: 'y3c2', name: 'Pharmaceutical Compounding I', credits: 3, year: 3, tier: 'Department Course', description: 'Teaches formulation and preparation of non-sterile liquid and semi-solid dosage forms.' },
  { id: 'y3c3', name: 'Drug Informatics', credits: 1, year: 3, tier: 'Department Course', description: 'Focuses on retrieving, evaluating, and applying medical drug information databases to clinical practice.' },
  { id: 'y3c4', name: 'Pharmacy Practice Experience I', credits: 2, year: 3, tier: 'Department Course', description: 'Provides introductory practical exposure to community and hospital pharmacy operations.' },
  { id: 'y3c5', name: 'General Pathology', credits: 3, year: 3, tier: 'College Course', description: 'Examines mechanisms of disease processes, cell injury, inflammation, tissue repair, and neoplasia.' },
  { id: 'y3c6', name: 'Pharmacognosy I', credits: 3, year: 3, tier: 'Department Course', description: 'Studies natural drug sources, medicinal plants, natural product extraction, and bioactive constituents.' },
  { id: 'y3c7', name: 'Biochemistry I', credits: 3, year: 3, tier: 'Department Course', description: 'Covers metabolic pathways of biomolecules including proteins, carbohydrates, lipids, and nucleic acids.' },
  { id: 'y3c8', name: 'Medicinal Chemistry I', credits: 3, year: 3, tier: 'Department Course', description: 'Analyzes chemical structures of synthetic therapeutic agents and their structure-activity relationships.' },
  { id: 'y3c9', name: 'Pharmaceutical Compounding II', credits: 3, year: 3, tier: 'Department Course', description: 'Advances compounding skills for specialized solid dosage forms, suppositories, and sterile preparations.' },
  { id: 'y3c10', name: 'Pharmacology II', credits: 3, year: 3, tier: 'Department Course', description: 'Continues systemic pharmacology, covering cardiovascular, renal, central nervous system, and endocrine drugs.' },
  { id: 'y3c11', name: 'Pharmacy Practice Experience II', credits: 2, year: 3, tier: 'Department Course', description: 'Expands practical clinical exposure, focusing on patient counseling and prescription processing skills.' },
  { id: 'y3c12', name: 'Pharmacy Practical Training 1', credits: 1, year: 3, tier: 'Department Course', description: 'Offers structured site-based training in community pharmacy workflow and patient interaction.' },
  { id: 'y3c13', name: 'Pathophysiology', credits: 2, year: 3, tier: 'Department Course', description: 'Connects basic physiology to altered physiological functions occurring in specific human diseases.' },
  { id: 'y3c14', name: 'Biostatistics', credits: 3, year: 3, tier: 'College Course', description: 'Teaches statistical methods, probability, hypothesis testing, and data analysis used in health research.' },
  // Year 4
  { id: 'y4c1', name: 'Pharmacognosy II', credits: 3, year: 4, tier: 'Department Course', description: 'Focuses on advanced natural drug screening, phytomedicines, herbal formulations, and biosyntheses.' },
  { id: 'y4c2', name: 'Biochemistry II', credits: 3, year: 4, tier: 'Department Course', description: 'Covers specialized clinical biochemistry, enzymatic regulation, signal transduction, and metabolic diseases.' },
  { id: 'y4c3', name: 'Medicinal Chemistry II', credits: 3, year: 4, tier: 'Department Course', description: 'Explores synthetic therapeutic classes, target selectivity, metabolic pathways, and drug optimization.' },
  { id: 'y4c4', name: 'Biopharmaceutics', credits: 3, year: 4, tier: 'Department Course', description: 'Studies how physical properties of drugs and dosage design influence absorption, bioavailability, and physiological response.' },
  { id: 'y4c5', name: 'Pharmacology III', credits: 3, year: 4, tier: 'Department Course', description: 'Covers chemotherapy agents, antimicrobial therapies, immunopharmacology, and toxicological mechanisms.' },
  { id: 'y4c6', name: 'Therapeutics I', credits: 2, year: 4, tier: 'Department Course', description: 'Applies clinical pharmacotherapy guidelines to plan individual patient care for cardiovascular and respiratory conditions.' },
  { id: 'y4c7', name: 'Clinical Biochemistry', credits: 3, year: 4, tier: 'Department Course', description: 'Interprets clinical laboratory tests, blood biomarker levels, and metabolic indicators for medical diagnosis.' },
  { id: 'y4c8', name: 'Toxicology', credits: 4, year: 4, tier: 'Department Course', description: 'Examines toxic substance exposure, poison mechanisms, risk management, and clinical antidote management.' },
  { id: 'y4c9', name: 'Industrial Pharmacy I', credits: 3, year: 4, tier: 'Department Course', description: 'Covers industrial pharmaceutical processing, tablet compression, liquid filling, and manufacturing machinery operations.' },
  { id: 'y4c10', name: 'Therapeutics II', credits: 3, year: 4, tier: 'Department Course', description: 'Focuses on clinical management of endocrine, gastrointestinal, renal, and infectious disease conditions.' },
  { id: 'y4c11', name: 'Pharmacokinetics', credits: 2, year: 4, tier: 'Department Course', description: 'Calculates rates of drug absorption, distribution, metabolism, and elimination to optimize individual dosing schedules.' },
  { id: 'y4c12', name: 'Cosmetics', credits: 2, year: 4, tier: 'Elective Course', description: 'Covers cosmetic formulation science, skin and hair care products, safety testing, and cosmetic regulations.' },
  { id: 'y4c13', name: 'Pharmacy Practical Training 2', credits: 1, year: 4, tier: 'Department Course', description: 'Provides advanced practical training in patient record management, clinical interventions, and pharmacy operations.' },
  { id: 'y4c14', name: 'Prodrugs', credits: 2, year: 4, tier: 'Department Course', description: 'Examines drug design strategies involving inactive precursors converted into active therapeutic agents inside the body.' },
  { id: 'y4c15', name: 'Pharmacy Management & Economics', credits: 2, year: 4, tier: 'Department Course', description: 'Applies business principles, inventory control, financial budgeting, and pharmacoeconomic evaluations to pharmacy practice.' },
  { id: 'y4c16', name: 'Research Methodology', credits: 2, year: 4, tier: 'University Course', description: 'Teaches scientific study design, data collection methodology, research ethics, and paper writing techniques.' },
  { id: 'y4c17', name: 'Departmental Elective I', credits: 2, year: 4, tier: 'Elective Course', description: 'Departmental elective course allowing specialized study in a selected pharmacy topic.' },
  // Year 5
  { id: 'y5c1', name: 'Drug Discovery & Developments', credits: 2, year: 5, tier: 'Department Course', description: 'Explores phases of pipeline development, lead optimization, preclinical testing, and clinical drug trials.' },
  { id: 'y5c2', name: 'Industrial Pharmacy II', credits: 3, year: 5, tier: 'Department Course', description: 'Covers advanced quality assurance, Good Manufacturing Practice (GMP), packaging technologies, and regulatory affairs.' },
  { id: 'y5c3', name: 'Clinical Pharmacokinetics', credits: 2, year: 5, tier: 'Department Course', description: 'Applies therapeutic drug monitoring principles to adjust dosing for patients with impaired organ clearance.' },
  { id: 'y5c4', name: 'Therapeutics III', credits: 3, year: 5, tier: 'Department Course', description: 'Covers complex therapeutic decision-making for oncology, neurological conditions, psychiatric disorders, and critical care patient management.' },
  { id: 'y5c5', name: 'Graduation Project', credits: 3, year: 5, tier: 'University Course', description: 'Involves independent scientific research or clinical project work culminating in a written thesis and oral defense.' },
  { id: 'y5c6', name: 'Drug Literature', credits: 2, year: 5, tier: 'Elective Course', description: 'Critically evaluates primary medical literature, clinical trial designs, and published pharmaceutical studies.' },
  { id: 'y5c7', name: 'Hospital Training (Wards)', credits: 3, year: 5, tier: 'Department Course', description: 'Provides clinical patient ward rotations, participating in inpatient medical rounds and therapeutic plan reviews.' },
  { id: 'y5c8', name: 'Hospital Training (Clinical Lab)', credits: 3, year: 5, tier: 'Department Course', description: 'Provides hands-on hospital laboratory rotations focusing on diagnostic testing procedures and clinical specimen analysis.' },
  { id: 'y5c9', name: 'Advanced Drug Delivery Systems', credits: 2, year: 5, tier: 'Department Course', description: 'Explores targeted nanomedicine, liposomes, sustained-release technologies, and innovative bio-delivery systems.' },
  { id: 'y5c10', name: 'Cancer Genetics & Personalized Medicine', credits: 2, year: 5, tier: 'Department Course', description: 'Examines molecular oncogenetics, targeted cancer therapies, pharmacogenomics, and tailored patient drug selection.' },
  { id: 'y5c11', name: 'Pharmacy Ethics and Law', credits: 2, year: 5, tier: 'Department Course', description: 'Covers legal statutes governing pharmacy operations, controlled substance regulations, and professional ethical standards.' },
  { id: 'y5c12', name: 'Advanced Pharmaceutical Analysis', credits: 3, year: 5, tier: 'Department Course', description: 'Applies modern analytical instrumentation, including HPLC, mass spectrometry, and spectroscopy, for quality control of medicines.' },
];

// ===== Curriculum Flowchart (structured for prerequisite display) =====
export const curriculum: SemesterCourse[] = [
  // Year 1
  { id: 'y1s1a', code: 'PHAR 101', name: 'Medical Terminology', credits: 1, year: 1, semester: 1, prerequisites: [] },
  { id: 'y1s1b', code: 'UNIV 101', name: 'Kurdology', credits: 2, year: 1, semester: 1, prerequisites: [] },
  { id: 'y1s1c', code: 'UNIV 102', name: 'Computer Skills', credits: 3, year: 1, semester: 1, prerequisites: [] },
  { id: 'y1s1d', code: 'PHAR 110', name: 'General Human Anatomy', credits: 2, year: 1, semester: 1, prerequisites: [] },
  { id: 'y1s1e', code: 'CHEM 101', name: 'General Chemistry & Lab', credits: 4, year: 1, semester: 1, prerequisites: [] },
  { id: 'y1s1f', code: 'BIO 101', name: 'General Medical Biology', credits: 3, year: 1, semester: 1, prerequisites: [] },
  { id: 'y1s1g', code: 'BPH 101', name: 'Medical Biophysics', credits: 3, year: 1, semester: 1, prerequisites: [] },
  { id: 'y1s2a', code: 'ENG 101', name: 'Academic English I', credits: 3, year: 1, semester: 2, prerequisites: [] },
  { id: 'y1s2b', code: 'BIO 110', name: 'Genetics', credits: 2, year: 1, semester: 2, prerequisites: ['BIO 101'] },
  { id: 'y1s2c', code: 'UNIV 103', name: 'Academic Debate', credits: 3, year: 1, semester: 2, prerequisites: [] },
  { id: 'y1s2d', code: 'CHEM 102', name: 'Analytical Chemistry & Lab', credits: 4, year: 1, semester: 2, prerequisites: ['CHEM 101'] },
  { id: 'y1s2e', code: 'PHAR 120', name: 'Pharmacy Orientation & Calculation', credits: 3, year: 1, semester: 2, prerequisites: [] },
  // Year 2
  { id: 'y2s1a', code: 'HIST 201', name: 'General Histology', credits: 3, year: 2, semester: 3, prerequisites: ['PHAR 110'] },
  { id: 'y2s1b', code: 'PHYS 201', name: 'Human Physiology', credits: 4, year: 2, semester: 3, prerequisites: ['PHAR 110'] },
  { id: 'y2s1c', code: 'MICR 201', name: 'Microbiology I', credits: 3, year: 2, semester: 3, prerequisites: ['BIO 101'] },
  { id: 'y2s1d', code: 'CHEM 201', name: 'Organic Chemistry I', credits: 3, year: 2, semester: 3, prerequisites: ['CHEM 101'] },
  { id: 'y2s1e', code: 'PHAR 210', name: 'Physical Pharmacy I', credits: 2, year: 2, semester: 3, prerequisites: ['CHEM 101'] },
  { id: 'y2s1f', code: 'PHAR 211', name: 'Public Health Care & First Aid', credits: 2, year: 2, semester: 3, prerequisites: [] },
  { id: 'y2s2a', code: 'MICR 202', name: 'Microbiology II', credits: 3, year: 2, semester: 4, prerequisites: ['MICR 201'] },
  { id: 'y2s2b', code: 'PHAR 220', name: 'Pharmacology I', credits: 2, year: 2, semester: 4, prerequisites: ['PHYS 201'] },
  { id: 'y2s2c', code: 'IMMU 201', name: 'Basic Immunology', credits: 2, year: 2, semester: 4, prerequisites: ['BIO 101'] },
  { id: 'y2s2d', code: 'UNIV 201', name: 'Professional Communication', credits: 2, year: 2, semester: 4, prerequisites: [] },
  { id: 'y2s2e', code: 'CHEM 202', name: 'Organic Chemistry II', credits: 3, year: 2, semester: 4, prerequisites: ['CHEM 201'] },
  { id: 'y2s2f', code: 'ENG 102', name: 'Academic English II', credits: 3, year: 2, semester: 4, prerequisites: ['ENG 101'] },
  // Year 3
  { id: 'y3s1a', code: 'PHAR 310', name: 'Physical Pharmacy II', credits: 3, year: 3, semester: 5, prerequisites: ['PHAR 210'] },
  { id: 'y3s1b', code: 'PHAR 320', name: 'Pharmaceutical Compounding I', credits: 3, year: 3, semester: 5, prerequisites: ['PHAR 210'] },
  { id: 'y3s1c', code: 'PHAR 330', name: 'Drug Informatics', credits: 1, year: 3, semester: 5, prerequisites: [] },
  { id: 'y3s1d', code: 'PHAR 340', name: 'Pharmacy Practice Experience I', credits: 2, year: 3, semester: 5, prerequisites: [] },
  { id: 'y3s1e', code: 'PATH 301', name: 'General Pathology', credits: 3, year: 3, semester: 5, prerequisites: ['PHYS 201'] },
  { id: 'y3s1f', code: 'PHCO 301', name: 'Pharmacognosy I', credits: 3, year: 3, semester: 5, prerequisites: ['BIO 101'] },
  { id: 'y3s1g', code: 'BCHM 301', name: 'Biochemistry I', credits: 3, year: 3, semester: 5, prerequisites: ['BIO 101'] },
  { id: 'y3s1h', code: 'MEDC 301', name: 'Medicinal Chemistry I', credits: 3, year: 3, semester: 5, prerequisites: ['CHEM 202'] },
  { id: 'y3s2a', code: 'PHAR 321', name: 'Pharmaceutical Compounding II', credits: 3, year: 3, semester: 6, prerequisites: ['PHAR 320'] },
  { id: 'y3s2b', code: 'PHAR 350', name: 'Pharmacology II', credits: 3, year: 3, semester: 6, prerequisites: ['PHAR 220'] },
  { id: 'y3s2c', code: 'PHAR 341', name: 'Pharmacy Practice Experience II', credits: 2, year: 3, semester: 6, prerequisites: ['PHAR 340'] },
  { id: 'y3s2d', code: 'PHAR 360', name: 'Pharmacy Practical Training 1', credits: 1, year: 3, semester: 6, prerequisites: ['PHAR 340'] },
  { id: 'y3s2e', code: 'PATH 310', name: 'Pathophysiology', credits: 2, year: 3, semester: 6, prerequisites: ['PATH 301'] },
  { id: 'y3s2f', code: 'BIO 320', name: 'Biostatistics', credits: 3, year: 3, semester: 6, prerequisites: [] },
  // Year 4
  { id: 'y4s1a', code: 'PHCO 401', name: 'Pharmacognosy II', credits: 3, year: 4, semester: 7, prerequisites: ['PHCO 301'] },
  { id: 'y4s1b', code: 'BCHM 401', name: 'Biochemistry II', credits: 3, year: 4, semester: 7, prerequisites: ['BCHM 301'] },
  { id: 'y4s1c', code: 'MEDC 401', name: 'Medicinal Chemistry II', credits: 3, year: 4, semester: 7, prerequisites: ['MEDC 301'] },
  { id: 'y4s1d', code: 'PHAR 410', name: 'Biopharmaceutics', credits: 3, year: 4, semester: 7, prerequisites: ['PHAR 310'] },
  { id: 'y4s1e', code: 'PHAR 420', name: 'Pharmacology III', credits: 3, year: 4, semester: 7, prerequisites: ['PHAR 350'] },
  { id: 'y4s1f', code: 'PHAR 430', name: 'Therapeutics I', credits: 2, year: 4, semester: 7, prerequisites: ['PHAR 350'] },
  { id: 'y4s1g', code: 'BCHM 410', name: 'Clinical Biochemistry', credits: 3, year: 4, semester: 7, prerequisites: ['BCHM 301'] },
  { id: 'y4s2a', code: 'TOX 401', name: 'Toxicology', credits: 4, year: 4, semester: 8, prerequisites: ['PHAR 420'] },
  { id: 'y4s2b', code: 'PHAR 440', name: 'Industrial Pharmacy I', credits: 3, year: 4, semester: 8, prerequisites: ['PHAR 321'] },
  { id: 'y4s2c', code: 'PHAR 431', name: 'Therapeutics II', credits: 3, year: 4, semester: 8, prerequisites: ['PHAR 430'] },
  { id: 'y4s2d', code: 'PHAR 450', name: 'Pharmacokinetics', credits: 2, year: 4, semester: 8, prerequisites: ['PHAR 410'] },
  { id: 'y4s2e', code: 'ELEC 401', name: 'Cosmetics', credits: 2, year: 4, semester: 8, prerequisites: [] },
  { id: 'y4s2f', code: 'PHAR 460', name: 'Pharmacy Practical Training 2', credits: 1, year: 4, semester: 8, prerequisites: ['PHAR 360'] },
  { id: 'y4s2g', code: 'PHAR 470', name: 'Prodrugs', credits: 2, year: 4, semester: 8, prerequisites: ['MEDC 401'] },
  { id: 'y4s2h', code: 'PHAR 480', name: 'Pharmacy Management & Economics', credits: 2, year: 4, semester: 8, prerequisites: [] },
  { id: 'y4s2i', code: 'UNIV 401', name: 'Research Methodology', credits: 2, year: 4, semester: 8, prerequisites: ['BIO 320'] },
  { id: 'y4s2j', code: 'ELEC 410', name: 'Departmental Elective I', credits: 2, year: 4, semester: 8, prerequisites: [] },
  // Year 5
  { id: 'y5s1a', code: 'PHAR 501', name: 'Drug Discovery & Developments', credits: 2, year: 5, semester: 9, prerequisites: ['MEDC 401'] },
  { id: 'y5s1b', code: 'PHAR 510', name: 'Industrial Pharmacy II', credits: 3, year: 5, semester: 9, prerequisites: ['PHAR 440'] },
  { id: 'y5s1c', code: 'PHAR 520', name: 'Clinical Pharmacokinetics', credits: 2, year: 5, semester: 9, prerequisites: ['PHAR 450'] },
  { id: 'y5s1d', code: 'PHAR 530', name: 'Therapeutics III', credits: 3, year: 5, semester: 9, prerequisites: ['PHAR 431'] },
  { id: 'y5s1e', code: 'UNIV 501', name: 'Graduation Project', credits: 3, year: 5, semester: 9, prerequisites: ['UNIV 401'] },
  { id: 'y5s1f', code: 'ELEC 501', name: 'Drug Literature', credits: 2, year: 5, semester: 9, prerequisites: [] },
  { id: 'y5s2a', code: 'PHAR 540', name: 'Hospital Training (Wards)', credits: 3, year: 5, semester: 10, prerequisites: ['PHAR 431'] },
  { id: 'y5s2b', code: 'PHAR 550', name: 'Hospital Training (Clinical Lab)', credits: 3, year: 5, semester: 10, prerequisites: ['BCHM 410'] },
  { id: 'y5s2c', code: 'PHAR 560', name: 'Advanced Drug Delivery Systems', credits: 2, year: 5, semester: 10, prerequisites: ['PHAR 410'] },
  { id: 'y5s2d', code: 'PHAR 570', name: 'Cancer Genetics & Personalized Medicine', credits: 2, year: 5, semester: 10, prerequisites: ['BIO 110'] },
  { id: 'y5s2e', code: 'PHAR 580', name: 'Pharmacy Ethics and Law', credits: 2, year: 5, semester: 10, prerequisites: [] },
  { id: 'y5s2f', code: 'PHAR 590', name: 'Advanced Pharmaceutical Analysis', credits: 3, year: 5, semester: 10, prerequisites: ['CHEM 102'] },
];

// ===== Credit Calculator Constants =====
export const CREDIT_RATE_IQD = 230422;
export const DISCOUNT_PERCENT = 25;

// ===== Study Materials =====
export const studyMaterials: StudyMaterial[] = [
  { id: 'm1', title: 'Human Anatomy — Lecture Slides Week 1-4', category: 'Anatomy', type: 'Lecture Slides', size: '12.4 MB', uploaded: '2026-09-05' },
  { id: 'm2', title: 'Anatomy Lab Manual — Tissue Identification', category: 'Anatomy', type: 'Lab Manual', size: '8.1 MB', uploaded: '2026-09-08' },
  { id: 'm3', title: 'Skeletal System Reference PDF', category: 'Anatomy', type: 'PDF', size: '5.2 MB', uploaded: '2026-09-10' },
  { id: 'm4', title: 'Pharmacology I — Autonomic Nervous System', category: 'Pharmacology', type: 'Lecture Slides', size: '9.7 MB', uploaded: '2026-09-12' },
  { id: 'm5', title: 'Drug Receptor Interactions — Practice Questions', category: 'Pharmacology', type: 'Practice Questions', size: '1.3 MB', uploaded: '2026-09-15' },
  { id: 'm6', title: 'Pharmacokinetics Reference Sheet', category: 'Pharmacology', type: 'PDF', size: '3.8 MB', uploaded: '2026-09-16' },
  { id: 'm7', title: 'Medicinal Chemistry — Drug Synthesis Slides', category: 'Medicinal Chemistry', type: 'Lecture Slides', size: '15.2 MB', uploaded: '2026-09-06' },
  { id: 'm8', title: 'Functional Groups Cheat Sheet', category: 'Medicinal Chemistry', type: 'PDF', size: '2.1 MB', uploaded: '2026-09-11' },
  { id: 'm9', title: 'MedChem Lab Manual — Synthesis Procedures', category: 'Medicinal Chemistry', type: 'Lab Manual', size: '6.5 MB', uploaded: '2026-09-14' },
  { id: 'm10', title: 'Pharmaceutics — Formulation Principles', category: 'Pharmaceutics', type: 'Lecture Slides', size: '11.0 MB', uploaded: '2026-09-07' },
  { id: 'm11', title: 'Tablet Manufacturing Lab Manual', category: 'Pharmaceutics', type: 'Lab Manual', size: '7.3 MB', uploaded: '2026-09-09' },
  { id: 'm12', title: 'Dosage Form Design — Practice Questions', category: 'Pharmaceutics', type: 'Practice Questions', size: '1.8 MB', uploaded: '2026-09-17' },
  { id: 'm13', title: 'Anatomy — Muscular System Practice Set', category: 'Anatomy', type: 'Practice Questions', size: '2.0 MB', uploaded: '2026-09-18' },
  { id: 'm14', title: 'Pharmacology II — Cardiovascular Drugs Slides', category: 'Pharmacology', type: 'Lecture Slides', size: '10.5 MB', uploaded: '2026-09-19' },
];

// ===== Drug Classes Cheat Sheet =====
export const drugClasses: DrugClass[] = [
  { id: 'd1', name: 'Beta-Blockers', category: 'Cardiovascular', examples: ['Atenolol', 'Metoprolol', 'Propranolol'], mechanism: 'Block beta-adrenergic receptors, reducing heart rate and blood pressure.', sideEffects: 'Fatigue, bradycardia, cold extremities, dizziness.', uses: 'Hypertension, angina, heart failure, arrhythmias.' },
  { id: 'd2', name: 'ACE Inhibitors', category: 'Cardiovascular', examples: ['Enalapril', 'Lisinopril', 'Ramipril'], mechanism: 'Inhibit angiotensin-converting enzyme, reducing angiotensin II production.', sideEffects: 'Dry cough, hyperkalemia, angioedema.', uses: 'Hypertension, heart failure, diabetic nephropathy.' },
  { id: 'd3', name: 'Statins', category: 'Cardiovascular', examples: ['Atorvastatin', 'Simvastatin', 'Rosuvastatin'], mechanism: 'Inhibit HMG-CoA reductase, reducing cholesterol synthesis.', sideEffects: 'Myalgia, elevated liver enzymes, headache.', uses: 'Hypercholesterolemia, cardiovascular prevention.' },
  { id: 'd4', name: 'Penicillins', category: 'Antibiotics', examples: ['Amoxicillin', 'Penicillin V', 'Ampicillin'], mechanism: 'Inhibit bacterial cell wall synthesis by binding PBPs.', sideEffects: 'Allergic reactions, rash, diarrhea.', uses: 'Bacterial infections: respiratory, skin, UTI.' },
  { id: 'd5', name: 'Macrolides', category: 'Antibiotics', examples: ['Azithromycin', 'Clarithromycin', 'Erythromycin'], mechanism: 'Bind 50S ribosomal subunit, inhibiting protein synthesis.', sideEffects: 'GI upset, QT prolongation, hepatotoxicity.', uses: 'Respiratory infections, atypical pneumonia.' },
  { id: 'd6', name: 'Fluoroquinolones', category: 'Antibiotics', examples: ['Ciprofloxacin', 'Levofloxacin', 'Moxifloxacin'], mechanism: 'Inhibit DNA gyrase and topoisomerase IV, blocking DNA replication.', sideEffects: 'Tendon rupture, QT prolongation, neuropathy.', uses: 'UTI, respiratory infections, skin infections.' },
  { id: 'd7', name: 'Benzodiazepines', category: 'CNS', examples: ['Diazepam', 'Lorazepam', 'Alprazolam'], mechanism: 'Enhance GABA-A receptor activity, increasing inhibitory neurotransmission.', sideEffects: 'Sedation, dependence, respiratory depression.', uses: 'Anxiety, insomnia, seizures, alcohol withdrawal.' },
  { id: 'd8', name: 'SSRIs', category: 'CNS', examples: ['Fluoxetine', 'Sertraline', 'Escitalopram'], mechanism: 'Selectively inhibit serotonin reuptake in the synaptic cleft.', sideEffects: 'Nausea, sexual dysfunction, insomnia.', uses: 'Depression, anxiety, OCD, PTSD.' },
  { id: 'd9', name: 'Opioids', category: 'Analgesics', examples: ['Morphine', 'Codeine', 'Fentanyl'], mechanism: 'Bind mu-opioid receptors, modulating pain perception.', sideEffects: 'Respiratory depression, constipation, dependence.', uses: 'Moderate to severe pain management.' },
  { id: 'd10', name: 'NSAIDs', category: 'Analgesics', examples: ['Ibuprofen', 'Naproxen', 'Diclofenac'], mechanism: 'Inhibit COX enzymes, reducing prostaglandin synthesis.', sideEffects: 'GI bleeding, renal impairment, hypertension.', uses: 'Pain, inflammation, fever.' },
  { id: 'd11', name: 'Proton Pump Inhibitors', category: 'GI', examples: ['Omeprazole', 'Pantoprazole', 'Esomeprazole'], mechanism: 'Irreversibly inhibit H+/K+ ATPase in parietal cells.', sideEffects: 'Headache, B12 deficiency (long-term), fracture risk.', uses: 'GERD, peptic ulcers, H. pylori eradication.' },
  { id: 'd12', name: 'Corticosteroids', category: 'Anti-inflammatory', examples: ['Prednisone', 'Dexamethasone', 'Hydrocortisone'], mechanism: 'Bind glucocorticoid receptors, suppressing immune response and inflammation.', sideEffects: 'Weight gain, hyperglycemia, osteoporosis, immunosuppression.', uses: 'Inflammation, autoimmune disease, allergies.' },
  { id: 'd13', name: 'Antihistamines (H1)', category: 'Respiratory', examples: ['Cetirizine', 'Loratadine', 'Diphenhydramine'], mechanism: 'Block H1 histamine receptors, reducing allergic response.', sideEffects: 'Drowsiness (1st gen), dry mouth, dizziness.', uses: 'Allergies, urticaria, motion sickness.' },
  { id: 'd14', name: 'Biguanides', category: 'Endocrine', examples: ['Metformin'], mechanism: 'Decrease hepatic glucose production and insulin resistance.', sideEffects: 'GI upset, lactic acidosis (rare), B12 deficiency.', uses: 'Type 2 diabetes mellitus.' },
  { id: 'd15', name: 'Sulfonylureas', category: 'Endocrine', examples: ['Gliclazide', 'Glipizide', 'Glibenclamide'], mechanism: 'Stimulate pancreatic beta-cell insulin release.', sideEffects: 'Hypoglycemia, weight gain.', uses: 'Type 2 diabetes mellitus.' },
  { id: 'd16', name: 'Calcium Channel Blockers', category: 'Cardiovascular', examples: ['Amlodipine', 'Nifedipine', 'Verapamil'], mechanism: 'Block L-type calcium channels, reducing calcium influx.', sideEffects: 'Peripheral edema, headache, constipation.', uses: 'Hypertension, angina, arrhythmias.' },
];

// ===== Contact Info =====
export const contactInfo = {
  email: 'F251120@KOMAR.EDU.IQ',
  phone: '+9647501123090',
  university: 'Komar University of Science and Technology (KUST)',
  program: 'Pharmacy — Class of F25',
};
