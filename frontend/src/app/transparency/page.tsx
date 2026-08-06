export const metadata = {
  title: "Transparency — Chakravega Technologies",
  description: "Company transparency, governance, and legal identifiers.",
};

export default function TransparencyPage() {
  return (
    <main className="container-wide py-20">
      <h1 className="text-3xl font-bold mb-6">Transparency & Governance</h1>
      <p className="text-sm mb-4">This page provides company legal details and governance information.</p>
      
      <section className="p-6 border rounded-lg mb-6" style={{ background: "var(--surface-2)", borderColor: "rgba(61,90,107,0.3)" }}>
        <h2 className="font-semibold text-lg mb-4" style={{ color: "var(--cool-white)" }}>Corporate Identity</h2>
        
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-[10px] tracking-wide uppercase font-bold" style={{ color: "var(--text-secondary)" }}>Registered Name</div>
            <p className="text-sm font-medium" style={{ color: "var(--cool-white)" }}>Chakravega Technologies Private Limited</p>
          </div>
          
          <div>
            <div className="text-[10px] tracking-wide uppercase font-bold" style={{ color: "var(--text-secondary)" }}>CIN (Corporate Identity Number)</div>
            <p className="text-sm font-mono font-semibold" style={{ color: "var(--cyan)" }}>U62099JH2026PTC028403</p>
          </div>
          
          <div>
            <div className="text-[10px] tracking-wide uppercase font-bold" style={{ color: "var(--text-secondary)" }}>Registered Office Address</div>
            <p className="text-sm" style={{ color: "var(--cool-white)" }}>
              C/O Chinta Devi, Village – Samudih, P.O. – Jhargara, Japla, District – Palamau, Jharkhand – 822116, India
            </p>
          </div>
          
          <div>
            <div className="text-[10px] tracking-wide uppercase font-bold" style={{ color: "var(--text-secondary)" }}>Operational Office Address</div>
            <p className="text-sm" style={{ color: "var(--cool-white)" }}>
              Birsa Institute of Technology (BIT) Sindri, Sindri, Dhanbad – 828123, Jharkhand, India
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold mb-2">Corporate Group Structure</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Chakravega Technologies is structured as an engineering and industrial conglomerate (similar to the Tata Group&apos;s diversified holding model) targeting distinct high-impact business units like JhariaWatch (Industrial Intelligence & Safety) and PragyaTek Solutions (Digital Infrastructure & Enterprise Systems).
        </p>
      </section>
    </main>
  );
}
