import { Link } from "wouter";
import { ArrowLeft, Shield, FileText, Truck, RefreshCcw, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const PolicyLayout = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}) => (
  <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]">
    <div className="mx-auto max-w-4xl px-5 py-12">
      <Link href="/" data-testid="link-back-home">
        <a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition mb-8">
          <ArrowLeft className="size-4" />
          Back to Home
        </a>
      </Link>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="rounded-xl bg-gradient-to-tr from-[#0e7490]/60 via-[#14b8a6]/60 to-[#14b8c6]/60 p-3">
            <Icon className="size-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
        <div className="prose prose-invert max-w-none text-white/80">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping Policy" icon={Truck}>
      <p className="text-white/70 text-sm mb-6">Last updated: December 2024</p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">1. Digital Products and Services</h2>
      <p>
        Nexgen Focus primarily offers digital educational products and services including online courses, 
        workshops, masterclasses, and training programs. As these are digital products, no physical shipping is required.
      </p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">2. Course Access Delivery</h2>
      <p>
        Upon successful payment, access to your purchased courses or programs will be delivered electronically:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Course access credentials will be sent to your registered email address</li>
        <li>Access is typically granted within 24 hours of payment confirmation</li>
        <li>Workshop and event details will be communicated via email at least 48 hours before the scheduled date</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">3. Physical Materials (If Applicable)</h2>
      <p>
        In cases where physical materials such as certificates, study materials, or merchandise are included:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Shipping is available within India only</li>
        <li>Delivery typically takes 7-14 business days</li>
        <li>Shipping charges, if any, will be clearly mentioned at checkout</li>
        <li>Tracking information will be provided via email once shipped</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">4. Contact Us</h2>
      <p>
        For any shipping-related queries, please contact us at:
      </p>
      <p className="mt-2">
        Email: contact@nexgenfocus.com<br />
        Phone: +91 98765 43210
      </p>
    </PolicyLayout>
  );
}

export function TermsAndConditions() {
  return (
    <PolicyLayout title="Terms and Conditions" icon={FileText}>
      <p className="text-white/70 text-sm mb-6">Last updated: December 2024</p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">1. Acceptance of Terms</h2>
      <p>
        By accessing and using the Nexgen Focus website and services, you accept and agree to be bound by 
        these Terms and Conditions. If you do not agree to these terms, please do not use our services.
      </p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">2. Services Description</h2>
      <p>
        Nexgen Focus provides educational services including but not limited to:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Online and offline training programs in AI, coding, and technology</li>
        <li>Workshops and masterclasses</li>
        <li>Educational content and resources</li>
        <li>Certification programs</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">3. User Obligations</h2>
      <p>As a user of our services, you agree to:</p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Provide accurate and complete information during registration</li>
        <li>Maintain the confidentiality of your account credentials</li>
        <li>Not share or redistribute course materials without permission</li>
        <li>Use the services for personal educational purposes only</li>
        <li>Respect intellectual property rights</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">4. Payment Terms</h2>
      <p>
        All payments are processed securely through Razorpay. By making a payment, you agree to:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Pay the full amount as displayed at checkout</li>
        <li>Provide valid payment information</li>
        <li>Accept that prices may change without prior notice for new purchases</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">5. Intellectual Property</h2>
      <p>
        All content, materials, and resources provided by Nexgen Focus are protected by intellectual 
        property laws. Unauthorized reproduction, distribution, or commercial use is strictly prohibited.
      </p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">6. Limitation of Liability</h2>
      <p>
        Nexgen Focus shall not be liable for any indirect, incidental, or consequential damages arising 
        from the use of our services. Our total liability shall not exceed the amount paid for the 
        specific service in question.
      </p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">7. Changes to Terms</h2>
      <p>
        We reserve the right to modify these terms at any time. Continued use of our services after 
        changes constitutes acceptance of the new terms.
      </p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">8. Contact Information</h2>
      <p>
        For questions regarding these terms, contact us at:
      </p>
      <p className="mt-2">
        Email: contact@nexgenfocus.com<br />
        Address: Bangalore, Karnataka, India
      </p>
    </PolicyLayout>
  );
}

export function CancellationRefundPolicy() {
  return (
    <PolicyLayout title="Cancellation and Refund Policy" icon={RefreshCcw}>
      <p className="text-white/70 text-sm mb-6">Last updated: December 2024</p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">1. Cancellation Policy</h2>
      <p>
        We understand that circumstances may change. Here is our cancellation policy:
      </p>
      
      <h3 className="text-lg font-medium text-white mt-4 mb-2">For Online Courses:</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Cancellation requests must be made within 7 days of purchase</li>
        <li>No cancellation is allowed once course content has been accessed beyond 20%</li>
        <li>Cancellation requests should be sent to contact@nexgenfocus.com</li>
      </ul>
      
      <h3 className="text-lg font-medium text-white mt-4 mb-2">For Workshops and Events:</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Full refund if cancelled 7+ days before the event</li>
        <li>50% refund if cancelled 3-7 days before the event</li>
        <li>No refund for cancellations less than 3 days before the event</li>
        <li>Event rescheduling may be allowed based on availability</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">2. Refund Policy</h2>
      <p>
        Our refund policy is designed to be fair to both our customers and our business:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Refund requests will be processed within 7-10 business days</li>
        <li>Refunds will be credited to the original payment method</li>
        <li>Processing fees (if any) may be deducted from the refund amount</li>
        <li>Refunds for partially completed courses will be prorated</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">3. Non-Refundable Items</h2>
      <p>The following are non-refundable:</p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Courses that have been completed or accessed beyond 50%</li>
        <li>Special promotional or discounted purchases</li>
        <li>Certification exam fees once the exam has been attempted</li>
        <li>Downloadable resources that have been accessed</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">4. How to Request a Refund</h2>
      <p>To request a refund:</p>
      <ol className="list-decimal pl-6 space-y-2 mt-2">
        <li>Send an email to contact@nexgenfocus.com with subject "Refund Request"</li>
        <li>Include your order ID and reason for refund</li>
        <li>Our team will review and respond within 2-3 business days</li>
        <li>If approved, refund will be processed within 7-10 business days</li>
      </ol>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">5. Event Cancellation by Nexgen Focus</h2>
      <p>
        If we cancel an event or course:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Full refund will be provided</li>
        <li>Alternative dates may be offered</li>
        <li>Transfer to another program of equal value may be offered</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">6. Contact Us</h2>
      <p>
        For any questions about cancellations or refunds:
      </p>
      <p className="mt-2">
        Email: contact@nexgenfocus.com<br />
        Phone: +91 98765 43210
      </p>
    </PolicyLayout>
  );
}

export function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" icon={Shield}>
      <p className="text-white/70 text-sm mb-6">Last updated: December 2024</p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">1. Introduction</h2>
      <p>
        Nexgen Focus ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
        explains how we collect, use, disclose, and safeguard your information when you visit our website 
        or use our services.
      </p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">2. Information We Collect</h2>
      <h3 className="text-lg font-medium text-white mt-4 mb-2">Personal Information:</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Name and email address</li>
        <li>Phone number</li>
        <li>Billing and payment information</li>
        <li>Educational background (when provided)</li>
      </ul>
      
      <h3 className="text-lg font-medium text-white mt-4 mb-2">Automatically Collected Information:</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>IP address and browser type</li>
        <li>Device information</li>
        <li>Usage data and analytics</li>
        <li>Cookies and similar technologies</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">3. How We Use Your Information</h2>
      <p>We use the collected information to:</p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Provide and maintain our services</li>
        <li>Process payments and transactions</li>
        <li>Send course updates and notifications</li>
        <li>Respond to inquiries and support requests</li>
        <li>Improve our services and user experience</li>
        <li>Send promotional communications (with your consent)</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">4. Information Sharing</h2>
      <p>
        We do not sell your personal information. We may share your information with:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Payment processors (Razorpay) for transaction processing</li>
        <li>Service providers who assist in our operations</li>
        <li>Legal authorities when required by law</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">5. Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal information, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>SSL encryption for data transmission</li>
        <li>Secure payment processing through Razorpay</li>
        <li>Regular security audits and updates</li>
        <li>Limited access to personal information</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your data</li>
        <li>Opt-out of marketing communications</li>
        <li>Withdraw consent at any time</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">7. Cookies</h2>
      <p>
        We use cookies to enhance your experience. You can control cookie preferences through your 
        browser settings. Disabling cookies may affect the functionality of our website.
      </p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">8. Children's Privacy</h2>
      <p>
        Our services are not directed to children under 13. We do not knowingly collect personal 
        information from children under 13. If you believe we have collected such information, 
        please contact us immediately.
      </p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by 
        posting the new policy on this page and updating the "Last updated" date.
      </p>
      
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">10. Contact Us</h2>
      <p>
        For questions about this Privacy Policy, contact us at:
      </p>
      <p className="mt-2">
        Email: contact@nexgenfocus.com<br />
        Address: Bangalore, Karnataka, India<br />
        Phone: +91 98765 43210
      </p>
    </PolicyLayout>
  );
}
