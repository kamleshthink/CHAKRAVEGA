export default function CookiesPolicyPage() {
  return (
    <section className="section-padding" style={{ background: "var(--surface)", color: "var(--cool-white)" }}>
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-6">Cookie Policy</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "Inter Tight, sans-serif" }}>
            Cookies and Website Tracking
          </h1>
          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}>
            <p>
              Chakravega Technologies uses minimal cookies to support fundamental website behavior, user preferences, and basic analytics.
            </p>
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cool-white)" }}>
                What cookies we set
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>chakravega_consent</strong> – remembers consent status for cookie usage.</li>
                <li>Session cookies – preserve navigation and page state while browsing the website.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cool-white)" }}>
                Why we use cookies
              </h2>
              <p>
                Cookies are used only to improve the browsing experience and to allow the site to function correctly. We do not use cookies for advertising or user profiling.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cool-white)" }}>
                Managing cookies
              </h2>
              <p>
                You can clear cookie data from your browser settings at any time. Clearing cookies may reset the website’s saved preferences and session state.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cool-white)" }}>
                Data retention
              </h2>
              <p>
                Cookie preference information is retained only as long as required for the browsing session and user preference handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
