"use client"

import { useState } from "react"
import Link from "next/link"
import { LegalFooter } from "./legal-footer"
import { MobileBottomNav } from "./mobile-bottom-nav"
import { Search, Download, Printer, Mail, MessageCircle, FileText, HelpCircle } from "lucide-react"
import { UniversalSearch } from "./universal-search"


const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "service-description", title: "Service Description" },
  { id: "user-accounts", title: "User Accounts" },
  { id: "vendor-terms", title: "Vendor Terms" },
  { id: "customer-terms", title: "Customer Terms" },
  { id: "payment-terms", title: "Payment Terms" },
  { id: "prohibited-activities", title: "Prohibited Activities" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "dispute-resolution", title: "Dispute Resolution" },
  { id: "termination", title: "Termination" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
]

export function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("acceptance")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
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
          {/* Sidebar */}
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

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full text-left text-sm text-blue-600 hover:text-blue-700">Download PDF</button>
                  <button className="w-full text-left text-sm text-blue-600 hover:text-blue-700">Print Version</button>
                  <Link href="mailto:legal@buzlin.com" className="block text-sm text-blue-600 hover:text-blue-700">
                    Contact Legal Team
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="prose prose-gray max-w-none">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

              <section id="acceptance" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to Buzlin, a multi-vendor marketplace platform that connects customers with service providers.
                  By accessing or using our platform, you agree to be bound by these Terms of Service and all applicable
                  laws and regulations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These terms constitute a legally binding agreement between you and Buzlin Technologies Inc. If you do
                  not agree with any part of these terms, you may not access or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to update these terms at any time. Your continued use of the platform after
                  changes are posted constitutes acceptance of the updated terms.
                </p>
              </section>

              <section id="service-description" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Buzlin operates as an online marketplace that facilitates connections between customers seeking
                  services and independent service providers. Our platform includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Service discovery and booking functionality</li>
                  <li>Secure payment processing</li>
                  <li>Communication tools between users</li>
                  <li>Review and rating systems</li>
                  <li>Customer support services</li>
                  <li>Mobile and web applications</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We act as an intermediary and do not directly provide the services listed on our platform. All
                  services are provided by independent contractors and businesses.
                </p>
              </section>

              <section id="user-accounts" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Account Registration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To use our services, you must create an account by providing accurate and complete information. You
                  are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Keeping your account information current and accurate</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Account Verification</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may require verification of your identity, contact information, or other details to ensure platform
                  security and compliance with applicable laws.
                </p>
              </section>

              <section id="vendor-terms" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vendor Terms</h2>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Vendor Registration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Service providers must complete our vendor registration process, which includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Business verification and background checks</li>
                  <li>Proof of insurance and licensing where required</li>
                  <li>Skills assessment and portfolio review</li>
                  <li>Agreement to quality standards and policies</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Service Listings</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vendors are responsible for creating accurate service listings that include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Clear service descriptions and pricing</li>
                  <li>Accurate availability and scheduling information</li>
                  <li>Appropriate service categories and tags</li>
                  <li>High-quality photos and portfolio items</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Commission and Fees</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Buzlin charges a commission on completed bookings, which varies by service category and vendor tier.
                  Current commission rates are available in your vendor dashboard.
                </p>
              </section>

              <section id="customer-terms" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customer Terms</h2>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Booking Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When booking services through our platform, customers agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Provide accurate service requirements and contact information</li>
                  <li>Be available at the scheduled service time</li>
                  <li>Pay for services as agreed upon booking</li>
                  <li>Treat service providers with respect and professionalism</li>
                  <li>Provide honest feedback and reviews</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Cancellation Policy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cancellation policies vary by vendor and service type. Generally:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Free cancellation up to 24 hours before service</li>
                  <li>Partial charges may apply for late cancellations</li>
                  <li>No-show fees may be charged for missed appointments</li>
                  <li>Emergency cancellations are handled case-by-case</li>
                </ul>
              </section>

              <section id="payment-terms" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Payment Processing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All payments are processed securely through our third-party payment processors. We accept:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Major credit and debit cards</li>
                  <li>Digital wallets (Apple Pay, Google Pay, etc.)</li>
                  <li>Bank transfers for larger transactions</li>
                  <li>Platform credits and gift cards</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Refunds and Disputes</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Refund eligibility depends on the specific circumstances and vendor policies. We provide dispute
                  resolution services to help resolve payment issues fairly.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Vendor Payments</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vendor payments are released after service completion and customer confirmation, minus applicable
                  commission fees. Payments are typically processed within 1-2 business days.
                </p>
              </section>

              <section id="prohibited-activities" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Activities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Users are prohibited from engaging in the following activities:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Fraudulent or deceptive practices</li>
                  <li>Harassment, discrimination, or abusive behavior</li>
                  <li>Circumventing platform fees or payment systems</li>
                  <li>Creating fake accounts or reviews</li>
                  <li>Sharing inappropriate or illegal content</li>
                  <li>Violating intellectual property rights</li>
                  <li>Attempting to hack or compromise platform security</li>
                  <li>Spamming or unsolicited marketing</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Violation of these terms may result in account suspension, termination, or legal action.
                </p>
              </section>

              <section id="intellectual-property" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Platform Content</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Buzlin platform, including its design, functionality, and content, is protected by copyright,
                  trademark, and other intellectual property laws. Users may not copy, modify, or distribute our
                  proprietary content without permission.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">User Content</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By uploading content to our platform, you grant Buzlin a non-exclusive license to use, display, and
                  distribute that content for platform operations and marketing purposes.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Copyright Infringement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We respect intellectual property rights and will respond to valid copyright infringement claims in
                  accordance with the Digital Millennium Copyright Act (DMCA).
                </p>
              </section>

              <section id="dispute-resolution" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Platform Mediation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide mediation services to help resolve disputes between users. Our support team will
                  investigate issues and work toward fair resolutions.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Binding Arbitration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For disputes that cannot be resolved through mediation, both parties agree to binding arbitration
                  under the rules of the American Arbitration Association.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Class Action Waiver</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Users agree to resolve disputes individually and waive the right to participate in class action
                  lawsuits against Buzlin.
                </p>
              </section>

              <section id="termination" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Account Termination</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Either party may terminate their account at any time. Buzlin reserves the right to suspend or
                  terminate accounts for violations of these terms or applicable laws.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Effect of Termination</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Upon termination:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Access to the platform will be revoked</li>
                  <li>Pending bookings may be cancelled</li>
                  <li>Outstanding payments will be processed</li>
                  <li>Data may be retained as required by law</li>
                </ul>
              </section>

              <section id="liability" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Buzlin provides the platform "as is" without warranties of any kind. We are not liable for:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Quality or performance of services provided by vendors</li>
                  <li>Disputes between users</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Platform downtime or technical issues</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability is limited to the amount of fees paid to Buzlin in the 12 months preceding the
                  claim.
                </p>
              </section>

              <section id="indemnification" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Users agree to indemnify and hold Buzlin harmless from any claims, damages, or expenses arising from:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Use of the platform</li>
                  <li>Violation of these terms</li>
                  <li>Infringement of third-party rights</li>
                  <li>Services provided or received through the platform</li>
                </ul>
              </section>

              <section id="governing-law" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to its conflict of law principles. You hereby irrevocably attorn to the exclusive jurisdiction of the courts of the Province of Ontario located in the City of Ottawa for any legal proceedings arising from these terms.
                </p>
              </section>

              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update these Terms of Service periodically to reflect changes in our services or legal
                  requirements. Material changes will be communicated through:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Email notifications to registered users</li>
                  <li>Prominent notices on our platform</li>
                  <li>In-app notifications</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Continued use of our services after changes take effect constitutes acceptance of the updated terms.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="font-medium text-gray-900 mb-2">Contact Information</h3>
                  <p className="text-gray-700 mb-2">For questions about these Terms of Service, please contact:</p>
                  <div className="space-y-1">
                    <p className="text-gray-700">
                      <strong>Legal Team:</strong> support@buzlin.ca
                    </p>
                    <p className="text-gray-700">
                      <strong>Customer Support:</strong> support@buzlin.ca
                    </p>
                    {/* <p className="text-gray-700">
                      <strong>Mailing Address:</strong> Buzlin Holdings ltd. Suite 400 Ottawa, ON K2H 8E9 Canada
                    </p> */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <LegalFooter />
      <MobileBottomNav />
    </div>
  )
}
