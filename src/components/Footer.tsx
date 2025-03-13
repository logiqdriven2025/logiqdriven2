import React from "react";
import { NavLink } from "react-router-dom";
import {
  Rocket,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="h-8 w-8 text-purple-500" />
              <span className="text-white font-bold text-xl">LeadGen Pro</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative lead generation and
              digital marketing solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/booking"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Book Consultation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@leadgenpro.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} LeadGen Pro Marketing Agency. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
