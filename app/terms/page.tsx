import Link from "next/link";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Plegmo",
  description: "Terms of Service for Plegmo CRM and Communications Platform.",
};

export default function TermsOfServicePage() {
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
        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
          <FileText className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Terms of Service</h1>
      </div>

      <p className="text-sm text-slate-400 mb-8">Last Updated: September 20, 2026 (v2)</p>

      <div className="space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-slate-800 pt-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms &amp; Operating Entity</h2>
          <p>
            Plegmo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated by{" "}
            <strong>مصطفي محمود احمد محمود وشركاه - ابناء النيل لانشاء المطاعم والتجارة العامة والتوريدات</strong>{" "}
            (Abnaa El Nile for Restaurants, General Trading &amp; Supplies, Tax ID: 553-212-044), provides customer relationship
            management (CRM) software, conversational messaging infrastructure, and operational tools designed for travel
            agencies, tour operators, and tourism businesses. By accessing or using our platform, software, APIs, and websites
            (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you are entering into
            these Terms on behalf of an agency, company, or legal entity, you represent that you have full legal authority to bind
            such entity. If you do not agree to these Terms, you must not use our Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Description of the Service</h2>
          <p>
            Plegmo provides an enterprise conversational CRM platform tailored for the travel and hospitality industry. The Service
            enables travel agencies to integrate multiple customer communication channels—specifically Meta platforms including
            WhatsApp Business Platform, Instagram Professional messaging, and Facebook Messenger—to manage inquiries, assign
            conversations, build lead pipelines, track booking statuses, and collaborate among agents and managers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Compliance with Meta Platform Terms &amp; Policies</h2>
          <p className="mb-3">
            Because Plegmo integrates with Meta Platform APIs, your use of the Service is conditioned upon strict compliance with
            all applicable Meta rules and developer policies, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>
              <a
                href="https://developers.facebook.com/terms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Meta Platform Terms <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
            </li>
            <li>
              <a
                href="https://developers.facebook.com/devpolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Meta Developer Policies <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
            </li>
            <li>
              <a
                href="https://www.whatsapp.com/legal/business-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                WhatsApp Business Messaging Policy <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
            </li>
            <li>
              <a
                href="https://help.instagram.com/581066165581870"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Instagram Platform Policy <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
            </li>
          </ul>
          <p className="mt-3">
            You agree that all communications initiated with travelers through Plegmo will respect customer opt-in consent, 24-hour
            customer service messaging windows, approved WhatsApp template message guidelines, and spam prevention rules. Any
            violation of Meta policies may result in immediate suspension or termination of connected channels or your Plegmo
            account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Client Data Ownership &amp; Privacy Protection</h2>
          <p className="mb-3">
            <strong className="text-white">Data Ownership:</strong> You retain complete ownership of all customer communication
            content, contact details, traveler inquiries, and media files processed through your account (&quot;Client Data&quot;).
            Plegmo acts solely as a data processor on your behalf.
          </p>
          <p className="mb-3">
            <strong className="text-white">No Sale of Data:</strong> Plegmo does not sell, rent, monetize, or transfer Client Data
            or Meta User Data to any advertising networks, data brokers, or third parties outside the direct infrastructure required
            to provide the Service.
          </p>
          <p>
            For comprehensive information on how data is stored, sub-processors, and retention schedules, see our{" "}
            <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/data-deletion" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
              Data Deletion Instructions
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Acceptable Use &amp; Prohibited Conduct</h2>
          <p className="mb-2">You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-400">
            <li>Send unsolicited, spam, or deceptive bulk messages to end users.</li>
            <li>Harvest, scrape, or extract personal data of travelers or agents without consent.</li>
            <li>Transmit defamatory, abusive, fraudulent, or infringing materials.</li>
            <li>Attempt to probe, scan, or compromise the security, tenant isolation, or authentication systems of Plegmo.</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Account Security &amp; Access Controls</h2>
          <p>
            Plegmo uses multi-tenant administrative isolation. Agency managers are responsible for provisioning staff accounts,
            maintaining secure credentials, and promptly revoking access for departed team members. You agree to notify Plegmo
            immediately at <a href="mailto:privacy@plegmo.com" className="text-emerald-400 hover:text-emerald-300">privacy@plegmo.com</a> if
            you discover or suspect any unauthorized access to your tenant.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Third-Party Infrastructure &amp; Dependencies</h2>
          <p>
            The Service operates using secure cloud infrastructure, including Amazon Web Services (AWS) in the eu-central-1 (Frankfurt)
            region, self-hosted Chatwoot messaging components, and Meta Graph APIs. Plegmo is not liable for service disruptions,
            downtime, or API changes caused directly by third-party upstream network or platform outages beyond our reasonable control.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Intellectual Property</h2>
          <p>
            All right, title, and interest in and to the Plegmo software, branding, designs, interfaces, code, and documentation remain
            the exclusive property of Plegmo and its operating entity. Nothing in these Terms grants you ownership of any Plegmo
            intellectual property.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. Termination &amp; 30-Day Data Purge</h2>
          <p>
            Either party may terminate the Service in accordance with agreed contract terms, or Plegmo may suspend or terminate
            access immediately upon material breach of these Terms or Meta policies. Upon termination:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-400 mt-2">
            <li>Access to the CRM interface and messaging integrations will cease.</li>
            <li>
              Client messaging records and database contents are retained for a grace period of{" "}
              <strong className="text-white">30 days</strong> to allow for export or reactivation, after which all stored conversation
              data is permanently and irreversibly purged from our servers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Disclaimer of Warranties &amp; Limitation of Liability</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or
            implied. To the maximum extent permitted by applicable law, Plegmo and its operating entity shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, or business opportunities.
            In no event shall Plegmo&apos;s aggregate liability exceed the total fees paid by you to Plegmo in the twelve (12) months
            prior to the event giving rise to liability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">11. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of the Arab Republic of Egypt. Any
            dispute, claim, or controversy arising out of or relating to these Terms shall be submitted to the exclusive jurisdiction
            of the competent courts of Cairo, Egypt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">12. Contact Us &amp; Legal Entity</h2>
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
              <strong className="text-white font-medium">Legal Inquiries:</strong>{" "}
              <a href="mailto:legal@plegmo.com" className="text-emerald-400 hover:text-emerald-300">
                legal@plegmo.com
              </a>
            </span>
            <span className="block">
              <strong className="text-white font-medium">Privacy Inquiries:</strong>{" "}
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
