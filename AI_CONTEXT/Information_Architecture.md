# College Guide — Information Architecture

## 1. Purpose

This document defines the structural organisation of the College Guide platform.

It establishes:

- Website structure
- Navigation
- Page hierarchy
- Content hierarchy
- User-facing sections
- Admin sections
- URL structure
- Relationships between major areas

The information architecture must remain simple, scalable, and SEO-friendly.

---

# 2. Platform Structure

College Guide consists of two major experiences:

```text
College Guide
│
├── Public Student Platform
│
└── Admin / CRM Platform
````

---

# 3. Public Website Structure

```text
Home
│
├── Explore Colleges
│
├── Education Categories
│   ├── Engineering
│   ├── Medical
│   ├── Dental
│   ├── Nursing
│   ├── Pharmacy
│   ├── Law
│   ├── Arts & Science
│   ├── Agriculture
│   ├── Veterinary
│   ├── Physiotherapy
│   └── Polytechnic
│
├── Locations
│   ├── Chennai
│   ├── Coimbatore
│   ├── Madurai
│   ├── Tiruchirappalli
│   └── Other Locations
│
├── Courses
│
├── Departments
│
├── Find My College
│
├── Compare Colleges
│
├── Shortlisted Colleges
│
├── Career & Course Guides
│
├── About College Guide
│
├── Awards & Achievements
│
├── Student Success Stories
│
├── Testimonials
│
├── Contact / Admission Guidance
│
└── Student Account
```

---

# 4. Homepage Information Hierarchy

The homepage should follow a clear priority order.

```text
Hero
 ↓
College Search
 ↓
Education Categories
 ↓
Popular Locations
 ↓
Featured / Popular Colleges
 ↓
Find My College
 ↓
Why College Guide
 ↓
Awards & Achievements
 ↓
Student Success Stories
 ↓
Testimonials
 ↓
Admission Guidance CTA
 ↓
Footer
```

The exact visual layout will be defined in the UI/UX documentation.

---

# 5. Primary Navigation

The main navigation should provide access to:

* Colleges
* Courses
* Locations
* Find My College
* Compare
* Guidance
* About

A prominent admission-guidance CTA should also be available.

Example:

```text
Logo
Colleges
Courses
Locations
Find My College
Compare
About
[Get Guidance]
```

The navigation must remain simple on mobile.

---

# 6. Education Category Hierarchy

Education categories should follow:

```text
Education Category
      ↓
Courses
      ↓
Departments
      ↓
Colleges
```

Example:

```text
Engineering
    ↓
B.Tech
    ↓
Information Technology
    ↓
Colleges offering IT
```

---

# 7. Location Hierarchy

Locations should follow:

```text
Tamil Nadu
   ↓
District
   ↓
City / Town
   ↓
Colleges
```

Example:

```text
Tamil Nadu
   ↓
Chengalpattu
   ↓
Chennai / Tambaram region
   ↓
Engineering Colleges
```

The exact geographic classification must be based on the verified college dataset.

---

# 8. College Discovery Hierarchy

A student should be able to reach a college through multiple paths.

### Path A

```text
Home
 ↓
Category
 ↓
Location
 ↓
College
```

### Path B

```text
Home
 ↓
Search
 ↓
College
```

### Path C

```text
Home
 ↓
Course
 ↓
Department
 ↓
College
```

### Path D

```text
Home
 ↓
Find My College
 ↓
Recommendation
 ↓
College
```

### Path E

```text
Home
 ↓
Near Me
 ↓
Nearby College
```

---

# 9. College Profile Hierarchy

A college profile should be organised into logical sections.

```text
College Profile
│
├── Overview
├── Location
├── About
├── Courses
├── Departments
├── Eligibility
├── Admission Information
├── Fees
├── Facilities
├── Hostel
├── Transport
├── Infrastructure
├── Placement Information
├── Gallery
└── Get Admission Guidance
```

Only relevant and verified sections should be displayed.

---

# 10. Student Account Structure

```text
Student Account
│
├── Dashboard
├── My Profile
├── My Shortlist
├── My Comparisons
├── My Recommendations
├── My Enquiries
└── Account Settings
```

Students must not have access to:

* Internal lead scores
* Counsellor notes
* Internal CRM information
* Private business information

---

# 11. Find My College Structure

```text
Find My College
│
├── Introduction
├── Questions
│   ├── Category
│   ├── Course
│   ├── Department
│   ├── Location
│   ├── Budget
│   └── Preferences
│
└── Recommendations
    ├── Match Score
    ├── Reasons
    ├── College Profile
    ├── Shortlist
    └── Get Guidance
```

---

# 12. Compare Structure

```text
Compare Colleges
│
├── Selected Colleges
│
├── Basic Information
├── Location
├── Courses
├── Departments
├── Fees
├── Facilities
├── Hostel
├── Accreditation
└── Get Guidance
```

The comparison structure must adapt to mobile screens.

---

# 13. Guidance Structure

The guidance section should include:

```text
Admission Guidance
│
├── Talk to an Expert
├── Request Callback
├── WhatsApp
├── Course Guidance
└── Career Guides
```

All conversion actions route to the College Guide team.

---

# 14. Trust & Credibility Structure

```text
About College Guide
│
├── About Us
├── Experience
├── Awards
├── Achievements
├── Recognitions
├── Student Success
└── Testimonials
```

This section should establish confidence without making unsupported claims.

---

# 15. Career & Course Content

Content may be organised as:

```text
Guides
│
├── Course Guides
│   ├── Engineering Courses
│   ├── Medical Courses
│   ├── Nursing Courses
│   └── Other Categories
│
├── Career Guides
│
├── Admission Guides
│
└── Student Guides
```

Content must be structured for SEO and easy discovery.

---

# 16. Public URL Strategy

URLs should be clean, readable, and SEO-friendly.

Examples:

```text
/
 /colleges
 /engineering
 /medical
 /nursing
 /law
 /arts-science

 /locations
 /locations/chennai
 /locations/coimbatore

 /courses
 /courses/btech
 /courses/bsc

 /departments
 /departments/computer-science

 /colleges/college-name

 /colleges/college-name/computer-science

 /find-my-college
 /compare
 /guidance
 /about
 /awards
 /success-stories
 /testimonials
 /guides
```

The final URL structure should be reviewed against SEO and database architecture before implementation.

---

# 17. Search Architecture

Search should conceptually support:

```text
Search
│
├── Colleges
├── Courses
├── Departments
├── Locations
└── Categories
```

Search results should clearly identify the result type.

Example:

```text
Computer Science
Department

ABC Engineering College
College

Chennai
Location
```

---

# 18. Filtering Architecture

Filters should adapt to the selected context.

Example:

```text
Engineering
│
├── Location
├── Department
├── Course
├── College Type
├── Hostel
└── Other Verified Filters
```

The system should avoid showing irrelevant filters.

---

# 19. Admin Information Architecture

Admin structure:

```text
Admin Dashboard
│
├── Overview
│
├── Students
│
├── Leads
│
├── Counselling
│
├── Colleges
│
├── Categories
│
├── Courses
│
├── Departments
│
├── Locations
│
├── Awards & Achievements
│
├── Testimonials
│
├── Success Stories
│
├── Guides / Content
│
├── Analytics
│
└── Settings
```

---

# 20. Admin Dashboard Hierarchy

The dashboard should prioritise business-critical information.

```text
Dashboard
│
├── New Leads
├── High-Intent Leads
├── Callback Requests
├── Recent Enquiries
├── Student Activity
├── Conversion Metrics
└── Quick Actions
```

---

# 21. Lead Management Structure

```text
Leads
│
├── All Leads
├── New
├── Contacted
├── Counselling
├── College Shortlisted
├── Application
├── Admission In Progress
├── Admitted
├── Not Interested
└── Closed
```

Filters:

* Status
* Counsellor
* Category
* Course
* Department
* Location
* Lead intent
* Date

---

# 22. Student Management Structure

```text
Students
│
├── All Students
├── New Students
├── Active Students
└── Student Profile
```

Student profile:

```text
Student
│
├── Basic Information
├── Preferences
├── Activity Timeline
├── Shortlist
├── Comparisons
├── Enquiries
├── Lead Information
└── Counselling History
```

Sensitive information must only be visible to authorised users.

---

# 23. College Management Structure

```text
Colleges
│
├── All Colleges
├── Published
├── Draft
├── Unpublished
└── Add College
```

College management sections:

```text
College
│
├── Basic Information
├── Location
├── Categories
├── Courses
├── Departments
├── Facilities
├── Hostel
├── Transport
├── Accreditation
├── Media
└── SEO
```

---

# 24. Content Management Structure

```text
Content
│
├── Awards
├── Achievements
├── Testimonials
├── Success Stories
├── Career Guides
├── Course Guides
└── Student Guides
```

---

# 25. Analytics Structure

```text
Analytics
│
├── Overview
├── Student Analytics
├── College Analytics
├── Course Analytics
├── Department Analytics
├── Location Analytics
├── Lead Analytics
└── Conversion Analytics
```

---

# 26. Settings Structure

```text
Settings
│
├── General
├── Profile
├── Users
├── Roles & Permissions
├── WhatsApp
├── Notifications
├── SEO
└── System Configuration
```

Only authorised administrators should access sensitive settings.

---

# 27. Footer Architecture

Footer should provide:

### Discovery

* Colleges
* Courses
* Locations
* Categories

### Guidance

* Admission Guidance
* Find My College
* Contact

### Trust

* About
* Awards
* Success Stories
* Testimonials

### Legal

* Privacy Policy
* Terms
* Cookie information where applicable

### Contact

* College Guide contact information
* WhatsApp
* Approved social links

The footer must not expose direct college admission contact details where prohibited by the business rules.

---

# 28. Breadcrumb Architecture

Public discovery pages should use breadcrumbs where useful.

Example:

```text
Home
 > Engineering
 > Chennai
 > Computer Science
 > College Name
```

Breadcrumbs should help both users and search engines understand page hierarchy.

---

# 29. Navigation Principle

The information architecture should follow:

> **Discover → Explore → Evaluate → Get Guidance**

Students should never feel lost inside the platform.

---

# 30. Scalability Principle

The architecture must support adding:

* New education categories
* New districts
* New cities
* New courses
* New departments
* New colleges
* New content types

without restructuring the entire application.

---

# 31. Information Architecture Rule

The public website should prioritise discoverability and simplicity.

The admin platform should prioritise control and productivity.

The overall structure should remain:

```text
STUDENT
Discover
   ↓
Explore
   ↓
Evaluate
   ↓
Guidance

BUSINESS
Capture
   ↓
Understand
   ↓
Counsel
   ↓
Convert
```

> **The architecture must make the right information available at the right time without overwhelming the user.**