# Database Design

## Overview

Check-In Pilot uses one shared database for the admin web dashboard and the employee mobile experience.

## Core Tables

### companies

Stores each customer company.

Fields:

- id
- name
- timezone
- default_gps_radius_meters
- plan
- created_at

### users

Stores app users. Supabase Auth handles login, while this table stores app-specific profile details.

Fields:

- id
- auth_user_id
- company_id
- full_name
- email
- phone
- role: admin, manager, employee
- created_at

### employees

Stores employee-specific info.

Fields:

- id
- company_id
- user_id
- employee_number
- position
- active
- created_at

### job_sites

Stores warehouses, yards, offices, customer sites, or route start locations.

Fields:

- id
- company_id
- name
- address
- latitude
- longitude
- radius_meters
- active
- created_at

### schedules

Stores scheduled check-ins.

Fields:

- id
- company_id
- employee_id
- job_site_id
- check_in_date
- check_in_time
- grace_period_minutes
- status: scheduled, completed, missed, cancelled
- created_at

### check_ins

Stores the actual GPS/time stamp when an employee checks in.

Fields:

- id
- company_id
- employee_id
- schedule_id
- job_site_id
- checked_in_at
- latitude
- longitude
- gps_accuracy_meters
- distance_from_job_site_meters
- device_info
- ip_address
- status: on_time, late, outside_range
- note
- created_at

### late_reports

Stores running-late submissions.

Fields:

- id
- company_id
- employee_id
- schedule_id
- estimated_delay_minutes
- reason
- note
- created_at

### notifications

Stores notification history.

Fields:

- id
- company_id
- employee_id
- schedule_id
- notification_type
- channel: push, sms, email
- sent_at
- opened_at
- status

## Access Rules

- Admins can see all records in their company.
- Managers can see assigned company/team records.
- Employees can only see their own schedules, late reports, and check-ins.

## Important Security Note

GPS data is sensitive. Employees should only be tracked when they intentionally tap Check In or submit Running Late. MVP should not do always-on tracking.
