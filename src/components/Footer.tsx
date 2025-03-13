import React from "react";
import { HashLink } from "react-router-hash-link";
import { Rocket, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <HashLink to="/" className="flex items-center gap-2 mb-6">
              <Rocket className="h-8 w-8 text-purple-500" />
              <span className="text-white font-bold text-xl">Logiq Driven</span>
            </HashLink>
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative lead generation and
              digital marketing solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <HashLink
                  to="/"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/booking"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Book Consultation
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/privacy"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Privacy Policy
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/terms"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Terms & Conditions
                </HashLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@logiqdriven.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>
                  Suite 1, 4th Floor, Exchange House, 54/58 Ahtol Street,
                  Douglas, Isle Of Man, IM 1JD
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Logiq Driven Marketing Agency. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
