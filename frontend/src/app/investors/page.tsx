export const metadata = {
  title: "Investors — Chakravega Technologies",
  description: "Information for investors, contacts, and investor relations.",
};

export default function InvestorsPage() {
  return (
    <main className="container-wide py-20">
      <h1 className="text-3xl font-bold mb-6">Investor Relations</h1>
      <p className="text-sm mb-4">Welcome — this page lists investor information, contact points, and filings.</p>
      <section className="bg-surface p-6 rounded-lg">
        <h2 className="font-semibold mb-2">Company</h2>
        <p className="text-sm">Chakravega Technologies Pvt Limited (Registered name — under registration process)</p>
        <p className="text-sm mt-2">CIN / DIN and official identifiers will be published here once registration completes.</p>
      </section>
      <section className="mt-6">
        <h2 className="font-semibold mb-2">Investor Contacts</h2>
        <p className="text-sm">Email: chakravegatechnologies@gmail.com</p>
      </section>
    </main>
  );
}
