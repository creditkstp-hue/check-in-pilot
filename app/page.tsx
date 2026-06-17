const stats = [
  { label: 'Checked In', value: '28' },
  { label: 'Running Late', value: '3' },
  { label: 'Missed', value: '1' },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f8fb', color: '#07172d', padding: 24 }}>
      <section style={{ maxWidth: 1100, margin: '0 auto' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <strong>Logistics OS / Check-In Pilot</strong>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="/employee" style={{ padding: '10px 14px', border: '1px solid #d0d7de', borderRadius: 10 }}>Employee Login</a>
            <a href="/admin" style={{ padding: '10px 14px', background: '#061a33', color: 'white', borderRadius: 10 }}>Admin Login</a>
          </div>
        </nav>

        <div style={{ display: 'grid', gap: 24 }}>
          <p style={{ color: '#ff4d2e', fontWeight: 700 }}>GPS-powered workforce check-ins</p>
          <h1 style={{ fontSize: 56, lineHeight: 1, margin: 0 }}>Know who's ready, where they are, and when they arrived.</h1>
          <p style={{ fontSize: 20, maxWidth: 720, color: '#4b5563' }}>
            Check-In Pilot helps logistics companies, contractors, security teams, cleaning crews, and delivery businesses track employee check-ins with GPS verification.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/employee" style={{ padding: '14px 18px', background: '#ff4d2e', color: 'white', borderRadius: 12, fontWeight: 700 }}>Try Employee Check-In</a>
            <a href="/admin" style={{ padding: '14px 18px', background: '#061a33', color: 'white', borderRadius: 12, fontWeight: 700 }}>View Admin Dashboard</a>
          </div>
        </div>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 48 }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 16, padding: 22 }}>
              <div style={{ fontSize: 36, fontWeight: 800 }}>{stat.value}</div>
              <div style={{ color: '#6b7280' }}>{stat.label}</div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
