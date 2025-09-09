import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") || "privacy"

    let content = ""
    let filename = ""

    if (type === "privacy") {
      filename = `buzlin-privacy-policy-${new Date().toISOString().split("T")[0]}.pdf`
      content = `
BUZLIN PRIVACY POLICY
Generated on: ${new Date().toLocaleDateString()}

OVERVIEW
At Buzlin, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our multi-vendor marketplace platform.

Our platform connects customers with service providers across various categories including home services, professional services, and digital services. We understand the importance of trust in our marketplace and are dedicated to maintaining the highest standards of data protection.

INFORMATION WE COLLECT
We collect personal information that you voluntarily provide to us when you:
• Create an account on our platform
• Book services through our marketplace
• Register as a service provider
• Contact our customer support
• Subscribe to our newsletter or marketing communications
• Participate in surveys or promotional activities

TYPES OF INFORMATION COLLECTED
Account Information: Name, email address, phone number, profile picture, and account preferences.
Service Information: Service requests, booking details, location information, and service history.
Payment Information: Billing address, payment method details, and transaction history.
Communication Data: Messages between users, customer support interactions, and feedback or reviews.

HOW WE USE INFORMATION
We use the information we collect for various purposes, including:
• Providing and maintaining our marketplace services
• Processing bookings and facilitating transactions
• Communicating with you about your account and services
• Improving our platform and user experience
• Preventing fraud and ensuring platform security
• Complying with legal obligations and resolving disputes

INFORMATION SHARING
We may share your information in the following circumstances:
• With Service Providers: We share necessary information with vendors to facilitate service delivery
• With Third-Party Service Providers: We work with trusted partners for payment processing and analytics
• For Legal Compliance: We may disclose information when required by law
• Business Transfers: In the event of a merger or acquisition

DATA SECURITY
We implement appropriate technical and organizational security measures including:
• SSL encryption for data transmission
• Secure data storage with encryption at rest
• Regular security audits and vulnerability assessments
• Access controls and employee training
• Incident response procedures

YOUR RIGHTS
Depending on your location, you may have the following rights:
• Right to access your personal information
• Right to correct inaccurate or incomplete information
• Right to delete your personal information
• Right to restrict processing of your information
• Right to data portability
• Right to object to processing
• Right to withdraw consent

CONTACT INFORMATION
Privacy Officer: support@buzlin.ca
Legal Team: support@buzlin.ca

Buzlin Holdings Inc.
Privacy Department
123 Technology Drive
San Francisco, CA 94105
United States

This document was generated from buzlin.com/privacy-policy
For the most current version, please visit our website.
      `
    } else if (type === "terms") {
      filename = `buzlin-terms-of-service-${new Date().toISOString().split("T")[0]}.pdf`
      content = `
BUZLIN TERMS OF SERVICE
Generated on: ${new Date().toLocaleDateString()}

ACCEPTANCE OF TERMS
By accessing and using Buzlin's multi-vendor marketplace platform, you accept and agree to be bound by the terms and provision of this agreement.

PLATFORM DESCRIPTION
Buzlin is a digital marketplace that connects customers with service providers across various categories including home services, professional services, and digital services.

USER ACCOUNTS
• You must provide accurate and complete information when creating an account
• You are responsible for maintaining the confidentiality of your account credentials
• You must notify us immediately of any unauthorized use of your account

SERVICE PROVIDER TERMS
• Service providers must be qualified and licensed as required by law
• All services must be performed professionally and in accordance with industry standards
• Service providers are independent contractors, not employees of Buzlin

PAYMENT TERMS
• All payments are processed through our secure payment system
• Service fees are clearly displayed before booking confirmation
• Refunds are subject to our refund policy

PROHIBITED ACTIVITIES
• Fraudulent or illegal activities
• Harassment or inappropriate behavior
• Violation of intellectual property rights
• Circumventing platform fees

LIMITATION OF LIABILITY
Buzlin's liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages.

CONTACT INFORMATION
Legal Team: support@buzlin.ca

This document was generated from buzlin.com/terms-of-service
For the most current version, please visit our website.
      `
    }

    const buffer = Buffer.from(content, "utf-8")

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error("PDF generation error:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  return GET(request)
}
