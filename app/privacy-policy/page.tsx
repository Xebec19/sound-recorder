import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sound Recorder",
  description: "Privacy Policy for Sound REcor",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective Date: 12/19/2024</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This Privacy Policy explains how Sound Recorder (&apos;we,&apos;
          &apos;us,&apos; or &apos;our&apos;) collects, uses, and protects the
          personal information of users (&apos;you,&apos; &apos;your&apos;) when
          using our mobile application (&apos;Sound Recorder&apos;). We are
          committed to protecting your privacy and ensuring that your personal
          information is handled securely.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <p>
          The App does not collect, store, or transmit any personal information
          from users. All audio recordings are saved directly to your device and
          remain under your control.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <p>
          Since we do not collect any information from you, we do not process,
          share, or use any of your personal data in any way. Your audio
          recordings are stored locally on your device and are not uploaded to
          any external servers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We prioritize the security of your data. Since all audio recordings
          are stored locally on your device, it is your responsibility to
          protect your device from unauthorized access, theft, or loss.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
        <p>
          The App does not use any third-party services, analytics tools, or
          tracking software that would collect information from you.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Children&apos;s Privacy
        </h2>
        <p>
          The App is not intended for use by children under the age of 13. We do
          not knowingly collect any personal information from children. If you
          believe that a child under 13 has used the App and provided personal
          information, please contact us so we can address the issue.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          7. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted within the App, and we encourage you to review this policy
          periodically. Your continued use of the App following any changes
          indicates your acceptance of the updated policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or
          your privacy while using the App, please contact us at
          rohandeveloper106@gmail.com.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Your Rights</h2>
        <p>
          Since the App does not collect or process your personal information,
          you have full control over your data. If you uninstall the App, all
          audio recordings will remain on your device until you choose to delete
          them.
        </p>
      </section>

      <p className="mt-8 font-semibold">
        By using the App, you agree to the terms of this Privacy Policy.
      </p>
    </div>
  );
}
