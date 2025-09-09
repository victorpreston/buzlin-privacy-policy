"use client"

import Link from "next/link"
import { UniversalSearch } from "./universal-search"
import { LegalFooter } from "./legal-footer"
import { MobileBottomNav } from "./mobile-bottom-nav"

const handleDownloadPDF = async () => {
  try {
    // Create a comprehensive PDF with all legal documents
    const response = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        documents: ["privacy-policy", "terms-of-service", "faq"],
      }),
    })

    if (response.ok) {
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `buzlin-legal-documents-${new Date().toISOString().split("T")[0]}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } else {
      alert("Failed to generate PDF. Please try again later.")
    }
  } catch (error) {
    console.error("PDF generation error:", error)
    alert("Failed to generate PDF. Please try again later.")
  }
}

const handlePrintVersion = () => {
  // Open a new window with print-friendly version
  const printWindow = window.open("/print-version", "_blank", "width=800,height=600")
  if (printWindow) {
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
      }, 500)
    }
  } else {
    // Fallback: print current page
    window.print()
  }
}

const handleEmailSupport = () => {
  const subject = encodeURIComponent("Legal Document Inquiry - Buzlin")
  const body = encodeURIComponent(`Hello Buzlin Legal Team,

I have a question regarding your legal documents:

[Please describe your question here]

Best regards,
[Your name]`)

  const mailtoLink = `mailto:legal@buzlin.com?subject=${subject}&body=${body}`
  window.location.href = mailtoLink
}

export function LegalHub() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-32 h-8 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600">
                BUZLIN LOGO
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-600">Legal Center</span>
            </div>
            <div className="text-sm text-gray-500">Last updated: December 2024</div>
          </div>
        </div>
      </header>

      {/* Universal Search */}
      <UniversalSearch />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal & Privacy Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy and trust matter to us. Find all legal information about Buzlin's multi-vendor marketplace
            platform.
          </p>
        </div>

        {/* Legal Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/privacy-policy" className="group">
            <div className="p-8 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Privacy Policy
              </h3>
              <p className="text-gray-600">
                Learn how we collect, use, and protect your personal information on our marketplace platform.
              </p>
            </div>
          </Link>

          <Link href="/terms-of-service" className="group">
            <div className="p-8 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Terms of Service
              </h3>
              <p className="text-gray-600">
                Understand the rules and guidelines for using Buzlin's service booking and eCommerce platform.
              </p>
            </div>
          </Link>

          <Link href="/faq" className="group">
            <div className="p-8 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                FAQ
              </h3>
              <p className="text-gray-600">
                Find answers to frequently asked questions about our marketplace, vendors, and services.
              </p>
            </div>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                Download PDF
              </span>
            </button>

            <button
              onClick={handlePrintVersion}
              className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2-2V5a2 2 0 002-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                Print Version
              </span>
            </button>

            <button
              onClick={handleEmailSupport}
              className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2v-4a2 2 0 00-2-2H7a2 2 0 00-2-2V5a2 2 0 002-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                Email Support
              </span>
            </button>

            <Link
              href="/contact"
              className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </main>

      <LegalFooter />
      <MobileBottomNav />
    </div>
  )
}
