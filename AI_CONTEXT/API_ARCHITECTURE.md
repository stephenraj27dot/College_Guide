
# College Guide — API Architecture

## 1. Purpose

This document defines the API architecture for College Guide.

The API layer connects:

```text
Frontend
   ↓
API / Server Actions
   ↓
Authentication
   ↓
Authorization
   ↓
Business Logic
   ↓
Database
````

The API must be secure, predictable, scalable and easy to maintain.

---

# 2. API Principles

Follow these principles:

* Validate every request.
* Never trust frontend input.
* Never expose private CRM data through public endpoints.
* Enforce authorization on the server.
* Return predictable response structures.
* Handle errors consistently.
* Use pagination for large datasets.
* Avoid unnecessary API calls.
* Never expose secrets to the browser.

---

# 3. API Architecture

Recommended:

```text
Next.js Frontend
       ↓
Server Actions / Route Handlers
       ↓
Service Layer
       ↓
Repository / Data Access Layer
       ↓
Supabase PostgreSQL
```

The exact implementation can evolve based on the selected Next.js architecture.

---

# 4. Public API

Public APIs may provide:

```text
Colleges
Courses
Departments
Categories
Locations
Published Guides
FAQs
Awards
Testimonials
```

Only published and approved information should be exposed.

---

# 5. Private API

Private APIs handle:

```text
Students
Leads
Follow-ups
Counsellors
Internal Notes
CRM Analytics
Admin Settings
Audit Logs
```

Authentication and authorization are mandatory.

---

# 6. Authentication

Recommended:

```text
Supabase Auth
```

Authentication should support:

```text
Email / Password
OTP / Phone
Magic Link
```

Only implement methods required by the product.

---

# 7. Authentication Flow

```text
User
 ↓
Login
 ↓
Authentication Provider
 ↓
Session
 ↓
Frontend
 ↓
Protected Request
 ↓
Server
 ↓
Authorization
```

---

# 8. Role-Based Authorization

Roles:

```text
student
counsellor
admin
super_admin
content_manager
data_manager
```

Every protected action must verify role/permission on the server.

---

# 9. Public College Endpoint

Conceptual:

```text
GET /api/colleges
```

Supports:

```text
category
course
department
location
search
page
limit
sort
```

Example:

```text
GET /api/colleges?location=chennai&category=engineering
```

---

# 10. College Detail

```text
GET /api/colleges/:slug
```

Return:

```text
College Name
Description
Location
Categories
Courses
Departments
Facilities
Images
Highlights
```

Do not return private internal information.

---

# 11. College Search

```text
GET /api/colleges/search
```

Parameters:

```text
q
category
course
department
location
```

Search should be server-side.

---

# 12. Location API

```text
GET /api/locations
GET /api/locations/:slug
```

Possible hierarchy:

```text
Tamil Nadu
   ↓
Chennai
   ↓
Area
```

---

# 13. Category API

```text
GET /api/categories
```

Example:

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

# 14. Course API

```text
GET /api/courses
GET /api/courses/:slug
```

Optional filters:

```text
category
location
search
```

---

# 15. Department API

```text
GET /api/departments
GET /api/departments/:slug
```

---

# 16. Student Guidance API

The main conversion endpoint:

```text
POST /api/guidance
```

Input:

```text
name
phone
email
category
course
preferred_location
college
message
```

Not every field must be mandatory.

---

# 17. Guidance Submission Flow

```text
Student
 ↓
Guidance Form
 ↓
Client Validation
 ↓
Server Validation
 ↓
Duplicate Check
 ↓
Create / Update Lead
 ↓
Create Activity
 ↓
Optional Assignment
 ↓
Success Response
```

---

# 18. Request Validation

Validate:

```text
Name
Phone
Email
Course
Location
Message
```

Use schema validation.

Recommended:

```text
Zod
```

---

# 19. Phone Validation

Phone numbers must be normalized before storage where appropriate.

Example:

```text
+91XXXXXXXXXX
```

Avoid storing multiple representations of the same number unnecessarily.

---

# 20. Email Validation

If email is optional:

```text
email = null
```

when not provided.

Do not store invalid email strings.

---

# 21. Duplicate Lead API Logic

Before creating a new lead:

```text
Search existing active lead
        ↓
Match phone / email
        ↓
Existing?
  ┌─────┴─────┐
 Yes          No
  ↓            ↓
Update       Create
Activity     Lead
```

Exact business rules should remain configurable.

---

# 22. Success Response

Recommended structure:

```json
{
  "success": true,
  "data": {
    "leadReference": "CG-2026-000001"
  }
}
```

Never return internal database information unnecessarily.

---

# 23. Error Response

Standard structure:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please check the submitted details."
  }
}
```

Do not expose:

```text
SQL errors
Stack traces
Database credentials
Internal implementation details
```

---

# 24. Error Codes

Recommended:

```text
VALIDATION_ERROR
UNAUTHORIZED
FORBIDDEN
NOT_FOUND
CONFLICT
RATE_LIMITED
INTERNAL_ERROR
```

---

# 25. HTTP Status Codes

Use appropriate status codes:

```text
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
429 Too Many Requests
500 Internal Server Error
```

---

# 26. Rate Limiting

Public endpoints such as:

```text
/api/guidance
/api/search
```

should be protected from abuse.

Possible controls:

```text
IP rate limiting
Request throttling
Bot detection
Captcha
```

Use only where necessary.

---

# 27. WhatsApp CTA

The website should provide a WhatsApp CTA.

The destination must be:

```text
College Guide WhatsApp
```

not the college's direct contact.

---

# 28. WhatsApp Tracking

Before redirecting where appropriate:

```text
POST /api/events
```

with:

```text
event_name = whatsapp_click
```

Then:

```text
Redirect
   ↓
College Guide WhatsApp
```

Do not block the user if analytics tracking fails.

---

# 29. Callback Request

Endpoint:

```text
POST /api/callback
```

Input:

```text
name
phone
preferred_time
course
location
```

Creates or updates a lead.

---

# 30. Contact Request

Endpoint:

```text
POST /api/contact
```

Use for general enquiries.

If the request represents a counselling lead, it should be connected to the CRM.

Avoid maintaining two disconnected lead systems.

---

# 31. College Shortlist API

```text
POST /api/shortlists
DELETE /api/shortlists/:collegeId
GET /api/shortlists
```

For authenticated users, use the authenticated student ID.

For guest users, use a secure session identifier.

---

# 32. Compare API

```text
POST /api/compare
DELETE /api/compare/:collegeId
GET /api/compare
```

Comparison should have a reasonable maximum number of colleges.

Recommended initial limit:

```text
4 colleges
```

---

# 33. Recommendation API

Conceptual:

```text
POST /api/recommendations
```

Input may include:

```text
category
course
location
preferences
```

Return:

```text
Recommended Colleges
Reasons
Matching Information
```

Recommendations must be presented as guidance, not guaranteed outcomes.

---

# 34. Recommendation Transparency

Avoid:

```text
"This college is guaranteed to be best for you."
```

Prefer:

```text
"Recommended based on your selected course and location."
```

---

# 35. Analytics API

Conceptual:

```text
POST /api/analytics/events
```

Input:

```text
event_name
session_id
college_id
course_id
location_id
metadata
```

Do not collect unnecessary personal data.

---

# 36. Analytics Event Validation

Only allow known event types.

Example:

```text
college_view
course_view
search
shortlist
compare
guidance_click
whatsapp_click
enquiry_submit
```

Reject arbitrary sensitive data in metadata.

---

# 37. Admin College API

Protected:

```text
POST   /api/admin/colleges
GET    /api/admin/colleges
PATCH  /api/admin/colleges/:id
DELETE /api/admin/colleges/:id
```

Authorization:

```text
admin
super_admin
data_manager
```

depending on action.

---

# 38. College Verification API

```text
POST /api/admin/colleges/:id/verify
```

Only authorized users can verify colleges.

---

# 39. College Publish API

```text
POST /api/admin/colleges/:id/publish
```

Before publishing verify:

```text
College Data
Location
Category
Course Information
Required Images
Verification Status
```

---

# 40. College Archive API

```text
POST /api/admin/colleges/:id/archive
```

Prefer archive over permanent deletion.

---

# 41. Admin Lead API

```text
GET   /api/admin/leads
GET   /api/admin/leads/:id
PATCH /api/admin/leads/:id
```

Protected.

---

# 42. Lead Assignment API

```text
POST /api/admin/leads/:id/assign
```

Input:

```text
counsellor_id
```

Create an activity after successful assignment.

---

# 43. Lead Status API

```text
POST /api/admin/leads/:id/status
```

Input:

```text
status
```

Validate status transitions according to business rules.

---

# 44. Lead Priority API

```text
POST /api/admin/leads/:id/priority
```

Input:

```text
priority
```

Allowed:

```text
low
medium
high
urgent
```

---

# 45. Lead Notes API

```text
POST /api/admin/leads/:id/notes
GET  /api/admin/leads/:id/notes
```

Only authorized internal users.

---

# 46. Follow-Up API

Create:

```text
POST /api/admin/leads/:id/follow-ups
```

Update:

```text
PATCH /api/admin/follow-ups/:id
```

Complete:

```text
POST /api/admin/follow-ups/:id/complete
```

Reschedule:

```text
POST /api/admin/follow-ups/:id/reschedule
```

---

# 47. Counsellor API

Counsellors should have access only to authorized leads.

Example:

```text
GET /api/counsellor/leads
GET /api/counsellor/leads/:id
```

Backend must enforce assignment permissions.

---

# 48. Admin Dashboard API

Possible:

```text
GET /api/admin/dashboard
```

Return aggregated metrics:

```text
total_leads
new_leads
followups_today
overdue_followups
high_priority_leads
converted_leads
```

Avoid returning thousands of raw lead records.

---

# 49. Analytics Dashboard API

```text
GET /api/admin/analytics
```

Filters:

```text
date_from
date_to
category
course
location
source
```

---

# 50. Content API

Published content:

```text
GET /api/guides
GET /api/guides/:slug
GET /api/faqs
GET /api/awards
GET /api/testimonials
GET /api/success-stories
```

---

# 51. Admin Content API

Protected:

```text
POST   /api/admin/guides
PATCH  /api/admin/guides/:id
DELETE /api/admin/guides/:id
```

Same pattern for:

```text
Awards
Testimonials
Success Stories
FAQs
```

---

# 52. Media Upload API

Media should be uploaded through a secure server-controlled flow.

Example:

```text
POST /api/admin/media
```

Validate:

```text
File Type
File Size
Permission
```

---

# 53. Storage

Recommended:

```text
Supabase Storage
```

Buckets can be separated logically:

```text
college-images
awards
testimonials
success-stories
guides
site-assets
```

Private/internal files must use private storage policies.

---

# 54. API Pagination

List APIs should support:

```text
page
limit
```

or cursor pagination.

Example:

```text
GET /api/admin/leads?page=1&limit=25
```

Maximum limit should be enforced server-side.

---

# 55. API Filtering

Example:

```text
GET /api/admin/leads?
status=follow_up
&priority=high
&location=chennai
```

Validate all filter values.

---

# 56. API Sorting

Allow only approved sort fields.

Example:

```text
sort=created_at
order=desc
```

Never directly inject user-controlled SQL fragments.

---

# 57. API Search

Search input must be sanitized and safely passed to the database query layer.

Do not construct raw SQL using string concatenation.

---

# 58. Caching

Public college/course/location APIs can use caching.

Potentially cache:

```text
College Lists
College Details
Categories
Courses
Locations
Published Guides
```

CRM APIs should use much shorter caching or no caching.

---

# 59. Cache Invalidation

When admin publishes/updates:

```text
College
Course
Guide
Award
```

invalidate the relevant public cache.

---

# 60. Server-Side Secrets

Never expose:

```text
SUPABASE_SERVICE_ROLE_KEY
DATABASE_PASSWORD
PRIVATE_API_KEYS
SECRET_TOKENS
```

to the browser.

Use environment variables.

---

# 61. Environment Variables

Example:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

Only variables explicitly intended for browser use may use:

```text
NEXT_PUBLIC_
```

---

# 62. Service Layer

Business logic should not be duplicated across API routes.

Example:

```text
services/
    lead.service.ts
    college.service.ts
    counsellor.service.ts
    analytics.service.ts
```

---

# 63. Repository Layer

Database operations can be separated:

```text
repositories/
    lead.repository.ts
    college.repository.ts
    course.repository.ts
```

This keeps database logic organized.

---

# 64. Validation Layer

Centralize request schemas:

```text
schemas/
    lead.schema.ts
    college.schema.ts
    course.schema.ts
    followup.schema.ts
```

Use Zod or an equivalent validation library.

---

# 65. API Folder Structure

Recommended:

```text
app/
  api/
    colleges/
    courses/
    departments/
    locations/
    guidance/
    callback/
    analytics/
    admin/
      leads/
      colleges/
      courses/
      content/
      analytics/
```

Exact structure may change depending on framework conventions.

---

# 66. API Response Principle

Responses should be consistent.

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

---

# 67. Logging

Server logs should capture useful diagnostic information.

Do not log:

```text
Passwords
Authentication Tokens
Full Sensitive Student Data
Private Notes
```

---

# 68. Monitoring

Production should monitor:

```text
API Errors
Response Time
Failed Requests
Database Errors
Authentication Failures
Rate Limit Events
```

---

# 69. API Security Checklist

Before production:

```text
[ ] Authentication enabled
[ ] Authorization enabled
[ ] RLS policies tested
[ ] Input validation enabled
[ ] Rate limiting configured
[ ] Secrets protected
[ ] CORS configured correctly
[ ] Error messages sanitized
[ ] Logging configured
[ ] Sensitive fields protected
```

---

# 70. CORS

Only approved origins should access APIs when CORS configuration is required.

Do not use:

```text
Access-Control-Allow-Origin: *
```

for sensitive authenticated APIs unless there is a specific justified architecture.

---

# 71. CSRF / Request Security

Use framework-supported protections and secure cookie/session configurations.

Do not invent custom authentication mechanisms when a trusted framework/provider already provides the required security.

---

# 72. API Versioning

For the initial product:

```text
/api/...
```

is acceptable.

If breaking changes become necessary:

```text
/api/v2/...
```

can be introduced.

Do not version every minor change.

---

# 73. Idempotency

Operations such as lead creation may require duplicate-submission protection.

Example:

```text
Student clicks Submit twice
        ↓
Same request identifier
        ↓
Avoid duplicate processing
```

Implement where business risk justifies it.

---

# 74. Public API Performance

College discovery must feel fast.

Prioritize:

```text
Fast initial response
Small payloads
Pagination
Caching
Optimized database queries
Optimized images
```

---

# 75. API Accessibility

API errors should provide enough information for the UI to display useful messages.

Bad:

```text
Error 500
```

Better:

```text
We couldn't submit your request.
Please try again.
```

Internal logs can contain technical details.

---

# 76. API Testing

Test:

```text
Authentication
Authorization
Validation
CRUD
Pagination
Filtering
Search
Duplicate leads
Follow-ups
College publishing
RLS
Error handling
Rate limiting
```

---

# 77. Critical Security Tests

Verify:

```text
Student cannot access another student
Counsellor cannot access unauthorized lead
Public user cannot access CRM
Public user cannot access private college contact
Content manager cannot change system settings
Unauthorized user cannot publish college
```

---

# 78. API Development Order

Build in this order:

```text
1. Authentication
2. Database connection
3. Public college APIs
4. Search/filter APIs
5. Guidance/lead creation
6. CRM APIs
7. Counsellor APIs
8. Admin APIs
9. Content APIs
10. Analytics
11. Notifications
12. Advanced recommendation APIs
```

---

# 79. API Architecture Principle

```text
                    College Guide
                         │
              ┌──────────┴──────────┐
              ↓                     ↓
           Student                Admin
              │                     │
              ↓                     ↓
       Public APIs             Protected APIs
              │                     │
              └──────────┬──────────┘
                         ↓
                  Service Layer
                         ↓
                    PostgreSQL
```

---

# 80. Final API Principle

> **The API layer must protect the client's business data while making the student experience fast and simple. Public users should discover colleges and request guidance; only authorized College Guide staff should access and manage student leads, counselling information and internal business data.**

## FILE #26 — `AI_CONTEXT/API_ARCHITECTURE.md`

````md
# College Guide — API Architecture

## 1. Purpose

This document defines how the College Guide frontend, backend, database, authentication, CRM and external services communicate.

The architecture must be:

- Secure
- Scalable
- Maintainable
- Fast
- Type-safe
- Easy to debug
- Suitable for vibe coding
- Ready for future expansion

---

# 2. High-Level Architecture

```text
                    STUDENT
                       │
                       ↓
              ┌─────────────────┐
              │   College Guide │
              │    Frontend     │
              └────────┬────────┘
                       │
                       ↓
              ┌─────────────────┐
              │   API / Server  │
              │     Layer       │
              └───────┬─────────┘
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
     PostgreSQL    Storage     External APIs
     Database      Images      WhatsApp/etc.
          │
          ↓
       PRIVATE CRM
````

---

# 3. Recommended Stack

Frontend:

```text
Next.js
React
TypeScript
Tailwind CSS
```

Backend:

```text
Next.js Server Actions / Route Handlers
```

Database:

```text
PostgreSQL
Supabase
```

Authentication:

```text
Supabase Auth
```

Storage:

```text
Supabase Storage
```

---

# 4. API Principle

The frontend must NOT directly perform privileged database operations.

Use:

```text
Frontend
   ↓
Server/API
   ↓
Database
```

for sensitive operations.

---

# 5. Public APIs

Public APIs are used for:

```text
College Search
College Details
Courses
Categories
Locations
Guides
FAQs
Awards
Testimonials
```

Only published/approved data should be returned.

---

# 6. Private APIs

Private APIs are used for:

```text
Leads
Lead Notes
Follow-ups
Counsellor Assignment
Analytics
Admin Management
Content Management
```

Authentication and authorization are mandatory.

---

# 7. College API

Example:

```text
GET /api/colleges
```

Supports:

```text
search
category
course
location
department
page
limit
sort
```

Example:

```text
/api/colleges?category=engineering&location=chennai
```

---

# 8. College Detail API

```text
GET /api/colleges/[slug]
```

Returns:

```text
College
Location
Courses
Departments
Facilities
Media
Verification Status
```

Do NOT return private college contact information if the business rule prohibits direct student contact.

---

# 9. College Search API

```text
GET /api/colleges/search
```

Input:

```text
query
location
category
course
page
limit
```

The API must validate all query parameters.

---

# 10. Search Response

Example structure:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

Never return unlimited records.

---

# 11. Category API

```text
GET /api/categories
```

Returns active categories.

Example:

```text
Engineering
Medical
Nursing
Law
Arts & Science
```

---

# 12. Course API

```text
GET /api/courses
```

Optional filters:

```text
category
search
location
```

---

# 13. Location API

```text
GET /api/locations
```

Supports:

```text
state
district
city
area
```

---

# 14. Location Colleges API

```text
GET /api/locations/[slug]/colleges
```

Returns published colleges associated with the location.

---

# 15. Guide API

```text
GET /api/guides
GET /api/guides/[slug]
```

Only published guides should be publicly accessible.

---

# 16. Awards API

```text
GET /api/awards
```

Only approved public awards should be returned.

---

# 17. Testimonials API

```text
GET /api/testimonials
```

Only approved testimonials should be returned.

---

# 18. FAQ API

```text
GET /api/faqs
```

Only published FAQs should be returned.

---

# 19. Lead Creation API

This is a critical API.

```text
POST /api/leads
```

Request:

```json
{
  "name": "Stephen",
  "phone": "XXXXXXXXXX",
  "email": "optional",
  "categoryId": "uuid",
  "courseId": "uuid",
  "locationId": "uuid",
  "message": "Interested in CSE"
}
```

---

# 20. Lead API Security

The lead creation endpoint must:

```text
Validate input
Sanitize input
Rate limit requests
Prevent spam
Create lead
Create activity
Return safe response
```

Never trust frontend-submitted data.

---

# 21. Lead Response

Do not return internal CRM information.

Example:

```json
{
  "success": true,
  "message": "Your guidance request has been received."
}
```

Do not return:

```text
Counsellor private notes
Internal lead score
CRM IDs
Internal assignment details
```

---

# 22. WhatsApp Integration

Students should contact:

```text
College Guide
```

through WhatsApp.

Never expose individual college WhatsApp numbers if the business rule prohibits direct college contact.

---

# 23. WhatsApp Click Flow

```text
Student
   ↓
Click WhatsApp
   ↓
Track Event
   ↓
Open College Guide WhatsApp
```

The event may contain:

```text
page
college_id
course_id
location_id
```

Do not include unnecessary personal information.

---

# 24. Counsellor APIs

Authenticated counsellors may access authorized leads.

Example:

```text
GET /api/crm/leads
```

Supported filters:

```text
status
priority
assignedCounsellor
date
source
```

---

# 25. Lead Detail API

```text
GET /api/crm/leads/[id]
```

Only authorized staff can access it.

---

# 26. Update Lead

```text
PATCH /api/crm/leads/[id]
```

Possible updates:

```text
status
priority
assigned counsellor
```

All important changes should be audited.

---

# 27. Lead Notes API

```text
POST /api/crm/leads/[id]/notes
```

Notes are private.

Students must never be able to access this endpoint.

---

# 28. Follow-Up API

Create:

```text
POST /api/crm/leads/[id]/follow-ups
```

Read:

```text
GET /api/crm/follow-ups
```

Update:

```text
PATCH /api/crm/follow-ups/[id]
```

---

# 29. Counsellor Assignment API

```text
POST /api/crm/leads/[id]/assign
```

Only authorized users can assign leads.

Every assignment should be recorded.

---

# 30. Admin College API

Protected:

```text
POST /api/admin/colleges
PATCH /api/admin/colleges/[id]
DELETE /api/admin/colleges/[id]
```

Deletion should normally mean:

```text
Archive
```

rather than permanent deletion.

---

# 31. College Publishing

College publishing should follow:

```text
Draft
 ↓
Review
 ↓
Approved
 ↓
Published
```

Only authorized roles can publish.

---

# 32. Admin Course API

```text
POST /api/admin/courses
PATCH /api/admin/courses/[id]
```

Only authorized content/data managers can modify courses.

---

# 33. Admin Location API

```text
POST /api/admin/locations
PATCH /api/admin/locations/[id]
```

Location hierarchy must remain consistent.

---

# 34. Admin Awards API

```text
POST /api/admin/awards
PATCH /api/admin/awards/[id]
```

Awards must support:

```text
Draft
Review
Approved
Published
Archived
```

---

# 35. Admin Testimonial API

```text
POST /api/admin/testimonials
PATCH /api/admin/testimonials/[id]
```

Only approved testimonials should appear publicly.

---

# 36. Authentication

Use Supabase Auth.

Public students generally do not need an account for:

```text
College browsing
Course browsing
Location browsing
Basic search
Guidance request
WhatsApp
```

Accounts can be introduced later if required.

---

# 37. Admin Authentication

Admin/CRM users must authenticate.

Recommended:

```text
Email + Password
```

Optional future:

```text
Magic Link
OAuth
MFA
```

---

# 38. Authorization

Authentication answers:

```text
Who are you?
```

Authorization answers:

```text
What are you allowed to do?
```

Both must be implemented.

---

# 39. Role-Based Access

Example:

```text
Student
  ↓
Public features

Counsellor
  ↓
Assigned CRM leads

Content Manager
  ↓
Guides / FAQs / Testimonials / Awards

Data Manager
  ↓
Colleges / Courses / Locations

Admin
  ↓
Broader management

Super Admin
  ↓
System-level control
```

---

# 40. API Error Format

Use a consistent format.

Example:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please check the submitted information."
  }
}
```

Do not expose stack traces.

---

# 41. HTTP Status Codes

Use appropriate status codes.

```text
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Validation Error
429 Too Many Requests
500 Internal Server Error
```

---

# 42. Validation

Validate:

```text
Phone
Email
UUID
Slug
Pagination
Filters
Text length
Enum values
```

Use a shared schema validation library such as:

```text
Zod
```

---

# 43. API Rate Limiting

Apply rate limiting to public endpoints that can be abused.

Especially:

```text
POST /api/leads
POST /api/contact
Search endpoints
Authentication endpoints
```

---

# 44. Spam Prevention

Lead forms should have anti-spam protection.

Possible methods:

```text
Rate Limiting
Bot Detection
Honeypot
CAPTCHA when necessary
```

Do not make the user experience unnecessarily difficult.

---

# 45. Pagination

Never return thousands of colleges in one API response.

Use:

```text
page
limit
```

or cursor pagination where appropriate.

Recommended initial limit:

```text
20
```

---

# 46. Sorting

Supported sorting may include:

```text
name
location
created_at
updated_at
```

Do not create unsupported "best" rankings without a legitimate ranking methodology.

---

# 47. Filtering

Filtering should happen server-side.

Example:

```text
Category
Location
Course
Department
Facility
```

Avoid downloading the entire college database to the browser just to filter it.

---

# 48. API Caching

Public data can be cached.

Good candidates:

```text
Categories
Courses
Locations
Published College Data
Guides
FAQs
```

Private CRM data should not use public caching.

---

# 49. Cache Invalidation

When published content changes:

```text
Database Update
 ↓
Invalidate Cache
 ↓
Fresh API Response
```

Do not allow stale critical information to remain indefinitely.

---

# 50. API Logging

Log important server events:

```text
Request ID
Endpoint
Status
Duration
Error Code
User Role
```

Do not log:

```text
Passwords
Access Tokens
Private Notes
Sensitive Personal Data
```

---

# 51. Request IDs

Every API request should have a request identifier where practical.

Example:

```text
request_id
```

This helps debug production issues.

---

# 52. Database Transactions

Use transactions for operations involving multiple related writes.

Example:

```text
Create Lead
 ↓
Create Lead Activity
 ↓
Assign Counsellor
```

If a critical step fails, the operation should not leave inconsistent data.

---

# 53. Lead Creation Transaction

Preferred:

```text
BEGIN
 ↓
Create Lead
 ↓
Create Lead Activity
 ↓
Optional Assignment
 ↓
COMMIT
```

---

# 54. API Architecture Rule

Business logic should not be duplicated across:

```text
Frontend
Admin Dashboard
API
```

Centralize important business rules in server-side services.

---

# 55. Service Layer

Recommended structure:

```text
lib/
  services/
    colleges/
    leads/
    courses/
    locations/
    analytics/
```

Example:

```text
leadService.createLead()
collegeService.searchColleges()
collegeService.getCollegeBySlug()
```

---

# 56. Repository / Data Access

Database access should be organized rather than scattered throughout UI components.

Example:

```text
lib/
  repositories/
    collegeRepository
    leadRepository
    courseRepository
```

---

# 57. API Folder Structure

Recommended Next.js structure:

```text
app/
  api/
    colleges/
    courses/
    locations/
    guides/
    leads/
    crm/
    admin/
```

Exact implementation may vary depending on the chosen architecture.

---

# 58. Public vs Private API

Clearly separate:

```text
/api/colleges
/api/courses
/api/locations
```

from:

```text
/api/crm/*
/api/admin/*
```

This makes authorization easier to reason about.

---

# 59. Direct College Contact Protection

This is a critical business rule.

Never create a public endpoint such as:

```text
GET /api/colleges/[id]/contact
```

if it returns direct college phone/email/WhatsApp information.

The student-facing system must route communication to:

```text
College Guide
```

---

# 60. Student Contact Flow

```text
Student
   ↓
College Page
   ↓
Need Help?
   ↓
College Guide
   ├── Guidance Form
   └── WhatsApp
```

Never:

```text
Student
   ↓
College
```

through the College Guide platform.

---

# 61. SEO API Considerations

Public APIs should provide enough verified information for server-rendered pages.

Important:

```text
College Name
Slug
Description
Location
Courses
Departments
Media
```

---

# 62. Server-Side Rendering

Important SEO pages should preferably use:

```text
Server Rendering
or
Static Generation / Incremental Regeneration
```

where appropriate.

Especially:

```text
College Pages
Course Pages
Location Pages
Guide Pages
```

---

# 63. Dynamic Routes

Example:

```text
app/colleges/[slug]/page.tsx
app/courses/[slug]/page.tsx
app/locations/[slug]/page.tsx
app/guides/[slug]/page.tsx
```

---

# 64. API + SEO Flow

```text
Search Engine
     ↓
Next.js Page
     ↓
Server Data Fetch
     ↓
API / Database
     ↓
Rendered HTML
```

This helps search engines access important content.

---

# 65. Security Headers

Production should configure appropriate security headers.

Consider:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Do not blindly copy a CSP without testing the application's required resources.

---

# 66. CORS

Avoid overly permissive CORS.

Do not use:

```text
Access-Control-Allow-Origin: *
```

for private APIs.

Only allow required origins.

---

# 67. Secrets

All secrets must remain in environment variables.

Example:

```text
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
WHATSAPP_API_KEY
```

The exact environment variable names may be adjusted during implementation.

---

# 68. Frontend Environment Variables

Only intentionally public values may use:

```text
NEXT_PUBLIC_*
```

Never expose:

```text
SERVICE_ROLE_KEY
DATABASE_PASSWORD
PRIVATE_API_KEY
```

to the browser.

---

# 69. External Services

Potential integrations:

```text
Supabase
WhatsApp
Email
Analytics
Maps
```

Each integration must be isolated behind a service layer.

---

# 70. WhatsApp Service

Recommended abstraction:

```text
services/
  whatsapp/
```

Possible functions:

```text
trackWhatsAppClick()
generateWhatsAppLink()
sendWhatsAppMessage()
```

The implementation depends on whether the client uses simple WhatsApp links or the WhatsApp Business API.

---

# 71. Email Service

If email notifications are implemented:

```text
services/
  email/
```

Use templates.

Potential notifications:

```text
New Lead
Follow-up Reminder
Lead Assignment
```

---

# 72. Maps Service

If maps are implemented:

```text
services/
  maps/
```

Maps should support discovery without exposing restricted direct contact information.

---

# 73. Analytics Service

Centralize analytics tracking:

```text
trackEvent()
```

Examples:

```text
trackEvent("college_view")
trackEvent("search")
trackEvent("shortlist")
trackEvent("compare")
trackEvent("guidance_submit")
trackEvent("whatsapp_click")
```

---

# 74. API Testing

Every critical endpoint should have tests.

Priority:

```text
Lead Creation
Authentication
Authorization
College Search
College Detail
Admin College Update
Counsellor Assignment
Follow-up
```

---

# 75. API Validation Checklist

Before production:

```text
[ ] Authentication works
[ ] Authorization works
[ ] RLS tested
[ ] Validation tested
[ ] Rate limits tested
[ ] Error responses consistent
[ ] Pagination works
[ ] Search works
[ ] Filters work
[ ] No private data leaks
```

---

# 76. API Documentation

Maintain endpoint documentation.

For every endpoint define:

```text
Method
Path
Authentication
Request
Response
Validation
Errors
Permissions
```

---

# 77. Versioning

For a first release, simple routes may be sufficient.

If public API compatibility becomes important later:

```text
/api/v1/...
```

can be introduced.

Do not add unnecessary versioning complexity prematurely.

---

# 78. API Performance Target

Important public APIs should respond quickly.

Optimize:

```text
Database queries
Indexes
Payload size
Caching
Images
Server-side processing
```

Do not optimize prematurely without measurements.

---

# 79. API Principle for Vibe Coding

AI-generated code must follow this flow:

```text
UI
 ↓
Typed API Function
 ↓
Validation
 ↓
Service Layer
 ↓
Database
 ↓
Typed Response
```

Do not allow AI to randomly create direct database calls inside UI components.

---

# 80. Final Architecture

```text
                  ┌─────────────────┐
                  │    Students     │
                  └────────┬────────┘
                           ↓
                  ┌─────────────────┐
                  │    Next.js UI   │
                  └────────┬────────┘
                           ↓
                  ┌─────────────────┐
                  │ API / Services  │
                  └───────┬─────────┘
                          │
          ┌───────────────┼────────────────┐
          ↓               ↓                ↓
    ┌──────────┐    ┌───────────┐   ┌────────────┐
    │ Supabase │    │ Storage   │   │ External   │
    │ Postgres │    │           │   │ Services   │
    └────┬─────┘    └───────────┘   └────────────┘
         │
         ↓
   ┌───────────────┐
   │ Private CRM   │
   ├───────────────┤
   │ Leads         │
   │ Counsellors   │
   │ Follow-ups    │
   │ Notes         │
   │ Analytics     │
   └───────────────┘
```

---

# 81. Final API Principle

> The API layer is the security and business-logic boundary of College Guide.

The frontend should never be trusted with privileged operations.

The architecture must ensure:

```text
Student
  ↓
Discover Colleges
  ↓
Explore Information
  ↓
Compare / Shortlist
  ↓
Contact College Guide
  ↓
Lead Created
  ↓
Counsellor
  ↓
Follow-up
  ↓
Conversion
```

while keeping all private CRM information securely separated from the public student experience.

```
```
