# College Guide — Security & Privacy Specification

## 1. Purpose

This document defines the security, privacy, access-control, and data-protection requirements for the College Guide platform.

Security must be implemented from the beginning of development.

Do not treat security as a final-stage feature.

---

# 2. Core Security Principle

> Never trust data coming from the browser.

All important validation, authentication, authorization, and business rules must be enforced on the server.

---

# 3. Protected Data

The following information must be treated as private:

- Student name
- Phone number
- Email
- Student preferences
- Enquiries
- Lead information
- Lead status
- Lead score
- Counsellor notes
- Follow-up information
- Internal admin information
- Authentication information

---

# 4. Public Data

Only intentionally published information may be publicly accessible.

Examples:

- College name
- College location
- Public courses
- Public departments
- Public facilities
- Approved images
- Approved awards
- Approved testimonials
- Published guides

---

# 5. Critical Business Privacy Rule

Students must contact **College Guide**, not the college directly.

The platform must NOT expose:

- College phone numbers
- College WhatsApp numbers
- Direct admission contact numbers
- Private college email addresses
- Internal college contact information

unless explicitly approved by the client later.

---

# 6. Authentication

Use Supabase Authentication.

Authentication should support the final methods approved for the product.

Possible methods:

- Email/password
- OTP
- Google authentication

Do not implement unnecessary authentication methods.

---

# 7. Session Security

Authenticated sessions must be handled securely.

Never store authentication tokens manually in:

- localStorage
- query parameters
- public database fields

Use the framework/Supabase recommended secure authentication flow.

---

# 8. Role-Based Access Control

The platform must support role-based permissions.

Initial roles:

```text
student
counsellor
content_manager
admin
super_admin
````

---

# 9. Student Permissions

Students may:

* View public colleges
* View public courses
* View departments
* Search
* Filter
* Shortlist colleges
* Compare colleges
* Manage their own profile
* Submit enquiries
* Request callbacks
* View their own activity where appropriate

Students must NOT:

* View other students
* View leads
* View counsellor notes
* View admin dashboard
* Modify college data
* View internal business information

---

# 10. Counsellor Permissions

Counsellors may access only leads assigned to them or otherwise permitted by the business rules.

They may:

* View authorised leads
* Contact students
* Add notes
* Update lead status
* Schedule follow-ups
* View permitted student preferences

They must NOT:

* Modify system configuration
* Delete important records without permission
* Access unrelated administrative data

---

# 11. Content Manager Permissions

Content managers may manage approved content such as:

* Colleges
* Courses
* Departments
* Guides
* Awards
* Testimonials
* Success stories
* Images

They must not automatically receive access to private student/lead information.

---

# 12. Admin Permissions

Admins may manage:

* Students
* Leads
* Colleges
* Courses
* Departments
* Locations
* Content
* Counsellors
* Analytics
* Business configuration

Sensitive actions should still be audited.

---

# 13. Super Admin

Super admin has the highest application-level privileges.

Super admin may:

* Manage admins
* Manage roles
* Manage permissions
* Configure important settings
* Review audit logs
* Perform sensitive administrative actions

Super admin actions must be audited.

---

# 14. Database Security

Supabase Row Level Security (RLS) must be enabled for private tables.

Never rely only on frontend route protection.

---

# 15. RLS Principle

Database policies must follow:

> Users can only access the records they are authorised to access.

Example:

A student can read their own profile.

A student must not read another student's profile by changing an ID in a request.

---

# 16. Student Profile RLS

Students may:

```text
SELECT → own profile
UPDATE → own profile
```

They must not:

```text
SELECT → other students
UPDATE → other students
DELETE → other students
```

---

# 17. Shortlist RLS

Students may only:

```text
SELECT → own shortlist
INSERT → own shortlist
DELETE → own shortlist
```

---

# 18. Enquiry RLS

Students may create their own enquiry.

Students should only see enquiries that belong to them.

Internal staff access must be controlled by role.

---

# 19. Lead Security

Lead records are highly sensitive.

Students must never directly access internal lead records.

Lead data should only be accessible to authorised internal users.

---

# 20. Counsellor Lead Access

A counsellor should only access leads permitted by the assignment/business rules.

Do not assume:

```text
authenticated = authorised
```

Authentication only proves identity.

Authorization determines what the user can access.

---

# 21. Admin Route Protection

Every admin page must verify:

1. User is authenticated
2. User has required role
3. User has permission for the requested action

---

# 22. API Authorization

API endpoints must perform authorization independently.

Never depend only on frontend checks such as:

```text
if (user.role === "admin")
```

Frontend checks improve UX but are NOT security.

---

# 23. Input Validation

Validate every user-controlled input.

Examples:

* Name
* Phone
* Email
* Search
* UUID
* Location
* Course
* Department
* Message
* Notes
* File uploads

Use schema validation such as Zod.

---

# 24. SQL Injection Protection

Never construct raw SQL using untrusted user input.

Prefer:

* Supabase query builder
* Parameterized queries
* Safe server-side database functions

---

# 25. XSS Protection

User-generated content must be safely rendered.

Do not directly inject arbitrary HTML.

Be especially careful with:

* Student messages
* Admin-entered content
* College descriptions
* Testimonials
* Guides
* Rich text

---

# 26. HTML / Rich Text

If rich text is supported:

1. Sanitize HTML
2. Allow only approved tags
3. Remove scripts
4. Remove unsafe attributes
5. Validate server-side

Never trust HTML submitted by an admin merely because the user is an admin.

---

# 27. CSRF Protection

Use the framework's recommended protections for state-changing requests.

Do not build custom authentication mechanisms unnecessarily.

---

# 28. Rate Limiting

Rate-limit sensitive public operations.

Especially:

```text
Login
OTP
Contact forms
Enquiries
Callback requests
Public mutations
Search where abuse is possible
```

---

# 29. Spam Protection

Public enquiry forms must have anti-abuse protection.

Possible mechanisms:

* Rate limiting
* CAPTCHA / Turnstile if required
* Duplicate detection
* Server-side validation

Do not make the student experience unnecessarily difficult.

---

# 30. Duplicate Lead Protection

Repeated submissions from the same student should be intelligently handled.

The system should avoid generating dozens of identical leads from accidental repeated clicks.

---

# 31. Sensitive Data in URLs

Never put sensitive information in URLs.

Bad:

```text
/leads?phone=9876543210
```

Good:

```text
/admin/leads/lead-id
```

Even then, authorization must still be checked.

---

# 32. Logging

Logs must not expose sensitive information unnecessarily.

Do NOT log:

* Passwords
* Authentication tokens
* OTPs
* Full payment information
* Unnecessary personal information

---

# 33. Audit Logs

Important administrative actions should be recorded.

Examples:

```text
College created
College updated
College published
Lead assigned
Lead status changed
Student record accessed
Admin role changed
Award published
Content deleted
```

Audit record should include:

```text
actor
action
target
timestamp
```

Only store additional metadata when necessary.

---

# 34. Admin Security

Admin accounts should use strong authentication.

Recommended:

* Strong passwords
* MFA where supported
* Session protection
* Role-based access
* Audit logging

---

# 35. Environment Variables

Secrets must never be committed to Git.

Examples:

```text
DATABASE_SECRET
SUPABASE_SERVICE_ROLE_KEY
PRIVATE_API_KEYS
WEBHOOK_SECRETS
```

Use environment variables.

---

# 36. Public Environment Variables

Only values explicitly designed to be public may use public environment variables.

Never expose:

```text
service role keys
database passwords
private API keys
admin secrets
```

to the browser.

---

# 37. Supabase Service Role Key

The Supabase service role key is highly privileged.

It must:

* Never be exposed to client-side code
* Never be committed to Git
* Only be used server-side
* Be protected as a secret

---

# 38. Storage Security

Uploaded files must have appropriate storage policies.

Public assets may include:

* Approved college images
* Approved award images
* Approved testimonial images

Private assets may include internal documents or restricted files.

---

# 39. File Upload Validation

Validate:

```text
File type
File size
File name
Content type
Storage location
User permission
```

Do not rely only on file extension.

---

# 40. Image Upload Limits

Set reasonable limits for:

* Maximum file size
* Maximum dimensions where appropriate
* Allowed formats

Recommended public image formats:

```text
WebP
JPEG
PNG
```

Use WebP where practical for website performance.

---

# 41. File Names

Do not trust user-provided file names.

Generate safe storage names.

Example:

```text
award-uuid.webp
college-image-uuid.webp
```

---

# 42. Privacy by Design

Only collect information that is genuinely required.

Do not ask students for unnecessary personal information.

---

# 43. Student Contact Information

Phone numbers and email addresses must be treated as private.

They should only be visible to authorised internal users who require them.

---

# 44. Data Minimization

Store only the information required for:

* Student guidance
* Lead management
* Analytics
* Communication
* Product functionality

Avoid collecting unnecessary personal details.

---

# 45. Analytics Privacy

Analytics should use aggregated data wherever possible.

Example:

Good:

```text
120 students viewed Engineering colleges.
```

Avoid exposing:

```text
Stephen viewed College A at 7:42 PM.
```

to users who do not need that information.

---

# 46. Activity Tracking

Track useful events such as:

```text
college_viewed
college_shortlisted
college_compared
search_performed
recommendation_generated
enquiry_submitted
callback_requested
whatsapp_clicked
```

Do not track unnecessary personal behaviour.

---

# 47. Location Privacy

If location features are implemented:

* Ask for permission when required
* Explain why location is needed
* Do not expose exact student coordinates
* Prefer approximate location for recommendations
* Do not permanently store precise location unless genuinely required

---

# 48. WhatsApp Privacy

WhatsApp actions should route to the official College Guide contact.

Do not expose student information in public URLs or messages unnecessarily.

---

# 49. Contact Form Privacy

Student messages must only be accessible to authorised staff.

Do not expose enquiries through public API endpoints.

---

# 50. Error Messages

Public users should receive safe messages.

Good:

```text
Something went wrong. Please try again.
```

Bad:

```text
PostgreSQL error: relation leads does not exist
```

---

# 51. Security Headers

The production application should use appropriate security headers.

Review:

* Content Security Policy
* X-Content-Type-Options
* Referrer Policy
* Frame protections
* Permissions Policy

Only configure headers that are compatible with the application's actual functionality.

---

# 52. HTTPS

Production traffic must use HTTPS.

Never transmit student personal information over plain HTTP.

---

# 53. Dependency Security

Keep dependencies updated.

Before production:

* Review vulnerable packages
* Remove unnecessary dependencies
* Lock dependency versions appropriately
* Run security checks

---

# 54. Git Security

Never commit:

```text
.env
.env.local
private keys
service role keys
passwords
tokens
database dumps containing personal data
```

---

# 55. Git Ignore

The project should include appropriate `.gitignore` rules.

At minimum, review:

```text
.env
.env.local
.env.*.local
node_modules
.next
```

---

# 56. Database Backups

Production database backups must be configured according to the selected Supabase plan and business requirements.

Important business data should be recoverable.

---

# 57. Data Deletion

The system should support an appropriate process for deleting or anonymising student data when required by the business/privacy policy.

Do not permanently delete records automatically without a defined policy.

---

# 58. Soft Delete

For important business records, prefer soft deletion where appropriate.

Example:

```text
deleted_at
```

This is especially useful for:

* Colleges
* Courses
* Leads
* Content
* Users

Final implementation depends on business requirements.

---

# 59. Data Retention

Define retention periods for:

* Student enquiries
* Leads
* Activity data
* Audit logs

Do not retain personal data forever without a business reason.

---

# 60. Privacy Policy

The production website must contain a Privacy Policy appropriate to the actual data collected.

The policy must accurately describe:

* Data collected
* Why it is collected
* How it is used
* Who may access it
* Communication methods
* Data retention
* User rights
* Contact information

Do not generate false legal claims.

---

# 61. Terms & Conditions

Production should include appropriate Terms & Conditions.

The final legal wording should be reviewed by the client/legal professional where necessary.

---

# 62. Consent

Where legally or operationally required, collect appropriate consent before processing personal information or sending communications.

Do not assume consent merely because a student visits the website.

---

# 63. Marketing Communication

If marketing communication is introduced:

* Obtain appropriate consent where required
* Provide opt-out mechanisms
* Store communication preferences
* Respect opt-outs

---

# 64. Security Testing

Before production, test:

```text
Authentication
Authorization
RLS
API security
Form validation
File uploads
Admin routes
Student routes
Lead access
Storage policies
Rate limits
```

---

# 65. Common Security Tests

Test cases must include:

```text
Unauthenticated user accessing admin page
Student accessing another student's profile
Student accessing lead API
Counsellor accessing unauthorised lead
Content manager accessing private student data
User modifying another user's shortlist
User modifying another user's enquiry
Public user accessing unpublished college
Public user accessing unpublished award
```

All must be rejected appropriately.

---

# 66. IDOR Protection

Never assume that knowing an ID grants access.

Example:

```text
/api/student/profile/USER_ID
```

must verify that the authenticated user owns that profile.

The same principle applies to:

* Leads
* Enquiries
* Shortlists
* Notes
* Follow-ups

---

# 67. Admin Action Confirmation

Highly destructive actions should require confirmation.

Example:

```text
Delete College?

This action may affect published content.

[ Cancel ] [ Confirm ]
```

Prefer archive/soft-delete when appropriate.

---

# 68. Privileged Actions

For highly sensitive actions, consider additional confirmation or re-authentication where appropriate.

Examples:

* Changing admin roles
* Deleting major records
* Changing security settings

---

# 69. Production Security Checklist

Before deployment:

* [ ] HTTPS enabled
* [ ] Environment secrets protected
* [ ] RLS enabled
* [ ] Admin authorization tested
* [ ] Student authorization tested
* [ ] API validation implemented
* [ ] Rate limiting configured
* [ ] File upload restrictions implemented
* [ ] Error messages sanitized
* [ ] Security headers reviewed
* [ ] Dependencies checked
* [ ] Backups configured
* [ ] Privacy Policy added
* [ ] Terms added
* [ ] Audit logging enabled
* [ ] No direct college contact information exposed accidentally

---

# 70. Security Priority

Security priorities:

```text
1. Authentication
2. Authorization
3. Database RLS
4. Student privacy
5. Lead privacy
6. Input validation
7. API security
8. File security
9. Monitoring
10. Compliance documentation
```

---

# 71. Final Security Principle

> **College Guide must protect student information as carefully as it protects the client's business information. Security must be enforced at the database and server level, not merely hidden behind the UI.**