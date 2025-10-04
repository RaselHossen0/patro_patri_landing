"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const faqs = [
    {
      question: "How does Patro Patri work?",
      answer: "Patro Patri is a Bangladeshi matrimony platform that helps you find compatible matches based on your preferences, values, and cultural background. You can create a profile, set your preferences, and our smart matching algorithm will suggest potential matches."
    },
    {
      question: "Is Patro Patri free to use?",
      answer: "Yes, Patro Patri offers a free plan with basic features. We also have premium plans that offer additional features like unlimited matches, priority matching, advanced filters, and more."
    },
    {
      question: "How do I create an account?",
      answer: "You can create an account by downloading our mobile app from Google Play Store or visiting our website. Simply provide your basic information, verify your email, and complete your profile."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes, we take your privacy seriously. We use industry-standard encryption and security measures to protect your personal information. You can control who sees your profile and what information is visible."
    },
    {
      question: "Can family members be involved in the process?",
      answer: "Yes, Patro Patri has unique features that allow family members to participate in the matchmaking process while respecting individual choices. You can invite family members to view profiles and provide feedback."
    },
    {
      question: "How do I contact potential matches?",
      answer: "Once you find someone you're interested in, you can send them a message through our secure messaging system. Premium users get additional communication features like phone number access."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, mobile banking, and bKash for Bangladeshi users. All payments are processed securely through our payment partners."
    },
    {
      question: "Can I delete my account?",
      answer: "Yes, you can delete your account at any time. Go to your account settings and select 'Delete Account'. Please note that this action is irreversible and all your data will be permanently removed."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about Patro Patri"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
                <p className="text-gray-600 mb-6">If you couldn't find the answer you're looking for, our support team is here to help.</p>
                <a
                  href="/support"
                  className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Contact Support
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
