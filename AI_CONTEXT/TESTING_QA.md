## FILE #28 — `AI_CONTEXT/TESTING_QA.md`

````md
# College Guide — Testing & Quality Assurance

## 1. Purpose

This document defines the testing and QA standards for College Guide.

The goal is to ensure:

- Correct functionality
- High reliability
- Excellent student experience
- Secure CRM
- Accurate college information
- Responsive UI
- Fast performance
- No critical bugs before deployment

---

# 2. Testing Philosophy

Every feature must be:

```text
Designed
   ↓
Implemented
   ↓
Tested
   ↓
Reviewed
   ↓
Fixed
   ↓
Retested
   ↓
Approved
````

Never consider a feature complete simply because it works once in the developer's browser.

---

# 3. Testing Levels

College Guide should use:

```text
Unit Testing
Integration Testing
API Testing
Database Testing
Component Testing
End-to-End Testing
Security Testing
Responsive Testing
Accessibility Testing
Performance Testing
User Acceptance Testing
```

---

# 4. Testing Priority

Critical business flows have the highest priority.

```text
1. Lead Generation
2. WhatsApp Contact
3. College Discovery
4. College Search
5. Filters
6. CRM
7. Authentication
8. Admin
9. SEO
10. Analytics
```

---

# 5. Unit Testing

Unit tests should test isolated functions.

Examples:

```text
searchColleges()
createLead()
validatePhone()
generateSlug()
formatLocation()
calculatePagination()
```

A unit test should test one logical behavior at a time.

---

# 6. Validation Testing

Test valid and invalid input.

Example:

```text
Name:
✓ Stephen
✗ Empty
✗ Excessively long input

Phone:
✓ Valid phone
✗ Invalid phone
✗ Empty
✗ Malformed input

Email:
✓ Valid email
✗ Invalid email
```

---

# 7. College Search Testing

Test:

```text
Search by college name
Search by course
Search by category
Search by location
Search by department
Search with no results
Search with special characters
Empty search
Very long search
```

---

# 8. Search Result Requirements

Results must:

```text
Show correct colleges
Respect filters
Respect pagination
Load quickly
Not duplicate records
Not expose private information
```

---

# 9. Location Testing

Test location selection:

```text
Tamil Nadu
 ↓
District
 ↓
City
```

Example:

```text
Chennai
Coimbatore
Madurai
Trichy
Salem
Vellore
```

The system must not display colleges belonging to the wrong location.

---

# 10. Category Testing

Test:

```text
Engineering
Medical
Nursing
Law
Arts & Science
```

Each category must return only appropriate colleges.

---

# 11. Course Testing

Verify:

```text
Course
Category
College
Department
Location
```

relationships.

Example:

```text
CSE
 ↓
Engineering
 ↓
Relevant Engineering Colleges
```

---

# 12. College Detail Testing

Every college page should correctly display:

```text
College Name
Logo
Location
About
Courses
Departments
Facilities
Images
Guidance CTA
WhatsApp CTA
```

No direct college contact information should appear when prohibited by the business model.

---

# 13. College Page URL Testing

Test:

```text
/colleges/college-name
```

Verify:

```text
Correct page
Correct metadata
Correct college
Correct canonical URL
404 for invalid slug
```

---

# 14. College Status Testing

Verify:

```text
Draft
Review
Approved
Published
Archived
```

Only:

```text
Published
```

should normally appear publicly.

---

# 15. Lead Form Testing

Test:

```text
Valid submission
Empty fields
Invalid phone
Invalid email
Long message
Duplicate submission
Rapid repeated submission
Network failure
Server failure
```

---

# 16. Lead Creation Flow

Expected:

```text
Student
   ↓
Guidance Form
   ↓
Validation
   ↓
API
   ↓
Lead Created
   ↓
Lead Activity Created
   ↓
Success Message
```

All steps must complete correctly.

---

# 17. Lead Duplicate Protection

Test repeated submissions.

The system should prevent accidental duplicate leads where appropriate.

Do not aggressively block legitimate students who submit multiple genuine enquiries.

---

# 18. Lead Success Message

After successful submission show a clear confirmation.

Example:

```text
Your guidance request has been received.

Our College Guide team will contact you soon.
```

Do not expose internal CRM information.

---

# 19. WhatsApp Testing

Verify:

```text
WhatsApp button visible
Correct College Guide number
Correct message
Mobile app opens correctly
Desktop WhatsApp works
Tracking event fires
```

Never route students to a college's private WhatsApp number.

---

# 20. WhatsApp Message

The generated message may include useful context.

Example:

```text
Hi College Guide,
I need guidance regarding [course/college].
```

Do not include unnecessary personal information.

---

# 21. Shortlist Testing

Test:

```text
Add college
Remove college
Duplicate add
Refresh page
Multiple colleges
Empty shortlist
Mobile UI
```

If login is not required, guest state must be handled safely.

---

# 22. Comparison Testing

Test:

```text
Add college to comparison
Remove college
Compare 2 colleges
Compare 3 colleges
Compare 4 colleges
Attempt 5th college
Empty comparison
Mobile comparison
```

Recommended maximum:

```text
4 colleges
```

---

# 23. Comparison Accuracy

Comparison information must come from the database.

Never allow frontend-only fake values.

Verify:

```text
Courses
Departments
Location
Facilities
Other supported attributes
```

are mapped correctly.

---

# 24. CRM Testing

CRM must be tested separately from the public website.

Test:

```text
Login
Dashboard
Lead list
Lead search
Lead filtering
Lead detail
Lead assignment
Lead notes
Follow-ups
Status changes
Priority changes
```

---

# 25. Counsellor Permission Testing

Counsellor should:

```text
✓ See authorized leads
✓ Update allowed lead fields
✓ Add notes
✓ Manage follow-ups
```

Counsellor should NOT:

```text
✗ Change role
✗ Access system secrets
✗ Manage super admins
✗ Access unauthorized leads
```

---

# 26. Admin Permission Testing

Verify admin permissions independently.

Test:

```text
College management
Course management
Location management
Content management
Lead management
```

Only permitted operations should work.

---

# 27. Role Escalation Testing

Attempt to change:

```text
counsellor
```

into:

```text
super_admin
```

through:

```text
Frontend
API
Modified request
Direct URL
```

All unauthorized attempts must fail.

---

# 28. IDOR Testing

Test whether changing:

```text
/lead/123
```

to another lead ID exposes another user's lead.

Expected:

```text
Unauthorized
```

or:

```text
Not Found
```

depending on the API design.

---

# 29. API Testing

Test every critical endpoint.

Example:

```text
GET /api/colleges
GET /api/colleges/[slug]
GET /api/courses
GET /api/locations
POST /api/leads
GET /api/crm/leads
PATCH /api/crm/leads/[id]
```

---

# 30. API Status Code Testing

Verify appropriate responses:

```text
200 Success
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Validation Error
429 Rate Limited
500 Server Error
```

---

# 31. API Validation Testing

Send:

```text
Missing fields
Extra fields
Wrong types
Invalid UUID
Invalid enum
Huge strings
Malformed JSON
```

The API must reject invalid requests safely.

---

# 32. Rate Limit Testing

Test repeated requests to:

```text
POST /api/leads
POST /api/contact
Authentication
Search
```

Expected behavior:

```text
Normal requests
 ↓
Rate threshold
 ↓
429 Too Many Requests
```

---

# 33. Database Testing

Verify:

```text
Foreign keys
Unique constraints
Not-null rules
RLS policies
Indexes
Transactions
```

---

# 34. RLS Testing

Test database access as:

```text
Anonymous User
Student
Counsellor
Content Manager
Data Manager
Admin
Super Admin
```

Each role must receive only appropriate records.

---

# 35. Public Data Testing

Anonymous users should see:

```text
Published Colleges
Published Courses
Published Locations
Published Guides
Approved Content
```

They should not see:

```text
Leads
CRM Notes
Counsellor Data
Audit Logs
Private Student Data
```

---

# 36. Authentication Testing

Test:

```text
Valid login
Invalid password
Invalid email
Logout
Expired session
Unauthorized route
Password reset
```

if those features are enabled.

---

# 37. Session Testing

Verify:

```text
Refresh browser
Open new tab
Close and reopen browser
Logout
Session expiry
```

No private dashboard data should remain accessible after logout.

---

# 38. Admin Route Testing

Attempt to access:

```text
/admin
/crm
/dashboard
```

without authentication.

Expected:

```text
Redirect / Unauthorized
```

---

# 39. File Upload Testing

Test:

```text
Valid image
Invalid extension
Large image
Fake MIME type
Corrupted file
Empty file
Very large filename
```

Unsafe files must be rejected.

---

# 40. Image Testing

Verify:

```text
Correct display
Responsive size
Lazy loading
Alt text
Broken image fallback
Optimized format
```

---

# 41. Content Testing

Verify client content:

```text
Awards
Achievements
Testimonials
Success Stories
Guides
FAQs
```

must display exactly as approved.

Never modify important claims automatically.

---

# 42. Award Verification Testing

Test workflow:

```text
Draft
 ↓
Review
 ↓
Approved
 ↓
Published
```

Unapproved awards must not appear publicly.

---

# 43. Testimonial Testing

Verify:

```text
Approved testimonial → visible
Draft testimonial → hidden
Archived testimonial → hidden
```

---

# 44. SEO Testing

Every indexable page should be checked for:

```text
Title
Meta Description
H1
Canonical
Open Graph
Sitemap
Robots
Structured Data
```

---

# 45. SEO URL Testing

Test:

```text
Valid URL
Invalid URL
Duplicate slug
Changed slug
Redirect
404
```

---

# 46. Sitemap Testing

Verify:

```text
Published pages included
Draft pages excluded
Archived pages excluded
Private pages excluded
No broken URLs
```

---

# 47. Robots Testing

Verify private routes are not intended for indexing.

Examples:

```text
/admin
/crm
/api
```

---

# 48. Accessibility Testing

Test:

```text
Keyboard navigation
Focus states
Screen reader labels
Button labels
Form labels
Alt text
Color contrast
Heading hierarchy
```

---

# 49. Keyboard Testing

Important actions must work without a mouse.

Test:

```text
Tab
Shift + Tab
Enter
Space
Escape
Arrow keys
```

Especially:

```text
Search
Filters
Dropdowns
Dialogs
Forms
Navigation
```

---

# 50. Mobile Testing

Test at minimum:

```text
360px
390px
412px
```

widths.

Verify:

```text
Navigation
Search
Filters
College cards
Forms
WhatsApp CTA
Comparison
Images
```

---

# 51. Tablet Testing

Test common tablet widths.

Verify:

```text
2-column layouts
Navigation
Cards
Forms
Tables
Comparison UI
```

---

# 52. Desktop Testing

Test:

```text
1366px
1440px
1920px
```

where practical.

Verify:

```text
Spacing
Maximum content width
Grid layouts
Navigation
Dashboard
Tables
```

---

# 53. Browser Testing

At minimum test:

```text
Chrome
Edge
Safari
Firefox
```

where available.

Mobile browsers should also be checked.

---

# 54. Responsive Rule

Never create separate desktop-only and mobile-only business logic unless absolutely necessary.

Prefer responsive UI components.

---

# 55. Performance Testing

Test:

```text
Homepage
College listing
College detail
Search
Location page
Guide page
CRM dashboard
```

---

# 56. Performance Targets

Aim for:

```text
Fast initial load
Low layout shift
Responsive interaction
Optimized images
Minimal unnecessary JavaScript
```

Use real measurements rather than guessing.

---

# 57. Core Web Vitals

Monitor:

```text
LCP
INP
CLS
```

Important public SEO pages should perform well.

---

# 58. Large College Dataset Testing

The system must remain usable with:

```text
100 colleges
1,000 colleges
10,000+ college records
```

depending on actual production scale.

Never load the entire dataset into the browser.

---

# 59. Search Performance

Test search with:

```text
Small dataset
Medium dataset
Large dataset
```

Ensure indexes are used appropriately.

---

# 60. Empty State Testing

Every list needs a useful empty state.

Example:

```text
No colleges found.

Try changing your location or category.
```

Never show a blank page.

---

# 61. Error State Testing

Test:

```text
Network failure
Database failure
API failure
Image failure
Invalid URL
Timeout
```

Provide friendly recovery options.

---

# 62. Loading State Testing

Every asynchronous operation should have appropriate loading feedback.

Examples:

```text
College search → Skeleton
Lead submit → Loading button
Dashboard → Skeleton
Image → Placeholder
```

Never allow users to repeatedly submit because the UI looks frozen.

---

# 63. Double Submission Testing

Buttons such as:

```text
Submit Enquiry
Send Request
Create Lead
```

must prevent accidental rapid duplicate submissions.

---

# 64. Form UX Testing

Verify:

```text
Clear labels
Inline validation
Helpful errors
Keyboard support
Loading state
Success state
Error recovery
```

---

# 65. Error Message Rule

Errors must be understandable.

Bad:

```text
ERROR_235_DATABASE
```

Better:

```text
We couldn't submit your request right now.
Please try again.
```

---

# 66. Data Accuracy Testing

College information must be checked against the approved data source.

Verify:

```text
College Name
Category
Location
Courses
Departments
Facilities
Images
```

---

# 67. College Contact Protection QA

This must be tested specifically.

Search the entire frontend for:

```text
phone
email
whatsapp
contact
```

and verify prohibited college contact details are not accidentally exposed.

---

# 68. Client Contact QA

Verify every student enquiry path leads to:

```text
College Guide
```

including:

```text
WhatsApp
Enquiry Form
Guidance CTA
Compare CTA
Shortlist CTA
```

---

# 69. Analytics Testing

Verify events:

```text
page_view
college_view
search
shortlist
compare
guidance_click
whatsapp_click
enquiry_submit
```

Do not send sensitive CRM information.

---

# 70. Analytics Accuracy

Each event should fire:

```text
Once
At the correct moment
With correct context
```

Avoid duplicate events.

---

# 71. Security Testing

Perform tests for:

```text
XSS
SQL Injection
CSRF
IDOR
Privilege Escalation
Rate Limit Bypass
Open Redirect
File Upload Abuse
Sensitive Data Exposure
```

---

# 72. Dependency Testing

Before deployment:

```text
Check vulnerabilities
Review major updates
Run tests
Build production
```

Never ignore critical security vulnerabilities.

---

# 73. Build Testing

Production build must complete successfully.

```text
Install
 ↓
Lint
 ↓
Type Check
 ↓
Tests
 ↓
Build
 ↓
Deploy
```

---

# 74. TypeScript Testing

No unnecessary:

```text
any
```

should be introduced.

Fix type errors rather than suppressing them.

---

# 75. Linting

Run the project's configured linter.

No critical lint errors should remain before production.

---

# 76. Database Migration Testing

Every migration must be tested in a non-production environment first.

```text
Development
 ↓
Staging
 ↓
Production
```

---

# 77. Regression Testing

Whenever a feature is changed, verify related features.

Example:

Changing:

```text
College Search
```

should trigger testing of:

```text
Filters
Location
Course
Pagination
SEO
College Detail
```

---

# 78. Feature Acceptance Criteria

Every feature must have explicit acceptance criteria.

Example:

```text
Feature:
College Search

Acceptance:
✓ User can search college name
✓ User can filter category
✓ User can filter location
✓ Results paginate
✓ Empty state works
✓ Mobile works
✓ No private data exposed
```

---

# 79. Bug Severity

Use:

```text
P0 — Critical
P1 — High
P2 — Medium
P3 — Low
```

---

# 80. P0 Bugs

Examples:

```text
Database exposed
Admin bypass
Student data leak
CRM unavailable
Lead creation completely broken
```

P0 bugs block production release.

---

# 81. P1 Bugs

Examples:

```text
Major search failure
WhatsApp CTA broken
College pages unavailable
Important mobile layout broken
```

Normally block release.

---

# 82. P2 Bugs

Examples:

```text
Minor filtering issue
Visual inconsistency
Non-critical dashboard problem
```

Release decision depends on impact.

---

# 83. P3 Bugs

Examples:

```text
Small spacing issue
Minor animation issue
Cosmetic text alignment
```

Can be scheduled for later.

---

# 84. QA Checklist — Public Website

```text
[ ] Homepage
[ ] Navigation
[ ] Search
[ ] Categories
[ ] Locations
[ ] Courses
[ ] College listing
[ ] College detail
[ ] Shortlist
[ ] Compare
[ ] Guidance form
[ ] WhatsApp
[ ] Guides
[ ] Awards
[ ] Testimonials
[ ] FAQ
[ ] Footer
```

---

# 85. QA Checklist — CRM

```text
[ ] Login
[ ] Dashboard
[ ] Lead list
[ ] Lead search
[ ] Lead filters
[ ] Lead detail
[ ] Lead status
[ ] Lead priority
[ ] Lead assignment
[ ] Notes
[ ] Follow-ups
[ ] Activity history
```

---

# 86. QA Checklist — Admin

```text
[ ] College CRUD
[ ] Course CRUD
[ ] Department CRUD
[ ] Location CRUD
[ ] Facilities
[ ] Media
[ ] Awards
[ ] Achievements
[ ] Testimonials
[ ] Guides
[ ] FAQs
[ ] User permissions
```

---

# 87. UAT — Client Testing

Before launch, the client should review:

```text
Branding
Awards
Achievements
Testimonials
College Data
Categories
Courses
Locations
Lead Flow
WhatsApp
CRM
```

---

# 88. Client Approval

Important content should receive explicit client approval before production.

Especially:

```text
Awards
Achievements
Claims
Testimonials
Success Stories
Business Contact Details
```

---

# 89. Production Smoke Test

Immediately after deployment:

```text
Open homepage
 ↓
Search college
 ↓
Open college page
 ↓
Submit test enquiry
 ↓
Verify lead in CRM
 ↓
Click WhatsApp
 ↓
Verify analytics
 ↓
Check mobile
```

---

# 90. Post-Deployment Monitoring

After launch monitor:

```text
Errors
API failures
Lead creation
Search
Page performance
Analytics
Database
Authentication
```

---

# 91. Vibe Coding QA Rule

AI-generated code must never be accepted only because:

```text
"It looks correct."
```

Every generated feature must be checked for:

```text
Functionality
Security
Types
Database correctness
Responsive behavior
Accessibility
Performance
Business rules
```

---

# 92. AI Coding Rule

Before modifying existing code, AI must:

```text
Read relevant files
Understand current architecture
Identify dependencies
Make the smallest safe change
Run validation
Avoid unrelated refactoring
```

---

# 93. No Blind Refactoring

Do not allow AI to rewrite large parts of the application just to implement a small feature.

Example:

```text
Adding WhatsApp button
```

must NOT result in:

```text
Rewriting entire navigation
Changing database architecture
Replacing authentication
Changing unrelated components
```

---

# 94. Definition of Done

A feature is complete only when:

```text
[ ] Implemented
[ ] Type-safe
[ ] Tested
[ ] Responsive
[ ] Accessible
[ ] Secure
[ ] Business rules respected
[ ] Error states handled
[ ] Loading states handled
[ ] Analytics added where required
[ ] Client-facing content approved
```

---

# 95. Final QA Principle

> College Guide should feel polished to students and dependable to the client.

The final quality standard is:

```text
Correct
   +
Secure
   +
Fast
   +
Accessible
   +
Responsive
   +
Accurate
   +
Trustworthy
   =
Production Ready
```

Never ship a feature simply because it works on one screen.

Test the complete user journey:

```text
Student
   ↓
Discover
   ↓
Search
   ↓
Filter
   ↓
Explore College
   ↓
Compare / Shortlist
   ↓
Trust College Guide
   ↓
WhatsApp / Enquiry
   ↓
Lead Created
   ↓
Counsellor Follow-up
```

```
```
