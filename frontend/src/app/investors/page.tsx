export const metadata = {
  title: "Investors — Chakravega Technologies",
  description: "Information for investors, contacts, and investor relations.",
};

export default function InvestorsPage() {
  return (
    <main className="container-wide py-20">
      <h1 className="text-3xl font-bold mb-6">Investor Relations</h1>
      <p className="text-sm mb-4">Welcome — this page lists investor information, contact points, and filings.</p>
      
      <section className="p-6 border rounded-lg" style={{ background: "var(--surface-2)", borderColor: "rgba(61,90,107,0.3)" }}>
        <h2 className="font-semibold text-lg mb-4" style={{ color: "var(--cool-white)" }}>Corporate Details</h2>
        
        <div className="flex flex-col gap-3">
          <div>
            <div className="text-[10px] tracking-wide uppercase font-bold" style={{ color: "var(--text-secondary)" }}>Registered Name</div>
            <p className="text-sm font-medium" style={{ color: "var(--cool-white)" }}>Chakravega Technologies Private Limited</p>
          </div>
          
          <div>
            <div className="text-[10px] tracking-wide uppercase font-bold" style={{ color: "var(--text-secondary)" }}>CIN (Corporate Identity Number)</div>
            <p className="text-sm font-mono font-semibold" style={{ color: "var(--cyan)" }}>U62099JH2026PTC028403</p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold mb-2">Investor Relations Contacts</h2>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Email: <a href="mailto:chakravegatechnologies@gmail.com" className="hover:text-white transition-colors" style={{ color: "var(--cyan)" }}>chakravegatechnologies@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
