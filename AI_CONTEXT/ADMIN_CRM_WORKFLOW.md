# College Guide — Admin & CRM Workflow

## 1. Purpose

This document defines the internal Admin, Counsellor and CRM workflow for College Guide.

The system must help the client manage:

- Students
- Leads
- Counsellors
- College information
- Courses
- Departments
- Locations
- Enquiries
- Follow-ups
- WhatsApp interactions
- Awards
- Testimonials
- Success stories
- Website content
- Analytics

The CRM is one of the most important parts of the platform because the website should not only attract students but also help the client convert those students into admissions.

---

# 2. Internal User Roles

The platform should support role-based access.

Recommended roles:

```text
Super Admin
Admin
Counsellor
Content Manager
Data Manager
````

---

# 3. Role Responsibilities

## Super Admin

Full system access.

Can:

* Manage admins
* Manage counsellors
* Manage permissions
* Manage colleges
* Manage leads
* Manage content
* View analytics
* Configure system settings

---

## Admin

Can:

* Manage colleges
* Manage courses
* Manage departments
* Manage locations
* Manage leads
* Assign counsellors
* View analytics
* Manage content

---

## Counsellor

Can:

* View assigned leads
* Contact students
* Add follow-up notes
* Update lead status
* Schedule follow-ups
* View student interests

Counsellors must not automatically have access to system settings.

---

## Content Manager

Can manage:

* Guides
* FAQs
* Awards
* Testimonials
* Success stories
* Homepage content
* Images

---

## Data Manager

Can manage:

* College data
* Course data
* Department data
* Location data
* Data imports
* Verification workflow

---

# 4. Role-Based Access Control

Every protected action must check permissions on the server.

Do not rely only on frontend hiding.

Example:

```text
Frontend
    ↓
API Request
    ↓
Authentication
    ↓
Authorization
    ↓
Permission Check
    ↓
Action
```

---

# 5. Admin Login

Admin login should be separate from the public student experience.

Recommended:

```text
/admin/login
```

Admin authentication should support secure authentication methods.

Never hardcode admin credentials.

---

# 6. Admin Dashboard

The dashboard should provide an immediate overview.

Recommended widgets:

```text
Total Leads
New Leads
Today's Leads
High Priority Leads
Follow-ups Due
Converted Leads
College Views
WhatsApp Clicks
Guidance Requests
```

---

# 7. Dashboard Layout

Recommended:

```text
Sidebar
    ↓
Dashboard
Leads
Students
Colleges
Courses
Departments
Locations
Content
Analytics
Settings
```

The exact navigation can evolve during UI implementation.

---

# 8. Lead Management

Lead management is a core CRM feature.

Admin should be able to:

```text
View Lead
Search Lead
Filter Lead
Assign Lead
Change Status
Change Priority
Add Notes
Schedule Follow-up
View Activity
```

---

# 9. Lead Creation Sources

Every lead should record its source.

Possible sources:

```text
Website Enquiry
Get Guidance
Request Callback
WhatsApp
Find My College
College Page
Course Page
Location Page
Organic Search
Campaign
Manual Entry
```

---

# 10. Lead Source Tracking

Example:

```text
Student submits enquiry
        ↓
source = college_page
```

Another:

```text
Student clicks WhatsApp
        ↓
source = whatsapp
```

This allows the client to understand which channels generate leads.

---

# 11. Lead Record

Recommended fields:

```text
Lead ID
Student Name
Phone
Email
Interested Category
Interested Course
Interested Department
Preferred Location
Source
Status
Priority
Assigned Counsellor
Created At
Updated At
Next Follow-up
```

---

# 12. Lead Status

Recommended lifecycle:

```text
New
 ↓
Contacted
 ↓
Interested
 ↓
Counselling
 ↓
Follow-up
 ↓
Application
 ↓
Converted
```

Alternative endings:

```text
Not Interested
Closed
Unreachable
```

---

# 13. Lead Status Rules

The system should not randomly change lead status.

Example:

```text
New
→ Contacted
```

when a counsellor successfully contacts the student.

```text
Contacted
→ Interested
```

when student expresses interest.

```text
Interested
→ Counselling
```

when active counselling begins.

---

# 14. Lead Priority

Recommended:

```text
Low
Medium
High
Urgent
```

Priority may be manually changed by counsellors/admins.

---

# 15. Automatic Lead Priority

Future versions may calculate priority using:

```text
Multiple enquiries
Callback request
Course interest
Immediate admission intent
Repeated college views
```

The system must not claim certainty about student intent.

---

# 16. Lead Assignment

New leads may initially be:

```text
Unassigned
```

Admin can assign:

```text
Lead
   ↓
Counsellor
```

---

# 17. Automatic Assignment

Future feature:

```text
New Lead
   ↓
Assignment Rules
   ↓
Available Counsellor
   ↓
Lead Assigned
```

Possible assignment methods:

```text
Round Robin
Location
Category
Course
Counsellor Workload
```

---

# 18. Counsellor Dashboard

Counsellor should immediately see:

```text
My New Leads
My Follow-ups
High Priority
Today's Tasks
Recently Updated Leads
```

---

# 19. Lead Detail Page

Lead detail should contain:

```text
Student Information
Interest Information
Lead Status
Priority
Assigned Counsellor
Notes
Follow-ups
Activity Timeline
```

---

# 20. Student Information

Display only information necessary for counselling.

Example:

```text
Name
Phone
Email
Preferred Course
Preferred Location
```

---

# 21. Internal Notes

Counsellors can add private notes.

Example:

```text
Student interested in CSE.
Prefers Chennai.
Requested callback tomorrow evening.
```

These notes must never be visible to students.

---

# 22. Activity Timeline

Every important CRM action should create an activity.

Example:

```text
10:30 AM
Lead created

11:00 AM
Assigned to Counsellor A

11:20 AM
Counsellor contacted student

11:25 AM
Status changed to Interested

Tomorrow
Follow-up scheduled
```

---

# 23. Follow-Up System

Counsellors should be able to create follow-ups.

Fields:

```text
Follow-up Date
Follow-up Time
Note
Priority
```

---

# 24. Follow-Up Dashboard

Show:

```text
Overdue
Today
Tomorrow
Upcoming
Completed
```

---

# 25. Overdue Follow-Ups

Overdue follow-ups should be clearly visible.

Example:

```text
⚠ Follow-up overdue
Student: Test Student
Due: Yesterday
```

Use clear visual hierarchy without excessive alarming UI.

---

# 26. Follow-Up Completion

Counsellor can:

```text
Complete
Reschedule
Cancel
Add Note
```

---

# 27. Rescheduling

When rescheduled:

```text
Old Follow-up
      ↓
Marked Rescheduled
      ↓
New Follow-up Created
```

Keep the history.

---

# 28. Lead Timeline Integrity

Do not delete important historical CRM activities casually.

If an incorrect note needs correction:

```text
Edit / Correction
```

should preserve an audit trail where practical.

---

# 29. Lead Search

Admin/counsellor should search by:

```text
Student Name
Phone
Lead ID
Course
Location
```

---

# 30. Lead Filters

Filters:

```text
Status
Priority
Counsellor
Source
Course
Location
Created Date
Follow-up Date
```

---

# 31. Lead Sorting

Possible:

```text
Newest
Oldest
Priority
Follow-up Due
Recently Updated
```

---

# 32. Lead Table

Desktop example:

```text
Student
Course
Location
Source
Status
Priority
Counsellor
Next Follow-up
Created
Actions
```

---

# 33. Mobile CRM

CRM should also work on mobile because counsellors may use phones.

Prioritize:

```text
Lead Name
Status
Priority
Next Follow-up
Call / WhatsApp action
```

---

# 34. Student Communication

The CRM may provide communication shortcuts.

Possible:

```text
Call
WhatsApp
Email
```

All communication must follow the client's approved business communication process.

---

# 35. WhatsApp Rule

The WhatsApp CTA must use the College Guide business number.

The system must not expose private college WhatsApp numbers to students.

---

# 36. Communication Logging

Where technically possible, store communication metadata such as:

```text
Communication Type
Timestamp
Counsellor
Lead
```

Do not store unnecessary private message content.

---

# 37. Lead Conversion

When a student successfully converts:

```text
Lead Status
    ↓
Converted
```

Optional fields:

```text
Converted College
Converted Course
Conversion Date
Counsellor
```

Only store fields needed by the client's business process.

---

# 38. Conversion Analytics

Admin should be able to see:

```text
Total Leads
Converted Leads
Conversion Rate
Leads by Source
Conversions by Counsellor
Conversions by Course
Conversions by Location
```

---

# 39. College Management

Admin can:

```text
Create
Edit
Verify
Publish
Archive
```

college records.

---

# 40. College Verification

Workflow:

```text
Draft
 ↓
Pending Verification
 ↓
Verified
 ↓
Published
```

A college must not appear as verified without verification.

---

# 41. College Editing

Admin should be able to edit:

```text
Basic Information
Courses
Departments
Facilities
Location
Images
Descriptions
```

---

# 42. College Archive

Do not immediately delete important college records.

Prefer:

```text
Active
Archived
```

This protects historical data and relationships.

---

# 43. Course Management

Admin can:

```text
Create Course
Edit Course
Deactivate Course
Map Course to Colleges
```

---

# 44. Department Management

Admin can:

```text
Create Department
Edit Department
Deactivate Department
Map Department to Colleges
```

---

# 45. Location Management

Admin can manage:

```text
State
District
City
Town
```

Use relationships instead of repeating location text.

---

# 46. Content Management

Admin/content manager can manage:

```text
Awards
Achievements
Testimonials
Success Stories
Guides
FAQs
Homepage Content
```

---

# 47. Awards Management

Fields:

```text
Title
Organization
Year
Description
Image
Display Order
Published Status
```

Only client-approved awards should be published.

---

# 48. Client Achievement Section

The client has significant experience and awards.

The CMS should therefore make it easy to maintain:

```text
Experience
Awards
Achievements
Recognition
Success Stories
```

This section is important for building student trust.

---

# 49. Testimonial Management

Admin can:

```text
Create
Edit
Preview
Publish
Archive
```

testimonials.

Never create fake testimonials.

---

# 50. Success Story Management

Admin can manage:

```text
Student Story
Course
College
Outcome
Image
Description
```

Sensitive student information must be handled appropriately.

---

# 51. Guide/Blog Management

Content managers can:

```text
Create Guide
Save Draft
Preview
Publish
Edit
Archive
```

---

# 52. SEO Content Management

Each important content page should support:

```text
SEO Title
Meta Description
Slug
Featured Image
```

Avoid keyword stuffing.

---

# 53. Media Library

Admin should have a central media library.

Categories:

```text
College Images
Awards
Achievements
Testimonials
Success Stories
Website Assets
```

---

# 54. Admin Search

Admin search should work across:

```text
Students
Leads
Colleges
Courses
Departments
Content
```

---

# 55. Notifications

Admin may receive:

```text
New Lead
High Priority Lead
Overdue Follow-up
New College Pending Verification
Content Pending Review
```

---

# 56. Notification Priority

Use:

```text
Informational
Important
Urgent
```

Avoid excessive notifications.

---

# 57. Audit Log

Important administrative actions should be logged.

Example:

```text
Admin created college
Admin published college
Counsellor changed lead status
Admin assigned lead
Content manager published award
```

---

# 58. Audit Log Fields

Recommended:

```text
User
Action
Entity
Entity ID
Timestamp
Previous Value
New Value
```

Only store values appropriate for audit requirements.

---

# 59. Permission Security

A counsellor must not be able to:

```text
Manage Admins
Change System Settings
Delete Critical Data
Modify Permissions
```

unless explicitly authorized.

---

# 60. Admin Data Security

Protected CRM data must never be exposed through public APIs.

Public API:

```text
College Information
Course Information
Published Content
```

Private API:

```text
Leads
Students
Counsellor Notes
Internal Analytics
Admin Settings
```

---

# 61. Public vs Private Data

### Public

```text
College Name
Location
Courses
Departments
Approved Images
Published Guides
Awards
Testimonials
```

### Private

```text
Student Phone
Student Email
Lead Notes
Counsellor Information
Internal Lead Status
Private College Contact Data
Admin Data
```

---

# 62. Lead Deduplication

Before creating a new lead:

```text
Phone
+
Existing Active Lead
```

may be checked.

If an existing lead exists:

```text
Update Existing Lead
```

or create a new activity based on business rules.

---

# 63. Lead Source Attribution

Preserve the original source.

Example:

```text
First Source:
college_page
```

If later:

```text
WhatsApp
```

is used, store the interaction separately rather than overwriting the original source.

---

# 64. Lead Lifecycle

Complete lifecycle:

```text
Student
 ↓
Interaction
 ↓
Lead
 ↓
Assignment
 ↓
Contact
 ↓
Counselling
 ↓
Follow-up
 ↓
Application
 ↓
Conversion
```

---

# 65. CRM Dashboard Metrics

Recommended:

```text
New Leads Today
Total Active Leads
Follow-ups Today
Overdue Follow-ups
High Priority Leads
Converted Leads
Conversion Rate
Top Lead Source
Popular Course
Popular Location
```

---

# 66. Admin Dashboard Principle

The dashboard should answer:

```text
How many students are interested?

Where are they coming from?

What are they interested in?

Who is handling them?

Who needs follow-up?

How many converted?
```

---

# 67. Counsellor Dashboard Principle

The counsellor dashboard should answer:

```text
Who do I need to contact?

Who needs follow-up?

Which students are highly interested?

What did I discuss previously?

What should I do next?
```

---

# 68. Admin Workflow

```text
Login
 ↓
Dashboard
 ↓
Check New Leads
 ↓
Assign Leads
 ↓
Monitor Follow-ups
 ↓
Review Conversions
 ↓
Review Website Analytics
```

---

# 69. Counsellor Workflow

```text
Login
 ↓
My Leads
 ↓
Open Lead
 ↓
Review Student Interest
 ↓
Contact Student
 ↓
Add Note
 ↓
Update Status
 ↓
Schedule Follow-up
```

---

# 70. Content Workflow

```text
Draft
 ↓
Review
 ↓
Approved
 ↓
Published
 ↓
Updated / Archived
```

---

# 71. College Data Workflow

```text
Import / Create
 ↓
Validate
 ↓
Review
 ↓
Verify
 ↓
Publish
 ↓
Monitor
 ↓
Update / Archive
```

---

# 72. CRM Workflow Rule

Every lead should always have a clear next state.

Avoid leads sitting indefinitely in:

```text
New
```

without action.

---

# 73. Follow-Up Rule

Every active lead should ideally have:

```text
Current Status
+
Assigned Counsellor
+
Next Action
```

This prevents leads from being forgotten.

---

# 74. High-Intent Lead

High-intent indicators may include:

```text
Requested callback
Requested counselling
Repeated interactions
Specific course interest
Specific college interest
```

These are indicators, not guaranteed admission intent.

---

# 75. Lead Quality

The CRM should distinguish:

```text
Lead Volume
```

from:

```text
Lead Quality
```

The goal is not simply to generate many leads.

The goal is to generate useful student enquiries that the client can actually counsel.

---

# 76. Client Business Value

The CRM should help the client answer:

```text
Which students are interested?

Which colleges/courses are most requested?

Which counsellor is handling each student?

Which leads need attention?

Which sources produce conversions?

Where are students dropping off?
```

---

# 77. No Direct College Conversion

The platform's conversion flow must remain:

```text
Student
 ↓
College Guide
 ↓
Counsellor
 ↓
College Guidance / Admission Support
```

Not:

```text
Student
 ↓
Direct College Contact
```

---

# 78. Final CRM Principle

> **The website attracts the student, the discovery system helps the student understand their options, and the CRM ensures the College Guide team never loses a genuine enquiry.**