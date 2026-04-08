import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle2, Star, MapPin, Clock, Phone, MessageCircle, ChevronRight, Quote } from 'lucide-react';

// --- SVGs ---
const LeafLogo: React.FC<{ className?: string, inverted?: boolean }> = ({ className = "w-8 h-8", inverted = false }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 80 L20 40 C20 20, 40 10, 60 10 C80 10, 90 30, 90 50 C90 70, 70 80, 50 80 Z" 
          stroke={inverted ? "#F7F3ED" : "#1B3A2D"} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 40 L90 50" stroke={inverted ? "#F7F3ED" : "#1B3A2D"} strokeWidth="6" strokeLinecap="round"/>
    <path d="M50 80 L50 100" stroke={inverted ? "#F7F3ED" : "#1B3A2D"} strokeWidth="6" strokeLinecap="round"/>
    <path d="M80 65 L80 100" stroke={inverted ? "#F7F3ED" : "#1B3A2D"} strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

const LeafIcon: React.FC<{ className?: string, color?: string }> = ({ className = "w-6 h-6", color = "#1B3A2D" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 21C12 21 4 15.5 4 9.5C4 6.5 6.5 4 9.5 4C11 4 12 5 12 5C12 5 13 4 14.5 4C17.5 4 20 6.5 20 9.5C20 15.5 12 21 12 21Z" 
          stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21V12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-linen shadow-sm border-b border-forest/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 z-50">
            <LeafLogo className="w-10 h-10" inverted={!isScrolled && !isMobileMenuOpen} />
            <div className={`flex flex-col ${!isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-forest'}`}>
              <span className="font-serif font-bold text-xl leading-none">Feel Nature</span>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold mt-1">Furniture</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`text-sm font-semibold tracking-wide hover:text-gold transition-colors ${!isScrolled ? 'text-white/90' : 'text-text-dark'}`}>
                  {link.name}
                </a>
              ))}
            </div>
            <a href="https://wa.me/2348055244832" target="_blank" rel="noreferrer" className="bg-forest text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-forest/90 transition-colors shadow-md">
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-forest" />
            ) : (
              <Menu className={`w-6 h-6 ${!isScrolled ? 'text-white' : 'text-forest'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-linen z-40 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-forest hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/2348055244832" 
            target="_blank" 
            rel="noreferrer" 
            className="mt-4 bg-forest text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-forest/90 transition-colors shadow-md inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601392740426-907c7b028119?q=80&w=2070&auto=format&fit=crop" 
          alt="Premium wood furniture workshop" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Floating Leaf Accent */}
      <div className="absolute top-1/4 right-1/4 z-0 opacity-20 animate-float pointer-events-none hidden md:block">
        <LeafIcon className="w-64 h-64" color="#F7F3ED" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-[1.1] tracking-tight">
          Where Nature <br className="hidden md:block" /> Meets Craft
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Handcrafted furniture built with precision, passion and natural materials — right here in Idimu, Lagos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#gallery" className="bg-white text-forest px-8 py-4 rounded-full font-bold text-base hover:bg-linen transition-colors shadow-lg w-full sm:w-auto">
            See Our Work
          </a>
          <a href="https://wa.me/2348055244832" target="_blank" rel="noreferrer" className="bg-forest text-white px-8 py-4 rounded-full font-bold text-base hover:bg-forest/90 transition-colors shadow-lg border border-forest/50 w-full sm:w-auto flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Order Custom Furniture
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium">
          <div className="flex items-center gap-1.5"><Star className="w-4 h-4 text-gold fill-gold" /> 5.0★ (10 Reviews)</div>
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-sage" /> Open 24 Hours</div>
          <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-sage" /> Idimu, Lagos</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-sage" /> What You Order Is What You Get</div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest font-bold mb-6 leading-tight">
              Rooted in Craft. <br /> Grown by Trust.
            </h2>
            <p className="text-lg text-text-dark/80 mb-8 leading-relaxed">
              Feel Nature Furniture is a Lagos-based bespoke furniture workshop dedicated to creating pieces that connect you with the warmth and beauty of natural materials. Located on Camp Davies Road, Idimu, we serve homes, offices, and events across Lagos — delivering exactly what you ordered, with precision and care.
            </p>

            {/* Pull Quote */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-forest mb-8 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-forest/10" />
              <p className="font-serif text-xl text-forest italic mb-4">
                "Very neat finishing... what you order is what you get. Feel Nature Furniture maintains excellent customer service from the first contact to the point of delivery."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-forest text-white rounded-full flex items-center justify-center font-bold">JE</div>
                <div>
                  <p className="font-bold text-sm text-text-dark">Jessica Emelieze</p>
                  <p className="text-xs text-text-dark/60">Google Review</p>
                </div>
              </div>
            </div>

            <p className="text-forest font-semibold italic mb-10">
              "We say thank you to every client who trusts our craft — your satisfaction is our purpose."
            </p>

            {/* Stat Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-3 rounded-xl shadow-sm flex items-center gap-3 border border-forest/10">
                <div className="bg-forest/10 p-2 rounded-lg text-forest"><Star className="w-5 h-5 fill-gold text-gold" /></div>
                <div>
                  <p className="font-bold text-lg leading-none">10+</p>
                  <p className="text-xs text-text-dark/60 font-medium">Happy Clients ⭐5.0</p>
                </div>
              </div>
              <div className="bg-white px-4 py-3 rounded-xl shadow-sm flex items-center gap-3 border border-forest/10">
                <div className="bg-forest/10 p-2 rounded-lg text-forest"><Clock className="w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-lg leading-none">24/7</p>
                  <p className="text-xs text-text-dark/60 font-medium">Open 24 Hours</p>
                </div>
              </div>
              <div className="bg-white px-4 py-3 rounded-xl shadow-sm flex items-center gap-3 border border-forest/10">
                <div className="bg-forest/10 p-2 rounded-lg text-forest"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-lg leading-none">Lagos</p>
                  <p className="text-xs text-text-dark/60 font-medium">Idimu Based</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-text-dark/60 mt-6 font-medium">
              Serving Idimu, Egbeda, Ikotun, Iyana-Ipaja, Alimosho and all of Lagos.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-forest rounded-[2rem] transform translate-x-4 translate-y-4 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1974&auto=format&fit=crop" 
              alt="Beautiful finished wood furniture in a warm room" 
              className="rounded-[2rem] shadow-xl w-full h-[600px] object-cover relative z-10"
              referrerPolicy="no-referrer"
            />
            {/* Small floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg z-20 flex items-center gap-4 border border-forest/10">
              <div className="bg-wood/10 p-3 rounded-full">
                <LeafIcon className="w-6 h-6" color="#A0622A" />
              </div>
              <div>
                <p className="font-bold text-forest">Premium Wood</p>
                <p className="text-xs text-text-dark/60">Sourced & Crafted Locally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Banquet & Event Chairs",
      desc: "Elegant, durable seating for halls and events.",
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Dining & Coffee Tables",
      desc: "Handcrafted wooden tables that gather the family.",
      img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Sofas & Upholstered Seating",
      desc: "Comfortable, natural-toned fabric and leather sofas.",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Wardrobes & Storage Units",
      desc: "Custom fitted wooden wardrobes for your space.",
      img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Office Desks & Workstations",
      desc: "Professional wooden desks for productive environments.",
      img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Custom Bespoke Pieces",
      desc: "If you can dream it, our craftsmen can build it.",
      img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2039&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gold font-bold mb-4">What We Make</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">From elegant event seating to custom home furnishings, every piece is built with precision.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/50 border border-transparent hover:border-gold/50">
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-serif text-2xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-white/80 text-sm font-medium">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://wa.me/2348055244832" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold text-forest px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-lg">
            Tell Us What You Need <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Chairs', 'Tables', 'Sofas', 'Wardrobes', 'Office'];

  const portfolio = [
    { category: 'Chairs', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop' },
    { category: 'Tables', img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1976&auto=format&fit=crop' },
    { category: 'Sofas', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop' },
    { category: 'Wardrobes', img: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1974&auto=format&fit=crop' },
    { category: 'Office', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop' },
    { category: 'Chairs', img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop' },
    { category: 'Tables', img: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1982&auto=format&fit=crop' },
    { category: 'Sofas', img: 'https://images.unsplash.com/photo-1540574163026-643ea20abc46?q=80&w=2070&auto=format&fit=crop' },
    { category: 'Sofas', img: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=2000&auto=format&fit=crop' },
  ];

  const filteredPortfolio = activeTab === 'All' ? portfolio : portfolio.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <LeafIcon className="w-6 h-6" color="#1B3A2D" />
              <h2 className="font-serif text-4xl md:text-5xl text-forest font-bold">Crafted With Care</h2>
            </div>
            <p className="text-text-dark/70 text-lg max-w-xl">Explore our recent projects. Every piece is a testament to our dedication to quality and natural beauty.</p>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${activeTab === tab ? 'bg-forest text-white' : 'bg-white text-forest border border-forest/20 hover:border-forest'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPortfolio.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-sm">
              <img 
                src={item.img} 
                alt={`${item.category} furniture`} 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-forest/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3">
                    <ChevronRight className="w-6 h-6 text-forest" />
                  </div>
                  <span className="text-white font-serif text-xl font-bold">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-serif text-forest mb-6">Every piece is custom-made for you. Let's build yours.</p>
          <a href="https://wa.me/2348055244832" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-forest/90 transition-colors shadow-lg">
            <MessageCircle className="w-5 h-5" /> Start Your Order
          </a>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "What You Order Is What You Get",
      desc: "Exact specifications, no compromises. We build exactly to your design and measurements."
    },
    {
      title: "Neat & Precise Finishing",
      desc: "Every edge, joint and surface perfected. Our craftsmen pay attention to the smallest details."
    },
    {
      title: "Fast & Reliable Delivery",
      desc: "On-time delivery, every time. We respect your schedule and deliver when promised."
    },
    {
      title: "Excellent Customer Service",
      desc: "From first contact to delivery and beyond, we ensure a smooth, transparent process."
    }
  ];

  return (
    <section className="py-24 bg-earth text-white relative overflow-hidden wood-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-linen font-bold">Why Lagos Chooses Feel Nature</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl border-l-4 border-l-sage hover:bg-white/10 transition-colors">
              <LeafIcon className="w-8 h-8 mb-4" color="#7A9E7E" />
              <h3 className="font-serif text-2xl font-bold mb-3 text-linen">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Tioluwalase Boluwatife",
      time: "4 months ago",
      text: "He's Good at what he does — trusted and Reliable",
      initials: "TB"
    },
    {
      name: "Jessica Emelieze",
      time: "4 years ago",
      text: "Very neat finishing… what you order is what you get. Feel Nature Furniture maintains excellent customer service from the first contact to the point of delivery. Great job guys!",
      initials: "JE"
    },
    {
      name: "Dennis Chijioke Okonkwo",
      time: "4 years ago",
      text: "Very precise and fast delivery. On time job. Good returns on your money's worth.",
      initials: "DC",
      reply: "Thank you very much for choosing us."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-forest font-bold mb-6">Straight From Our Clients</h2>
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-forest/10">
            <span className="font-bold text-lg text-forest">5.0 / 5</span>
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold" />)}
            </div>
            <span className="text-text-dark/60 font-medium">— 10 Google Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-sage flex flex-col h-full relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-sage/20" />
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
              </div>
              <p className="text-text-dark/80 italic mb-6 flex-grow">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-text-dark">{review.name}</p>
                  <p className="text-xs text-text-dark/50">{review.time}</p>
                </div>
              </div>

              {review.reply && (
                <div className="mt-6 bg-linen p-4 rounded-xl border border-forest/10 relative">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-linen border-t border-l border-forest/10 transform rotate-45"></div>
                  <p className="text-sm text-forest font-medium"><span className="font-bold">Owner:</span> {review.reply}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://www.google.com/search?q=Feel+Nature+Furniture+Idimu" target="_blank" rel="noreferrer" className="text-forest font-bold hover:text-gold transition-colors underline underline-offset-4">
            Read all 10 5-star reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "1",
      title: "Consultation",
      desc: "Share your furniture vision and measurements.",
      icon: "🌿",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      num: "2",
      title: "Design & Quote",
      desc: "We plan your piece and give a fair price.",
      icon: "📐",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
    },
    {
      num: "3",
      title: "Craftsmanship",
      desc: "Built from quality natural materials with precision.",
      icon: "🪵",
      img: "https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      num: "4",
      title: "Delivery & Setup",
      desc: "Delivered on time, exactly as ordered.",
      icon: "🚚",
      img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-forest font-bold">From Tree to Your Home</h2>
          <p className="text-text-dark/70 mt-4 text-lg">A seamless process designed to bring nature into your space.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-forest/30 -translate-y-1/2 z-0"></div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 left-8 w-0.5 h-full border-l-2 border-dashed border-forest/30 z-0"></div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-forest text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold shadow-lg border-4 border-white relative">
                  {step.num}
                  <div className="absolute -top-2 -right-2 text-xl">{step.icon}</div>
                </div>
                
                <div className="flex-grow md:flex-grow-0">
                  <div className="w-full h-32 md:h-40 rounded-xl overflow-hidden mb-4 shadow-sm hidden md:block">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-2">{step.title}</h3>
                  <p className="text-text-dark/70 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-gold font-bold mb-6">Let's Build Something Beautiful</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              We're on Camp Davies Road, Idimu — visit our workshop or reach us anytime, day or night. We are open 24 hours to serve you.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full"><MapPin className="w-6 h-6 text-gold" /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Our Workshop</h4>
                  <p className="text-white/70">112 Camp Davies Road,<br />Idimu, Lagos 102213, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full"><Phone className="w-6 h-6 text-gold" /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-white/70">0805 524 4832</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full"><Clock className="w-6 h-6 text-gold" /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-white/70">Open 24 Hours, 7 Days a Week</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/2348055244832?text=Hello%20Feel%20Nature%20Furniture!%20I%20would%20like%20to%20order%20custom%20furniture." target="_blank" rel="noreferrer" className="bg-white text-forest px-8 py-4 rounded-full font-bold text-lg hover:bg-linen transition-colors shadow-lg flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6 text-[#25D366]" /> Chat With Us on WhatsApp
              </a>
              <a href="tel:+2348055244832" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call Us Now
              </a>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.856085526839!2d3.2721!3d6.5398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f0000000000%3A0x0!2s112%20Camp%20Davies%20Rd%2C%20Idimu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Feel Nature Furniture Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-earth text-white/80 py-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex flex-wrap justify-center items-center gap-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <LeafIcon key={i} className="w-24 h-24" color="#FFFFFF" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LeafLogo className="w-10 h-10" inverted={true} />
              <div className="flex flex-col text-white">
                <span className="font-serif font-bold text-xl leading-none">Feel Nature</span>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold mt-1">Furniture</span>
              </div>
            </div>
            <p className="font-serif italic text-xl text-linen mb-6">Feel the Difference. Own the Craft.</p>
            <p className="text-sm">Premium bespoke furniture crafted with natural materials in the heart of Lagos.</p>
          </div>

          {/* Links */}
          <div className="md:text-center">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <p className="mb-2">112 Camp Davies Road, Idimu, Lagos</p>
            <p className="mb-6">0805 524 4832</p>
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://wa.me/2348055244832" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm">
          <p className="mb-4 text-gold font-medium">Serving: Idimu | Egbeda | Ikotun | Iyana-Ipaja | Alimosho | All of Lagos</p>
          <p>© 2025 Feel Nature Furniture. All Rights Reserved. | 112 Camp Davies Road, Idimu, Lagos</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/2348055244832?text=Hello%20Feel%20Nature%20Furniture!%20I%20would%20like%20to%20order%20custom%20furniture." 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors group leaf-pulse"
      title="Order Furniture"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-forest font-bold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Order Furniture
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-text-dark bg-linen selection:bg-forest selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
