## FILE #30 — `AI_CONTEXT/ANALYTICS_AND_TRACKING.md`

````md
# College Guide — Analytics & Tracking

## 1. Purpose

This document defines the analytics and tracking system for College Guide.

The analytics system must help the client understand:

- How many students visit the website
- Which colleges students view
- Which courses students are interested in
- Which locations have demand
- Which categories are popular
- How students discover colleges
- How many students contact College Guide
- Which pages generate leads
- Which counsellor workflows generate conversions

Analytics must support business decisions without compromising student privacy.

---

# 2. Core Analytics Principle

Track business-important behavior.

Do NOT track unnecessary personal information.

```text
Student Activity
      ↓
Anonymous / Privacy-Aware Analytics
      ↓
Business Insights
      ↓
Better Guidance
      ↓
More Qualified Leads
      ↓
Better Conversion
````

---

# 3. Main Analytics Areas

College Guide analytics should cover:

```text
Traffic
Search
College Discovery
Course Interest
Location Interest
Shortlist
Comparison
Guidance
WhatsApp
Lead Generation
CRM
Conversion
Content
```

---

# 4. Recommended Analytics Stack

Primary analytics:

```text
Google Analytics 4
```

Optional privacy-focused analytics can be evaluated later.

Business dashboards:

```text
Custom College Guide Admin Dashboard
```

Database analytics:

```text
Supabase PostgreSQL
```

---

# 5. Analytics Architecture

```text
                  Student
                     │
                     ↓
              College Guide
                     │
                     ↓
               Event Tracker
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
       GA4 / Analytics       Database
          │                     │
          ↓                     ↓
     Traffic Insights       Business Data
                                  │
                                  ↓
                            CRM Dashboard
```

---

# 6. Event-Based Tracking

Analytics should use meaningful events.

Examples:

```text
page_view
college_view
college_search
filter_used
course_view
location_selected
shortlist_add
shortlist_remove
compare_add
compare_remove
guidance_click
whatsapp_click
enquiry_submit
```

---

# 7. Event Naming Convention

Use lowercase snake_case.

Good:

```text
college_view
whatsapp_click
enquiry_submit
```

Avoid:

```text
CollegeView
College-View
collegeView
```

---

# 8. Page View

Track normal page views.

Example:

```text
page_view
```

Useful parameters:

```text
page_type
page_path
page_title
```

Do not send private CRM information.

---

# 9. Homepage Analytics

Track:

```text
Homepage View
Search Started
Category Click
Location Click
Featured College Click
Guidance CTA
WhatsApp CTA
```

---

# 10. College View

Event:

```text
college_view
```

Parameters:

```text
college_id
college_name
category
location
```

Only send data that is safe for analytics.

---

# 11. College View Example

```json
{
  "event": "college_view",
  "college_id": "college_123",
  "category": "engineering",
  "location": "chennai"
}
```

---

# 12. Search Tracking

Event:

```text
college_search
```

Parameters:

```text
search_term
category
location
result_count
```

Avoid storing sensitive free-text queries if unnecessary.

---

# 13. Search Analytics

The client should be able to understand:

```text
Most searched colleges
Most searched courses
Most searched locations
Most searched categories
Searches with zero results
```

---

# 14. Zero Result Searches

Track:

```text
search_no_results
```

Example:

```text
Student searches:
"XYZ Engineering College"

Result:
0
```

This helps the client identify missing college data.

---

# 15. Category Analytics

Track:

```text
category_view
category_select
```

Example:

```text
Engineering
Medical
Nursing
Law
Arts & Science
```

---

# 16. Location Analytics

Track:

```text
location_select
location_view
```

Example:

```text
Chennai
Trichy
Coimbatore
Madurai
Salem
Vellore
```

---

# 17. Location Demand

The client should eventually see:

```text
Location
↓
Visitors
↓
College Views
↓
Guidance Requests
↓
Leads
```

This helps identify high-demand locations.

---

# 18. Course Analytics

Track:

```text
course_view
course_select
```

Examples:

```text
B.E. CSE
B.Tech IT
MBBS
B.Sc Nursing
LLB
B.Com
B.Sc Computer Science
```

---

# 19. Course Demand

Dashboard should show:

```text
Most Viewed Courses
Most Searched Courses
Most Enquired Courses
```

---

# 20. Department Analytics

Where relevant, track:

```text
department_view
```

Examples:

```text
CSE
IT
ECE
EEE
Mechanical
Civil
```

---

# 21. Shortlist Analytics

Track:

```text
shortlist_add
shortlist_remove
```

Useful parameters:

```text
college_id
category
location
```

---

# 22. Shortlist Insights

The client can identify:

```text
Most Shortlisted Colleges
Most Shortlisted Courses
Most Shortlisted Locations
```

This indicates stronger student interest than simple page views.

---

# 23. Comparison Analytics

Track:

```text
compare_add
compare_remove
compare_view
```

This helps understand which colleges students seriously evaluate.

---

# 24. Guidance CTA

Every important guidance button should use:

```text
guidance_click
```

Examples:

```text
Get Guidance
Talk to Counsellor
Need Help?
Find My College
```

---

# 25. WhatsApp Analytics

Track:

```text
whatsapp_click
```

Parameters:

```text
source_page
college_id
course_id
location
```

Do NOT send:

```text
password
private CRM notes
authentication tokens
```

---

# 26. WhatsApp Funnel

Important funnel:

```text
College Page
      ↓
WhatsApp CTA
      ↓
WhatsApp Click
      ↓
Student Conversation
      ↓
Lead
      ↓
Counsellor
```

---

# 27. Enquiry Analytics

Track:

```text
enquiry_form_view
enquiry_start
enquiry_submit
```

This helps identify form abandonment.

---

# 28. Lead Conversion

The key business funnel:

```text
Visitors
   ↓
College Views
   ↓
Guidance Clicks
   ↓
WhatsApp / Enquiry
   ↓
Leads
   ↓
Qualified Leads
   ↓
Counselling
   ↓
Admission / Conversion
```

---

# 29. Lead Source

Every lead should have a source where practical.

Examples:

```text
website
whatsapp
organic_search
google_ads
social
referral
direct
```

---

# 30. Lead Attribution

Where technically appropriate, preserve:

```text
source
medium
campaign
landing_page
referrer
```

Do not collect unnecessary personal data.

---

# 31. Campaign Tracking

Use standard campaign parameters.

Example:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

---

# 32. Campaign Example

A campaign may produce:

```text
utm_source=instagram
utm_medium=social
utm_campaign=engineering_2026
```

The dashboard can then show:

```text
Campaign
↓
Visitors
↓
Leads
↓
Conversions
```

---

# 33. Landing Page Analytics

Track which pages generate leads.

Examples:

```text
Engineering Colleges Chennai
Medical Colleges Chennai
B.E CSE Colleges
Nursing Colleges
Law Colleges
```

---

# 34. Content Analytics

For guides and blogs track:

```text
guide_view
guide_scroll
guide_cta_click
```

This identifies useful content.

---

# 35. Guide Conversion

Measure:

```text
Guide View
      ↓
College Click
      ↓
Guidance Click
      ↓
Lead
```

---

# 36. Awards & Achievements Analytics

The client's awards and achievements are important trust-building content.

Track:

```text
award_view
achievement_view
testimonial_view
```

This helps determine whether students interact with trust content.

---

# 37. Trust Funnel

Example:

```text
Student Visits Website
        ↓
Sees Client Achievements
        ↓
Views College
        ↓
Reads Guidance Information
        ↓
Contacts College Guide
```

---

# 38. Testimonial Analytics

Track:

```text
testimonial_view
testimonial_expand
```

if the UI uses expandable testimonials.

---

# 39. FAQ Analytics

Track:

```text
faq_open
```

Parameters:

```text
faq_id
category
```

Frequently opened FAQs can be promoted or expanded.

---

# 40. Device Analytics

Measure:

```text
Desktop
Mobile
Tablet
```

Do not create unnecessary device-specific personal profiles.

---

# 41. Browser Analytics

Useful for debugging:

```text
Chrome
Edge
Safari
Firefox
```

---

# 42. Geographic Analytics

Use coarse geographic information where available.

Examples:

```text
Tamil Nadu
Chennai
Trichy
Coimbatore
Madurai
```

Do not attempt to collect precise home addresses through analytics.

---

# 43. Student Location Preference

There is a difference between:

```text
Analytics location
```

and:

```text
Student-selected location
```

Student-selected location should be stored only when needed for the guidance workflow.

---

# 44. Funnel Dashboard

The admin dashboard should eventually show:

```text
Website Visitors
      ↓
College Views
      ↓
Guidance Clicks
      ↓
WhatsApp Clicks
      ↓
Enquiries
      ↓
Qualified Leads
      ↓
Conversions
```

---

# 45. KPI Dashboard

Important KPIs:

```text
Total Visitors
Total College Views
Total Searches
Top Category
Top Location
Top Course
WhatsApp Clicks
Enquiries
Qualified Leads
Conversion Rate
```

---

# 46. Daily Analytics

Show:

```text
Today
Yesterday
This Week
This Month
```

---

# 47. Date Filtering

Admin dashboard should support:

```text
Today
7 Days
30 Days
90 Days
Custom Range
```

---

# 48. Category Dashboard

Example:

```text
Category        Views       Leads
Engineering     12,450      620
Medical          8,320      410
Nursing          5,700      300
Law              3,200      150
Arts & Science   7,100      340
```

Numbers are examples only.

Never show fabricated production statistics.

---

# 49. Location Dashboard

Example:

```text
Location      College Views    Leads
Chennai       ...
Trichy        ...
Coimbatore    ...
Madurai       ...
Salem         ...
```

---

# 50. Course Dashboard

Example:

```text
Course          Views    Enquiries
CSE             ...
IT              ...
ECE             ...
MBBS            ...
Nursing         ...
LLB             ...
```

---

# 51. College Performance

Each college can have internal analytics:

```text
College Views
Shortlists
Comparisons
Guidance Clicks
WhatsApp Clicks
Enquiries
```

---

# 52. College Ranking Analytics

Analytics may identify:

```text
Most Viewed
Most Shortlisted
Most Compared
Most Enquired
```

Do NOT automatically label a college as:

```text
Best College
No.1 College
Top College
```

unless there is a legitimate methodology and client-approved criteria.

---

# 53. Conversion Rate

Basic calculation:

```text
Conversion Rate =
Leads / Relevant Visitors × 100
```

The exact denominator must be clearly defined.

---

# 54. WhatsApp Conversion

If WhatsApp clicks are tracked but actual WhatsApp conversations cannot be verified, label the metric correctly.

Example:

```text
WhatsApp Clicks
```

Do NOT call it:

```text
WhatsApp Leads
```

unless actual lead creation is confirmed.

---

# 55. Funnel Drop-Off

Identify:

```text
Page Views
   ↓
CTA Views
   ↓
CTA Clicks
   ↓
Form Starts
   ↓
Form Submissions
```

This shows where students leave.

---

# 56. Search-to-Lead Funnel

Track:

```text
Search
 ↓
College View
 ↓
Guidance Click
 ↓
Lead
```

This is a high-value business funnel.

---

# 57. Location-to-Lead Funnel

Track:

```text
Location Selection
 ↓
College Views
 ↓
Guidance
 ↓
Lead
```

This helps identify strong geographic demand.

---

# 58. Course-to-Lead Funnel

Track:

```text
Course Selection
 ↓
College Views
 ↓
Guidance
 ↓
Lead
```

---

# 59. CRM Analytics

CRM analytics should show:

```text
Total Leads
New Leads
Contacted
Follow-up
Qualified
Converted
Lost
```

---

# 60. Lead Status Funnel

Example:

```text
New
 ↓
Contacted
 ↓
Counselling
 ↓
Qualified
 ↓
Application
 ↓
Admission
```

The exact statuses must match the client's real workflow.

---

# 61. Counsellor Analytics

Authorized admins may see:

```text
Assigned Leads
Contacted Leads
Follow-ups
Qualified Leads
Conversions
```

Avoid using simplistic metrics that unfairly compare counsellors without context.

---

# 62. Lead Response Time

Track:

```text
Lead Created
        ↓
First Counsellor Contact
```

Metric:

```text
First Response Time
```

This can help improve lead handling.

---

# 63. Follow-Up Analytics

Track:

```text
Scheduled Follow-ups
Completed Follow-ups
Overdue Follow-ups
```

---

# 64. Conversion Analytics

If the client provides reliable admission outcome data:

```text
Lead
 ↓
Counselling
 ↓
Application
 ↓
Admission
```

can be tracked.

Do not infer admission from website behavior.

---

# 65. Privacy Principle

Analytics must never become surveillance.

Do not intentionally collect:

```text
Passwords
Private Messages
CRM Notes
Sensitive Student Data
Exact Home Location
Authentication Tokens
```

---

# 66. Personally Identifiable Information

Avoid sending PII to analytics platforms.

For example, do not send:

```text
student_name
phone_number
email
```

as normal analytics event parameters unless there is a documented, lawful and approved reason.

---

# 67. Database Analytics vs External Analytics

Use external analytics for:

```text
Traffic
Page Views
Behavior
Marketing
```

Use internal database analytics for:

```text
Leads
Counsellors
Follow-ups
CRM
Conversions
```

---

# 68. Analytics Separation

Architecture:

```text
Public Website
      │
      ├── GA4
      │
      └── College Guide Analytics
                 │
                 ↓
              Database
                 │
                 ↓
             CRM Dashboard
```

---

# 69. Event Tracking Service

Centralize event tracking.

Example:

```text
lib/
  analytics/
    events.ts
    track.ts
```

---

# 70. Typed Events

Events should use TypeScript types.

Example concept:

```text
CollegeViewEvent
WhatsAppClickEvent
EnquirySubmitEvent
```

Avoid random event payload structures throughout the application.

---

# 71. Event Validation

Every event should have:

```text
Event Name
Required Parameters
Optional Parameters
Data Type
Privacy Classification
```

---

# 72. Analytics Event Registry

Maintain an event registry.

Example:

```text
Event: college_view

Required:
college_id

Optional:
category
location

Privacy:
Non-sensitive
```

---

# 73. Duplicate Event Prevention

Avoid duplicate events caused by:

```text
React re-renders
Multiple listeners
Repeated API calls
Page transitions
```

---

# 74. Analytics Failure

Analytics failure must NOT break the website.

Example:

```text
Analytics service unavailable
        ↓
Website continues normally
```

Never block a student's enquiry because analytics failed.

---

# 75. Tracking Failure Handling

Analytics calls should fail silently or safely.

Do not show:

```text
"Analytics failed"
```

to students.

---

# 76. Admin Dashboard Security

Analytics dashboards containing CRM information require authentication and authorization.

Never expose:

```text
/admin/analytics
```

publicly.

---

# 77. Analytics Data Retention

Define reasonable retention periods.

Avoid storing event-level data forever without a business need.

---

# 78. Analytics Accuracy

Before production verify:

```text
[ ] Events fire
[ ] Event names are correct
[ ] Parameters are correct
[ ] No duplicate events
[ ] No PII leakage
[ ] Funnels calculate correctly
```

---

# 79. Analytics QA

Test:

```text
Homepage
College Page
Search
Location
Course
Shortlist
Compare
Guidance
WhatsApp
Lead Form
```

and verify expected events.

---

# 80. Dashboard QA

Verify:

```text
[ ] Numbers match source data
[ ] Filters work
[ ] Date range works
[ ] No duplicate leads
[ ] Empty states work
[ ] Charts are understandable
[ ] Mobile dashboard is usable
```

---

# 81. Client-Friendly Analytics

The client should not need technical knowledge to understand the dashboard.

Use clear labels:

```text
Students Visiting
College Interest
Course Interest
Location Demand
Guidance Requests
WhatsApp Clicks
New Leads
Qualified Leads
Conversions
```

Avoid technical labels such as:

```text
event_count
session_source
raw_event_stream
```

on the main dashboard.

---

# 82. Business Insight Cards

Recommended dashboard cards:

```text
Students Today
New Leads
WhatsApp Clicks
Guidance Requests
Top Course
Top Location
Top College
Conversion Rate
```

---

# 83. AI Insight Layer — Future

A future version may generate insights such as:

```text
"Engineering searches increased this week."
"Chennai has the highest enquiry volume."
"CSE is the most requested course."
```

These insights must be based on actual data.

Never fabricate statistics.

---

# 84. Analytics Recommendations

The system may eventually recommend:

```text
Create a guide for high-demand courses
Add missing colleges for high-demand searches
Improve low-converting pages
Promote popular locations
```

Recommendations must be presented as suggestions, not facts.

---

# 85. Analytics Architecture Rule

Never mix:

```text
Analytics logic
Business logic
UI logic
Database logic
```

Keep them separated.

---

# 86. Vibe Coding Rule

Before AI adds tracking:

```text
Read ANALYTICS_AND_TRACKING.md
 ↓
Check existing event registry
 ↓
Reuse existing event
 ↓
Only create a new event if required
 ↓
Add TypeScript type
 ↓
Test
```

Do not create duplicate events with slightly different names.

---

# 87. Example Event Registry

```text
page_view
college_view
college_search
search_no_results
category_select
location_select
course_view
shortlist_add
shortlist_remove
compare_add
compare_remove
guidance_click
enquiry_form_view
enquiry_submit
whatsapp_click
guide_view
award_view
testimonial_view
faq_open
```

---

# 88. Final Analytics Funnel

```text
                   VISITORS
                      │
                      ↓
               COLLEGE DISCOVERY
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
       Search      Location     Course
          │           │           │
          └───────────┼───────────┘
                      ↓
                COLLEGE VIEW
                      │
                ┌─────┴─────┐
                ↓           ↓
             Shortlist   Compare
                │           │
                └─────┬─────┘
                      ↓
               GUIDANCE CTA
                  ┌───┴───┐
                  ↓       ↓
              WhatsApp  Enquiry
                  │       │
                  └───┬───┘
                      ↓
                    LEAD
                      ↓
                COUNSELLOR
                      ↓
                 FOLLOW-UP
                      ↓
                 CONVERSION
```

---

# 89. Final Business Principle

> Analytics should help College Guide understand what students want, where demand exists, which colleges and courses attract interest, and where the client can improve the counselling journey.

The analytics system must always prioritize:

```text
Useful Data
+
Accurate Data
+
Privacy
+
Business Value
+
Student Trust
```

Never sacrifice student privacy merely to collect more data.

```
```
