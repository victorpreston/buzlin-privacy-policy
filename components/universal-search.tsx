"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const searchData = [
  // Privacy Policy sections
  {
    title: "Data Collection",
    section: "Privacy Policy",
    url: "/privacy-policy#data-collection",
    content: "personal information email phone address location data usage analytics",
  },
  {
    title: "Information We Collect",
    section: "Privacy Policy",
    url: "/privacy-policy#information-collection",
    content: "account registration service bookings payment information device data cookies",
  },
  {
    title: "How We Use Information",
    section: "Privacy Policy",
    url: "/privacy-policy#information-use",
    content: "service provision communication marketing analytics security fraud prevention",
  },
  {
    title: "Information Sharing",
    section: "Privacy Policy",
    url: "/privacy-policy#information-sharing",
    content: "vendors service providers third parties legal requirements business transfers",
  },
  {
    title: "Data Security",
    section: "Privacy Policy",
    url: "/privacy-policy#data-security",
    content: "encryption security measures data protection breach notification",
  },
  {
    title: "Your Rights",
    section: "Privacy Policy",
    url: "/privacy-policy#user-rights",
    content: "access correction deletion portability opt-out GDPR CCPA rights",
  },
  {
    title: "Cookies and Tracking",
    section: "Privacy Policy",
    url: "/privacy-policy#cookies",
    content: "cookies tracking pixels analytics advertising personalization preferences",
  },
  {
    title: "International Transfers",
    section: "Privacy Policy",
    url: "/privacy-policy#international-transfers",
    content: "cross-border data transfer adequacy decisions safeguards",
  },
  {
    title: "Data Retention",
    section: "Privacy Policy",
    url: "/privacy-policy#data-retention",
    content: "retention periods deletion policies storage duration legal requirements",
  },
  {
    title: "Children's Privacy",
    section: "Privacy Policy",
    url: "/privacy-policy#childrens-privacy",
    content: "COPPA minors under 13 parental consent children protection",
  },

  // Terms of Service sections
  {
    title: "Acceptance of Terms",
    section: "Terms of Service",
    url: "/terms-of-service#acceptance",
    content: "agreement binding terms conditions legal contract user acceptance",
  },
  {
    title: "Service Description",
    section: "Terms of Service",
    url: "/terms-of-service#service-description",
    content: "marketplace platform service booking ecommerce vendors customers",
  },
  {
    title: "User Accounts",
    section: "Terms of Service",
    url: "/terms-of-service#user-accounts",
    content: "registration account creation credentials security responsibility",
  },
  {
    title: "Vendor Terms",
    section: "Terms of Service",
    url: "/terms-of-service#vendor-terms",
    content: "vendor registration service listing commission fees quality standards",
  },
  {
    title: "Customer Terms",
    section: "Terms of Service",
    url: "/terms-of-service#customer-terms",
    content: "booking services payment customer responsibilities reviews ratings",
  },
  {
    title: "Payment Terms",
    section: "Terms of Service",
    url: "/terms-of-service#payment-terms",
    content: "payment processing fees refunds disputes chargebacks billing",
  },
  {
    title: "Prohibited Activities",
    section: "Terms of Service",
    url: "/terms-of-service#prohibited-activities",
    content: "illegal activities fraud spam harassment intellectual property violation",
  },
  {
    title: "Intellectual Property",
    section: "Terms of Service",
    url: "/terms-of-service#intellectual-property",
    content: "copyright trademark content ownership licensing user content",
  },
  {
    title: "Dispute Resolution",
    section: "Terms of Service",
    url: "/terms-of-service#dispute-resolution",
    content: "arbitration mediation legal disputes resolution process jurisdiction",
  },
  {
    title: "Termination",
    section: "Terms of Service",
    url: "/terms-of-service#termination",
    content: "account termination suspension violation consequences data deletion",
  },
  {
    title: "Limitation of Liability",
    section: "Terms of Service",
    url: "/terms-of-service#liability",
    content: "damages limitation exclusion warranty disclaimer liability caps",
  },
  {
    title: "Indemnification",
    section: "Terms of Service",
    url: "/terms-of-service#indemnification",
    content: "user indemnification hold harmless legal protection claims",
  },

  // FAQ sections
  {
    title: "Getting Started",
    section: "FAQ",
    url: "/faq#getting-started",
    content: "account setup registration first booking how to start",
  },
  {
    title: "Booking Services",
    section: "FAQ",
    url: "/faq#booking-services",
    content: "how to book service selection payment booking process",
  },
  {
    title: "Vendor Registration",
    section: "FAQ",
    url: "/faq#vendor-registration",
    content: "become vendor registration process requirements verification",
  },
  {
    title: "Payment Issues",
    section: "FAQ",
    url: "/faq#payment-issues",
    content: "payment problems refunds billing disputes payment methods",
  },
  {
    title: "Account Management",
    section: "FAQ",
    url: "/faq#account-management",
    content: "profile settings password reset account deletion data export",
  },
  {
    title: "Technical Support",
    section: "FAQ",
    url: "/faq#technical-support",
    content: "app issues bugs technical problems troubleshooting help",
  },
]

interface UniversalSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function UniversalSearch({ isOpen, onClose }: UniversalSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof searchData>([])

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.section.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query),
    )

    // Sort results by relevance (title matches first, then section, then content)
    results.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(query) ? 3 : 0
      const aSection = a.section.toLowerCase().includes(query) ? 2 : 0
      const aContent = a.content.toLowerCase().includes(query) ? 1 : 0
      const aScore = aTitle + aSection + aContent

      const bTitle = b.title.toLowerCase().includes(query) ? 3 : 0
      const bSection = b.section.toLowerCase().includes(query) ? 2 : 0
      const bContent = b.content.toLowerCase().includes(query) ? 1 : 0
      const bScore = bTitle + bSection + bContent

      return bScore - aScore
    })

    setSearchResults(results.slice(0, 10)) // Limit to top 10 results
  }, [searchQuery])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
        setSearchQuery("")
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Search Terms & Policies</h2>
            <p className="text-gray-600 mt-1">Find specific terms, policies, or sections across all legal documents</p>
          </div>
          <button
            onClick={() => {
              onClose()
              setSearchQuery("")
            }}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            placeholder="Search for terms, policies, or specific sections..."
            className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>

        {searchQuery && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Search Results ({searchResults.length})</h3>
              {searchResults.length > 0 && (
                <span className="text-sm text-gray-500">Press Enter to go to first result</span>
              )}
            </div>

            {searchResults.length > 0 ? (
              <div className="space-y-3">
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    className="block p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all group"
                    onClick={() => {
                      onClose()
                      setSearchQuery("")
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {result.title}
                          </h4>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {result.section}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {result.content.split(" ").slice(0, 15).join(" ")}...
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors ml-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg
                  className="w-12 h-12 text-gray-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">
                  No results found for "<span className="font-medium">{searchQuery}</span>". Try different keywords or
                  browse our popular searches below.
                </p>
              </div>
            )}
          </div>
        )}

        {!searchQuery && (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Searches</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Data Privacy",
                  "Vendor Agreement",
                  "Payment Terms",
                  "Account Deletion",
                  "Cookie Policy",
                  "GDPR Rights",
                  "Refund Policy",
                  "Service Booking",
                  "Commission Fees",
                  "Dispute Resolution",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Browse by Document</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/privacy-policy"
                  className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all group"
                  onClick={onClose}
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">Data collection and usage policies</p>
                </Link>

                <Link
                  href="/terms-of-service"
                  className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all group"
                  onClick={onClose}
                >
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Terms of Service
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">Platform usage rules and guidelines</p>
                </Link>

                <Link
                  href="/faq"
                  className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all group"
                  onClick={onClose}
                >
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">FAQ</h4>
                  <p className="text-sm text-gray-600 mt-1">Frequently asked questions</p>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Search Tips</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use specific terms like "data collection" or "payment processing"</li>
                <li>• Search by document type: "privacy policy cookies" or "terms vendor"</li>
                <li>• Use keyboard shortcut ⌘K (Mac) or Ctrl+K (Windows) to open search</li>
                <li>• Press Escape to close search at any time</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
