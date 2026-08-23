## FILE #29 — `AI_CONTEXT/DEPLOYMENT.md`

````md
# College Guide — Deployment & DevOps

## 1. Purpose

This document defines how College Guide moves from development to production.

The deployment process must be:

- Safe
- Repeatable
- Secure
- Easy to maintain
- Suitable for vibe coding
- Easy to rollback

---

# 2. Recommended Production Stack

Frontend + Backend:

Next.js

Database:

Supabase PostgreSQL

Authentication:

Supabase Auth

Storage:

Supabase Storage

Hosting:

Vercel

Source Control:

GitHub

---

# 3. Environment Architecture

Use separate environments:

Development
↓
Staging / Preview
↓
Production

Never develop directly on production.

---

# 4. Development Environment

Used by developers and AI coding tools.

Contains:

- Local Next.js application
- Development database/project
- Test data
- Development environment variables

Never use real student leads for development.

---

# 5. Preview / Staging Environment

Used for:

- Client review
- QA
- UAT
- Feature testing
- Deployment verification

Example:

```text
feature branch
      ↓
GitHub
      ↓
Vercel Preview
      ↓
Client / QA Review
````

---

# 6. Production Environment

Production contains:

* Real College Guide website
* Real college data
* Real leads
* Real CRM users
* Production analytics
* Production database

Production access must be restricted.

---

# 7. Git Repository

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
├── .gitignore
├── package.json
└── README.md
```

---

# 8. AI_CONTEXT Folder

The `AI_CONTEXT` folder is part of the project's AI development system.

It contains:

```text
Project requirements
Architecture
UI/UX rules
Database rules
API rules
Security rules
Testing rules
Deployment rules
```

AI coding tools must read the relevant AI_CONTEXT files before making major changes.

---

# 9. Git Branch Strategy

Recommended:

```text
main
 │
 ├── develop
 │
 ├── feature/college-search
 │
 ├── feature/crm-dashboard
 │
 └── fix/lead-form
```

Production should deploy from:

```text
main
```

---

# 10. Branch Naming

Use meaningful names.

Examples:

```text
feature/college-search
feature/location-filter
feature/lead-crm
feature/whatsapp
fix/mobile-navbar
fix/search-pagination
chore/update-dependencies
```

Avoid:

```text
test123
newbranch
final-final
latest
```

---

# 11. Commit Messages

Use clear commits.

Examples:

```text
feat: add college search
feat: add lead enquiry flow
feat: add WhatsApp CTA
fix: correct location filtering
fix: prevent duplicate lead submission
refactor: improve college service
chore: update dependencies
```

---

# 12. Pull Request Flow

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
      ↓
Preview
      ↓
Production
```

---

# 13. Automated Checks

Every important pull request should run:

```text
Lint
Type Check
Unit Tests
Integration Tests
Build
```

If any critical check fails:

```text
Do not deploy.
```

---

# 14. Production Build

Before production:

```text
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

Exact scripts may vary according to the final project setup.

---

# 15. Environment Variables

Use different environment variables for:

```text
Development
Preview
Production
```

Never copy production secrets into local development unnecessarily.

---

# 16. Environment Variable Example

`.env.example` may contain:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
WHATSAPP_NUMBER=
```

Only placeholders belong in Git.

---

# 17. Secret Management

Production secrets must be stored in:

```text
Vercel Environment Variables
Supabase configuration
Secure secret management systems
```

Never store them in source code.

---

# 18. Critical Secret Rule

Never expose:

```text
SUPABASE_SERVICE_ROLE_KEY
Database Password
Private API Keys
Authentication Secrets
```

to the browser.

---

# 19. Vercel Deployment

Recommended flow:

```text
GitHub
   ↓
Vercel
   ↓
Build
   ↓
Deploy
```

Each branch/PR can generate a preview deployment.

---

# 20. Preview Deployment

Preview deployments are useful for:

```text
Client Review
UI Testing
QA
Feature Validation
```

The client can review changes before production.

---

# 21. Production Deployment

Production deployment should happen only after:

```text
QA Passed
Client Approval
Build Passed
Security Checked
Database Changes Verified
```

---

# 22. Custom Domain

Production should use the client's final domain.

Example:

```text
www.collegeguide.in
```

The exact domain will be configured after the client confirms it.

---

# 23. DNS

Typical flow:

```text
Domain
   ↓
DNS
   ↓
Vercel
   ↓
College Guide
```

Configure DNS according to the hosting provider's current instructions.

---

# 24. HTTPS

Production must use HTTPS.

Verify:

```text
https://domain
```

works correctly.

HTTP should redirect to HTTPS where configured.

---

# 25. Database Environments

Prefer separate Supabase projects for:

```text
Development
Production
```

If a staging environment is required, use a dedicated staging environment.

---

# 26. Database Migration Strategy

Database changes must be version-controlled.

Example:

```text
supabase/
  migrations/
```

Each schema change should have a migration.

---

# 27. Migration Flow

```text
Local Database
      ↓
Migration Created
      ↓
Test
      ↓
Preview/Staging
      ↓
Verify
      ↓
Production
```

Never manually modify production schema without recording the change.

---

# 28. Migration Safety

Before major production migrations:

```text
Backup
 ↓
Apply Migration
 ↓
Run Tests
 ↓
Verify Data
```

---

# 29. Destructive Migration Rule

Never automatically run destructive database changes in production.

Examples:

```text
DROP TABLE
DROP COLUMN
DELETE ALL
```

must require deliberate review.

---

# 30. Seed Data

Development should have safe seed data.

Example:

```text
Sample colleges
Sample courses
Sample locations
Sample guides
Sample leads
Sample users
```

Never seed fake production leads into the real production database.

---

# 31. Production Data

Production data includes:

```text
Real colleges
Real client information
Real student enquiries
Real CRM activity
Real achievements
Real awards
```

Treat it as sensitive business data.

---

# 32. Backup Strategy

Database backups must be enabled.

Before major changes:

```text
Create / verify backup
```

Recovery procedures must be tested periodically.

---

# 33. Rollback Strategy

If a deployment introduces a critical problem:

```text
Detect Problem
      ↓
Stop Further Deployment
      ↓
Rollback Application
      ↓
Investigate
      ↓
Fix
      ↓
Retest
      ↓
Redeploy
```

---

# 34. Application Rollback

Use the hosting platform's previous deployment when appropriate.

Never attempt a rushed production code change directly on the server.

---

# 35. Database Rollback

Database rollback requires additional care.

Prefer:

```text
Forward Fix
```

when possible.

Do not blindly reverse migrations involving real production data.

---

# 36. Deployment Checklist

Before deploying:

```text
[ ] Tests passed
[ ] Type check passed
[ ] Lint passed
[ ] Build passed
[ ] Environment variables verified
[ ] Database migration reviewed
[ ] RLS checked
[ ] Security checked
[ ] Mobile tested
[ ] Client-approved content included
```

---

# 37. Production Smoke Test

Immediately after deployment:

```text
Open Homepage
      ↓
Search College
      ↓
Open College
      ↓
Filter Location
      ↓
Open Course
      ↓
Submit Test Enquiry
      ↓
Verify CRM
      ↓
Test WhatsApp
```

---

# 38. Test Lead Rule

When testing production lead creation:

Use a clearly identifiable internal test record.

Example:

```text
Name:
College Guide Test

Phone:
Approved internal test number
```

Delete/archive the test lead after verification according to the team's data policy.

---

# 39. Monitoring

Monitor:

```text
Application Errors
API Errors
Database Errors
Authentication Errors
Build Failures
Lead Creation Failures
Performance
```

---

# 40. Error Monitoring

Integrate an error monitoring solution if required.

Potential categories:

```text
Frontend Errors
Server Errors
API Errors
Database Errors
```

The selected service should be decided before production if advanced monitoring is needed.

---

# 41. Logging

Production logs should help diagnose problems without exposing sensitive information.

Never log:

```text
Passwords
Tokens
Service Keys
Private CRM Notes
Unnecessary Student Personal Data
```

---

# 42. Analytics

Analytics should track useful business events.

Examples:

```text
College View
Search
Filter
Shortlist
Compare
Guidance CTA
WhatsApp Click
Lead Submission
```

---

# 43. Lead Monitoring

The most important business metric is the enquiry pipeline.

Monitor:

```text
Visitors
      ↓
College Views
      ↓
Guidance Clicks
      ↓
WhatsApp Clicks
      ↓
Leads
      ↓
Follow-ups
      ↓
Conversions
```

---

# 44. Performance Monitoring

Monitor:

```text
LCP
INP
CLS
API response time
Database query performance
Image loading
```

---

# 45. Image Deployment

Before production:

```text
Compress Images
Generate Appropriate Sizes
Use WebP/AVIF Where Suitable
Add Alt Text
Use Lazy Loading Where Appropriate
```

Large award photos should not unnecessarily slow down the homepage.

---

# 46. SEO Deployment Checklist

Before launch:

```text
[ ] Sitemap
[ ] Robots
[ ] Canonicals
[ ] Metadata
[ ] Open Graph
[ ] Structured Data
[ ] 404 Page
[ ] Redirects
[ ] No accidental noindex
```

---

# 47. SEO Environment Rule

Preview/staging environments should generally not compete with production in search results.

Use appropriate indexing controls.

Production should be configured intentionally for indexing.

---

# 48. Security Deployment Checklist

Before launch:

```text
[ ] HTTPS
[ ] RLS
[ ] Authentication
[ ] Authorization
[ ] Rate limiting
[ ] Input validation
[ ] Secure headers
[ ] CORS
[ ] Secrets protected
[ ] No debug mode
[ ] No test credentials
```

---

# 49. Production Debug Mode

Production must not expose development debugging information.

Do not expose:

```text
Stack traces
Database queries
Environment variables
Internal IDs unnecessarily
```

---

# 50. Database Connection Security

Database access must use secure connections.

Do not expose direct database credentials to the frontend.

---

# 51. API Production Rules

Production APIs must:

```text
Validate input
Authorize requests
Return safe errors
Rate-limit sensitive operations
Log important failures
```

---

# 52. CDN / Caching

Public assets should be served efficiently.

Good candidates:

```text
Images
CSS
JavaScript
Fonts
Public static assets
```

Private CRM information must not be publicly cached.

---

# 53. Cache Safety

Never cache private responses in a way that could expose them to another user.

Especially:

```text
CRM
Admin
Student Data
Private APIs
```

---

# 54. Availability

The website should remain available during normal traffic spikes.

Architecture should allow future scaling of:

```text
Frontend
Database
API
Storage
Search
```

---

# 55. Scaling Strategy

When traffic increases:

```text
Optimize Database
      ↓
Add Indexes
      ↓
Optimize API
      ↓
Cache Public Data
      ↓
Optimize Images
      ↓
Scale Infrastructure
```

Do not immediately add unnecessary infrastructure.

---

# 56. Deployment Documentation

Every production deployment should be traceable.

Record:

```text
Version
Date
Changes
Database Migration
Known Issues
Rollback Plan
```

---

# 57. Release Versioning

Use meaningful versions when appropriate.

Example:

```text
v1.0.0
v1.1.0
v1.1.1
```

Major:

```text
Breaking architecture/API change
```

Minor:

```text
New feature
```

Patch:

```text
Bug/security fix
```

---

# 58. Release Notes

Important releases should document:

```text
New Features
Bug Fixes
Database Changes
Security Changes
Known Issues
```

---

# 59. Client Review Workflow

For major client-facing changes:

```text
Developer
   ↓
Preview Deployment
   ↓
Internal QA
   ↓
Client Review
   ↓
Client Approval
   ↓
Production
```

---

# 60. Client Content Workflow

Client-provided content such as:

```text
Awards
Achievements
Testimonials
Photos
Company History
```

should go through:

```text
Receive
 ↓
Upload
 ↓
Review
 ↓
Client Confirmation
 ↓
Publish
```

---

# 61. No Fake Content

During development, placeholder content may be used.

Before production:

```text
Remove Fake Content
Replace With Approved Content
```

Never leave fake awards, fake testimonials, fake statistics or fake student success stories on the live website.

---

# 62. Maintenance

After launch, maintain:

```text
Dependencies
Security
College Data
Courses
Locations
Awards
Guides
Testimonials
Analytics
```

---

# 63. College Data Updates

College information can change.

The system should support:

```text
Create
Edit
Review
Approve
Publish
Archive
```

without requiring code changes.

---

# 64. Content Updates

The client should eventually be able to manage frequently changing content through the admin dashboard.

Examples:

```text
Awards
Achievements
Testimonials
Guides
FAQs
College Information
```

---

# 65. Operational Roles

Recommended:

```text
Developer
QA
Client/Admin
Counsellor
Super Admin
```

Each role should have appropriate access.

---

# 66. Vibe Coding Deployment Rule

AI must never deploy directly to production without the project's defined checks.

Required flow:

```text
Read AI_CONTEXT
      ↓
Implement
      ↓
Lint
      ↓
Type Check
      ↓
Test
      ↓
Build
      ↓
Preview
      ↓
QA
      ↓
Client Approval
      ↓
Production
```

---

# 67. AI Must Not

AI coding tools must not:

```text
Disable RLS
Expose secrets
Delete production data
Modify production database blindly
Remove security checks
Skip validation
Remove tests to make builds pass
Replace architecture without approval
```

---

# 68. Emergency Production Fix

For a critical production issue:

```text
Identify
 ↓
Create hotfix branch
 ↓
Fix
 ↓
Test
 ↓
Preview
 ↓
Deploy
 ↓
Smoke Test
```

After the emergency fix, merge the change back into the normal development branch.

---

# 69. Final Deployment Architecture

```text
                 GitHub
                    │
                    ↓
             ┌─────────────┐
             │ Pull Request│
             └──────┬──────┘
                    ↓
          ┌──────────────────┐
          │ Automated Checks │
          │ Lint             │
          │ Type Check       │
          │ Tests            │
          │ Build            │
          └────────┬─────────┘
                   ↓
             Preview Deploy
                   │
             ┌─────┴─────┐
             ↓           ↓
            QA        Client
             │         Review
             └────┬──────┘
                  ↓
             Approval
                  ↓
          ┌───────────────┐
          │  Production   │
          │    Vercel     │
          └───────┬───────┘
                  ↓
             College Guide
                  │
        ┌─────────┴─────────┐
        ↓                   ↓
     Supabase            Analytics
    PostgreSQL
```

---

# 70. Definition of Production Ready

College Guide is production-ready only when:

```text
[ ] Features complete
[ ] UI approved
[ ] College data verified
[ ] Awards verified
[ ] Client achievements verified
[ ] CRM tested
[ ] Lead flow tested
[ ] WhatsApp tested
[ ] Security tested
[ ] RLS tested
[ ] Mobile tested
[ ] SEO tested
[ ] Performance tested
[ ] Backups enabled
[ ] Environment variables secured
[ ] Production smoke test passed
[ ] Client approved
```

---

# 71. Final Principle

> Production deployment is not the end of development. It is the beginning of operating College Guide reliably.

The system must always prioritize:

```text
Security
+
Reliability
+
Performance
+
Accuracy
+
Student Experience
+
Client Business Value
```

```
```
