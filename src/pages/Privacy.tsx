import React from 'react';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Shield className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Data Protection</h3>
            <p>We implement robust security measures to protect your personal information.</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Lock className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure Storage</h3>
            <p>Your data is encrypted and stored securely on protected servers.</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Eye className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
            <p>We're transparent about how we collect and use your information.</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <FileCheck className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
            <p>We comply with all relevant data protection regulations.</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact information</li>
              <li>Business details</li>
              <li>Communication preferences</li>
              <li>Website usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you</li>
              <li>Analyze and optimize our website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}