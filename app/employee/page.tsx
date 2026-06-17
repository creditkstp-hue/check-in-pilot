'use client';

import { useState } from 'react';

type LocationStamp = {
  latitude: number;
  longitude: number;
  accuracy: number;
  checkedInAt: string;
};

export default function EmployeePage() {
  const [stamp, setStamp] = useState<LocationStamp | null>(null);
  const [status, setStatus] = useState('Ready to check in');

  function handleCheckIn() {
    setStatus('Requesting GPS location...');

    if (!navigator.geolocation) {
      setStatus('GPS is not supported on this device.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStamp({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          checkedInAt: new Date().toLocaleString(),
        });
        setStatus('Checked in with GPS stamp');
      },
      () => setStatus('GPS permission denied. Please allow location access.'),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: '#061a33', color: 'white', padding: 24 }}>
      <section style={{ maxWidth: 460, margin: '0 auto' }}>
        <p style={{ color: '#ff8a76', fontWeight: 700 }}>Check-In Pilot</p>
        <h1 style={{ fontSize: 40, marginTop: 12 }}>Employee Check-In</h1>
        <div style={{ background: 'white', color: '#07172d', borderRadius: 24, padding: 24, marginTop: 24 }}>
          <p style={{ color: '#6b7280' }}>Next Scheduled Check-In</p>
          <h2 style={{ fontSize: 48, margin: '8px 0 20px' }}>8:00 AM</h2>
          <button onClick={handleCheckIn} style={{ width: '100%', border: 0, borderRadius: 14, padding: 18, background: '#ff4d2e', color: 'white', fontSize: 20, fontWeight: 800 }}>
            CHECK IN
          </button>
          <button style={{ width: '100%', border: '1px solid #d0d7de', borderRadius: 14, padding: 14, background: 'white', color: '#07172d', marginTop: 12, fontWeight: 700 }}>
            Running Late
          </button>
          <p style={{ marginTop: 18, fontWeight: 700 }}>{status}</p>
          {stamp && (
            <div style={{ marginTop: 16, padding: 16, background: '#f7f8fb', borderRadius: 14 }}>
              <p><strong>Time:</strong> {stamp.checkedInAt}</p>
              <p><strong>Latitude:</strong> {stamp.latitude}</p>
              <p><strong>Longitude:</strong> {stamp.longitude}</p>
              <p><strong>Accuracy:</strong> {Math.round(stamp.accuracy)} meters</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
