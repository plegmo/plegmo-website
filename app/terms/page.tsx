import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

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

      <p className="text-sm text-slate-400 mb-8">Last Updated: September 7, 2026</p>

      <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-slate-800 pt-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or using the Plegmo platform, websites, or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
          <p>
            Plegmo provides conversational CRM, omnichannel messaging tools, lead management pipelines, and business intelligence software specifically designed for travel agencies, tour operators, and tourism companies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Acceptable Use and Third-Party Policies</h2>
          <p className="mb-2">
            You agree to use Plegmo in full compliance with all applicable laws and the policies of third-party platforms connected to your account, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-400">
            <li>Meta Platform Terms &amp; Developer Policies</li>
            <li>WhatsApp Business Messaging Policy</li>
            <li>Applicable data protection and electronic communications regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
          <p>
            All right, title, and interest in and to the Plegmo software, branding, and interfaces are and will remain the exclusive property of Plegmo and its licensors.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Termination and Contact</h2>
          <p>
            We reserve the right to suspend or terminate access for violations of these terms. For inquiries regarding these terms, please contact:
            <br />
            <span className="text-white font-medium">Email:</span> legal@plegmo.com
          </p>
        </section>
      </div>
    </main>
  );
}
