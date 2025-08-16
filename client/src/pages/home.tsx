// ========================================
// NEXGEN FOCUS WEBSITE - MAIN HOME PAGE
// ========================================
// This file contains the entire website for Nexgen Focus
// Educational platform for AI, Coding & Future Skills

// Import React hooks for state management and effects
import React, { useEffect, useRef, useState } from "react";
// Import Framer Motion for smooth animations and scroll effects
import { motion, useScroll, useTransform } from "framer-motion";
// Import all the icons we use throughout the website
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
  Clock,
} from "lucide-react";
// Import your company logo
import nexgenLogo from "@assets/IG Logo_1755259907946.png";

// ========================================
// LOGO COMPONENT
// ========================================
// This creates your animated company logo
// TO CHANGE: Replace the logo file in attached_assets folder
const Logo = () => {
  const [loadError, setLoadError] = useState(false);
  return (
    <div className="group flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105">
      {!loadError ? (
        <img
          src={nexgenLogo}
          alt="Nexgen Focus Logo"
          className="h-9 w-auto select-none rounded-2xl transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(20,184,198,0.6)] group-hover:rotate-[5deg]"
          onError={() => setLoadError(true)}
        />
      ) : (
        <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal transition-all duration-300 group-hover:rotate-[5deg] group-hover:shadow-[0_0_20px_rgba(20,184,198,0.6)]" />
      )}
      <div className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:tracking-wide">
        <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:via-brand-medium group-hover:to-brand-dark group-hover:text-transparent group-hover:drop-shadow-[0_0_10px_rgba(20,184,198,0.4)]">
          Nexgen Focus
        </span>
      </div>
    </div>
  );
};

// ========================================
// CALL-TO-ACTION BUTTON COMPONENT
// ========================================
// This creates the beautiful gradient buttons used throughout the site
// TO CHANGE COLORS: Modify the gradient colors in the className below
const CTAButton = ({
  children,
  href,
  onClick,
  className = "",
}: {
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

// ========================================
// DOWNLOAD BROCHURE BUTTON
// ========================================
// This button downloads the PDF brochure
// TO CHANGE: Replace nexgen-brochure.pdf in client/public folder
const DownloadButton = ({ className = "" }: { className?: string }) => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/nexgen-brochure.pdf";
    link.download = "Nexgen-Focus-Brochure.pdf";
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

// ========================================
// BUY NOW BUTTON
// ========================================
// This button will be used for payment integration (Razorpay, etc.)
// TO INTEGRATE PAYMENT: Replace onClick handler with payment gateway
const BuyNowButton = ({
  price,
  title,
  className = "",
}: {
  price: string;
  title: string;
  className?: string;
}) => {
  const handleBuyNow = () => {
    // TODO: Integrate with Razorpay or other payment gateway
    console.log(`Initiating purchase for ${title} - ₹${price}`);
    alert(`Payment integration coming soon for ${title}!\nPrice: ₹${price}`);
  };

  return (
    <button
      onClick={handleBuyNow}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 via-green-500 to-green-400 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,197,94,0.55)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_18px_40px_-12px_rgba(34,197,94,0.65)] ${className}`}
    >
      <span>₹{price}</span>
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      Buy Now
    </button>
  );
};

// Top gradient aura
const GradientGlow = ({ className = "" }: { className?: string }) => (
  <div
    className={`pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] ${className}`}
  >
    <div className="absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal opacity-30 blur-3xl" />
  </div>
);

// Section divider
const SectionDivider = () => (
  <div className="relative mx-auto my-20 h-px w-full max-w-6xl overflow-visible">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal shadow-[0_0_30px_8px_rgba(20,184,198,0.35)]" />
  </div>
);

// Navigation components
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
  >
    {children}
  </a>
);

// Stat card component
const Stat = ({
  icon: Icon,
  label,
  value,
}: {
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
const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl break-words sm:p-8"
  >
    <div className="mx-auto mb-4 w-fit rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3">
      <Icon className="size-8 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-white break-words sm:text-xl">
      {title}
    </h3>
    <p className="mt-3 text-sm text-white/70 break-words leading-relaxed sm:text-base">
      {description}
    </p>
  </motion.div>
);

// ========================================
// COURSE/PROGRAM CARD COMPONENT
// ========================================
// This creates the program cards with pricing and features
// TO ADD NEW PROGRAM: Copy this pattern in the Programs section below
// TO CHANGE PRICES: Modify the price parameter when using this component
const CourseCard = ({
  icon: Icon,
  title,
  price,
  bullets,
  cta,
  isPopular = false,
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
      isPopular ? "animate-glow-pulse" : ""
    }`}
  >
    {/* AI+ Tag with Google-like Gradient */}
    <div className="absolute top-3 right-3 z-10">
      <div className="group rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 p-0.5 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer animate-pulse">
        <div className="rounded-md bg-black/80 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/60">
          <span className="text-xs font-bold bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-red-300 group-hover:via-yellow-300 group-hover:via-green-300 group-hover:via-blue-300 group-hover:to-purple-300">
            AI+
          </span>
        </div>
      </div>
    </div>

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
      <h3 className="text-lg font-semibold tracking-tight text-white break-words sm:text-xl">
        {title}
      </h3>
    </div>
    <div className="mb-4 text-2xl font-bold text-white break-words sm:text-3xl">
      {price === "49" && (
        <>
          <span className="line-through text-white/50 text-lg mr-2">₹400</span>₹
          {price}
        </>
      )}
      {price === "249" && (
        <>
          <span className="line-through text-white/50 text-lg mr-2">
            ₹1,499
          </span>
          ₹{price}
        </>
      )}
      {price === "2,499" && (
        <>
          <span className="line-through text-white/50 text-lg mr-2">
            ₹7,999
          </span>
          ₹{price}
        </>
      )}
      {!["49", "249", "2,499"].includes(price) && <>₹{price}</>}
    </div>
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
      <BuyNowButton price={price} title={title} className="w-full" />
    </div>
    <div
      className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(800px_200px_at_50%_-10%,rgba(20,184,198,0.18),transparent)",
      }}
    />
  </motion.div>
);

// Testimonial component
const TestimonialSlide = ({
  quote,
  name,
  role,
}: {
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
    <p className="mt-6 text-white/70">
      {name} • {role}
    </p>
  </div>
);

// Event card component
const EventCard = ({
  title,
  date,
  time,
  location,
  type,
}: {
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
      <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
        {type}
      </span>
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
  icon: Icon,
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
const Social = ({
  icon: Icon,
}: {
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <a
    href="#"
    className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal text-white shadow-[0_10px_30px_-10px_rgba(20,184,198,0.55)] transition hover:scale-105"
  >
    <Icon className="size-4" />
  </a>
);

// ========================================
// WHATSAPP CHAT BUTTON
// ========================================
// Direct WhatsApp integration for instant support
// TO UPDATE: Replace the phone number with your actual WhatsApp business number
const WhatsAppButton = ({
  className = "",
  message,
}: {
  className?: string;
  message?: string;
}) => {
  const handleWhatsAppChat = () => {
    // Replace with your actual WhatsApp business number (include country code without +)
    const phoneNumber = "919405998860"; // Replace with your number
    const defaultMessage =
      "Hi Nexgen Focus! I'm interested in your AI and coding courses. Can you please provide more information?";
    const whatsappMessage = encodeURIComponent(message || defaultMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppChat}
      className={`group w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,197,94,0.55)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_18px_40px_-12px_rgba(34,197,94,0.65)] hover:from-green-600 hover:to-green-700 ${className}`}
    >
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.72" />
      </svg>
      Chat with Us on WhatsApp
      <span className="text-sm opacity-90">• Instant Support</span>
    </button>
  );
};

// ========================================
// CORPORATE TRAINING WHATSAPP BUTTON
// ========================================
// WhatsApp button specifically for corporate training requests
const CorporateWhatsAppButton = ({
  className = "",
}: {
  className?: string;
}) => {
  const handleCorporateWhatsApp = () => {
    const phoneNumber = "919405998860"; // Replace with your number
    const message = encodeURIComponent(
      "Hi Nexgen Focus! I'm interested in corporate training programs for my organization. Can you please provide bulk pricing and customization options?",
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={handleCorporateWhatsApp}
      className={`group w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.55)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_18px_40px_-12px_rgba(59,130,246,0.65)] hover:from-blue-700 hover:to-purple-700 ${className}`}
    >
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.72" />
      </svg>
      Corporate Training WhatsApp
      <span className="text-sm opacity-90">• Bulk Pricing Available</span>
    </button>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  // Testimonials data and carousel state
  const testimonials = [
    {
      quote:
        "I took the Python course as a complete beginner and now I am leading AI initiatives at my company. The mentor support was exceptional!",
      name: "Anita Patel",
      role: "Product Manager at Flipkart",
    },
    {
      quote:
        "The 3 day training gave our team a practical foundation for ML projects. Great balance of theory and hands on.",
      name: "Rohit Sharma",
      role: "Data Lead at Swasth Health",
    },
    {
      quote:
        "Amazing value for money. Clear instruction, real projects, and a friendly community.",
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

  // ========================================
  // CONTACT FORM LOGIC
  // ========================================
  // This manages the contact form data and submission
  // TO ADD FORM FIELDS: Add new properties here and in the form below
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ========================================
  // FORM SUBMISSION HANDLER
  // ========================================
  // Currently just shows an alert - you can modify this to:
  // 1. Send email using EmailJS
  // 2. Store in database
  // 3. Send to WhatsApp
  // 4. Integrate with contact services
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", program: "", message: "" });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden scroll-smooth bg-gradient-to-b from-[#0A0A0B] via-[#0B0C0E] to-[#0E0F12] text-white antialiased">
      {/* Top gradient aura */}
      <GradientGlow />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-5">
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

      {/* ========================================
           HERO SECTION (TOP OF PAGE)
           ========================================
           This is the first thing visitors see
           TO CHANGE: Update the headline, description, and button text below */}
      <section id="home" className="relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden
        >
          <div className="h-full w-full bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(20,184,198,0.2),transparent)]" />
        </motion.div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white break-words sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {/* MAIN HEADLINE - Change this to update your main message */}
              Learn{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
                AI, Coding
              </span>{" "}
              & Future Skills
              <span className="block text-white/80">
                Affordable for Everyone
              </span>
            </motion.h1>
            {/* HERO DESCRIPTION - Update this to change your main value proposition */}
            <p className="mt-6 max-w-full text-base leading-relaxed text-white/70 break-words sm:max-w-xl sm:text-lg">
              Empowering students and professionals with live training and real
              world projects. Join thousands building their future with cutting
              edge skills.
            </p>
            {/* HERO BUTTONS - Update prices and program names here */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href="#contact" className="text-sm sm:text-base">
                Join 1 Day AI Masterclass -{" "}
                <span className="line-through text-white/60">₹400</span> ₹49
              </CTAButton>
              <CTAButton href="#contact" className="text-sm sm:text-base">
                Register for 3 Day Training -{" "}
                <span className="line-through text-white/60">₹1,499</span> ₹249
              </CTAButton>
              <CTAButton href="#contact" className="text-sm sm:text-base">
                Enroll in Python + Vibe Coding -{" "}
                <span className="line-through text-white/60">₹7,999</span>{" "}
                ₹2,499
              </CTAButton>
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
              {/* STATISTICS CARDS - Update these numbers to reflect your actual stats */}
              <div className="grid grid-cols-2 gap-4">
                <Stat
                  icon={GraduationCap}
                  value="300+"
                  label="Students Trained"
                />
                <Stat icon={Users} value="100+" label="A.I Tools" />
                <Stat icon={Cpu} value="95%" label="Success Rate" />
                <Stat icon={Sparkles} value="24/7" label="Support" />
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(600px_150px_at_50%_-20%,rgba(20,184,198,0.15),transparent)",
                }}
              />
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
              className="text-2xl font-bold tracking-tight text-white break-words sm:text-3xl md:text-4xl"
            >
              {/* SECTION TITLE - Change "Nexgen Focus" to your company name */}
              About{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
                Nexgen Focus
              </span>
            </motion.h2>
            {/* ABOUT DESCRIPTION - Update this to describe your company */}
            <p className="mx-auto mt-6 max-w-full px-4 text-base leading-relaxed text-white/70 break-words sm:max-w-3xl sm:px-0 sm:text-lg">
              We are bridging the skills gap in technology by providing
              practical, industry-relevant training programs. Our mission is to
              make quality tech education accessible and affordable for
              everyone, from students to working professionals.
            </p>

            {/* Government Registration Badge */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-green-400/30 bg-green-500/10 px-6 py-3 backdrop-blur-xl">
                <div className="rounded-full bg-green-500 p-1.5">
                  <svg
                    className="size-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-green-300">
                    Government Registered
                  </div>
                  <div className="text-xs text-green-400/80">
                    Licensed Training Institute • India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE CARDS - Add or remove features by copying this pattern */}
          <div className="mt-16 grid grid-cols-1 gap-8 px-4 sm:px-0 md:grid-cols-3">
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

      {/* About Instructor Section */}
      <section id="instructor" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Meet Your{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
                Instructor
              </span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Learn directly from an industry expert committed to your success
              in AI and technology.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Photo placeholder */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-square rounded-2xl bg-gradient-to-tr from-brand-dark/20 via-brand-medium/20 to-brand-teal/20 border border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-4 w-24 h-24 rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal flex items-center justify-center">
                        <Users className="size-12 text-white" />
                      </div>
                      <p className="text-white/50 text-sm">Photo</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                  {/* INSTRUCTOR INFO - Update with your actual name and title */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Anas Ahmad Khan
                    </h3>
                    <p className="text-brand-teal font-medium">
                      AI & Technology Expert
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        What Industry Professionals Say:
                      </h4>
                      <div className="space-y-3">
                        <div className="rounded-lg bg-white/5 p-4 border-l-4 border-brand-teal">
                          <p className="text-white/80 text-sm italic">
                            "Exceptional technical depth and teaching ability"
                          </p>
                          <p className="text-white/60 text-xs mt-1">
                            - Industry Expert
                          </p>
                        </div>
                        <div className="rounded-lg bg-white/5 p-4 border-l-4 border-brand-teal">
                          <p className="text-white/80 text-sm italic">
                            "Makes complex AI concepts accessible and practical"
                          </p>
                          <p className="text-white/60 text-xs mt-1">
                            - Industry Expert
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white/90 mb-3">
                        Core Expertise:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {/* EXPERTISE TAGS - Add or modify your skills here */}
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                          AI & Machine Learning
                        </span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                          Python Programming
                        </span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                          Data Science
                        </span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                          Career Mentoring
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* AI Tools Section */}
      <section id="tools" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              AI Tools You'll{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
                Master
              </span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Learn industry-standard AI tools and technologies that power
              modern businesses and careers.
            </p>
          </div>

          {/* Sliding AI Tools */}
          <div className="mt-16 overflow-hidden">
            <div className="flex animate-[slide_20s_linear_infinite] gap-6">
              {/* First set */}
              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Cpu className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  ChatGPT
                </h3>
                <p className="text-sm text-white/70">
                  Master prompt engineering and AI conversations for
                  productivity
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Star className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Midjourney
                </h3>
                <p className="text-sm text-white/70">
                  Create stunning AI-generated images and visual content
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Users className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Claude AI
                </h3>
                <p className="text-sm text-white/70">
                  Advanced AI assistant for complex reasoning and analysis
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Code className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  GitHub Copilot
                </h3>
                <p className="text-sm text-white/70">
                  AI-powered coding assistant for faster development
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Target className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  TensorFlow
                </h3>
                <p className="text-sm text-white/70">
                  Build and deploy machine learning models at scale
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Award className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Hugging Face
                </h3>
                <p className="text-sm text-white/70">
                  Access thousands of pre-trained AI models and datasets
                </p>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Cpu className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  ChatGPT
                </h3>
                <p className="text-sm text-white/70">
                  Master prompt engineering and AI conversations for
                  productivity
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Star className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Midjourney
                </h3>
                <p className="text-sm text-white/70">
                  Create stunning AI-generated images and visual content
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Users className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Claude AI
                </h3>
                <p className="text-sm text-white/70">
                  Advanced AI assistant for complex reasoning and analysis
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Code className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  GitHub Copilot
                </h3>
                <p className="text-sm text-white/70">
                  AI-powered coding assistant for faster development
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Target className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  TensorFlow
                </h3>
                <p className="text-sm text-white/70">
                  Build and deploy machine learning models at scale
                </p>
              </div>

              <div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                  <Award className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Hugging Face
                </h3>
                <p className="text-sm text-white/70">
                  Access thousands of pre-trained AI models and datasets
                </p>
              </div>
            </div>
          </div>

          {/* Permanent Foundation Cards */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center"
            >
              <div className="mx-auto mb-6 w-fit rounded-3xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-4">
                <Code className="size-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Python Programming
              </h3>
              <p className="text-white/70">
                Master the foundation language for AI and data science with
                hands-on projects and real-world applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center"
            >
              <div className="mx-auto mb-6 w-fit rounded-3xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-4">
                <Cpu className="size-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI & Machine Learning
              </h3>
              <p className="text-white/70">
                Deep dive into artificial intelligence concepts, algorithms, and
                practical implementation in modern business scenarios.
              </p>
            </motion.div>
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
              Our{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
                Programs
              </span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Choose from our carefully designed programs that cater to
              different learning needs and career goals.
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
                "Certificate of completion",
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
                "Job placement assistance",
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
                "Job guarantee program",
              ]}
              cta="Enroll Now"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Student Testimonials Section */}
      <section id="testimonials" className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              What Our{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
                Students Say
              </span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Real feedback from students who have transformed their careers
              with our AI training programs.
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

      {/* Professional Training Section */}
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
              AI Training for{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
                Professionals
              </span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Customized AI training programs for organizations and
              professionals. Learn how to integrate AI into your specific field
              and boost productivity.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                <GraduationCap className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Educators & Teachers
              </h3>
              <p className="text-white/70 mb-4">
                AI tools for classroom management, personalized learning,
                automated grading, and curriculum enhancement.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• AI-powered lesson planning</li>
                <li>• Student performance analytics</li>
                <li>• Automated assessment tools</li>
                <li>• Personalized learning paths</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                <Users className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Healthcare Professionals
              </h3>
              <p className="text-white/70 mb-4">
                AI applications in diagnostics, patient care, medical research,
                and administrative efficiency.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Medical image analysis</li>
                <li>• Patient data management</li>
                <li>• Predictive health analytics</li>
                <li>• Drug discovery assistance</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 rounded-2xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
                <Award className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Legal Professionals
              </h3>
              <p className="text-white/70 mb-4">
                AI for legal research, document analysis, contract review, and
                case management automation.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Legal document analysis</li>
                <li>• Case law research automation</li>
                <li>• Contract review & drafting</li>
                <li>• Compliance monitoring</li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Corporate Bulk Training
              </h3>
              <p className="text-white/70 mb-6">
                Transform your entire organization with customized AI training
                programs. Special pricing for bulk enrollments and corporate
                partnerships.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <CTAButton href="#contact">
                  Request Corporate Training
                </CTAButton>
                <DownloadButton />
              </div>
            </motion.div>
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
              Upcoming{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
                Events
              </span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Join our live workshops, masterclasses, and networking events to
              accelerate your learning journey.
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
              Get{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-medium to-brand-teal bg-clip-text text-transparent">
                Started Today
              </span>
            </motion.h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Ready to transform your career? Contact us to learn more about our
              programs and get personalized guidance.
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
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium text-white/80"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
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
                  <label
                    className="block text-sm font-medium text-white/80"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
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
                  <label
                    className="block text-sm font-medium text-white/80"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
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
                  <label
                    className="block text-sm font-medium text-white/80"
                    htmlFor="program"
                  >
                    Program of Interest
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 pr-10 text-white font-medium backdrop-blur-xl transition-all duration-300 hover:border-brand-teal hover:bg-white/15 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-opacity='0.8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 0.75rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option value="" className="text-white/70 bg-slate-800">
                        ✨ Select your program
                      </option>
                      <option
                        value="1-day-ai"
                        className="text-white bg-slate-800 font-medium"
                      >
                        🚀 1 Day AI Masterclass - ₹49
                      </option>
                      <option
                        value="3-day-training"
                        className="text-white bg-slate-800 font-medium"
                      >
                        ⭐ 3 Day Training - ₹249
                      </option>
                      <option
                        value="python-coding"
                        className="text-white bg-slate-800 font-medium"
                      >
                        💻 Python + Vibe Coding - ₹2,499
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-white/80"
                    htmlFor="message"
                  >
                    Message
                  </label>
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

              {/* ========================================
                   GOOGLE FORM BUTTON
                   ========================================
                   Alternative contact method via Google Form
                   TO UPDATE: Replace the URL with your actual Google Form link */}
              <div className="mt-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdug5w-DcP0O5qJX3acIMqEAF0xKAg38FT-eAcjM97Qem75oA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-200 hover:bg-white/20 hover:border-brand-teal/60 hover:scale-[1.02]"
                >
                  Fill Google Form
                  <svg
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* ========================================
                   WHATSAPP INTEGRATION
                   ========================================
                   Instant chat support via WhatsApp
                   TO UPDATE: Change phone number in WhatsAppButton component */}
              <div className="mt-4">
                <WhatsAppButton />
              </div>

              {/* Corporate Training WhatsApp */}
              <div className="mt-4">
                <CorporateWhatsAppButton />
              </div>
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
                <h3 className="mb-6 text-2xl font-semibold text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-white/70">
                    <Phone className="size-5 mt-0.5 text-brand-teal" />
                    <div>
                      <div className="font-medium text-white/90">Phone</div>
                      <div>+91 9405998860</div>
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
                <h3 className="mb-6 text-2xl font-semibold text-white">
                  Follow Us
                </h3>
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
                Empowering the next generation with cutting-edge skills in AI,
                coding, and future technologies.
              </p>
            </div>

            {/* Footer Links */}
            <div>
              <div className="mb-3 text-base font-semibold text-white/90">
                Programs
              </div>
              <div className="space-y-2">
                <a
                  href="#programs"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  1 Day AI Masterclass
                </a>
                <a
                  href="#programs"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  3 Day Training
                </a>
                <a
                  href="#programs"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  Python + Vibe Coding
                </a>
                <a
                  href="#events"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  Workshops
                </a>
              </div>
            </div>

            <div>
              <div className="mb-3 text-base font-semibold text-white/90">
                Company
              </div>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  About Us
                </a>
                <a
                  href="#professionals"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  Testimonials
                </a>
                <a
                  href="#events"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  Events
                </a>
                <a
                  href="#contact"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <div className="mb-3 text-base font-semibold text-white/90">
                Support
              </div>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="block py-1 text-sm text-white/70 transition hover:text-white"
                >
                  Refund Policy
                </a>
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
