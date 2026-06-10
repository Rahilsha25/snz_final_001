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
  { label: "About Us", path: "/about" },
  { label: "English Coaching", path: "/english-coaching" },
  { label: "Student Visa", path: "/student-visa" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

// ---------------------------------------------------------------
// PLACEHOLDER FOUNDER DATA - replace names/bios/photos below
// ---------------------------------------------------------------
export const founders = [
  {
    name: "Mr. Sohel Zaveri",
    role: "Founder & CEO",
    bio: "With years of experience guiding aspiring students abroad, Sohel founded SNZ Education to bring world-class study-abroad counselling to Anand. He personally mentors students on choosing the right destination, course, and university.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    socials: { linkedin: "#", email: "education.snz@gmail.com" },
    highlights: [
      "10+ years in education consulting",
      "500+ students placed globally",
      "Expert in visa policy & SOPs",
    ],
  },
  {
    name: "Mrs. Naseem Zaveri",
    role: "Co-Founder & Head of Coaching",
    bio: "Naseem leads the IELTS, PTE, and Spoken English programs at SNZ Education. A certified trainer with a passion for teaching, she has helped hundreds of students achieve their target band scores on the first attempt.",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    socials: { linkedin: "#", email: "education.snz@gmail.com" },
    highlights: [
      "Certified IELTS & PTE trainer",
      "Specialist in speaking & writing modules",
      "1:1 personalized coaching approach",
    ],
  },
];

export const milestones = [
  { year: "2014", title: "Journey began", desc: "SNZ Education founded in Anand with a vision to make study-abroad accessible." },
  { year: "2017", title: "100+ students", desc: "Crossed our first century of successful student placements abroad." },
  { year: "2020", title: "Online coaching", desc: "Launched dedicated IELTS / PTE online coaching with mock platforms." },
  { year: "2024", title: "7+ countries", desc: "Active visa & admission support across USA, UK, Canada, AUS, NZ, Europe, Dubai." },
];

// Photo testimonials (replace with real students)
export const photoTestimonials = [
  {
    name: "Amit Patel",
    tag: "IELTS Coaching",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    quote: "SNZ Education helped me achieve my dream IELTS score. The personalized coaching and expert guidance made all the difference.",
    rating: 5,
    country: "in",
  },
  {
    name: "Priya Sharma",
    tag: "PTE Coaching",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote: "The tutors at SNZ Education are amazing! They helped me improve my grades significantly. The personalized attention and clear explanations helped me understand concepts better.",
    rating: 5,
    country: "in",
  },
  {
    name: "Rahul Mehta",
    tag: "Student Visa - USA",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "The visa counseling at SNZ Education was exceptional. They guided me through the entire process. Highly recommended!",
    rating: 5,
    country: "us",
  },
  {
    name: "Sneha Desai",
    tag: "Student Visa - Canada",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    quote: "From shortlisting universities to getting my study permit, SNZ team supported me at every step. I am now studying in Toronto.",
    rating: 5,
    country: "ca",
  },
  {
    name: "Karan Shah",
    tag: "IELTS - 8 Band",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote: "I scored 8 bands in IELTS thanks to SNZ's mock tests and writing feedback. The trainers are super dedicated.",
    rating: 5,
    country: "in",
  },
  {
    name: "Aisha Khan",
    tag: "Student Visa - UK",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    quote: "Thank you SNZ Education for making my UK student visa process seamless. The application support was brilliant.",
    rating: 5,
    country: "gb",
  },
];

// ---------------------------------------------------------------
// Vertical (9:16) "Reels-style" video testimonials.
// Replace `videoUrl` with your self-hosted MP4 (portrait orientation).
// You can also host MP4s in /public/videos and reference them as
// "/videos/student-1.mp4" — paths are relative thanks to homepage:"."
// ---------------------------------------------------------------
export const videoTestimonials = [
  {
    name: "Maharshi Joshi",
    tag: "New Zealand",
    location: "Auckland",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    summary: "SNZ Education made my NZ student visa journey incredibly smooth.",
    country: "nz",
  },
  {
    name: "Mariya Vahora",
    tag: "Canada Study Permit",
    location: "Toronto",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
    summary: "End-to-end Canada study permit journey with SNZ Education.",
    country: "ca",
  },
  {
    name: "Sahil Makwana",
    tag: "UK Student Visa",
    location: "London",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80",
    summary: "Cracked IELTS and landed UK university admission with SNZ.",
    country: "gb",
  },
  {
    name: "Nihir Dodiya",
    tag: "Australia Student Visa",
    location: "Melbourne",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    poster:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
    summary: "From Anand to Melbourne — couldn't have done it without SNZ.",
    country: "au",
  },
  {
    name: "Sonam Kumari",
    tag: "NZ Student Visa",
    location: "Wellington",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    poster:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    summary: "Personalized assistance through every step of my visa process.",
    country: "nz",
  },
  {
    name: "Sahil Shaikh",
    tag: "UK Student Visa",
    location: "Manchester",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    poster:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    summary: "SNZ helped me find the best university in the UK.",
    country: "gb",
  },
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
