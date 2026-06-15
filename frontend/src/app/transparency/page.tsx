export const metadata = {
  title: "Transparency — Chakravega Technologies",
  description: "Company transparency, governance, and legal identifiers.",
};

export default function TransparencyPage() {
  return (
    <main className="container-wide py-20">
      <h1 className="text-3xl font-bold mb-6">Transparency & Governance</h1>
      <p className="text-sm mb-4">This page provides company legal details and governance information.</p>
      <section className="bg-surface p-6 rounded-lg">
        <h2 className="font-semibold mb-2">Registered Name</h2>
        <p className="text-sm">Chakravega Technologies Pvt Limited (registration in progress)</p>
        <h3 className="mt-4 font-semibold">Identifiers</h3>
        <p className="text-sm">CIN / DIN / GST and formal identifiers will be listed here after registration.</p>
      </section>
      <section className="mt-6">
        <h2 className="font-semibold mb-2">Parent / Group</h2>
        <p className="text-sm">This company is a product-focused group similar to major technology holding companies; further legal structure will be published when finalised.</p>
      </section>
    </main>
  );
}
