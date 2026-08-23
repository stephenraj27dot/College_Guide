# College Guide — Technical Architecture

## 1. Purpose

This document defines the technical architecture for the College Guide platform.

The architecture must be:

- Scalable
- Secure
- Maintainable
- Production-ready
- Mobile-friendly
- SEO-friendly
- Cost-conscious
- Easy to extend
- Suitable for AI-assisted / vibe coding development

The architecture must separate public student experiences from internal business operations while keeping both connected through a reliable backend.

---

# 2. Recommended Technology Stack

## Frontend

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

Next.js should handle:

- Public website
- SEO pages
- Server-side rendering where useful
- Static generation where appropriate
- API integration
- Admin application

---

# 3. Backend

Recommended backend:

- Supabase

Use Supabase for:

- PostgreSQL database
- Authentication
- Row Level Security
- Storage
- Realtime where required
- Server-side database access

Avoid creating an unnecessary separate backend server during the initial version unless a real requirement appears.

---

# 4. Database

Primary database:

> PostgreSQL through Supabase

The database must use a relational structure.

Avoid storing the entire college record as one uncontrolled JSON object.

Important entities should have proper relational tables.

---

# 5. High-Level Architecture

```text
                         ┌──────────────────────┐
                         │      STUDENT         │
                         │ Mobile / Desktop     │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      Next.js         │
                         │   Public Website     │
                         └──────────┬───────────┘
                                    │
                  ┌─────────────────┼─────────────────┐
                  │                 │                 │
                  ▼                 ▼                 ▼
             Search API        Auth Layer       Server Actions
                  │                 │                 │
                  └─────────────────┼─────────────────┘
                                    ▼
                         ┌──────────────────────┐
                         │       Supabase       │
                         │                      │
                         │ PostgreSQL           │
                         │ Auth                 │
                         │ Storage              │
                         │ RLS                  │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    ADMIN / CRM       │
                         │ Counsellor / Admin   │
                         └──────────────────────┘
````

---

# 6. Application Layers

The application should follow a clear layered architecture.

```text
Presentation Layer
        ↓
Application Layer
        ↓
Business Logic Layer
        ↓
Data Access Layer
        ↓
Supabase / PostgreSQL
```

Do not place complex business logic directly inside UI components.

---

# 7. Frontend Architecture

Recommended structure:

```text
src/
│
├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── (student)/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── college/
│   ├── search/
│   ├── student/
│   ├── guidance/
│   └── admin/
│
├── lib/
│   ├── supabase/
│   ├── auth/
│   ├── validation/
│   ├── analytics/
│   └── utils/
│
├── services/
│   ├── colleges/
│   ├── students/
│   ├── leads/
│   ├── recommendations/
│   └── content/
│
├── types/
│
├── hooks/
│
└── config/
```

The exact folder structure can evolve, but separation of responsibilities must remain.

---

# 8. Public Website Architecture

Public pages should be optimised for:

* SEO
* Performance
* Accessibility
* Fast navigation
* Search-engine indexing

Use server-rendered or statically generated pages where appropriate.

---

# 9. Admin Architecture

Admin routes should be isolated.

Example:

```text
/admin
/admin/dashboard
/admin/students
/admin/leads
/admin/colleges
/admin/courses
/admin/departments
/admin/locations
/admin/awards
/admin/testimonials
/admin/success-stories
/admin/guides
/admin/analytics
/admin/settings
```

All admin routes must require authentication and authorisation.

---

# 10. Authentication Architecture

Supabase Auth should manage authentication.

Potential authentication method:

* Mobile OTP
* Email OTP
* Passwordless authentication

The final method should be selected based on client requirements and implementation cost.

---

# 11. Authorisation

Authentication answers:

> Who are you?

Authorisation answers:

> What are you allowed to do?

The platform must implement both.

Example:

```text
Student
  ↓
Student data only

Counsellor
  ↓
Assigned / authorised lead information

Admin
  ↓
Business management

Super Admin
  ↓
Full system control
```

---

# 12. Row Level Security

Supabase Row Level Security must be enabled for sensitive tables.

RLS should protect:

* Students
* Student profiles
* Leads
* Lead notes
* Activity
* Counselling records
* Admin data

Never rely only on frontend route protection.

---

# 13. Public Data

The following information may be publicly accessible when approved:

* Published colleges
* Published courses
* Published departments
* Published locations
* Approved college information
* Published awards
* Published testimonials
* Published success stories
* Published guides

Private information must never be publicly queryable.

---

# 14. Database Architecture

Core database entities:

```text
profiles
students
roles
colleges
college_categories
categories
courses
departments
locations
college_courses
college_departments
college_facilities
college_media
shortlists
comparisons
student_preferences
student_activity
leads
lead_notes
lead_followups
lead_assignments
awards
achievements
testimonials
success_stories
guides
analytics_events
```

The final schema may expand based on implementation requirements.

---

# 15. College Data Model

A college should not contain every piece of information directly in one table.

Conceptual model:

```text
College
  │
  ├── Location
  ├── Categories
  ├── Courses
  ├── Departments
  ├── Facilities
  ├── Media
  ├── Accreditation
  └── Verified Information
```

This makes the system easier to maintain.

---

# 16. Course & Department Relationship

Recommended relationship:

```text
Category
   ↓
Course
   ↓
Department
   ↓
College
```

However, the database should support real-world cases where the relationship is not strictly one-to-one.

Use many-to-many relationships where appropriate.

---

# 17. Location Model

Use a structured hierarchy:

```text
State
 ↓
District
 ↓
City
 ↓
Locality
```

College records should reference a location rather than storing inconsistent free-text locations.

---

# 18. Student Data Model

Conceptually:

```text
Student
│
├── Profile
├── Preferences
├── Shortlists
├── Comparisons
├── Activity
└── Enquiries
```

Personal data must be stored separately from public college information.

---

# 19. Lead Data Model

Conceptually:

```text
Lead
│
├── Student
├── Interested College
├── Course
├── Department
├── Location
├── Status
├── Score
├── Assigned Counsellor
├── Notes
├── Follow-ups
└── Activity
```

---

# 20. Lead Pipeline

Use controlled status values.

```text
NEW
CONTACTED
COUNSELLING
COLLEGE_SHORTLISTED
APPLICATION
ADMISSION_IN_PROGRESS
ADMITTED
NOT_INTERESTED
CLOSED
```

Do not allow arbitrary status strings from the UI.

---

# 21. Lead Scoring Architecture

Lead score should be calculated through a central service.

Example:

```text
Activity
    ↓
Scoring Rules
    ↓
Lead Score
    ↓
Intent Classification
```

Do not duplicate scoring logic across multiple UI components.

---

# 22. Activity Tracking

Track meaningful events.

Example event names:

```text
college_viewed
course_viewed
department_viewed
college_shortlisted
college_removed
college_compared
recommendation_viewed
enquiry_created
callback_requested
whatsapp_clicked
```

Avoid collecting unnecessary personal information.

---

# 23. Privacy-Aware Tracking

Anonymous browsing should remain anonymous unless the student becomes appropriately identified and consent requirements are satisfied.

Example:

```text
Anonymous Student
       ↓
Browse
       ↓
College View
       ↓
Registration
       ↓
Consent
       ↓
Account Activity
```

The system must not secretly merge unrelated anonymous activity into a student profile.

---

# 24. Search Architecture

Initial search can use PostgreSQL capabilities.

Search should support:

* College name
* Course
* Department
* Location
* Category

If the dataset becomes sufficiently large, introduce a dedicated search engine only when justified.

Do not add unnecessary infrastructure at MVP stage.

---

# 25. Recommendation Architecture

Initial recommendation engine should be rule-based.

Example:

```text
Student Preferences
        ↓
Filter Eligible Colleges
        ↓
Calculate Matching Factors
        ↓
Rank Colleges
        ↓
Generate Explanation
        ↓
Display Recommendations
```

Possible factors:

* Category match
* Course match
* Department match
* Location match
* Hostel preference
* Budget preference
* Other verified attributes

---

# 26. AI Architecture

AI should not be required for the first production version.

Future AI capabilities may include:

* College assistant
* Course guidance
* Natural-language search
* Personalised recommendations
* Counsellor assistance
* Automated FAQ

AI outputs must be grounded in verified platform data.

AI must not invent college information.

---

# 27. WhatsApp Architecture

WhatsApp should initially function as a contact channel to the College Guide team.

Architecture:

```text
Website
   ↓
WhatsApp CTA
   ↓
Client's Official WhatsApp
```

Future:

```text
Website
   ↓
WhatsApp Business API
   ↓
Automation
   ↓
CRM
```

Automation should only be introduced after the basic workflow is stable.

---

# 28. File Storage

Supabase Storage can manage:

* College images
* Award images
* Achievement images
* Testimonial images
* Success story images
* Other approved media

Sensitive documents, if introduced later, must use private storage buckets and controlled access.

---

# 29. Image Architecture

Images should be:

* Optimised
* Responsive
* Compressed
* Properly named
* Served in suitable formats

Do not load original high-resolution images unnecessarily.

---

# 30. API Architecture

Use clear service boundaries.

Example:

```text
/services/colleges
/services/students
/services/leads
/services/recommendations
/services/content
```

Business logic should live in services rather than being duplicated inside pages.

---

# 31. Validation

Use schema-based validation.

Recommended:

* Zod

Validation should happen at:

```text
Client
  ↓
Server
  ↓
Database
```

Never trust client-side validation alone.

---

# 32. Error Handling

Use centralised error handling.

Errors should be categorised as:

```text
Validation Error
Authentication Error
Authorisation Error
Not Found
Conflict
Rate Limit
Server Error
```

User-facing messages should remain simple.

---

# 33. Rate Limiting

Rate limiting should protect:

* Login
* OTP
* Enquiry
* Callback
* Public API endpoints
* Search endpoints where necessary

Exact implementation depends on the deployment architecture.

---

# 34. Security Requirements

The application must protect against:

* SQL injection
* XSS
* CSRF where applicable
* Broken access control
* Credential exposure
* Unauthorised data access
* Insecure file uploads
* API abuse

Secrets must never be committed to source control.

---

# 35. Environment Variables

Use environment variables for:

* Supabase URL
* Supabase keys
* Authentication configuration
* WhatsApp configuration
* Analytics configuration
* Other secrets

Example:

```text
.env.local
```

Never hard-code secrets inside source files.

---

# 36. Environment Separation

Maintain separate environments:

```text
Development
     ↓
Staging
     ↓
Production
```

Do not test destructive database operations directly on production.

---

# 37. Git Architecture

Use Git with meaningful branches.

Suggested:

```text
main
develop
feature/*
fix/*
```

Production code should only be merged after review and testing.

---

# 38. Deployment

Recommended initial deployment:

```text
Git Repository
      ↓
CI/CD
      ↓
Vercel
      ↓
Next.js Application

Supabase
      ↓
Database
Auth
Storage
```

The exact deployment provider can change later.

---

# 39. SEO Architecture

Public pages should support:

* Metadata
* Open Graph
* Canonical URLs
* Sitemap
* Robots
* Structured data
* Semantic HTML

College pages should have unique metadata.

Do not generate duplicate SEO pages with meaningless content.

---

# 40. Performance Architecture

Priorities:

1. Fast initial page load
2. Optimised images
3. Server rendering where useful
4. Efficient database queries
5. Pagination
6. Caching where appropriate
7. Minimal JavaScript
8. Lazy loading

Avoid premature optimisation.

Measure performance before adding complexity.

---

# 41. Caching

Cache suitable public information such as:

* College listings
* Categories
* Locations
* Public guides

Do not cache private student or lead data in publicly accessible caches.

---

# 42. Pagination

Large datasets must use pagination.

Examples:

* Colleges
* Students
* Leads
* Activity
* Analytics records

Do not load thousands of records into the browser at once.

---

# 43. Database Indexing

Indexes should be created for frequently queried fields.

Potential indexes:

```text
college.location_id
college.category_id
college.slug
course.slug
department.slug
student.mobile
lead.status
lead.assigned_counsellor
lead.created_at
activity.student_id
activity.created_at
```

Actual indexes should be based on query patterns.

---

# 44. Slugs

Public entities should use stable SEO-friendly slugs.

Examples:

```text
abc-engineering-college
computer-science-engineering
chennai
engineering
```

Slugs must be unique within their relevant entity type.

---

# 45. Data Integrity

Database constraints should protect:

* Required fields
* Unique values
* Foreign keys
* Valid statuses
* Valid relationships

Do not depend entirely on application-level checks.

---

# 46. Auditability

Important admin changes should be auditable where appropriate.

Examples:

* College updated
* College published
* Lead status changed
* Lead reassigned
* Award published
* Testimonial published

Audit records should include:

* User
* Action
* Entity
* Timestamp

---

# 47. Logging

Application logs should help diagnose:

* Server errors
* API errors
* Authentication issues
* Important system failures

Do not log sensitive student information unnecessarily.

---

# 48. Analytics Architecture

Business analytics should use structured events.

Example:

```text
Event
 ↓
Event Storage
 ↓
Aggregation
 ↓
Dashboard
```

Analytics should distinguish between:

* User activity
* Business events
* Conversion events

---

# 49. Testing Architecture

Testing should include:

### Unit Tests

Business logic.

### Integration Tests

Database and service interactions.

### End-to-End Tests

Critical student and admin journeys.

### Manual QA

Visual and responsive testing.

---

# 50. Critical E2E Flows

At minimum test:

```text
Student:
Search
 → College Profile
 → Shortlist
 → Compare
 → Enquiry

Student:
Find My College
 → Recommendation
 → Guidance

Student:
WhatsApp
 → Client Contact

Admin:
Login
 → Lead
 → Update Status
 → Add Note

Admin:
College
 → Edit
 → Publish
```

---

# 51. CI/CD

Every production deployment should ideally pass:

```text
Lint
 ↓
Type Check
 ↓
Unit Tests
 ↓
Build
 ↓
E2E Tests where configured
 ↓
Deploy
```

---

# 52. Type Safety

TypeScript should be used throughout the application.

Avoid:

```text
any
```

unless there is a documented reason.

Database types should be generated or maintained consistently.

---

# 53. Component Reusability

Do not create separate versions of the same component unnecessarily.

Example:

Instead of:

```text
StudentCollegeCard
AdminCollegeCard
SearchCollegeCard
```

where possible create reusable primitives and compose specialised views.

---

# 54. Server vs Client Components

Use server components by default where appropriate.

Use client components when requiring:

* Interaction
* Browser APIs
* State
* Event handlers
* Real-time updates

Do not turn the entire application into client-side rendering unnecessarily.

---

# 55. Business Logic Rule

Critical business rules must not depend on browser-side logic.

Examples:

* Lead creation
* Lead scoring
* Permissions
* Data access
* Publishing
* Student privacy

These must be enforced server-side.

---

# 56. Architecture Evolution

Start simple.

MVP:

```text
Next.js
+
Supabase
+
PostgreSQL
+
Storage
+
Auth
```

Scale only when actual requirements justify additional infrastructure.

Potential future additions:

```text
Search Engine
Redis
Queue
AI Services
WhatsApp API
Advanced Analytics
```

Do not add these prematurely.

---

# 57. Recommended MVP Architecture

```text
                    USERS
                      │
          ┌───────────┴───────────┐
          │                       │
       Students              Admin Team
          │                       │
          ▼                       ▼
       Next.js                Next.js
          │                       │
          └───────────┬───────────┘
                      │
                      ▼
                 Supabase
              ┌───────┼────────┐
              │       │        │
              ▼       ▼        ▼
           Postgres  Auth   Storage
```

This architecture is intentionally simple and scalable.

---

# 58. Technical Decision Principle

Every technology decision should consider:

1. Business value
2. Development complexity
3. Cost
4. Performance
5. Security
6. Maintainability
7. Scalability

The most complicated solution is not automatically the best solution.

---

# 59. Vibe Coding Rule

AI-assisted development must follow the project documentation.

Before generating implementation code, the AI must understand:

```text
Project
 ↓
Business Requirements
 ↓
User Personas
 ↓
User Journeys
 ↓
Feature Specification
 ↓
Information Architecture
 ↓
UX/UI Design System
 ↓
Technical Architecture
```

AI must not independently redesign the architecture without justification.

---

# 60. Architecture Principle

> **Build a simple, secure, well-structured foundation first. Add complexity only when the product genuinely needs it.**