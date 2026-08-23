# College Guide — Student User Flow

## 1. Purpose

This document defines the complete student journey through the College Guide platform.

The student experience must be:

- Simple
- Fast
- Trustworthy
- Mobile-friendly
- Easy to understand
- Conversion-focused
- Non-confusing

The primary goal is:

Student discovers colleges → explores options → receives guidance → contacts College Guide.

---

# 2. Primary Student Journey

```text
Landing Page
     ↓
Choose Category / Course / Location
     ↓
Search / Filter
     ↓
College Listing
     ↓
College Details
     ↓
Shortlist / Compare
     ↓
Get Guidance
     ↓
Student Details
     ↓
Lead Created
     ↓
College Guide Counsellor
     ↓
Student Follow-up
````

---

# 3. Student Entry Points

A student may enter College Guide through:

```text
Homepage
Google Search
College SEO Page
Course SEO Page
Location SEO Page
Social Media
WhatsApp
Shared College Guide Link
Direct URL
```

Every public landing page must provide a clear path toward college discovery.

---

# 4. First-Time Student Experience

When a new student opens the website:

```text
Hero
 ↓
What are you looking for?
 ↓
Category / Course / Location
 ↓
Recommended discovery
```

Do not immediately force registration.

---

# 5. Homepage Student Journey

Recommended flow:

```text
Homepage
   ↓
Hero Search
   ↓
Choose Course / Category
   ↓
Choose Location
   ↓
View Colleges
```

Alternative:

```text
Homepage
   ↓
Explore by Category
   ↓
Engineering
   ↓
Choose Location
   ↓
College Listing
```

---

# 6. Hero Section

The first screen should answer:

> "Can this website help me find the right college?"

Recommended CTA:

```text
Find My College
```

Secondary CTA:

```text
Explore Colleges
```

---

# 7. Student Search Journey

Example:

```text
Student enters:
"Computer Science"

        ↓

Search suggestions

        ↓

Computer Science Engineering
Computer Science Colleges
Computer Applications

        ↓

Student selects option

        ↓

Choose location

        ↓

Results
```

---

# 8. Location Selection

Students can select:

```text
Tamil Nadu
 ↓
District
 ↓
City / Town
```

Example:

```text
Chennai
Coimbatore
Madurai
Trichy
Salem
Tirunelveli
```

The exact locations must come from the database.

---

# 9. Category Selection

Student can choose:

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

The category list must remain database-driven.

---

# 10. Course Selection

After category selection:

```text
Engineering
    ↓
B.E / B.Tech
    ↓
Computer Science
Information Technology
AI & DS
ECE
Mechanical
Civil
```

Only show relevant courses.

---

# 11. Progressive Selection

Do not display every filter at once.

Prefer:

```text
Category
   ↓
Course
   ↓
Location
   ↓
Optional preferences
```

This reduces cognitive load.

---

# 12. College Listing Journey

After selection:

```text
Filters
   ↓
College Cards
```

Each card should show enough information to make the student interested in opening the profile.

---

# 13. College Card Actions

Primary:

```text
View College
```

Secondary:

```text
Shortlist
Compare
```

Guidance CTA:

```text
Get Guidance
```

---

# 14. College Detail Journey

When student opens a college:

```text
College Header
 ↓
Overview
 ↓
Courses
 ↓
Departments
 ↓
Facilities
 ↓
Gallery
 ↓
Location
 ↓
Guidance CTA
```

The page should not feel like a dead-end information page.

---

# 15. College Contact Restriction

Students must NOT be shown direct college contact options.

Do not show:

```text
Call College
WhatsApp College
Email College
Contact Admission Office
```

Instead show:

```text
Talk to College Guide
Get Admission Guidance
Request a Callback
WhatsApp College Guide
```

---

# 16. Trust Placement

Important trust elements should appear throughout the student journey.

Examples:

```text
Experienced Guidance
Awards
Achievements
Success Stories
Student Testimonials
```

Do not overwhelm the student with awards.

---

# 17. College Detail CTA

After the student understands the college:

```text
Interested in this college?

Let College Guide help you understand
your admission options.

[ Get Guidance ]
```

---

# 18. Shortlist Journey

Student clicks:

```text
♡ Shortlist
```

If guest:

```text
College saved on this device.
```

Optionally:

```text
Create an account to save your shortlist permanently.
```

Do not force account creation unnecessarily.

---

# 19. Logged-In Shortlist Journey

```text
Student
 ↓
Shortlist
 ↓
My Shortlist
 ↓
College A
College B
College C
```

Student can:

```text
View
Compare
Remove
Get Guidance
```

---

# 20. Compare Journey

```text
College A
   +
College B
   +
College C
      ↓
Compare
      ↓
Comparison Table
```

Comparison should remain easy to understand on mobile.

---

# 21. Comparison CTA

After comparison:

```text
Still confused?

Talk to a College Guide counsellor.

[ Get Guidance ]
```

The purpose is to turn uncertainty into a counselling opportunity.

---

# 22. Find My College Flow

This is a major student-conversion feature.

Flow:

```text
Start
 ↓
What do you want to study?
 ↓
Which category?
 ↓
Preferred location?
 ↓
Preferred department?
 ↓
What matters most?
 ↓
Results
```

---

# 23. Recommendation Questions

Possible questions:

### Step 1

```text
What are you interested in?
```

### Step 2

```text
Which course are you considering?
```

### Step 3

```text
Where would you like to study?
```

### Step 4

```text
What matters most to you?
```

Possible answers:

```text
Course availability
Location
Facilities
Hostel
Budget
Career interest
```

Only use data that the system can actually evaluate.

---

# 24. Recommendation Results

Display:

```text
Recommended for You
```

Each result should explain why.

Example:

```text
✓ Matches your course
✓ Available in your preferred location
✓ Matches your selected preferences
```

Never say:

```text
This is definitely the best college for you.
```

---

# 25. Recommendation CTA

After results:

```text
Want help choosing?

Talk to a College Guide counsellor.

[ Get Personalised Guidance ]
```

---

# 26. Enquiry Journey

When student chooses:

```text
Get Guidance
```

show a short form.

Recommended:

```text
Name
Phone Number
Interested Course
Preferred Location
Optional Message
```

---

# 27. Enquiry Form UX

Rules:

* Keep form short
* Clearly mark required fields
* Validate immediately
* Show useful error messages
* Do not ask unnecessary questions

---

# 28. Phone Number Validation

Validate:

```text
Required
Valid format
Supported country format
```

Do not accept obviously invalid values.

---

# 29. Enquiry Submission

Flow:

```text
Student submits
       ↓
Frontend validation
       ↓
Server validation
       ↓
Lead creation / update
       ↓
Success state
```

---

# 30. Success Screen

After successful enquiry:

```text
Thank you!

Your request has been received.

A College Guide counsellor will contact you soon.

[ Continue Exploring Colleges ]
```

Optional:

```text
[ WhatsApp College Guide ]
```

---

# 31. Duplicate Enquiry Handling

If the same student submits repeatedly:

```text
Do not blindly create unlimited duplicate leads.
```

Instead:

```text
Existing Lead
     ↓
Update / Add Activity
```

based on business rules.

---

# 32. WhatsApp Journey

Student clicks:

```text
WhatsApp Us
```

The destination must be the College Guide official business WhatsApp.

Never expose a college's private WhatsApp number.

---

# 33. Floating WhatsApp

Desktop:

```text
Right-bottom floating CTA
```

Mobile:

```text
Sticky bottom CTA
```

The button must not block:

```text
Navigation
Forms
Important content
Other CTAs
```

---

# 34. Callback Journey

Student clicks:

```text
Request Callback
```

Flow:

```text
Callback Form
 ↓
Name
Phone
Course
Preferred Time
 ↓
Submit
 ↓
Lead Created
```

---

# 35. Student Profile Journey

Optional authentication flow:

```text
Browse
 ↓
Shortlist
 ↓
Create Account
 ↓
Profile
 ↓
Saved Colleges
```

Do not force account creation before the student sees value.

---

# 36. Login Journey

If authentication is required:

```text
Login
 ↓
Authentication
 ↓
Return to previous page
```

If the student was trying to shortlist:

```text
College Page
 ↓
Shortlist
 ↓
Login
 ↓
Return to College Page
 ↓
Shortlist completed
```

Do not lose the student's original action.

---

# 37. Guest → Authenticated Transition

If a guest has:

```text
Shortlist
Preferences
Comparison
```

then after authentication, preserve relevant data where technically appropriate.

---

# 38. Search → Lead Journey

A student may enter through search:

```text
Google
 ↓
College Guide SEO Page
 ↓
College Details
 ↓
Get Guidance
 ↓
Lead
```

SEO pages must therefore contain useful conversion paths.

---

# 39. Course → Lead Journey

```text
Course Page
 ↓
Available Colleges
 ↓
College Details
 ↓
Get Guidance
 ↓
Lead
```

---

# 40. Location → Lead Journey

```text
Chennai Colleges
 ↓
Filter
 ↓
College
 ↓
Get Guidance
 ↓
Lead
```

---

# 41. Category → Lead Journey

```text
Engineering
 ↓
Courses
 ↓
Colleges
 ↓
College Details
 ↓
Guidance
```

---

# 42. Returning Student

When a student returns:

```text
Homepage
 ↓
Recent / Saved Preferences
 ↓
Recommended Colleges
```

If authenticated, use their saved preferences.

Do not expose personal information publicly.

---

# 43. Empty Search Result

If nothing matches:

```text
No colleges found.

Try:
- Another location
- Another course
- Remove some filters
```

Then provide:

```text
[ Talk to College Guide ]
```

---

# 44. Empty Shortlist

Show:

```text
You haven't shortlisted any colleges yet.

Explore colleges and save the ones you're interested in.

[ Explore Colleges ]
```

---

# 45. Empty Recommendations

Show:

```text
We need a little more information
to recommend colleges for you.

[ Find My College ]
```

---

# 46. Error During Search

Show:

```text
We couldn't load the results.

Please try again.

[ Retry ]
```

Do not expose technical errors.

---

# 47. Network Failure

The application should handle temporary network failures gracefully.

Example:

```text
Looks like your connection was interrupted.

[ Try Again ]
```

---

# 48. Mobile Student Journey

Mobile flow must prioritize:

```text
Search
 ↓
Results
 ↓
College
 ↓
Guidance
```

Important CTAs should remain easy to reach with one hand.

---

# 49. Mobile Bottom Navigation

Possible navigation:

```text
Home
Explore
Shortlist
Guidance
Profile
```

Only implement if testing confirms that it improves usability.

---

# 50. Desktop Student Navigation

Possible:

```text
Home
Colleges
Courses
Locations
Guides
About
```

Primary CTA:

```text
Get Guidance
```

---

# 51. Navigation Principle

Students should never need to understand the internal database structure.

They should think in terms of:

```text
What do I want to study?
Where do I want to study?
Which colleges are available?
Which one suits me?
Can someone guide me?
```

---

# 52. Student Trust Journey

Trust should build progressively:

```text
First Impression
      ↓
Professional Website
      ↓
Useful College Information
      ↓
Client Experience
      ↓
Awards & Achievements
      ↓
Testimonials / Success Stories
      ↓
Personalised Guidance
```

---

# 53. Student Conversion Principle

Do not aggressively ask for a lead immediately.

Recommended:

```text
Value
 ↓
Discovery
 ↓
Trust
 ↓
Interest
 ↓
Guidance CTA
 ↓
Lead
```

---

# 54. CTA Strategy

Primary CTA:

```text
Get Guidance
```

Secondary CTAs:

```text
Find My College
Shortlist
Compare
WhatsApp Us
Request Callback
```

Avoid having too many competing primary CTAs.

---

# 55. Student Privacy

Students must never see:

* Other students
* Other student phone numbers
* Counsellor notes
* Internal lead information
* Private college contact information

---

# 56. Student Data Principle

Collect only information required for:

```text
Personalisation
College Guidance
Lead Management
Communication
```

---

# 57. Student Journey Analytics

Track key events:

```text
page_view
search
filter
college_view
course_view
shortlist
compare
recommendation_start
recommendation_complete
guidance_click
whatsapp_click
callback_request
enquiry_submit
```

Do not track unnecessary sensitive information.

---

# 58. Conversion Funnel

The primary funnel:

```text
Visitor
   ↓
Explorer
   ↓
College Viewer
   ↓
Interested Student
   ↓
Guidance Interaction
   ↓
Lead
   ↓
Counselling
   ↓
Admission Conversion
```

---

# 59. Primary Success Metric

The platform should not optimize only for page views.

More meaningful metrics:

```text
Qualified Leads
Guidance Requests
Callback Requests
WhatsApp Conversations
Counselling Conversations
Student Conversion
```

---

# 60. User Flow Principle

> **Every major student journey should have a clear next step, but the student should never feel forced into contacting College Guide before receiving useful information.**

---

# 61. Final Student Experience

The ideal student experience is:

```text
"I came here looking for a college."

        ↓

"I found colleges based on what I want."

        ↓

"I can compare and shortlist them."

        ↓

"This website looks trustworthy."

        ↓

"I can talk to an experienced counsellor."

        ↓

"College Guide can help me decide."
```

This emotional and functional journey should guide all student-facing UX decisions.