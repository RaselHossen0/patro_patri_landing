"use client";
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out to our team with any questions or feedback."
      />

      <section className="py-16 md:py-24 bg-appBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <h2 className="text-2xl font-bold text-burgundy mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-darkSlate mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-darkSlate mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-darkSlate mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-darkSlate mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent"
                      placeholder="+880 1XXX XXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-darkSlate mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing & Subscription</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="business">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-darkSlate mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent"
                      placeholder="Please describe your inquiry in detail..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-burgundy focus:ring-burgundy border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-darkSlate">
                        I agree to the <a href="/legal/privacy-policy" className="text-burgundy hover:underline">Privacy Policy</a> and consent to having my data processed.
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-burgundy text-white px-6 py-3 rounded-lg hover:bg-burgundy-dark transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                  <h2 className="text-2xl font-bold text-burgundy mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-burgundy/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-darkSlate">Phone</h3>
                        <p className="text-darkSlate mt-1">+880 1234 567890</p>
                        <p className="text-darkSlate mt-1">+880 1987 654321</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-burgundy/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-darkSlate">Email</h3>
                        <p className="text-darkSlate mt-1">info@patropatri.com</p>
                        <p className="text-darkSlate mt-1">support@patropatri.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-burgundy/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-darkSlate">Address</h3>
                        <p className="text-darkSlate mt-1">
                          123 Main Street, Suite 456<br />
                          Gulshan, Dhaka 1212<br />
                          Bangladesh
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-burgundy/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-darkSlate">Business Hours</h3>
                        <p className="text-darkSlate mt-1">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold text-burgundy mb-6">Connect With Us</h2>
                  <p className="text-darkSlate mb-6">Follow us on social media for updates, tips, and success stories.</p>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white p-3 rounded-full transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white p-3 rounded-full transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white p-3 rounded-full transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white p-3 rounded-full transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white p-3 rounded-full transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Visit Our Office</h2>
            <p className="text-darkSlate max-w-2xl mx-auto">
              We're located in the heart of Dhaka. Feel free to visit us during business hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg h-[400px] max-w-6xl mx-auto"
          >
            {/* Placeholder for Google Map - In a real implementation, you would use Google Maps API */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-burgundy mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-burgundy mb-2">Patro Patri Headquarters</h3>
                <p className="text-darkSlate">
                  123 Main Street, Suite 456<br />
                  Gulshan, Dhaka 1212<br />
                  Bangladesh
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  (Map integration would be implemented here with Google Maps API)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-appBackground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">Frequently Asked Questions</h2>
            <p className="text-darkSlate max-w-2xl mx-auto">
              Find quick answers to common questions about contacting us and getting support.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is the typical response time for inquiries?",
                  answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our customer support line for immediate assistance."
                },
                {
                  question: "How can I get technical support for the app?",
                  answer: "For technical support, you can use the contact form above and select 'Technical Support' as the subject, or email support@patropatri.com directly. Please include details about your device, app version, and the issue you're experiencing."
                },
                {
                  question: "Do you offer in-person consultations?",
                  answer: "Yes, we offer in-person consultations at our Dhaka office. Please schedule an appointment in advance by contacting our customer service team."
                },
                {
                  question: "How can I report inappropriate behavior from another user?",
                  answer: "You can report inappropriate behavior directly through the app using the 'Report' feature on the user's profile, or by contacting our support team with details about the incident."
                },
                {
                  question: "I have a business proposal. Who should I contact?",
                  answer: "For business proposals or partnership opportunities, please use the contact form and select 'Business Partnership' as the subject, or email business@patropatri.com with details about your proposal."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-burgundy mb-3">{faq.question}</h3>
                    <p className="text-darkSlate">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
