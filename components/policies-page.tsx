"use client"

import { useState } from "react"
import {
  Shield,
  FileText,
  Users,
  CreditCard,
  Globe,
  Lock,
  Eye,
  UserCheck,
  Building,
  Scale,
  AlertTriangle,
  Clock,
  Mail,
  Phone,
  Menu,
  X,
} from "lucide-react"

const navigationItems = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "privacy", label: "Privacy Policy", icon: Shield },
  { id: "terms", label: "Terms of Service", icon: Scale },
  { id: "vendor-terms", label: "Vendor Agreement", icon: Building },
  { id: "data-protection", label: "Data Protection", icon: Lock },
  { id: "contact", label: "Contact Us", icon: Mail },
]

const quickLinks = [
  { label: "Download PDF", icon: FileText },
  { label: "Print Version", icon: FileText },
  { label: "Email Support", icon: Mail },
]

export function PoliciesPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {/* Logo placeholder */}
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-gray-400">B</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Buzlin</h1>
                <p className="text-sm text-gray-500">Legal Policies</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-500">Last Updated: January 2025</span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 lg:flex-shrink-0">
            <div className={`lg:sticky lg:top-8 ${mobileMenuOpen ? "block" : "hidden lg:block"}`}>
              <nav className="space-y-1">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Navigation</h3>
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeSection === item.id
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="space-y-12">
              {/* Overview Section */}
              <section id="overview" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Legal Overview</h2>
                  <p className="text-gray-600">Welcome to Buzlin's comprehensive legal documentation</p>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center gap-2 text-gray-900">
                        <Users className="h-5 w-5 text-blue-600" />
                        For Customers
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Learn about your rights, data protection, and service terms when using Buzlin marketplace.
                      </p>
                    </div>
                    <div className="p-6 bg-green-50 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center gap-2 text-gray-900">
                        <Building className="h-5 w-5 text-green-600" />
                        For Vendors
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Understand vendor obligations, commission structure, and marketplace guidelines.
                      </p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">About Buzlin</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Buzlin is a professional-grade multi-vendor service booking and eCommerce marketplace platform. We
                      connect service providers with customers, facilitating seamless transactions and digital service
                      delivery. Our platform supports both physical services and digital downloads, creating a
                      comprehensive marketplace ecosystem.
                    </p>
                  </div>
                </div>
              </section>

              {/* Privacy Policy Section */}
              <section id="privacy" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    Privacy Policy
                  </h2>
                  <p className="text-gray-600">How we collect, use, and protect your personal information</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-blue-600" />
                      Information We Collect
                    </h3>
                    <div className="space-y-4">
                      <div className="pl-4 border-l-4 border-blue-200">
                        <h4 className="font-medium text-gray-900 mb-1">Account Information</h4>
                        <p className="text-gray-600">
                          Name, email address, phone number, profile picture, and authentication credentials.
                        </p>
                      </div>
                      <div className="pl-4 border-l-4 border-blue-200">
                        <h4 className="font-medium text-gray-900 mb-1">Service Data</h4>
                        <p className="text-gray-600">
                          Service listings, booking history, reviews, ratings, and communication records.
                        </p>
                      </div>
                      <div className="pl-4 border-l-4 border-blue-200">
                        <h4 className="font-medium text-gray-900 mb-1">Payment Information</h4>
                        <p className="text-gray-600">
                          Billing addresses, payment methods (processed securely through third-party providers).
                        </p>
                      </div>
                      <div className="pl-4 border-l-4 border-blue-200">
                        <h4 className="font-medium text-gray-900 mb-1">Usage Analytics</h4>
                        <p className="text-gray-600">
                          Device information, IP addresses, browser data, and platform interaction patterns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-blue-600" />
                      How We Use Your Information
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">
                          Facilitate service bookings and transactions between customers and vendors
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">
                          Process payments and manage financial transactions securely
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Provide customer support and resolve disputes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Improve platform functionality and user experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">
                          Send important notifications about bookings, payments, and account updates
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-600" />
                      Data Sharing and Third Parties
                    </h3>
                    <p className="text-gray-600 mb-4">We share your information only in the following circumstances:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Service Providers</h4>
                        <p className="text-sm text-gray-600">Payment processors, email services, analytics tools</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Legal Requirements</h4>
                        <p className="text-sm text-gray-600">When required by law or to protect rights</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Business Transfers</h4>
                        <p className="text-sm text-gray-600">In case of merger, acquisition, or sale</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Vendor Matching</h4>
                        <p className="text-sm text-gray-600">Necessary booking details with service providers</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      Data Retention
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We retain your personal information for as long as necessary to provide our services, comply with
                      legal obligations, resolve disputes, and enforce our agreements. Account data is typically
                      retained for 7 years after account closure for legal and tax purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Rights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Access & Portability</h4>
                        <p className="text-sm text-gray-600">Request copies of your data</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Correction</h4>
                        <p className="text-sm text-gray-600">Update inaccurate information</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Deletion</h4>
                        <p className="text-sm text-gray-600">Request account removal</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Opt-out</h4>
                        <p className="text-sm text-gray-600">Unsubscribe from marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Terms of Service Section */}
              <section id="terms" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Scale className="h-6 w-6 text-blue-600" />
                    Terms of Service
                  </h2>
                  <p className="text-gray-600">Legal terms governing your use of Buzlin marketplace</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Overview</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Buzlin operates as a multi-vendor marketplace connecting service providers with customers. We
                      facilitate transactions but are not directly responsible for the quality or delivery of services.
                      Our role is to provide the platform, payment processing, and dispute resolution mechanisms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">User Responsibilities</h3>
                    <div className="space-y-6">
                      <div className="p-6 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Account Security</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Maintain confidentiality of login credentials</li>
                          <li>• Notify us immediately of unauthorized access</li>
                          <li>• Provide accurate and up-to-date information</li>
                          <li>• Use the platform only for lawful purposes</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-red-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Prohibited Activities</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Fraudulent or deceptive practices</li>
                          <li>• Harassment or abusive behavior</li>
                          <li>• Circumventing platform fees</li>
                          <li>• Posting illegal or inappropriate content</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      Payment Terms
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Platform Fees</h4>
                        <p className="text-gray-600">Service fee of 3-5% per transaction</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Payment Processing</h4>
                        <p className="text-gray-600">Secure third-party payment handling</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Refund Policy</h4>
                        <p className="text-gray-600">Case-by-case dispute resolution</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Vendor Payouts</h4>
                        <p className="text-gray-600">Weekly automated transfers</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                    <div className="p-6 bg-yellow-50 rounded-lg">
                      <p className="text-gray-600 leading-relaxed">
                        Buzlin acts as an intermediary platform. We are not liable for service quality, delivery issues,
                        or disputes between users and vendors. Our liability is limited to the platform fees paid. Users
                        engage with vendors at their own risk and should exercise due diligence when booking services.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Intellectual Property</h3>
                    <p className="text-gray-600 leading-relaxed">
                      All platform content, including logos, designs, and software, is owned by Buzlin or licensed.
                      Users retain rights to their uploaded content but grant us license to display and process it for
                      platform operations. Respect intellectual property rights of others when using our services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Vendor Agreement Section */}
              <section id="vendor-terms" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Building className="h-6 w-6 text-blue-600" />
                    Vendor Agreement
                  </h2>
                  <p className="text-gray-600">Specific terms for service providers on Buzlin marketplace</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Vendor Onboarding</h3>
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">Required Documentation</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Valid business license or registration</li>
                        <li>• Professional liability insurance (where applicable)</li>
                        <li>• Tax identification numbers</li>
                        <li>• Bank account verification for payouts</li>
                        <li>• Professional certifications (industry-specific)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Standards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Response Time</h4>
                        <p className="text-gray-600">Reply to inquiries within 24 hours</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Service Quality</h4>
                        <p className="text-gray-600">Maintain 4+ star average rating</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Completion Rate</h4>
                        <p className="text-gray-600">Complete 95%+ of accepted bookings</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Professional Conduct</h4>
                        <p className="text-gray-600">Courteous and professional behavior</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Commission Structure</h3>
                    <div className="p-6 bg-green-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                          <p className="text-3xl font-bold text-green-600 mb-1">5%</p>
                          <p className="text-gray-600">Standard Services</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-green-600 mb-1">3%</p>
                          <p className="text-gray-600">Premium Vendors</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-green-600 mb-1">7%</p>
                          <p className="text-gray-600">Digital Downloads</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4 text-center">
                        Premium vendor status available after 100+ completed orders with 4.8+ rating.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Vendor Obligations</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Provide accurate service descriptions and pricing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Honor confirmed bookings and agreed-upon terms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Maintain professional standards and customer service</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Comply with local laws and regulations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Report any issues or disputes promptly</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Protection Section */}
              <section id="data-protection" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Lock className="h-6 w-6 text-blue-600" />
                    Data Protection & Security
                  </h2>
                  <p className="text-gray-600">How we protect your information and ensure platform security</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Measures</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-6 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-blue-600" />
                          Data Encryption
                        </h4>
                        <p className="text-gray-600">
                          All data transmitted using TLS 1.3 encryption. Database encryption at rest.
                        </p>
                      </div>
                      <div className="p-6 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <UserCheck className="h-5 w-5 text-green-600" />
                          Access Controls
                        </h4>
                        <p className="text-gray-600">Multi-factor authentication and role-based access permissions.</p>
                      </div>
                      <div className="p-6 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <Eye className="h-5 w-5 text-purple-600" />
                          Monitoring
                        </h4>
                        <p className="text-gray-600">
                          24/7 security monitoring and automated threat detection systems.
                        </p>
                      </div>
                      <div className="p-6 bg-red-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          Incident Response
                        </h4>
                        <p className="text-gray-600">Rapid response team for security incidents and data breaches.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Standards</h3>
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                          <p className="text-xl font-bold text-blue-600 mb-1">GDPR</p>
                          <p className="text-gray-600">EU Data Protection</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-blue-600 mb-1">CCPA</p>
                          <p className="text-gray-600">California Privacy</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-blue-600 mb-1">SOC 2</p>
                          <p className="text-gray-600">Security Controls</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Breach Protocol</h3>
                    <p className="text-gray-600 mb-4">In the unlikely event of a data breach, we will:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Notify affected users within 72 hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Report to relevant authorities as required by law</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Provide detailed information about the incident</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Offer credit monitoring services if applicable</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Mail className="h-6 w-6 text-blue-600" />
                    Contact Information
                  </h2>
                  <p className="text-gray-600">Get in touch with our legal and support teams</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Mail className="h-5 w-5 text-blue-600" />
                        Legal Inquiries
                      </h3>
                      <p className="text-gray-600 mb-2">For privacy, terms, and legal questions</p>
                      <p className="font-medium text-gray-900">legal@buzlin.com</p>
                    </div>

                    <div className="p-6 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        Data Protection Officer
                      </h3>
                      <p className="text-gray-600 mb-2">For data protection and privacy rights</p>
                      <p className="font-medium text-gray-900">dpo@buzlin.com</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-purple-600" />
                        Customer Support
                      </h3>
                      <p className="text-gray-600 mb-2">For general platform assistance</p>
                      <p className="font-medium text-gray-900">support@buzlin.com</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Building className="h-5 w-5 text-gray-600" />
                        Business Address
                      </h3>
                      <div className="text-gray-600">
                        <p>Buzlin Marketplace Ltd.</p>
                        <p>123 Business District</p>
                        <p>Tech City, TC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center py-6">
                  <p className="text-gray-600 mb-1">These policies are effective as of January 1, 2025</p>
                  <p className="text-sm text-gray-500">Last updated: January 2025 | Version 2.1</p>
                </div>
              </section>
            </div>
          </div>

          <div className="hidden xl:block xl:w-48 xl:flex-shrink-0">
            <div className="sticky top-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <button
                      key={index}
                      className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {link.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Buzlin</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Professional multi-vendor service marketplace connecting customers with trusted service providers
                worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#privacy" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#vendor-terms" className="text-gray-600 hover:text-gray-900">
                    Vendor Agreement
                  </a>
                </li>
                <li>
                  <a href="#data-protection" className="text-gray-600 hover:text-gray-900">
                    Data Protection
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2025 Buzlin Holdings Inc. All rights reserved.</p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                  Cookie Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                  Accessibility
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="grid grid-cols-3 gap-1">
          {navigationItems.slice(0, 3).map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center py-2 px-1 text-xs ${
                  activeSection === item.id ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="truncate">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
