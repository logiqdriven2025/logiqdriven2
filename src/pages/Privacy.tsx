import React from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

export default function Privacy() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Shield className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Data Protection
            </h3>
            <p>
              Your data is protected using industry-leading security measures.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Lock className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Secure Processing
            </h3>
            <p>All data processing follows strict security protocols.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Eye className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Transparency
            </h3>
            <p>Clear communication about data collection and usage.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <FileCheck className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Compliance
            </h3>
            <p>Full compliance with GDPR and other privacy regulations.</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              At Logiq Driven, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-white mb-2">
              2.1 Personal Information
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Name and contact information</li>
              <li>Business details</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">
              2.2 Technical Data
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve our services</li>
              <li>Process transactions</li>
              <li>Send marketing communications (with consent)</li>
              <li>Analyze and optimize our website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Data Protection
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Your Rights
            </h2>
            <p className="mb-4">
              Under applicable privacy laws, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Cookies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your
              browsing experience. You can control cookie preferences through
              your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Third-Party Services
            </h2>
            <p className="mb-4">
              We may use third-party services for analytics, payment processing,
              and marketing. These providers have their own privacy policies
              governing the use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Updates to Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically. We will notify you
              of any material changes by posting the new Privacy Policy on this
              page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at info@logiqdriven.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
