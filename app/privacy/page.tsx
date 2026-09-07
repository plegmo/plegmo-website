import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Plegmo",
  description: "Privacy Policy for Plegmo CRM and Services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-300">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
          <Shield className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Privacy Policy</h1>
      </div>

      <p className="text-sm text-slate-400 mb-8">Effective Date: September 7, 2026</p>

      <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-slate-800 pt-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
          <p>
            Plegmo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides CRM and communication management software designed for travel agencies, tour operators, and hospitality businesses. This Privacy Policy explains how we collect, use, and protect information when you use our platform, APIs, and connected messaging channels (including WhatsApp, Instagram, and Facebook Messenger).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Information We Process</h2>
          <p className="mb-2">
            Depending on your agency&apos;s configuration, Plegmo processes:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-400">
            <li><strong className="text-slate-200">Account Information:</strong> Name, work email, business name, and authentication credentials.</li>
            <li><strong className="text-slate-200">Channel Integration Data:</strong> Tokens, webhook notifications, and identifiers necessary to link your WhatsApp Business Accounts, Instagram Professional accounts, and Facebook Pages.</li>
            <li><strong className="text-slate-200">Customer Communication Data:</strong> Inbound and outbound message text, timestamps, contact phone numbers, and delivery statuses solely on behalf of our travel agency clients.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Meta Platform Data Compliance</h2>
          <p>
            Plegmo strictly complies with Meta Platform Terms and Developer Policies. We use Meta APIs (including the WhatsApp Cloud API and Messenger API) exclusively to provide requested messaging and customer relationship management functionalities to our clients. We do not sell, rent, or transfer Meta User Data to third parties or advertising networks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Data Security &amp; Retention</h2>
          <p>
            We implement robust administrative, technical, and physical safeguards designed to protect business data against unauthorized access, disclosure, alteration, or destruction. Data is retained only for as long as necessary to fulfill the operational purposes described or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. User Rights and Data Deletion</h2>
          <p>
            Users and clients have the right to access, rectify, or request deletion of their personal and communications data. To submit a data deletion request, email us at <span className="text-emerald-400 font-medium">privacy@plegmo.com</span> with your organization and account details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy or our privacy practices, please contact us at:
            <br />
            <span className="text-white font-medium">Email:</span> privacy@plegmo.com
          </p>
        </section>
      </div>
    </main>
  );
}
