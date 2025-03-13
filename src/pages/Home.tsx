import React, { useEffect } from "react";
import {
  Target,
  Users,
  TrendingUp,
  BarChart,
  Brain,
  Notebook as Robot,
  Cpu,
  Network,
  LineChart,
  Zap,
  Award,
  Building,
  Globe,
  MessageSquare,
  Mail,
  Database,
  Cloud,
  Share2,
  Settings,
  PieChart,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { Service, Feature, Integration, AISolution } from "../types";

const services: Service[] = [
  {
    title: "AI-Powered Lead Generation",
    description:
      "Generate high-quality leads using advanced AI algorithms and predictive analytics.",
    icon: "Target",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Market Intelligence",
    description:
      "Deep dive into market trends with AI-driven competitor and consumer analysis.",
    icon: "BarChart",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Social Media Optimization",
    description:
      "Engage your audience with AI-enhanced content and targeting strategies.",
    icon: "Users",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Growth Strategy",
    description:
      "Data-driven strategies for sustainable business growth and market expansion.",
    icon: "TrendingUp",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=800&q=80",
  },
];

const features: Feature[] = [
  {
    title: "Advanced Analytics Dashboard",
    description:
      "Real-time insights and performance metrics with customizable reporting capabilities.",
    metrics: [
      "Real-time data visualization",
      "Custom report generation",
      "Predictive analytics",
      "Performance tracking",
    ],
    icon: "PieChart",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Automated Workflow Engine",
    description:
      "Streamline your lead generation process with intelligent automation and routing.",
    metrics: [
      "Smart lead distribution",
      "Automated follow-ups",
      "Process optimization",
      "Integration capabilities",
    ],
    icon: "Workflow",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Multi-Channel Integration",
    description:
      "Seamlessly connect with your existing tools and platforms for unified lead management.",
    metrics: [
      "CRM integration",
      "Marketing automation",
      "API connectivity",
      "Data synchronization",
    ],
    icon: "GitBranch",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80",
  },
];

const integrations: Integration[] = [
  {
    name: "CRM Systems",
    description: "Seamless integration with popular CRM platforms",
    category: "Sales",
    icon: "Database",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marketing Platforms",
    description: "Connect with your favorite marketing tools",
    category: "Marketing",
    icon: "Mail",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Communication Tools",
    description: "Integrate with messaging and email platforms",
    category: "Communication",
    icon: "MessageSquare",
    image:
      "https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Analytics Platforms",
    description: "Connect with advanced analytics tools",
    category: "Analytics",
    icon: "LineChart",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cloud Services",
    description: "Integration with major cloud providers",
    category: "Infrastructure",
    icon: "Cloud",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Collaboration Tools",
    description: "Connect with team collaboration platforms",
    category: "Collaboration",
    icon: "Share2",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
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
    handleScroll();

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
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
              alt="Floating Tech 1"
              className="absolute top-1/4 -left-20 w-64 h-64 object-cover rounded-full opacity-20 float"
              style={{ animationDelay: "0s" }}
            />
            <img
              src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&w=800&q=80"
              alt="Floating Tech 2"
              className="absolute top-1/3 right-10 w-48 h-48 object-cover rounded-full opacity-20 float"
              style={{ animationDelay: "1s" }}
            />
            <img
              src="https://images.unsplash.com/photo-1638815401319-702d3b5dfd2a?auto=format&fit=crop&w=800&q=80"
              alt="Floating Tech 3"
              className="absolute bottom-1/4 -right-20 w-72 h-72 object-cover rounded-full opacity-20 float"
              style={{ animationDelay: "2s" }}
            />
          </div>
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
                className="group bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 reveal overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-purple-900/30" />
                  <div className="absolute top-4 left-4 text-purple-500">
                    {service.icon === "Target" && (
                      <Target className="h-8 w-8" />
                    )}
                    {service.icon === "BarChart" && (
                      <BarChart className="h-8 w-8" />
                    )}
                    {service.icon === "Users" && <Users className="h-8 w-8" />}
                    {service.icon === "TrendingUp" && (
                      <TrendingUp className="h-8 w-8" />
                    )}
                  </div>
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
        className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative"
      >
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 gap-4 opacity-5">
            {aiSolutions.map((solution, index) => (
              <img
                key={index}
                src={solution.image}
                alt={solution.title}
                className="w-full h-96 object-cover"
              />
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
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
                className="bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 reveal overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
                </div>
                <div className="p-8">
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
                      <p className="text-gray-400 mb-4">
                        {solution.description}
                      </p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-400">
              Powerful tools designed for modern business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gray-800/30 rounded-2xl overflow-hidden reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
                </div>
                <div className="p-8">
                  <div className="inline-block p-4 bg-purple-500/10 rounded-xl mb-6">
                    {feature.icon === "PieChart" && (
                      <PieChart className="h-8 w-8 text-purple-400" />
                    )}
                    {feature.icon === "Workflow" && (
                      <Settings className="h-8 w-8 text-purple-400" />
                    )}
                    {feature.icon === "GitBranch" && (
                      <GitBranch className="h-8 w-8 text-purple-400" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.metrics.map((metric, metricIndex) => (
                      <li
                        key={metricIndex}
                        className="flex items-center text-gray-400"
                      >
                        <Sparkles className="h-5 w-5 text-purple-400 mr-3" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400">
              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="group bg-gray-800/30 rounded-2xl overflow-hidden reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img
                    src={integration.image}
                    alt={integration.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-purple-500/10 rounded-xl">
                      {integration.icon === "Database" && (
                        <Database className="h-6 w-6 text-purple-400" />
                      )}
                      {integration.icon === "Mail" && (
                        <Mail className="h-6 w-6 text-purple-400" />
                      )}
                      {integration.icon === "MessageSquare" && (
                        <MessageSquare className="h-6 w-6 text-purple-400" />
                      )}
                      {integration.icon === "LineChart" && (
                        <LineChart className="h-6 w-6 text-purple-400" />
                      )}
                      {integration.icon === "Cloud" && (
                        <Cloud className="h-6 w-6 text-purple-400" />
                      )}
                      {integration.icon === "Share2" && (
                        <Share2 className="h-6 w-6 text-purple-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {integration.name}
                      </h3>
                      <p className="text-purple-400">{integration.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-400">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&w=1920&q=80"
            alt="Abstract Technology"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 opacity-90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative">
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
                href="mailto:info@logiqdriven.com"
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

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
