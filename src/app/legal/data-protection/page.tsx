"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';

const DataProtectionPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Data Protection Policy" 
        subtitle="Last updated: May 23, 2025"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="lead text-xl text-gray-700 mb-8">
                This Data Protection Policy outlines how Patro Patri collects, uses, stores, and protects your personal information in accordance with applicable data protection laws.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data We Collect</h2>
                <p className="text-gray-700 mb-4">We collect the following types of personal data:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Demographic information (age, gender, location, education)</li>
                  <li>Profile information and preferences</li>
                  <li>Photos and other content you upload</li>
                  <li>Communication data</li>
                  <li>Payment information (for premium services)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Data</h2>
                <p className="text-gray-700 mb-4">We use your personal data to:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Provide our matrimony services</li>
                  <li>Create and manage your account</li>
                  <li>Suggest compatible matches</li>
                  <li>Facilitate communication between users</li>
                  <li>Process payments</li>
                  <li>Improve our services</li>
                  <li>Ensure platform security</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your data:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Encryption of sensitive data</li>
                  <li>Secure data storage</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Right to access your data</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to delete your data</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">For any data protection inquiries, please contact us at:</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@patropatri.com<br />
                    <strong>Address:</strong> 123 Main Street, Dhaka, Bangladesh<br />
                    <strong>Phone:</strong> +880 1234 567890
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DataProtectionPage;
