"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';

const CookiesPolicyPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Cookie Policy" 
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
                This Cookie Policy explains how Patro Patri uses cookies and similar technologies when you visit our website or use our mobile application.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and settings.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-700">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-700">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Preference Cookies</h3>
                    <p className="text-gray-700">These cookies remember your choices and preferences to provide a more personalized experience.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in various ways. Most browsers allow you to refuse cookies or delete them. However, disabling cookies may affect the functionality of our website.
                </p>
                <p className="text-gray-700">
                  For more information about managing cookies, please visit the help section of your browser.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">If you have any questions about our use of cookies, please contact us at:</p>
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

export default CookiesPolicyPage;
