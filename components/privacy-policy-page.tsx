"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Download, Printer, Mail, MessageCircle, FileText, HelpCircle } from "lucide-react"
import { LegalFooter } from "./legal-footer"
import { MobileBottomNav } from "./mobile-bottom-nav"
import { UniversalSearch } from "./universal-search"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "information-collection", title: "Information We Collect" },
  { id: "information-use", title: "How We Use Information" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "data-security", title: "Data Security" },
  { id: "user-rights", title: "Your Rights" },
  { id: "cookies", title: "Cookies and Tracking" },
  { id: "international-transfers", title: "International Transfers" },
  { id: "data-retention", title: "Data Retention" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "updates", title: "Policy Updates" },
  { id: "contact", title: "Contact Information" },
]

export function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleDownloadPDF = () => {
    window.open("/api/generate-pdf?type=privacy", "_blank")
  }

  const handlePrintVersion = () => {
    window.open("/print-version?type=privacy", "_blank")
  }

  const handleEmailSupport = () => {
    window.location.href =
      "mailto:privacy@buzlin.com?subject=Privacy Policy Inquiry&body=Hello Buzlin Privacy Team,%0D%0A%0D%0AI have a question regarding your privacy policy:%0D%0A%0D%0A"
  }

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Universal Search Overlay */}
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveSection(section.id)
                      document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-1/2">
            <div className="prose prose-gray max-w-none">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

              <section id="overview" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Buzlin, we are committed to protecting your privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you use our multi-vendor marketplace platform.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our platform connects customers with service providers across various categories including home
                  services, professional services, and digital services. We understand the importance of trust in our
                  marketplace and are dedicated to maintaining the highest standards of data protection.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using Buzlin, you agree to the collection and use of information in accordance with this policy. If
                  you do not agree with our policies and practices, do not use our services.
                </p>
              </section>

              <section id="information-collection" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Create an account on our platform</li>
                  <li>Book services through our marketplace</li>
                  <li>Register as a service provider</li>
                  <li>Contact our customer support</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Participate in surveys or promotional activities</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Types of Information Collected</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Account Information</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Name, email address, phone number, profile picture, and account preferences.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Service Information</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Service requests, booking details, location information, and service history.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Payment Information</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Billing address, payment method details (processed securely by our payment processors), and
                      transaction history.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Communication Data</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Messages between users, customer support interactions, and feedback or reviews.
                    </p>
                  </div>
                </div>
              </section>

              <section id="information-use" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Providing and maintaining our marketplace services</li>
                  <li>Processing bookings and facilitating transactions</li>
                  <li>Communicating with you about your account and services</li>
                  <li>Improving our platform and user experience</li>
                  <li>Preventing fraud and ensuring platform security</li>
                  <li>Complying with legal obligations and resolving disputes</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Analyzing usage patterns and platform performance</li>
                </ul>
              </section>

              <section id="information-sharing" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">With Service Providers</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We share necessary information with vendors to facilitate service delivery, including contact
                      information and service requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">With Third-Party Service Providers</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We work with trusted partners for payment processing, analytics, customer support, and other
                      business functions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">For Legal Compliance</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We may disclose information when required by law, court order, or to protect our rights and the
                      safety of our users.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Business Transfers</h4>
                    <p className="text-gray-700 leading-relaxed">
                      In the event of a merger, acquisition, or sale of assets, user information may be transferred as
                      part of the transaction.
                    </p>
                  </div>
                </div>
              </section>

              <section id="data-security" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure data storage with encryption at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and employee training</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  While we strive to protect your information, no method of transmission over the internet or electronic
                  storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your
                  data using industry best practices.
                </p>
              </section>

              <section id="user-rights" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate or incomplete information</li>
                  <li>Right to delete your personal information</li>
                  <li>Right to restrict processing of your information</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise these rights, please contact our Privacy Officer at privacy@buzlin.com. We will respond to
                  your request within 30 days.
                </p>
              </section>

              <section id="cookies" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our platform. These
                  technologies help us:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze platform usage and performance</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Prevent fraud and improve security</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You can control cookie settings through your browser preferences. However, disabling certain cookies
                  may affect the functionality of our platform.
                </p>
              </section>

              <section id="international-transfers" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Transfers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your information may be transferred to and processed in countries other than your country of
                  residence. We ensure that such transfers comply with applicable data protection laws and implement
                  appropriate safeguards.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For transfers outside the European Economic Area, we rely on adequacy decisions, standard contractual
                  clauses, or other approved transfer mechanisms.
                </p>
              </section>

              <section id="data-retention" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                  policy, unless a longer retention period is required by law.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Account information: Until account deletion plus 30 days</li>
                  <li>Transaction records: 7 years for tax and legal compliance</li>
                  <li>Communication data: 3 years for customer service purposes</li>
                  <li>Marketing data: Until you unsubscribe or object</li>
                </ul>
              </section>

              <section id="childrens-privacy" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If we become aware that we have collected personal information
                  from a child under 13, we will take steps to delete such information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you are a parent or guardian and believe your child has provided us with personal information,
                  please contact us immediately.
                </p>
              </section>

              <section id="updates" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                  requirements. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Posting the updated policy on our platform</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Displaying prominent notices on our platform</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Your continued use of our services after the effective date of the updated policy constitutes
                  acceptance of the changes.
                </p>
              </section>

              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Privacy Officer:</strong> support@buzlin.ca
                    </p>
                    <p className="text-gray-700">
                      <strong>Legal Team:</strong> support@buzlin.ca
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button
                  onClick={handleDownloadPDF}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={handlePrintVersion}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Version</span>
                </button>

                <button
                  onClick={handleEmailSupport}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Support</span>
                </button>

                <Link
                  href="mailto:legal@buzlin.com"
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>

                <Link
                  href="/terms-of-service"
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Terms of Service</span>
                </Link>

                <Link
                  href="/faq"
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>FAQ</span>
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">Download Our App</h4>
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                    <img src="/buzlin-qr.jpg" alt="QR Code to download Buzlin app" className="w-30 h-30" />
                  </div>
                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    Scan to download the Buzlin app and access our services on the go
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LegalFooter />
      <MobileBottomNav />
    </div>
  )
}
