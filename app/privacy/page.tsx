import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Plegmo",
  description: "Privacy Policy for Plegmo CRM and Messaging Services.",
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

      <p className="text-sm text-slate-400 mb-8">Last updated: September 20, 2026 (v2)</p>

      <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-slate-800 pt-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
          <p>
            Plegmo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated by <strong>مصطفي محمود احمد محمود وشركاه - ابناء النيل لانشاء المطاعم والتجارة العامة والتوريدات</strong> (Abnaa El Nile for Restaurants, General Trading &amp; Supplies, Tax ID: 553-212-044), provides a customer relationship management platform for travel agencies, tour operators, and hospitality businesses. This policy covers messaging data handled through our integrations with Meta platforms (WhatsApp, Instagram, and Facebook Messenger) on behalf of the agencies we work with.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. What We Process</h2>
          <p>
            When a customer messages one of our agency clients via WhatsApp, Instagram, or Messenger, we receive and store the message content, sender contact information (phone number or Instagram/Facebook identifiers), timestamps, and any attached media (images, voice notes, documents), so that the agency&apos;s team can respond through our platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. How We Use It</h2>
          <p>
            Message data is used solely to enable the agency to communicate with their own customers. We do not sell this data, use it for advertising, or share it with any third party outside of the infrastructure required to deliver the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Who Processes Your Data (Sub-processors)</h2>
          <p className="mb-3">
            We keep the number of parties who touch your data to two, both under our direct control:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>
              <strong className="text-slate-200">Chatwoot</strong> (self-hosted by us, not a third-party SaaS) — the messaging transport layer that receives and sends messages on our behalf.
            </li>
            <li>
              <strong className="text-slate-200">Amazon Web Services (AWS)</strong> — the infrastructure provider hosting our servers and databases, in the <strong className="text-slate-200">eu-central-1 (Frankfurt, Germany)</strong> region.
            </li>
          </ul>
          <p className="mt-3 text-slate-400">
            Meta Platforms, Inc. (WhatsApp, Instagram, Messenger) also processes data as the messaging channel itself, under its own terms, before it reaches us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Retention</h2>
          <p>
            Conversation data is retained for as long as the agency&apos;s account is active, so their team can review conversation history. If an agency&apos;s account is closed, we retain their data for <strong className="text-white">30 days</strong> to allow for reactivation or export, after which it is permanently deleted. A customer may request deletion of their own message data at any time — see &quot;Your Rights and Data Deletion&quot; below — independent of the agency&apos;s account status.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights and Data Deletion</h2>
          <p>
            If you are a customer who has messaged one of our agency clients and want your message data deleted, you may remove the app&apos;s access from your own Facebook or Instagram account settings, or contact us directly at <a href="mailto:privacy@plegmo.com" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">privacy@plegmo.com</a> to request deletion of data already stored. See our <Link href="/data-deletion" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">Data Deletion Instructions</Link> for the full process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Meta Platform Terms</h2>
          <p>
            Our use of the WhatsApp Business Platform, Instagram, and Facebook Messenger is subject to Meta&apos;s{" "}
            <a
              href="https://developers.facebook.com/terms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
            >
              Platform Terms
            </a>{" "}
            and, for Instagram specifically, the{" "}
            <a
              href="https://help.instagram.com/581066165581870"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
            >
              Instagram Platform Policy
            </a>
            . We process data received through these platforms consistently with those terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us &amp; Legal Entity</h2>
          <p className="space-y-1">
            <span className="block">
              <strong className="text-white font-medium">Operating Entity:</strong> مصطفي محمود احمد محمود وشركاه - ابناء النيل لانشاء المطاعم والتجارة العامة والتوريدات (Abnaa El Nile for Restaurants, General Trading &amp; Supplies)
            </span>
            <span className="block">
              <strong className="text-white font-medium">Registered Address:</strong> 159 حي الملتقى العربي، مساكن الشيراتون، النزهة، محافظة القاهرة (159 Arab Forum, Sheraton Buildings, El Nozha, Cairo, Egypt)
            </span>
            <span className="block">
              <strong className="text-white font-medium">Tax Registration No.:</strong> 553-212-044
            </span>
            <span className="block">
              <strong className="text-white font-medium">Email:</strong>{" "}
              <a href="mailto:privacy@plegmo.com" className="text-emerald-400 hover:text-emerald-300">
                privacy@plegmo.com
              </a>
            </span>
          </p>
        </section>
      </div>
    </main>
  );
}
