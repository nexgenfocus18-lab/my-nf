import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  GraduationCap, 
  Cpu, 
  Users, 
  Star, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Sparkles,
  Target,
  Award,
  Code,
  Download,
  Send,
  Clock
} from "lucide-react";

// Logo component with graceful fallback
const Logo = () => {
  const [loadError, setLoadError] = useState(false);
  return (
    <div className="flex items-center gap-3">
      {!loadError ? (
        <img
          src="/IG Logo.png"
          alt="Nexgen Focus Logo"
          className="h-9 w-auto select-none"
          onError={() => setLoadError(true)}
        />
      ) : (
        <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal" />
      )}
      <div className="text-lg font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
          Nexgen Focus
        </span>
      </div>
    </div>
  );
};

// Reusable gradient button
const CTAButton = ({ children, href, onClick, className = "" }: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) => {
  const buttonClass = `group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(20,184,198,0.55)] transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_18px_40px_-12px_rgba(20,184,198,0.65)] ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
};

// Download button component
const DownloadButton = ({ className = "" }: { className?: string }) => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/nexgen-brochure.pdf';
    link.download = 'Nexgen-Focus-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-200 hover:bg-white/20 ${className}`}
    >
      <Download className="size-4" />
      Download Brochure
    </button>
  );
};

// Top gradient aura
const GradientGlow = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] ${className}`}>
    <div className="absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal opacity-30 blur-3xl"/>
  </div>
);

// Section divider
const SectionDivider = () => (
  <div className="relative mx-auto my-20 h-px w-full max-w-6xl overflow-visible">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"/>
    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal shadow-[0_0_30px_8px_rgba(20,184,198,0.35)]"/>
  </div>
);

// Navigation components
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">
    {children}
  </a>
);

// Stat card component
const Stat = ({ icon: Icon, label, value }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
    <div className="rounded-xl bg-gradient-to-tr from-brand-dark/60 via-brand-medium/60 to-brand-teal/60 p-2 text-white shadow-inner">
      <Icon className="size-5" />
    </div>
    <div>
      <div className="text-lg font-semibold text-white/90">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  </div>
);

// Feature card component
const FeatureCard = ({ icon: Icon, title, description }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
  >
    <div className="mx-auto mb-4 w-fit rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3">
      <Icon className="size-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-white/70">{description}</p>
  </motion.div>
);

// Course card component
const CourseCard = ({ 
  icon: Icon, 
  title, 
  price, 
  bullets, 
  cta, 
  isPopular = false 
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  price: string;
  bullets: string[];
  cta: string;
  isPopular?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className={`group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl ${
      isPopular ? 'animate-glow-pulse' : ''
    }`}
  >
    {isPopular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
        <div className="rounded-full bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal px-4 py-2 text-sm font-semibold text-white shadow-lg whitespace-nowrap">
          ⭐ MOST POPULAR
        </div>
      </div>
    )}
    
    <div className="mb-5 flex items-center gap-3">
      <div className="rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 text-white">
        <Icon className="size-6" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
    </div>
    <div className="mb-4 text-3xl font-bold text-white">₹{price}</div>
    <ul className="mb-6 space-y-3 text-sm text-white/75">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex items-start gap-2">
          <Sparkles className="mt-0.5 size-4 text-brand-teal" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
    <div className="space-y-3">
      <CTAButton href="#contact" className="w-full justify-center">
        {cta}
      </CTAButton>
      <DownloadButton className="w-full" />
    </div>
    <div
      className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: "radial-gradient(800px_200px_at_50%_-10%,rgba(20,184,198,0.18),transparent)" }}
    />
  </motion.div>
);

// Testimonial component
const TestimonialSlide = ({ quote, name, role }: {
  quote: string;
  name: string;
  role: string;
}) => (
  <div className="mx-auto max-w-3xl text-center">
    <div className="mb-6 flex justify-center">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="size-5 text-teal-300" />
      ))}
    </div>
    <p className="text-xl leading-relaxed text-white/90">"{quote}"</p>
    <p className="mt-6 text-white/70">{name} • {role}</p>
  </div>
);

// Event card component
const EventCard = ({ title, date, time, location, type }: {
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
  >
    <div className="mb-3 text-lg font-semibold text-white">{title}</div>
    <div className="space-y-2 text-sm text-white/70">
      <div className="flex items-center gap-2">
        <Calendar className="size-4" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="size-4" />
        <span>{time}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="size-4" />
        <span>{location}</span>
      </div>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{type}</span>
      <CTAButton href="#contact">Register Now</CTAButton>
    </div>
  </motion.div>
);

// Mentor card component
const MentorCard = ({ 
  name, 
  role, 
  experience, 
  expertise, 
  icon: Icon 
}: {
  name: string;
  role: string;
  experience: string;
  expertise: string[];
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
  >
    <div className="mb-4 flex items-center gap-4">
      <div className="rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3">
        <Icon className="size-8 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-brand-teal">{role}</p>
      </div>
    </div>
    
    <p className="mb-4 text-sm text-white/70">{experience}</p>
    
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-white/90">Expertise:</h4>
      <div className="flex flex-wrap gap-2">
        {expertise.map((skill, i) => (
          <span 
            key={i} 
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Social icon component
const Social = ({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) => (
  <a href="#" className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal text-white shadow-[0_10px_30px_-10px_rgba(20,184,198,0.55)] transition hover:scale-105">
    <Icon className="size-4" />
  </a>
);

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);

  // Testimonials data and carousel state
  const testimonials = [
    {
      quote: "I took the Python course as a complete beginner and now I am leading AI initiatives at my company. The mentor support was exceptional!",
      name: "Anita Patel",
      role: "Product Manager at Flipkart",
    },
    {
      quote: "The 3 day training gave our team a practical foundation for ML projects. Great balance of theory and hands on.",
      name: "Rohit Sharma",
      role: "Data Lead at Swasth Health",
    },
    {
      quote: "Amazing value for money. Clear instruction, real projects, and a friendly community.",
      name: "Neha Verma",
      role: "CS Undergraduate",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Contact form handling
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-[#0A0A0B] via-[#0B0C0E] to-[#0E0F12] text-white antialiased">
      {/* Top gradient aura */}
      <GradientGlow />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <Logo />
          </a>
          <nav className="hidden items-center gap-2 md:flex">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#programs">Programs</NavLink>
            <NavLink href="#professionals">Professionals</NavLink>
            <NavLink href="#events">Events</NavLink>
          </nav>
          <CTAButton href="#contact">Get Started</CTAButton>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <motion.div style={{ y }} className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="h-full w-full bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(20,184,198,0.2),transparent)]"/>
        </motion.div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Learn <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">AI, Coding</span> & Future Skills
              <span className="block text-white/80">Affordable for Everyone</span>
            </motion.h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Empowering students and professionals with live training and real world projects. Join thousands building their future with cutting edge skills.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="#contact">Join 1 Day AI Masterclass - ₹49</CTAButton>
              <CTAButton href="#contact">Register for 3 Day Training - ₹249</CTAButton>
              <CTAButton href="#contact">Enroll in Python + Vibe Coding - ₹2,499</CTAButton>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-4">
                <Stat icon={GraduationCap} value="10,000+" label="Students Trained"/>
                <Stat icon={Users} value="500+" label="Companies Hiring"/>
                <Stat icon={Cpu} value="95%" label="Success Rate"/>
                <Stat icon={Sparkles} value="24/7" label="Support"/>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{background:"radial-gradient(600px_150px_at_50%_-20%,rgba(20,184,198,0.15),transparent)"}}/>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              About <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">Nexgen Focus</span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              We are bridging the skills gap in technology by providing practical, industry-relevant training programs. Our mission is to make quality tech education accessible and affordable for everyone, from students to working professionals.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard 
              icon={Target} 
              title="Practical Learning" 
              description="Real-world projects and hands-on experience to build job-ready skills that employers value." 
            />
            <FeatureCard 
              icon={Users} 
              title="Expert Mentors" 
              description="Learn from industry professionals with years of experience in AI, development, and data science." 
            />
            <FeatureCard 
              icon={Award} 
              title="Affordable Pricing" 
              description="Quality education shouldn't break the bank. We offer competitive pricing for maximum value." 
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Mentors Section */}
      <section id="mentors" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Meet Our <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">Expert Mentors</span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Learn from industry professionals with years of experience in AI, software development, and data science. Our mentors are committed to your success.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <MentorCard
              icon={Users}
              name="Industry Expert"
              role="Senior AI Engineer"
              experience="10+ years experience in machine learning and AI development at leading tech companies."
              expertise={["Machine Learning", "Python", "TensorFlow", "Data Science"]}
            />
            <MentorCard
              icon={Code}
              name="Development Mentor"
              role="Full Stack Developer"
              experience="8+ years building scalable web applications and mentoring developers."
              expertise={["React", "Node.js", "JavaScript", "System Design"]}
            />
            <MentorCard
              icon={Target}
              name="Career Guide"
              role="Tech Career Coach"
              experience="5+ years helping professionals transition into tech roles with 95% success rate."
              expertise={["Career Planning", "Interview Prep", "Skill Assessment", "Industry Insights"]}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Programs Section */}
      <section id="programs" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Our <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">Programs</span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Choose from our carefully designed programs that cater to different learning needs and career goals.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <CourseCard
              icon={Calendar}
              title="1 Day AI Masterclass"
              price="49"
              bullets={[
                "Introduction to AI and Machine Learning",
                "Hands-on with popular AI tools",
                "Career guidance and roadmap",
                "Live Q&A with industry experts",
                "Certificate of completion"
              ]}
              cta="Get Started Now"
            />
            <CourseCard
              icon={Calendar}
              title="3 Day Training"
              price="249"
              bullets={[
                "Comprehensive AI and ML fundamentals",
                "Build 3 real-world projects",
                "Python programming basics",
                "Data analysis and visualization",
                "Industry mentor support",
                "Job placement assistance"
              ]}
              cta="Register Now"
              isPopular={true}
            />
            <CourseCard
              icon={Code}
              title="Python + Vibe Coding"
              price="2,499"
              bullets={[
                "Complete Python mastery program",
                "Web development with frameworks",
                "Database management and APIs",
                "Portfolio projects and deployment",
                "1-on-1 mentoring sessions",
                "Lifetime access to resources",
                "Job guarantee program"
              ]}
              cta="Enroll Now"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials Section */}
      <section id="professionals" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              What Our <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">Students Say</span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Join thousands of professionals who have transformed their careers with our training programs.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <TestimonialSlide {...testimonials[currentSlide]} />
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentSlide(i)} 
                  className={`h-2 w-6 rounded-full transition ${
                    i === currentSlide 
                      ? "bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal" 
                      : "bg-white/20 hover:bg-white/40"
                  }`} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Events Section */}
      <section id="events" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Upcoming <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">Events</span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Join our live workshops, masterclasses, and networking events to accelerate your learning journey.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="AI Workshop for Beginners"
              date="January 25, 2024"
              time="10:00 AM - 4:00 PM"
              location="Online"
              type="Workshop"
            />
            <EventCard
              title="Python Bootcamp"
              date="February 1, 2024"
              time="9:00 AM - 6:00 PM"
              location="Bangalore"
              type="Bootcamp"
            />
            <EventCard
              title="Career Guidance Webinar"
              date="February 8, 2024"
              time="7:00 PM - 8:30 PM"
              location="Online"
              type="Webinar"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Get <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">Started Today</span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Ready to transform your career? Contact us to learn more about our programs and get personalized guidance.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="mb-6 text-2xl font-semibold text-white">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80" htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80" htmlFor="program">Program of Interest</label>
                  <select 
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                  >
                    <option value="">Select a program</option>
                    <option value="1-day-ai">1 Day AI Masterclass</option>
                    <option value="3-day-training">3 Day Training</option>
                    <option value="python-coding">Python + Vibe Coding</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                    placeholder="Tell us about your goals and how we can help"
                  />
                </div>
                <button 
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(20,184,198,0.55)] transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_18px_40px_-12px_rgba(20,184,198,0.65)]"
                >
                  Send Message
                  <Send className="size-4" />
                </button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="mb-6 text-2xl font-semibold text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-white/70">
                    <Phone className="size-5 mt-0.5 text-brand-teal" />
                    <div>
                      <div className="font-medium text-white/90">Phone</div>
                      <div>+91 9876543210</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-white/70">
                    <Mail className="size-5 mt-0.5 text-brand-teal" />
                    <div>
                      <div className="font-medium text-white/90">Email</div>
                      <div>contact@nexgenfocus.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-white/70">
                    <MapPin className="size-5 mt-0.5 text-brand-teal" />
                    <div>
                      <div className="font-medium text-white/90">Address</div>
                      <div>Bangalore, Karnataka, India</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="mb-6 text-2xl font-semibold text-white">Follow Us</h3>
                <div className="flex gap-4">
                  <Social icon={Linkedin} />
                  <Social icon={Facebook} />
                  <Social icon={Twitter} />
                  <Social icon={Instagram} />
                  <Social icon={Youtube} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/20 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Footer Brand */}
            <div className="md:col-span-1">
              <Logo />
              <p className="mt-4 text-sm text-white/70">
                Empowering the next generation with cutting-edge skills in AI, coding, and future technologies.
              </p>
            </div>
            
            {/* Footer Links */}
            <div>
              <div className="mb-3 text-base font-semibold text-white/90">Programs</div>
              <div className="space-y-2">
                <a href="#programs" className="block py-1 text-sm text-white/70 transition hover:text-white">1 Day AI Masterclass</a>
                <a href="#programs" className="block py-1 text-sm text-white/70 transition hover:text-white">3 Day Training</a>
                <a href="#programs" className="block py-1 text-sm text-white/70 transition hover:text-white">Python + Vibe Coding</a>
                <a href="#events" className="block py-1 text-sm text-white/70 transition hover:text-white">Workshops</a>
              </div>
            </div>
            
            <div>
              <div className="mb-3 text-base font-semibold text-white/90">Company</div>
              <div className="space-y-2">
                <a href="#about" className="block py-1 text-sm text-white/70 transition hover:text-white">About Us</a>
                <a href="#professionals" className="block py-1 text-sm text-white/70 transition hover:text-white">Testimonials</a>
                <a href="#events" className="block py-1 text-sm text-white/70 transition hover:text-white">Events</a>
                <a href="#contact" className="block py-1 text-sm text-white/70 transition hover:text-white">Contact</a>
              </div>
            </div>
            
            <div>
              <div className="mb-3 text-base font-semibold text-white/90">Support</div>
              <div className="space-y-2">
                <a href="#" className="block py-1 text-sm text-white/70 transition hover:text-white">Help Center</a>
                <a href="#" className="block py-1 text-sm text-white/70 transition hover:text-white">Privacy Policy</a>
                <a href="#" className="block py-1 text-sm text-white/70 transition hover:text-white">Terms of Service</a>
                <a href="#" className="block py-1 text-sm text-white/70 transition hover:text-white">Refund Policy</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <p className="text-sm text-white/60">
                © 2024 Nexgen Focus. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Social icon={Linkedin} />
                <Social icon={Facebook} />
                <Social icon={Twitter} />
                <Social icon={Instagram} />
                <Social icon={Youtube} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
