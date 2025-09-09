"use client"

import { useState } from "react"
import Link from "next/link"
import { LegalFooter } from "./legal-footer"
import { Search, Download, Printer, Mail, MessageCircle, FileText, HelpCircle } from "lucide-react"
import { UniversalSearch } from "./universal-search"


const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account on Buzlin?",
        answer:
          "Download the Buzlin app from the App Store or Google Play Store. Tap 'Sign Up' and provide your email, phone number, and create a secure password. You'll receive a verification code to confirm your account. Once verified, you can complete your profile and start using the platform.",
      },
      {
        question: "Is Buzlin free to use?",
        answer:
          "Creating an account and browsing services is completely free. For customers, you only pay for the services you book. For vendors, we charge a small commission on completed bookings to maintain and improve the platform.",
      },
      {
        question: "What types of services are available on Buzlin?",
        answer:
          "Buzlin offers a wide range of services including home cleaning, plumbing, electrical work, beauty services, tutoring, fitness training, event planning, and many more. Our marketplace connects you with verified local service providers in your area.",
      },
      {
        question: "How do I know if a vendor is reliable?",
        answer:
          "All vendors go through a verification process including background checks and skill assessments. You can view vendor ratings, read customer reviews, see their portfolio, and check their response time before booking.",
      },
    ],
  },
  {
    category: "Booking Services",
    questions: [
      {
        question: "How do I book a service?",
        answer:
          "Browse services by category or search for specific needs. Select a vendor, choose your preferred date and time, provide service details, and confirm your booking with payment. You'll receive instant confirmation and can track your booking status in the app.",
      },
      {
        question: "Can I schedule services in advance?",
        answer:
          "Yes, you can book services up to 30 days in advance. Many vendors offer flexible scheduling options including same-day, next-day, or future bookings based on their availability.",
      },
      {
        question: "What if I need to reschedule or cancel?",
        answer:
          "You can reschedule or cancel bookings through the app. Cancellation policies vary by vendor, but generally, you can cancel free of charge up to 24 hours before the scheduled service. Late cancellations may incur fees as per the vendor's policy.",
      },
      {
        question: "How do I communicate with my vendor?",
        answer:
          "The app includes a built-in messaging system where you can chat directly with your vendor. You can share photos, ask questions, and coordinate details. All communication is logged for your security and reference.",
      },
    ],
  },
  {
    category: "Payments & Pricing",
    questions: [
      {
        question: "How does payment work?",
        answer:
          "We accept all major credit cards, debit cards, and digital wallets. Payment is processed securely when you confirm your booking. For your protection, payment is held until the service is completed to your satisfaction.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No hidden fees. The price you see includes the service cost and any applicable taxes. Some vendors may charge extra for materials or travel outside their service area, but this will be clearly communicated upfront.",
      },
      {
        question: "What if I'm not satisfied with the service?",
        answer:
          "We have a satisfaction guarantee. If you're not happy with the service, contact our support team within 24 hours. We'll work with you and the vendor to resolve the issue, which may include a partial or full refund.",
      },
      {
        question: "How do refunds work?",
        answer:
          "Refunds are processed based on our refund policy and the specific circumstances. Approved refunds are typically processed within 3-5 business days back to your original payment method.",
      },
    ],
  },
  {
    category: "For Vendors",
    questions: [
      {
        question: "How do I become a vendor on Buzlin?",
        answer:
          "Apply through our vendor portal by providing business information, certifications, insurance details, and portfolio samples. After verification and approval, you can create your service listings and start receiving bookings.",
      },
      {
        question: "What commission does Buzlin charge?",
        answer:
          "Our commission ranges from 8-15% depending on your service category and volume. New vendors get reduced rates for their first 30 days. There are no monthly fees or hidden charges.",
      },
      {
        question: "How do I get paid?",
        answer:
          "Payments are released to your account after service completion and customer confirmation. You can withdraw earnings weekly to your bank account or digital wallet. Payment processing typically takes 1-2 business days.",
      },
      {
        question: "Can I set my own prices and availability?",
        answer:
          "Yes, you have full control over your pricing, service descriptions, and availability calendar. You can also offer special promotions and discounts to attract more customers.",
      },
    ],
  },
  {
    category: "Account & Privacy",
    questions: [
      {
        question: "How is my personal information protected?",
        answer:
          "We use industry-standard encryption and security measures to protect your data. Your personal information is never shared with third parties without your consent, except as required for service delivery or legal compliance.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, you can delete your account at any time through the app settings. This will permanently remove your profile and data. Note that you cannot delete your account if you have pending bookings or unresolved disputes.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Go to 'Profile Settings' in the app to update your personal information, contact details, payment methods, and preferences. Some changes may require verification for security purposes.",
      },
      {
        question: "What data does Buzlin collect?",
        answer:
          "We collect information necessary to provide our services, including contact details, location data for service matching, payment information, and usage analytics. See our Privacy Policy for complete details.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "The app is not working properly. What should I do?",
        answer:
          "First, try closing and reopening the app, or restart your device. Ensure you have the latest app version installed. If problems persist, contact our technical support team with details about your device and the issue.",
      },
      {
        question: "I'm not receiving notifications. How do I fix this?",
        answer:
          "Check your device notification settings and ensure Buzlin has permission to send notifications. Also verify your notification preferences in the app settings. If you're still not receiving notifications, contact support.",
      },
      {
        question: "How do I report a bug or suggest a feature?",
        answer:
          "Use the 'Feedback' option in the app menu or email us at support@buzlin.com. We appreciate user feedback and regularly update the app based on suggestions and reported issues.",
      },
      {
        question: "Is Buzlin available in my area?",
        answer:
          "Buzlin is currently available in major cities across the United States and Canada. Enter your location in the app to see available services in your area. We're continuously expanding to new markets.",
      },
    ],
  },
]

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Getting Started")
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const filteredFAQ = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          !searchQuery ||
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-white">
      <UniversalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      {/* Header */}
      <header className="bg-white sticky top-0 z-30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                  <img src="/buzlin.png" alt="Buzlin" className="h-10 w-auto" />
                  <span className="text-xl font-bold text-gray-900 mt-6">Buzlin</span>
              </Link>
              </div>
              <h1 className="hidden xs:block text-base sm:text-lg font-semibold text-gray-900">Privacy Policy</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
              </button>
              <div className="hidden md:block text-sm text-gray-500 font-medium whitespace-nowrap">
                Last updated: December 2024
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about using Buzlin's marketplace platform
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search FAQ..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {faqData.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => setActiveCategory(category.category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeCategory === category.category
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Still need help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <Link
                  href="mailto:support@buzlin.com"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                >
                  Contact Support
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {searchQuery ? (
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Search Results ({filteredFAQ.reduce((acc, cat) => acc + cat.questions.length, 0)})
                </h2>
                {filteredFAQ.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">{category.category}</h3>
                    <div className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg">
                          <button
                            onClick={() =>
                              setOpenQuestion(
                                openQuestion === `${category.category}-${index}`
                                  ? null
                                  : `${category.category}-${index}`,
                              )
                            }
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900">{faq.question}</span>
                            <svg
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                openQuestion === `${category.category}-${index}` ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {openQuestion === `${category.category}-${index}` && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {faqData
                  .filter((category) => category.category === activeCategory)
                  .map((category) => (
                    <div key={category.category}>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h2>
                      <div className="space-y-4">
                        {category.questions.map((faq, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg">
                            <button
                              onClick={() =>
                                setOpenQuestion(
                                  openQuestion === `${category.category}-${index}`
                                    ? null
                                    : `${category.category}-${index}`,
                                )
                              }
                              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-medium text-gray-900">{faq.question}</span>
                              <svg
                                className={`w-5 h-5 text-gray-500 transition-transform ${
                                  openQuestion === `${category.category}-${index}` ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {openQuestion === `${category.category}-${index}` && (
                              <div className="px-6 pb-4">
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                Legal Center
              </Link>
            </div>
            <div className="text-sm text-gray-500">
              Need more help?{" "}
              <Link href="mailto:support@buzlin.ca" className="text-blue-600 hover:text-blue-700">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      <LegalFooter />
    </div>
  )
}
