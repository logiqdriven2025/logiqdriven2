import React, { useEffect } from "react";
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  BarChart,
  Brain,
  Notebook as Robot,
  Cpu,
  Network,
  BarChart as ChartBar,
  LineChart,
  Zap,
  Award,
  Building,
  Globe,
} from "lucide-react";
import {
  Service,
  Testimonial,
  CaseStudy,
  TeamMember,
  AISolution,
} from "../types";

const services: Service[] = [
  {
    title: "AI-Powered Lead Generation",
    description:
      "Generate high-quality leads using advanced AI algorithms and predictive analytics.",
    icon: "Target",
  },
  {
    title: "Market Intelligence",
    description:
      "Deep dive into market trends with AI-driven competitor and consumer analysis.",
    icon: "BarChart",
  },
  {
    title: "Social Media Optimization",
    description:
      "Engage your audience with AI-enhanced content and targeting strategies.",
    icon: "Users",
  },
  {
    title: "Growth Strategy",
    description:
      "Data-driven strategies for sustainable business growth and market expansion.",
    icon: "TrendingUp",
  },
];

const aiSolutions: AISolution[] = [
  {
    title: "Predictive Lead Scoring",
    description:
      "AI-powered system that identifies and ranks potential leads based on likelihood to convert.",
    features: [
      "Machine learning algorithms",
      "Behavioral analysis",
      "Real-time scoring",
      "Integration capabilities",
    ],
    icon: "Brain",
  },
  {
    title: "Automated Marketing Intelligence",
    description:
      "Real-time market analysis and competitor tracking using advanced AI.",
    features: [
      "Trend prediction",
      "Competitor monitoring",
      "Market opportunity detection",
      "Risk assessment",
    ],
    icon: "Robot",
  },
  {
    title: "Smart Content Optimization",
    description:
      "AI-driven content creation and optimization for maximum engagement.",
    features: [
      "SEO automation",
      "Content personalization",
      "A/B testing",
      "Performance analytics",
    ],
    icon: "Cpu",
  },
  {
    title: "Neural Network Analytics",
    description:
      "Deep learning solutions for complex market analysis and prediction.",
    features: [
      "Pattern recognition",
      "Predictive modeling",
      "Data visualization",
      "Automated reporting",
    ],
    icon: "Network",
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: "Global Tech Company Lead Generation",
    client: "TechCorp International",
    description:
      "Implemented AI-driven lead generation strategy resulting in 400% increase in qualified leads.",
    results: [
      "400% increase in leads",
      "65% reduction in CAC",
      "89% lead quality improvement",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "E-commerce Revenue Growth",
    client: "ShopMax Enterprise",
    description:
      "Revolutionized customer acquisition strategy with ML-powered targeting.",
    results: [
      "250% revenue growth",
      "45% increase in ROAS",
      "3x customer retention",
    ],
    image:
      "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "SaaS Market Expansion",
    client: "CloudSoft Solutions",
    description:
      "Leveraged AI insights for successful market expansion and user acquisition.",
    results: [
      "5x market penetration",
      "300% user base growth",
      "78% reduction in churn",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Strategist",
    bio: "Former Google AI researcher with 15+ years experience in machine learning and business intelligence.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Data Scientist",
    bio: "Pioneer in predictive analytics with expertise in neural networks and deep learning systems.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emma Thompson",
    role: "Marketing Technology Director",
    bio: "Digital marketing veteran specializing in AI-driven campaign optimization and automation.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "David Park",
    role: "Innovation Lead",
    bio: "Tech entrepreneur with multiple successful exits and deep expertise in emerging technologies.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "LeadGen Pro's AI-powered solutions transformed our lead generation process. We've seen a 300% increase in qualified leads and our sales team couldn't be happier.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Solutions",
    content:
      "Their strategic approach to AI-driven marketing has helped us reach new markets we never thought possible. The ROI has been exceptional.",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Growth Manager",
    company: "InnovateTech",
    content:
      "The predictive analytics and AI tools provided by LeadGen Pro have revolutionized our approach to customer acquisition. Simply outstanding.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const stats = [
  { number: "500+", label: "Clients Served", icon: Building },
  { number: "10M+", label: "Leads Generated", icon: Users },
  { number: "98%", label: "Client Satisfaction", icon: Award },
  { number: "150+", label: "Countries Reached", icon: Globe },
];

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="AI Technology"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900/50 to-gray-900 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 reveal">
            Transform Your Business with
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              AI-Powered Lead Generation
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto reveal">
            Harness the power of artificial intelligence to revolutionize your
            lead generation and marketing strategies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 reveal">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#ai-solutions"
              className="rounded-full px-8 py-4 text-lg font-semibold text-white border-2 border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
            >
              Explore AI Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-block p-4 bg-purple-500/10 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive AI-driven solutions to accelerate your business
              growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-purple-500 mb-6">
                  {service.icon === "Target" && <Target className="h-8 w-8" />}
                  {service.icon === "BarChart" && (
                    <BarChart className="h-8 w-8" />
                  )}
                  {service.icon === "Users" && <Users className="h-8 w-8" />}
                  {service.icon === "TrendingUp" && (
                    <TrendingUp className="h-8 w-8" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section
        id="ai-solutions"
        className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-400">
              Cutting-edge artificial intelligence technology for modern
              businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <div
                key={solution.title}
                className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-purple-500/10 rounded-xl">
                    {solution.icon === "Brain" && (
                      <Brain className="h-8 w-8 text-purple-400" />
                    )}
                    {solution.icon === "Robot" && (
                      <Robot className="h-8 w-8 text-purple-400" />
                    )}
                    {solution.icon === "Cpu" && (
                      <Cpu className="h-8 w-8 text-purple-400" />
                    )}
                    {solution.icon === "Network" && (
                      <Network className="h-8 w-8 text-purple-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{solution.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <Zap className="h-4 w-4 text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              Real results from our AI-driven strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="group bg-gray-800/30 rounded-2xl overflow-hidden reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-900/50 mix-blend-multiply" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-purple-400 mb-4">{study.client}</p>
                  <p className="text-gray-400 mb-4">{study.description}</p>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex items-center text-gray-400"
                      >
                        <ChartBar className="h-5 w-5 text-purple-400 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        id="technology"
        className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our AI Experts
            </h2>
            <p className="text-xl text-gray-400">
              Industry leaders in AI and marketing technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group bg-gray-800/30 rounded-2xl p-6 text-center reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-500/20 to-purple-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              Hear from businesses transformed by our AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-purple-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how our AI-powered solutions can help you achieve
              your growth goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/booking"
                className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </a>
              <a
                href="mailto:contact@leadgenpro.com"
                className="rounded-full px-8 py-4 text-lg font-semibold text-white border-2 border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-in-out;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
