# Check-In Pilot

Check-In Pilot is the first product in the Logistics OS platform.

## What it does

Check-In Pilot helps companies with mobile employees know who is working, where they are, and when they arrived.

The core feature is simple:

1. Employee receives a check-in reminder on their phone.
2. Employee taps **Check In**.
3. The app records the time, GPS location, GPS accuracy, and assigned job site.
4. The manager sees the check-in on a browser dashboard.

## Product Structure

Check-In Pilot will include:

- **Admin Web Dashboard** for managers and business owners
- **Employee Mobile App** for iPhone and Android employees
- **Shared Backend** for authentication, schedules, GPS stamps, and reports

## MVP Features

### Admin / Manager

- Admin login
- Company setup
- Employee list
- Job site setup
- Schedule setup
- Live check-in dashboard
- GPS location stamp
- Late and missed check-in tracking

### Employee

- Employee login
- Today's scheduled check-in
- One-tap check-in
- GPS stamp on check-in
- Running late option
- Check-in history

## Tech Direction

Initial build path:

- Web app / PWA first for fast launch
- Admin browser dashboard
- Employee mobile web app with installable app icon
- Later native iPhone and Android apps using the same backend

## Planned Stack

- Next.js
- TypeScript
- Tailwind CSS
- Supabase Auth
- Supabase PostgreSQL
- Push notifications
- Maps

## Brand

Parent brand: **Logistics OS**

Product: **Check-In Pilot**

Tagline: **Know who's ready, where they are, and when they arrived.**
