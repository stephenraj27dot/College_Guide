# College Guide — Project Context

**Document Version:** 1.0
**Status:** Foundation
**Product Name:** College Guide
**Product Type:** College Discovery, Admission Guidance & Student Lead Management Platform
**Primary Market:** Tamil Nadu, India
**Document Purpose:** Establish the foundational context, goals, business rules, and product principles for the entire College Guide platform.

---

## 1. Project Overview

College Guide is a student-focused digital platform designed to help students discover and explore colleges across Tamil Nadu based on their preferred education category, course, department, location, and personal preferences.

The platform is not intended to function as a simple college directory.

It combines three major systems:

1. **College Discovery Platform**
2. **Admission Guidance Platform**
3. **Student Lead Management / CRM Platform**

The student-facing platform helps students discover suitable colleges and understand their available educational options.

The admission guidance team receives and manages student enquiries, understands each student's interests, tracks their interactions with the platform, and provides personalised admission guidance.

The platform must create a trustworthy, modern, student-friendly experience while also providing the client with a powerful business management system.

---

# 2. Core Product Vision

> **Help every student discover suitable college options and make a confident educational decision, while enabling the College Guide admission team to provide personalised guidance and manage genuine student enquiries effectively.**

The product should make the college discovery process:

* Simple
* Trustworthy
* Personalised
* Location-aware
* Course-aware
* Easy to compare
* Easy to understand
* Easy to request guidance

The platform should make the client's admission guidance workflow:

* Organised
* Data-driven
* Lead-focused
* Easy to manage
* Measurable
* Scalable

---

# 3. The Core Business Flow

The primary business journey is:

```text
Student
   ↓
Discovers College Guide
   ↓
Selects Education Category
   ↓
Selects Location
   ↓
Selects Course / Department
   ↓
Explores Colleges
   ↓
Views College Details
   ↓
Shortlists / Compares Colleges
   ↓
Shows Interest
   ↓
Requests Guidance / Callback / WhatsApp
   ↓
Qualified Student Lead
   ↓
College Guide Admission Expert
   ↓
Personalised Counselling
   ↓
Student Shortlists College
   ↓
Application / Admission Assistance
   ↓
Successful Admission
```

The website should support this complete journey rather than stopping at college discovery.

---

# 4. Primary Users

## 4.1 Students

Students are the primary users of the public-facing platform.

They may be:

* Students completing higher secondary education
* Students looking for undergraduate programs
* Students exploring professional courses
* Students comparing colleges
* Students who are unsure about which college or course to choose
* Students seeking admission guidance

### Student Goals

Students should be able to:

* Discover colleges
* Browse education categories
* Select preferred locations
* Explore departments
* Search for colleges
* Filter colleges
* View detailed college information
* Save colleges
* Compare colleges
* Receive personalised recommendations
* Find colleges near their location
* Understand courses and career options
* Request expert guidance
* Contact the College Guide team

---

# 5. Parents

Parents are an important secondary audience.

The platform should establish trust and credibility through:

* Client experience
* Awards
* Recognitions
* Achievements
* Verified information
* Student success stories
* Testimonials
* Transparent guidance
* Professional presentation

The website should make parents feel that the College Guide team is experienced and capable of helping students make informed educational decisions.

---

# 6. Admission Guidance Team

The admission guidance team is the primary business-side user.

They should be able to:

* View student leads
* View student profiles
* Understand student preferences
* See colleges viewed by each student
* See departments explored
* See saved colleges
* See comparison activity
* See enquiries
* See callback requests
* Identify high-intent students
* Manage lead status
* Follow up with students
* Record counselling progress
* Manage college information
* Manage courses and departments
* Manage locations
* Manage awards and achievements
* Manage testimonials
* View business analytics

---

# 7. Admin User

Administrators manage the complete platform.

Administrators may manage:

* Students
* Leads
* Colleges
* Categories
* Courses
* Departments
* Locations
* College facilities
* College media
* Awards
* Achievements
* Testimonials
* Student success stories
* Website content
* Recommendation rules
* Platform settings
* Analytics
* User access

---

# 8. Education Categories

The platform must support multiple education categories.

Initial categories may include:

* Engineering
* Medical
* Dental
* Nursing
* Pharmacy
* Law
* Arts & Science
* Agriculture
* Veterinary
* Physiotherapy
* Polytechnic
* Other approved higher-education categories

The category system must be configurable through the admin panel rather than hard-coded wherever possible.

New education categories should be addable without requiring major application changes.

---

# 9. Location-Based Discovery

Location is a core part of the College Guide experience.

Students should be able to discover colleges based on:

* Tamil Nadu
* District
* City
* Preferred location
* Nearby location
* Current location, when permission is provided

Example:

```text
Chennai
   ↓
Engineering
   ↓
Computer Science
   ↓
Available Colleges
```

The system should support locations such as:

* Chennai
* Coimbatore
* Madurai
* Tiruchirappalli
* Salem
* Tirunelveli
* Vellore
* Erode
* Thanjavur
* Tiruppur
* Kanchipuram
* Chengalpattu
* and other relevant Tamil Nadu locations

The location database must remain configurable and expandable.

---

# 10. College Discovery

Students must be able to discover colleges through multiple paths.

### Discovery methods

* Education category
* Location
* Department
* Course
* Search
* Filters
* Recommendations
* Near Me
* Shortlists
* Comparison
* Career/course guides

The system should avoid making students navigate through unnecessarily complicated menus.

---

# 11. College Profile

Every college should have a dedicated profile page.

A college profile may contain:

* College name
* College logo
* College images
* Location
* District
* Institution type
* Affiliation
* Accreditation information
* Courses
* Departments
* Eligibility information
* Admission information
* Fee information where verified
* Hostel information
* Transport information
* Campus facilities
* Infrastructure
* Course-specific information
* Placement information where verified
* Other relevant information
* College media
* Last updated information

All factual college information must be sourced and verified before being presented as authoritative.

Unverified information must not be presented as confirmed facts.

---

# 12. Critical Contact Rule

## Students must NOT directly contact colleges through the College Guide platform.

This is a core business requirement.

The public website must not provide direct college-contact actions such as:

* Direct college WhatsApp
* Direct college enquiry
* Direct college lead form
* Direct college contact CTA
* Unnecessary exposure of college contact details intended for admission enquiries

Instead, student enquiries must be routed through the College Guide admission guidance team.

Preferred CTAs include:

* **Talk to an Admission Expert**
* **Get Admission Guidance**
* **Request a Callback**
* **Chat with College Guide**
* **Get Help Choosing a College**
* **WhatsApp an Admission Expert**

The purpose of this rule is to ensure that the College Guide team remains the primary point of contact between the student and the admission guidance process.

---

# 13. Student Identity

Anonymous browsing may be supported.

However, personalised student activity tracking requires the student to identify themselves and provide appropriate consent.

A student profile may contain:

* Name
* Mobile number
* Email
* Preferred education category
* Preferred course
* Preferred department
* Preferred location
* Budget preference where applicable
* Hostel preference where applicable
* Other recommendation preferences

The platform must avoid collecting unnecessary personal information.

---

# 14. Student Activity Tracking

Once a student has identified themselves and provided appropriate consent, relevant interactions may be associated with their student profile.

Trackable activities may include:

* College viewed
* Department viewed
* Course viewed
* College shortlisted
* College compared
* Recommendation viewed
* Search performed
* Location selected
* Category selected
* Enquiry submitted
* Callback requested
* WhatsApp contact initiated

Example:

```text
Student: Stephen

Preferred Category:
Engineering

Preferred Location:
Chennai

Recent Activity:

Viewed → XYZ Engineering College
Department → Information Technology

Viewed → ABC Engineering College
Department → Computer Science

Saved → XYZ Engineering College

Compared → XYZ vs ABC

Requested → Admission Guidance
```

Activity tracking must respect consent and applicable privacy requirements.

---

# 15. Student Privacy Principle

The platform must follow a privacy-first approach.

The system must:

* Collect only necessary information
* Explain why personal information is collected
* Obtain appropriate consent where required
* Protect personal information
* Restrict administrative access
* Avoid unnecessary exposure of student data
* Provide appropriate privacy controls
* Maintain secure database access
* Follow applicable privacy and data-protection requirements

Student data must never be exposed publicly.

---

# 16. Shortlist Feature

Students should be able to save colleges for later.

Example:

```text
My Shortlist

❤️ College A
❤️ College B
❤️ College C
```

The system should record shortlist activity for identified and consented users where appropriate.

---

# 17. College Comparison

Students should be able to compare multiple colleges.

The comparison system may compare:

* Location
* Courses
* Departments
* Fees where verified
* Hostel availability
* Facilities
* Accreditation
* Other verified attributes

Comparison should be easy to understand on both desktop and mobile.

The system may use comparison activity as part of student-interest signals.

---

# 18. Find My College

The platform should provide a guided college discovery experience.

Example questions:

1. What do you want to study?
2. Which education category interests you?
3. Which department do you prefer?
4. Which location do you prefer?
5. What is your approximate budget?
6. Do you need hostel facilities?
7. What type of college are you interested in?

The system then provides relevant college matches.

The recommendation system must explain why a college was recommended.

---

# 19. Smart Recommendations

The platform should support personalised college recommendations.

Recommendations may consider:

* Education category
* Course
* Department
* Location
* Distance
* Budget preference
* Hostel preference
* Student-selected preferences
* Verified college attributes

Recommendations must not make unsupported claims.

The platform should explain recommendation reasoning where practical.

Example:

```text
95% Match

Why this college?

✓ Preferred department available
✓ Preferred location
✓ Hostel available
✓ Matches selected preferences
```

The exact scoring algorithm will be defined separately in:

`13-recommendation-engine.md`

---

# 20. Near Me

The platform may allow students to use their current location.

If the student grants browser location permission, the platform may show nearby colleges based on distance.

Location permission must be optional.

The platform must continue to work if location permission is denied.

---

# 21. Admission Enquiry

Students should be able to request guidance.

An enquiry may contain:

* Student identity
* Preferred category
* Course
* Department
* Preferred location
* College currently being viewed
* Other recently viewed colleges
* Student message
* Preferred callback time

The enquiry must be routed to the College Guide admission team.

---

# 22. WhatsApp Contact

A prominent WhatsApp contact action should be available.

The WhatsApp action must contact the College Guide team, not individual colleges.

Where technically appropriate, the system should pre-populate useful context.

Example:

> Hi, I'm Stephen. I'm interested in B.Tech CSE colleges in Chennai and would like admission guidance.

The exact WhatsApp integration will be defined in:

`15-whatsapp-and-contact-flow.md`

---

# 23. Callback Request

Students should be able to request a callback.

Possible preferences:

* Morning
* Afternoon
* Evening
* Specific preferred time

The client should see callback requests inside the admin dashboard.

---

# 24. Lead Management

Every meaningful student enquiry should become a manageable lead.

Possible lead statuses:

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

The exact CRM workflow will be defined separately.

---

# 25. Lead Scoring

The platform should support internal student-interest scoring.

Possible signals:

* Number of college views
* Repeated college views
* Shortlist actions
* Comparison actions
* Recommendation interactions
* Enquiry submission
* Callback request
* WhatsApp contact

Example:

```text
Stephen
Interest Score: 87 / 100
Status: High Intent
```

Lead scoring must remain an internal business tool and should not mislead students.

---

# 26. Admin Dashboard

The admin dashboard should provide a clear business overview.

Possible dashboard metrics:

* Total students
* New students
* New leads
* College views
* Enquiries
* WhatsApp enquiries
* Callback requests
* High-intent leads
* Admissions
* Conversion metrics

The dashboard should prioritise actionable information rather than unnecessary visual complexity.

---

# 27. Student Profile for Admin

The admission team should be able to open a student profile and understand the student's journey.

Example:

```text
Student
Stephen

Interested Category
Engineering

Preferred Department
Information Technology

Preferred Location
Chennai

Recent Colleges
XYZ College
ABC College
DEF College

Activity
Viewed XYZ
Saved ABC
Compared XYZ and ABC
Requested Callback
```

This allows the admission expert to provide context-aware guidance.

---

# 28. CRM Pipeline

The client should be able to manage leads through a clear pipeline.

Example:

```text
NEW
 ↓
CONTACTED
 ↓
COUNSELLING
 ↓
COLLEGE SHORTLISTED
 ↓
APPLICATION
 ↓
ADMISSION
```

The pipeline must support status changes, notes, follow-up information and relevant timestamps.

---

# 29. Awards and Achievements

The College Guide client has existing professional experience, achievements and awards.

These must be prominently represented on the public website to establish credibility and trust.

The system should support:

* Award title
* Awarding organisation
* Year
* Description
* Award image
* Certificate image where appropriate
* Recognition category

Client-provided award information must be used.

The system must never invent awards, achievements, statistics or certifications.

A dedicated CMS should allow the client to add and update achievements later.

---

# 30. Student Success Stories

The platform should support genuine student success stories.

Possible fields:

* Student name
* Student image, where permission is available
* Course
* College
* Admission year
* Testimonial
* Story
* Optional video testimonial

Only genuine and appropriately authorised testimonials should be published.

---

# 31. Trust & Credibility

The website should communicate:

* Experience
* Awards
* Recognitions
* Achievements
* Student success
* Professional expertise
* Verified information
* Transparent guidance

The visual design should communicate credibility without making unsupported claims.

---

# 32. Content Management

The admin system should allow authorised users to manage important content without developer involvement.

Content may include:

* Colleges
* Courses
* Departments
* Locations
* Categories
* Awards
* Achievements
* Testimonials
* Success stories
* Career guides
* Website sections

Content should support draft/publish states where appropriate.

---

# 33. Analytics

The platform should provide useful business analytics.

Potential analytics:

### Student analytics

* New students
* Active students
* Returning students

### Interest analytics

* Most viewed colleges
* Most viewed departments
* Most searched courses
* Most searched locations
* Most shortlisted colleges
* Most compared colleges

### Lead analytics

* New leads
* Contacted leads
* Counselling leads
* High-intent leads
* Applications
* Admissions

### Conversion analytics

* Enquiry → counselling
* Counselling → application
* Application → admission

Analytics should focus on actionable business insights.

---

# 34. Search Engine Optimization

College Guide should be designed for strong organic search visibility.

Important public pages should be indexable where appropriate.

Potential URL structure:

```text
/engineering
/engineering/chennai
/engineering/chennai/computer-science
/engineering/chennai/college-name
/engineering/chennai/college-name/computer-science
```

SEO requirements include:

* Metadata
* Open Graph
* Structured data where appropriate
* Sitemap
* Canonical URLs
* Semantic HTML
* Fast page performance
* Mobile optimisation
* Crawl-friendly architecture

Detailed SEO requirements will be defined separately.

---

# 35. Mobile-First Experience

A significant portion of student traffic is expected to come from smartphones.

Therefore:

* Mobile experience is a first-class requirement
* Navigation must be simple
* Search must be easy
* Filters must work well on mobile
* College cards must be readable
* WhatsApp CTA must be accessible
* Forms must be short and easy
* Tables must have mobile-friendly alternatives
* Admin dashboard should also support responsive layouts where practical

---

# 36. Accessibility

The platform should follow modern accessibility practices.

Requirements include:

* Keyboard accessibility
* Semantic HTML
* Proper labels
* Accessible forms
* Sufficient contrast
* Visible focus states
* Alternative text for meaningful images
* Accessible interactive components
* Screen-reader-friendly structure

---

# 37. Performance

The platform should prioritise:

* Fast initial loading
* Optimised images
* Lazy loading where appropriate
* Efficient database queries
* Pagination
* Caching where appropriate
* Minimal unnecessary JavaScript
* Responsive performance

College listing pages must remain performant even with a large number of records.

---

# 38. Scalability

The architecture should support future growth.

Potential future scale:

* Large college database
* Large student database
* Multiple admission experts
* Multiple admin users
* Large activity history
* Advanced search
* AI recommendations
* WhatsApp automation
* Advanced CRM
* Additional Indian states

The initial architecture should remain simple while avoiding decisions that unnecessarily prevent future scaling.

---

# 39. Initial Technology Direction

The preferred initial technology stack is:

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend / Database

* Supabase
* PostgreSQL
* Supabase Auth
* Supabase Storage
* Row Level Security

### Deployment

* Vercel
* GitHub

Additional services may be introduced only when justified by actual requirements.

The system should avoid unnecessary infrastructure complexity during the initial release.

---

# 40. Security Principles

Security is a first-class requirement.

The application must:

* Protect student information
* Use authenticated admin access
* Enforce database-level access control
* Use Row Level Security where applicable
* Validate user input
* Prevent unauthorized data access
* Protect administrative routes
* Avoid exposing private database credentials
* Avoid exposing sensitive information in client-side code
* Secure file uploads
* Log important administrative actions where appropriate

Security implementation will be defined in:

`18-security-and-privacy.md`

---

# 41. Data Integrity

College information is highly important to the product's credibility.

The system should support:

* Data source tracking
* Verification status
* Last updated date
* Published/unpublished status
* Administrative review
* Duplicate prevention

Unverified or outdated information should not be presented as authoritative.

---

# 42. Business Rules That Must Never Be Violated

The following rules are mandatory:

1. Students must not be routed directly to colleges for admission enquiries through the platform.
2. Student enquiries must route to the College Guide admission team.
3. Student personal information must not be publicly exposed.
4. Activity tracking must respect consent and applicable privacy requirements.
5. Awards and achievements must use genuine client-provided information.
6. Testimonials must be genuine and appropriately authorised.
7. College information must not be fabricated.
8. Fees, placement information and other factual claims must be verified before being presented as authoritative.
9. The platform must not make unsupported claims about colleges.
10. Admin functionality must be protected by proper authentication and authorisation.
11. Business-critical data must be stored securely.
12. New features must not violate the existing business rules.
13. The system should remain mobile-friendly.
14. The platform should remain SEO-friendly for public college discovery pages.
15. The user experience should remain simple even as features increase.

---

# 43. Product Quality Principle

The goal is not merely to create a website that looks attractive.

The goal is to create a reliable product that:

* Looks professional
* Feels trustworthy
* Works smoothly
* Helps students
* Helps parents
* Generates qualified leads
* Helps admission experts
* Provides useful analytics
* Can be maintained by the client
* Can scale in the future

Every feature should be evaluated using:

> **Does this improve the student experience, the client's business workflow, or both?**

If a feature does not provide meaningful value, it should not be added merely for visual complexity.

---

# 44. Development Philosophy

College Guide must be developed using a structured, documentation-first workflow.

The development process is:

```text
Requirements
     ↓
Documentation
     ↓
Architecture
     ↓
Database
     ↓
Design System
     ↓
Implementation
     ↓
Testing
     ↓
Security Review
     ↓
Performance Review
     ↓
Client Acceptance
     ↓
Production
```

Coding agents must not ignore the project documentation.

Before implementing a feature, the relevant documentation must be reviewed.

If a requirement conflicts with existing documentation, the conflict must be identified before implementation.

---

# 45. Source of Truth

The `docs/` directory is the primary project knowledge base.

Important architectural and business decisions must be documented.

Code should implement the documented requirements.

When requirements change:

```text
Requirement Change
       ↓
Update Documentation
       ↓
Impact Analysis
       ↓
Update Architecture if required
       ↓
Implement
       ↓
Test
```

Documentation must not be treated as optional.

---

# 46. Future Product Direction

Potential future capabilities include:

* AI-powered college assistant
* Advanced personalised recommendations
* Automated WhatsApp workflows
* Follow-up reminders
* Admission CRM automation
* Student document management
* Application tracking
* College partnership management
* Advanced reporting
* Multi-state college discovery
* Native mobile applications

These features are not mandatory for the initial release unless explicitly approved.

---

# 47. Current Project Status

Current status:

**Discovery / Documentation Phase**

The project must not move directly into full implementation until the core documentation, architecture and database requirements have been reviewed.

Client-specific materials such as:

* Logo
* Brand guidelines
* Award photos
* Certificates
* Exact achievements
* Experience details
* Testimonials
* Student success stories
* Contact information
* WhatsApp number
* Official statistics
* College data sources

will be incorporated when supplied and verified.

---

# 48. Success Definition

College Guide will be considered successful when:

### Student perspective

A student can easily:

> Discover → Filter → Explore → Shortlist → Compare → Understand → Get Guidance

### Client perspective

The admission team can easily:

> Identify → Understand → Contact → Counsel → Follow Up → Convert

### Business perspective

The platform provides:

> Trust + Student Experience + Qualified Leads + Actionable Data

---

# 49. Guiding Principle

> **College Guide should help students make better college decisions while helping the admission guidance team build meaningful, informed and trustworthy student relationships.**

This principle should guide every product, design, technical and business decision made during development.
