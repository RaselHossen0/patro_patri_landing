"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';

const SitemapPage = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      pages: [
        { name: "Home", url: "/" },
        { name: "Features", url: "/features" },
        { name: "Pricing", url: "/pricing" },
        { name: "About Us", url: "/about" },
        { name: "Contact", url: "/contact" }
      ]
    },
    {
      category: "Legal Pages",
      pages: [
        { name: "Privacy Policy", url: "/legal/privacy-policy" },
        { name: "Terms of Service", url: "/legal/terms" },
        { name: "Cookie Policy", url: "/legal/cookies" },
        { name: "Data Protection", url: "/legal/data-protection" }
      ]
    },
    {
      category: "Support",
      pages: [
        { name: "FAQ", url: "/faq" },
        { name: "Support", url: "/support" },
        { name: "Careers", url: "/careers" }
      ]
    },
    {
      category: "User Pages",
      pages: [
        { name: "Team", url: "/about/team" },
        { name: "Payment Success", url: "/payment/success" },
        { name: "Payment Cancel", url: "/payment/cancel" },
        { name: "Account Delete", url: "/users/account-delete" }
      ]
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Sitemap" 
        subtitle="Navigate through all pages on Patro Patri"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteStructure.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h2>
                  <ul className="space-y-2">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <a
                          href={page.url}
                          className="text-purple-600 hover:text-purple-700 hover:underline"
                        >
                          {page.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Our App</h2>
                <p className="text-gray-600 mb-6">Get the full Patro Patri experience on your mobile device.</p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.patropatri.matrimony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Download from Google Play
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SitemapPage;
