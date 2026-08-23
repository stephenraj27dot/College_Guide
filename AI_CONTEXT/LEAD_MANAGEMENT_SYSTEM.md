# College Guide — Lead Management System

## 1. Purpose

The Lead Management System converts student interactions into organized, actionable leads for the College Guide team.

The system must ensure:

```text
Student Interest
      ↓
Lead Creation
      ↓
Lead Qualification
      ↓
Counsellor Assignment
      ↓
Student Contact
      ↓
Follow-up
      ↓
Counselling
      ↓
Application
      ↓
Conversion
````

The primary business objective is:

> Never lose a genuine student enquiry.

---

# 2. Lead Sources

Every lead must have a source.

Supported sources:

```text
website_enquiry
get_guidance
request_callback
whatsapp
find_my_college
college_page
course_page
location_page
comparison
recommendation
campaign
manual_entry
```

---

# 3. Lead Record

Recommended structure:

```text
id
lead_reference
student_id
name
phone
email
category_id
course_id
department_id
preferred_location_id
interested_college_id
source
status
priority
assigned_counsellor_id
next_follow_up_at
created_at
updated_at
```

---

# 4. Lead Reference ID

Every lead should receive a human-friendly reference.

Example:

```text
CG-2026-000001
CG-2026-000002
CG-2026-000003
```

The reference should not expose database IDs.

---

# 5. Lead Status

Recommended statuses:

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

# 6. New Lead

A lead starts as:

```text
new
```

Example:

```text
Student submits Get Guidance form
        ↓
Lead created
        ↓
Status = New
```

---

# 7. Contacted

When a counsellor successfully contacts the student:

```text
new
 ↓
contacted
```

The counsellor should record the interaction.

---

# 8. Interested

If the student expresses genuine interest:

```text
contacted
 ↓
interested
```

The counsellor should add a note explaining the context.

---

# 9. Counselling

When active guidance begins:

```text
interested
 ↓
counselling
```

---

# 10. Follow-Up

If the student requires additional contact:

```text
counselling
 ↓
follow_up
```

A follow-up date should be created.

---

# 11. Application

When the student proceeds toward an application:

```text
follow_up
 ↓
application
```

The exact business definition must be confirmed with the client.

---

# 12. Converted

When the student's admission journey is successfully converted:

```text
application
 ↓
converted
```

Conversion information should be recorded where appropriate.

---

# 13. Closed States

A lead may end as:

```text
not_interested
unreachable
closed
```

Closed leads should remain available for historical reporting.

---

# 14. Lead Priority

Recommended:

```text
low
medium
high
urgent
```

Default:

```text
medium
```

unless business rules determine otherwise.

---

# 15. Lead Assignment

New leads may initially be:

```text
unassigned
```

Admin can assign them to a counsellor.

```text
New Lead
   ↓
Assignment
   ↓
Counsellor
```

---

# 16. Assignment Methods

The system should support manual assignment initially.

Future automatic assignment may support:

```text
round_robin
category_based
location_based
workload_based
```

Do not implement complex automatic assignment before the client confirms the workflow.

---

# 17. Counsellor Workload

Admin dashboard should eventually show:

```text
Counsellor A
Active Leads: 18

Counsellor B
Active Leads: 12

Counsellor C
Active Leads: 24
```

This helps distribute leads fairly.

---

# 18. Lead Detail

The lead detail page should contain:

```text
Student Information
Interest Information
Lead Status
Priority
Assigned Counsellor
Notes
Activity Timeline
Follow-ups
Communication History
```

---

# 19. Student Information

Display:

```text
Name
Phone
Email
```

Only collect information necessary for business operations.

---

# 20. Interest Information

Display:

```text
Category
Course
Department
Preferred Location
Interested College
```

Any field may be null if the student did not provide it.

---

# 21. Lead Source

Display:

```text
Source:
College Page
```

or:

```text
Source:
Find My College
```

This helps understand student intent and marketing performance.

---

# 22. Original Source

The original lead source must not be overwritten.

Example:

```text
First Source:
college_page
```

If the student later uses WhatsApp:

```text
Additional Interaction:
whatsapp
```

Store both when possible.

---

# 23. Lead Activity

Every important lead event should be recorded.

Examples:

```text
Lead Created
Lead Assigned
Status Changed
Priority Changed
Note Added
Follow-up Created
Follow-up Completed
Follow-up Rescheduled
Counsellor Changed
```

---

# 24. Activity Record

Suggested fields:

```text
id
lead_id
activity_type
description
performed_by
created_at
metadata
```

---

# 25. Activity Types

Possible:

```text
lead_created
lead_assigned
status_changed
priority_changed
note_added
call
whatsapp
email
follow_up_created
follow_up_completed
follow_up_rescheduled
counsellor_changed
```

---

# 26. Internal Notes

Counsellors can add notes.

Example:

```text
Student prefers Chennai.
Interested in B.Tech IT.
Requested counselling after 6 PM.
```

Notes are private.

---

# 27. Notes Security

Student-facing APIs must never return internal notes.

```text
Public API
    X
    ↓
Internal Notes

Admin API
    ✓
    ↓
Internal Notes
```

---

# 28. Follow-Up Record

Recommended:

```text
id
lead_id
assigned_to
due_at
status
priority
note
completed_at
created_at
updated_at
```

---

# 29. Follow-Up Status

```text
pending
completed
rescheduled
cancelled
overdue
```

---

# 30. Follow-Up Dashboard

Counsellor should see:

```text
Overdue
Today
Tomorrow
Upcoming
Completed
```

---

# 31. Follow-Up Reminder

The system should be designed to support reminders.

Possible future channels:

```text
In-app
Email
Push Notification
WhatsApp
```

Only implement external notifications after confirming the client's workflow.

---

# 32. Overdue Follow-Up

If:

```text
current_time > due_at
AND status = pending
```

the system should treat it as overdue.

The UI should clearly highlight it.

---

# 33. Follow-Up Completion

Counsellor selects:

```text
Complete
```

Then:

```text
Follow-up
 ↓
Completed
 ↓
Add Activity
```

---

# 34. Rescheduling

If student is unavailable:

```text
Follow-up
 ↓
Reschedule
 ↓
New Date / Time
```

Preserve the previous activity.

---

# 35. Lead Communication

Communication shortcuts may include:

```text
Call
WhatsApp
Email
```

The platform should not automatically send messages without appropriate user action or approved automation.

---

# 36. WhatsApp Communication

All student-facing WhatsApp actions must route to College Guide.

Do not expose:

```text
College WhatsApp
College Admission Phone
College Email
```

unless the client explicitly changes this business rule.

---

# 37. Communication Logging

Where possible, log:

```text
communication_type
lead_id
performed_by
timestamp
```

Do not store full private conversations unnecessarily.

---

# 38. Duplicate Lead Detection

Before creating a new lead, check for existing active leads where appropriate.

Potential matching fields:

```text
phone
email
student_id
```

Phone should generally be the strongest practical matching field.

---

# 39. Duplicate Lead Rule

If an active lead already exists:

```text
New Interaction
      ↓
Existing Lead
      ↓
Add Activity
```

rather than automatically creating another lead.

Business rules may allow a new lead under specific circumstances.

---

# 40. Duplicate Lead Warning

Admin UI may show:

```text
Possible Existing Lead Found

Name: Student
Phone: ********1234
Status: Follow-up

[Open Existing Lead]
[Create New Lead]
```

Do not expose unnecessary private information.

---

# 41. Lead Qualification

Qualification can be based on information such as:

```text
Course Interest
Location
College Interest
Admission Timeline
Guidance Request
```

Do not make unsupported assumptions about a student's financial situation or admission probability.

---

# 42. Qualification Fields

Future optional fields:

```text
admission_timeline
preferred_course
preferred_location
preferred_college
student_interest_level
```

---

# 43. Interest Level

Possible:

```text
low
medium
high
```

This should be treated as a counselling assessment, not an objective fact.

---

# 44. Lead Scoring

Future lead scoring may consider:

```text
Guidance Request
Callback Request
Repeated Interaction
Specific Course
Specific College
Admission Timeline
```

Example:

```text
Lead Score: 82
```

The scoring methodology must be transparent internally.

---

# 45. Lead Score Warning

Do not use:

```text
AI says this student will definitely convert.
```

AI-generated predictions must never be represented as guaranteed outcomes.

---

# 46. Lead Search

Search by:

```text
Name
Phone
Email
Lead Reference
Course
College
```

---

# 47. Lead Filters

Support:

```text
Status
Priority
Counsellor
Source
Category
Course
Location
College
Created Date
Follow-up Date
```

---

# 48. Lead Sorting

Support:

```text
Newest
Oldest
Priority
Follow-up Due
Recently Updated
```

---

# 49. Lead Table

Desktop:

```text
Lead ID
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

# 50. Lead Mobile Card

Mobile should display:

```text
Student Name
Course
Status
Priority
Next Follow-up
```

Actions:

```text
Call
WhatsApp
Open
```

---

# 51. Lead Detail Actions

Possible actions:

```text
Assign
Change Status
Change Priority
Add Note
Call
WhatsApp
Create Follow-up
Complete Follow-up
```

---

# 52. Lead Ownership

Each active lead should have:

```text
assigned_counsellor_id
```

or remain explicitly:

```text
unassigned
```

Do not silently assign leads.

---

# 53. Reassignment

Admin may reassign:

```text
Counsellor A
      ↓
Counsellor B
```

Record this in the activity timeline.

---

# 54. Counsellor Visibility

Counsellors should normally see:

```text
Their assigned leads
```

Admins can see:

```text
All leads
```

Super Admin can manage access.

---

# 55. Data Access Rule

Use server-side authorization.

Never assume:

```text
if user is counsellor
then frontend filtering is enough
```

The backend must enforce access.

---

# 56. Lead Conversion Data

When converted, optionally record:

```text
Converted College
Converted Course
Conversion Date
Counsellor
```

Only collect information useful to the client.

---

# 57. Conversion Analytics

Track:

```text
Total Leads
Active Leads
Converted Leads
Conversion Rate
```

Formula:

```text
Conversion Rate =
Converted Leads / Total Qualified Leads × 100
```

The exact reporting definition should be finalized with the client.

---

# 58. Source Performance

Analytics should show:

```text
Website Enquiry
WhatsApp
Find My College
College Page
Course Page
Campaign
```

and their resulting lead/conversion counts.

---

# 59. Course Demand Analytics

Show which courses generate the most enquiries.

Example:

```text
Computer Science
Information Technology
MBBS
B.Sc Nursing
B.Com
```

Do not infer popularity from small samples without appropriate context.

---

# 60. Location Demand Analytics

Show student demand by:

```text
Chennai
Coimbatore
Madurai
Trichy
Salem
```

The actual list should come from recorded data.

---

# 61. College Interest Analytics

Track:

```text
College Views
Shortlists
Comparisons
Guidance Requests
```

This helps the client understand student demand.

---

# 62. Funnel

Recommended funnel:

```text
Visitors
   ↓
College Views
   ↓
Interest Actions
   ↓
Guidance Interaction
   ↓
Lead
   ↓
Counselling
   ↓
Application
   ↓
Conversion
```

---

# 63. Lead Dashboard

Main dashboard:

```text
┌──────────────────────────────┐
│ Total Leads                  │
├──────────────────────────────┤
│ New        │ Follow-ups      │
│ High       │ Converted       │
├──────────────────────────────┤
│ Lead Sources                 │
├──────────────────────────────┤
│ Recent Leads                 │
└──────────────────────────────┘
```

The actual UI should follow the design system.

---

# 64. Today's Counsellor View

Counsellor should see:

```text
Today's Follow-ups
New Leads
High Priority Leads
Overdue Leads
Recently Updated
```

---

# 65. Lead Notifications

Possible alerts:

```text
New Lead Assigned
High Priority Lead
Follow-up Due
Follow-up Overdue
Lead Reassigned
```

---

# 66. Notification Rule

Notifications should be useful, not noisy.

Avoid sending duplicate notifications for the same event.

---

# 67. Lead Privacy

Sensitive student data must be protected.

Do not expose:

```text
Phone Number
Email
Private Notes
Lead Status
Counsellor Data
```

through public college/student pages.

---

# 68. Data Masking

When displaying sensitive information in some administrative contexts, masking may be used.

Example:

```text
+91 ******1234
```

Full information should only be visible to authorized users.

---

# 69. Data Retention

Lead retention requirements must be finalized with the client.

The system should support:

```text
Active
Closed
Archived
```

rather than permanently deleting historical records unnecessarily.

---

# 70. Audit Trail

Important actions should be recorded:

```text
Lead Created
Lead Assigned
Status Changed
Priority Changed
Counsellor Changed
Follow-up Created
Follow-up Completed
Lead Converted
```

---

# 71. Lead Import

Admin may eventually import leads from:

```text
CSV
Excel
Approved CRM export
```

Import must include:

```text
Validation
Duplicate Detection
Error Reporting
Preview
```

before final insertion.

---

# 72. Lead Export

Authorized admins may export lead data.

Export must:

* Require permission
* Avoid unnecessary fields
* Log export activity where appropriate
* Protect downloaded data

---

# 73. Bulk Actions

Admin may eventually perform:

```text
Bulk Assign
Bulk Status Update
Bulk Archive
```

Bulk actions must include confirmation.

---

# 74. Dangerous Actions

For actions such as:

```text
Delete
Archive
Bulk Update
Reassign Large Number of Leads
```

show a confirmation dialog.

Example:

```text
Are you sure?

This action will update 38 leads.

[Cancel] [Continue]
```

---

# 75. Lead Creation Validation

Required:

```text
Name
Phone
Source
```

Depending on the lead source.

Optional:

```text
Email
Course
Location
College
Message
```

---

# 76. Server Validation

Every lead submission must be validated on the backend.

Never trust only frontend validation.

---

# 77. Rate Limiting

Public enquiry endpoints should have protection against:

```text
Spam
Repeated submissions
Automated abuse
```

Use appropriate rate limiting and validation.

---

# 78. Bot Protection

If spam becomes significant, support:

```text
Captcha
Honeypot
Rate limiting
IP throttling
```

Do not add unnecessary friction during MVP unless needed.

---

# 79. Lead Success State

After successful submission:

```text
Thank you!

Your request has been received.

College Guide will contact you soon.
```

Do not promise a specific response time unless the client guarantees it.

---

# 80. Failed Submission

Show:

```text
We couldn't submit your request.

Please try again.
```

Do not expose database/API errors.

---

# 81. CRM Performance

Lead pages should remain fast even when thousands of leads exist.

Use:

```text
Pagination
Server-side filtering
Indexed queries
Lazy loading
```

Avoid loading every lead into the browser.

---

# 82. Database Indexes

Likely indexed fields:

```text
phone
email
status
priority
assigned_counsellor_id
source
created_at
next_follow_up_at
course_id
location_id
```

Final indexes should be based on actual query patterns.

---

# 83. Pagination

Lead tables should use pagination.

Example:

```text
1  2  3  4  5  Next
```

or cursor-based pagination where appropriate.

---

# 84. Empty CRM State

If there are no leads:

```text
No leads yet.

New student enquiries will appear here.
```

---

# 85. CRM Error State

If loading fails:

```text
Couldn't load leads.

[ Try Again ]
```

---

# 86. CRM Loading State

Use skeleton loading for:

```text
Lead Table
Lead Detail
Dashboard Metrics
Follow-up Lists
```

---

# 87. CRM Mobile Rule

Important actions must be reachable without opening multiple menus.

For example:

```text
Lead Card
   ↓
Call
WhatsApp
Follow-up
Open
```

---

# 88. CRM Security Principle

> Student lead information is private business data.

Every read, update, export and communication action must respect role permissions.

---

# 89. CRM Business Principle

The CRM should make the counsellor's next action obvious.

Example:

```text
Student: Stephen
Interest: B.Tech IT
Status: Interested
Priority: High

Next Follow-up:
Today — 6:30 PM
```

The counsellor should immediately know what to do next.

---

# 90. Final Lead Management Principle

> **A lead is not just a form submission. It is the beginning of a student relationship. College Guide must preserve the student's context, guide the counsellor's next action, and provide the client with measurable visibility from first enquiry to conversion.**