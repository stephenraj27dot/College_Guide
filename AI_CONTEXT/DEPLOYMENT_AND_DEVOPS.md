## FILE #33 — `AI_CONTEXT/DEPLOYMENT_AND_DEVOPS.md`

````md
# College Guide — Deployment & DevOps

## 1. Purpose

This document defines the development, deployment, hosting, environment, CI/CD, monitoring, backup, and rollback strategy for College Guide.

The goal is to ensure that College Guide can be developed safely and deployed reliably without breaking the production website.

---

# 2. Deployment Philosophy

Never develop directly on production.

Use:

```text
Local Development
      ↓
GitHub
      ↓
Preview Environment
      ↓
QA
      ↓
Client Review
      ↓
Production
````

---

# 3. Recommended Technology Stack

Primary stack:

```text
Frontend:
Next.js
React
TypeScript

Styling:
Tailwind CSS

Backend:
Next.js Server-side functionality
Supabase

Database:
PostgreSQL

Authentication:
Supabase Auth

Storage:
Supabase Storage

Hosting:
Vercel

Version Control:
Git + GitHub
```

Exact versions should be selected during project initialization and kept documented.

---

# 4. Environment Architecture

Use separate environments:

```text
Development
     ↓
Preview / Staging
     ↓
Production
```

---

# 5. Development Environment

Used by developers and AI coding tools.

Purpose:

```text
Feature Development
Bug Fixing
Database Development
Testing
UI Development
```

Never use production credentials here.

---

# 6. Preview Environment

Used for:

```text
QA
Client Review
Feature Validation
Responsive Testing
Regression Testing
```

Every important feature should be tested here before production.

---

# 7. Production Environment

Production contains:

```text
Live Website
Live Database
Live Leads
Live CRM
Live Analytics
```

Production access must be restricted.

---

# 8. Git Repository

The project must use Git.

Recommended structure:

```text
college-guide/
│
├── app/
├── components/
├── lib/
├── public/
├── supabase/
├── tests/
├── AI_CONTEXT/
├── .env.example
├── README.md
├── package.json
└── ...
```

---

# 9. Git Branching

Recommended initial strategy:

```text
main
  ↓
production

feature/*
  ↓
new development

fix/*
  ↓
bug fixes
```

For a small team, keep the branching strategy simple.

---

# 10. Main Branch Rule

The `main` branch should always represent production-ready code.

Do not push experimental code directly into `main`.

---

# 11. Feature Branch

Example:

```text
feature/college-search
feature/crm-dashboard
feature/college-comparison
feature/whatsapp-integration
```

---

# 12. Bug Fix Branch

Example:

```text
fix/search-filter
fix/mobile-navigation
fix/lead-form-validation
```

---

# 13. Commit Messages

Use meaningful commit messages.

Good:

```text
feat: add college location filters
fix: resolve duplicate lead creation
feat: add WhatsApp guidance CTA
perf: optimize college search query
docs: update deployment documentation
```

Avoid:

```text
update
changes
final
final2
new
working
```

---

# 14. Pull Request Workflow

Recommended:

```text
Feature Branch
      ↓
Commit
      ↓
Push
      ↓
Pull Request
      ↓
Automated Checks
      ↓
Review
      ↓
Merge
```

---

# 15. CI/CD

Recommended pipeline:

```text
Git Push
   ↓
Install Dependencies
   ↓
Lint
   ↓
Type Check
   ↓
Unit Tests
   ↓
Build
   ↓
Preview Deployment
```

Production deployment should happen only after required checks pass.

---

# 16. CI Checks

At minimum:

```text
[ ] npm install / npm ci
[ ] ESLint
[ ] TypeScript check
[ ] Tests
[ ] Production build
```

---

# 17. Production Deployment Gate

Before production:

```text
[ ] CI passed
[ ] QA passed
[ ] Database migrations reviewed
[ ] Environment variables verified
[ ] Client approval where required
[ ] Rollback plan available
```

---

# 18. Vercel Deployment

Recommended hosting architecture:

```text
GitHub
   ↓
Vercel
   ↓
Next.js Application
```

Vercel should automatically create preview deployments for branches/PRs where configured.

---

# 19. Supabase Architecture

Recommended:

```text
Next.js
   │
   ├── Supabase Auth
   ├── Supabase Database
   └── Supabase Storage
```

---

# 20. Environment Variables

Never hardcode:

```text
Database credentials
API keys
Service role keys
Private tokens
Authentication secrets
```

Use environment variables.

---

# 21. Environment File

Local development may use:

```text
.env.local
```

Never commit real secrets to Git.

---

# 22. Environment Template

Maintain:

```text
.env.example
```

Example:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Only include variable names and safe placeholder values.

---

# 23. Public vs Secret Variables

Public browser-safe variables may use:

```text
NEXT_PUBLIC_
```

Private server-only secrets must NOT use:

```text
NEXT_PUBLIC_
```

---

# 24. Supabase Service Role Key

The Supabase service role key is highly privileged.

Rules:

```text
NEVER expose to browser
NEVER put in client components
NEVER commit to Git
NEVER expose through API responses
```

Use only on trusted server-side environments when required.

---

# 25. Database Migrations

Database changes must be version-controlled.

Example workflow:

```text
Schema Change
     ↓
Migration File
     ↓
Local Test
     ↓
Preview/Staging
     ↓
Production
```

---

# 26. Migration Rule

Never manually modify production database structure without documenting the change.

Every structural change should have a migration.

---

# 27. Migration Safety

Before applying important migrations:

```text
[ ] Backup verified
[ ] Migration reviewed
[ ] Rollback strategy considered
[ ] Preview tested
```

---

# 28. Destructive Migrations

Be extremely careful with:

```text
DROP TABLE
DROP COLUMN
DELETE DATA
ALTER TYPE
```

Prefer safe multi-step migrations.

---

# 29. Safe Schema Evolution

Instead of:

```text
Remove old column immediately
```

prefer:

```text
Add new column
      ↓
Update application
      ↓
Migrate data
      ↓
Verify
      ↓
Remove old column later
```

---

# 30. Database Seed Data

Development should have seed data for:

```text
Categories
Locations
Departments
Courses
Sample Colleges
Facilities
```

Sample data must be clearly separated from real production data.

---

# 31. Production Data

Production database must contain only verified real data.

Never accidentally seed fake colleges into production.

---

# 32. College Data Import

If bulk college data is imported:

```text
CSV / Data Source
      ↓
Validation
      ↓
Duplicate Check
      ↓
Review
      ↓
Import
      ↓
Verification
```

---

# 33. Bulk Import Safety

Before large imports:

```text
[ ] Backup
[ ] Validate format
[ ] Validate required fields
[ ] Detect duplicates
[ ] Test small batch
[ ] Import
[ ] Verify counts
```

---

# 34. Storage Deployment

College images should be stored in controlled storage.

Recommended structure:

```text
college-images/
   college-id/
      cover.webp
      gallery-01.webp
      gallery-02.webp
```

---

# 35. Storage Security

Define whether each bucket/object is:

```text
Public
Private
```

based on actual business requirements.

Do not make sensitive files public.

---

# 36. Image Deployment

Before uploading large images:

```text
Resize
Compress
Optimize
Rename
Upload
```

---

# 37. Domain

Production domain should point to the production deployment.

Example structure:

```text
collegeguide.example
www.collegeguide.example
```

The real domain will be configured with the client's actual domain.

---

# 38. DNS

DNS configuration may include:

```text
A
CNAME
TXT
MX
```

Do not change DNS records without understanding their purpose.

---

# 39. SSL / HTTPS

Production must use HTTPS.

Verify:

```text
https://...
```

works correctly.

Do not deploy sensitive forms over insecure HTTP.

---

# 40. Redirect Rules

If both:

```text
www
non-www
```

are supported, choose one canonical version and redirect the other.

---

# 41. URL Stability

Do not casually change production URLs.

Important URLs:

```text
/colleges/[slug]
/locations/[slug]
/courses/[slug]
/guides/[slug]
```

should remain stable.

---

# 42. URL Change

If a URL must change:

```text
Old URL
   ↓
301 Redirect
   ↓
New URL
```

This helps preserve SEO.

---

# 43. Deployment Checklist

Before deployment:

```text
[ ] Build passes
[ ] Lint passes
[ ] Type check passes
[ ] Tests pass
[ ] Environment variables correct
[ ] Database migrations ready
[ ] Storage permissions checked
[ ] Authentication checked
[ ] Lead form tested
[ ] WhatsApp tested
[ ] Analytics tested
[ ] SEO checked
[ ] Mobile checked
```

---

# 44. Post-Deployment Checklist

Immediately after deployment:

```text
[ ] Homepage
[ ] Search
[ ] College page
[ ] Location filter
[ ] Course filter
[ ] Shortlist
[ ] Compare
[ ] Guidance form
[ ] WhatsApp
[ ] CRM
[ ] Admin login
[ ] Images
[ ] Analytics
```

---

# 45. Smoke Testing

After every production deployment, perform a quick smoke test.

Minimum:

```text
Homepage
Search
College Page
Guidance
WhatsApp
```

---

# 46. Production Monitoring

Monitor:

```text
Uptime
Errors
API failures
Database failures
Slow pages
Lead failures
Search failures
```

---

# 47. Error Monitoring

Use an appropriate error monitoring platform if required.

The application should capture:

```text
Runtime Errors
Server Errors
API Errors
Unexpected Exceptions
```

Never expose stack traces to students.

---

# 48. Error UI

Student-facing error:

```text
Something went wrong.

Please try again.
```

Developer logs may contain additional debugging information, but must not expose secrets or sensitive data.

---

# 49. Logging

Logs should be useful for debugging.

Good:

```text
college search query failed
lead creation failed
database request failed
```

Avoid logging:

```text
Passwords
Authentication Tokens
Private Messages
Sensitive Student Information
```

---

# 50. Deployment Logs

Deployment logs should be checked when:

```text
Build fails
Deployment fails
Runtime errors increase
Environment variables change
Database migrations fail
```

---

# 51. Rollback Strategy

If a deployment causes a major problem:

```text
Detect
 ↓
Assess
 ↓
Rollback
 ↓
Verify
 ↓
Investigate
```

Do not continue deploying additional changes on top of a broken production release without understanding the issue.

---

# 52. Application Rollback

If the previous application version is stable:

```text
Current Version
      ↓
Problem
      ↓
Previous Stable Version
```

Restore the stable version.

---

# 53. Database Rollback

Database rollback is more complicated.

Never blindly reverse migrations.

Instead:

```text
Assess Migration
 ↓
Check Data Impact
 ↓
Restore / Forward Fix
 ↓
Verify
```

---

# 54. Backup Strategy

Important production data should be protected with appropriate backups.

Data includes:

```text
Colleges
Leads
Users
CRM
Content
Images
```

---

# 55. Backup Verification

Do not assume backups work.

Periodically verify:

```text
Backup Exists
Backup Is Recent
Backup Can Be Restored
Restored Data Is Correct
```

---

# 56. Disaster Recovery

Potential failures:

```text
Hosting outage
Database outage
Bad deployment
Data corruption
Security incident
Domain issue
Storage failure
```

Recovery procedures must be documented.

---

# 57. Recovery Priority

Business-critical recovery order:

```text
1. Database
2. Application
3. Authentication
4. Lead System
5. CRM
6. Storage
7. Analytics
```

Exact order may change depending on incident.

---

# 58. Availability Principle

The public website should remain usable even if non-critical services fail.

Example:

```text
Analytics unavailable
      ↓
Website still works
```

---

# 59. API Resilience

API failures should:

```text
Return controlled errors
Avoid exposing internals
Allow retry where appropriate
Not crash unrelated UI
```

---

# 60. Rate Limiting

Public endpoints should consider rate limiting.

Especially:

```text
Login
Lead Form
Search
Contact APIs
Admin APIs
```

---

# 61. Bot Protection

If spam becomes a problem, consider:

```text
Rate limiting
Bot detection
CAPTCHA / Turnstile
Request validation
```

Do not add unnecessary friction before it is needed.

---

# 62. Security Headers

Production should use appropriate security headers.

Examples may include:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Strict-Transport-Security
```

Exact configuration must be tested against the application.

---

# 63. CORS

Only allow required origins.

Avoid:

```text
Access-Control-Allow-Origin: *
```

for sensitive authenticated APIs unless there is a deliberate reason.

---

# 64. Authentication Deployment

Verify:

```text
Login
Logout
Session
Role access
Password reset
Unauthorized routes
```

---

# 65. Admin Deployment

Admin routes must be protected.

Example:

```text
/admin
/admin/colleges
/admin/leads
/admin/analytics
```

must never be publicly accessible without authorization.

---

# 66. Production Access

Only authorized people should have access to:

```text
Vercel
Supabase
GitHub
Domain
Analytics
Admin
```

---

# 67. Principle of Least Privilege

Give users only the permissions required for their role.

Example:

```text
Content Manager
→ Content only

Counsellor
→ Leads assigned to them

Admin
→ Operational management

Super Admin
→ Full system management
```

---

# 68. Secret Management

Secrets should exist only in:

```text
Local environment
CI/CD secret store
Hosting environment variables
```

Never in:

```text
Source code
Git commits
Screenshots
Documentation
Client-side JavaScript
```

---

# 69. AI Coding Safety

AI coding tools must not:

```text
Print secrets
Commit .env files
Expose service-role keys
Hardcode API tokens
Remove security checks
Disable RLS
```

---

# 70. AI Deployment Rule

Before deployment, AI must verify:

```text
[ ] No secrets in code
[ ] No debug credentials
[ ] No console logs containing sensitive data
[ ] No disabled authentication
[ ] No disabled RLS
[ ] No test data in production
```

---

# 71. Preview Deployment

Every significant feature should have a preview URL.

Example flow:

```text
feature/college-search
       ↓
GitHub
       ↓
Preview Deployment
       ↓
QA
```

---

# 72. Client Preview

Client should receive preview deployments rather than production access whenever possible.

This allows:

```text
Review
Feedback
Approval
```

without risking production.

---

# 73. Client UAT

Client should test:

```text
College Search
College Details
Student Contact
Awards
Achievements
Lead Flow
CRM
Admin
```

---

# 74. Deployment Documentation

Maintain:

```text
README.md
AI_CONTEXT/DEPLOYMENT_AND_DEVOPS.md
```

and update them whenever infrastructure changes.

---

# 75. Release Notes

Major releases should document:

```text
New Features
Bug Fixes
Performance Improvements
Database Changes
Breaking Changes
```

---

# 76. Release Versioning

A simple versioning strategy can be used:

```text
v1.0.0
v1.1.0
v1.1.1
```

Exact versioning strategy may be adapted to the team's workflow.

---

# 77. Production Release Example

```text
v1.0.0
College Guide MVP

Includes:
- College Discovery
- Location Filters
- Course Filters
- College Pages
- WhatsApp
- Guidance Form
- Basic CRM
- Admin
```

---

# 78. Feature Release Example

```text
v1.1.0

Added:
- College Comparison
- Improved Search
- Shortlist
```

---

# 79. Bug Fix Release

```text
v1.1.1

Fixed:
- Mobile search filter issue
- Duplicate enquiry submission
```

---

# 80. Production Freeze

Before important client events or admission seasons, consider a short feature freeze.

During freeze:

```text
Critical Fixes
Security Fixes
```

are allowed.

Large new features should wait unless specifically approved.

---

# 81. Admission Season Readiness

Before peak admission periods:

```text
[ ] Search tested
[ ] College data reviewed
[ ] Lead form tested
[ ] WhatsApp tested
[ ] CRM tested
[ ] Database capacity reviewed
[ ] Monitoring active
```

---

# 82. Scaling Strategy

If traffic increases:

```text
More Students
      ↓
More Requests
      ↓
Monitor
      ↓
Optimize
      ↓
Scale
```

Do not prematurely over-engineer infrastructure.

---

# 83. Database Scaling

Potential optimization sequence:

```text
Query Optimization
      ↓
Indexes
      ↓
Caching
      ↓
Pagination
      ↓
Connection Optimization
      ↓
Infrastructure Scaling
```

---

# 84. Search Scaling

If college search becomes large:

```text
Database Search
      ↓
Optimized Indexes
      ↓
Search Optimization
      ↓
Dedicated Search Engine if necessary
```

Do not introduce Elasticsearch or another search system until actual scale requires it.

---

# 85. Caching

Cache data that:

```text
Changes Infrequently
Is Expensive to Query
Is Safe to Cache
```

Examples:

```text
Categories
Locations
Popular Colleges
Public Guides
```

Do not cache sensitive personalized CRM information carelessly.

---

# 86. CDN

Static assets such as:

```text
Images
Fonts
CSS
JavaScript
```

should use appropriate CDN delivery.

---

# 87. Image CDN

College images should be optimized and delivered efficiently.

Avoid serving original multi-megabyte images when a smaller version is sufficient.

---

# 88. Deployment Performance Rule

Never optimize based only on assumptions.

Use:

```text
Measurements
Logs
Profiling
Real User Data
```

to identify bottlenecks.

---

# 89. Final DevOps Architecture

```text
                 GitHub
                    │
                    ↓
              CI / Validation
                    │
             ┌──────┴──────┐
             ↓             ↓
        Preview          Main
             │             │
             ↓             ↓
            QA         Production
                           │
                 ┌─────────┼─────────┐
                 ↓         ↓         ↓
              Vercel   Supabase   Analytics
                 │         │
                 ↓         ↓
             Next.js    PostgreSQL
                           │
                           ↓
                         CRM
```

---

# 90. Final Deployment Principle

> College Guide must be deployed like a production business application, not like a simple static website.

The deployment system must prioritize:

```text
Security
+
Reliability
+
Repeatability
+
Observability
+
Rollback
+
Data Protection
+
Client Confidence
```

Every production deployment should be deliberate, tested, and reversible.

```
```
