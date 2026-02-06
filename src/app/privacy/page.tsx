import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Fresh Cut Woodworking',
  description: 'Privacy Policy for Fresh Cut Woodworking Instagram App',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FAF6F1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-[#3D2914] mb-8">
            Privacy Policy
          </h1>

          <p className="text-[#6B5744] mb-6">
            <strong>Last updated:</strong> February 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#3D2914] mb-4">
              1. Introduction
            </h2>
            <p className="text-[#6B5744] leading-relaxed">
              Fresh Cut Woodworking (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Fresh Cut Reel Builder
              application. This Privacy Policy explains how we collect, use, and protect your
              information when you use our application to create and publish Instagram Reels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#3D2914] mb-4">
              2. Information We Collect
            </h2>
            <p className="text-[#6B5744] leading-relaxed mb-4">
              When you use our application, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-[#6B5744] space-y-2 ml-4">
              <li>Images you upload for reel creation</li>
              <li>Descriptions and captions you provide</li>
              <li>Instagram account information necessary for posting (via Instagram API)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#3D2914] mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-[#6B5744] leading-relaxed mb-4">
              We use your information solely for the following purposes:
            </p>
            <ul className="list-disc list-inside text-[#6B5744] space-y-2 ml-4">
              <li>To generate video reels from your uploaded images</li>
              <li>To publish content to your Instagram account on your behalf</li>
              <li>To improve our services and user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#3D2914] mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-[#6B5744] leading-relaxed">
              Our application integrates with Meta&apos;s Instagram API to publish content to your
              Instagram account. When you use this feature, your data is also subject to
              Meta&apos;s Privacy Policy and Terms of Service. We recommend reviewing their policies
              at{' '}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B6914] hover:underline"
              >
                Meta Privacy Policy
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#3D2914] mb-4">
              5. Data Retention
            </h2>
            <p className="text-[#6B5744] leading-relaxed">
              We do not permanently store your uploaded images or generated videos on our servers.
              Content is processed temporarily and deleted after your session ends or after
              successful publication to Instagram.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#3D2914] mb-4">
              6. Data Security
            </h2>
            <p className="text-[#6B5744] leading-relaxed">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#3D2914] mb-4">
              7. Your Rights
            </h2>
            <p className="text-[#6B5744] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-[#6B5744] space-y-2 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request deletion of your data</li>
              <li>Revoke Instagram access permissions at any time through your Instagram settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#3D2914] mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-[#6B5744] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the
              &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#3D2914] mb-4">
              9. Contact Us
            </h2>
            <p className="text-[#6B5744] leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices,
              please contact us at:{' '}
              <a
                href="mailto:arbaz.m.surti@gmail.com"
                className="text-[#8B6914] hover:underline"
              >
                arbaz.m.surti@gmail.com
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-[#E8DFD4]">
            <p className="text-sm text-[#9B8B7A]">
              © {new Date().getFullYear()} Fresh Cut Woodworking. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
