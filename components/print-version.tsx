"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export function PrintVersion() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "privacy"
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      window.print()
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const getContent = () => {
    if (type === "privacy") {
      return {
        title: "BUZLIN PRIVACY POLICY",
        sections: [
          {
            title: "Overview",
            content:
              "At Buzlin, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our multi-vendor marketplace platform.",
          },
          {
            title: "Information We Collect",
            content:
              "We collect personal information that you voluntarily provide to us when you create an account, book services, register as a service provider, contact customer support, or participate in surveys. This includes account information, service details, payment information, and communication data.",
          },
          {
            title: "How We Use Information",
            content:
              "We use collected information to provide and maintain our marketplace services, process bookings, facilitate transactions, communicate about your account, improve our platform, prevent fraud, ensure security, and comply with legal obligations.",
          },
          {
            title: "Information Sharing",
            content:
              "We may share your information with service providers to facilitate delivery, with third-party partners for payment processing and analytics, for legal compliance when required by law, and during business transfers such as mergers or acquisitions.",
          },
          {
            title: "Data Security",
            content:
              "We implement SSL encryption for data transmission, secure storage with encryption at rest, regular security audits, access controls, employee training, and incident response procedures to protect your information.",
          },
          {
            title: "Your Rights",
            content:
              "You have rights to access, correct, delete, restrict processing, port your data, object to processing, and withdraw consent. Contact support@buzlin.ca to exercise these rights within 30 days.",
          },
        ],
      }
    } else if (type === "terms") {
      return {
        title: "BUZLIN TERMS OF SERVICE",
        sections: [
          {
            title: "Acceptance of Terms",
            content:
              "By accessing and using Buzlin's multi-vendor marketplace platform, you accept and agree to be bound by these terms and provisions. If you do not agree, please do not use our services.",
          },
          {
            title: "Platform Description",
            content:
              "Buzlin is a digital marketplace connecting customers with service providers across home services, professional services, and digital services. We facilitate bookings, payments, and communications between parties.",
          },
          {
            title: "User Accounts",
            content:
              "You must provide accurate information when creating an account, maintain confidentiality of credentials, and notify us immediately of unauthorized use. You are responsible for all activities under your account.",
          },
          {
            title: "Service Provider Terms",
            content:
              "Service providers must be qualified and licensed as required, perform services professionally according to industry standards, and operate as independent contractors, not employees of Buzlin.",
          },
          {
            title: "Payment Terms",
            content:
              "All payments are processed through our secure system with clearly displayed fees before confirmation. Refunds are subject to our refund policy and vendor-specific terms.",
          },
          {
            title: "Prohibited Activities",
            content:
              "Prohibited activities include fraudulent or illegal activities, harassment or inappropriate behavior, violation of intellectual property rights, and circumventing platform fees.",
          },
        ],
      }
    } else {
      return {
        title: "BUZLIN LEGAL DOCUMENTS",
        sections: [
          {
            title: "Complete Legal Package",
            content:
              "This document contains all legal information for Buzlin's multi-vendor marketplace platform including Privacy Policy, Terms of Service, and Frequently Asked Questions.",
          },
        ],
      }
    }
  }

  const content = getContent()

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <style jsx global>{`
        @media print {
          body { margin: 0; font-size: 12px; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          h1 { font-size: 24px; }
          h2 { font-size: 18px; }
          h3 { font-size: 14px; }
        }
      `}</style>

      {isLoading && (
        <div className="no-print text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Preparing document for printing...</p>
        </div>
      )}

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{content.title}</h1>
        <p className="text-gray-600">Official Legal Documentation</p>
        <p className="text-sm text-gray-500 mt-2">Generated on: {new Date().toLocaleDateString()}</p>
        <p className="text-sm text-gray-500">Document Type: {type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>

      <div className="space-y-8">
        {content.sections.map((section, index) => (
          <section key={index} className={index > 0 ? "page-break" : ""}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">{section.title}</h2>
            <div className="text-sm text-gray-700 leading-relaxed">{section.content}</div>
          </section>
        ))}

        <section className="page-break">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Contact Information
          </h2>
          <div className="text-sm space-y-2">
            <p>
              <strong>Privacy Officer:</strong> support@buzlin.ca
            </p>
            <p>
              <strong>Legal Team:</strong> support@buzlin.ca
            </p>
            <p>
              <strong>General Support:</strong> support@buzlin.ca
            </p>
            <div className="mt-4">
              {/* <p>
                <strong>Mailing Address:</strong>
              </p>
              <p className="ml-4">
                Buzlin Technologies Inc.
                <br />
                Legal Department
                <br />
                123 Technology Drive
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p> */}
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          For the most current versions of these documents, visit: <strong>https://buzlin.ca/privacy-policy</strong>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Questions? Contact us at: <strong>support@buzlin.ca</strong>
        </p>
        <p className="text-xs text-gray-500 mt-4">
          This document is automatically generated and contains the complete legal terms as of the generation date.
        </p>
      </div>

      <div className="no-print mt-8 text-center space-x-4">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-white  text-dark rounded-lg  transition-colors border-2"
        >
          Print Again
        </button>
        <button
          onClick={() => window.close()}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Close Window
        </button>
        {/* <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Back to Legal Center
        </button> */}
      </div>
    </div>
  )
}
