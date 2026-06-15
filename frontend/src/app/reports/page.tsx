export const metadata = {
  title: "Reports — Chakravega Technologies",
  description: "Corporate reports, financials, and transparency documents.",
};

export default function ReportsPage() {
  return (
    <main className="container-wide py-20">
      <h1 className="text-3xl font-bold mb-6">Reports & Filings</h1>
      <p className="text-sm mb-4">Corporate reports, annual statements, and transparency documents will be published here.</p>
      <section className="bg-surface p-6 rounded-lg">
        <h2 className="font-semibold mb-2">Latest Reports</h2>
        <p className="text-sm">No reports available yet. This page will be updated once filings are ready.</p>
      </section>
    </main>
  );
}
