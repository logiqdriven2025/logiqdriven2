import { useEffect, useState, useRef } from "react";
import {
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const steps = [
  {
    title: "Discovery & Needs Analysis",
    description: "We start by understanding your business model, payment flows, technical setup, and operational priorities. This ensures every recommendation is tailored specifically to you."
  },
  {
    title: "Expert Introductions",
    description: "We match you with vetted providers that align with your needs for compliance, performance, and commercial terms. We personally introduce you to the right contact — so you skip the queue."
  },
  {
    title: "Guided Onboarding",
    description: "We assist with every step of the onboarding process: Provider application forms, Compliance and due diligence, Technical integration support."
  },
  {
    title: "Optimization & Go-Live",
    description: "We help secure favorable terms, confirm integration success, and ensure you're ready to accept payments."
  },
  {
    title: "Ongoing Relationship Support",
    description: "Even after you go live, we're here for provider questions, scaling needs, and backup provider sourcing."
  }
];

const benefits = [
  "Save Time – We do the research, outreach, and matching for you.",
  "Independent & Neutral – We're not tied to any single provider.",
  "Proven Network – Every provider is pre-vetted for reliability and compliance.",
  "Industry Expertise – We understand the payment landscape in depth.",
  "End-to-End Guidance – From discovery to onboarding to post-launch, we're with you."
];

const gains = [
  "Faster provider approvals",
  "Better commercial terms and fee structures",
  "Hassle-free onboarding with expert guidance",
  "Confidence your provider is compliant and stable",
  "A partner who's invested in your payment success"
];

// Stats can be used in future updates if needed
// const stats = [
//   { number: "500+", label: "Clients Served", icon: Building },
//   { number: "10M+", label: "Leads Generated", icon: Users },
//   { number: "98%", label: "Client Satisfaction", icon: Award },
//   { number: "150+", label: "Countries Reached", icon: Globe },
// ];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    volume: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        "service_owf7nen",
        "template_791nfis",
        formRef.current,
        "95XYeHWL6YgXKx7c8"
      );
      setSubmitStatus("success");
      formRef.current.reset();
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        volume: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            alt="Payment Technology"
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
            Seamless Payments Start with
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              the Right Partner
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto reveal">
            The payment industry can be complicated — but finding your ideal provider shouldn't be.
            We connect you with vetted, trusted payment service providers and guide you from first contact to go-live.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 reveal">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Matched Today
            </a>
          </div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto reveal">
            Free initial consultation — no obligation, no upfront cost.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who We Are
            </h2>
            <p className="text-xl text-gray-400 mb-6">
            We are payment industry specialists who understand how challenging it can be to find a reliable payment provider that fits your business.
Instead of wasting months on cold outreach, trial applications, and unpredictable results, we give you direct access to our curated network of trusted providers.
            </p>
            <p className="text-xl text-gray-400">
            Our team works independently — meaning we are not tied to any one provider.
Our only priority is ensuring your payment setup is reliable, compliant, and commercially optimized.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 reveal overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 opacity-90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-purple-400" />
                </div>
                <p className="text-xl text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section id="what-you-gain" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You Gain
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gains.map((gain, index) => (
              <div
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <p className="text-lg text-white">{gain}</p>
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
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Find Your Ideal Payment Provider — Starting Today
            </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your payment setup is the foundation of your business revenue. Choosing the wrong provider costs you time, money, and opportunities.
                Let us make sure you get it right from the start.
              </p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm reveal">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get Your Free Provider Match
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="volume"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Monthly Processing Volume
                  </label>
                  <input
                    type="text"
                    id="volume"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 text-center text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Start My Matchmaking Process"}
                </button>
                
                {submitStatus === "success" && (
                  <div className="text-green-400 text-center mt-4">
                    Thank you! We'll contact you within 24 hours with your first assessment.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="text-red-400 text-center mt-4">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
                
                {submitStatus === "idle" && (
                  <p className="text-sm text-gray-400 text-center">
                    We'll contact you within 24 hours with your first assessment.
                  </p>
                )}
              </form>
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