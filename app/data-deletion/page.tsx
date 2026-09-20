import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";

export const metadata = {
  title: "Data Deletion Instructions | Plegmo",
  description: "Instructions for requesting deletion of user data and communications in Plegmo.",
};

export default function DataDeletionPage() {
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
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
          <Trash2 className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Data Deletion Instructions</h1>
      </div>

      <p className="text-sm text-slate-400 mb-8">Last updated: September 20, 2026</p>

      <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-slate-800 pt-8">
        <section>
          <p>
            Plegmo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated by <strong>مصطفي محمود احمد محمود وشركاه - ابناء النيل لانشاء المطاعم والتجارة العامة والتوريدات</strong> (Abnaa El Nile for Restaurants, General Trading &amp; Supplies, Tax ID: 553-212-044), provides a customer relationship management platform used by travel agencies to manage their WhatsApp, Instagram, and Facebook Messenger conversations. If you have messaged one of our agency clients and want your data removed, you have two options:
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Remove the app&apos;s access from your own account</h2>
          <p className="mb-3">
            Removing an app&apos;s access from your Facebook or Instagram account stops it from receiving any further messages, but does not by itself delete data already sent.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>
              <strong className="text-slate-200">Facebook:</strong> Settings &amp; Privacy → Settings → Apps and Websites → find the relevant app → Remove.
            </li>
            <li>
              <strong className="text-slate-200">Instagram:</strong> Settings → Apps and Websites → Active → find the relevant app → Remove.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Request deletion of data already stored</h2>
          <p className="mb-3">
            To have your message data (content, contact identifiers, timestamps, and any attachments) permanently deleted from our systems, email{" "}
            <a href="mailto:privacy@plegmo.com" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
              privacy@plegmo.com
            </a>{" "}
            with the phone number, Instagram handle, or Facebook account you messaged from, and the name of the agency you contacted.
          </p>
          <p className="text-slate-400">
            We will confirm your identity as the sender, delete the corresponding data, and reply to confirm once deletion is complete, <strong className="text-white">within 30 days</strong> of your request.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. What gets deleted</h2>
          <p>
            Message content, sender contact identifiers, timestamps, and any attached media associated with your conversation. This does not delete records the agency itself is legally required to retain independent of our platform (for example, a completed booking&apos;s financial records), which remain subject to the agency&apos;s own retention obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Questions &amp; Privacy Policy</h2>
          <p>
            See our{" "}
            <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            for how we handle data generally, or contact{" "}
            <a href="mailto:privacy@plegmo.com" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
              privacy@plegmo.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Contact Us &amp; Legal Entity</h2>
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
