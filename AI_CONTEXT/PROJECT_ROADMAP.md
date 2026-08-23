## FILE #32 — `AI_CONTEXT/PROJECT_ROADMAP.md`

````md
# College Guide — Project Roadmap

## 1. Purpose

This document defines the implementation roadmap for College Guide.

The project must be built in controlled phases rather than trying to build everything simultaneously.

The primary goal is:

Student Experience
+
Client Business Value
+
Reliable Lead Generation
+
Professional Admin/CRM
+
Scalable Architecture

---

# 2. Development Strategy

Build in this order:

```text
Foundation
   ↓
Database
   ↓
Design System
   ↓
Public Website
   ↓
College Discovery
   ↓
Student Engagement
   ↓
Lead Generation
   ↓
CRM
   ↓
Admin
   ↓
Analytics
   ↓
SEO
   ↓
Testing
   ↓
Deployment
````

---

# 3. Phase 0 — Project Setup

Tasks:

```text
[ ] Create GitHub repository
[ ] Create Next.js project
[ ] Configure TypeScript
[ ] Configure Tailwind / UI system
[ ] Configure ESLint
[ ] Configure formatting
[ ] Create AI_CONTEXT folder
[ ] Add project documentation
[ ] Configure environment variables
[ ] Connect Supabase
[ ] Configure development workflow
```

---

# 4. Phase 1 — Design System

Create the visual foundation.

Tasks:

```text
[ ] Brand identity
[ ] Logo integration
[ ] Typography
[ ] Color system
[ ] Spacing system
[ ] Buttons
[ ] Inputs
[ ] Cards
[ ] Badges
[ ] Modals
[ ] Dropdowns
[ ] Toasts
[ ] Skeleton loaders
[ ] Empty states
[ ] Error states
```

---

# 5. Design Principle

The website should feel:

```text
Modern
Trustworthy
Professional
Student-Friendly
Premium
Simple
Fast
```

Avoid an overly corporate or complicated education-portal appearance.

---

# 6. Phase 2 — Database Foundation

Create the database structure.

Core entities:

```text
Users
Roles
Colleges
Categories
Departments
Courses
Locations
Facilities
College Images
Guides
FAQs
Awards
Achievements
Testimonials
Leads
Lead Activities
Follow-ups
```

---

# 7. Phase 3 — Database Security

Implement:

```text
[ ] Authentication
[ ] Authorization
[ ] RLS
[ ] Role permissions
[ ] Secure API access
[ ] Storage permissions
```

Roles:

```text
Student
Counsellor
Content Manager
Data Manager
Admin
Super Admin
```

---

# 8. Phase 4 — Public Website Foundation

Build:

```text
[ ] Header
[ ] Navigation
[ ] Footer
[ ] Homepage
[ ] Global search
[ ] Responsive navigation
[ ] WhatsApp CTA
[ ] Guidance CTA
```

---

# 9. Phase 5 — College Discovery

Build the core student discovery experience.

```text
[ ] College listing
[ ] College search
[ ] Category filter
[ ] Location filter
[ ] Course filter
[ ] Department filter
[ ] Sorting
[ ] Pagination
[ ] Empty states
```

---

# 10. Phase 6 — Location Discovery

Students should be able to discover colleges based on location.

Flow:

```text
Tamil Nadu
   ↓
District / Region
   ↓
City
   ↓
Category
   ↓
College
```

Examples:

```text
Chennai
Trichy
Coimbatore
Madurai
Salem
Vellore
```

---

# 11. Phase 7 — Category Discovery

Initial categories:

```text
Engineering
Medical
Nursing
Law
Arts & Science
```

Architecture must allow future categories.

---

# 12. Phase 8 — College Detail Page

Build the complete college profile.

Required sections:

```text
College Name
Location
About
Courses
Departments
Facilities
Images
Highlights
Guidance CTA
WhatsApp CTA
```

---

# 13. College Contact Protection

Students must NOT directly contact colleges through the College Guide website.

All major contact actions must route to:

```text
College Guide
```

Example:

```text
Student
   ↓
College Page
   ↓
Interested?
   ↓
WhatsApp / Get Guidance
   ↓
College Guide Counsellor
```

Do not expose prohibited direct college contact information.

---

# 14. Phase 9 — Trust & Authority

This is a major client differentiator.

Build sections for:

```text
Awards
Achievements
Testimonials
Success Stories
Experience
About College Guide
Why Choose Us
```

---

# 15. Trust Section Strategy

The client's real achievements and awards should be displayed prominently.

Possible homepage flow:

```text
Hero
 ↓
College Discovery
 ↓
Why College Guide
 ↓
Awards & Achievements
 ↓
How We Help Students
 ↓
Popular Colleges
 ↓
Testimonials
 ↓
Guidance CTA
```

Exact ordering may be refined during UI implementation.

---

# 16. Phase 10 — Student Engagement

Implement:

```text
[ ] Shortlist
[ ] Compare Colleges
[ ] Recently Viewed
[ ] Course exploration
[ ] Location exploration
```

---

# 17. Shortlist

Students should be able to save colleges for later.

Actions:

```text
Add
Remove
View Shortlist
```

---

# 18. Compare

Students should be able to compare multiple colleges.

Recommended maximum:

```text
4 Colleges
```

Comparison should focus on approved data.

---

# 19. Phase 11 — Guidance System

Build the primary conversion system.

CTA examples:

```text
Get Guidance
Talk to a Counsellor
Find My College
Need Help Choosing?
```

---

# 20. Guidance Form

Possible fields:

```text
Name
Phone
Email
Interested Category
Interested Course
Preferred Location
Message
```

Only collect information necessary for the business workflow.

---

# 21. Lead Creation

Flow:

```text
Student
   ↓
Guidance Form
   ↓
Validation
   ↓
API
   ↓
Lead
   ↓
CRM
   ↓
Counsellor
```

---

# 22. WhatsApp Integration

Implement:

```text
[ ] Floating WhatsApp button
[ ] College-page WhatsApp CTA
[ ] Guidance WhatsApp CTA
[ ] Correct prefilled message
[ ] Analytics tracking
```

Every WhatsApp CTA must route to College Guide.

---

# 23. Phase 12 — CRM

Build the internal lead management system.

Core features:

```text
Dashboard
Lead List
Lead Search
Lead Filters
Lead Detail
Lead Status
Priority
Assignment
Notes
Follow-ups
Activity History
```

---

# 24. CRM Lead Status

Initial structure:

```text
New
Contacted
Follow-up
Qualified
Application
Converted
Lost
```

The final workflow should be confirmed with the client.

---

# 25. CRM Dashboard

Show:

```text
Total Leads
New Leads
Pending Follow-ups
Qualified Leads
Conversions
Overdue Follow-ups
```

---

# 26. Phase 13 — Admin Dashboard

Admin should manage:

```text
Colleges
Categories
Departments
Courses
Locations
Facilities
Images
Guides
FAQs
Awards
Achievements
Testimonials
```

---

# 27. College Management

Admin workflow:

```text
Create
 ↓
Draft
 ↓
Review
 ↓
Approve
 ↓
Publish
```

---

# 28. Content Management

Client should eventually be able to update:

```text
Awards
Achievements
Testimonials
Guides
FAQs
Homepage Sections
```

without modifying code.

---

# 29. Phase 14 — Analytics

Implement:

```text
Page Views
College Views
Search
Filters
Location Interest
Course Interest
Shortlist
Compare
Guidance Click
WhatsApp Click
Enquiry
```

---

# 30. Analytics Dashboard

Display:

```text
Visitors
College Views
Searches
Top Courses
Top Locations
Top Colleges
WhatsApp Clicks
Leads
Conversions
```

---

# 31. Phase 15 — SEO

Implement:

```text
[ ] Metadata
[ ] Dynamic titles
[ ] Descriptions
[ ] Canonical URLs
[ ] Sitemap
[ ] Robots
[ ] Structured Data
[ ] Open Graph
[ ] Internal linking
[ ] SEO-friendly URLs
```

---

# 32. SEO Page Strategy

Important pages:

```text
/
 /engineering-colleges
 /medical-colleges
 /nursing-colleges
 /law-colleges
 /arts-science-colleges
 /locations/[location]
 /colleges/[slug]
 /courses/[slug]
 /guides/[slug]
```

Actual route structure can be refined during implementation.

---

# 33. Phase 16 — Performance

Optimize:

```text
Images
Fonts
JavaScript
Database Queries
API Requests
Caching
Rendering
```

---

# 34. Performance Targets

Focus on:

```text
Fast First Load
Low Layout Shift
Fast Interaction
Mobile Performance
Efficient Search
```

Use measured performance rather than arbitrary claims.

---

# 35. Phase 17 — Accessibility

Implement:

```text
Keyboard Navigation
Focus States
ARIA Labels
Alt Text
Form Labels
Semantic HTML
Color Contrast
```

---

# 36. Phase 18 — Testing

Testing must cover:

```text
Unit
Integration
API
Database
Security
E2E
Responsive
Accessibility
Performance
```

See:

```text
TESTING_QA.md
```

for detailed rules.

---

# 37. Phase 19 — Client UAT

Client reviews:

```text
Branding
Content
Awards
Achievements
College Data
Lead Flow
WhatsApp
CRM
Admin
```

---

# 38. Client Approval Gate

Do not move major client-facing functionality to production until:

```text
Implementation
   ↓
Internal QA
   ↓
Client Review
   ↓
Client Approval
```

---

# 39. Phase 20 — Production Deployment

Deployment flow:

```text
Development
   ↓
GitHub
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

# 40. Phase 21 — Post-Launch

Immediately monitor:

```text
Website
Search
College Pages
Lead Form
WhatsApp
CRM
Database
Analytics
Performance
```

---

# 41. MVP Definition

The first production-ready MVP should contain:

```text
[ ] Professional Homepage
[ ] College Search
[ ] Category Filtering
[ ] Location Filtering
[ ] Course Filtering
[ ] College Detail Pages
[ ] Guidance Form
[ ] WhatsApp
[ ] Lead Creation
[ ] Basic CRM
[ ] Admin College Management
[ ] Awards / Achievements
[ ] Responsive UI
[ ] SEO Foundation
[ ] Security
```

---

# 42. Phase 2 Features

After MVP stability:

```text
[ ] Advanced Comparison
[ ] Advanced Shortlist
[ ] Personalized Recommendations
[ ] Advanced Analytics
[ ] More CRM Automation
[ ] Content Management Improvements
[ ] Advanced Search
```

---

# 43. Future Features

Potential future features:

```text
AI College Recommendation
AI Course Guidance
Student Preference Matching
Admission Notifications
Application Tracking
Counsellor Chat
Automated Follow-ups
Campaign Management
Lead Scoring
```

These should not delay the MVP.

---

# 44. AI Recommendation — Future

Possible flow:

```text
Student Preferences
       ↓
Course
Location
Budget
Category
Interest
       ↓
Recommendation Engine
       ↓
Relevant Colleges
       ↓
College Guide Counsellor
```

Recommendations must be transparent and based on approved data.

---

# 45. Lead Scoring — Future

Potential signals:

```text
College Views
Course Interest
Shortlist
Compare
Guidance Request
WhatsApp Click
```

Could contribute to a lead score.

Do not treat automated scoring as guaranteed student intent.

---

# 46. AI Development Rule

AI should implement the roadmap phase-by-phase.

Never ask AI:

```text
"Build the entire website."
```

Instead:

```text
Read AI_CONTEXT
 ↓
Understand current phase
 ↓
Implement one feature
 ↓
Test
 ↓
Review
 ↓
Move to next feature
```

---

# 47. Feature Implementation Workflow

For every feature:

```text
1. Read relevant AI_CONTEXT files
2. Inspect existing code
3. Understand dependencies
4. Define acceptance criteria
5. Implement
6. Run lint
7. Run type check
8. Run tests
9. Review UI
10. Fix issues
11. Commit
```

---

# 48. Do Not Skip Phases

Do not start advanced AI recommendations before:

```text
College Database
Search
Location
Course
Lead System
CRM
```

are stable.

---

# 49. Data-First Principle

College Guide depends heavily on accurate data.

Therefore:

```text
Database
+
Data Quality
+
Search
+
Filtering
```

are more important than flashy animations.

---

# 50. UX-First Principle

Students should quickly answer:

```text
Where can I study?
What courses are available?
Which colleges match my interest?
Which location is suitable?
How can College Guide help me?
```

---

# 51. Business-First Principle

The client should quickly answer:

```text
How many students are interested?
Which colleges are popular?
Which courses are demanded?
Where are students coming from?
How many leads came today?
Who needs follow-up?
```

---

# 52. Trust-First Principle

The website must establish credibility through:

```text
Real Awards
Real Achievements
Real Experience
Real Testimonials
Accurate Information
Professional Design
Transparent Guidance
```

Never fabricate credibility.

---

# 53. Scalability Principle

The architecture must support growth from:

```text
100 Colleges
   ↓
1,000 Colleges
   ↓
5,000 Colleges
   ↓
10,000+ Colleges
```

without requiring a complete rewrite.

---

# 54. Roadmap Priority Matrix

```text
HIGH BUSINESS + HIGH USER VALUE
--------------------------------
College Search
Location
Course Discovery
Lead Generation
WhatsApp
CRM
College Pages
Trust Content

HIGH VALUE + FUTURE
-------------------
AI Recommendations
Lead Scoring
Advanced Analytics
Automation

LOW PRIORITY
------------
Decorative Features
Unnecessary Animations
Complex Features With No Business Value
```

---

# 55. Definition of Phase Completion

A phase is complete only when:

```text
[ ] Feature implemented
[ ] Database integrated
[ ] Security checked
[ ] Responsive
[ ] Accessible
[ ] Tested
[ ] Analytics added where required
[ ] Documentation updated
[ ] No critical regression
```

---

# 56. Final Roadmap

```text
PHASE 0
Project Setup
      ↓
PHASE 1
Design System
      ↓
PHASE 2
Database
      ↓
PHASE 3
Security
      ↓
PHASE 4
Public Website
      ↓
PHASE 5
College Discovery
      ↓
PHASE 6
Location
      ↓
PHASE 7
Categories
      ↓
PHASE 8
College Pages
      ↓
PHASE 9
Trust & Achievements
      ↓
PHASE 10
Shortlist + Compare
      ↓
PHASE 11
Guidance + WhatsApp
      ↓
PHASE 12
CRM
      ↓
PHASE 13
Admin
      ↓
PHASE 14
Analytics
      ↓
PHASE 15
SEO
      ↓
PHASE 16
Performance
      ↓
PHASE 17
Accessibility
      ↓
PHASE 18
Testing
      ↓
PHASE 19
Client UAT
      ↓
PHASE 20
Production
      ↓
PHASE 21
Maintenance
```

---

# 57. Final Principle

> Build College Guide like a real product, not like a one-time website.

Every phase must create a stable foundation for the next phase.

```text
Strong Foundation
      +
Accurate Data
      +
Excellent UX
      +
Secure Architecture
      +
Reliable Lead System
      +
Professional CRM
      =
A Website That Creates Real Business Value
```
