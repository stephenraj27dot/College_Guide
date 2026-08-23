# College Guide — User Personas

## 1. Purpose

This document defines the primary users of the College Guide platform, their goals, needs, pain points, behaviours, and expectations.

All product, UI/UX, feature, and workflow decisions should consider these personas.

---

# 2. Persona Overview

College Guide has four primary user groups:

1. Student
2. Parent / Guardian
3. Admission Counsellor
4. Administrator

---

# 3. Persona 1 — Student

## 3.1 Profile

The student is the primary public user of College Guide.

The student may be:

* Completing higher secondary education
* Exploring undergraduate options
* Looking for a specific course
* Unsure about which department to choose
* Comparing multiple colleges
* Looking for colleges in a particular city
* Seeking professional admission guidance

---

## 3.2 Student Goals

The student wants to:

* Find suitable colleges
* Understand available courses
* Explore departments
* Search by location
* Compare colleges
* Shortlist preferred colleges
* Understand admission-related information
* Find colleges near them
* Discover suitable alternatives
* Get expert guidance
* Contact the College Guide team easily

---

## 3.3 Student Pain Points

Students may experience:

* Too many college choices
* Difficulty comparing colleges
* Lack of trustworthy information
* Confusion between similar courses
* Uncertainty about which department is suitable
* Difficulty finding colleges in preferred locations
* Difficulty understanding admission options
* Fear of making the wrong decision
* Lack of personalised guidance

College Guide should reduce this confusion.

---

## 3.4 Student Expectations

Students expect:

* Fast website
* Modern design
* Simple navigation
* Mobile-friendly experience
* Easy search
* Useful filters
* Clear college information
* Visual college profiles
* Simple comparison
* Personalised recommendations
* Quick access to expert guidance
* Easy WhatsApp communication

---

## 3.5 Student Behaviour

A typical student may:

1. Search for a course.
2. Select a preferred location.
3. Browse multiple colleges.
4. Open several college profiles.
5. Compare options.
6. Save favourite colleges.
7. Return later.
8. Request guidance after becoming more confident.

The platform should support this natural exploratory behaviour.

---

# 4. Persona 2 — Parent / Guardian

## 4.1 Profile

Parents or guardians may participate in the student's college-selection process.

They are primarily concerned with trust, safety, educational quality, affordability, and long-term outcomes.

---

## 4.2 Parent Goals

Parents want to:

* Understand college options
* Verify important information
* Understand course choices
* Evaluate locations
* Understand facilities
* Understand accommodation options
* Receive professional guidance
* Feel confident about the final decision

---

## 4.3 Parent Pain Points

Parents may be concerned about:

* Fake information
* Misleading college claims
* Unclear admission processes
* Hidden costs
* College quality
* Student safety
* Accommodation
* Transport
* Placement claims
* Lack of trustworthy guidance

---

## 4.4 Parent Expectations

The website should communicate:

* Professionalism
* Experience
* Trust
* Transparency
* Genuine achievements
* Awards and recognitions
* Student success
* Verified information
* Easy access to an experienced admission team

---

# 5. Persona 3 — Admission Counsellor

## 5.1 Profile

The admission counsellor is a business-side user responsible for communicating with students and providing admission guidance.

---

## 5.2 Counsellor Goals

The counsellor wants to:

* Identify new student leads
* Understand student interests
* Prioritise high-intent students
* Know which colleges students viewed
* Know preferred courses
* Know preferred locations
* Understand student preferences before contacting them
* Record counselling progress
* Follow up efficiently
* Convert genuine leads into applications and admissions

---

## 5.3 Counsellor Pain Points

Without a structured platform, counsellors may struggle with:

* Unorganised leads
* Missing student context
* Repeated manual data collection
* Difficulty prioritising leads
* Lost enquiries
* Poor follow-up tracking
* Lack of visibility into student behaviour
* Lack of conversion analytics

College Guide should solve these problems through its CRM and lead-management features.

---

## 5.4 Counsellor Expectations

The counsellor expects:

* Clear dashboard
* Real-time or timely lead visibility
* Student profiles
* Activity timeline
* Lead score
* Lead status
* Follow-up information
* Notes
* Search and filtering
* Easy WhatsApp/contact workflows
* Useful analytics

---

# 6. Persona 4 — Administrator

## 6.1 Profile

The administrator manages the platform, data, content, users, and business configuration.

---

## 6.2 Administrator Goals

The administrator should be able to:

* Manage college information
* Manage categories
* Manage courses
* Manage departments
* Manage locations
* Manage student records
* Manage leads
* Manage awards
* Manage achievements
* Manage testimonials
* Manage success stories
* Manage website content
* Review analytics
* Control authorised users

---

## 6.3 Administrator Pain Points

The administrator should not have to depend on developers for routine operations such as:

* Updating college information
* Adding a college
* Updating courses
* Adding locations
* Publishing awards
* Updating testimonials
* Managing lead statuses

The CMS should make these operations simple.

---

## 6.4 Administrator Expectations

The administrator expects:

* Secure login
* Clear dashboard
* Simple CMS
* Search
* Filters
* Bulk-friendly workflows where useful
* Data validation
* Publishing controls
* Auditability
* Analytics
* Reliable performance

---

# 7. Persona Comparison

| Requirement        | Student      | Parent  | Counsellor | Admin  |
| ------------------ | ------------ | ------- | ---------- | ------ |
| College Discovery  | High         | High    | Medium     | Low    |
| Course Discovery   | High         | High    | High       | Medium |
| Location Search    | High         | High    | High       | Medium |
| College Comparison | High         | High    | Medium     | Low    |
| Recommendations    | High         | Medium  | High       | Medium |
| WhatsApp Guidance  | High         | High    | High       | Medium |
| Student Activity   | Private/self | Limited | High       | High   |
| Lead Management    | No           | No      | High       | High   |
| College CMS        | No           | No      | Limited    | High   |
| Awards CMS         | No           | No      | No         | High   |
| Analytics          | Limited      | No      | High       | High   |

---

# 8. Persona-Based Product Priorities

## Student Priority

> **Find the right options quickly and confidently.**

## Parent Priority

> **Trust the information and the people providing the guidance.**

## Counsellor Priority

> **Understand and manage the right student leads efficiently.**

## Administrator Priority

> **Control and maintain the entire platform easily and securely.**

---

# 9. Shared Trust Requirement

All personas should experience a consistent sense of trust.

The platform should achieve this through:

* Accurate information
* Professional design
* Genuine client achievements
* Real student success stories
* Clear communication
* Secure handling of personal data
* Transparent guidance

---

# 10. Persona Design Principle

Every major feature should answer at least one of these questions:

1. Does this make the student's decision easier?
2. Does this make parents more confident?
3. Does this help counsellors guide students better?
4. Does this make administration easier?

If a feature does not meaningfully support any persona, its inclusion should be reconsidered.

---

# 11. Primary Persona Priority

The product priority order is:

```text id="r6ax5n"
1. Student
       ↓
2. Parent / Guardian
       ↓
3. Admission Counsellor
       ↓
4. Administrator
```

The public-facing experience should primarily optimise for students while ensuring parents receive strong trust signals.

The internal platform should primarily optimise for counsellor productivity and administrator control.

---

# 12. Persona Principle

> **College Guide should feel simple for students, trustworthy for parents, powerful for counsellors, and manageable for administrators.**
