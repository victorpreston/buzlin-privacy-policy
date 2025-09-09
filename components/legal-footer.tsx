"use client"

import Link from "next/link"

export function LegalFooter() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Link href="/" className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity">
              <img src="/buzlin.png" alt="Buzlin" className="h-10 w-auto" />
              <span className="text-xl font-bold text-gray-900 mt-6">Buzlin</span>
              </Link>
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              The professional multi-vendor marketplace connecting customers with trusted service providers. Book
              services, manage your business, and grow together.
            </p>

            {/* App Store Buttons */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Download Our App</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/ca/app/buzlin/id6636532736" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-44 h-14 bg-black rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-300">Download on the</div>
                        <div className="text-sm font-semibold text-white">App Store</div>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/developer?id=Buzlin+Holdings+Inc&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-44 h-14 bg-black rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-8 h-8"
                        viewBox="-29.45 0 466.9 466.9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="SVGID_1_"
                            gradientUnits="userSpaceOnUse"
                            y1="112.094"
                            x2="261.746"
                            y2="112.094"
                          >
                            <stop offset="0" stopColor="#63be6b" />
                            <stop offset=".506" stopColor="#5bbc6a" />
                            <stop offset="1" stopColor="#4ab96a" />
                          </linearGradient>
                          <linearGradient
                            id="SVGID_2_"
                            gradientUnits="userSpaceOnUse"
                            x1=".152"
                            y1="223.393"
                            x2="179.896"
                            y2="223.393"
                          >
                            <stop offset="0" stopColor="#3ec6f2" />
                            <stop offset="1" stopColor="#45afe3" />
                          </linearGradient>
                          <linearGradient
                            id="SVGID_3_"
                            gradientUnits="userSpaceOnUse"
                            x1="179.896"
                            y1="229.464"
                            x2="407.976"
                            y2="229.464"
                          >
                            <stop offset="0" stopColor="#faa51a" />
                            <stop offset=".387" stopColor="#fab716" />
                            <stop offset=".741" stopColor="#fac412" />
                            <stop offset="1" stopColor="#fac80f" />
                          </linearGradient>
                          <linearGradient
                            id="SVGID_4_"
                            gradientUnits="userSpaceOnUse"
                            x1="1.744"
                            y1="345.521"
                            x2="272.296"
                            y2="345.521"
                          >
                            <stop offset="0" stopColor="#ec3b50" />
                            <stop offset="1" stopColor="#e7515b" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#SVGID_1_)"
                          d="M261.7 142.3L15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7 81.8-81.8z"
                        />
                        <path fill="url(#SVGID_2_)" d="M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1.2 44.4z" />
                        <path
                          fill="url(#SVGID_3_)"
                          d="M402.9 223l-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z"
                        />
                        <path
                          fill="url(#SVGID_4_)"
                          d="M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4L1.7 402.3z"
                        />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-300">Get it on</div>
                        <div className="text-sm font-semibold text-white">Google Play</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Legal & Privacy</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/data-protection" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@buzlin.ca" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Legal Support
                </a>
              </li>
              <li>
                <a href="mailto:support@buzlin.ca" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Officer
                </a>
              </li>
              <li>
                <a href="mailto:support@buzlin.ca" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Compliance Team
                </a>
              </li>
              <li>
                <a href="mailto:support@buzlin.ca" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link href="/report-issue" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Report Issue
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Buzlin
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-600 text-sm">© 2024 Buzlin Holdings Inc. All rights reserved.</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Last updated: December 2024</span>
                <span>•</span>
                <span>Version 2.1</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-600">Follow us:</span>
              <div className="flex space-x-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                {/* <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>SOC 2 Certified</span>
                </div> */}
              </div>
              <div className="text-sm text-gray-500">Trusted by 500,000+ users worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
