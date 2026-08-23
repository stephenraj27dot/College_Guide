# College Guide — Business Requirements

## 1. Business Overview

College Guide is a college discovery and admission guidance platform focused on helping students across Tamil Nadu discover suitable colleges, courses, departments, and locations.

The platform will also act as a lead-generation and lead-management system for the client's admission guidance business.

The primary business objective is:

> **Attract students, understand their educational preferences, provide personalised guidance, and convert genuine student interest into successful admission opportunities.**

---

## 2. Current Business Problem

Students often face difficulty when choosing:

* Which course to study
* Which department to select
* Which college to choose
* Which location is suitable
* Which colleges match their preferences
* How different colleges compare
* Where to get trustworthy admission guidance

The client already has experience, achievements, awards, and expertise in guiding students.

The platform should digitally extend that expertise to students and parents.

---

## 3. Business Objectives

College Guide should:

1. Increase student reach.
2. Make college discovery easier.
3. Generate qualified student enquiries.
4. Capture student preferences.
5. Understand student interests.
6. Help admission experts prioritise high-intent students.
7. Improve follow-up efficiency.
8. Build trust through client achievements and student success.
9. Provide useful business analytics.
10. Support the client's admission guidance workflow.
11. Increase counselling opportunities.
12. Support successful student admissions.

---

# 4. Target Audience

## 4.1 Primary Audience

Students looking for:

* Undergraduate education
* Professional courses
* Colleges
* Departments
* Admission guidance

## 4.2 Secondary Audience

Parents and guardians who participate in college-selection decisions.

## 4.3 Business Users

* Admission counsellors
* Admission guidance team
* Admin users
* Management

---

# 5. Student Requirements

Students should be able to:

* Browse education categories.
* Browse colleges by location.
* Search colleges.
* Filter colleges.
* Search departments.
* View college details.
* View course details.
* Shortlist colleges.
* Compare colleges.
* Find nearby colleges.
* Take a college-matching questionnaire.
* Receive relevant recommendations.
* View course/career guidance content.
* Request admission guidance.
* Request a callback.
* Contact the College Guide team through WhatsApp.
* Track their own shortlist and preferences where applicable.

---

# 6. Education Category Requirements

The platform should support multiple education categories.

Initial categories:

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
* Other approved categories

The category system must be configurable.

Administrators should be able to add or modify categories without rebuilding the entire application.

---

# 7. Location Requirements

Students must be able to discover colleges based on:

* Tamil Nadu
* District
* City
* Preferred location
* Nearby location

The system should support major Tamil Nadu locations and remain expandable.

Examples:

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

---

# 8. Department and Course Requirements

Students should be able to discover colleges based on their preferred department or course.

Engineering examples may include:

* Computer Science and Engineering
* Information Technology
* Electronics and Communication Engineering
* Electrical and Electronics Engineering
* Mechanical Engineering
* Civil Engineering
* Artificial Intelligence and Data Science
* Artificial Intelligence and Machine Learning
* Cyber Security
* Biotechnology
* Biomedical Engineering

The same principle should apply to other education categories.

Department and course structures must be configurable.

---

# 9. College Information Requirements

Each college profile should provide useful and verified information.

Potential information includes:

* College name
* Logo
* Images
* Location
* District
* Institution type
* Affiliation
* Accreditation
* Courses
* Departments
* Eligibility
* Admission information
* Fees where verified
* Hostel
* Transport
* Campus facilities
* Infrastructure
* Placement information where verified
* Other relevant information

College information should display a suitable last-updated or verification indicator where appropriate.

---

# 10. Critical Business Contact Requirement

The platform must preserve the client's role as the primary admission guidance contact.

Students must not be directed to individual colleges for admission enquiries through College Guide.

The platform should not provide unnecessary direct-contact actions such as:

* Direct college WhatsApp
* Direct college enquiry CTA
* Direct college lead submission
* College-specific admission contact flow

Instead, students should see:

* Talk to an Admission Expert
* Get Admission Guidance
* Request a Callback
* WhatsApp College Guide
* Get Help Choosing a College

---

# 11. Student Lead Capture

The platform should capture student information when necessary for personalised services or enquiries.

Potential fields:

* Name
* Mobile number
* Email
* Preferred category
* Preferred course
* Preferred department
* Preferred location
* Budget preference
* Hostel preference

Only necessary information should be collected.

Appropriate consent and privacy notices must be provided.

---

# 12. Student Interest Tracking

For identified and appropriately consented students, the platform should record meaningful interactions.

Examples:

* College viewed
* Department viewed
* Course viewed
* Search performed
* Location selected
* College shortlisted
* College compared
* Recommendation viewed
* Enquiry submitted
* Callback requested
* WhatsApp contact initiated

This information should help the admission team understand student intent.

---

# 13. Lead Management Requirements

The client should be able to manage leads through a structured workflow.

Suggested statuses:

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

Each lead should support:

* Student information
* Interest information
* Activity history
* Notes
* Status
* Follow-up information
* Created date
* Updated date

---

# 14. Lead Scoring Requirements

The system should support an internal lead-interest score.

Potential signals:

* College views
* Repeat visits
* Shortlists
* Comparisons
* Recommendation interactions
* Enquiries
* Callback requests
* WhatsApp contacts

The system may classify leads internally as:

* Low Intent
* Medium Intent
* High Intent

Lead scoring must remain an internal business feature and must not be presented as a guarantee or judgement to students.

---

# 15. Callback Requirements

Students should be able to request a callback from the College Guide team.

The student may provide:

* Preferred day
* Preferred time
* Optional message

The admission team should be able to:

* View requests
* Assign a status
* Record follow-up
* Mark callback completed

---

# 16. WhatsApp Requirements

A floating WhatsApp action should be available throughout relevant parts of the student experience.

The WhatsApp contact must route to the client's official College Guide communication channel.

Where possible, the message should contain useful context such as:

* Student name
* Interested course
* Preferred location
* Currently viewed college

No college's direct WhatsApp should be used as the primary enquiry route.

---

# 17. Shortlist Requirements

Students should be able to save colleges.

The system should allow:

* Add to shortlist
* Remove from shortlist
* View saved colleges
* Continue exploring
* Request guidance based on shortlist

Shortlist activity may contribute to internal lead-interest signals where consent permits.

---

# 18. Comparison Requirements

Students should be able to compare suitable colleges.

The comparison experience should provide meaningful information such as:

* Location
* Courses
* Departments
* Fees where verified
* Hostel
* Facilities
* Accreditation
* Other verified attributes

Comparison should work well on mobile devices.

---

# 19. Find My College Requirements

The platform should provide a guided questionnaire.

Potential questions:

* Preferred education category
* Preferred course
* Preferred department
* Preferred location
* Budget preference
* Hostel requirement
* Other preferences

The result should provide relevant college matches.

The system should explain why recommendations were made.

---

# 20. Trust and Credibility Requirements

The client's professional experience should be a major part of the website.

The website should showcase:

* Awards
* Achievements
* Recognitions
* Certifications where applicable
* Professional experience
* Student success stories
* Testimonials
* Verified statistics

All claims must be based on genuine client-provided or verified information.

The platform must never invent achievements, awards, statistics, testimonials, or certifications.

---

# 21. Student Success Stories

The platform should support genuine student success stories.

Each story may contain:

* Student name
* Student image where authorised
* Course
* College
* Admission year
* Testimonial
* Success story

Publishing must respect applicable consent requirements.

---

# 22. Admin Requirements

The admin system should allow authorised users to manage:

### Students

* View students
* Search students
* View student activity
* View preferences

### Leads

* View leads
* Filter leads
* Update status
* Add notes
* Manage follow-ups

### Colleges

* Add college
* Edit college
* Publish/unpublish college
* Manage college information
* Manage media

### Courses and Departments

* Add
* Edit
* Organise
* Activate/deactivate

### Locations

* Add
* Edit
* Organise

### Content

* Awards
* Achievements
* Testimonials
* Success stories
* Career guides

---

# 23. Analytics Requirements

The client should receive useful business analytics.

Potential metrics:

* Total students
* New students
* Active students
* New leads
* College views
* Most viewed colleges
* Most searched courses
* Most searched locations
* Most viewed departments
* Shortlists
* Comparisons
* WhatsApp enquiries
* Callback requests
* High-intent leads
* Applications
* Admissions

Analytics should help the client understand demand and improve follow-up.

---

# 24. Business Intelligence

The system should help answer questions such as:

* Which courses are most popular?
* Which locations are most searched?
* Which colleges receive the most interest?
* Which departments receive the most attention?
* Which students show high intent?
* How many leads become counselling cases?
* How many counselling cases become applications?
* How many applications become admissions?

These insights should be available through the admin dashboard where technically appropriate.

---

# 25. Content Management Requirements

The client should not depend on developers for routine content updates.

The admin should be able to manage:

* College information
* Courses
* Departments
* Locations
* Awards
* Achievements
* Testimonials
* Success stories
* Career guides
* Selected website content

---

# 26. Data Quality Requirements

College information must be treated as business-critical content.

The system should support:

* Verification status
* Data source
* Last updated date
* Published status
* Administrative review

Unverified information must not be represented as confirmed facts.

---

# 27. Privacy Requirements

Student information is private business data.

The system must:

* Collect only required information
* Explain data usage
* Obtain appropriate consent
* Restrict administrative access
* Prevent public exposure
* Protect database access
* Protect uploaded documents and media
* Follow applicable privacy and data-protection requirements

---

# 28. Mobile Requirements

The platform must be designed for mobile-first usage.

Students should be able to comfortably:

* Search
* Filter
* Browse
* Compare
* Shortlist
* Submit forms
* Request callbacks
* Contact the admission team

on mobile devices.

---

# 29. SEO Requirements

Public college discovery pages should be search-engine friendly.

The platform should support:

* Search-friendly URLs
* Metadata
* Sitemap
* Canonical URLs
* Structured data where appropriate
* Fast loading
* Mobile optimisation
* Semantic HTML

---

# 30. Performance Requirements

The platform should remain responsive with a large college database.

Requirements include:

* Efficient database queries
* Pagination
* Optimised images
* Lazy loading where appropriate
* Appropriate caching
* Minimal unnecessary client-side processing

---

# 31. Security Requirements

The platform must protect:

* Student data
* Admin accounts
* Lead information
* Private activity history
* Uploaded files
* Database credentials
* Internal business information

Admin operations must require authentication and proper authorisation.

---

# 32. Must-Have Features for Initial Product

The initial production release should include:

1. College discovery
2. Education categories
3. Location-based discovery
4. Course and department filtering
5. Search
6. College profiles
7. Student registration
8. Consent-based activity tracking
9. Shortlist
10. College comparison
11. Find My College
12. Smart recommendations
13. WhatsApp contact
14. Callback request
15. Admission enquiry
16. Lead management
17. Lead scoring
18. CRM pipeline
19. Student profiles
20. Admin dashboard
21. College CMS
22. Course/department CMS
23. Location CMS
24. Awards and achievements CMS
25. Testimonials CMS
26. Analytics
27. SEO
28. Responsive design
29. Security and privacy controls

---

# 33. Future Features

Potential future features include:

* AI college assistant
* Advanced AI recommendations
* WhatsApp automation
* Automated follow-up reminders
* Application tracking
* Student document management
* Advanced CRM automation
* Mobile application
* Multi-state expansion
* Advanced business intelligence

Future features should not compromise the initial product's stability.

---

# 34. Business Success Criteria

The product should be evaluated using:

### Student Success

* Easy discovery
* High engagement
* Useful recommendations
* Successful guidance requests

### Lead Success

* Qualified enquiries
* High-intent leads
* Callback requests
* WhatsApp enquiries

### Business Success

* Counselling conversions
* Application conversions
* Admission conversions
* Improved follow-up efficiency

### Trust Success

* Positive student feedback
* Positive parent feedback
* Strong presentation of genuine achievements
* Accurate college information

---

# 35. Non-Negotiable Business Rules

1. College Guide remains the primary admission guidance contact.
2. Students must not be directly routed to colleges for admission enquiries through the platform.
3. Student personal data must remain private.
4. Activity tracking must respect consent.
5. Client achievements must be genuine.
6. Testimonials must be genuine and authorised.
7. College information must not be fabricated.
8. Unverified claims must not be presented as facts.
9. Admin features must be protected.
10. The platform must remain mobile-friendly.
11. The platform must remain maintainable and scalable.
12. New features must not conflict with these business requirements.

---

# 36. Requirement Change Policy

If the client introduces a new requirement:

```text
New Requirement
      ↓
Business Impact Analysis
      ↓
Update Documentation
      ↓
Technical Impact Analysis
      ↓
Implementation
      ↓
Testing
      ↓
Client Review
```

Requirements must not be implemented blindly without considering their impact on existing functionality.

---

# 37. Business Requirement Principle

> **Every feature must either improve the student's college-selection experience, improve the client's admission workflow, increase qualified student engagement, or provide meaningful business insight.**

Features that provide no meaningful business or user value should not be added merely for visual complexity.
