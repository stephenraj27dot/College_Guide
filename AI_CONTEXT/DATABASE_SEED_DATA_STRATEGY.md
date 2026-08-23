# College Guide — Database Seed Data Strategy

## 1. Purpose

This document defines how College Guide should handle initial data, Tamil Nadu college data, categories, courses, departments, locations, and development seed data.

The objective is to create a reliable foundation without introducing fake or unverified college information.

---

# 2. Core Principle

> Never fabricate real college information.

Development seed data must be clearly marked as:

- Demo data
- Development data
- Test data

Production college information must come from:

- Client-provided data
- Verified official sources
- Approved data imports
- Other explicitly approved sources

---

# 3. Initial Data Categories

The platform should support:

```text
Education Categories
Locations
Colleges
Courses
Departments
College-Course relationships
College-Department relationships
Facilities
Awards
Testimonials
Success Stories
Guides
````

---

# 4. Education Categories

Initial category structure may include:

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
Architecture
Education
Management
```

The final category list must be configurable from the database.

Do not hardcode categories throughout the frontend.

---

# 5. Category Fields

Suggested fields:

```text
id
name
slug
description
icon
image_url
display_order
is_active
created_at
updated_at
```

---

# 6. Location Hierarchy

Use a hierarchical location structure.

Recommended:

```text
Tamil Nadu
    ↓
District
    ↓
City / Town
```

Example:

```text
Tamil Nadu
   ↓
Chengalpattu
   ↓
Chennai / Tambaram / etc.
```

The exact geographic hierarchy must be validated before production.

---

# 7. Location Fields

Suggested:

```text
id
name
slug
type
parent_id
latitude
longitude
description
is_active
created_at
updated_at
```

Possible types:

```text
state
district
city
town
```

---

# 8. College Fields

Minimum college structure:

```text
id
name
slug
short_name
description
category_id
location_id
address
website_url
logo_url
cover_image_url
established_year
college_type
affiliation
accreditation
is_verified
is_published
created_at
updated_at
```

Only fields with verified data should be populated.

---

# 9. College Contact Information

College contact details must NOT automatically be public.

If the business rule requires students to contact College Guide only:

```text
College contact phone
College WhatsApp
College admission email
```

must remain private/internal.

Do not expose these fields through public APIs.

---

# 10. College Verification

Use a verification state.

Recommended:

```text
draft
pending_verification
verified
published
archived
```

Do not use only a boolean if the workflow requires multiple states.

---

# 11. College Publishing Rule

A college should become publicly visible only when:

```text
Required information exists
        +
Information is verified
        +
Admin approves publication
```

---

# 12. Course Structure

Suggested fields:

```text
id
name
slug
short_name
description
category_id
duration
eligibility
degree_type
is_active
created_at
updated_at
```

Eligibility and duration must be based on verified information.

---

# 13. Department Structure

Suggested:

```text
id
name
slug
description
category_id
is_active
created_at
updated_at
```

---

# 14. College-Course Relationship

A college may offer many courses.

A course may exist in many colleges.

Therefore use a many-to-many relationship.

```text
colleges
      ↕
college_courses
      ↕
courses
```

---

# 15. College-Department Relationship

A college may have multiple departments.

A department may exist across multiple colleges.

Use a relationship table where appropriate.

```text
colleges
      ↕
college_departments
      ↕
departments
```

---

# 16. Course-Department Relationship

Where necessary:

```text
courses
      ↕
course_departments
      ↕
departments
```

Do not duplicate department information across every college record.

---

# 17. Facilities

Facilities should be normalised where useful.

Possible facility types:

```text
Hostel
Library
Laboratory
Transport
Sports
Cafeteria
Wi-Fi
Gym
Auditorium
Medical Facilities
```

The final list should be configurable.

---

# 18. College Facilities

Relationship:

```text
colleges
      ↓
college_facilities
      ↓
facilities
```

Example:

```text
College A
 ├── Hostel
 ├── Library
 ├── Sports
 └── Transport
```

Only verified facilities should be shown publicly.

---

# 19. College Media

College images should not be stored directly inside the college table beyond the primary images.

Use a media table where appropriate.

Suggested:

```text
id
college_id
file_url
media_type
alt_text
caption
display_order
is_published
created_at
```

---

# 20. Media Types

Possible:

```text
logo
cover
gallery
facility
campus
achievement
```

---

# 21. Awards

Suggested fields:

```text
id
title
description
organization
year
image_url
display_order
is_published
created_at
updated_at
```

All award information must come from client-approved material.

---

# 22. Testimonials

Suggested:

```text
id
student_name
course
college
content
image_url
is_featured
is_published
created_at
updated_at
```

Only authentic testimonials may be inserted.

---

# 23. Success Stories

Suggested:

```text
id
title
slug
student_name
course
college
story
image_url
published_at
is_published
created_at
updated_at
```

Do not create fictional success stories for production.

---

# 24. Guides

Suggested:

```text
id
title
slug
excerpt
content
featured_image
author
published_at
updated_at
is_published
seo_title
seo_description
created_at
updated_at
```

---

# 25. Student Seed Data

Development may contain test students.

Example:

```text
student@example.test
```

Use clearly fake/test information.

Never use real student phone numbers or emails in seed scripts.

---

# 26. Lead Seed Data

Development may contain test leads.

Example:

```text
Test Student 01
Test Student 02
High Intent Test Lead
Follow-up Test Lead
```

All seed leads must be clearly identifiable as test data.

---

# 27. Admin Seed Data

Development may create test admin accounts.

Never hardcode production admin passwords into seed files.

Production admin accounts must be created securely.

---

# 28. Seed Data Separation

Maintain separate environments:

```text
Development
Staging
Production
```

Never run development seed scripts against production accidentally.

---

# 29. Seed Script Safety

Seed scripts should include safeguards.

Example concept:

```text
if environment === "production":
    stop
```

unless the operation is explicitly designed and approved for production.

---

# 30. Idempotent Seeds

Seed scripts should ideally be idempotent.

Running a seed script twice should not create duplicate categories or locations.

Prefer:

```text
upsert
```

where appropriate.

---

# 31. Stable IDs

For seed/reference data, stable identifiers may be useful.

Examples:

```text
engineering
medical
nursing
law
arts-science
```

However, UUIDs remain appropriate for normal database records.

---

# 32. Slug Uniqueness

Every public entity must have a unique slug within its content type.

Examples:

```text
engineering
computer-science-engineering
chennai
abc-engineering-college
```

Duplicate slugs must be prevented at the database level.

---

# 33. Tamil Nadu Data Strategy

The platform should be capable of storing a large Tamil Nadu college dataset.

The architecture must not assume only:

```text
Chennai
Coimbatore
Madurai
```

The system should scale to the complete required dataset.

---

# 34. College Import

If the client provides a large college dataset:

```text
CSV
Excel
JSON
API
```

create a controlled import pipeline.

Do not manually insert thousands of records through the UI.

---

# 35. Import Pipeline

Recommended:

```text
Raw Dataset
     ↓
Validate Structure
     ↓
Normalize Fields
     ↓
Map Categories
     ↓
Map Locations
     ↓
Detect Duplicates
     ↓
Validate College Records
     ↓
Import to Staging
     ↓
Review
     ↓
Publish Approved Records
```

---

# 36. Import Staging

Large imports should preferably enter a staging area before public publication.

Possible status:

```text
imported
validation_failed
needs_review
verified
approved
published
```

---

# 37. Duplicate Detection

Potential duplicate indicators:

```text
College name
Official identifier
Website
Location
Address
```

Do not rely only on college name.

---

# 38. Duplicate Handling

If a duplicate is detected:

```text
Existing Record
      +
Incoming Record
      ↓
Compare
      ↓
Merge / Reject / Review
```

Do not automatically overwrite trusted production information without review.

---

# 39. Data Normalization

Normalize:

* College names
* Course names
* Department names
* Location names
* Category names

Example:

```text
CSE
Computer Science & Engineering
Computer Science Engineering
```

should map to the approved canonical representation where appropriate.

---

# 40. Case Normalization

Avoid inconsistent values such as:

```text
Chennai
chennai
CHENNAI
Chennai City
```

Use canonical location records.

---

# 41. Missing Data

If data is unavailable:

Use null rather than fake information.

Example:

```json
{
  "hostel_available": null
}
```

Do NOT use:

```text
hostel_available = false
```

unless it has actually been verified as false.

---

# 42. Unknown vs False

This distinction is important.

```text
true
→ Verified available

false
→ Verified unavailable

null
→ Information unavailable / not verified
```

The UI must represent this correctly.

---

# 43. Verification Metadata

For important data, consider tracking:

```text
verified_at
verified_by
verification_source
```

This allows administrators to understand where information came from.

---

# 44. Data Source

College records may eventually include:

```text
client
official_source
approved_import
manual_admin_entry
```

The source should never be shown publicly unless appropriate.

---

# 45. Data Freshness

College information can change.

Where practical, store:

```text
last_verified_at
```

This allows the admin team to identify outdated records.

---

# 46. Data Review Dashboard

Admin should eventually be able to identify:

```text
Unverified Colleges
Outdated Colleges
Missing Course Data
Missing Location Data
Missing Images
Duplicate Records
```

This improves long-term data quality.

---

# 47. Reference Data

Categories and core locations are reference data.

They should not be casually deleted because other records may depend on them.

Prefer:

```text
is_active = false
```

for deactivation.

---

# 48. Production Seed Strategy

Production should not depend on development demo seeds.

Production data should be loaded through:

```text
Approved Import
+
Admin CMS
+
Verified Data
```

---

# 49. Development Seed Strategy

Development should contain enough data to test:

```text
Homepage
Category pages
Location pages
College listings
College profiles
Search
Filters
Shortlists
Comparison
Recommendations
Student dashboard
Admin dashboard
Lead management
```

---

# 50. Recommended Development Dataset

Create representative demo data:

```text
10+ Categories
10+ Locations
30+ Colleges
20+ Courses
30+ Departments
Multiple College-Course relationships
Multiple College-Department relationships
Facilities
Awards
Testimonials
Guides
Test Students
Test Leads
```

The exact number can change based on development requirements.

---

# 51. Test Data Diversity

Demo data should include:

```text
Published college
Draft college
Unverified college
College with missing image
College with many courses
College with no course data
College with hostel
College without hostel information
```

This allows the UI to be tested against real-world states.

---

# 52. Recommendation Test Data

Seed data should cover different student preferences.

Examples:

```text
Engineering + Chennai
Engineering + Coimbatore
Medical + Chennai
Arts & Science + Madurai
Nursing + Trichy
```

This allows the recommendation system to be tested.

---

# 53. Search Test Data

Ensure demo data includes:

* Similar college names
* Similar course names
* Multiple locations
* Different categories
* Different departments

This helps test search relevance.

---

# 54. College Slug Example

Development example:

```text
abc-engineering-college-chennai
```

Production slug must be based on the actual approved college identity.

---

# 55. Data Relationships

The database should follow:

```text
Category
   ↓
Course
   ↓
Department
   ↓
College
   ↓
Location
```

But relationships should remain flexible.

A college may belong to a category and offer multiple courses and departments.

---

# 56. Avoid Data Duplication

Do not store repeated information unnecessarily.

Bad:

```text
College A
course_name_1
course_name_2
course_name_3
```

Prefer normalized relationships.

---

# 57. Database Constraints

Important constraints should exist at database level.

Examples:

```text
Unique slug
Unique relationship
Required foreign keys
Valid enum values
```

Do not rely only on frontend validation.

---

# 58. Referential Integrity

Foreign keys should protect relationships such as:

```text
college → category
college → location
college_course → college
college_course → course
```

Do not allow orphaned relationship records.

---

# 59. Deletion Strategy

When deleting a parent record, consider dependent records.

Examples:

```text
College
 ↓
Courses
 ↓
Departments
 ↓
Media
 ↓
Shortlists
```

Prefer archive/deactivation where deletion could cause business-data loss.

---

# 60. Seed Data Documentation

Every seed dataset should document:

```text
Source
Purpose
Created date
Environment
Verification status
```

---

# 61. Data Import Validation

Before importing:

* [ ] Required columns exist
* [ ] Data types are valid
* [ ] Slugs are valid
* [ ] Categories map correctly
* [ ] Locations map correctly
* [ ] Duplicate records detected
* [ ] Invalid records separated
* [ ] No private data accidentally included

---

# 62. Data Import Rollback

Large imports should have a rollback strategy.

Before major import:

```text
Backup
   ↓
Import
   ↓
Validate
   ↓
Review
   ↓
Publish
```

If validation fails significantly, stop publication.

---

# 63. Production Data Rule

> No college should appear as verified merely because it exists in the database.

Verification and publication are separate concepts.

---

# 64. Client Data Workflow

When the client provides college information:

```text
Client Data
     ↓
Import
     ↓
Normalize
     ↓
Validate
     ↓
Admin Review
     ↓
Verified
     ↓
Published
```

---

# 65. Future Data Sources

The architecture may later support external data sources.

Potential sources:

```text
Official education databases
Approved APIs
Client-maintained datasets
Official college information
```

Every external source must be reviewed before being treated as authoritative.

---

# 66. Data Accuracy Warning

Do not use AI-generated college data as authoritative production data.

AI may assist with:

* Formatting
* Categorization
* Normalization
* Draft descriptions

But factual college information must be verified before publication.

---

# 67. Demo Data Label

Development UI may optionally show:

```text
DEMO DATA
```

This prevents confusion when screenshots or previews are shared with the client.

---

# 68. Client Preview Environment

If a staging environment is shown to the client:

* Clearly distinguish demo data
* Avoid fake student records that look real
* Do not expose internal test information
* Use realistic but fictional test records

---

# 69. Data Quality Metrics

Admin analytics may eventually show:

```text
Total Colleges
Verified Colleges
Unverified Colleges
Published Colleges
Missing Data
Outdated Data
Duplicate Candidates
```

---

# 70. Final Data Architecture Principle

> **College Guide should be built to handle a large Tamil Nadu education dataset, but scale must never come at the cost of accuracy. A smaller verified dataset is better than a huge dataset containing incorrect information.**