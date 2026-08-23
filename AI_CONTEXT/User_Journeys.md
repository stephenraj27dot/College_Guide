# College Guide — User Journeys

## 1. Purpose

This document defines the major user journeys within the College Guide platform.

The goal is to ensure that every important user action has a clear, logical, and consistent flow.

---

# 2. Student Journey — First Visit

```text
Student lands on website
        ↓
Sees College Guide value proposition
        ↓
Chooses education category
        ↓
Chooses location / district
        ↓
Chooses course / department
        ↓
Views matching colleges
        ↓
Opens college profile
        ↓
Explores details
        ↓
Shortlists / compares
        ↓
Requests admission guidance
````

The first-time experience must not force registration before allowing basic college discovery.

---

# 3. Student Journey — Search

```text
Student opens search
        ↓
Enters college / course / department / location
        ↓
Search suggestions appear
        ↓
Student selects result
        ↓
Matching results displayed
        ↓
Student applies filters
        ↓
Student opens college profile
```

Search should support relevant combinations of:

* College name
* Course
* Department
* Location
* Education category

---

# 4. Student Journey — Category Discovery

Example:

```text
Student
  ↓
Engineering
  ↓
Chennai
  ↓
Computer Science
  ↓
Available Colleges
  ↓
College Profile
```

The same journey should work for other education categories.

---

# 5. Student Journey — Location Discovery

```text
Student selects location
        ↓
Selects district / city
        ↓
Selects education category
        ↓
Optional course / department
        ↓
Matching colleges displayed
```

Example:

```text
Chennai
 ├── Engineering
 ├── Medical
 ├── Nursing
 ├── Law
 └── Arts & Science
```

---

# 6. Student Journey — College Profile

```text
College Listing
      ↓
College Profile
      ↓
Basic Information
      ↓
Courses & Departments
      ↓
Facilities
      ↓
Location
      ↓
Other Verified Information
      ↓
Shortlist / Compare
      ↓
Get Admission Guidance
```

The profile must clearly present important information without overwhelming the student.

---

# 7. Student Journey — Shortlist

```text
Student views college
        ↓
Clicks "Shortlist"
        ↓
College added to shortlist
        ↓
Student continues browsing
        ↓
Opens "My Shortlist"
        ↓
Reviews saved colleges
        ↓
Compares or requests guidance
```

If authentication is required for persistent storage, the system should provide a clear login/signup flow.

---

# 8. Student Journey — Compare

```text
Student views College A
        ↓
Adds to Compare
        ↓
Student views College B
        ↓
Adds to Compare
        ↓
Opens Compare
        ↓
Comparison table
        ↓
Reviews differences
        ↓
Shortlists preferred option
        ↓
Requests guidance
```

The comparison experience must be mobile-friendly.

---

# 9. Student Journey — Find My College

```text
Student selects "Find My College"
        ↓
Selects education category
        ↓
Selects preferred course
        ↓
Selects department
        ↓
Selects preferred location
        ↓
Answers preference questions
        ↓
System evaluates preferences
        ↓
Recommended colleges displayed
        ↓
Student explores recommendations
        ↓
Student requests guidance
```

Recommendations must explain the major reasons for the match.

---

# 10. Student Journey — Near Me

```text
Student selects "Near Me"
        ↓
Browser asks for location permission
        ↓
Student allows permission
        ↓
System determines approximate location
        ↓
Nearby colleges displayed
        ↓
Student applies filters
        ↓
Student opens college profile
```

If permission is denied:

```text
Location permission denied
        ↓
Show manual location selection
        ↓
Student selects city / district
        ↓
Show matching colleges
```

The platform must remain fully usable without location permission.

---

# 11. Student Journey — Registration

Registration should not unnecessarily interrupt discovery.

Possible flow:

```text
Student browses website
        ↓
Student wants personalised feature
        ↓
Registration requested
        ↓
Student enters required information
        ↓
OTP / authentication
        ↓
Consent information displayed
        ↓
Student provides appropriate consent
        ↓
Account created
        ↓
Student continues previous activity
```

The system should preserve useful context when moving from browsing to registration where appropriate.

---

# 12. Student Journey — Admission Enquiry

```text
Student views college
        ↓
Clicks "Get Admission Guidance"
        ↓
Enquiry form opens
        ↓
Student details shown / requested
        ↓
Interest details captured
        ↓
Student submits enquiry
        ↓
Lead created
        ↓
Confirmation shown
        ↓
College Guide team receives lead
```

The enquiry must go to the College Guide team.

It must not directly create a lead for the college.

---

# 13. Student Journey — WhatsApp

```text
Student clicks WhatsApp
        ↓
College Guide WhatsApp opens
        ↓
Pre-filled message where appropriate
        ↓
Student sends message
        ↓
Admission team receives enquiry
```

Possible contextual message:

```text
Hi, I am Stephen.

I am interested in Engineering
and Information Technology courses
in Chennai.

I would like admission guidance.
```

The actual message format should be configurable.

---

# 14. Student Journey — Callback

```text
Student clicks "Request a Callback"
        ↓
Form opens
        ↓
Student provides required details
        ↓
Selects preferred callback time
        ↓
Submits request
        ↓
Callback request created
        ↓
Confirmation shown
        ↓
Counsellor sees request
        ↓
Counsellor follows up
```

---

# 15. Student Journey — Returning Student

```text
Student returns
        ↓
Logs in / authenticated session recognised
        ↓
Views personalised experience
        ↓
Previous shortlist available
        ↓
Previous activity available where appropriate
        ↓
Continues college discovery
```

The experience should feel continuous rather than starting from zero.

---

# 16. Parent Journey

Parents may arrive directly or through a student.

Typical journey:

```text
Parent visits website
        ↓
Explores College Guide
        ↓
Views client experience
        ↓
Views awards & achievements
        ↓
Views student success stories
        ↓
Explores colleges
        ↓
Reviews college information
        ↓
Requests admission guidance
        ↓
Contacts College Guide team
```

Trust signals should be easily accessible.

---

# 17. Counsellor Journey — New Lead

```text
New enquiry
      ↓
Lead appears in dashboard
      ↓
Counsellor opens lead
      ↓
Reviews student profile
      ↓
Reviews preferences
      ↓
Reviews activity timeline
      ↓
Reviews lead score
      ↓
Contacts student
      ↓
Records interaction
      ↓
Updates lead status
```

The counsellor should have enough context before contacting the student.

---

# 18. Counsellor Journey — Follow-Up

```text
Lead
 ↓
Counselling
 ↓
Follow-up required
 ↓
Follow-up date/time
 ↓
Reminder
 ↓
Counsellor contacts student
 ↓
Adds notes
 ↓
Updates status
```

Follow-up information must be easy to locate.

---

# 19. Counsellor Journey — High-Intent Lead

```text
Student activity
      ↓
High-intent signals detected
      ↓
Lead score increases
      ↓
Lead marked High Intent
      ↓
Counsellor sees priority
      ↓
Counsellor opens student profile
      ↓
Reviews activity
      ↓
Contacts student
```

Lead scoring is an internal business mechanism.

It should never be exposed to students as a judgement.

---

# 20. Counsellor Journey — Student Conversion

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
ADMISSION_IN_PROGRESS
 ↓
ADMITTED
```

Each stage should have relevant information and actions.

---

# 21. Admin Journey — Add College

```text
Admin logs in
      ↓
College Management
      ↓
Add College
      ↓
Enter basic information
      ↓
Add location
      ↓
Add categories
      ↓
Add courses
      ↓
Add departments
      ↓
Add facilities
      ↓
Upload media
      ↓
Review information
      ↓
Save draft
      ↓
Publish
```

The system should validate required fields before publishing.

---

# 22. Admin Journey — Update College

```text
Admin opens college
      ↓
Edit information
      ↓
Update required fields
      ↓
Review changes
      ↓
Save
      ↓
Publish updated version
```

Important updates should record appropriate timestamps.

---

# 23. Admin Journey — Awards

```text
Admin
 ↓
Achievements / Awards
 ↓
Add Award
 ↓
Award title
 ↓
Awarding organisation
 ↓
Year
 ↓
Description
 ↓
Upload image
 ↓
Preview
 ↓
Publish
```

Only genuine client-provided information should be published.

---

# 24. Admin Journey — Testimonial

```text
Admin
 ↓
Testimonials
 ↓
Add Testimonial
 ↓
Student information
 ↓
Course / college information
 ↓
Testimonial
 ↓
Image / media if authorised
 ↓
Review
 ↓
Publish
```

Appropriate consent must be confirmed before publication.

---

# 25. Admin Journey — Lead Management

```text
Admin opens Leads
       ↓
Views lead list
       ↓
Search / filter
       ↓
Opens lead
       ↓
Reviews student information
       ↓
Reviews activity
       ↓
Assigns counsellor
       ↓
Updates status
       ↓
Adds notes
       ↓
Schedules follow-up
```

---

# 26. Admin Journey — Analytics

```text
Admin opens Analytics
       ↓
Selects date range
       ↓
Views student metrics
       ↓
Views college interest
       ↓
Views course interest
       ↓
Views location interest
       ↓
Views lead metrics
       ↓
Views conversion metrics
```

Analytics should support business decision-making.

---

# 27. College Contact Protection Journey

This is a critical business flow.

```text
Student
  ↓
College Profile
  ↓
Wants admission information
  ↓
Clicks contact CTA
  ↓
College Guide enquiry / WhatsApp / callback
  ↓
College Guide team
```

Never:

```text
Student
  ↓
College Profile
  ↓
Direct College Contact
```

This rule must remain consistent throughout the product.

---

# 28. Consent-Based Activity Journey

```text
Student browses anonymously
        ↓
Basic browsing works
        ↓
Personalised feature requested
        ↓
Student identity requested
        ↓
Privacy / consent information
        ↓
Student provides appropriate consent
        ↓
Activity associated with profile
```

The platform must not secretly associate personal browsing activity with a student identity.

---

# 29. Error Journey

Every major user flow should have:

* Loading state
* Empty state
* Error state
* Retry action
* Helpful messaging

Example:

```text
College search
      ↓
No matching colleges
      ↓
Show helpful message
      ↓
Suggest changing filters
      ↓
Provide alternative discovery options
```

---

# 30. Mobile Journey

All important student journeys must work comfortably on mobile.

Priority mobile journeys:

1. Search
2. Category discovery
3. Location discovery
4. College profile
5. Shortlist
6. Compare
7. Find My College
8. WhatsApp
9. Enquiry
10. Callback

---

# 31. Journey Design Principle

Every journey should minimise unnecessary steps.

The platform should guide the user naturally toward the next meaningful action.

The primary student journey is:

```text
DISCOVER
   ↓
EXPLORE
   ↓
COMPARE
   ↓
SHORTLIST
   ↓
UNDERSTAND
   ↓
GET GUIDANCE
```

The primary business journey is:

```text
CAPTURE
   ↓
UNDERSTAND
   ↓
CONTACT
   ↓
COUNSEL
   ↓
FOLLOW UP
   ↓
CONVERT
```

---

# 32. Journey Principle

> **Every user should always know where they are, what they can do next, and why that action is useful.**

```
```
