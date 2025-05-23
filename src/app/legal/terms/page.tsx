"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Terms of Service" 
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
              <p className="lead text-xl text-darkSlate mb-8">
                Welcome to Patro Patri. These Terms of Service ("Terms") govern your use of the Patro Patri mobile application and website (collectively, the "Service"). Please read these Terms carefully before using the Service.
              </p>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">1. Acceptance of Terms</h2>
                <p className="text-darkSlate">
                  By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, you may not access or use the Service.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">2. Eligibility</h2>
                <p className="mb-4 text-darkSlate">To use the Service, you must:</p>
                <ul className="list-disc pl-6 text-darkSlate">
                  <li>Be at least 18 years old</li>
                  <li>Be legally able to enter into a binding contract</li>
                  <li>Not be prohibited from using the Service under applicable law</li>
                  <li>Be single, divorced, widowed, or legally separated and seeking a marital relationship</li>
                </ul>
                <p className="mt-4 text-darkSlate">
                  By using the Service, you represent and warrant that you meet all of the above eligibility requirements.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">3. Account Registration</h2>
                <p className="mb-4 text-darkSlate">
                  To use certain features of the Service, you must register for an account. When you register, you agree to:
                </p>
                <ul className="list-disc pl-6 text-darkSlate">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your account credentials secure</li>
                  <li>Not share your account with anyone else</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p className="mt-4 text-darkSlate">
                  You are responsible for all activities that occur under your account.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">4. Premium Services</h2>
                <p className="mb-4 text-darkSlate">
                  Patro Patri offers both free and premium services. Premium services include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-darkSlate">
                  <li>Access to verified phone numbers of other premium users</li>
                  <li>Priority matching and visibility</li>
                  <li>Advanced search filters</li>
                  <li>Enhanced communication features</li>
                  <li>Profile verification badge</li>
                </ul>
                <p className="mb-4 text-darkSlate">
                  By subscribing to a premium service, you agree to:
                </p>
                <ul className="list-disc pl-6 text-darkSlate">
                  <li>Pay all fees associated with your subscription</li>
                  <li>Provide accurate payment information</li>
                  <li>Accept our automatic renewal policy (subscriptions will automatically renew until canceled)</li>
                  <li>Abide by any additional terms specific to premium services</li>
                </ul>
                <div className="bg-gold/10 p-4 rounded-lg border-l-4 border-gold mt-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-darkSlate text-sm">
                      <strong>Note:</strong> Premium features, including access to verified phone numbers, are only available to premium subscribers. This helps maintain privacy while providing enhanced communication options for our premium members.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">5. User Conduct</h2>
                <p className="mb-4 text-darkSlate">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc pl-6 text-darkSlate">
                  <li>Using the Service for any illegal purpose</li>
                  <li>Creating multiple accounts</li>
                  <li>Providing false information</li>
                  <li>Harassing, threatening, or intimidating other users</li>
                  <li>Sharing obscene, offensive, or inappropriate content</li>
                  <li>Impersonating another person</li>
                  <li>Attempting to obtain financial benefits from other users</li>
                  <li>Attempting to circumvent any security features of the Service</li>
                  <li>Using the Service for commercial purposes without our consent</li>
                  <li>Engaging in any activity that interferes with the proper functioning of the Service</li>
                </ul>
                <p className="mt-4 text-darkSlate">
                  Violation of these rules may result in suspension or termination of your account.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">6. Verification Process</h2>
                <p className="mb-4 text-darkSlate">
                  Patro Patri offers profile verification to enhance trust and safety on our platform. By participating in our verification process, you:
                </p>
                <ul className="list-disc pl-6 text-darkSlate">
                  <li>Consent to our verification procedures, which may include ID verification</li>
                  <li>Agree to provide accurate documentation and information</li>
                  <li>Understand that verification badges are granted at our discretion</li>
                  <li>Acknowledge that verification does not guarantee the authenticity or character of a user</li>
                </ul>
                <p className="mt-4 text-darkSlate">
                  We reserve the right to revoke verification status at any time if we determine that a user has violated our terms or provided false information.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">7. Intellectual Property</h2>
                <p className="mb-4 text-darkSlate">
                  The Service and its original content, features, and functionality are owned by Patro Patri and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-darkSlate">
                  You may not copy, modify, distribute, sell, or lease any part of the Service without our prior written consent.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">8. Limitation of Liability</h2>
                <p className="mb-4 text-darkSlate">
                  To the maximum extent permitted by law, Patro Patri shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 text-darkSlate">
                  <li>Your access to or use of or inability to access or use the Service</li>
                  <li>Any conduct or content of any third party on the Service</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  <li>Interactions with other users of the Service</li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">9. Termination</h2>
                <p className="text-darkSlate">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">10. Changes to Terms</h2>
                <p className="text-darkSlate">
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-burgundy mb-4">11. Contact Us</h2>
                <p className="mb-4 text-darkSlate">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-appBackground p-4 rounded-lg">
                  <p className="text-darkSlate">
                    <strong>Email:</strong> legal@patropatri.com<br />
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

export default TermsOfServicePage;
