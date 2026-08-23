# College Guide — Feature Specification

## 1. Purpose

This document defines the functional features of the College Guide platform.

Every feature must have a clear purpose, expected behaviour, user access level, business rules, and acceptance criteria.

Features must be implemented according to this document and related architecture documents.

---

# 2. Feature Classification

Features are divided into:

- Public Student Features
- Student Account Features
- Guidance & Lead Features
- Admin Features
- Content Management Features
- Analytics Features
- Platform Features

---

# 3. Public Student Features

## 3.1 Homepage

The homepage should communicate:

- What College Guide does
- Education categories
- College discovery
- Location discovery
- Find My College
- Trust indicators
- Awards and achievements
- Student success stories
- Testimonials
- Admission guidance
- WhatsApp contact

### Primary CTAs

- Explore Colleges
- Find My College
- Get Admission Guidance
- Talk to an Expert

---

## 3.2 Education Categories

Students should be able to browse:

- Engineering
- Medical
- Dental
- Nursing
- Pharmacy
- Law
- Arts & Science
- Agriculture
- Veterinary
- Physiotherapy
- Polytechnic
- Other configured categories

Each category should have:

- Category name
- Description
- Relevant courses
- Popular departments
- College count where appropriate

---

## 3.3 Location Discovery

Students should be able to browse colleges by:

- State
- District
- City
- Nearby location

Example:

```text
Tamil Nadu
 ├── Chennai
 ├── Coimbatore
 ├── Madurai
 ├── Tiruchirappalli
 └── Other locations
````

---

## 3.4 Search

Global search should support:

* College names
* Courses
* Departments
* Locations
* Education categories

Search should provide:

* Suggestions
* Relevant results
* Empty state
* Clear filters
* Mobile-friendly interaction

---

## 3.5 College Listing

College listing pages should provide:

* College cards
* College name
* Location
* Category
* Key available courses
* Relevant highlights
* Shortlist action
* Compare action
* View details action

Filters may include:

* Location
* Category
* Department
* Course
* College type
* Hostel availability
* Other verified attributes

---

# 4. College Profile

## 4.1 Overview

Each college should have a dedicated profile.

The profile may contain:

* Name
* Logo
* Images
* Location
* Institution type
* Affiliation
* Accreditation
* Overview
* Courses
* Departments
* Eligibility
* Admission information
* Fees where verified
* Hostel
* Transport
* Facilities
* Infrastructure
* Placement information where verified

---

## 4.2 College Profile Actions

Primary actions:

* Shortlist
* Compare
* Get Admission Guidance
* Request Callback
* WhatsApp College Guide

The profile must not provide direct college admission contact actions.

---

# 5. Course & Department Explorer

Students should be able to explore:

```text
Category
   ↓
Course
   ↓
Department
   ↓
Available Colleges
```

The system should show colleges offering the selected course or department.

---

# 6. Shortlist

Students can save colleges.

### Actions

* Add
* Remove
* View shortlist
* Compare
* Request guidance

### Behaviour

The shortlist should persist for authenticated students.

For anonymous users, temporary/local storage may be used where appropriate.

---

# 7. College Comparison

Students should be able to compare multiple colleges.

### Comparison information

* Location
* Courses
* Departments
* Fees where verified
* Hostel
* Facilities
* Accreditation
* Other verified information

### Requirements

* Easy selection
* Clear comparison
* Mobile-friendly layout
* Remove college
* Add another college
* Request guidance

---

# 8. Find My College

A guided questionnaire helps students discover suitable colleges.

### Inputs

* Education category
* Course
* Department
* Location
* Budget preference
* Hostel requirement
* Other preferences

### Output

The system displays recommended colleges with:

* Match score
* Reasons for recommendation
* College highlights
* Shortlist
* Compare
* Get Guidance

The recommendation system must not claim guaranteed suitability or admission.

---

# 9. Near Me

Students can discover colleges near their current location.

### Flow

```text
Near Me
 ↓
Location Permission
 ↓
Location Available
 ↓
Calculate Distance
 ↓
Display Nearby Colleges
```

If permission is denied:

```text
Permission Denied
 ↓
Manual Location Selection
```

---

# 10. Student Registration

Registration should be required only when a personalised or persistent feature needs identity.

Potential information:

* Name
* Mobile
* Email
* Preferred category
* Course
* Department
* Location

The system should minimise unnecessary fields.

---

# 11. Authentication

The platform should support secure authentication.

Potential methods:

* Mobile OTP
* Email authentication
* Passwordless authentication

The final method should be selected during technical architecture planning.

---

# 12. Student Profile

Students should be able to manage:

* Name
* Mobile
* Email
* Education preference
* Course preference
* Department preference
* Location preference
* Hostel preference
* Budget preference

Students should not be able to access internal lead scores or private counsellor notes.

---

# 13. Activity Tracking

For identified and appropriately consented users, track meaningful activities.

Examples:

* Search
* College view
* Course view
* Department view
* Shortlist
* Compare
* Recommendation interaction
* Enquiry
* Callback
* WhatsApp interaction

Activity should support the admission guidance workflow.

---

# 14. Admission Enquiry

Students can submit an enquiry.

### Form

Possible fields:

* Name
* Mobile
* Email
* Interested category
* Course
* Department
* Preferred location
* College of interest
* Message
* Preferred callback time

### Result

After submission:

```text
Enquiry Created
 ↓
Lead Created
 ↓
College Guide Team Notified
 ↓
Student Receives Confirmation
```

---

# 15. WhatsApp

A floating WhatsApp button should be available on relevant pages.

The button must contact the College Guide team.

It should never expose or route to a college's private admission WhatsApp.

Optional contextual pre-filled message:

```text
Hi, I need admission guidance for
[Course] in [Location].
```

---

# 16. Callback Request

Students can request a callback.

### Information

* Name
* Mobile
* Preferred time
* Optional message
* Interested course
* Interested college

### Status

```text
REQUESTED
CONTACTED
COMPLETED
CANCELLED
```

---

# 17. Lead Management

Every valid admission enquiry should become a lead.

### Lead information

* Student
* Contact details
* Preferences
* Interested college
* Activity summary
* Lead score
* Status
* Assigned counsellor
* Notes
* Follow-up
* Created timestamp
* Updated timestamp

---

# 18. Lead Pipeline

Initial pipeline:

```text
NEW
 ↓
CONTACTED
 ↓
COUNSELLING
 ↓
COLLEGE_SHORTLISTED
 ↓
APPLICATION
 ↓
ADMISSION_IN_PROGRESS
 ↓
ADMITTED
```

Alternative outcomes:

```text
NOT_INTERESTED
CLOSED
```

---

# 19. Lead Scoring

The system may calculate an internal score based on:

* College views
* Repeat views
* Shortlists
* Comparisons
* Recommendation activity
* Enquiries
* Callback requests
* WhatsApp contact

Example:

```text
0–39   → Low Intent
40–69  → Medium Intent
70–100 → High Intent
```

The exact scoring algorithm will be defined separately.

---

# 20. Student Activity Timeline

Counsellors should see a chronological activity timeline.

Example:

```text
10:30 AM — Viewed XYZ College
10:34 AM — Viewed CSE Department
10:40 AM — Shortlisted XYZ College
10:45 AM — Compared XYZ vs ABC
10:52 AM — Requested Callback
```

This helps counsellors understand the student's interests.

---

# 21. Admin Dashboard

Dashboard should display:

* Total students
* New students
* Total leads
* New leads
* High-intent leads
* Callback requests
* WhatsApp enquiries
* Applications
* Admissions

Dashboard should prioritise actionable information.

---

# 22. Student Management

Admin/counsellor can:

* Search students
* Filter students
* View student profile
* View preferences
* View permitted activity
* View lead information
* Assign counsellor
* Add internal notes

Private student information must remain protected.

---

# 23. College Management

Admin can:

* Add college
* Edit college
* Draft college
* Publish college
* Unpublish college
* Add images
* Add facilities
* Add courses
* Add departments
* Update location
* Update verified information

---

# 24. Course Management

Admin can:

* Add course
* Edit course
* Activate/deactivate course
* Associate course with category
* Associate course with colleges

---

# 25. Department Management

Admin can:

* Add department
* Edit department
* Associate department with course
* Associate department with colleges
* Activate/deactivate department

---

# 26. Location Management

Admin can manage:

* State
* District
* City
* Locality

Location hierarchy should remain structured.

---

# 27. Awards & Achievements

Admin can:

* Add award
* Upload award image
* Add awarding organisation
* Add year
* Add description
* Edit award
* Publish/unpublish award

Only genuine client information should be published.

---

# 28. Testimonials

Admin can:

* Add testimonial
* Add student information
* Add course
* Add college
* Add testimonial content
* Upload image where authorised
* Publish/unpublish

---

# 29. Student Success Stories

Admin can create success stories containing:

* Student name
* Image
* Course
* College
* Admission year
* Story
* Testimonial
* Media

---

# 30. Career & Course Guides

The CMS may support educational content such as:

* Course guides
* Career guides
* Department explanations
* Admission guidance articles
* Student preparation guides

Content must be reviewed before publication.

---

# 31. Analytics

Analytics should provide:

### Student

* New registrations
* Active students
* Returning students

### Discovery

* Popular colleges
* Popular courses
* Popular departments
* Popular locations

### Engagement

* Views
* Shortlists
* Comparisons
* Recommendations

### Leads

* Enquiries
* WhatsApp
* Callback
* High-intent leads

### Conversion

* Counselling
* Applications
* Admissions

---

# 32. Notifications

The system should support internal notifications for:

* New lead
* New callback
* High-intent lead
* Assigned lead
* Follow-up reminder

Notification channels may include:

* In-dashboard notifications
* Email
* WhatsApp
* Other approved integrations

The exact implementation will be decided later.

---

# 33. Content Search & Filtering

Admin lists should support:

* Search
* Filters
* Sorting
* Pagination

This applies to:

* Students
* Leads
* Colleges
* Courses
* Departments
* Locations
* Testimonials
* Awards

---

# 34. Role-Based Access

The platform should support different permissions.

Initial roles:

```text
SUPER_ADMIN
ADMIN
COUNSELLOR
CONTENT_MANAGER
```

Each role should only access the functions required for its responsibilities.

---

# 35. Responsive Experience

All student-facing features must support:

* Mobile
* Tablet
* Desktop

Admin interfaces should also be responsive where practical.

---

# 36. Loading States

Every asynchronous feature must have an appropriate loading state.

Examples:

* Search loading
* College listing loading
* College profile loading
* Recommendation loading
* Dashboard loading

Skeleton loaders should be preferred where appropriate.

---

# 37. Empty States

Every list must have a useful empty state.

Example:

```text
No colleges found.

Try:
• Changing your location
• Removing a filter
• Selecting another department
```

---

# 38. Error Handling

Errors must be:

* Understandable
* User-friendly
* Actionable
* Non-technical

Never expose raw database or server errors to students.

---

# 39. Feature Priority

## P0 — Critical

* College discovery
* Categories
* Location
* Search
* College profiles
* Student registration
* Enquiry
* WhatsApp
* Callback
* Lead management
* Admin authentication
* College CMS

## P1 — High Priority

* Shortlist
* Compare
* Find My College
* Recommendations
* Activity tracking
* Lead scoring
* Student activity timeline
* Awards
* Testimonials
* Analytics

## P2 — Future

* AI assistant
* WhatsApp automation
* Automated follow-ups
* Application tracking
* Document management
* Mobile application
* Multi-state expansion

---

# 40. Feature Acceptance Principle

A feature is not considered complete simply because the UI exists.

A feature is complete only when:

* UI works
* Mobile works
* Data is stored correctly
* Permissions are correct
* Loading state exists
* Empty state exists
* Error handling exists
* Validation exists
* Security rules exist
* Analytics are implemented where required
* Relevant documentation is updated
* Feature has been tested

---

# 41. Feature Development Rule

Before implementing a feature:

```text
Requirement
 ↓
Feature Specification
 ↓
Architecture Impact
 ↓
Database Impact
 ↓
UI/UX
 ↓
Implementation
 ↓
Testing
 ↓
Acceptance
```

No feature should be implemented blindly.

---

# 42. Core Product Rule

> **Every feature must improve student discovery, student guidance, client lead management, client credibility, or business intelligence.**

# College Guide — Feature Specification

## 1. Purpose

This document defines the complete functional feature set of the College Guide platform.

Every feature must support one of these primary goals:

1. Help students discover suitable colleges.
2. Help students understand courses and departments.
3. Help students compare and shortlist colleges.
4. Convert interested students into leads for College Guide.
5. Help College Guide counsellors manage and convert leads.
6. Build trust through the client's experience, achievements, awards and success stories.
7. Provide administrators with complete control over the platform.

---

# 2. Core Product Principle

College Guide is NOT a direct college-contact marketplace.

The platform acts as:

```text
Student
   ↓
College Discovery
   ↓
College Information
   ↓
Student Preference
   ↓
Guidance / Enquiry
   ↓
College Guide
   ↓
Counsellor
   ↓
Student Admission Guidance
````

The student must contact College Guide, not the college directly.

---

# 3. Primary User Types

The application must support:

```text
Student
Counsellor
Content Manager
Admin
Super Admin
```

---

# 4. Student Features

Students should be able to:

* Browse colleges
* Browse categories
* Browse courses
* Browse departments
* Browse locations
* Search colleges
* Filter colleges
* Sort colleges
* View college details
* Compare colleges
* Shortlist colleges
* Get personalised recommendations
* Submit an enquiry
* Request a callback
* Contact College Guide through WhatsApp
* View College Guide achievements
* Read success stories
* Read educational guides
* Create/manage profile
* Save preferences

---

# 5. Homepage

The homepage should immediately communicate:

```text
Find the Right College for Your Future
```

Possible homepage sections:

```text
Hero Section
Search
Explore by Category
Explore by Location
Popular Courses
Featured Colleges
How College Guide Works
Why Students Trust Us
Awards & Achievements
Success Stories
Student Guidance CTA
FAQ
Footer
```

---

# 6. Hero Search

The homepage should provide a prominent discovery experience.

Possible inputs:

```text
What do you want to study?
Where do you want to study?
Which category?
```

Example:

```text
Course / Department
        +
Location
        ↓
Find Colleges
```

---

# 7. Explore by Category

Students should see major categories such as:

```text
Engineering
Medical
Nursing
Law
Arts & Science
Pharmacy
Architecture
Agriculture
Management
```

The exact category list must come from the database.

---

# 8. Explore by Location

Students should be able to select locations.

Example:

```text
Chennai
Coimbatore
Madurai
Trichy
Salem
Tirunelveli
Erode
Vellore
```

The final location list must come from the database.

---

# 9. Location Discovery

Students should be able to navigate:

```text
Tamil Nadu
   ↓
District
   ↓
City / Town
   ↓
Category
   ↓
College
```

---

# 10. College Listing

College listing pages must provide:

* College cards
* College name
* Location
* Category
* Available courses
* Key highlights
* Verified indicator where applicable
* Shortlist action
* Compare action
* View details action

Do not expose direct college contact information.

---

# 11. College Card

Recommended card structure:

```text
College Image
College Name
Location
Category
Key information
Verified status
[View College]
[Shortlist]
[Compare]
```

Avoid overcrowding cards with unnecessary information.

---

# 12. College Detail Page

College detail page should provide:

```text
College Header
Overview
Location
Courses
Departments
Facilities
Gallery
Admission Guidance
Related Colleges
FAQs
College Guide CTA
```

---

# 13. College Contact Rule

The college profile must NOT provide direct contact buttons such as:

```text
Call College
WhatsApp College
Email College
Contact College
```

Instead:

```text
Talk to College Guide
Get Admission Guidance
Request a Callback
WhatsApp College Guide
```

---

# 14. College Gallery

The college page may contain:

* Campus images
* Facilities
* Library
* Laboratories
* Hostel
* Sports
* Events

Only approved media should be published.

---

# 15. Courses Feature

Students should be able to browse courses independently.

Example:

```text
B.Tech
B.E.
MBBS
B.Sc
BCA
B.Com
BBA
LLB
B.Pharm
B.Sc Nursing
```

The final course catalogue must come from the database.

---

# 16. Department Feature

Students should be able to explore departments.

Examples:

```text
Computer Science & Engineering
Information Technology
Artificial Intelligence & Data Science
Mechanical Engineering
Civil Engineering
Electronics & Communication Engineering
```

---

# 17. Course → College Discovery

A student should be able to select:

```text
Course
   ↓
Location
   ↓
Available Colleges
```

Example:

```text
B.Tech Information Technology
        +
Chennai
        ↓
Matching Colleges
```

---

# 18. Department → College Discovery

Example:

```text
Computer Science & Engineering
        +
Coimbatore
        ↓
Relevant Colleges
```

---

# 19. Search

Search should support:

* College name
* Course
* Department
* Location
* Category

Search should tolerate common variations and spelling differences where practical.

---

# 20. Search Suggestions

As the student types, suggestions may show:

```text
Colleges
Courses
Departments
Locations
```

Example:

```text
Search: "computer"

Computer Science Engineering
Computer Applications
Computer Science Colleges
```

---

# 21. Filters

College listings should support relevant filters.

Potential filters:

```text
Category
Location
Course
Department
College Type
Facilities
```

Only useful filters should be displayed.

---

# 22. Sorting

Possible sorting:

```text
Relevance
Popular
Name
Recently Updated
```

Do not claim "Best" or "Top" rankings unless there is a verified methodology.

---

# 23. Comparison Feature

Students should be able to compare multiple colleges.

Comparison may include:

```text
College Name
Location
Category
Courses
Departments
Facilities
Other verified information
```

Do not fabricate comparison values.

---

# 24. Comparison Limit

Keep the comparison experience manageable.

Recommended:

```text
Minimum: 2
Maximum: 3 or 4
```

Final number should be decided during implementation based on UX testing.

---

# 25. Shortlist Feature

Students can save colleges.

Example:

```text
❤️ Shortlist
```

Shortlisted colleges should appear in:

```text
My Shortlist
```

---

# 26. Guest Shortlist

If possible, support a lightweight guest shortlist using browser storage.

When the student signs in:

```text
Guest Shortlist
       ↓
Merge
       ↓
Student Account
```

This reduces friction.

---

# 27. Student Profile

Profile may contain:

```text
Name
Phone
Email
Preferred Location
Preferred Category
Preferred Course
Preferred Department
```

Only collect information needed for the product.

---

# 28. Student Preferences

Students should be able to select preferences.

Example:

```text
What are you interested in?

Engineering
Medical
Nursing
Law
Arts & Science
```

Then:

```text
Preferred location?
Preferred course?
Preferred department?
```

---

# 29. Find My College

Create a guided recommendation flow.

Example:

```text
Step 1
What are you interested in?

        ↓

Step 2
Which course?

        ↓

Step 3
Preferred location?

        ↓

Step 4
What matters most?

        ↓

Recommended Colleges
```

---

# 30. Recommendation Output

The system may display:

```text
Recommended for You
```

Each recommendation should explain why it was shown.

Example:

```text
Matches your preferred course
+
Matches your preferred location
```

Do not claim guaranteed suitability.

---

# 31. Lead Generation

Important conversion actions:

```text
Get Guidance
Request Callback
Talk to Counsellor
WhatsApp Us
Find My College
```

All should create or update a College Guide lead where appropriate.

---

# 32. Enquiry Form

Suggested fields:

```text
Name
Phone
Email (optional if appropriate)
Interested Category
Interested Course
Preferred Location
Message
```

Keep the form short.

---

# 33. Enquiry Flow

```text
Student
   ↓
Submit Enquiry
   ↓
Validate
   ↓
Create / Update Lead
   ↓
Success Message
   ↓
College Guide Counsellor
```

---

# 34. Callback Request

Student can request:

```text
Call Me Back
```

Possible information:

```text
Name
Phone
Preferred time
Course
Location
Message
```

---

# 35. WhatsApp Feature

A visible WhatsApp CTA should be available throughout important student pages.

Examples:

```text
WhatsApp Us
Chat with College Guide
Need Help? WhatsApp Us
```

All WhatsApp communication must route to the College Guide business contact.

---

# 36. WhatsApp Placement

Possible placements:

```text
Desktop:
Floating right-side button

Mobile:
Sticky bottom CTA
```

Do not let the WhatsApp button cover important content.

---

# 37. Trust Section

The website should strongly communicate client credibility.

Possible sections:

```text
Why Choose College Guide
Our Experience
Awards
Achievements
Student Success
Our Approach
```

---

# 38. Awards & Achievements

The client may provide award photos later.

The system should support:

```text
Award title
Organization
Year
Description
Image
```

Awards should be visually prominent but not excessive.

---

# 39. Client Profile

Create a professional section introducing the client's experience.

Possible information:

```text
Experience
Achievements
Areas of Expertise
Awards
Student Guidance Approach
```

Only client-approved information should be published.

---

# 40. Success Stories

Students should be able to read genuine success stories.

Each story may contain:

```text
Student
Course
College
Story
Image
Outcome
```

Do not publish personal information without appropriate approval.

---

# 41. Testimonials

Display authentic testimonials.

Recommended:

```text
Student Name
Course / Context
Testimonial
Optional Image
```

Do not generate fake testimonials.

---

# 42. Guides

Create educational content to help students.

Examples:

```text
How to Choose a College
How to Choose a Course
Engineering Course Guide
College Admission Checklist
```

---

# 43. FAQ

Important pages may include FAQs.

Examples:

```text
How can I find colleges?
How can I compare colleges?
How does College Guide help students?
Can I speak with a counsellor?
```

---

# 44. Student Dashboard

If authentication is implemented, student dashboard may contain:

```text
My Profile
My Shortlist
My Comparisons
My Enquiries
My Preferences
Recommended Colleges
```

Keep it simple.

---

# 45. Counsellor Dashboard

Counsellors should see:

```text
New Leads
Assigned Leads
Follow-ups
High Intent Leads
Today's Tasks
Recent Enquiries
```

---

# 46. Lead Status

Recommended lead statuses:

```text
New
Contacted
Interested
Follow-up
Counselling
Application
Converted
Not Interested
Closed
```

Final statuses should be configurable.

---

# 47. Lead Priority

Possible priorities:

```text
Low
Medium
High
Urgent
```

Priority may be based on:

* Student intent
* Enquiry type
* Requested callback
* Course interest
* Follow-up urgency

---

# 48. Lead Assignment

Leads may be:

```text
Unassigned
Assigned to Counsellor
Transferred
Closed
```

Admin should be able to reassign leads.

---

# 49. Lead Notes

Counsellors may add private notes.

Students must never see internal counsellor notes.

---

# 50. Follow-Up Management

Counsellors should be able to record:

```text
Next Follow-up
Follow-up Date
Follow-up Note
Status
```

Future implementation may support reminders.

---

# 51. Lead Timeline

Each lead should have an activity timeline.

Example:

```text
10:30 AM
Enquiry submitted

11:15 AM
Counsellor contacted student

02:00 PM
Follow-up scheduled

Next Day
Student contacted again
```

---

# 52. Admin College Management

Admins should be able to:

```text
Create College
Edit College
Verify College
Publish College
Archive College
Manage Courses
Manage Departments
Manage Media
```

---

# 53. Admin Location Management

Admins should be able to manage:

```text
States
Districts
Cities
Towns
```

Avoid hardcoding locations in the frontend.

---

# 54. Admin Course Management

Admins should be able to:

```text
Create Course
Edit Course
Deactivate Course
Map Course to College
```

---

# 55. Admin Department Management

Admins should be able to:

```text
Create Department
Edit Department
Deactivate Department
Map Department to College
```

---

# 56. Content Management

Admin/content managers should manage:

```text
Guides
FAQs
Awards
Testimonials
Success Stories
Homepage Sections
```

---

# 57. Draft / Publish

Content should support:

```text
Draft
Review
Published
Archived
```

Only published content appears publicly.

---

# 58. Media Management

Admin should be able to:

```text
Upload Image
Preview
Add Alt Text
Add Caption
Publish
Archive
```

---

# 59. Dashboard Analytics

Admin dashboard may display:

```text
Total Students
New Leads
Active Leads
Converted Leads
College Views
Popular Courses
Popular Locations
Popular Colleges
WhatsApp Clicks
Enquiries
```

---

# 60. Student Analytics

Track useful anonymous/aggregated events.

Examples:

```text
College Viewed
Course Viewed
Search Performed
College Shortlisted
College Compared
Recommendation Started
Recommendation Completed
Enquiry Submitted
WhatsApp Clicked
```

---

# 61. Conversion Funnel

Admin should eventually be able to understand:

```text
Visitors
   ↓
College Views
   ↓
Shortlists
   ↓
Enquiries
   ↓
Counselling
   ↓
Conversion
```

---

# 62. Notification System

Future-ready architecture should support notifications.

Possible notifications:

```text
New Lead
Lead Assigned
Follow-up Reminder
New Enquiry
System Alert
```

---

# 63. Error Handling

Every important feature must provide useful states:

```text
Loading
Success
Empty
Error
Offline / Network failure
```

Example empty state:

```text
No colleges found.

Try changing your location or course.
```

---

# 64. Mobile Experience

Mobile users are a primary audience.

Important mobile actions:

```text
Search
Filter
View College
Shortlist
Compare
WhatsApp
Request Callback
```

must be easy to access.

---

# 65. Accessibility

The website should support:

* Keyboard navigation
* Semantic HTML
* Accessible labels
* Adequate contrast
* Screen-reader-friendly controls
* Visible focus states
* Meaningful alt text

---

# 66. Performance

Avoid unnecessary:

* Large JavaScript bundles
* Unoptimized images
* Excessive animations
* Duplicate API calls
* Unnecessary database queries

---

# 67. Responsive Design

Support:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Do not design desktop first and simply shrink it.

Design responsive layouts intentionally.

---

# 68. Empty States

Every list feature should have an empty state.

Examples:

```text
No shortlisted colleges yet.

No colleges match your filters.

No enquiries yet.

No recommendations available yet.
```

---

# 69. Loading States

Use skeleton loading where appropriate.

Avoid displaying blank screens while data loads.

---

# 70. Error States

Example:

```text
We couldn't load the colleges.

Please try again.

[ Try Again ]
```

Avoid exposing technical errors.

---

# 71. Feature Priority

## Phase 1 — Core

```text
Homepage
Categories
Locations
College Listing
College Detail
Courses
Departments
Search
Filters
WhatsApp
Enquiry
Admin College Management
```

---

# 72. Phase 2 — Engagement

```text
Student Profile
Shortlist
Comparison
Find My College
Recommendations
Testimonials
Awards
Guides
Success Stories
```

---

# 73. Phase 3 — CRM

```text
Counsellor Dashboard
Lead Assignment
Lead Status
Lead Timeline
Follow-ups
Lead Analytics
Conversion Tracking
```

---

# 74. Phase 4 — Advanced

```text
Advanced Recommendation Engine
Automated Notifications
Advanced Analytics
Data Import Pipeline
Data Quality Dashboard
Personalised Student Dashboard
```

---

# 75. MVP Rule

Do not implement every feature simultaneously.

The MVP must first prove:

```text
Student finds college
        ↓
Student understands college
        ↓
Student gets guidance
        ↓
Lead reaches College Guide
        ↓
Counsellor follows up
```

---

# 76. Feature Acceptance Principle

A feature is complete only when:

```text
UI
+
Frontend Logic
+
Backend Logic
+
Database
+
Validation
+
Security
+
Loading State
+
Error State
+
Mobile UX
```

are considered.

---

# 77. No Fake Functionality

Do not create buttons that appear functional but do nothing.

Every visible action must:

* Work
* Have a clear purpose
* Show feedback
* Handle errors

If a feature is not implemented yet, it should not pretend to be complete.

---

# 78. Client Satisfaction Principle

The client should feel that the platform represents a professional education-guidance business.

Therefore prioritize:

```text
Trust
Accuracy
Premium UI
Fast Experience
Simple Student Journey
Strong Client Branding
Reliable Lead Management
```

---

# 79. Final Product Principle

> **College Guide is not simply a college listing website. It is a student discovery + guidance + lead-conversion platform where college information attracts students and College Guide's expertise converts that interest into meaningful counselling conversations.**