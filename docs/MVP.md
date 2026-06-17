# Check-In Pilot MVP

## Goal

Build the first working version of Check-In Pilot so a company can test GPS-powered employee check-ins.

## MVP Outcome

A manager can log in from a browser, add employees and job sites, assign a check-in time, and see whether employees checked in on time with a GPS stamp.

An employee can log in from a phone, see today's check-in, tap Check In, and have their time and GPS location recorded.

## User Types

### Admin / Manager

The admin uses the browser dashboard to manage employees, locations, schedules, and attendance.

### Employee

The employee uses the phone experience to check in, mark running late, and view their check-in history.

## Core MVP Flow

1. Admin creates company account.
2. Admin adds job site.
3. Admin adds employee.
4. Admin assigns employee to a job site and check-in time.
5. Employee logs in.
6. Employee taps Check In.
7. App captures GPS coordinates, time, accuracy, and distance from job site.
8. Admin dashboard updates with the check-in status.

## MVP Screens

### Public

- Landing page
- Choose portal screen
- Admin login
- Employee login

### Admin

- Admin dashboard
- Employee list
- Add employee
- Job site list
- Add job site
- Schedule list
- Today’s check-ins
- Check-in detail page

### Employee

- Employee dashboard
- Check-in confirmation screen
- Running late screen
- Check-in history

## MVP Statuses

- Awaiting Check-In
- Checked In
- Late
- Missed
- GPS Verified
- GPS Outside Range

## GPS Stamp Data

Each check-in should save:

- Employee ID
- Company ID
- Schedule ID
- Job site ID
- Timestamp
- Latitude
- Longitude
- GPS accuracy
- Distance from job site
- Device/user agent
- Status

## Not in MVP

These come later:

- Payroll integration
- Native App Store apps
- Face verification
- AI attendance coaching
- Advanced dispatch tools
- Fleet maintenance
