import React from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X, Rocket } from "lucide-react";

const navigation = [
  { title: "Services", href: "/#services" },
  { title: "AI Solutions", href: "/#ai-solutions" },
  { title: "Features", href: "/#features" },
  { title: "Integrations", href: "/#integrations" },
  { title: "Contact", href: "/#contact" },
  { title: "Booking", href: "/booking" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <HashLink
            to="/"
            className="-m-1.5 p-1.5 flex items-center gap-2 group"
          >
            <Rocket className="h-8 w-8 text-purple-500 transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-bold text-xl bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Logiq Driven
            </span>
          </HashLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 z-50" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <HashLink
              key={item.title}
              to={item.href}
              smooth
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-purple-400 transition-colors duration-200"
            >
              {item.title}
            </HashLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <HashLink
            to="/booking"
            className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hover:shadow-purple-500/25"
          >
            Book a Consultation
          </HashLink>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="fixed right-0 z-40 w-full bg-gray-900/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800/40">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-800">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <HashLink
                    key={item.title}
                    to={item.href}
                    smooth
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </HashLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
