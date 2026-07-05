/*
 * Royal Spa Uttara - Home Page
 * Design: Royal Nocturnal Elegance
 * Dark Charcoal (#1A1A2E / #0D0D14) + Gold (#C9A84C) palette
 * Fonts: Cinzel (headings), Cormorant Garamond (body)
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Clock, Star, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { MapView } from "@/components/Map";


// Image URLs from upload
const IMAGES = {
  hero: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/tMnVrVSScxDrmFfn.jpg",
  bodyMassage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/dhgdFTTbhmlxrjvX.jpg",
  aromatherapy: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/WpJjBxzgFfyLTibk.jpg",
  coupleMassage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/IlnwsGscqBjwXGIR.jpg",
  manicurePedicure: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/tJMVzElFbBNhUYja.jpg",
  hotStone: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/vNwNWWVXTcqrxagq.jpg",
  headMassage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/kQVEnxCSxLtAIBls.jpg",
  spaInterior: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/NAFhJPWxkejCqEus.jpg",
  traditionalThai: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/IdpEsdPmIMlklhID.jpg",
  bodyScrub: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/xoGQyExGpxWPdywq.jpg",
  fourHand: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/jBPcBGfqeRtBQxDP.jpg",
  swedish: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/jOcctkfyCpVSPGfm.jpg",
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663803148367/ZNLIddhBwnQgSTUb.png",
};

const PHONE = "01999919977";
const WHATSAPP = "https://wa.me/8801999919977";
const TELEGRAM = "https://t.me/8801999919977";
const FACEBOOK = "https://www.facebook.com/share/1GxXjATByQ/";
const EMAIL = "mailto:Royalspauttara@gmail.com";
const ADDRESS = "House 29, Road 3/B, Sector 09, Uttara, Dhaka 1230";

/* ─── Section Fade-In Wrapper ─── */
function SectionFade({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Gold Divider ─── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C9A84C]/60" />
      <div className="w-2 h-2 rotate-45 bg-[#C9A84C]" />
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C9A84C]/60" />
    </div>
  );
}

/* ─── Floating Contact Button ─── */
function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        title="WhatsApp Chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      <a
        href={`tel:${PHONE}`}
        className="w-14 h-14 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        title="Call Now"
      >
        <Phone className="w-6 h-6 text-[#0D0D14]" />
      </a>
    </div>
  );
}

/* ─── Header / Navbar ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "Rates", href: "#rates" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D0D14]/95 backdrop-blur-md border-b border-[#C9A84C]/20 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img src={IMAGES.logo} alt="Royal Spa Uttara" className="h-10 lg:h-14 w-auto object-contain" />
          <div className="hidden sm:block">
            <span className="text-lg lg:text-xl font-bold gold-text" style={{ fontFamily: "'Cinzel', serif" }}>
              Royal Spa
            </span>
            <span className="block text-xs text-[#C9A84C]/70 tracking-[0.2em] uppercase">
              Uttara
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wider text-[#B8A88A] hover:text-[#C9A84C] transition-colors duration-300 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="hidden lg:flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#E8D5A3] transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <Phone className="w-4 h-4" />
            <span>{PHONE}</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#C9A84C] p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D14]/98 backdrop-blur-xl border-t border-[#C9A84C]/20">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-[#B8A88A] hover:text-[#C9A84C] transition-colors tracking-wider uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="mt-4 flex items-center justify-center gap-2 py-3 bg-[#C9A84C] text-[#0D0D14] font-semibold rounded"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Luxury Spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D14]/70 via-[#0D0D14]/50 to-[#0D0D14]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#C9A84C] text-sm lg:text-base tracking-[0.3em] uppercase mb-4 block">
            Premium Wellness & Spa
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Royal Spa <span className="gold-text">Uttara</span>
          </h1>
          <GoldDivider />
          <p
            className="text-lg md:text-xl text-[#B8A88A] max-w-2xl mx-auto mt-6 leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Where Royal Serenity Awaits — Experience the finest spa and wellness treatments
            in the heart of Uttara, Dhaka
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#C9A84C] text-[#0D0D14] font-semibold text-lg rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Now
            </span>
            <div className="absolute inset-0 bg-[#E8D5A3] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href={`tel:${PHONE}`}
            className="px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] font-semibold text-lg rounded-sm hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <Phone className="w-5 h-5 inline-block mr-2" />
            Call Now
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-6 max-w-md mx-auto mt-16 pt-8 border-t border-[#C9A84C]/20"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "3+", label: "Years of Excellence" },
            { number: "16+", label: "Premium Services" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold gold-text" style={{ fontFamily: "'Cinzel', serif" }}>
                {stat.number}
              </div>
              <div className="text-xs text-[#B8A88A] mt-1 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section className="py-20 lg:py-28 relative" style={{ background: "linear-gradient(180deg, #0D0D14 0%, #12121F 50%, #0D0D14 100%)" }}>
      <SectionFade className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A84C]/20 to-transparent rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={IMAGES.spaInterior}
              alt="Royal Spa Interior"
              className="relative w-full h-[400px] lg:h-[500px] object-cover rounded-lg border border-[#C9A84C]/20"
            />
            <div className="absolute bottom-4 left-4 bg-[#0D0D14]/80 backdrop-blur-sm px-4 py-2 rounded border border-[#C9A84C]/30">
              <span className="text-[#C9A84C] text-sm tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                Our Royal Sanctuary
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">Our Story</span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              How Royal Spa Uttara Became the Premier Wellness Destination
            </h2>
            <GoldDivider />
            <div
              className="text-[#B8A88A] leading-relaxed space-y-4 text-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <p>
                <strong className="text-[#E8D5A3]">Royal Spa Uttara:</strong> A Royal Wellness Spa in the heart of Uttara, Dhaka.
                We have crafted a haven of peace and luxury amidst the bustling city. Every journey begins with a vision —
                our vision was to provide clients with a quiet, refreshing, and truly royal space for wellness and rejuvenation.
              </p>
              <p>
                Only the finest therapists are handpicked, premium products are used exclusively, and every client is treated
                with the dignity and care of royalty. Through meticulous attention to detail and an unwavering commitment to
                excellence, we have become the premier destination in Uttara for those seeking the ultimate spa experience.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                { label: "Address", value: ADDRESS },
                { label: "Reservation", value: PHONE },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A84C] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[#C9A84C] text-sm font-semibold">{item.label}:</span>
                    <span className="text-[#B8A88A] ml-2">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 bg-[#C9A84C] text-[#0D0D14] font-semibold rounded-sm hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Book Your Royal Experience
            </a>
          </div>
        </div>
      </SectionFade>
    </section>
  );
}

/* ─── Services Section ─── */
const services = [
  {
    title: "Body Massages",
    desc: "Allow yourself to simply enjoy the feeling of calm and serenity through our deep tissue, Swedish, and aromatherapy massages.",
    img: IMAGES.bodyMassage,
  },
  {
    title: "Body Scrubs",
    desc: "Revitalise the skin on your body by using our exfoliating body scrubs that remove dead cells and reveal natural radiance.",
    img: IMAGES.bodyScrub,
  },
  {
    title: "Four-Hand Massage",
    desc: "Experience the pleasure of a perfect massage with two therapists working together in perfect harmony to deliver exceptional results.",
    img: IMAGES.fourHand,
  },
  {
    title: "Couple Massage",
    desc: "Enjoy a soothing experience together with your significant other in our exclusive couple's treatment room.",
    img: IMAGES.coupleMassage,
  },
  {
    title: "Head Massages",
    desc: "Ease your worries and tensions with our manifold head massage therapy that promotes deep relaxation and mental clarity.",
    img: IMAGES.headMassage,
  },
  {
    title: "Manicure & Pedicure",
    desc: "Satisfy your beauty cravings and pamper your feet and hands with our professional manicure and pedicure services.",
    img: IMAGES.manicurePedicure,
  },
  {
    title: "Traditional Thai Massage",
    desc: "Feel the astonishing results of the traditional Thai techniques aimed at the restoration of your body and mind.",
    img: IMAGES.traditionalThai,
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28" style={{ background: "#0D0D14" }}>
      <SectionFade className="container">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">What We Offer</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mt-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Royal Spa Services
          </h2>
          <GoldDivider />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <SectionFade key={service.title} delay={i * 0.1}>
              <div className="group relative bg-[#12121F] border border-[#C9A84C]/15 rounded-lg overflow-hidden hover:border-[#C9A84C]/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(201,168,76,0.15)]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14] to-transparent" />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold gold-text mb-3"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[#B8A88A] text-base leading-relaxed mb-5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.desc}
                  </p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-semibold rounded-sm hover:bg-[#C9A84C] hover:text-[#0D0D14] transition-all duration-300"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </SectionFade>
    </section>
  );
}

/* ─── Services & Rates Section ─── */
const rates = [
  { name: "Aroma Oil Massage", p60: "5,500", p90: "8,000" },
  { name: "Thai Aroma Massage", p60: "6,000", p90: "9,000" },
  { name: "Deep Tissue Massage", p60: "6,500", p90: "9,500" },
  { name: "Swedish Massage", p60: "6,000", p90: "9,000" },
  { name: "Hot Oil Massage", p60: "6,500", p90: "9,500" },
  { name: "Neuromuscular Massage", p60: "6,500", p90: "9,500" },
  { name: "Sports Massage", p60: "6,000", p90: "9,000" },
  { name: "Stone Massage", p60: "7,500", p90: "10,000" },
  { name: "Body Scrub", p60: "6,000", p90: "9,000" },
  { name: "Aromatherapy Massage & Body Scrub", p60: "6,000", p90: "9,000" },
  { name: "Swedish Massage & Body Scrub", p60: "6,000", p90: "9,000" },
  { name: "4 Hand Massage", p60: "10,000", p90: "14,000" },
  { name: "Couple Massages", p60: "10,000", p90: "14,000" },
  { name: "Head, Foot and Shoulder Massage", p60: "4,000", p90: null },
  { name: "Manicure & Pedicure", p60: "2,500", p90: "5,000" },
  { name: "Traditional Thai", p60: "6,000", p90: "9,000" },
];

function RatesSection() {
  return (
    <section id="rates" className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #0D0D14 0%, #12121F 100%)" }}>
      <SectionFade className="container">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">Pricing</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mt-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Services & Rates
          </h2>
          <GoldDivider />
          <p className="text-[#B8A88A] mt-4 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            All prices in Bangladeshi Taka (BDT). 60-min and 90-min sessions available.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#12121F] border border-[#C9A84C]/15 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_120px_120px_120px] bg-[#C9A84C]/10 border-b border-[#C9A84C]/20 px-4 py-3 text-sm font-semibold">
              <span className="text-[#C9A84C]" style={{ fontFamily: "'Cinzel', serif" }}>Service</span>
              <span className="text-center text-[#C9A84C]">60 Mins</span>
              <span className="text-center text-[#C9A84C]">90 Mins</span>
              <span className="text-center text-[#C9A84C]">Action</span>
            </div>
            {/* Rows */}
            {rates.map((rate, i) => (
              <div
                key={rate.name}
                className={`grid grid-cols-[1fr_120px_120px_120px] px-4 py-3.5 border-b border-[#C9A84C]/5 hover:bg-[#C9A84C]/5 transition-colors duration-200 ${
                  i % 2 === 0 ? "bg-[#12121F]" : "bg-[#0D0D14]/50"
                }`}
              >
                <span className="text-[#F5F0E8] text-base" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {rate.name}
                </span>
                <span className="text-center text-[#E8D5A3] font-medium">{rate.p60} ৳</span>
                <span className="text-center text-[#E8D5A3] font-medium">
                  {rate.p90 ? `${rate.p90} ৳` : "—"}
                </span>
                <span className="text-center">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center gap-1 text-xs text-[#C9A84C] hover:text-[#E8D5A3] border border-[#C9A84C]/30 rounded px-3 py-1.5 hover:bg-[#C9A84C]/10 transition-all"
                  >
                    <Phone className="w-3 h-3" />
                    Call
                  </a>
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0D0D14] font-semibold text-lg rounded-sm hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Book Now on WhatsApp
            </a>
          </div>
        </div>
      </SectionFade>
    </section>
  );
}

/* ─── What to Expect Section ─── */
function ExpectSection() {
  const features = [
    {
      icon: "✨",
      title: "Tranquil Atmosphere",
      desc: "Our spa provides a soothing and relaxing ambience that transports you to a world of calm and serenity.",
    },
    {
      icon: "👑",
      title: "Skilled Therapists",
      desc: "Our qualified and licensed therapists customize every treatment to your individual needs and preferences.",
    },
    {
      icon: "💎",
      title: "High-Quality Products",
      desc: "We utilize only the finest quality, premium products for your protection and to elevate your spa experience.",
    },
    {
      icon: "🛡️",
      title: "Hygiene Standards",
      desc: "Our primary focus is on hygiene and safety to ensure every visit is enjoyable, comfortable, and stress-free.",
    },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ background: "#0D0D14" }}>
      <SectionFade className="container">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">Experience</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mt-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            What to Expect at Royal Spa
          </h2>
          <GoldDivider />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <SectionFade key={f.title} delay={i * 0.1}>
              <div className="bg-[#12121F] border border-[#C9A84C]/15 rounded-lg p-6 text-center hover:border-[#C9A84C]/40 transition-all duration-400 hover:shadow-[0_0_20px_rgba(201,168,76,0.1)]">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3
                  className="text-lg font-bold gold-text mb-3"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-[#B8A88A] text-base leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {f.desc}
                </p>
              </div>
            </SectionFade>
          ))}
        </div>
      </SectionFade>
    </section>
  );
}

/* ─── Benefits Section ─── */
const benefits = [
  { title: "Improved Sleep", desc: "Enhances quality of sleep by relieving body tension and promoting deep relaxation." },
  { title: "Stress Relief", desc: "Decreases cortisol levels and induces relaxation and mental tranquillity." },
  { title: "Detoxification", desc: "Helps eliminate toxic substances through sweating, enhancing overall body function." },
  { title: "Reduced Headaches", desc: "Relieves tension in the neck and shoulders, reducing headache frequency and intensity." },
  { title: "Healthy Skin", desc: "Removes dead skin cells, clears pores, and increases skin moisture for a natural glow." },
  { title: "Lower Blood Pressure", desc: "Promotes relaxation and improves circulation, lowering blood pressure naturally." },
  { title: "Mental Relaxation", desc: "Soothes the psyche, alleviating stress and enhancing emotional stability and well-being." },
  { title: "Boost Confidence", desc: "Improves appearance and mental health, helping build self-esteem and inner confidence." },
];

function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #0D0D14 0%, #12121F 100%)" }}>
      <SectionFade className="container">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">Why Choose Us</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mt-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Benefits of Spa Treatments
          </h2>
          <GoldDivider />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <SectionFade key={b.title} delay={i * 0.05}>
              <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-[#C9A84C]/5 border border-transparent hover:border-[#C9A84C]/15 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <span className="text-[#C9A84C] text-sm">✦</span>
                </div>
                <div>
                  <h4 className="text-[#E8D5A3] font-semibold text-base mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                    {b.title}
                  </h4>
                  <p className="text-[#B8A88A] text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </SectionFade>
    </section>
  );
}

/* ─── Testimonials Section ─── */
const testimonials = [
  {
    name: "Fahim Ahmed",
    role: "Regular Client",
    text: "The four-hand massage at Royal Spa Uttara was one of the best services I have ever had. It was a truly unique and royal experience that I would highly recommend to everyone.",
  },
  {
    name: "Sadia Rahman",
    role: "Verified Guest",
    text: "For moments of leisure, Royal Spa Uttara is my absolute favourite spot. The skill of the therapists is unmatched and the ambiance is incredibly peaceful and luxurious.",
  },
  {
    name: "Tanvir Islam",
    role: "Loyal Customer",
    text: "I have visited several spas in Dhaka, but none can match Royal Spa Uttara. The quality of service, the luxurious environment, and the attention to detail make it truly exceptional.",
  },
  {
    name: "Nusrat Jahan",
    role: "Wellness Enthusiast",
    text: "The aromatherapy massage and body scrub combination was absolutely divine. The therapists are very professional and the products they use are of the highest quality.",
  },
  {
    name: "Rafiq Hassan",
    role: "Frequent Visitor",
    text: "Royal Spa Uttara offers a world-class relaxation experience with its luxurious ambiance and skilled therapists. Every visit leaves me feeling completely rejuvenated.",
  },
];

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 5);

  const next = () => setCurrent((prev) => Math.min(prev + 1, totalSlides - 1));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  return (
    <section id="testimonials" className="py-20 lg:py-28" style={{ background: "#0D0D14" }}>
      <SectionFade className="container">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">Reviews</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mt-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            What Our Clients Say
          </h2>
          <GoldDivider />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                <div key={slideIdx} className="w-full shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {testimonials.slice(slideIdx * 5, slideIdx * 5 + 5).map((t) => (
                      <div
                        key={t.name}
                        className="bg-[#12121F] border border-[#C9A84C]/15 rounded-lg p-5 hover:border-[#C9A84C]/40 transition-all duration-400 flex flex-col"
                      >
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                          ))}
                        </div>
                        <p
                          className="text-[#B8A88A] text-[15px] leading-relaxed mb-4 flex-1"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {t.text}
                        </p>
                        <div className="flex items-center gap-3 pt-3 border-t border-[#C9A84C]/10">
                          <div className="w-9 h-9 rounded-full bg-[#C9A84C]/15 flex items-center justify-center shrink-0">
                            <span className="text-[#C9A84C] text-sm font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
                              {t.name[0]}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#E8D5A3] font-semibold text-sm block" style={{ fontFamily: "'Cinzel', serif" }}>
                              {t.name}
                            </span>
                            <span className="text-[#C9A84C]/60 text-xs">{t.role}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 disabled:opacity-30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === i ? "bg-[#C9A84C] w-8" : "bg-[#C9A84C]/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={current >= totalSlides - 1}
              className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 disabled:opacity-30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </SectionFade>
    </section>
  );
}

/* ─── Map Section ─── */
function LocationSection() {
  return (
    <section id="location" className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #0D0D14 0%, #12121F 100%)" }}>
      <SectionFade className="container">
        <div className="text-center mb-12">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">Find Us</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mt-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Location
          </h2>
          <GoldDivider />
          <p className="text-[#B8A88A] mt-4 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {ADDRESS}
          </p>
        </div>

        <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-[#C9A84C]/20">
            <MapView
              initialCenter={{ lat: 23.8775768, lng: 90.3990697 }}
              initialZoom={16}
              className="w-full h-full"
            />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0D0D14] font-semibold rounded-sm hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Book Appointment
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C]/50 text-[#C9A84C] font-semibold rounded-sm hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
        </div>
      </SectionFade>
    </section>
  );
}

/* ─── Contact Section ─── */
function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28" style={{ background: "#0D0D14" }}>
      <SectionFade className="container">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">Get In Touch</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mt-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Contact Us
          </h2>
          <GoldDivider />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#12121F] border border-[#C9A84C]/15 rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
              <h3 className="text-lg font-bold gold-text mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                Phone & WhatsApp
              </h3>
              <a href={`tel:${PHONE}`} className="text-[#B8A88A] text-lg hover:text-[#C9A84C] transition-colors block">
                {PHONE}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-[#B8A88A] text-lg hover:text-[#25D366] transition-colors block mt-1">
                WhatsApp Chat
              </a>
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="text-[#B8A88A] text-lg hover:text-[#0088cc] transition-colors block mt-1">
                Telegram
              </a>
            </div>

            <div className="bg-[#12121F] border border-[#C9A84C]/15 rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
              <h3 className="text-lg font-bold gold-text mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                Social Media
              </h3>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-[#B8A88A] text-lg hover:text-[#1877F2] transition-colors flex items-center gap-2">
                <span>📘</span> Facebook Page
              </a>
            </div>

            <div className="bg-[#12121F] border border-[#C9A84C]/15 rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
              <h3 className="text-lg font-bold gold-text mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                Email
              </h3>
              <a href={EMAIL} className="text-[#B8A88A] text-lg hover:text-[#C9A84C] transition-colors">
                Royalspauttara@gmail.com
              </a>
            </div>

            <div className="bg-[#12121F] border border-[#C9A84C]/15 rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
              <h3 className="text-lg font-bold gold-text mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                Address & Hours
              </h3>
              <div className="flex items-start gap-3 text-[#B8A88A]">
                <MapPin className="w-5 h-5 text-[#C9A84C] mt-0.5 shrink-0" />
                <div>
                  <p className="text-lg">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#12121F] border border-[#C9A84C]/15 rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
              <h3 className="text-lg font-bold gold-text mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                Opening Hours
              </h3>
              <div className="space-y-3">
                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-[#E8D5A3] text-base" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                      {day}
                    </span>
                    <span className="flex items-center gap-2 text-[#B8A88A] text-base" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      <Clock className="w-4 h-4 text-[#C9A84C]" />
                      10:00 AM – 10:00 PM
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-[#C9A84C]/10 text-center">
                <span className="text-[#C9A84C] text-sm tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                  OPEN 7 DAYS A WEEK
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#12121F] to-[#1A1A2E] border border-[#C9A84C]/15 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold gold-text mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                Ready for a Royal Experience?
              </h3>
              <p className="text-[#B8A88A] text-lg mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Book your appointment today and indulge in the finest spa treatments Uttara has to offer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#C9A84C] text-[#0D0D14] font-semibold text-lg rounded-sm hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 text-center"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Book on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="w-full sm:w-auto px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] font-semibold text-lg rounded-sm hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300 text-center"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact icons grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "WhatsApp", href: WHATSAPP, icon: "📱", color: "hover:text-[#25D366]" },
                { label: "Phone", href: `tel:${PHONE}`, icon: "📞", color: "hover:text-[#C9A84C]" },
                { label: "Telegram", href: TELEGRAM, icon: "✈️", color: "hover:text-[#0088cc]" },
                { label: "Facebook", href: FACEBOOK, icon: "📘", color: "hover:text-[#1877F2]" },
                { label: "Email", href: EMAIL, icon: "📧", color: "hover:text-[#C9A84C]" },
                { label: "Google Maps", href: "https://maps.google.com/?q=House+29+Road+3B+Sector+9+Uttara+Dhaka", icon: "🗺️", color: "hover:text-[#4285F4]", target: "_blank" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.target || "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 bg-[#12121F] border border-[#C9A84C]/10 rounded-lg text-[#B8A88A] ${item.color} hover:border-[#C9A84C]/30 transition-all duration-300`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionFade>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-12 border-t border-[#C9A84C]/15" style={{ background: "#0A0A10" }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="Royal Spa Uttara" className="h-12 w-auto object-contain" />
            <div>
              <span className="text-xl font-bold gold-text block" style={{ fontFamily: "'Cinzel', serif" }}>
                Royal Spa Uttara
              </span>
              <span className="text-xs text-[#B8A88A]/60 tracking-[0.2em] uppercase">
                Premium Wellness & Spa
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#B8A88A]">
            <a href="#home" className="hover:text-[#C9A84C] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#C9A84C] transition-colors">Services</a>
            <a href="#rates" className="hover:text-[#C9A84C] transition-colors">Rates</a>
            <a href="#testimonials" className="hover:text-[#C9A84C] transition-colors">Reviews</a>
            <a href="#location" className="hover:text-[#C9A84C] transition-colors">Location</a>
            <a href="#contact" className="hover:text-[#C9A84C] transition-colors">Contact</a>
          </div>

          <div className="text-center text-sm text-[#B8A88A]/50">
            <p>&copy; {new Date().getFullYear()} Royal Spa Uttara. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0D0D14" }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RatesSection />
      <ExpectSection />
      <BenefitsSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
