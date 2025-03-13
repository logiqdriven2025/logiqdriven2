import React from "react";
import { Shield, Scale, FileCheck, AlertCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">
          Terms and Conditions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Shield className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Service Agreement
            </h3>
            <p>
              Clear terms governing our service delivery and client
              relationships.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Scale className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Fair Usage
            </h3>
            <p>Guidelines for appropriate use of our services and platforms.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <FileCheck className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Compliance
            </h3>
            <p>Commitment to legal and regulatory requirements.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <AlertCircle className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Liability</h3>
            <p>Clear outline of responsibilities and limitations.</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Agreement to Terms
            </h2>
            <p className="mb-4">
              By accessing and using Logiq Driven's services, you agree to be
              bound by these Terms and Conditions. If you disagree with any part
              of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Service Description
            </h2>
            <p className="mb-4">
              Logiq Driven provides AI-powered marketing and lead generation
              services. While we strive for excellence, we cannot guarantee
              specific results as outcomes may vary based on multiple factors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Client Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Timely communication and feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Intellectual Property
            </h2>
            <p className="mb-4">
              All content, features, and functionality are exclusive property of
              Logiq Driven and are protected by international copyright,
              trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Payment Terms
            </h2>
            <p className="mb-4">
              Services are billed according to the agreed-upon pricing
              structure. Payments are non-refundable unless otherwise specified
              in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p className="mb-4">
              Logiq Driven shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Termination
            </h2>
            <p className="mb-4">
              Either party may terminate the service agreement with written
              notice according to the specified notice period. Upon termination,
              you shall cease using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Changes to Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Continued
              use of our services following such changes constitutes acceptance
              of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Governing Law
            </h2>
            <p className="mb-4">
              These terms shall be governed by and construed in accordance with
              the laws of the jurisdiction where Logiq Driven operates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
