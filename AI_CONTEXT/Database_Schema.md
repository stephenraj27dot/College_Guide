# College Guide — Database Schema

## 1. Purpose

This document defines the initial PostgreSQL database architecture for College Guide.

The database must be:

- Relational
- Normalized where practical
- Secure
- Scalable
- Easy to query
- Easy to maintain
- Compatible with Supabase
- Protected by Row Level Security

Do not create database tables randomly during development.

All schema changes must follow this document or an explicitly updated version of it.

---

# 2. Database Design Principles

1. Use UUID primary keys.
2. Use foreign keys for relationships.
3. Use timestamps on important entities.
4. Use controlled status values.
5. Avoid unnecessary duplicate data.
6. Never store sensitive information in public tables.
7. Use database constraints wherever possible.
8. Add indexes based on actual query requirements.
9. Use soft deletion where business recovery is important.
10. Keep public college data separate from private student/lead data.

---

# 3. Entity Relationship Overview

```text
                         ┌──────────────┐
                         │  categories  │
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │   courses    │
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │ departments  │
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │   colleges   │
                         └──────┬───────┘
                                │
              ┌─────────────────┼─────────────────┐
              ▼                 ▼                 ▼
       college_courses   college_departments   college_media
                                │
                                ▼
                         ┌──────────────┐
                         │  locations   │
                         └──────────────┘


       ┌──────────────┐
       │   students   │
       └──────┬───────┘
              │
      ┌───────┼────────┬─────────────┐
      ▼       ▼        ▼             ▼
 shortlist  compare  activity      leads
                                   │
                                   ▼
                             lead_followups
                             lead_notes
                             assignments
````

---

# 4. ID Strategy

All primary keys should use UUID.

Example:

```text
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
```

Never expose sequential integer IDs unnecessarily.

---

# 5. Standard Timestamp Fields

Important tables should contain:

```text
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

Default:

```text
created_at = now()
updated_at = now()
```

`updated_at` should be automatically maintained where appropriate.

---

# 6. Profiles Table

Purpose:

Stores authenticated user profile information.

```text
profiles
---------
id
full_name
email
phone
avatar_url
role
is_active
created_at
updated_at
```

### Role

Allowed values:

```text
student
counsellor
content_manager
admin
super_admin
```

Do not allow arbitrary role strings.

---

# 7. Student Preferences

Purpose:

Stores student education preferences.

```text
student_preferences
-------------------
id
student_id
category_id
course_id
department_id
location_id
budget_min
budget_max
hostel_required
created_at
updated_at
```

Relationships:

```text
student_preferences.student_id
        ↓
profiles.id
```

---

# 8. Categories Table

Purpose:

Stores education categories.

Examples:

```text
Engineering
Medical
Dental
Nursing
Pharmacy
Law
Arts & Science
Agriculture
Veterinary
Physiotherapy
Polytechnic
```

Structure:

```text
categories
----------
id
name
slug
description
icon
display_order
is_active
created_at
updated_at
```

Constraints:

* `name` should be unique.
* `slug` should be unique.

---

# 9. Courses Table

Purpose:

Stores courses offered across categories.

```text
courses
-------
id
category_id
name
slug
short_description
description
is_active
created_at
updated_at
```

Relationship:

```text
category
   ↓
courses
```

---

# 10. Departments Table

Purpose:

Stores academic departments.

```text
departments
-----------
id
course_id
name
slug
description
is_active
created_at
updated_at
```

Examples:

```text
Computer Science
Information Technology
Electronics and Communication
Mechanical Engineering
Civil Engineering
```

The model must remain flexible enough to support different education categories.

---

# 11. Locations Table

Purpose:

Stores structured geographic information.

```text
locations
---------
id
name
slug
type
parent_id
latitude
longitude
is_active
created_at
updated_at
```

### Type

Possible values:

```text
state
district
city
locality
```

Hierarchy:

```text
State
 ↓
District
 ↓
City
 ↓
Locality
```

`parent_id` references `locations.id`.

---

# 12. Colleges Table

Purpose:

Stores core college information.

```text
colleges
--------
id
name
slug
short_name
description
logo_url
website_url
location_id
institution_type
affiliation
accreditation
established_year
is_verified
status
created_at
updated_at
```

### Status

```text
draft
published
unpublished
archived
```

Only `published` colleges should appear publicly.

---

# 13. College Courses

Many-to-many relationship between colleges and courses.

```text
college_courses
---------------
id
college_id
course_id
created_at
```

Constraints:

```text
UNIQUE(college_id, course_id)
```

---

# 14. College Departments

Many-to-many relationship between colleges and departments.

```text
college_departments
-------------------
id
college_id
department_id
created_at
```

Constraints:

```text
UNIQUE(college_id, department_id)
```

---

# 15. College Facilities

Purpose:

Stores available facilities.

```text
college_facilities
------------------
id
college_id
name
description
icon
is_verified
created_at
updated_at
```

Examples:

```text
Library
Laboratories
Sports
Hostel
Cafeteria
Transport
Wi-Fi
Auditorium
```

---

# 16. College Media

Purpose:

Stores college images and media.

```text
college_media
-------------
id
college_id
media_type
url
alt_text
caption
display_order
is_featured
created_at
```

Possible media types:

```text
logo
cover
gallery
facility
campus
```

Images must be stored using approved storage infrastructure.

---

# 17. College Admission Information

Where applicable, admission information may be stored separately.

```text
college_admission_info
----------------------
id
college_id
eligibility
admission_process
application_information
important_notes
verified_at
updated_at
```

Only verified information should be published.

---

# 18. College Fees

Fee information must not be stored casually because fees can change.

If implemented:

```text
college_fees
------------
id
college_id
course_id
fee_type
amount
currency
academic_year
is_verified
verified_at
created_at
updated_at
```

Examples:

```text
tuition
hostel
application
other
```

Never display outdated fees as current.

---

# 19. Shortlists

Purpose:

Stores colleges shortlisted by students.

```text
shortlists
----------
id
student_id
college_id
created_at
```

Constraint:

```text
UNIQUE(student_id, college_id)
```

---

# 20. Comparisons

Purpose:

Stores student college comparison selections.

```text
comparisons
-----------
id
student_id
college_id
created_at
```

A student may compare multiple colleges.

---

# 21. Student Activity

Purpose:

Stores meaningful student interactions.

```text
student_activity
----------------
id
student_id
event_type
college_id
course_id
department_id
metadata
created_at
```

Possible events:

```text
college_viewed
course_viewed
department_viewed
college_shortlisted
college_removed
college_compared
recommendation_viewed
enquiry_created
callback_requested
whatsapp_clicked
```

Do not store unnecessary sensitive information in `metadata`.

---

# 22. Leads Table

Purpose:

Stores business enquiries generated through the website.

```text
leads
-----
id
student_id
name
phone
email
category_id
course_id
department_id
college_id
location_id
source
status
lead_score
intent_level
assigned_to
created_at
updated_at
```

### Status

```text
new
contacted
counselling
college_shortlisted
application
admission_in_progress
admitted
not_interested
closed
```

### Intent Level

```text
low
medium
high
```

---

# 23. Lead Sources

Potential values:

```text
website
find_my_college
college_profile
callback
whatsapp
search
comparison
shortlist
other
```

Source values should be controlled rather than arbitrary.

---

# 24. Lead Notes

Purpose:

Stores private counsellor/admin notes.

```text
lead_notes
----------
id
lead_id
author_id
note
created_at
updated_at
```

These notes must NEVER be publicly accessible.

---

# 25. Lead Follow-ups

Purpose:

Stores planned follow-up actions.

```text
lead_followups
--------------
id
lead_id
assigned_to
scheduled_at
note
status
completed_at
created_at
updated_at
```

### Status

```text
pending
completed
cancelled
```

---

# 26. Lead Assignments

If multiple counsellors exist, assignments should be tracked.

```text
lead_assignments
----------------
id
lead_id
counsellor_id
assigned_by
assigned_at
unassigned_at
```

This provides assignment history.

---

# 27. Enquiries

A separate enquiry record may be maintained before or alongside lead creation.

```text
enquiries
---------
id
student_id
lead_id
name
phone
email
message
preferred_callback_time
source
created_at
```

The exact relationship between enquiry and lead must be finalised during implementation.

---

# 28. Awards

Purpose:

Stores client awards and recognitions.

```text
awards
------
id
title
organisation
year
description
image_url
display_order
is_published
created_at
updated_at
```

Only client-approved awards should be published.

---

# 29. Achievements

Purpose:

Stores client achievements and milestones.

```text
achievements
------------
id
title
description
year
image_url
display_order
is_published
created_at
updated_at
```

Never invent statistics or achievements.

---

# 30. Testimonials

Purpose:

Stores approved student/client testimonials.

```text
testimonials
------------
id
name
image_url
course
college
content
display_order
is_published
created_at
updated_at
```

Testimonials should only be published with appropriate permission.

---

# 31. Success Stories

Purpose:

Stores detailed student success stories.

```text
success_stories
---------------
id
student_name
image_url
course
college
admission_year
story
is_published
display_order
created_at
updated_at
```

---

# 32. Guides

Purpose:

Stores educational and admission-related content.

```text
guides
------
id
title
slug
excerpt
content
category_id
cover_image_url
author_id
status
published_at
created_at
updated_at
```

### Status

```text
draft
published
archived
```

---

# 33. SEO Metadata

For scalable SEO management:

```text
seo_metadata
------------
id
entity_type
entity_id
meta_title
meta_description
canonical_url
og_title
og_description
og_image
created_at
updated_at
```

Only use this abstraction if it genuinely simplifies the implementation.

Do not create unnecessary complexity for the MVP.

---

# 34. Analytics Events

Purpose:

Stores important product/business events.

```text
analytics_events
----------------
id
event_name
student_id
session_id
college_id
course_id
department_id
metadata
created_at
```

Examples:

```text
college_view
search
shortlist
comparison
enquiry
callback
whatsapp_click
recommendation_view
```

---

# 35. Sessions

If custom session analytics are required:

```text
sessions
--------
id
anonymous_id
student_id
started_at
ended_at
device_type
source
```

Avoid storing unnecessary device fingerprinting information.

---

# 36. Contact Requests

Callback/contact requests may be stored separately.

```text
contact_requests
----------------
id
student_id
name
phone
email
request_type
preferred_time
message
status
created_at
updated_at
```

### Request Type

```text
callback
admission_guidance
general_enquiry
```

---

# 37. Audit Logs

Purpose:

Tracks important administrative actions.

```text
audit_logs
----------
id
actor_id
action
entity_type
entity_id
old_data
new_data
created_at
```

Example:

```text
Admin changed lead status
NEW → CONTACTED
```

Do not store unnecessary sensitive information in audit logs.

---

# 38. Database Relationships

Core relationships:

```text
profiles
   │
   ├── student_preferences
   ├── shortlists
   ├── comparisons
   ├── student_activity
   └── leads
           │
           ├── lead_notes
           ├── lead_followups
           └── lead_assignments


categories
   │
   └── courses
          │
          └── departments


locations
   │
   └── colleges
          │
          ├── college_courses
          ├── college_departments
          ├── college_facilities
          ├── college_media
          ├── college_fees
          └── college_admission_info
```

---

# 39. Foreign Key Rules

Foreign keys should use appropriate delete behaviour.

General principle:

```text
Reference Data
     ↓
Restrict accidental deletion

Dependent User Data
     ↓
Use carefully designed cascade / soft delete
```

Never blindly apply `CASCADE` to sensitive business data.

---

# 40. Soft Delete

For important entities, prefer:

```text
deleted_at TIMESTAMPTZ NULL
```

where recovery/history matters.

Potential entities:

* Colleges
* Courses
* Departments
* Students
* Leads
* Content

Do not permanently delete business-critical records unless explicitly required.

---

# 41. Published Data Rule

Only records explicitly marked as published should appear on the public website.

Example:

```text
colleges.status = 'published'
```

The same principle applies to:

* Awards
* Testimonials
* Success stories
* Guides

---

# 42. Verification Rule

Information that may change or affect student decisions should support verification.

Examples:

* Fees
* Admission information
* Accreditation
* Placement information
* College contact-related information

Use:

```text
is_verified
verified_at
```

where appropriate.

---

# 43. Sensitive Data Classification

## Public

```text
Published college information
Published courses
Published departments
Published guides
Approved awards
Approved testimonials
```

## Private

```text
Student phone
Student email
Lead notes
Counsellor information
Lead score
Follow-up information
Internal analytics
```

Private data must never be exposed through public API responses.

---

# 44. Row Level Security

RLS must be enabled on all sensitive tables.

Example conceptual rules:

```text
Students
→ Can access their own profile

Students
→ Can access their own shortlist

Students
→ Can access their own enquiries

Counsellors
→ Can access authorised leads

Admins
→ Can manage authorised business data

Public
→ Can access published public content only
```

---

# 45. Public Database Access

The frontend must not receive unrestricted database access.

Use controlled queries/services.

Public queries should only return required fields.

Never expose:

```text
lead_score
lead_notes
assigned_to
student_phone
student_email
internal_metadata
```

to public users.

---

# 46. Indexing Strategy

Initial indexes should be considered for:

```text
colleges.slug
colleges.status
colleges.location_id

courses.slug
departments.slug

locations.slug
locations.parent_id

profiles.email
profiles.phone

leads.status
leads.assigned_to
leads.created_at

student_activity.student_id
student_activity.created_at

shortlists.student_id
comparisons.student_id
```

Actual indexes should be confirmed using real query patterns.

---

# 47. Unique Constraints

Important unique constraints:

```text
categories.slug
courses.slug
departments.slug
locations.slug
colleges.slug
profiles.email
```

Relationship tables:

```text
UNIQUE(student_id, college_id)
UNIQUE(college_id, course_id)
UNIQUE(college_id, department_id)
```

---

# 48. Slug Rules

Slugs must:

* Be lowercase
* Use hyphens
* Avoid unnecessary special characters
* Remain stable
* Be unique

Example:

```text
abc-engineering-college
computer-science-engineering
chennai
```

---

# 49. Data Validation

Validation must exist at multiple levels:

```text
Frontend
   ↓
Server
   ↓
Database
```

Examples:

* Valid phone number
* Valid email
* Required college name
* Valid status
* Valid foreign key
* Valid URL

---

# 50. Seed Data

Development should use seed data.

Seed data should include:

```text
Sample categories
Sample courses
Sample departments
Sample locations
Sample colleges
Sample student
Sample leads
Sample awards
Sample testimonials
```

All seed data must be clearly marked as development/demo data.

Never accidentally publish fake seed data to production.

---

# 51. Production Data Import

Tamil Nadu college data should NOT be manually inserted randomly.

The import process should be:

```text
Source Dataset
      ↓
Clean
      ↓
Validate
      ↓
Normalize
      ↓
Import
      ↓
Review
      ↓
Publish
```

Only verified data should become public.

---

# 52. Data Quality

College information must be checked for:

* Duplicate colleges
* Incorrect names
* Incorrect locations
* Duplicate courses
* Invalid departments
* Outdated information
* Missing required fields

Data quality is critical because students depend on the information.

---

# 53. Database Migration Rule

Every database modification must be represented as a migration.

Example:

```text
001_initial_schema
002_add_college_media
003_add_lead_scoring
004_add_guides
```

Do not manually change production tables without a tracked migration.

---

# 54. Database Naming Convention

Use:

* lowercase
* snake_case
* singular/plural consistently

Recommended:

```text
college
```

or

```text
colleges
```

Choose one convention and use it everywhere.

For this project, table names should use **plural snake_case**.

Example:

```text
college_courses
lead_followups
student_activity
```

---

# 55. Schema Evolution

The database will evolve.

When a requirement changes:

```text
Requirement
 ↓
Impact Analysis
 ↓
Schema Change
 ↓
Migration
 ↓
Testing
 ↓
Deployment
```

Never modify the database casually during vibe coding.

---

# 56. Database Security Principle

> **If a user should not see a piece of information, the database/API must prevent access to it.**

Do not depend only on hiding UI elements.

---

# 57. MVP Tables

The first implementation should prioritise:

```text
profiles
categories
courses
departments
locations
colleges
college_courses
college_departments
college_media
student_preferences
shortlists
comparisons
student_activity
leads
lead_notes
lead_followups
awards
testimonials
success_stories
guides
analytics_events
```

Additional tables should only be introduced when required.

---

# 58. Database Quality Gate

Before considering the database production-ready:

* Foreign keys verified
* Constraints verified
* RLS enabled
* Public/private access tested
* Indexes reviewed
* Migrations tracked
* Seed data separated
* Sensitive fields protected
* Duplicate data checked
* Backup strategy considered
* Production environment separated

---

# 59. Final Database Principle

> **The database is the foundation of College Guide. Keep it structured, secure, verifiable, and simple enough for the entire team and AI development workflow to understand.**

# College Guide — Database Schema

## 1. Purpose

This document defines the database architecture for College Guide.

The database must support:

- Students
- Leads
- Counsellors
- Admins
- Colleges
- Categories
- Courses
- Departments
- Locations
- College facilities
- College images
- Shortlists
- Comparisons
- Recommendations
- Enquiries
- Follow-ups
- Activities
- Awards
- Testimonials
- Success stories
- Guides
- FAQs
- Analytics
- Audit logs

The schema must be scalable, secure and maintainable.

---

# 2. Recommended Database

Primary database:

```text
PostgreSQL
````

Recommended platform:

```text
Supabase
```

Supabase can provide:

* PostgreSQL
* Authentication
* Storage
* Row Level Security
* Realtime capabilities
* API access

---

# 3. Core Entity Relationship

```text
Users
  │
  ├── Students
  │
  ├── Counsellors
  │
  └── Admins
        │
        ↓
      Leads
        │
        ├── Activities
        ├── Follow-ups
        └── Notes

Categories
    ↓
Courses
    ↓
Departments

Locations
    ↓
Colleges
    ↓
College Courses / Departments
```

---

# 4. User Table

Table:

```text
users
```

Fields:

```text
id UUID PRIMARY KEY
email TEXT
phone TEXT
role TEXT
is_active BOOLEAN
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

Roles:

```text
student
counsellor
admin
super_admin
content_manager
data_manager
```

Do not store plaintext passwords.

Authentication should be handled by the authentication provider.

---

# 5. Student Profile

Table:

```text
student_profiles
```

Fields:

```text
id UUID PRIMARY KEY
user_id UUID NULL
full_name TEXT
phone TEXT
email TEXT
preferred_location_id UUID NULL
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

A guest student may not have a `user_id`.

---

# 6. Counsellor Profile

Table:

```text
counsellor_profiles
```

Fields:

```text
id UUID PRIMARY KEY
user_id UUID NOT NULL
full_name TEXT
phone TEXT
email TEXT
is_active BOOLEAN
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

# 7. Categories

Table:

```text
categories
```

Example records:

```text
Engineering
Medical
Nursing
Law
Arts & Science
Pharmacy
Architecture
Agriculture
Management
```

Fields:

```text
id UUID PRIMARY KEY
name TEXT
slug TEXT UNIQUE
description TEXT
icon TEXT NULL
is_active BOOLEAN
display_order INTEGER
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

# 8. Courses

Table:

```text
courses
```

Fields:

```text
id UUID PRIMARY KEY
category_id UUID NOT NULL
name TEXT
slug TEXT UNIQUE
description TEXT
is_active BOOLEAN
display_order INTEGER
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

Relationship:

```text
categories
    1
    │
    └──────< courses
```

---

# 9. Departments

Table:

```text
departments
```

Fields:

```text
id UUID PRIMARY KEY
course_id UUID NULL
name TEXT
short_name TEXT NULL
slug TEXT UNIQUE
description TEXT
is_active BOOLEAN
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

Examples:

```text
Computer Science Engineering
Information Technology
Electronics and Communication Engineering
Mechanical Engineering
Civil Engineering
```

---

# 10. Locations

Use normalized location tables.

## States

```text
states
```

Fields:

```text
id UUID PRIMARY KEY
name TEXT
slug TEXT UNIQUE
```

---

## Districts

```text
districts
```

Fields:

```text
id UUID PRIMARY KEY
state_id UUID NOT NULL
name TEXT
slug TEXT
```

Relationship:

```text
State
  ↓
District
```

---

## Cities / Areas

```text
locations
```

Fields:

```text
id UUID PRIMARY KEY
district_id UUID NOT NULL
name TEXT
slug TEXT
latitude DECIMAL NULL
longitude DECIMAL NULL
```

---

# 11. Colleges

Table:

```text
colleges
```

Fields:

```text
id UUID PRIMARY KEY
name TEXT
slug TEXT UNIQUE
short_name TEXT NULL
description TEXT
established_year INTEGER NULL
location_id UUID NOT NULL
address TEXT
website_url TEXT NULL
logo_url TEXT NULL
cover_image_url TEXT NULL
latitude DECIMAL NULL
longitude DECIMAL NULL
verification_status TEXT
publication_status TEXT
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

# 12. College Verification Status

Allowed values:

```text
draft
pending_verification
verified
rejected
```

Only verified records should be publicly marked as verified.

---

# 13. College Publication Status

Allowed:

```text
draft
published
archived
```

A college should be publicly visible only when:

```text
verification_status = verified
```

and:

```text
publication_status = published
```

---

# 14. College Categories

A college may belong to one or multiple categories.

Table:

```text
college_categories
```

Fields:

```text
college_id UUID
category_id UUID
PRIMARY KEY (college_id, category_id)
```

Relationship:

```text
College
  │
  ├── Engineering
  ├── Arts & Science
  └── Management
```

---

# 15. College Courses

A college may offer many courses.

Table:

```text
college_courses
```

Fields:

```text
id UUID PRIMARY KEY
college_id UUID NOT NULL
course_id UUID NOT NULL
duration_years DECIMAL NULL
description TEXT NULL
is_active BOOLEAN
```

Unique relationship:

```text
(college_id, course_id)
```

---

# 16. College Departments

Table:

```text
college_departments
```

Fields:

```text
id UUID PRIMARY KEY
college_id UUID NOT NULL
department_id UUID NOT NULL
description TEXT NULL
is_active BOOLEAN
```

---

# 17. College Facilities

Table:

```text
college_facilities
```

Fields:

```text
id UUID PRIMARY KEY
college_id UUID NOT NULL
name TEXT
description TEXT NULL
icon TEXT NULL
display_order INTEGER
```

Examples:

```text
Hostel
Library
Laboratories
Sports
Transport
Cafeteria
Gym
Wi-Fi
```

---

# 18. College Images

Table:

```text
college_images
```

Fields:

```text
id UUID PRIMARY KEY
college_id UUID NOT NULL
image_url TEXT
alt_text TEXT NULL
caption TEXT NULL
display_order INTEGER
is_featured BOOLEAN
created_at TIMESTAMPTZ
```

Images should preferably be stored using Supabase Storage or another approved object storage provider.

---

# 19. College Highlights

Table:

```text
college_highlights
```

Fields:

```text
id UUID PRIMARY KEY
college_id UUID NOT NULL
title TEXT
description TEXT
display_order INTEGER
```

---

# 20. Student Shortlists

Table:

```text
student_shortlists
```

Fields:

```text
id UUID PRIMARY KEY
student_id UUID NULL
session_id TEXT NULL
college_id UUID NOT NULL
created_at TIMESTAMPTZ
```

For guest students, `session_id` can be used.

For authenticated students, use `student_id`.

---

# 21. Shortlist Constraint

Prevent duplicate shortlist entries.

Recommended unique logic:

```text
student_id + college_id
```

or:

```text
session_id + college_id
```

depending on authentication state.

---

# 22. Comparisons

Table:

```text
student_comparisons
```

Fields:

```text
id UUID PRIMARY KEY
student_id UUID NULL
session_id TEXT NULL
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

# 23. Comparison Colleges

Table:

```text
comparison_colleges
```

Fields:

```text
comparison_id UUID
college_id UUID
display_order INTEGER
PRIMARY KEY (comparison_id, college_id)
```

---

# 24. Leads

Table:

```text
leads
```

Fields:

```text
id UUID PRIMARY KEY
lead_reference TEXT UNIQUE
student_id UUID NULL
name TEXT
phone TEXT
email TEXT NULL
category_id UUID NULL
course_id UUID NULL
department_id UUID NULL
preferred_location_id UUID NULL
interested_college_id UUID NULL
source TEXT
status TEXT
priority TEXT
assigned_counsellor_id UUID NULL
next_follow_up_at TIMESTAMPTZ NULL
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

# 25. Lead Status

Use:

```text
new
contacted
interested
counselling
follow_up
application
converted
not_interested
unreachable
closed
```

---

# 26. Lead Priority

Use:

```text
low
medium
high
urgent
```

---

# 27. Lead Activities

Table:

```text
lead_activities
```

Fields:

```text
id UUID PRIMARY KEY
lead_id UUID NOT NULL
activity_type TEXT
description TEXT NULL
performed_by UUID NULL
metadata JSONB NULL
created_at TIMESTAMPTZ
```

---

# 28. Lead Notes

Table:

```text
lead_notes
```

Fields:

```text
id UUID PRIMARY KEY
lead_id UUID NOT NULL
author_id UUID NOT NULL
note TEXT
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

These notes are private.

---

# 29. Follow-Ups

Table:

```text
follow_ups
```

Fields:

```text
id UUID PRIMARY KEY
lead_id UUID NOT NULL
assigned_to UUID NOT NULL
due_at TIMESTAMPTZ NOT NULL
status TEXT
priority TEXT
note TEXT NULL
completed_at TIMESTAMPTZ NULL
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

# 30. Follow-Up Status

Allowed:

```text
pending
completed
rescheduled
cancelled
```

Overdue can be calculated from:

```text
status = pending
AND due_at < current_time
```

or represented separately if required.

---

# 31. Awards

Table:

```text
awards
```

Fields:

```text
id UUID PRIMARY KEY
title TEXT
organization TEXT NULL
year INTEGER NULL
description TEXT NULL
image_url TEXT NULL
display_order INTEGER
is_published BOOLEAN
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

Only verified client-provided awards should be published.

---

# 32. Achievements

Table:

```text
achievements
```

Fields:

```text
id UUID PRIMARY KEY
title TEXT
description TEXT
image_url TEXT NULL
year INTEGER NULL
display_order INTEGER
is_published BOOLEAN
created_at TIMESTAMPTZ
```

---

# 33. Testimonials

Table:

```text
testimonials
```

Fields:

```text
id UUID PRIMARY KEY
student_name TEXT
content TEXT
course TEXT NULL
college TEXT NULL
image_url TEXT NULL
is_published BOOLEAN
display_order INTEGER
created_at TIMESTAMPTZ
```

Testimonials must be genuine and approved.

---

# 34. Success Stories

Table:

```text
success_stories
```

Fields:

```text
id UUID PRIMARY KEY
title TEXT
student_name TEXT NULL
college_id UUID NULL
course_id UUID NULL
description TEXT
image_url TEXT NULL
is_published BOOLEAN
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

Do not publish student-identifying information without appropriate permission.

---

# 35. Guides

Table:

```text
guides
```

Fields:

```text
id UUID PRIMARY KEY
title TEXT
slug TEXT UNIQUE
excerpt TEXT NULL
content TEXT
featured_image_url TEXT NULL
author_id UUID NULL
status TEXT
published_at TIMESTAMPTZ NULL
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

# 36. Guide Status

```text
draft
review
published
archived
```

---

# 37. FAQs

Table:

```text
faqs
```

Fields:

```text
id UUID PRIMARY KEY
question TEXT
answer TEXT
category_id UUID NULL
display_order INTEGER
is_published BOOLEAN
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

# 38. Website Pages

For CMS-managed pages:

```text
pages
```

Fields:

```text
id UUID PRIMARY KEY
title TEXT
slug TEXT UNIQUE
content JSONB
status TEXT
seo_title TEXT NULL
seo_description TEXT NULL
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

# 39. SEO Metadata

For major entities, support:

```text
seo_title
seo_description
slug
```

Do not duplicate SEO fields unnecessarily if a centralized metadata architecture is used.

---

# 40. Contact / Enquiry Records

If enquiries need separate tracking:

```text
enquiries
```

Fields:

```text
id UUID PRIMARY KEY
lead_id UUID NULL
name TEXT
phone TEXT
email TEXT NULL
message TEXT NULL
source TEXT
created_at TIMESTAMPTZ
```

If every enquiry is always a lead, this table may be unnecessary.

The implementation team must avoid duplicate data models.

---

# 41. Analytics Events

Table:

```text
analytics_events
```

Fields:

```text
id UUID PRIMARY KEY
event_name TEXT
session_id TEXT NULL
student_id UUID NULL
college_id UUID NULL
course_id UUID NULL
location_id UUID NULL
metadata JSONB NULL
created_at TIMESTAMPTZ
```

---

# 42. Recommended Analytics Events

```text
page_view
search
filter_applied
college_view
course_view
shortlist
compare
recommendation_start
recommendation_complete
guidance_click
callback_click
whatsapp_click
enquiry_submit
```

Do not store unnecessary personal data in analytics metadata.

---

# 43. Audit Logs

Table:

```text
audit_logs
```

Fields:

```text
id UUID PRIMARY KEY
user_id UUID NULL
action TEXT
entity_type TEXT
entity_id UUID NULL
old_values JSONB NULL
new_values JSONB NULL
created_at TIMESTAMPTZ
```

---

# 44. Media Assets

Table:

```text
media_assets
```

Fields:

```text
id UUID PRIMARY KEY
file_name TEXT
storage_path TEXT
mime_type TEXT
file_size INTEGER
alt_text TEXT NULL
uploaded_by UUID NULL
created_at TIMESTAMPTZ
```

---

# 45. Relationships Overview

```text
categories
    │
    └──< courses
             │
             └──< departments

states
    │
    └──< districts
             │
             └──< locations
                      │
                      └──< colleges

colleges
    ├──< college_categories
    ├──< college_courses
    ├──< college_departments
    ├──< college_facilities
    ├──< college_images
    └──< college_highlights

students
    ├──< student_shortlists
    └──< student_comparisons

leads
    ├──< lead_activities
    ├──< lead_notes
    └──< follow_ups
```

---

# 46. Foreign Keys

Use foreign keys wherever relationships require referential integrity.

Example:

```text
courses.category_id
→ categories.id
```

```text
colleges.location_id
→ locations.id
```

```text
leads.course_id
→ courses.id
```

---

# 47. Delete Strategy

Avoid cascading deletion for important historical records unless explicitly required.

Prefer:

```text
is_active
archived
deleted_at
```

where appropriate.

---

# 48. Soft Delete

Important entities may use:

```text
deleted_at TIMESTAMPTZ NULL
```

instead of permanent deletion.

Do not add soft-delete fields to every table automatically.

Use them where business history matters.

---

# 49. Timestamps

Most business tables should contain:

```text
created_at
updated_at
```

Use database-generated timestamps whenever possible.

---

# 50. UUIDs

Use UUIDs for internal identifiers.

Do not expose sequential database IDs publicly when avoidable.

---

# 51. Slugs

Public entities should have unique slugs.

Examples:

```text
engineering-colleges-in-chennai
computer-science-engineering
best-colleges-in-trichy
```

Slugs must be unique and URL-safe.

---

# 52. Database Normalization

Avoid storing repeated values such as:

```text
"Chennai"
"Chennai"
"Chennai"
```

across many relational tables when the value represents the same entity.

Use:

```text
location_id
```

instead.

---

# 53. JSONB Usage

Use JSONB only where flexible structures are genuinely useful.

Good examples:

```text
analytics metadata
CMS content
audit old/new values
```

Do not use JSONB for core relational data that needs filtering and relationships.

---

# 54. Search

College search may require:

```text
college name
course
department
location
category
```

PostgreSQL search capabilities can be used initially.

A dedicated search engine should only be introduced if scale requires it.

---

# 55. Indexing

Create indexes for frequently queried fields.

Examples:

```text
colleges.slug
colleges.location_id
colleges.publication_status
courses.slug
departments.slug
leads.phone
leads.status
leads.assigned_counsellor_id
leads.created_at
follow_ups.due_at
```

Indexes must be reviewed based on actual queries.

---

# 56. Row Level Security

If Supabase is used:

```text
RLS = ENABLED
```

for protected tables.

Especially:

```text
students
leads
lead_notes
lead_activities
follow_ups
audit_logs
```

---

# 57. Public Access

Public users should only access:

```text
Published Colleges
Published Courses
Published Departments
Published Locations
Published Guides
Published FAQs
Published Awards
Published Testimonials
```

---

# 58. Student Access

Authenticated students may access only their own:

```text
Profile
Shortlists
Comparisons
```

They must never access another student's data.

---

# 59. Counsellor Access

Counsellors should generally access:

```text
Assigned Leads
Assigned Follow-ups
Relevant Student Information
```

unless admin permissions explicitly expand access.

---

# 60. Admin Access

Admins can access business data according to their role.

Super Admin has the highest permission level.

---

# 61. Security Principle

Never solve authorization only at the UI level.

Incorrect:

```text
Hide Admin Button
```

Correct:

```text
Frontend Permission
+
Backend Authorization
+
Database RLS where applicable
```

---

# 62. Public College Contact Restriction

The database may contain internal college contact information if required for client operations.

However:

```text
Public Student API
```

must NOT return private college contact information.

The student should contact:

```text
College Guide
```

instead.

---

# 63. Sensitive Data

Protect:

```text
Student Phone
Student Email
Counsellor Notes
Lead Information
Internal College Contacts
Admin Data
```

---

# 64. Database Environment Separation

Use separate environments:

```text
Development
Staging
Production
```

Never use production student data for local development unnecessarily.

---

# 65. Migration Strategy

All schema changes should be represented as migrations.

Do not manually modify production tables without tracking the change.

Example:

```text
001_initial_schema
002_add_leads
003_add_followups
004_add_college_media
```

---

# 66. Seed Data

Development environment may contain safe sample data:

```text
Sample Colleges
Sample Courses
Sample Locations
Sample Leads
Sample Counsellors
```

Never use real student personal information as seed data.

---

# 67. Database Backup

Production database must have reliable backups.

Backup and recovery settings should be configured before launch.

---

# 68. Data Integrity

The database must prevent:

```text
Invalid foreign keys
Duplicate critical relationships
Invalid statuses
Invalid role values
```

Use:

```text
Foreign Keys
Unique Constraints
Check Constraints
Enums / Controlled Values
```

where appropriate.

---

# 69. Transaction Safety

Operations involving multiple tables should use transactions.

Example:

```text
Create Lead
    ↓
Create Activity
    ↓
Assign Counsellor
```

If a critical operation fails, avoid leaving partial data.

---

# 70. Lead Creation Example

```text
Student submits form
        ↓
Validate request
        ↓
Find/Create student profile
        ↓
Check duplicate lead
        ↓
Create lead
        ↓
Create activity
        ↓
Assign counsellor if applicable
        ↓
Return success
```

---

# 71. College Creation Example

```text
Admin creates college
        ↓
Save basic details
        ↓
Assign location
        ↓
Map categories
        ↓
Map courses
        ↓
Map departments
        ↓
Upload images
        ↓
Verification
        ↓
Publish
```

---

# 72. Schema Principle

The database should support the business without becoming unnecessarily complicated.

Start with a clean relational core.

Add advanced tables only when the feature is actually required.

---

# 73. MVP Core Tables

For the first production version, prioritize:

```text
users
student_profiles
counsellor_profiles

categories
courses
departments

states
districts
locations

colleges
college_categories
college_courses
college_departments
college_facilities
college_images

leads
lead_activities
lead_notes
follow_ups

awards
achievements
testimonials
success_stories
guides
faqs

analytics_events
audit_logs
```

---

# 74. Future Tables

Potential future additions:

```text
notifications
lead_scores
campaigns
campaign_leads
admission_applications
payments
subscriptions
chat_messages
recommendation_results
```

Do not implement these unless the product requirements justify them.

---

# 75. Database Architecture Principle

```text
                    PostgreSQL
                         │
       ┌─────────────────┼─────────────────┐
       ↓                 ↓                 ↓
   College Data       Student Data       CRM
       │                 │                 │
       ↓                 ↓                 ↓
  Discovery         Shortlist         Leads
  Search            Compare           Follow-ups
  Courses           Preferences       Counselling
       │                 │                 │
       └─────────────────┼─────────────────┘
                         ↓
                     Analytics
```

---

# 76. Final Database Principle

> **The database must preserve the relationship between what a student is looking for, which colleges and courses they explore, how they interact with College Guide, and how the counselling team follows that student through the admission journey.**

---

# 77. Implementation Rule

Before writing application code:

1. Finalize entities.
2. Finalize relationships.
3. Finalize required fields.
4. Finalize role permissions.
5. Create migrations.
6. Enable security policies.
7. Seed development data.
8. Test CRUD operations.
9. Test authorization.
10. Only then build the production UI around the schema.

The database schema must be treated as the foundation of the entire College Guide application.

## FILE #25 — `AI_CONTEXT/DATABASE_SCHEMA.md`

````md
# College Guide — Database Schema

## 1. Purpose

This document defines the core database architecture for College Guide.

The database must support:

- Students
- Leads
- Colleges
- Categories
- Courses
- Departments
- Locations
- Counsellors
- Follow-ups
- Shortlists
- Comparisons
- Awards
- Testimonials
- Guides
- Analytics
- Admin users

Database:

PostgreSQL

Recommended platform:

Supabase

---

# 2. Core Architecture

```text
Users
  │
  ├── Students
  ├── Counsellors
  └── Admins
        │
        ↓
      Leads
        │
        ├── Follow-ups
        ├── Notes
        ├── Activities
        └── Assignments

Colleges
  │
  ├── Categories
  ├── Courses
  ├── Departments
  ├── Locations
  ├── Facilities
  └── Media
````

---

# 3. Database Principles

Follow these rules:

* Use normalized relational data where appropriate.
* Use UUID primary keys.
* Use timestamps.
* Add foreign-key relationships.
* Avoid duplicate data.
* Use indexes for frequently searched fields.
* Use database constraints.
* Use Row Level Security.
* Never expose private CRM data publicly.

---

# 4. Primary ID Strategy

Use UUIDs:

```sql
id uuid primary key default gen_random_uuid()
```

Do not expose sequential database IDs as the primary public identifier.

---

# 5. Common Timestamp Fields

Most tables should use:

```text
created_at
updated_at
```

Example:

```sql
created_at timestamptz default now()
updated_at timestamptz default now()
```

---

# 6. Profiles Table

Stores authenticated user profile information.

```text
profiles
```

Fields:

```text
id
full_name
phone
email
avatar_url
role
status
created_at
updated_at
```

Relationship:

```text
auth.users
     ↓
profiles
```

---

# 7. User Roles

Recommended roles:

```text
student
counsellor
admin
super_admin
content_manager
data_manager
```

Role permissions must be enforced server-side and through RLS where applicable.

---

# 8. Student Profiles

```text
student_profiles
```

Fields:

```text
id
profile_id
preferred_category
preferred_course
preferred_location
created_at
updated_at
```

Do not collect unnecessary personal information.

---

# 9. Leads Table

This is one of the most important tables.

```text
leads
```

Fields:

```text
id
lead_reference
name
phone
email
category_id
course_id
preferred_location_id
source
status
priority
assigned_counsellor_id
message
created_at
updated_at
```

---

# 10. Lead Reference

Each lead can have a human-readable reference.

Example:

```text
CG-2026-000001
```

This is for staff communication.

The UUID remains the database primary key.

---

# 11. Lead Status

Recommended initial statuses:

```text
new
contacted
follow_up
interested
shortlisted
application_support
converted
not_interested
lost
```

Do not hardcode these throughout the frontend.

---

# 12. Lead Priority

```text
low
medium
high
urgent
```

---

# 13. Lead Source

Possible sources:

```text
website
whatsapp
organic_search
direct
referral
social_media
campaign
other
```

The actual source list should remain configurable.

---

# 14. Lead Activities

Track important lead actions.

```text
lead_activities
```

Fields:

```text
id
lead_id
activity_type
description
performed_by
created_at
```

Examples:

```text
lead_created
call
whatsapp
status_change
assignment
note_added
follow_up_created
follow_up_completed
```

---

# 15. Lead Notes

```text
lead_notes
```

Fields:

```text
id
lead_id
author_id
note
created_at
updated_at
```

Notes are private CRM information.

Students must never access them.

---

# 16. Lead Assignments

If assignment history is required:

```text
lead_assignments
```

Fields:

```text
id
lead_id
counsellor_id
assigned_by
assigned_at
unassigned_at
```

This preserves assignment history.

---

# 17. Follow-Ups

```text
follow_ups
```

Fields:

```text
id
lead_id
assigned_to
scheduled_at
status
notes
completed_at
created_at
updated_at
```

Statuses:

```text
pending
completed
cancelled
rescheduled
```

---

# 18. Colleges Table

Core college entity:

```text
colleges
```

Fields:

```text
id
name
slug
short_name
description
established_year
logo_url
featured_image_url
website_url
verification_status
status
created_at
updated_at
```

---

# 19. College Privacy Rule

Even if a college has:

```text
website_url
phone
email
```

do not expose direct contact details to students if this conflicts with the client's business model.

College Guide remains the primary student contact point.

---

# 20. College Status

Recommended:

```text
draft
review
approved
published
archived
```

Only published colleges should normally appear publicly.

---

# 21. College Verification

Recommended values:

```text
unverified
verified
```

Verification should be controlled by authorized staff.

---

# 22. Categories Table

```text
categories
```

Fields:

```text
id
name
slug
description
icon
image_url
sort_order
is_active
created_at
updated_at
```

Examples:

```text
Engineering
Medical
Nursing
Law
Arts & Science
Pharmacy
Architecture
Agriculture
Management
```

---

# 23. Courses Table

```text
courses
```

Fields:

```text
id
name
slug
description
category_id
duration
is_active
created_at
updated_at
```

A course belongs to a category.

---

# 24. Departments Table

```text
departments
```

Fields:

```text
id
name
slug
description
created_at
updated_at
```

Examples:

```text
Computer Science
Information Technology
Mechanical Engineering
Civil Engineering
Electronics and Communication
```

---

# 25. College Courses

Many colleges can offer the same course.

Use a junction table:

```text
college_courses
```

Fields:

```text
id
college_id
course_id
department_id
created_at
```

Relationship:

```text
College
  ↓
College Courses
  ↓
Course
```

---

# 26. College Departments

If departments require independent college-level relationships:

```text
college_departments
```

Fields:

```text
id
college_id
department_id
description
created_at
updated_at
```

Avoid storing the same department name repeatedly in the college table.

---

# 27. Locations Table

Use a hierarchical location structure.

```text
locations
```

Fields:

```text
id
name
slug
type
parent_id
latitude
longitude
created_at
updated_at
```

Types:

```text
state
district
city
area
```

---

# 28. Location Hierarchy

Example:

```text
Tamil Nadu
    ↓
Chengalpattu District
    ↓
Tambaram
```

Another:

```text
Tamil Nadu
    ↓
Tiruchirappalli District
    ↓
Trichy
```

---

# 29. College Locations

A college should reference its location.

Example:

```text
colleges.location_id
```

If multiple geographic relationships are required later, use a separate junction table.

---

# 30. Facilities

```text
facilities
```

Fields:

```text
id
name
slug
description
icon
created_at
updated_at
```

Examples:

```text
Hostel
Library
Laboratory
Sports
Cafeteria
Transport
Gym
```

---

# 31. College Facilities

Many colleges can have many facilities.

Use:

```text
college_facilities
```

Fields:

```text
id
college_id
facility_id
created_at
```

---

# 32. College Media

```text
college_media
```

Fields:

```text
id
college_id
media_type
url
alt_text
caption
sort_order
created_at
```

Media types:

```text
logo
campus
facility
event
gallery
```

---

# 33. Awards

Client achievements must be stored separately.

```text
awards
```

Fields:

```text
id
title
organization
description
award_year
image_url
display_order
status
created_at
updated_at
```

Only approved awards should be publicly displayed.

---

# 34. Achievements

```text
achievements
```

Fields:

```text
id
title
description
achievement_date
image_url
display_order
status
created_at
updated_at
```

---

# 35. Testimonials

```text
testimonials
```

Fields:

```text
id
student_name
course
college_name
content
image_url
status
display_order
created_at
updated_at
```

Only genuine and approved testimonials should be published.

---

# 36. Success Stories

```text
success_stories
```

Fields:

```text
id
title
student_name
story
college_name
course
image_url
status
created_at
updated_at
```

Do not expose sensitive student information.

---

# 37. Guides

```text
guides
```

Fields:

```text
id
title
slug
excerpt
content
featured_image_url
author_id
status
published_at
created_at
updated_at
```

---

# 38. Guide Categories

Optional:

```text
guide_categories
```

Fields:

```text
id
name
slug
description
```

---

# 39. Guide Category Junction

If a guide can belong to multiple categories:

```text
guide_category_relations
```

Fields:

```text
id
guide_id
category_id
```

---

# 40. FAQs

```text
faqs
```

Fields:

```text
id
question
answer
category
display_order
status
created_at
updated_at
```

---

# 41. Student Shortlists

Students can save colleges.

```text
shortlists
```

Fields:

```text
id
student_id
college_id
created_at
```

Constraint:

```text
unique(student_id, college_id)
```

This prevents duplicate shortlist entries.

---

# 42. Guest Shortlists

If guest shortlist functionality is required:

```text
guest_shortlists
```

Fields:

```text
id
session_id
college_id
created_at
```

Do not use unnecessary personal data to identify guests.

---

# 43. Comparison Sessions

```text
comparison_sessions
```

Fields:

```text
id
student_id
session_id
created_at
updated_at
```

---

# 44. Comparison Colleges

```text
comparison_colleges
```

Fields:

```text
id
comparison_session_id
college_id
created_at
```

Maximum recommended:

```text
4 colleges
```

---

# 45. Analytics Events

```text
analytics_events
```

Fields:

```text
id
event_name
session_id
user_id
college_id
course_id
location_id
metadata
created_at
```

Possible events:

```text
page_view
college_view
course_view
search
shortlist
compare
guidance_click
whatsapp_click
enquiry_submit
```

---

# 46. Analytics Privacy

Do not store unnecessary:

```text
Passwords
Authentication Tokens
Private Messages
Private CRM Notes
Sensitive Personal Information
```

---

# 47. Contact Requests

If separate contact requests are required:

```text
contact_requests
```

Fields:

```text
id
name
phone
email
message
source
created_at
```

If the request represents a lead, prefer linking it to the lead system instead of creating disconnected records.

---

# 48. WhatsApp Events

WhatsApp clicks should preferably be tracked through analytics events.

Example:

```text
event_name = whatsapp_click
```

Optional metadata:

```text
page
college_id
course_id
location_id
```

---

# 49. SEO Metadata

For flexible SEO management:

```text
seo_metadata
```

Fields:

```text
id
entity_type
entity_id
seo_title
meta_description
canonical_url
og_image_url
robots_index
created_at
updated_at
```

---

# 50. Media Assets

Global media:

```text
media_assets
```

Fields:

```text
id
file_name
storage_path
media_type
alt_text
uploaded_by
created_at
```

Use Supabase Storage for actual files.

---

# 51. Audit Logs

Important admin actions should be tracked.

```text
audit_logs
```

Fields:

```text
id
user_id
action
entity_type
entity_id
metadata
created_at
```

Examples:

```text
college_created
college_updated
college_published
college_archived
lead_updated
lead_assigned
award_published
```

---

# 52. Database Relationships

Main relationships:

```text
Category
   ↓
Course
   ↓
College Course
   ↓
College
   ↓
Location
```

Lead system:

```text
Student
   ↓
Lead
   ├── Activities
   ├── Notes
   ├── Follow-ups
   └── Assignments
```

Content:

```text
Awards
Testimonials
Success Stories
Guides
FAQs
```

---

# 53. Simplified ER Diagram

```text
┌──────────────┐
│  Categories  │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   Courses    │
└──────┬───────┘
       │
       ↓
┌──────────────────┐
│ College Courses  │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│     Colleges     │
└───────┬─────┬────┘
        │     │
        ↓     ↓
   Locations Facilities
```

Lead system:

```text
┌──────────────┐
│   Student    │
└──────┬───────┘
       ↓
┌──────────────┐
│     Lead     │
└──┬────┬───┬──┘
   │    │   │
   ↓    ↓   ↓
 Notes Activities Follow-ups
```

---

# 54. Indexing Strategy

Create indexes for commonly queried fields.

Examples:

```text
colleges.slug
colleges.status
colleges.location_id
courses.slug
courses.category_id
locations.slug
leads.phone
leads.status
leads.assigned_counsellor_id
follow_ups.scheduled_at
```

Do not create indexes blindly on every column.

---

# 55. Unique Constraints

Recommended:

```text
colleges.slug
courses.slug
departments.slug
locations.slug
categories.slug
lead_reference
```

Also:

```text
unique(student_id, college_id)
```

for shortlists.

---

# 56. Foreign Keys

Use foreign keys for relationships.

Example:

```text
courses.category_id
college_courses.college_id
college_courses.course_id
leads.course_id
leads.category_id
leads.assigned_counsellor_id
```

Use appropriate delete behavior.

---

# 57. Delete Strategy

Prefer:

```text
soft delete / archive
```

for important business records.

Especially:

```text
Colleges
Leads
Awards
Testimonials
Guides
```

Do not permanently delete critical CRM data without an explicit administrative process.

---

# 58. Row Level Security

Supabase RLS must be enabled for sensitive tables.

Sensitive examples:

```text
leads
lead_notes
lead_activities
follow_ups
audit_logs
student_profiles
```

---

# 59. Public Database Access

Public users should only receive:

```text
Published College Data
Published Course Data
Published Location Data
Published Content
Approved Awards
Approved Testimonials
```

Never expose raw tables directly if doing so bypasses business rules.

---

# 60. Counsellor Access

Counsellors should only access:

```text
Assigned Leads
Authorized Lead Activities
Authorized Follow-ups
```

They should not automatically have access to every lead.

---

# 61. Admin Access

Admins may manage:

```text
Colleges
Courses
Locations
Leads
Content
Analytics
```

depending on their assigned permissions.

---

# 62. Super Admin

Super admin controls:

```text
Users
Roles
Permissions
System Settings
Critical Data
```

This role must be extremely restricted.

---

# 63. Content Manager

Content managers may manage:

```text
Guides
FAQs
Testimonials
Awards
Achievements
Success Stories
```

They should not automatically receive CRM access.

---

# 64. Data Manager

Data managers may manage:

```text
Colleges
Courses
Departments
Locations
Facilities
College Media
```

without automatically receiving full CRM permissions.

---

# 65. Database Security

Never expose:

```text
Service Role Key
Database Password
Private API Keys
```

to frontend code.

Use server-side operations where privileged access is required.

---

# 66. Data Validation

Database constraints should complement frontend validation.

Never rely only on:

```text
Frontend validation
```

Always validate on:

```text
Frontend
+
Server
+
Database constraints where appropriate
```

---

# 67. Data Quality

College data must be:

```text
Accurate
Consistent
Verified
Updated
Searchable
```

Avoid duplicate colleges.

---

# 68. Duplicate College Detection

Before creating a college:

```text
Name
+
Location
+
Relevant identifying information
```

should be checked for possible duplicates.

Do not automatically merge records without admin confirmation.

---

# 69. Database Migration

All schema changes must be tracked through migrations.

Never make undocumented production schema changes manually.

Migration examples:

```text
001_initial_schema
002_add_college_media
003_add_lead_followups
004_add_analytics
```

---

# 70. Seed Data

Development may use seed data.

Example:

```text
Engineering
Medical
Nursing
Law
Arts & Science
```

Seed data must be clearly separated from real production data.

---

# 71. Production Data Rule

Never use fake development data in production unless explicitly approved.

Awards, testimonials and achievements must come from verified client-provided information.

---

# 72. Backup Strategy

Production database must have reliable backups.

Before major schema migrations:

```text
Backup
 ↓
Migration
 ↓
Verification
```

---

# 73. Database Performance

Optimize:

```text
Search
Filtering
College Listing
Lead Dashboard
Follow-up Dashboard
Analytics
```

Use:

```text
Indexes
Pagination
Efficient Queries
Caching
```

where appropriate.

---

# 74. Full-Text Search

For college discovery, PostgreSQL full-text search can be considered.

Search fields:

```text
College Name
Description
Course Name
Department
Location
```

Do not use expensive wildcard queries unnecessarily.

---

# 75. Search Architecture

```text
Student Search
      ↓
Search API
      ↓
Validated Query
      ↓
PostgreSQL Search
      ↓
Filtered Results
      ↓
College Cards
```

---

# 76. Future Recommendation System

The schema should allow future recommendation features.

Potential inputs:

```text
Preferred Course
Preferred Location
Category
Student Preferences
Shortlisted Colleges
Viewed Colleges
```

Recommendation logic must remain explainable.

---

# 77. AI Integration

If AI recommendations are added later:

```text
AI
 ↓
Recommendation Service
 ↓
Verified Database Information
 ↓
Student
```

AI must not invent:

```text
Courses
Fees
Accreditations
College Facilities
Admission Guarantees
```

---

# 78. Sensitive Data Principle

Collect only data necessary for:

```text
Guidance
Lead Management
Communication
Analytics
```

Do not collect sensitive information without a legitimate requirement.

---

# 79. Data Retention

Define retention policies for:

```text
Leads
Analytics
Audit Logs
Contact Requests
```

based on business and legal requirements.

Do not retain personal data indefinitely without purpose.

---

# 80. Final Database Principle

The database must support two distinct systems:

```text
PUBLIC DISCOVERY
       │
       ├── Colleges
       ├── Courses
       ├── Locations
       ├── Departments
       └── Content

             +

PRIVATE CRM
       │
       ├── Leads
       ├── Counsellors
       ├── Follow-ups
       ├── Notes
       └── Analytics
```

These systems must remain securely separated.

> **College Guide's public website helps students discover colleges. The private database helps the College Guide team convert those students into guided counselling leads.**

```
```
