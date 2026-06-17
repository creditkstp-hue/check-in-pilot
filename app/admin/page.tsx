const employees = [
  { name: 'David', route: 'Warehouse 1', time: '7:58 AM', status: 'Checked In', gps: 'Verified' },
  { name: 'Sarah', route: 'Route A', time: '8:12 AM', status: 'Late', gps: 'Verified' },
  { name: 'John', route: 'Route B', time: '-', status: 'Awaiting', gps: '-' },
];

export default function AdminPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f8fb', color: '#07172d', padding: 24 }}>
      <section style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ color: '#ff4d2e', fontWeight: 700 }}>Logistics OS</p>
        <h1 style={{ fontSize: 42, marginTop: 8 }}>Admin Dashboard</h1>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 24 }}>
          <div style={{ background: 'white', padding: 22, borderRadius: 16 }}><strong style={{ fontSize: 34 }}>28</strong><p>Checked In</p></div>
          <div style={{ background: 'white', padding: 22, borderRadius: 16 }}><strong style={{ fontSize: 34 }}>3</strong><p>Late</p></div>
          <div style={{ background: 'white', padding: 22, borderRadius: 16 }}><strong style={{ fontSize: 34 }}>1</strong><p>Missed</p></div>
          <div style={{ background: 'white', padding: 22, borderRadius: 16 }}><strong style={{ fontSize: 34 }}>31</strong><p>GPS Stamps</p></div>
        </section>

        <section style={{ background: 'white', borderRadius: 18, padding: 20, marginTop: 24, overflowX: 'auto' }}>
          <h2>Live Employee Status</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ padding: 12 }}>Employee</th>
                <th style={{ padding: 12 }}>Route / Site</th>
                <th style={{ padding: 12 }}>Time</th>
                <th style={{ padding: 12 }}>Status</th>
                <th style={{ padding: 12 }}>GPS</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.name} style={{ borderBottom: '1px solid #eef2f7' }}>
                  <td style={{ padding: 12 }}>{employee.name}</td>
                  <td style={{ padding: 12 }}>{employee.route}</td>
                  <td style={{ padding: 12 }}>{employee.time}</td>
                  <td style={{ padding: 12 }}>{employee.status}</td>
                  <td style={{ padding: 12 }}>{employee.gps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}
