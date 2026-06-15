export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding" style={{ background: "var(--surface)", color: "var(--cool-white)" }}>
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-6">Privacy Policy</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "Inter Tight, sans-serif" }}>
            Chakravega Technologies Privacy and Data Protection
          </h1>
          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}>
            <p>
              We collect inquiry data to respond to requests, improve service delivery, and support communications with customers. We treat all submitted information as confidential and only use it for the purpose specified on the contact form.
            </p>
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cool-white)" }}>
                What we collect
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Name, organization, email, and message content submitted through the contact form.</li>
                <li>Technical metadata such as IP address, browser user agent, referrer, and inferred location.</li>
                <li>Cookie consent data for website preferences and minimal session tracking.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cool-white)" }}>
                How we use it
              </h2>
              <p>
                Submitted form data is stored in a secure MongoDB database. Notifications are sent by email and Telegram only when a new inquiry arrives, so our team can respond promptly.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cool-white)" }}>
                Location and IP address
              </h2>
              <p>
                We capture the visitor IP address to protect the website, provide basic location context, and support analytics for security and service quality. IP address data is not used for profiling beyond the stated service needs.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cool-white)" }}>
                Third-party notifications
              </h2>
              <p>
                Notifications are delivered through configured backend services. Email notifications use a secure transactional email API, and Telegram is used only for internal alerts related to incoming inquiries.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cool-white)" }}>
                Your rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your personal data by contacting the Chakravega Technologies team through the website contact form or the published corporate email address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
