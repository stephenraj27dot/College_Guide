## FILE #27 — `AI_CONTEXT/SECURITY.md`

````md
# College Guide — Security Architecture

## 1. Purpose

This document defines the security standards for College Guide.

Security is critical because the system handles:

- Student enquiries
- Phone numbers
- Email addresses
- CRM leads
- Counsellor information
- Admin accounts
- College information
- Client achievements
- Analytics

The application must follow a secure-by-default architecture.

---

# 2. Core Security Principle

Never trust the client.

```text
Browser
   ↓
Untrusted Input
   ↓
Validation
   ↓
Authorization
   ↓
Business Logic
   ↓
Database
````

Frontend validation is useful for UX but is never a security boundary.

---

# 3. Security Priorities

Priority order:

```text
1. Authentication
2. Authorization
3. Database security
4. Input validation
5. Data privacy
6. API security
7. File security
8. Monitoring
9. Backup and recovery
```

---

# 4. Authentication

Use Supabase Auth.

Authentication is required for:

```text
Admin Dashboard
Counsellor Dashboard
Content Management
Data Management
CRM
```

Public students do not need an account for basic college discovery.

---

# 5. Password Security

Never store passwords manually.

Do not create a custom password table.

Use the authentication provider.

Never log:

```text
Passwords
Authentication tokens
Reset tokens
Session secrets
```

---

# 6. Role-Based Access Control

Roles:

```text
student
counsellor
content_manager
data_manager
admin
super_admin
```

Permissions must be checked server-side.

---

# 7. Authorization

Every protected operation must verify:

```text
Is the user authenticated?
        ↓
What is the user's role?
        ↓
Is this role allowed?
        ↓
Does this user have access to this specific record?
```

Never rely only on hiding UI buttons.

---

# 8. Counsellor Security

Counsellors should normally access only:

```text
Assigned Leads
Authorized Lead Activities
Authorized Follow-ups
```

They should not automatically access:

```text
Other Counsellors' private notes
System settings
User management
Database administration
```

---

# 9. Admin Security

Admin permissions should be separated from super-admin permissions.

Example:

```text
Admin
 ↓
Content + Data + CRM Management

Super Admin
 ↓
Users + Roles + Critical System Settings
```

---

# 10. Database Row Level Security

Supabase PostgreSQL RLS must be enabled for private tables.

Important tables:

```text
leads
lead_notes
lead_activities
lead_assignments
follow_ups
student_profiles
audit_logs
```

---

# 11. Public Database Access

Public users should only access approved public information.

Examples:

```text
Published Colleges
Published Courses
Published Locations
Published Guides
Approved Awards
Approved Testimonials
```

Never expose private CRM records.

---

# 12. Direct College Contact Protection

This is a critical business requirement.

Students must NOT be given direct college contact information through College Guide.

Do not expose:

```text
College Phone Number
College WhatsApp
College Email
Private College Contact Person
```

when those details could bypass the client.

Instead:

```text
Student
   ↓
College Guide
   ↓
Counsellor
   ↓
College Guidance
```

---

# 13. Student Contact Flow

The only public contact destination should be College Guide.

```text
College Page
     ↓
Need Guidance?
     ↓
WhatsApp College Guide
     OR
Guidance Form
```

---

# 14. Lead Form Security

Lead forms must protect against:

```text
Spam
Bot submissions
SQL injection
XSS
Malformed data
Mass requests
```

Use:

```text
Server-side validation
Rate limiting
Sanitization
Bot protection where necessary
```

---

# 15. Input Validation

Validate every external input.

Examples:

```text
Name
Phone
Email
UUID
Slug
Search Query
Pagination
Filter Values
Message
```

Use a validation library such as:

```text
Zod
```

---

# 16. Input Length Limits

Set sensible limits.

Example:

```text
Name: 100 characters
Email: 255 characters
Phone: appropriate phone length
Message: 2000 characters
Search: 200 characters
```

Exact limits may be adjusted during implementation.

---

# 17. XSS Protection

Never render user-generated HTML directly.

Avoid:

```text
dangerouslySetInnerHTML
```

unless absolutely necessary and content has been properly sanitized.

User-generated content should be treated as plain text by default.

---

# 18. SQL Injection Protection

Never construct SQL queries by concatenating raw user input.

Bad:

```text
"SELECT * FROM colleges WHERE name = '" + search + "'"
```

Use:

```text
Parameterized Queries
Supabase Query Builder
ORM-safe queries
```

---

# 19. CSRF Protection

For state-changing requests, use appropriate framework protections and secure cookie/session handling.

Do not assume that a public POST endpoint is automatically safe.

---

# 20. Rate Limiting

Rate-limit sensitive endpoints.

Priority endpoints:

```text
POST /api/leads
POST /api/contact
POST /api/auth/*
POST /api/search
POST /api/whatsapp
```

---

# 21. Brute Force Protection

Admin authentication must be protected against repeated login attempts.

Use:

```text
Rate Limiting
Authentication Provider Protections
MFA where appropriate
```

---

# 22. Session Security

Sessions must:

```text
Expire appropriately
Use secure cookies where applicable
Use HTTPS in production
Be invalidated when necessary
```

Never store sensitive session secrets in localStorage unnecessarily.

---

# 23. HTTPS

Production must use HTTPS.

Never send:

```text
Passwords
Phone numbers
Authentication tokens
CRM information
```

over insecure HTTP.

---

# 24. Environment Variables

Secrets must remain in environment variables.

Examples:

```text
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
PRIVATE_API_KEYS
```

Never hardcode secrets in source code.

---

# 25. Public Environment Variables

Only intentionally public values may be exposed to the browser.

Example:

```text
NEXT_PUBLIC_SUPABASE_URL
```

Never expose:

```text
SERVICE_ROLE_KEY
DATABASE_PASSWORD
PRIVATE_API_KEY
```

---

# 26. Service Role Key

The Supabase service-role key is highly privileged.

It must:

```text
Never be sent to browser
Never be committed to Git
Never be included in client-side bundles
Never be exposed in API responses
```

Use only on trusted server-side environments.

---

# 27. Git Security

Never commit:

```text
.env
.env.local
API Keys
Passwords
Private Certificates
Service Role Keys
Database Credentials
```

Use:

```text
.env.example
```

with placeholder values.

---

# 28. Secrets Rotation

If a secret is accidentally exposed:

```text
Detect
 ↓
Revoke
 ↓
Rotate
 ↓
Update Environment
 ↓
Review Logs
```

Do not simply delete the secret from source code and assume it is safe.

---

# 29. API Security

Every protected API must verify authorization.

Example:

```text
GET /api/crm/leads
```

must verify:

```text
Authenticated?
Correct role?
Allowed records?
```

---

# 30. API Error Security

Never return internal errors such as:

```text
Database connection string
Stack trace
SQL query
Environment variables
File paths
Internal service details
```

Return safe messages.

Example:

```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "Something went wrong. Please try again."
  }
}
```

---

# 31. Enumeration Protection

Do not expose whether private records exist.

Example:

Bad:

```text
"Lead CG-2026-001 exists but you are not authorized."
```

Prefer:

```text
"Resource not found."
```

when appropriate.

---

# 32. Student Privacy

Collect only information required for:

```text
College Guidance
Lead Management
Communication
Analytics
```

Avoid unnecessary personal information.

---

# 33. Student Data

Potential personal data:

```text
Name
Phone
Email
Course Preference
Location Preference
Message
```

Access must be restricted.

---

# 34. CRM Privacy

Private CRM information includes:

```text
Lead Notes
Counsellor Notes
Lead Priority
Internal Status
Internal Assignments
Follow-up Details
```

Never expose these through public college pages or public APIs.

---

# 35. Audit Logging

Important administrative actions should be logged.

Examples:

```text
College Created
College Updated
College Published
College Archived
Lead Assigned
Lead Status Changed
Award Published
Testimonial Published
User Role Changed
```

---

# 36. Audit Log Protection

Audit logs should be:

```text
Append-oriented
Restricted
Not publicly editable
Accessible only to authorized staff
```

---

# 37. File Upload Security

Uploaded files include:

```text
College Images
Award Images
Achievement Images
Testimonial Images
Guide Images
```

Validate:

```text
File Type
File Size
File Extension
Content Type
```

---

# 38. Allowed Image Types

Recommended:

```text
JPEG
PNG
WebP
AVIF where supported
```

Do not blindly trust file extensions.

Validate the actual uploaded file.

---

# 39. File Size Limits

Set upload limits appropriate to the use case.

Example:

```text
Images: 5–10 MB maximum
```

Exact limits can be adjusted based on production requirements.

---

# 40. File Names

Never use raw user-provided filenames as trusted storage paths.

Generate safe unique filenames.

Example:

```text
college-campus-uuid.webp
```

---

# 41. Storage Access

Public media:

```text
Approved College Images
Approved Awards
Approved Testimonials
```

can use controlled public access where appropriate.

Private files must use restricted storage policies.

---

# 42. Image Processing

Uploaded images should preferably be:

```text
Validated
Resized
Optimized
Compressed
```

before serving them publicly.

---

# 43. Content Security

Client-provided awards and achievements must be reviewed before publication.

Workflow:

```text
Upload
 ↓
Review
 ↓
Approve
 ↓
Publish
```

Never automatically publish unverified client materials.

---

# 44. Trust & Awards

Awards are important for building student trust.

However:

```text
Never invent awards
Never modify award claims
Never create fake testimonials
Never generate fake student success stories
```

Only use information supplied and approved by the client.

---

# 45. SEO Security

Prevent malicious users from injecting:

```text
Scripts
HTML
Redirects
Malicious Metadata
```

into:

```text
SEO Title
Meta Description
Slug
OG fields
Guide content
```

---

# 46. Redirect Security

Never allow unrestricted user-controlled redirects.

Avoid patterns like:

```text
/redirect?url=<any-external-url>
```

without validation.

Otherwise the site can become an open redirect.

---

# 47. External Links

External URLs should be validated where they are entered by admins.

For college websites and references:

```text
HTTPS URLs
Valid domain
Approved by authorized staff
```

---

# 48. WhatsApp Security

The WhatsApp CTA must always point to the official College Guide contact.

Never expose internal counsellor numbers unless intentionally configured.

Do not place API credentials inside WhatsApp URLs.

---

# 49. Analytics Privacy

Analytics should avoid collecting unnecessary personal information.

Do not send:

```text
Passwords
Private CRM Notes
Sensitive form content
Authentication Tokens
```

to analytics platforms.

---

# 50. Search Privacy

Do not store every search query permanently if there is no business need.

If search analytics are collected:

```text
Minimize Data
Avoid Sensitive Queries
Apply Retention Rules
```

---

# 51. Database Backups

Production database backups must be enabled.

Before major migrations:

```text
Backup
 ↓
Migration
 ↓
Test
 ↓
Verify
```

---

# 52. Disaster Recovery

The system should have a recovery plan for:

```text
Database Failure
Accidental Data Deletion
Bad Migration
Compromised Credentials
Service Outage
```

---

# 53. Dependency Security

Keep dependencies updated.

Monitor:

```text
Next.js
React
Supabase SDK
Authentication Libraries
UI Libraries
Validation Libraries
```

Do not blindly update production dependencies without testing.

---

# 54. Dependency Principle

Before adding a package:

```text
Do we really need it?
Is it maintained?
Does it have known vulnerabilities?
Does it significantly increase bundle size?
```

Avoid unnecessary dependencies.

---

# 55. Security Headers

Configure appropriate headers such as:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Test CSP carefully so legitimate application functionality is not broken.

---

# 56. CORS

Use restrictive CORS rules.

Private APIs should not allow arbitrary origins.

Avoid:

```text
*
```

for sensitive endpoints.

---

# 57. Admin Dashboard Security

Admin dashboard must:

```text
Require Authentication
Require Authorization
Use HTTPS
Prevent unauthorized API access
Use secure sessions
Log important actions
```

---

# 58. Admin UI Security

Hiding a menu item is NOT authorization.

Bad:

```text
if (role === "admin") {
  showDeleteButton()
}
```

This only controls the interface.

The server must independently verify permission.

---

# 59. Delete Protection

Critical records should not have unrestricted permanent deletion.

Prefer:

```text
Archive
 ↓
Audit
 ↓
Optional permanent deletion by Super Admin
```

---

# 60. Database Constraints

Security should also exist at database level.

Use:

```text
Foreign Keys
Unique Constraints
Check Constraints
Not Null
RLS Policies
```

where appropriate.

---

# 61. Security Testing

Before production test:

```text
Unauthorized API Access
Role Escalation
IDOR
SQL Injection
XSS
CSRF
Rate Limits
File Upload Abuse
Open Redirects
Sensitive Data Exposure
```

---

# 62. IDOR Protection

Never assume knowing a record ID means the user can access it.

Example:

```text
/api/crm/leads/[id]
```

must verify that the authenticated counsellor has permission to access that lead.

---

# 63. Privilege Escalation

A counsellor must not be able to change their own role by modifying:

```text
role=super_admin
```

in a request.

Role changes must only be performed through authorized server-side workflows.

---

# 64. Mass Assignment Protection

Do not blindly accept all fields from a request.

Bad:

```text
database.update(request.body)
```

Instead explicitly select allowed fields.

Example:

```text
Allowed:
status
priority
message
```

Do not accept:

```text
role
created_at
assigned_by
internal_permissions
```

from untrusted clients.

---

# 65. Security Monitoring

Monitor:

```text
Repeated Failed Logins
Unusual Lead Creation
Abnormal API Traffic
Permission Errors
Repeated 403/401
Large File Uploads
Suspicious Requests
```

---

# 66. Incident Response

If a security incident occurs:

```text
1. Identify
2. Contain
3. Revoke compromised credentials
4. Preserve logs
5. Fix vulnerability
6. Rotate secrets
7. Restore if necessary
8. Review
9. Document
```

---

# 67. Production Checklist

Before launch:

```text
[ ] HTTPS enabled
[ ] Auth configured
[ ] RLS enabled
[ ] Roles tested
[ ] API authorization tested
[ ] Rate limiting enabled
[ ] Input validation enabled
[ ] Secrets secured
[ ] .env excluded from Git
[ ] File uploads restricted
[ ] Audit logs enabled
[ ] Error responses sanitized
[ ] Security headers configured
[ ] CORS configured
[ ] Backups enabled
[ ] Dependency audit completed
```

---

# 68. Vibe Coding Security Rule

AI-generated code must NEVER be accepted blindly.

For every security-sensitive change:

```text
Read Existing Architecture
        ↓
Understand Permission Model
        ↓
Implement
        ↓
Review
        ↓
Test
        ↓
Only Then Merge
```

AI must not:

* Disable RLS
* Expose service-role keys
* Bypass authentication
* Remove validation
* Make CRM APIs public
* Expose direct college contacts
* Store passwords manually

---

# 69. Final Security Architecture

```text
                    INTERNET
                        │
                        ↓
                  HTTPS / CDN
                        │
                        ↓
                ┌──────────────┐
                │   Next.js    │
                └──────┬───────┘
                       │
                Authentication
                       │
                Authorization
                       │
                Input Validation
                       │
                Business Logic
                       │
                 ┌─────┴─────┐
                 ↓           ↓
             Public       Private
              Data          CRM
                 │           │
                 ↓           ↓
             Colleges      Leads
             Courses       Notes
             Locations     Follow-ups
             Guides        Assignments
                 │           │
                 └─────┬─────┘
                       ↓
                  PostgreSQL
                    + RLS
```

---

# 70. Final Security Principle

> College Guide must be designed so that even if a user manipulates the browser, API request, URL, or frontend code, they still cannot access information or perform actions they are not authorized to perform.

The most important business security rule is:

```text
Student
   ↓
College Discovery
   ↓
College Information
   ↓
College Guide Contact
   ↓
Lead
   ↓
Counsellor
```

Never allow the platform to accidentally become a direct bridge between students and colleges.

```
```
