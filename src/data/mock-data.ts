import { Test, Package, Branch, Doctor, Testimonial, BlogPost, InsurancePartner, ServiceCard } from '@/types';

export const tests: Test[] = [
  {
    id: 'cbc',
    name: 'Complete Blood Count (CBC)',
    price: 399,
    description: 'Comprehensive blood cell analysis to detect infections and blood disorders',
    duration: '2-3 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required', 'Wear loose sleeves'],
    reportTime: '24 hours',
    category: 'Hematology',
  },
  {
    id: 'lft',
    name: 'Liver Function Test (LFT)',
    price: 699,
    description: 'Assesses liver health and function through protein and enzyme analysis',
    duration: '2-3 hours',
    fasting: true,
    sample: 'Blood',
    preparation: ['8-12 hours fasting required', 'Avoid alcohol for 24 hours'],
    reportTime: '24 hours',
    category: 'Biochemistry',
  },
  {
    id: 'kft',
    name: 'Kidney Function Test (KFT)',
    price: 649,
    description: 'Evaluates kidney function through creatinine and urea measurement',
    duration: '2-3 hours',
    fasting: true,
    sample: 'Blood',
    preparation: ['8-12 hours fasting required', 'Drink plenty of water'],
    reportTime: '24 hours',
    category: 'Biochemistry',
  },
  {
    id: 'thyroid',
    name: 'Thyroid Profile',
    price: 599,
    description: 'Comprehensive thyroid function assessment',
    duration: '2-3 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required'],
    reportTime: '24 hours',
    category: 'Endocrinology',
  },
  {
    id: 'hba1c',
    name: 'HbA1c Test',
    price: 499,
    description: 'Measures average blood glucose levels over 3 months for diabetes screening',
    duration: '2-3 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required'],
    reportTime: '24 hours',
    category: 'Endocrinology',
  },
  {
    id: 'vitd',
    name: 'Vitamin D Test',
    price: 999,
    description: 'Assesses Vitamin D levels for bone health and immune function',
    duration: '2-3 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required'],
    reportTime: '24 hours',
    category: 'Biochemistry',
  },
  {
    id: 'vitb12',
    name: 'Vitamin B12 Test',
    price: 899,
    description: 'Detects B12 deficiency which can cause anemia and neurological issues',
    duration: '2-3 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required'],
    reportTime: '24 hours',
    category: 'Biochemistry',
  },
  {
    id: 'lipid',
    name: 'Lipid Profile',
    price: 799,
    description: 'Measures cholesterol and triglycerides for cardiovascular risk assessment',
    duration: '2-3 hours',
    fasting: true,
    sample: 'Blood',
    preparation: ['8-12 hours fasting required', 'Avoid fatty foods'],
    reportTime: '24 hours',
    category: 'Biochemistry',
  },
  {
    id: 'dengue',
    name: 'Dengue Test',
    price: 899,
    description: 'Detects dengue virus antibodies and antigens',
    duration: '2-3 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required'],
    reportTime: '24 hours',
    category: 'Immunology',
  },
  {
    id: 'malaria',
    name: 'Malaria Test',
    price: 699,
    description: 'Blood smear examination to detect malaria parasites',
    duration: '2-3 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required'],
    reportTime: '24 hours',
    category: 'Parasitology',
  },
  {
    id: 'covid',
    name: 'COVID-19 Test (RT-PCR)',
    price: 499,
    description: 'Polymerase chain reaction test for COVID-19 virus detection',
    duration: '1-2 hours',
    fasting: false,
    sample: 'Throat/Nasal Swab',
    preparation: ['No eating or drinking 30 minutes before'],
    reportTime: '24 hours',
    category: 'Virology',
  },
  {
    id: 'allergy',
    name: 'Allergy Panel Test',
    price: 2499,
    description: 'Comprehensive testing for common allergens',
    duration: '3-4 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['Avoid antihistamines for 3 days'],
    reportTime: '2-3 days',
    category: 'Immunology',
  },
  {
    id: 'pregnancy',
    name: 'Pregnancy Test (Beta HCG)',
    price: 399,
    description: 'Blood test to confirm pregnancy and measure hormone levels',
    duration: '1-2 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required'],
    reportTime: '24 hours',
    category: 'Biochemistry',
  },
  {
    id: 'bloodsugar',
    name: 'Blood Sugar (Fasting & PP)',
    price: 199,
    description: 'Measures glucose levels for diabetes screening and monitoring',
    duration: '1-2 hours',
    fasting: true,
    sample: 'Blood',
    preparation: ['8-12 hours fasting required'],
    reportTime: '24 hours',
    category: 'Biochemistry',
  },
  {
    id: 'urine',
    name: 'Urine Routine Test',
    price: 299,
    description: 'Comprehensive urinalysis for kidney and urinary tract assessment',
    duration: '2-3 hours',
    fasting: false,
    sample: 'Urine',
    preparation: ['Morning urine sample preferred'],
    reportTime: '24 hours',
    category: 'Urinalysis',
  },
  {
    id: 'stool',
    name: 'Stool Examination',
    price: 399,
    description: 'Analyzes stool for parasites, bacteria, and digestive health',
    duration: '3-4 hours',
    fasting: false,
    sample: 'Stool',
    preparation: ['Collect fresh sample in container'],
    reportTime: '24-48 hours',
    category: 'Parasitology',
  },
  {
    id: 'esr',
    name: 'ESR (Erythrocyte Sedimentation Rate)',
    price: 249,
    description: 'Measures inflammation and immune response in the body',
    duration: '1-2 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required'],
    reportTime: '24 hours',
    category: 'Hematology',
  },
  {
    id: 'crp',
    name: 'CRP (C-Reactive Protein)',
    price: 499,
    description: 'High-sensitivity test to detect inflammation and infection',
    duration: '2-3 hours',
    fasting: false,
    sample: 'Blood',
    preparation: ['No special preparation required'],
    reportTime: '24 hours',
    category: 'Immunology',
  },
  {
    id: 'iron',
    name: 'Iron Studies',
    price: 899,
    description: 'Complete iron metabolism profile for anemia diagnosis',
    duration: '2-3 hours',
    fasting: true,
    sample: 'Blood',
    preparation: ['8-12 hours fasting required'],
    reportTime: '24 hours',
    category: 'Biochemistry',
  },
  {
    id: 'cancer',
    name: 'Cancer Screening Panel',
    price: 4999,
    description: 'Comprehensive cancer markers and tumor assessment panel',
    duration: '4-5 hours',
    fasting: true,
    sample: 'Blood',
    preparation: ['8-12 hours fasting required'],
    reportTime: '2-3 days',
    category: 'Oncology',
  },
];

export const categories = Array.from(new Set(tests.map((test) => test.category)));

export const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic Health Checkup',
    price: 999,
    description: 'Essential tests for routine health monitoring',
    tests: ['CBC', 'Blood Sugar', 'Blood Pressure'],
    validity: '1 year',
  },
  {
    id: 'advanced',
    name: 'Advanced Health Checkup',
    price: 2499,
    description: 'Comprehensive health assessment including organ function',
    tests: ['CBC', 'LFT', 'KFT', 'Thyroid', 'Lipid Profile'],
    discount: 10,
    validity: '1 year',
  },
  {
    id: 'executive',
    name: 'Executive Health Package',
    price: 4999,
    description: 'Premium full-body health examination with advanced tests',
    tests: ['CBC', 'LFT', 'KFT', 'Thyroid', 'Lipid Profile', 'Vitamin D', 'HbA1c', 'Iron Studies'],
    discount: 15,
    validity: '1 year',
  },
  {
    id: 'senior',
    name: 'Senior Citizen Package',
    price: 3499,
    description: 'Specialized tests for elderly health monitoring',
    tests: ['CBC', 'LFT', 'KFT', 'Thyroid', 'Lipid Profile', 'Calcium', 'Bone Health'],
    validity: '1 year',
  },
  {
    id: 'women',
    name: "Women's Wellness Package",
    price: 2999,
    description: 'Comprehensive health tests specific to women wellness',
    tests: ['CBC', 'Thyroid', 'Lipid Profile', 'Pregnancy Test', 'Vitamin D', 'Iron Studies'],
    validity: '1 year',
  },
  {
    id: 'diabetes',
    name: 'Diabetes Package',
    price: 1499,
    description: 'Complete diabetes screening and monitoring package',
    tests: ['Blood Sugar', 'HbA1c', 'Lipid Profile', 'KFT', 'Urine Routine'],
    validity: '1 year',
  },
  {
    id: 'heart',
    name: 'Heart Care Package',
    price: 1999,
    description: 'Specialized tests for cardiovascular health assessment',
    tests: ['Lipid Profile', 'Blood Sugar', 'Blood Pressure', 'Homocysteine', 'CRP'],
    validity: '1 year',
  },
];

export const branches: Branch[] = [
  {
    id: 'pune',
    name: 'Pune Branch',
    address: '101 Healthcare Plaza, MG Road',
    city: 'Pune',
    phone: '+91 98765 43210',
    hours: 'Mon-Sun: 7:00 AM - 6:00 PM',
    coordinates: { lat: 18.5204, lng: 73.8567 },
  },
  {
    id: 'mumbai',
    name: 'Mumbai Branch',
    address: '456 Medical Center, Bandra West',
    city: 'Mumbai',
    phone: '+91 98765 43212',
    hours: 'Mon-Sun: 6:30 AM - 8:00 PM',
    coordinates: { lat: 19.0596, lng: 72.8295 },
  },
  {
    id: 'nashik',
    name: 'Nashik Branch',
    address: '789 Health Hub, Sadar Bazar',
    city: 'Nashik',
    phone: '+91 98765 43213',
    hours: 'Mon-Sun: 7:00 AM - 5:30 PM',
    coordinates: { lat: 19.9975, lng: 73.7898 },
  },
  {
    id: 'nagpur',
    name: 'Nagpur Branch',
    address: '321 Diagnostic Center, Sitabuldi',
    city: 'Nagpur',
    phone: '+91 98765 43214',
    hours: 'Mon-Sun: 7:00 AM - 6:00 PM',
    coordinates: { lat: 21.1546, lng: 79.0882 },
  },
  {
    id: 'aurangabad',
    name: 'Aurangabad Branch',
    address: '654 Care Center, Cidco Area',
    city: 'Aurangabad',
    phone: '+91 98765 43215',
    hours: 'Mon-Sun: 7:00 AM - 5:00 PM',
    coordinates: { lat: 19.8762, lng: 75.3433 },
  },
];

export const doctors: Doctor[] = [
  {
    id: 'doc1',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Pathology & Lab Medicine',
    experience: 15,
    qualification: 'MD, PGDBM',
    image: 'Doctor',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@medicarediagnostics.in',
  },
  {
    id: 'doc2',
    name: 'Dr. Priya Sharma',
    specialization: 'Hematology',
    experience: 12,
    qualification: 'MD, DM Hematology',
    image: 'Doctor',
    phone: '+91 98765 43210',
    email: 'priya.sharma@medicarediagnostics.in',
  },
  {
    id: 'doc3',
    name: 'Dr. Amit Patel',
    specialization: 'Clinical Biochemistry',
    experience: 10,
    qualification: 'MD, PGDBM',
    image: 'Doctor',
    phone: '+91 98765 43210',
    email: 'amit.patel@medicarediagnostics.in',
  },
  {
    id: 'doc4',
    name: 'Dr. Neha Verma',
    specialization: 'Microbiology',
    experience: 8,
    qualification: 'MD Microbiology',
    image: 'Doctor',
    phone: '+91 98765 43210',
    email: 'neha.verma@medicarediagnostics.in',
  },
  {
    id: 'doc5',
    name: 'Dr. Vikram Singh',
    specialization: 'Immunology',
    experience: 14,
    qualification: 'PhD, MD',
    image: 'Doctor',
    phone: '+91 98765 43210',
    email: 'vikram.singh@medicarediagnostics.in',
  },
  {
    id: 'doc6',
    name: 'Dr. Anjali Gupta',
    specialization: 'Genetic Pathology',
    experience: 11,
    qualification: 'MD, DM',
    image: 'Doctor',
    phone: '+91 98765 43210',
    email: 'anjali.gupta@medicarediagnostics.in',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh Desai',
    rating: 5,
    comment: 'Excellent service and quick reports. The staff was very professional and courteous.',
    date: '2024-01-15',
    city: 'Pune',
  },
  {
    id: '2',
    name: 'Sneha Iyer',
    rating: 5,
    comment: 'Home collection service was very convenient. Highly recommended!',
    date: '2024-01-10',
    city: 'Mumbai',
  },
  {
    id: '3',
    name: 'Arjun Reddy',
    rating: 4,
    comment: 'Good quality tests with accurate reports. Will definitely come back.',
    date: '2024-01-08',
    city: 'Nagpur',
  },
  {
    id: '4',
    name: 'Priya Nair',
    rating: 5,
    comment: 'Very clean facilities and friendly staff. Reports delivered on time.',
    date: '2024-01-05',
    city: 'Pune',
  },
  {
    id: '5',
    name: 'Rohit Sharma',
    rating: 5,
    comment: 'Affordable prices and reliable results. Best diagnostic center in the city.',
    date: '2024-01-03',
    city: 'Nashik',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Complete Blood Count (CBC) Test',
    slug: 'understanding-cbc-test',
    excerpt: 'Learn what a CBC test measures and why it is important for your health.',
    content: `A Complete Blood Count (CBC) is one of the most common blood tests. It measures the levels of red blood cells, white blood cells, and platelets in your blood.

Red blood cells carry oxygen throughout your body. White blood cells help fight infections. Platelets help with blood clotting.

A CBC test can help detect:
- Anemia
- Infections
- Blood disorders
- Leukemia

The test requires just a small blood sample and results are usually available within 24 hours.`,
    author: 'Dr. Rajesh Kumar',
    date: '2024-01-20',
    category: 'Health Tips',
    image: 'Health',
    readTime: 5,
  },
  {
    id: '2',
    title: 'Importance of Regular Health Checkups',
    slug: 'importance-regular-checkups',
    excerpt: 'Why regular health checkups can save your life and detect diseases early.',
    content: `Regular health checkups are crucial for maintaining good health. They help detect diseases in their early stages when treatment is most effective.

Benefits of regular checkups:
- Early disease detection
- Prevention of health complications
- Better health management
- Peace of mind

It is recommended to have at least one comprehensive health checkup annually. If you have any risk factors or family history of diseases, more frequent checkups may be needed.`,
    author: 'Dr. Priya Sharma',
    date: '2024-01-18',
    category: 'Health Awareness',
    image: 'Lab',
    readTime: 6,
  },
  {
    id: '3',
    title: 'Thyroid Health: What You Need to Know',
    slug: 'thyroid-health-guide',
    excerpt: 'Complete guide to thyroid health, common disorders, and testing.',
    content: `The thyroid is a small gland that plays a vital role in regulating your metabolism and body temperature.

Common thyroid disorders:
- Hypothyroidism (underactive thyroid)
- Hyperthyroidism (overactive thyroid)
- Thyroid nodules
- Thyroiditis

A thyroid profile test includes TSH, T3, and T4 measurements. If you experience fatigue, weight changes, or mood swings, consult your doctor for thyroid testing.`,
    author: 'Dr. Rajesh Kumar',
    date: '2024-01-15',
    category: 'Disease Information',
    image: 'Test',
    readTime: 7,
  },
  {
    id: '4',
    title: 'Managing Diabetes with Regular Testing',
    slug: 'diabetes-management-testing',
    excerpt: 'How regular testing helps in diabetes management and prevention.',
    content: `Diabetes is a serious health condition that requires regular monitoring. The HbA1c test is particularly important as it shows your average blood sugar levels over the past 3 months.

Key tests for diabetes management:
- Fasting blood sugar
- HbA1c test
- Random blood sugar
- Glucose tolerance test

Regular testing helps in:
- Monitoring disease progression
- Adjusting medication dosage
- Preventing complications
- Improving overall health outcomes

Aim for an HbA1c level below 7% for optimal diabetes control.`,
    author: 'Dr. Amit Patel',
    date: '2024-01-12',
    category: 'Disease Management',
    image: 'Care',
    readTime: 8,
  },
  {
    id: '5',
    title: 'Vitamin D Deficiency: Silent Health Threat',
    slug: 'vitamin-d-deficiency',
    excerpt: 'Understanding vitamin D deficiency and its impact on your health.',
    content: `Vitamin D deficiency is increasingly common, especially among people who live in areas with limited sunlight or spend most of their time indoors.

Symptoms of vitamin D deficiency:
- Fatigue and weakness
- Bone pain
- Muscle cramps
- Depression and mood changes

Vitamin D is essential for:
- Calcium absorption
- Bone health
- Immune function
- Mental health

It is recommended to maintain vitamin D levels above 30 ng/mL. Regular vitamin D testing is important, especially for people at higher risk.`,
    author: 'Dr. Priya Sharma',
    date: '2024-01-10',
    category: 'Nutrition',
    image: 'Vitamin D',
    readTime: 6,
  },
];

export const insurancePartners: InsurancePartner[] = [
  {
    id: '1',
    name: 'Star Health Insurance',
    logo: 'Insurer',
    coverageTypes: ['Health Insurance', 'Cashless Service'],
  },
  {
    id: '2',
    name: 'Apollo Munich Health Insurance',
    logo: 'Insurer',
    coverageTypes: ['Health Insurance', 'Wellness Programs'],
  },
  {
    id: '3',
    name: 'ICICI Lombard',
    logo: 'Insurer',
    coverageTypes: ['Health Insurance', 'Group Health'],
  },
  {
    id: '4',
    name: 'HDFC ERGO',
    logo: 'Insurer',
    coverageTypes: ['Health Insurance', 'Individual Plans'],
  },
  {
    id: '5',
    name: 'Bharti AXA',
    logo: 'Insurer',
    coverageTypes: ['Health Insurance', 'Corporate Health'],
  },
  {
    id: '6',
    name: 'United India Insurance',
    logo: 'Insurer',
    coverageTypes: ['Government Insurance', 'Health Coverage'],
  },
];

export const services: ServiceCard[] = [
  {
    id: '1',
    title: 'Home Sample Collection',
    description: 'Convenient blood sample collection at your doorstep',
    icon: 'Home',
    features: ['Same day collection', 'Professional phlebotomists', 'Safe collection methods'],
  },
  {
    id: '2',
    title: 'Quick Reports',
    description: 'Fast and accurate laboratory test results',
    icon: 'Reports',
    features: ['24-hour turnaround', 'Digital reports', 'Doctor consultation'],
  },
  {
    id: '3',
    title: 'Expert Analysis',
    description: 'Reports analyzed by experienced pathologists',
    icon: 'Doctor',
    features: ['Experienced doctors', 'Quality assurance', 'ISO certified'],
  },
  {
    id: '4',
    title: 'Affordable Pricing',
    description: 'Transparent and competitive pricing on all tests',
    icon: 'Pricing',
    features: ['No hidden charges', 'Insurance accepted', 'Special packages'],
  },
];
