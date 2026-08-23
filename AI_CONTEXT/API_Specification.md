# College Guide — API Specification

## 1. Purpose

This document defines the API and server-action conventions for the College Guide platform.

All API implementations must follow:

- Authentication rules
- Authorization rules
- Database schema
- Validation rules
- Error-handling rules
- Security requirements

Do not create random endpoints without documenting them here.

---

# 2. API Architecture

The API layer sits between the frontend and backend services.

```text
Student / Admin UI
        ↓
API / Server Action
        ↓
Validation
        ↓
Authorization
        ↓
Business Logic
        ↓
Database
        ↓
Response
````

---

# 3. API Technology

Primary application:

* Next.js
* TypeScript
* Supabase
* PostgreSQL

Use:

* Next.js Route Handlers where HTTP APIs are required
* Server Actions where an internal server mutation is more appropriate
* Supabase server client for authenticated database operations

Do not create a separate Express/Nest backend unless the project genuinely requires it.

---

# 4. API Rules

Every endpoint must define:

* Method
* Path
* Authentication
* Authorization
* Input
* Validation
* Business logic
* Response
* Error behaviour

---

# 5. API Naming Convention

Use resource-oriented URLs.

Good:

```text
/api/colleges
/api/courses
/api/departments
/api/leads
/api/students
```

Avoid:

```text
/api/getCollegeData
/api/doLead
/api/fetchEverything
```

---

# 6. HTTP Methods

Use standard HTTP methods.

```text
GET     → Read
POST    → Create
PATCH   → Partial update
PUT     → Full replacement when required
DELETE  → Delete/archive
```

Prefer `PATCH` for normal updates.

---

# 7. Public API

Public APIs may expose:

* Published colleges
* Published courses
* Published departments
* Published locations
* Published awards
* Published testimonials
* Published success stories
* Published guides

Public APIs must never expose private student or lead information.

---

# 8. College APIs

## GET /api/colleges

Returns published colleges.

### Query parameters

```text
search
category
course
department
location
hostel
page
limit
sort
```

Example:

```text
/api/colleges?location=chennai&category=engineering
```

### Response

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 120
  }
}
```

Only public fields should be returned.

---

# 9. GET /api/colleges/:slug

Returns a published college profile.

Example:

```text
/api/colleges/abc-engineering-college
```

Response may contain:

```text
College
Location
Courses
Departments
Facilities
Media
Admission information
Verified public information
```

Do not expose:

```text
Internal notes
Lead information
Private college contacts
Admin metadata
```

---

# 10. GET /api/colleges/:slug/courses

Returns courses available at a college.

---

# 11. GET /api/colleges/:slug/departments

Returns departments available at a college.

---

# 12. Course APIs

## GET /api/courses

Supports:

```text
search
category
page
limit
```

---

# 13. GET /api/courses/:slug

Returns a public course profile.

---

# 14. GET /api/courses/:slug/colleges

Returns published colleges offering that course.

---

# 15. Department APIs

## GET /api/departments

Supports:

```text
search
course
category
location
page
limit
```

---

# 16. GET /api/departments/:slug

Returns public department information.

---

# 17. GET /api/departments/:slug/colleges

Returns colleges offering that department.

---

# 18. Location APIs

## GET /api/locations

Supports:

```text
type
parent_id
search
```

---

# 19. GET /api/locations/:slug

Returns location information and relevant colleges.

---

# 20. Nearby Colleges API

## GET /api/colleges/nearby

Inputs:

```text
latitude
longitude
radius
category
course
department
```

Example:

```text
/api/colleges/nearby?latitude=13.08&longitude=80.27&radius=25
```

The API must validate geographic inputs.

Do not expose exact student location to other users.

---

# 21. Search API

## GET /api/search

Searches across:

```text
Colleges
Courses
Departments
Locations
Categories
```

Example:

```text
/api/search?q=computer
```

Response should classify results:

```json
{
  "data": [
    {
      "type": "college",
      "title": "ABC Engineering College"
    },
    {
      "type": "department",
      "title": "Computer Science"
    }
  ]
}
```

---

# 22. Shortlist APIs

## POST /api/shortlists

Requires authenticated student.

Input:

```json
{
  "college_id": "uuid"
}
```

---

## DELETE /api/shortlists/:college_id

Removes a college from the student's shortlist.

Students may only modify their own shortlist.

---

## GET /api/shortlists

Returns the authenticated student's shortlist.

---

# 23. Comparison APIs

## POST /api/comparisons

Input:

```json
{
  "college_id": "uuid"
}
```

---

## DELETE /api/comparisons/:college_id

Removes a college from comparison.

---

## GET /api/comparisons

Returns the authenticated student's selected colleges.

---

# 24. Student Profile APIs

## GET /api/student/profile

Returns the authenticated student's profile.

---

## PATCH /api/student/profile

Updates allowed profile fields.

Example:

```json
{
  "full_name": "Stephen",
  "email": "example@email.com"
}
```

Only the authenticated student can modify their own profile.

---

# 25. Student Preferences API

## GET /api/student/preferences

Returns current preferences.

---

## PUT /api/student/preferences

Updates:

```text
Category
Course
Department
Location
Budget
Hostel preference
```

---

# 26. Activity API

## POST /api/activity

Records an approved student activity.

Example:

```json
{
  "event_type": "college_viewed",
  "college_id": "uuid"
}
```

Only allowed event types may be accepted.

Do not allow arbitrary event names from untrusted clients.

---

# 27. Find My College API

## POST /api/recommendations

Input:

```json
{
  "category_id": "uuid",
  "course_id": "uuid",
  "department_id": "uuid",
  "location_id": "uuid",
  "budget_min": 50000,
  "budget_max": 200000,
  "hostel_required": true
}
```

The recommendation engine should:

```text
Validate Input
      ↓
Find Eligible Colleges
      ↓
Apply Matching Rules
      ↓
Rank Results
      ↓
Generate Explanations
      ↓
Return Recommendations
```

---

# 28. Recommendation Response

Example:

```json
{
  "data": [
    {
      "college_id": "uuid",
      "match_score": 86,
      "reasons": [
        "Matches your preferred course",
        "Located in your selected area",
        "Hostel available"
      ]
    }
  ]
}
```

The system must not claim:

* Guaranteed admission
* Guaranteed placement
* Guaranteed suitability

---

# 29. Enquiry API

## POST /api/enquiries

Used when a student requests admission guidance.

Input:

```json
{
  "name": "Stephen",
  "phone": "XXXXXXXXXX",
  "email": "example@email.com",
  "category_id": "uuid",
  "course_id": "uuid",
  "department_id": "uuid",
  "college_id": "uuid",
  "location_id": "uuid",
  "message": "I need admission guidance."
}
```

The backend should:

```text
Validate
 ↓
Create / identify student
 ↓
Create enquiry
 ↓
Create lead
 ↓
Assign source
 ↓
Notify authorised team
```

---

# 30. Callback API

## POST /api/contact-requests

Input:

```json
{
  "request_type": "callback",
  "name": "Stephen",
  "phone": "XXXXXXXXXX",
  "preferred_time": "Evening",
  "message": "Please call me."
}
```

The request should create a lead or appropriate contact record.

---

# 31. WhatsApp Tracking

## POST /api/activity

Event:

```text
whatsapp_clicked
```

Optional contextual metadata:

```json
{
  "source_page": "college_profile",
  "college_id": "uuid"
}
```

Do not store unnecessary message content.

---

# 32. Admin Authentication

All admin APIs require:

```text
Authenticated User
+
Authorised Admin Role
```

Being logged in is not enough.

---

# 33. Admin College APIs

## POST /api/admin/colleges

Creates a college.

Requires:

```text
admin
super_admin
```

---

## PATCH /api/admin/colleges/:id

Updates a college.

---

## DELETE /api/admin/colleges/:id

Should normally archive or soft-delete rather than permanently deleting the college.

---

## POST /api/admin/colleges/:id/publish

Publishes a college.

Before publishing, validate required public information.

---

# 34. Admin Course APIs

```text
GET    /api/admin/courses
POST   /api/admin/courses
PATCH  /api/admin/courses/:id
DELETE /api/admin/courses/:id
```

---

# 35. Admin Department APIs

```text
GET    /api/admin/departments
POST   /api/admin/departments
PATCH  /api/admin/departments/:id
DELETE /api/admin/departments/:id
```

---

# 36. Admin Location APIs

```text
GET    /api/admin/locations
POST   /api/admin/locations
PATCH  /api/admin/locations/:id
DELETE /api/admin/locations/:id
```

---

# 37. Admin Student APIs

## GET /api/admin/students

Supports:

```text
search
location
course
department
created_from
created_to
page
limit
```

Only authorised staff can access student data.

---

# 38. Admin Student Detail

## GET /api/admin/students/:id

May return:

```text
Profile
Preferences
Shortlist
Comparisons
Enquiries
Permitted activity
Lead information
```

Sensitive information must respect role permissions.

---

# 39. Admin Lead APIs

## GET /api/admin/leads

Supports:

```text
status
intent
assigned_to
category
course
department
location
date
search
page
limit
```

---

# 40. GET /api/admin/leads/:id

Returns:

```text
Student
Lead information
Activity
Status
Score
Assigned counsellor
Notes
Follow-ups
```

Only authorised staff may access this information.

---

# 41. PATCH /api/admin/leads/:id

Used to update:

```text
status
intent_level
assigned_to
```

Business rules must be validated server-side.

---

# 42. Lead Notes API

## POST /api/admin/leads/:id/notes

Input:

```json
{
  "note": "Student is interested in IT."
}
```

Notes are private.

---

# 43. Lead Follow-up API

## POST /api/admin/leads/:id/followups

Input:

```json
{
  "scheduled_at": "2026-08-25T10:00:00Z",
  "note": "Call student regarding shortlisted colleges."
}
```

---

# 44. Lead Assignment API

## POST /api/admin/leads/:id/assign

Input:

```json
{
  "counsellor_id": "uuid"
}
```

Only authorised users may assign leads.

---

# 45. Awards APIs

Public:

```text
GET /api/awards
```

Admin:

```text
GET    /api/admin/awards
POST   /api/admin/awards
PATCH  /api/admin/awards/:id
DELETE /api/admin/awards/:id
```

---

# 46. Testimonials APIs

Public:

```text
GET /api/testimonials
```

Admin:

```text
GET    /api/admin/testimonials
POST   /api/admin/testimonials
PATCH  /api/admin/testimonials/:id
DELETE /api/admin/testimonials/:id
```

---

# 47. Success Story APIs

Public:

```text
GET /api/success-stories
GET /api/success-stories/:slug
```

Admin:

```text
POST
PATCH
DELETE
```

All unpublished content must remain private.

---

# 48. Guides APIs

Public:

```text
GET /api/guides
GET /api/guides/:slug
```

Admin:

```text
GET
POST
PATCH
DELETE
```

---

# 49. Analytics APIs

Admin-only:

```text
GET /api/admin/analytics/overview
GET /api/admin/analytics/leads
GET /api/admin/analytics/students
GET /api/admin/analytics/colleges
GET /api/admin/analytics/conversions
```

Analytics responses should contain aggregated data wherever possible.

---

# 50. Dashboard API

## GET /api/admin/dashboard

Returns high-level metrics:

```text
Total Students
New Students
Total Leads
New Leads
High Intent Leads
Callback Requests
Applications
Admissions
```

The dashboard should not require dozens of separate frontend requests if a consolidated server query can efficiently provide the data.

---

# 51. API Response Format

Use a consistent structure.

Success:

```json
{
  "success": true,
  "data": {}
}
```

List:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

---

# 52. Error Response Format

Use:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please provide a valid mobile number."
  }
}
```

Never expose stack traces or database errors to users.

---

# 53. Error Codes

Initial codes:

```text
VALIDATION_ERROR
UNAUTHORIZED
FORBIDDEN
NOT_FOUND
CONFLICT
RATE_LIMITED
INTERNAL_ERROR
```

Additional codes may be introduced when necessary.

---

# 54. Validation

Use schema validation, preferably with Zod.

Every mutation must validate:

```text
Required fields
Data types
String lengths
Enums
UUIDs
URLs
Phone numbers
Email addresses
Business rules
```

---

# 55. Authentication Checks

Private endpoints must verify the authenticated user on the server.

Never trust:

```text
user_id
student_id
role
```

sent from the browser.

Derive identity from the authenticated session whenever possible.

---

# 56. Authorization Checks

Example:

```text
Student
→ Own profile only

Counsellor
→ Authorised leads only

Content Manager
→ Content management only

Admin
→ Business management

Super Admin
→ Full administration
```

Authorization must be checked before database mutation.

---

# 57. Pagination

List APIs should support:

```text
page
limit
```

Default:

```text
page = 1
limit = 20
```

Maximum limit should be enforced.

Example:

```text
limit <= 100
```

---

# 58. Sorting

Allow only approved sort fields.

Example:

```text
sort=created_at
order=desc
```

Never directly inject arbitrary sort expressions into database queries.

---

# 59. Filtering

Filters should be validated against known fields.

Example:

```text
status=new
intent=high
location=chennai
```

Do not allow arbitrary SQL-like filter expressions.

---

# 60. Search

Search inputs must be:

* Sanitised
* Length-limited
* Efficiently queried

Avoid unrestricted wildcard queries on huge tables.

---

# 61. Rate Limiting

Apply rate limiting to:

```text
Authentication
OTP
Search where necessary
Enquiry
Callback
Public mutation endpoints
```

This reduces spam and abuse.

---

# 62. Duplicate Enquiries

The system should detect obvious duplicate enquiries.

Possible rule:

```text
Same phone
+
Same active enquiry
+
Short time window
```

should not create unlimited duplicate leads.

The exact duplicate policy should be defined during implementation.

---

# 63. Lead Creation Rule

Every valid admission enquiry should result in a business-actionable lead.

```text
Enquiry
 ↓
Lead
 ↓
Assignment
 ↓
Counselling
```

Avoid creating duplicate leads for every minor activity.

---

# 64. Public Contact Rule

Students must contact:

> College Guide

They must NOT be given direct college admission contact details unless the client explicitly changes this business rule.

This rule must be enforced in:

* UI
* API
* Database queries
* College profile
* Search results
* WhatsApp CTA

---

# 65. WhatsApp Rule

All website WhatsApp CTAs must route to the client's approved WhatsApp destination.

Do not expose college WhatsApp numbers.

---

# 66. File Upload APIs

Admin users may upload:

* College images
* Award images
* Achievement images
* Testimonial images
* Success story images

Uploads must validate:

```text
File type
File size
File name
Storage path
User permission
```

Never trust file extension alone.

---

# 67. Image Upload Flow

```text
Admin
 ↓
Select Image
 ↓
Client Validation
 ↓
Server Validation
 ↓
Upload Storage
 ↓
Save Metadata
 ↓
Publish when approved
```

---

# 68. API Security Principle

Never assume that hiding an endpoint or UI button provides security.

Security must be enforced server-side.

---

# 69. API Performance

APIs should:

* Select only required columns
* Avoid N+1 queries
* Paginate large results
* Use appropriate indexes
* Cache safe public data
* Avoid unnecessary joins

---

# 70. API Versioning

The initial project may use:

```text
/api/...
```

Versioning such as:

```text
/api/v1/...
```

should only be introduced when multiple API versions genuinely need to coexist.

---

# 71. API Documentation

Whenever an endpoint is created or modified, update this file.

For every important endpoint document:

```text
Purpose
Method
Path
Auth
Input
Validation
Response
Errors
Business Rules
```

---

# 72. API Testing

Every important mutation must have tests for:

```text
Valid request
Invalid request
Unauthenticated request
Unauthorised request
Missing record
Duplicate request
Database failure
```

---

# 73. Critical API Flows

### Student Enquiry

```text
POST /api/enquiries
        ↓
Validate
        ↓
Authenticate / identify student
        ↓
Create enquiry
        ↓
Create lead
        ↓
Return success
```

### Shortlist

```text
POST /api/shortlists
        ↓
Authenticate
        ↓
Verify college
        ↓
Insert shortlist
        ↓
Track activity
        ↓
Return result
```

### Admin Lead Update

```text
PATCH /api/admin/leads/:id
        ↓
Authenticate
        ↓
Check role
        ↓
Validate status
        ↓
Update lead
        ↓
Create audit record
        ↓
Return result
```

---

# 74. API Quality Gate

An endpoint is complete only when:

* Authentication is correct
* Authorization is correct
* Input validation exists
* Business rules are enforced
* Database access is secure
* Error handling exists
* Response format is consistent
* Rate limiting is considered
* Tests exist
* Documentation is updated

---

# 75. Final API Principle

> **APIs are business boundaries, not merely database wrappers. Every endpoint must enforce the rules that protect students, the client, and the College Guide platform.**