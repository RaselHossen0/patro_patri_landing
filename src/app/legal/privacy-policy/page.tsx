"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Privacy Policy" 
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
                At Patro Patri, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="mb-4 text-gray-700">We collect information that you provide directly to us when you:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Create an account and profile on our platform</li>
                  <li>Complete your profile with personal details and preferences</li>
                  <li>Upload photos and other content</li>
                  <li>Communicate with other users</li>
                  <li>Participate in surveys or promotions</li>
                  <li>Contact our customer support</li>
                </ul>
                <p className="text-gray-700">This information may include:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Demographic information (age, gender, location, education, occupation)</li>
                  <li>Personal preferences and interests</li>
                  <li>Photos and other content you choose to upload</li>
                  <li>Communication with other users</li>
                  <li>Payment information (for premium services)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="mb-4 text-gray-700">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Create and manage your account</li>
                  <li>Provide our matchmaking services</li>
                  <li>Suggest potential matches based on your preferences</li>
                  <li>Facilitate communication between users</li>
                  <li>Process payments for premium services</li>
                  <li>Send you updates, notifications, and promotional materials</li>
                  <li>Improve our services and develop new features</li>
                  <li>Ensure the security and integrity of our platform</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium User Data</h2>
                <p className="mb-4 text-gray-700">For users with premium subscriptions, we collect and process additional information:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Phone numbers (displayed only to other premium users)</li>
                  <li>Verification documents (for identity verification)</li>
                  <li>Advanced preferences and matching criteria</li>
                  <li>Payment details for subscription management</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700 text-sm">
                      <strong>Note:</strong> Premium user information, including verified phone numbers, is only visible to other premium users. This helps maintain privacy while providing enhanced communication options for our premium members.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Information</h2>
                <p className="mb-4 text-gray-700">We may share your information with:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Other users (as part of your profile and communications)</li>
                  <li>Service providers who help us operate our platform</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners for joint promotions (with your consent)</li>
                </ul>
                <p className="mt-4 text-gray-700">We do not sell your personal information to third parties.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                <p className="mb-4 text-gray-700">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Control your privacy settings within the app</li>
                  <li>Request a copy of your data</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p className="mt-4 text-gray-700">To exercise these rights, please contact us at privacy@patropatri.com.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="mb-4 text-gray-700">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage practices</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="mt-4 text-gray-700">However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="mb-4 text-gray-700">If you have any questions about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicyPage;
