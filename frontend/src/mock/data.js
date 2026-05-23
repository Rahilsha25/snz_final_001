// Mock data extracted from SNZ Education website
export const siteInfo = {
  name: "SNZ Education",
  tagline: "Unlock Your Global Future",
  email: "education.snz@gmail.com",
  phone: "+91 73839 02131",
  phoneRaw: "+917383902131",
  whatsapp: "https://wa.me/917383902131",
  address:
    "SNZ Education, 9/B, Madni Park Society, Salatia Rd, nr. AIM International School, Anand, Gujarat - 388001",
  hours: {
    weekdays: "Monday - Saturday\u00a0\u00a010:00 AM - 6:00 PM",
    sunday: "Sunday\u00a0\u00a0Closed",
  },
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "English Coaching", path: "/english-coaching" },
  { label: "Student Visa", path: "/student-visa" },
  { label: "Contact", path: "/contact" },
];

export const heroBadges = [
  { label: "IELTS" },
  { label: "PTE" },
  { label: "Spoken English" },
  { label: "Student Visa" },
];

export const aboutFeatures = [
  {
    title: "Personalized Coaching",
    desc: "Comprehensive trainings, Smart strategies, and practice sessions to help you achieve a high band score.",
  },
  {
    title: "Student Success",
    desc: "End-to-end guidance and transparent counseling for top international study destinations.",
  },
  {
    title: "Global Opportunities",
    desc: "Apply for your student visa, arrange accommodation, and book your flights to align with your study abroad dream.",
  },
];

export const services = [
  {
    tag: "Language Mastery",
    title: "IELTS / PTE / Spoken English",
    desc: "Expert coaching for IELTS, PTE, and spoken English with personalized training programs. Our comprehensive exam preparation focuses on building communication skills, confidence, and achieving your target scores.",
    cta: "View All Programs",
    path: "/english-coaching",
    icon: "GraduationCap",
  },
  {
    tag: "Study Abroad",
    title: "Student Visa",
    desc: "Complete study abroad guidance with end-to-end visa support. From counseling and university selection to application assistance and visa processing, we ensure a smooth journey to your dream destination.",
    cta: "Explore Visa Services",
    path: "/student-visa",
    icon: "Plane",
  },
  {
    tag: "Travel Abroad",
    title: "Visitor Visa",
    desc: "Complete travel and tourism guidance with end-to-end visa support. From itinerary planning and document curation to application assistance and embassy submission, we ensure a smooth journey to your dream destination.",
    cta: "Explore Destinations",
    path: "/contact",
    icon: "MapPinned",
  },
];

export const whyChoose = [
  {
    title: "Expert Mentors",
    desc: "Learn from experienced tutors and faculties dedicated to your success.",
    icon: "Users",
  },
  {
    title: "Personalized Guidance",
    desc: "Customized One-to-One counselling tailored to your education path, career, and goal.",
    icon: "Target",
  },
  {
    title: "100% Student Satisfaction",
    desc: "Track record of helping students achieve their academic and career aspirations.",
    icon: "Award",
  },
  {
    title: "Trusted Support",
    desc: "Comprehensive support system ensuring you're never alone on your educational journey.",
    icon: "ShieldCheck",
  },
];

export const destinations = [
  { name: "USA", code: "us", desc: "Student visa guidance for top universities across the United States." },
  { name: "United Kingdom", code: "gb", desc: "Student visa support for prestigious UK universities and Russell Group institutions." },
  { name: "Canada", code: "ca", desc: "Study Permit and PGWP pathway guidance for Canadian colleges and universities." },
  { name: "Australia", code: "au", desc: "Student visa support for Australia's Group of Eight and leading universities." },
  { name: "New Zealand", code: "nz", desc: "Student visa guidance for NZ universities known for quality and post-study work rights." },
  { name: "Europe", code: "eu", desc: "Study in Germany, France, Spain and more - affordable, world-class education." },
  { name: "Dubai / UAE", code: "ae", desc: "Student visa support for international university campuses across the UAE." },
  { name: "And More...", code: "globe", desc: "Russia, Singapore, and other rising destinations - talk to us for tailored advice." },
];

export const testimonials = [
  {
    name: "Amit Patel",
    initial: "A",
    tag: "IELTS Coaching",
    quote:
      "SNZ Education helped me achieve my dream IELTS score. The personalized coaching and expert guidance made all the difference.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    initial: "P",
    tag: "PTE Coaching",
    quote:
      "The tutors at SNZ Education are amazing! They helped me improve my grades significantly. The personalized attention and clear explanations helped me understand concepts better.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    initial: "R",
    tag: "Student Visa - USA",
    quote:
      "The visa counseling at SNZ Education was exceptional. They guided me through the entire process. Highly recommended!",
    rating: 5,
  },
];

export const coachingPrograms = [
  {
    tag: "Test Preparation",
    title: "IELTS",
    desc: "Comprehensive IELTS preparation covering Listening, Reading, Writing, and Speaking. Band-focused strategies, regular mock tests, and one-on-one feedback to help you achieve 7+ bands.",
    points: ["Academic & General Training", "Weekly mock tests", "Personalized speaking practice"],
    icon: "BookOpen",
  },
  {
    tag: "Test Preparation",
    title: "PTE Academic",
    desc: "Computer-based PTE coaching focused on AI scoring strategies. Master modules, time management, and key question patterns to crack 70+ scores with confidence.",
    points: ["AI-scoring techniques", "Section-wise understanding", "Real exam simulation"],
    icon: "Laptop",
  },
  {
    tag: "Fluency Building",
    title: "Spoken English",
    desc: "Build everyday English fluency, confidence, and a neutral accent. Perfect for students, professionals, and anyone preparing for interviews or social conversations.",
    points: ["Conversation practice", "Grammar & vocabulary", "Interview preparation"],
    icon: "MessageCircle",
  },
];

export const coachingBenefits = [
  { title: "Certified Trainers", desc: "Learn from trainers with years of experience and proven student results.", icon: "BadgeCheck" },
  { title: "Small Batches", desc: "Limited seats per batch for individual attention and faster progress.", icon: "Users" },
  { title: "Mock Tests", desc: "Regular timed mock tests with detailed analysis to track your improvement.", icon: "ClipboardCheck" },
  { title: "Result-Oriented", desc: "Proven track record of students achieving their target scores on first attempt.", icon: "TrendingUp" },
];

export const coachingSteps = [
  { num: "1", title: "Free Assessment", desc: "Take a diagnostic test to identify your current level and goals." },
  { num: "2", title: "Custom Plan", desc: "Get a personalized study plan tailored to your target score and timeline." },
  { num: "3", title: "Train & Practice", desc: "Live classes, practice sessions, and continuous feedback from mentors." },
  { num: "4", title: "Ace the Exam", desc: "Walk in confident, score high, and unlock your global opportunities." },
];

export const visaSupport = [
  { title: "Personalized Counseling", desc: "One-on-one sessions to understand your goals, strengths, and budget - then match you with the right country, course, and university.", icon: "MessagesSquare" },
  { title: "University Selection", desc: "Shortlist universities based on your profile, scholarships available, course ranking, and career outcomes. No guesswork - only data.", icon: "School" },
  { title: "Application Assistance", desc: "SOPs, LORs, resumes, and application forms - crafted, reviewed, and submitted by experts who know what admission officers want.", icon: "FileText" },
  { title: "Visa Filing", desc: "Complete documentation, financial proof, visa form filing, and embassy appointment scheduling - handled end-to-end by our team.", icon: "Stamp" },
  { title: "Interview Prep", desc: "Mock visa interviews, common question practice, and confidence coaching to help you ace your university and embassy interview with ease.", icon: "Mic" },
  { title: "Pre-Departure", desc: "Accommodation, forex, flight bookings, and pre-departure briefings - start your journey abroad fully prepared and stress-free.", icon: "Luggage" },
];

export const visaSteps = [
  { num: "1", title: "Free Counseling", desc: "Understand your goals and the best-fit destinations for you." },
  { num: "2", title: "University Shortlist", desc: "Curated list of universities matching your profile and budget." },
  { num: "3", title: "Apply & Admit", desc: "Application support and offer letter assistance from start to finish." },
  { num: "4", title: "Visa Approval", desc: "Complete visa filing, interview prep, and embassy coordination." },
  { num: "5", title: "Fly Abroad", desc: "Pre-departure briefing, accommodation, forex - fly with confidence." },
];

export const stats = [
  { value: "7+", label: "Countries Covered" },
  { value: "500+", label: "Students Guided" },
  { value: "98%", label: "Visa Success" },
  { value: "10+", label: "Years Experience" },
];
