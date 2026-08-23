# College Guide — UX/UI Design System

## 1. Purpose

This document defines the visual language, interaction principles, design standards, and UI consistency rules for the College Guide platform.

The website must feel:

- Professional
- Trustworthy
- Modern
- Premium
- Student-friendly
- Easy to navigate
- Fast
- Mobile-first

The design should create confidence in both students and parents while presenting the client's experience, awards, achievements, and credibility professionally.

---

# 2. Core Design Philosophy

College Guide should not look like a generic college directory.

It should feel like a premium education guidance platform.

Primary design principle:

> Discover easily. Understand clearly. Decide confidently.

---

# 3. Target Emotional Response

When a student enters the website, the desired feeling is:

```text
"I can find what I need here."
        ↓
"This information is easy to understand."
        ↓
"These people seem experienced and trustworthy."
        ↓
"I can ask them for guidance."
````

The design must reduce anxiety and decision fatigue.

---

# 4. Design Personality

The visual personality should be:

### Professional

Use clean layouts, strong typography, consistent spacing, and structured information.

### Trustworthy

Use clear information hierarchy and genuine achievement sections.

### Modern

Use contemporary cards, subtle motion, responsive layouts, and polished interactions.

### Friendly

Avoid overly corporate or intimidating interfaces.

### Premium

Use generous spacing, refined typography, quality imagery, and consistent visual details.

---

# 5. Design Direction

Preferred visual direction:

```text
Modern Education Platform
        +
Premium SaaS Product
        +
Student-Friendly Experience
```

Avoid:

* Outdated education-site layouts
* Excessive gradients
* Excessive shadows
* Cluttered cards
* Too many colours
* Overloaded dashboards
* Unnecessary animations
* Generic template appearance

---

# 6. Colour System

The final colour palette must be defined centrally using design tokens.

Suggested structure:

```text
Primary
Secondary
Accent
Background
Surface
Text Primary
Text Secondary
Border
Success
Warning
Error
Info
```

Example conceptual palette:

```text
Primary      → Brand colour
Secondary    → Supporting brand colour
Accent       → CTA / highlights
Background   → Main page background
Surface      → Cards / panels
Text Primary → Main content
Text Muted   → Secondary information
Border       → Subtle separation
Success      → Successful actions
Warning      → Warnings
Error        → Errors
Info         → Informational states
```

Do not hard-code colours throughout components.

All colours must use design tokens.

---

# 7. Typography

Typography should prioritise readability.

Use a modern sans-serif font family.

Recommended hierarchy:

```text
Display
H1
H2
H3
H4
Body Large
Body
Body Small
Caption
Button
Label
```

Example scale:

```text
Display → 48–64px
H1      → 40–48px
H2      → 32–40px
H3      → 24–30px
H4      → 20–24px
Body    → 16px
Small   → 14px
Caption → 12px
```

Exact values should be implemented through design tokens.

---

# 8. Typography Rules

Headings should be:

* Clear
* Strong
* Short
* Scannable

Paragraphs should:

* Use comfortable line height
* Avoid excessive width
* Maintain readability on mobile

Avoid:

* Too many font weights
* Decorative fonts
* Long paragraphs without visual breaks

---

# 9. Spacing System

Use a consistent spacing scale.

Recommended base:

```text
4px
8px
12px
16px
24px
32px
40px
48px
64px
80px
96px
```

Components should use spacing tokens instead of arbitrary values.

---

# 10. Layout System

Use a responsive container.

Desktop:

```text
┌───────────────────────────────────────┐
│              Header                   │
├───────────────────────────────────────┤
│                                       │
│             Main Content              │
│                                       │
├───────────────────────────────────────┤
│               Footer                  │
└───────────────────────────────────────┘
```

Content should have a comfortable maximum width.

Avoid excessively wide text sections.

---

# 11. Responsive Breakpoints

The platform must support:

* Mobile
* Small tablet
* Large tablet
* Desktop
* Large desktop

Breakpoints should be implemented consistently through the chosen frontend framework.

Do not design desktop first and simply shrink it.

Important student journeys must be designed mobile-first.

---

# 12. Header

The header should provide:

* College Guide logo
* Main navigation
* Search
* Guidance CTA
* Student account access

Desktop example:

```text
┌────────────────────────────────────────────────────┐
│ LOGO | Colleges | Courses | Locations | Find My    │
│      | College | Compare | About | [Get Guidance] │
└────────────────────────────────────────────────────┘
```

Mobile:

```text
┌────────────────────────────────┐
│ LOGO                 ☰         │
└────────────────────────────────┘
```

The mobile menu should remain simple.

---

# 13. Hero Section

The homepage hero should immediately communicate the product value.

Possible structure:

```text
-----------------------------------------------------
Find the right college
with the right guidance.

Explore colleges across Tamil Nadu
based on your course, department and location.

[Explore Colleges] [Find My College]

        Search colleges, courses...
-----------------------------------------------------
```

The hero should not contain excessive text.

---

# 14. Search Component

Search is a core interaction.

The search UI should support:

```text
What are you looking for?

[ College / Course / Department / Location ]

[ Search ]
```

Suggestions should be visually categorised.

Example:

```text
Computer Science
Department

Computer Science Engineering
Course

ABC Engineering College
College

Chennai
Location
```

---

# 15. Category Cards

Category cards should be visually distinct but consistent.

Example:

```text
┌─────────────────────┐
│       Icon          │
│                     │
│   Engineering       │
│                     │
│  Explore Colleges → │
└─────────────────────┘
```

Cards should support:

* Icon/image
* Category name
* Short description
* College count where useful
* Hover/focus state

---

# 16. College Card

College cards are a core component.

Suggested structure:

```text
┌──────────────────────────────┐
│         College Image        │
│                         ♡    │
├──────────────────────────────┤
│ College Name                 │
│ Chennai                      │
│ Engineering                 │
│                              │
│ CSE • IT • ECE + more       │
│                              │
│ [Compare] [View College]     │
└──────────────────────────────┘
```

Cards should not become overloaded with information.

---

# 17. College Profile Header

Example:

```text
┌─────────────────────────────────────────────┐
│ Logo   College Name                         │
│        Location • Type                      │
│                                             │
│ [Shortlist] [Compare] [Get Guidance]        │
└─────────────────────────────────────────────┘
```

Important information must appear above the fold where practical.

---

# 18. College Profile Navigation

Long profiles should use section navigation.

Example:

```text
Overview
Courses
Departments
Facilities
Hostel
Location
Gallery
```

On mobile, this can become:

* Horizontal scroll tabs
* Sticky section navigation
* Accordion sections

---

# 19. Information Cards

Verified college information should be displayed through clean information cards.

Example:

```text
┌────────────────────┐
│ 🏫 Institution     │
│ Private            │
└────────────────────┘

┌────────────────────┐
│ 📍 Location        │
│ Chennai            │
└────────────────────┘
```

Icons should support understanding rather than decoration.

---

# 20. Trust Section

The trust section is one of the most important parts of the website.

Possible structure:

```text
Why students trust College Guide

[Experience]
[Students Guided]
[Awards]
[Achievements]
```

Only verified client-approved numbers should be displayed.

If a metric is unavailable, do not invent one.

---

# 21. Awards & Achievements

Awards should be presented visually.

Example:

```text
┌──────────────┐
│ Award Image  │
│              │
│ Award Title  │
│ Organisation │
│ 2025         │
└──────────────┘
```

High-quality award photos provided by the client should be used.

The gallery should communicate authenticity and credibility.

---

# 22. Student Success Stories

Success stories should feel genuine rather than overly promotional.

Example:

```text
┌────────────────────────────────┐
│ Student Photo                  │
│                                │
│ "My admission journey became   │
│ much easier with guidance..."  │
│                                │
│ Student Name                   │
│ Course • College               │
└────────────────────────────────┘
```

Only authorised testimonials should be displayed.

---

# 23. Recommendation Cards

Recommendation cards should explain the match.

Example:

```text
Recommended for you

ABC Engineering College

✓ IT available
✓ Chennai matches preference
✓ Hostel available

Why this matches you →
```

Do not simply show a mysterious percentage.

The student should understand why a recommendation appears.

---

# 24. Filter Design

Filters should be contextual.

Desktop:

```text
┌─────────────┬──────────────────────────────┐
│ Filters     │ College Results              │
│             │                              │
│ Location    │ College Card                 │
│ Course      │ College Card                 │
│ Department  │ College Card                 │
│ Hostel      │ College Card                 │
└─────────────┴──────────────────────────────┘
```

Mobile:

```text
[ Filters ] [ Sort ]
```

Filters should open in a bottom sheet or suitable mobile interface.

---

# 25. Compare UI

Comparison should prioritise clarity.

Avoid making the comparison table excessively dense.

Use:

* Sticky college names
* Horizontal scrolling where required
* Highlight meaningful differences
* Clear labels
* Responsive behaviour

---

# 26. Find My College UI

The questionnaire should feel like a guided experience.

Example:

```text
Step 2 of 6

What do you want to study?

○ Engineering
○ Medical
○ Nursing
○ Law
○ Arts & Science

                     [Continue]
```

Include:

* Progress indicator
* Clear question
* Limited options per screen
* Back button
* Continue button

Avoid presenting all questions on one long form.

---

# 27. WhatsApp CTA

WhatsApp should be visually accessible but not intrusive.

Recommended:

```text
                    ┌──────┐
                    │  WA  │
                    └──────┘
```

The floating action should:

* Remain accessible
* Not cover important UI
* Work on mobile
* Route only to College Guide
* Support contextual messages where appropriate

---

# 28. Primary CTA

The primary conversion CTA should generally be:

> Get Admission Guidance

Other useful CTAs:

* Talk to an Expert
* Request a Callback
* Find My College
* Explore Colleges
* Shortlist
* Compare

CTA wording must remain consistent.

---

# 29. Button System

Button variants:

```text
Primary
Secondary
Outline
Ghost
Destructive
Icon
```

Each button should have:

* Default
* Hover
* Focus
* Active
* Disabled
* Loading

states.

---

# 30. Form Design

Forms should:

* Use clear labels
* Provide helpful placeholders
* Validate inputs
* Explain errors
* Avoid unnecessary fields
* Support keyboard navigation
* Work well on mobile

Example:

```text
Mobile Number

[ +91 | Enter mobile number ]

We'll use this to contact you regarding
your admission guidance request.
```

---

# 31. Form Validation

Validation should happen at the appropriate point.

Error example:

```text
Please enter a valid mobile number.
```

Avoid technical messages such as:

```text
ValidationError: invalid_phone
```

---

# 32. Loading States

Use skeleton loading where appropriate.

Example:

```text
┌──────────────────────┐
│ ██████████████████   │
│ ██████████           │
│ ████████             │
└──────────────────────┘
```

Avoid blank screens during loading.

---

# 33. Empty States

Example:

```text
No colleges found

Try changing your location,
course or department.

[Clear Filters]
```

Empty states should always provide a next action.

---

# 34. Error States

Example:

```text
Something went wrong.

We couldn't load the colleges right now.

[Try Again]
```

Errors should never expose technical implementation details.

---

# 35. Toasts & Feedback

Use toast notifications for short-lived feedback.

Examples:

* College added to shortlist
* College removed
* Enquiry submitted
* Profile updated

Important information should not rely only on toasts.

---

# 36. Modal Rules

Use modals only when necessary.

Good uses:

* Confirmation
* Important form
* Delete confirmation
* Login
* Callback request

Avoid using modals for normal navigation.

---

# 37. Mobile Bottom Navigation

A mobile bottom navigation may be considered for high-frequency actions.

Possible:

```text
Home
Explore
Shortlist
Guidance
Profile
```

Only use it if usability testing shows it improves navigation.

---

# 38. Accessibility

The product should aim for strong accessibility.

Requirements:

* Keyboard navigation
* Visible focus states
* Accessible labels
* Sufficient contrast
* Semantic HTML
* Screen-reader-friendly structure
* Accessible form errors
* Touch-friendly controls

Do not rely only on colour to communicate meaning.

---

# 39. Image Guidelines

College images should be:

* High quality
* Correctly cropped
* Optimised
* Responsive
* Meaningful

Use appropriate image aspect ratios.

Do not use random stock images when genuine client or college imagery is available and authorised.

---

# 40. Image Performance

Images should use:

* Compression
* Responsive sizes
* Lazy loading where appropriate
* Modern formats where supported
* Proper alt text

Above-the-fold images should be prioritised appropriately.

---

# 41. Motion Design

Animations should be subtle.

Recommended:

* Fade
* Slide
* Scale
* Skeleton transitions
* Button feedback
* Card hover

Avoid:

* Excessive bouncing
* Distracting animations
* Long transitions
* Animation on every element

Recommended transition duration:

```text
Fast → 150ms
Normal → 200–300ms
Slow → 400–500ms
```

---

# 42. Design Tokens

All reusable design values should be centralised.

Example:

```text
colors
typography
spacing
radius
shadows
breakpoints
z-index
transitions
```

Components must consume tokens rather than hard-coded values.

---

# 43. Border Radius

Use a consistent radius system.

Example:

```text
Small → 6px
Medium → 10px
Large → 14px
XL → 20px
Pill → 999px
```

Avoid mixing many unrelated radius values.

---

# 44. Shadow System

Use shadows sparingly.

Suggested levels:

```text
None
Small
Medium
Large
```

Cards should not all appear heavily elevated.

Use borders and surface contrast where appropriate.

---

# 45. Design Consistency

The same component must look and behave consistently throughout the platform.

Examples:

* Same button style
* Same card behaviour
* Same spacing
* Same form validation
* Same CTA wording
* Same modal behaviour
* Same loading patterns

---

# 46. Student-First Principle

When choosing between two valid UI approaches:

> Prefer the option that requires less effort from the student.

The student should not have to understand the internal complexity of the platform.

---

# 47. Trust-First Principle

Visual design must support credibility.

Do not use:

* Fake counters
* Fake reviews
* Fake awards
* Fake ratings
* Fake testimonials
* Artificial urgency
* Misleading claims

All trust-building content must be genuine.

---

# 48. Conversion Design

Conversion should feel natural.

Preferred flow:

```text
Explore
 ↓
Understand
 ↓
Build confidence
 ↓
Get guidance
```

Do not aggressively interrupt students with repeated popups.

---

# 49. Admin UI Principles

The admin dashboard should prioritise:

* Information density
* Productivity
* Search
* Filtering
* Quick actions
* Clear statuses
* Data tables
* Bulk operations where useful

Admin UI can be denser than the student-facing UI.

---

# 50. Student vs Admin Design

```text
STUDENT UI
Simple
Visual
Friendly
Exploratory
Mobile-first

ADMIN UI
Efficient
Data-focused
Functional
Action-oriented
Desktop-optimised
```

---

# 51. Component Architecture

Reusable components should include:

```text
Header
Footer
SearchBar
CategoryCard
LocationCard
CollegeCard
CollegeGrid
CollegeProfile
FilterPanel
CompareTable
ShortlistButton
GuidanceCTA
WhatsAppButton
CallbackForm
EnquiryForm
TestimonialCard
AwardCard
SuccessStoryCard
RecommendationCard
Pagination
Modal
Toast
Skeleton
EmptyState
ErrorState
```

The final component list may expand during implementation.

---

# 52. UI Quality Gate

A UI feature should not be considered complete until:

* Desktop works
* Mobile works
* Tablet works
* Loading state exists
* Empty state exists
* Error state exists
* Hover state exists where applicable
* Focus state exists
* Accessibility is considered
* Visual spacing is consistent
* Typography is consistent
* CTA hierarchy is clear
* No layout overflow exists

---

# 53. Design Principle

> **College Guide should feel like a trusted education advisor presented through a premium, modern digital experience.**

# College Guide — UX/UI Design System

## 1. Purpose

This document defines the visual language, UX principles, components, layouts, interactions, and responsive behaviour of the College Guide platform.

The website must feel:

- Trustworthy
- Professional
- Modern
- Student-friendly
- Premium
- Easy to navigate
- Fast
- Credible
- Conversion-focused

The website must NOT feel like:

- A generic college directory
- An outdated education portal
- A crowded government-style website
- A template copied from another website
- An aggressive sales website

---

# 2. Primary UX Goal

The student's journey should be extremely simple.

```text
Discover
   ↓
Explore
   ↓
Compare
   ↓
Understand
   ↓
Shortlist
   ↓
Ask College Guide
   ↓
Get Guidance
````

The website should continuously guide students toward the next useful action.

---

# 3. Primary Business Goal

The website should convert student interest into qualified leads for College Guide.

Primary conversion actions:

1. Contact College Guide
2. WhatsApp College Guide
3. Request Callback
4. Find My College
5. Shortlist College
6. Compare Colleges

The website must NOT encourage students to directly contact colleges.

---

# 4. Target Users

## Primary User

Students searching for higher education options.

They may be:

* 12th standard students
* Students awaiting results
* Students looking for admission
* Parents researching colleges
* Students changing course preferences
* Students comparing colleges

---

# 5. Secondary User

Parents.

Parents require:

* Trust
* Verified information
* Clear guidance
* Fees information
* Location information
* Course information
* Admission guidance
* Easy contact with College Guide

---

# 6. Internal Users

### Counsellor

Needs:

* Leads
* Student information
* Preferences
* Follow-ups
* Notes
* Lead status

### Admin

Needs:

* Colleges
* Courses
* Departments
* Students
* Leads
* Content
* Awards
* Testimonials
* Analytics

---

# 7. Design Personality

The visual personality should communicate:

```text
Professional
       +
Modern
       +
Human
       +
Trustworthy
       +
Youthful
```

Avoid excessive childish education graphics.

Avoid excessive corporate seriousness.

The ideal balance is:

> Premium education consultancy + modern student platform.

---

# 8. Visual Direction

The design should be:

* Clean
* Spacious
* Strong typography
* High-quality imagery
* Clear hierarchy
* Subtle shadows
* Rounded cards
* Smooth transitions
* Minimal visual noise

Use whitespace intentionally.

---

# 9. Color System

The exact final brand colors should be confirmed with the client.

Recommended structure:

### Primary

Brand primary color.

Used for:

* Main CTA
* Buttons
* Active states
* Links
* Important highlights

### Secondary

Used for:

* Supporting sections
* Badges
* Secondary actions

### Neutral

Use:

```text
Background
Surface
Border
Text
Muted text
```

Do not use too many accent colors.

---

# 10. Color Usage Principle

Primary CTA should remain visually dominant.

Example hierarchy:

```text
Primary CTA
   ↓
Secondary CTA
   ↓
Tertiary Action
```

Example:

```text
[ Find My College ]

[ Explore Colleges ]

View Details
```

---

# 11. Typography

Use a modern sans-serif font.

Recommended options:

* Inter
* Geist
* Plus Jakarta Sans
* Manrope

The final font should be selected based on the visual direction.

Use consistent typography hierarchy.

---

# 12. Typography Scale

Example:

```text
Display
64px

H1
48px

H2
36px

H3
28px

H4
22px

Body Large
18px

Body
16px

Small
14px

Caption
12px
```

Responsive values should be adjusted for mobile.

---

# 13. Typography Rules

Headings:

* Short
* Strong
* Easy to scan

Paragraphs:

* Short
* Readable
* Avoid giant text blocks

Do not use unnecessarily complicated language.

---

# 14. Hero Section

The homepage hero should immediately answer:

> What does College Guide help me do?

Suggested structure:

```text
-----------------------------------------------
|                                             |
|   Find the Right College                    |
|   for Your Future                           |
|                                             |
|   Explore colleges, courses and guidance    |
|   across Tamil Nadu.                        |
|                                             |
|   [ Find My College ] [ Explore Colleges ]  |
|                                             |
|              Student / Campus Visual        |
|                                             |
-----------------------------------------------
```

---

# 15. Hero CTA

Primary:

```text
Find My College
```

Secondary:

```text
Explore Colleges
```

Optional:

```text
Talk to a Counsellor
```

The primary CTA should visually stand out.

---

# 16. Trust Immediately After Hero

The next section should establish credibility.

Possible content:

```text
Trusted Guidance
        +
Years of Experience
        +
Awards & Achievements
        +
Students Guided
```

Exact numbers must only come from client-approved data.

Never invent statistics.

---

# 17. Client Credibility Section

This is a major business differentiator.

Display:

* Awards
* Certificates
* Achievements
* Recognition
* Experience
* Media/features if approved

Possible title:

> Trusted by Students. Recognised for Excellence.

---

# 18. Awards Presentation

Use high-quality cards.

```text
┌─────────────────────────┐
│                         │
│       AWARD IMAGE       │
│                         │
├─────────────────────────┤
│ Award Title             │
│ Organisation            │
│ Year                    │
└─────────────────────────┘
```

Clicking an award may open a larger image/lightbox.

---

# 19. Education Categories

The homepage should provide easy access to:

```text
Engineering
Medical
Nursing
Dental
Pharmacy
Law
Arts & Science
Agriculture
Veterinary
Physiotherapy
Polytechnic
```

The final list must be controlled by the database.

---

# 20. Category UI

Use visually distinct cards.

Example:

```text
┌───────────────┐
│      🎓       │
│ Engineering   │
│ 120+ Colleges │
└───────────────┘
```

Do not rely only on icons.

Each card should clearly communicate:

* Category
* Number of colleges where available
* Explore action

---

# 21. Location Explorer

Students should be able to select their preferred location.

Examples:

```text
Chennai
Coimbatore
Madurai
Trichy
Salem
Tirunelveli
Vellore
Erode
Thanjavur
```

The final list must come from the database.

---

# 22. Location UX

Suggested interface:

```text
Where do you want to study?

[ Search location... ]

Popular locations:

[ Chennai ]
[ Coimbatore ]
[ Madurai ]
[ Trichy ]
[ Salem ]
```

---

# 23. Location + Category Filtering

Students should be able to combine filters.

Example:

```text
Engineering
+
Chennai
+
Computer Science
```

Results:

```text
Engineering Colleges
in Chennai
for Computer Science
```

---

# 24. College Search

Search should be available globally.

Search placeholder:

> Search colleges, courses or locations...

Search results should classify the result.

Example:

```text
COLLEGES
ABC Engineering College

COURSES
Computer Science Engineering

LOCATIONS
Chennai
```

---

# 25. College Listing Page

Recommended structure:

```text
Page Header
     ↓
Search
     ↓
Filters
     ↓
Sort
     ↓
College Cards
     ↓
Pagination / Load More
```

---

# 26. College Filters

Potential filters:

```text
Category
Location
Course
Department
Hostel
College Type
Affiliation
Accreditation
```

Only show filters that are useful and supported by verified data.

---

# 27. College Card

Recommended card:

```text
┌───────────────────────────────────────┐
│ [College Image]                       │
│                                       │
│ ABC Engineering College               │
│ 📍 Chennai                             │
│                                       │
│ Engineering                           │
│ Computer Science • IT • ECE           │
│                                       │
│ ✓ Verified Information                │
│                                       │
│ [ View College ]  ♡                  │
└───────────────────────────────────────┘
```

---

# 28. College Card Rules

Do not overload cards.

The card should answer:

* What college?
* Where?
* What category?
* What major departments?
* Is information verified?
* What can I do next?

---

# 29. College Profile Page

This is one of the most important pages.

Structure:

```text
College Hero
     ↓
Quick Facts
     ↓
About
     ↓
Courses
     ↓
Departments
     ↓
Facilities
     ↓
Admission Information
     ↓
Location
     ↓
Related Colleges
     ↓
College Guide CTA
```

---

# 30. College Hero

Example:

```text
ABC Engineering College

📍 Chennai
🎓 Engineering
✓ Verified

[ Shortlist ]
[ Compare ]

Need guidance?
[ Talk to College Guide ]
```

The primary contact action must point to College Guide.

---

# 31. No Direct College Contact

Critical UX rule:

Students must NOT see:

* College phone number
* College WhatsApp
* Direct admission phone
* Direct enquiry form to college
* Direct contact CTA

unless explicitly approved by the client later.

Instead:

```text
Need admission guidance?

Talk to College Guide

[ WhatsApp Us ]
[ Request Callback ]
```

---

# 32. College Information Tabs

For long college profiles use tabs or anchored sections.

Example:

```text
Overview
Courses
Departments
Facilities
Admission
Location
```

On mobile, use a horizontally scrollable tab bar or suitable accordion.

---

# 33. Quick Facts

Display important information in a compact grid.

```text
Established
Affiliation
Accreditation
Location
College Type
Courses
```

Only show verified data.

---

# 34. Course Section

Display courses clearly.

Example:

```text
Engineering

Computer Science
Information Technology
Mechanical Engineering
Civil Engineering
ECE
```

Each course should be clickable.

---

# 35. Department Section

Department cards may show:

```text
Department Name
Available at college
Course category
```

Example:

```text
Computer Science & Engineering

[ Explore Department ]
```

---

# 36. Facilities

Use visual cards.

```text
Library
Hostel
Laboratories
Sports
Transport
Cafeteria
Wi-Fi
```

Do not display a facility unless the data is verified.

---

# 37. College Gallery

Use:

* Large featured image
* Supporting thumbnails
* Lightbox

Do not load every image immediately.

Lazy-load gallery images.

---

# 38. Location Section

Show:

* City
* District
* State
* Approximate location/map where appropriate

Avoid exposing sensitive student locations.

---

# 39. Related Colleges

At the bottom of a college page:

> You may also like

Show similar colleges based on:

* Category
* Course
* Location

---

# 40. Sticky CTA

On desktop:

A subtle sticky contact area may remain visible.

Example:

```text
Need help choosing?

[ Talk to College Guide ]
```

On mobile:

Use a bottom sticky CTA.

```text
┌──────────────────────────────────────┐
│ WhatsApp       Talk to Counsellor    │
└──────────────────────────────────────┘
```

Do not cover important page content.

---

# 41. Find My College

This should be a major feature.

The experience should feel like a guided quiz rather than a complicated form.

---

# 42. Find My College Flow

```text
Step 1
What do you want to study?

        ↓

Step 2
Which course?

        ↓

Step 3
Preferred location?

        ↓

Step 4
Budget / preferences?

        ↓

Step 5
Hostel / other preferences?

        ↓

Results
```

---

# 43. Recommendation Results

Show:

```text
Your Recommended Colleges

Based on your preferences

1. College A
92% Match

2. College B
87% Match

3. College C
82% Match
```

The matching score must be generated by the actual recommendation logic.

---

# 44. Recommendation Explanation

Every recommendation should explain why it appeared.

Example:

```text
Why this college?

✓ Matches your course
✓ Matches your location
✓ Hostel available
✓ Fits selected preferences
```

Never claim guaranteed admission.

---

# 45. Student Registration

Registration should happen only when it provides meaningful value.

Do not force registration before allowing basic exploration.

Recommended:

```text
Explore
   ↓
Find Colleges
   ↓
Shortlist / Save
   ↓
Create account
```

---

# 46. Student Profile

Student dashboard should show:

```text
My Profile
My Preferences
My Shortlist
My Comparisons
My Recommendations
My Enquiries
```

---

# 47. Shortlist UX

Student can save colleges.

Visual:

```text
♡ Save

→

♥ Saved
```

Saved colleges should appear in:

> My Shortlist

---

# 48. Compare UX

Students should be able to compare selected colleges.

Comparison table:

```text
                     College A    College B

Location             Chennai      Trichy
Category             Engineering  Engineering
Courses              ...          ...
Hostel               Yes          Yes
Facilities            ...          ...
```

Avoid comparing information that is not available or verified.

---

# 49. WhatsApp UX

WhatsApp should be visible but not intrusive.

Good placements:

* Header
* College profile CTA
* Find My College results
* Floating action
* Contact section
* Mobile bottom CTA

Do not show WhatsApp on every component.

---

# 50. WhatsApp Button

Use clear language:

```text
Chat with College Guide
```

or:

```text
WhatsApp College Guide
```

Avoid:

```text
Contact College
```

---

# 51. Contact Form

Keep it short.

Initial fields:

```text
Name
Phone
Email (optional)
Interested Category
Interested Course
Preferred Location
Message
```

Do not ask for unnecessary information.

---

# 52. Contact Confirmation

After submission:

```text
Thank you!

Our College Guide team will contact you soon.

[ Continue Exploring Colleges ]
```

Do not falsely promise an exact response time unless the client guarantees it.

---

# 53. Trust Architecture

Trust should appear throughout the experience.

Trust signals:

```text
Awards
Experience
Verified information
Testimonials
Success stories
Student guidance
Transparent information
```

Do not place all trust elements only on the About page.

---

# 54. Testimonials

Use authentic testimonials.

Card:

```text
"Short testimonial..."

Student Name
Course
College
```

Only use approved testimonials.

---

# 55. Success Stories

Create a dedicated section:

> Students We Helped

Show:

* Student story
* Course
* College
* Admission journey

Avoid exaggerated claims.

---

# 56. About College Guide

The About page should communicate:

* Who the client is
* Experience
* Mission
* Achievements
* Awards
* Guidance process
* Why students trust them

---

# 57. Awards Page

Dedicated page:

```text
Awards & Recognition

[ Award ]
[ Award ]
[ Award ]
[ Award ]
```

Use high-quality images.

---

# 58. Navigation

Desktop navigation:

```text
Logo

Colleges
Courses
Locations
Find My College
Guides
About Us

                         [ Talk to Us ]
```

Do not overload the navigation.

---

# 59. Mobile Navigation

Use a clean mobile menu.

Suggested:

```text
Home
Colleges
Courses
Locations
Find My College
Guides
About
Contact
```

Primary CTA should remain easily accessible.

---

# 60. Footer

Footer should contain:

```text
College Guide

Explore
Colleges
Courses
Locations
Find My College

Resources
Guides
FAQs

Company
About Us
Awards
Success Stories
Contact

Legal
Privacy Policy
Terms
```

---

# 61. Responsive Design

Must support:

* Mobile
* Tablet
* Laptop
* Large desktop

Do not design desktop first and simply shrink everything.

Design responsive layouts intentionally.

---

# 62. Mobile Priority

Most students may use mobile devices.

Therefore:

* Buttons must be thumb-friendly
* Text must remain readable
* Cards must stack properly
* Filters must be easy to use
* Sticky CTA must be considered
* Forms must be short

---

# 63. Touch Targets

Interactive elements should have sufficiently large touch targets.

Avoid tiny:

```text
×
♡
filter icons
```

that are difficult to tap.

---

# 64. Loading States

Use skeleton loaders.

Example:

```text
┌─────────────────────────┐
│ ███████████             │
│ ███████████████         │
│ ███████                 │
└─────────────────────────┘
```

Avoid blank screens during loading.

---

# 65. Empty States

Example:

```text
No colleges found.

Try changing your location,
course or category.

[ Clear Filters ]
```

Never show a confusing empty screen.

---

# 66. Error States

Example:

```text
Something went wrong.

Please try again.

[ Try Again ]
```

Do not expose technical error messages.

---

# 67. Form UX

Forms should:

* Show labels
* Validate clearly
* Preserve entered data
* Show inline errors
* Disable duplicate submission
* Show success state

---

# 68. Accessibility

The platform should follow accessibility best practices.

Requirements:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Alt text
* Accessible forms
* Sufficient contrast
* Screen-reader-friendly labels

Do not communicate meaning using color alone.

---

# 69. Motion

Use subtle animation.

Good:

* Fade
* Slide
* Scale
* Hover
* Skeleton shimmer

Avoid:

* Excessive animation
* Constant movement
* Distracting effects
* Long transition delays

---

# 70. Page Transitions

Navigation should feel fast.

Avoid unnecessary full-page loading animations.

Use framework-native loading states where possible.

---

# 71. Card Design

Cards should have:

* Consistent radius
* Consistent spacing
* Clear hierarchy
* Subtle border/shadow
* Strong hover state

Do not make every section a card.

---

# 72. Border Radius

Use a consistent radius system.

Example:

```text
Small
8px

Medium
12px

Large
16px

Extra Large
24px
```

Use consistently across components.

---

# 73. Spacing System

Use a predictable spacing scale.

Example:

```text
4
8
12
16
24
32
48
64
80
96
```

Avoid random spacing values.

---

# 74. Buttons

Primary:

```text
[ Find My College ]
```

Secondary:

```text
[ Explore Colleges ]
```

Outline:

```text
[ Compare ]
```

Ghost:

```text
View Details →
```

---

# 75. Button States

Every interactive button should support:

```text
Default
Hover
Focus
Active
Loading
Disabled
```

---

# 76. Toasts

Use toast notifications for small actions.

Examples:

```text
College added to shortlist.
College removed from shortlist.
Profile updated.
```

Do not use toasts for important information that requires attention.

---

# 77. Modal Usage

Use modals sparingly.

Good use:

* Award image viewer
* Confirmation
* Quick enquiry
* Login

Avoid putting entire complex workflows inside modals.

---

# 78. Filters on Mobile

Desktop:

```text
Sidebar Filters
```

Mobile:

```text
[ Filters ]
```

opens a drawer/sheet.

Do not force a permanent sidebar on mobile.

---

# 79. Search Experience

Search should provide suggestions.

Example:

```text
Search colleges, courses or locations...

Computer Science

Colleges
ABC Engineering College

Courses
Computer Science Engineering

Locations
Chennai
```

---

# 80. Breadcrumbs

Useful for deep SEO pages.

Example:

```text
Home
/
Engineering
/
Chennai
/
ABC Engineering College
```

Breadcrumbs should not replace normal navigation.

---

# 81. SEO-Friendly UX

Important pages should have:

* Descriptive headings
* Unique content
* Clean URLs
* Internal links
* Breadcrumbs
* Structured data where appropriate

Do not create pages solely to generate SEO traffic without useful content.

---

# 82. College Page SEO

Example:

```text
Title:
ABC Engineering College Chennai — Courses & Admission Guidance

Description:
Explore courses, departments, facilities and admission guidance for ABC Engineering College through College Guide.
```

Actual metadata must be generated from verified information.

---

# 83. Trust Badge

Use a subtle verification indicator.

Example:

```text
✓ Verified Information
```

Only display this when the information has actually been verified.

---

# 84. Conversion Hierarchy

Every important page should have one clear primary action.

Example college page:

Primary:

```text
Talk to College Guide
```

Secondary:

```text
Shortlist
Compare
```

Avoid five equally prominent buttons.

---

# 85. Student Journey UX

Ideal flow:

```text
Homepage
   ↓
Choose Category
   ↓
Choose Location
   ↓
Explore Colleges
   ↓
College Profile
   ↓
Shortlist / Compare
   ↓
Need Help?
   ↓
College Guide
   ↓
Lead
```

---

# 86. Parent Journey UX

```text
Homepage
   ↓
Explore Category
   ↓
College Details
   ↓
Awards / Trust
   ↓
Admission Guidance
   ↓
Contact College Guide
```

---

# 87. Admin UX

Admin dashboard should prioritise:

```text
New Leads
High Intent Leads
Pending Follow-ups
Recent Enquiries
Applications
Admissions
```

The most actionable information should appear first.

---

# 88. Counsellor UX

Counsellor dashboard:

```text
My Leads
 ↓
New
 ↓
Contacted
 ↓
Follow-up
 ↓
High Intent
```

Every lead should clearly show the next action.

---

# 89. Lead Detail UI

Example:

```text
Stephen
────────────────────────

Interested:
Engineering
Information Technology

Preferred Location:
Chennai

Lead Score:
86

Status:
Counselling

Assigned:
Counsellor Name

────────────────────────

[ Call ]
[ WhatsApp ]
[ Add Note ]
[ Schedule Follow-up ]

Activity
Notes
Follow-ups
```

The counsellor should not need to search through multiple pages to understand the lead.

---

# 90. Admin Data Tables

Tables should support:

* Search
* Filter
* Sort
* Pagination
* Row actions

Avoid extremely wide tables.

On mobile, use cards or horizontally scrollable tables where appropriate.

---

# 91. Dashboard Metrics

Potential metrics:

```text
Total Students
New Leads
High Intent Leads
Follow-ups Due
Applications
Admissions
Conversion Rate
Top Categories
Top Locations
Popular Colleges
```

Only show metrics that are actually calculated from real data.

---

# 92. Design Consistency

All pages must use the same:

* Typography
* Colors
* Spacing
* Buttons
* Cards
* Icons
* Form styles
* Navigation
* CTA patterns

Do not design each page independently.

---

# 93. Component System

Core components:

```text
Button
Input
Select
SearchInput
Card
CollegeCard
CourseCard
DepartmentCard
LocationCard
Badge
Modal
Drawer
Tabs
Accordion
Toast
Pagination
Skeleton
EmptyState
ErrorState
Breadcrumb
Navbar
Footer
```

---

# 94. College-Specific Components

```text
CollegeHero
CollegeQuickFacts
CollegeOverview
CollegeCourses
CollegeDepartments
CollegeFacilities
CollegeGallery
CollegeLocation
CollegeTrustSignals
RelatedColleges
CollegeContactCTA
```

---

# 95. Student Components

```text
PreferenceSelector
RecommendationCard
ShortlistButton
CompareButton
StudentProfile
ShortlistList
ComparisonTable
EnquiryForm
CallbackForm
```

---

# 96. Admin Components

```text
AdminSidebar
DashboardMetric
LeadTable
LeadStatusBadge
LeadDetail
LeadNotes
FollowupPanel
CollegeEditor
CourseEditor
DepartmentEditor
MediaUploader
AwardManager
TestimonialManager
```

---

# 97. Design System Rule

Components should be reusable.

Do not create slightly different versions of the same button or card without a genuine UX reason.

---

# 98. UX Copy Rules

Use simple language.

Prefer:

```text
Find My College
Talk to a Counsellor
Explore Colleges
Save College
Compare Colleges
Request Callback
```

Avoid complicated corporate terminology.

---

# 99. Trust Copy Rules

Do not make unsupported claims such as:

```text
100% Admission Guaranteed
Best College Guaranteed
Guaranteed Placement
```

unless the client can legally substantiate them.

---

# 100. Data Accuracy UX Rule

If information is unavailable:

Use:

```text
Information not available
```

or:

```text
Contact College Guide for guidance
```

Never fabricate data to make the UI look complete.

---

# 101. Student Privacy UX

Never publicly show:

* Other students' phone numbers
* Other students' email
* Private enquiries
* Counsellor notes
* Internal lead scores
* Internal business information

---

# 102. Contact Strategy

The website should consistently communicate:

> College Guide is the student's trusted guidance partner.

Not:

> College Guide is simply a college directory.

This distinction is central to the UX.

---

# 103. Homepage Section Order

Recommended initial homepage structure:

```text
1. Navbar
2. Hero
3. Trust / Credibility
4. Education Categories
5. Find My College
6. Explore by Location
7. Popular Colleges
8. How College Guide Helps
9. Awards & Recognition
10. Student Success Stories
11. Testimonials
12. Guides / Resources
13. Final CTA
14. Footer
```

The exact order may be refined after client feedback.

---

# 104. Final CTA

End major pages with a strong but helpful CTA.

Example:

```text
Not sure which college is right for you?

Let College Guide help you.

[ Find My College ]
[ Talk to a Counsellor ]
```

---

# 105. UX Quality Gate

Before a page is considered complete:

* Mobile tested
* Desktop tested
* Accessibility checked
* Loading state implemented
* Empty state implemented
* Error state implemented
* CTA hierarchy verified
* No direct college contact exposed
* Verified information only
* SEO metadata added where required
* Navigation works
* Forms validated

---

# 106. Final UX Principle

> **Every screen should make the student's next decision easier, while building enough trust for them to confidently contact College Guide.**

## FILE #23 — `AI_CONTEXT/UI_UX_DESIGN_SYSTEM.md`

````md
# College Guide — UI/UX Design System

## 1. Purpose

This document defines the visual language and user experience principles for the College Guide website.

The website must feel:

- Professional
- Trustworthy
- Modern
- Student-friendly
- Easy to navigate
- Fast
- Premium
- Credible
- Conversion-focused

The design must appeal primarily to:

```text
Students
Parents
College Seekers
````

while also serving the business needs of:

```text
College Guide Counsellors
Admins
Content Managers
```

---

# 2. Primary UX Goal

The student should be able to answer:

```text
What can I study?
        ↓
Which colleges offer it?
        ↓
Where are those colleges?
        ↓
Which colleges match my preference?
        ↓
How can College Guide help me?
```

The website should guide the student naturally toward:

```text
Explore
 ↓
Shortlist / Compare
 ↓
Get Guidance
 ↓
Contact College Guide
```

---

# 3. Design Personality

The visual personality should be:

```text
Modern
+
Academic
+
Trustworthy
+
Human
+
Premium
```

Avoid making the website look like:

```text
Generic Education Directory
Old-fashioned College Portal
Government Website
Aggressive Sales Website
```

---

# 4. Trust Is the Core Design Principle

College Guide has experienced professionals with achievements and awards.

The UI must use this credibility strategically.

Trust signals:

```text
Experience
Awards
Achievements
Student Success Stories
Testimonials
Professional Team
Verified College Information
Transparent Guidance
```

Do not exaggerate claims.

---

# 5. Homepage UX Structure

Recommended homepage:

```text
Navbar
 ↓
Hero
 ↓
Quick College Search
 ↓
Explore by Category
 ↓
Explore by Location
 ↓
Popular Colleges
 ↓
How College Guide Works
 ↓
Why Students Choose College Guide
 ↓
Awards / Achievements
 ↓
Success Stories
 ↓
Testimonials
 ↓
Guidance CTA
 ↓
Footer
```

---

# 6. Header

Desktop navigation:

```text
College Guide Logo

Explore Colleges
Courses
Locations
Compare
Guidance
About Us

[WhatsApp]
```

The exact navigation may be refined during implementation.

---

# 7. Header Behavior

Desktop:

```text
Sticky Header
```

Mobile:

```text
Compact Header
Menu
WhatsApp CTA
```

The header should not occupy excessive screen space.

---

# 8. Hero Section

The hero must immediately communicate:

```text
What College Guide does
```

Example concept:

```text
Find the Right College
for Your Future

Explore colleges, courses and opportunities
across Tamil Nadu with guidance from
College Guide.

[Explore Colleges]
[Get Free Guidance]
```

Do not make unsupported claims such as:

```text
100% guaranteed admission
```

---

# 9. Hero Search

The hero should offer a prominent discovery interface.

Possible fields:

```text
What do you want to study?
Where do you want to study?
College / Course Search
```

Example:

```text
[ Engineering ▼ ]
[ Chennai ▼ ]
[ Search Colleges 🔍 ]
```

---

# 10. Search Experience

Search must feel instant and helpful.

When typing:

```text
Computer Science
```

show suggestions:

```text
Computer Science Engineering
Computer Applications
Computer Science Colleges
```

---

# 11. Category Navigation

Major categories:

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

Display using cards or visually distinctive icons.

---

# 12. Category Cards

Each category card should include:

```text
Icon
Category Name
Short Description
College Count
```

Example:

```text
Engineering
Explore engineering colleges
across Tamil Nadu
```

Do not show fake counts.

---

# 13. Location Explorer

Students should be able to explore colleges by location.

Primary locations may include:

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

The actual list should be data-driven.

---

# 14. Location UI

Possible design:

```text
Explore Colleges by Location

[ Chennai ]
[ Coimbatore ]
[ Madurai ]
[ Trichy ]
[ Salem ]
[ Vellore ]
```

Include:

```text
View All Locations →
```

---

# 15. Location Search

Allow:

```text
Search Location
```

Example:

```text
[ Search city or district ]
```

Results should update dynamically.

---

# 16. College Discovery Page

Recommended layout:

```text
Breadcrumb
 ↓
Page Title
 ↓
Search
 ↓
Filters
 ↓
College Results
```

Desktop:

```text
Filters       College Results
─────────     ─────────────────
Location      College Card
Category      College Card
Course        College Card
Department    College Card
Facilities    College Card
```

---

# 17. College Card

Every college card should contain:

```text
College Image
College Name
Location
Category
Popular Courses
Verified Badge
Short Description
```

Actions:

```text
View College
Compare
Shortlist
Get Guidance
```

Do not overload the card with too much information.

---

# 18. Verified Badge

Only verified colleges should show:

```text
✓ Verified
```

The meaning of verification should be clearly defined.

Do not imply government accreditation unless the underlying data supports that claim.

---

# 19. College Detail Page

Recommended:

```text
College Hero
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
Student Guidance CTA
```

---

# 20. College Hero

Display:

```text
College Logo
College Name
Location
Category
Verification Status
```

Primary CTA:

```text
Get Guidance
```

Secondary:

```text
Shortlist
Compare
```

Do NOT place direct college contact buttons for students.

---

# 21. Direct College Contact Restriction

This is a critical business rule.

Students must NOT be given direct college contact information.

Do not show:

```text
College Phone
College WhatsApp
College Admission Email
Direct Contact Button
```

Instead:

```text
Need Help Choosing?

Talk to College Guide

[WhatsApp College Guide]
[Get Guidance]
```

---

# 22. College Information

The detail page may display:

```text
About
Established Year
Location
Courses
Departments
Facilities
Campus Images
```

Only verified information should be presented as factual.

---

# 23. College Course Section

Example:

```text
Courses Offered

Engineering
 ├─ Computer Science Engineering
 ├─ Information Technology
 ├─ Mechanical Engineering
 └─ Civil Engineering
```

Course information must come from the database.

---

# 24. Department Section

Each department may show:

```text
Department Name
Description
Related Courses
```

Do not invent department details.

---

# 25. Facilities Section

Use visual cards:

```text
🏫 Campus
📚 Library
🧪 Laboratories
🏠 Hostel
🏆 Sports
🍴 Cafeteria
🚌 Transport
```

Icons must be consistent.

---

# 26. Gallery

College images should use:

```text
Large Featured Image
Thumbnail Gallery
Lightbox
```

Optimize images for performance.

---

# 27. College Location

Display:

```text
Location
District
City
```

If a map is included, it should support discovery.

The map must not introduce unnecessary direct college contact information.

---

# 28. Comparison UX

Students can compare colleges.

Comparison should be visually simple.

Example:

```text
College A | College B | College C
---------------------------------
Location
Courses
Departments
Facilities
Category
```

Avoid unsupported rankings.

---

# 29. Comparison Limit

Initial recommendation:

```text
Maximum 4 Colleges
```

When limit is reached:

```text
You can compare up to 4 colleges.
```

---

# 30. Shortlist UX

Students should be able to:

```text
♡ Shortlist
```

with immediate visual feedback.

Example:

```text
♡
```

changes to:

```text
♥
```

Use accessible labels in addition to icons.

---

# 31. Student Guidance CTA

The primary conversion CTA throughout the website should be:

```text
Get Free Guidance
```

Alternative:

```text
Talk to a Counsellor
```

Use the final wording approved by the client.

---

# 32. WhatsApp CTA

A persistent WhatsApp CTA may appear:

```text
WhatsApp
```

It must contact:

```text
College Guide
```

not individual colleges.

---

# 33. Floating WhatsApp Button

Recommended:

```text
Bottom Right
```

On desktop:

```text
[ WhatsApp ]
```

On mobile:

```text
[ WhatsApp ]
```

Ensure it does not cover important controls.

---

# 34. Guidance Form

Keep the first form simple.

Recommended:

```text
Name
Phone
Email (optional)
Interested Category
Course
Preferred Location
Message (optional)

[Get Guidance]
```

Do not ask for unnecessary information.

---

# 35. Form UX

Use:

```text
Clear Labels
Helpful Placeholders
Inline Validation
Accessible Error Messages
Loading State
Success State
```

---

# 36. Form Success

Example:

```text
✓ Request Received

Thank you for contacting College Guide.

Our team will get in touch with you.
```

Do not promise a response time unless guaranteed.

---

# 37. Form Error

Example:

```text
Something went wrong.

Please check your details and try again.
```

Do not display technical errors.

---

# 38. Student Experience Flow

Ideal:

```text
Landing
 ↓
Search
 ↓
Filter
 ↓
College
 ↓
Compare / Shortlist
 ↓
Guidance
 ↓
WhatsApp / Enquiry
```

The flow should require minimal unnecessary navigation.

---

# 39. Mobile-First Design

A large percentage of students may access the website through smartphones.

Therefore:

```text
Mobile
 ↓
Tablet
 ↓
Desktop
```

should be the design priority.

---

# 40. Mobile Bottom Navigation

Optional:

```text
Home
Explore
Compare
Saved
Guidance
```

Use only if testing confirms it improves navigation.

---

# 41. Mobile College Card

Prioritize:

```text
Image
College Name
Location
Course
Verified
Shortlist
Compare
```

Avoid excessive text.

---

# 42. Filter UX

Desktop:

```text
Sidebar Filters
```

Mobile:

```text
[ Filters ]
```

opening a bottom sheet or full-screen filter panel.

---

# 43. Filter Categories

Recommended:

```text
Category
Location
Course
Department
Facilities
```

Additional filters can be added based on real data.

---

# 44. Filter State

Show active filters clearly.

Example:

```text
Engineering ×
Chennai ×
CSE ×
```

Allow:

```text
Clear All
```

---

# 45. Search Empty State

If no colleges match:

```text
No colleges found.

Try changing your location, course
or category.
```

Provide:

```text
Clear Filters
```

---

# 46. Loading State

Use skeleton loaders rather than blank screens.

Examples:

```text
College Card Skeleton
Course Skeleton
Search Result Skeleton
```

---

# 47. Error State

Example:

```text
We couldn't load colleges right now.

[Try Again]
```

---

# 48. Typography

Use a modern, highly readable font system.

Recommended:

```text
Inter
```

or another modern sans-serif font.

Do not use too many font families.

---

# 49. Typography Hierarchy

Example:

```text
H1
Large, bold

H2
Strong section heading

H3
Card / subsection heading

Body
Comfortable reading size

Caption
Supporting information
```

Maintain consistent hierarchy across pages.

---

# 50. Color Strategy

The final palette should communicate:

```text
Trust
Education
Professionalism
Energy
```

Recommended approach:

```text
Primary Color
Secondary Color
Accent Color
Neutral Background
Text Color
Success
Warning
Error
```

Do not use too many colors.

---

# 51. Color Accessibility

Text must have sufficient contrast.

Do not rely only on color to communicate:

```text
Status
Errors
Success
Verification
```

Use:

```text
Icon
Text
Color
```

together where appropriate.

---

# 52. Buttons

Primary:

```text
Get Guidance
Explore Colleges
```

Secondary:

```text
Compare
Shortlist
Learn More
```

Buttons should have clear labels.

Avoid vague:

```text
Click Here
```

---

# 53. Button States

Every important button needs:

```text
Default
Hover
Focus
Active
Disabled
Loading
```

---

# 54. Cards

Cards should use consistent:

```text
Border Radius
Padding
Shadow
Spacing
Typography
```

Do not overuse heavy shadows.

---

# 55. Spacing

Use a consistent spacing scale.

Example:

```text
4
8
12
16
24
32
48
64
80
```

Avoid arbitrary spacing values throughout the application.

---

# 56. Border Radius

Use a consistent radius system.

Example:

```text
Small
Medium
Large
Pill
```

Buttons and cards should feel visually related.

---

# 57. Icons

Use one icon library consistently.

Recommended:

```text
Lucide
```

Do not mix random icon styles.

---

# 58. Images

Images should be:

```text
High Quality
Optimized
Responsive
Properly Cropped
Accessible
```

Use descriptive alt text.

---

# 59. Image Optimization

Use framework image optimization where available.

Avoid loading huge original images directly.

Recommended formats:

```text
WebP
AVIF
```

where supported.

---

# 60. Accessibility

The website must target:

```text
WCAG 2.2 AA
```

principles.

Important requirements:

```text
Keyboard Navigation
Focus States
Alt Text
Semantic HTML
Accessible Forms
Color Contrast
Screen Reader Support
```

---

# 61. Accessibility for Icons

Icon-only buttons must have accessible labels.

Example:

```text
aria-label="Add college to shortlist"
```

Do not rely on the icon alone.

---

# 62. Keyboard Navigation

Users must be able to navigate:

```text
Header
Search
Filters
College Cards
Forms
Modals
Comparison
```

using keyboard controls.

---

# 63. Focus State

Never remove focus indicators without providing an equivalent visible focus style.

---

# 64. Form Accessibility

Every input must have:

```text
Label
Input
Error State
Accessible Description
```

Do not rely only on placeholder text.

---

# 65. Responsive Breakpoints

Use framework-standard responsive breakpoints.

Typical:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Do not design for arbitrary device sizes only.

---

# 66. Desktop Width

Content should remain readable.

Use a centered container:

```text
max-width
```

rather than allowing text to stretch across the entire screen.

---

# 67. Navigation UX

Students should always know:

```text
Where am I?
Where can I go?
How do I return?
```

Use:

```text
Breadcrumbs
Clear Page Titles
Consistent Navigation
```

---

# 68. Breadcrumbs

Example:

```text
Home
/
Engineering
/
Chennai
/
College Name
```

Useful for SEO and navigation.

---

# 69. SEO-Friendly UI

Important content must exist as actual HTML text.

Do not make critical information image-only.

Examples:

```text
College Name
Course Name
Location
Department
Description
```

---

# 70. College Discovery UX

The website should make discovery enjoyable.

Example:

```text
What are you looking for?

[ Engineering ]
[ Medical ]
[ Nursing ]
[ Law ]
[ Arts & Science ]

Where?

[ Chennai ]
[ Coimbatore ]
[ Madurai ]
[ Trichy ]
```

---

# 71. Recommendation UX

If recommendation functionality exists:

```text
Step 1
What do you want to study?

Step 2
Where do you prefer?

Step 3
What matters to you?

Step 4
View Matches
```

Keep the process short.

---

# 72. Recommendation Result

Show:

```text
Recommended for You

College Name
Why it matches:
• Your selected course
• Your preferred location
• Your selected preferences
```

Do not claim objective superiority.

---

# 73. Trust Section

The client’s awards and achievements should have a premium presentation.

Example:

```text
Trusted Experience

Years of Experience
Awards
Achievements
Students Guided
```

Only display verified numbers.

---

# 74. Awards Section

Use:

```text
Award Image
Award Title
Organization
Year
```

Allow a lightbox for larger images.

---

# 75. Achievement Section

Possible:

```text
Our Journey
 ↓
Experience
 ↓
Recognition
 ↓
Achievements
 ↓
Student Success
```

This should tell a story rather than becoming a wall of badges.

---

# 76. Testimonial Section

Show:

```text
Student Name
Course / Context
College
Testimonial
```

Only use approved genuine testimonials.

---

# 77. Success Story Section

Use storytelling:

```text
Student Goal
 ↓
Guidance
 ↓
College Selection
 ↓
Outcome
```

Do not publish confidential information.

---

# 78. About Us Page

Recommended:

```text
Hero
 ↓
About College Guide
 ↓
Experience
 ↓
Mission
 ↓
Approach
 ↓
Awards
 ↓
Achievements
 ↓
Team
 ↓
Student Success
 ↓
Guidance CTA
```

---

# 79. Footer

Footer should include:

```text
College Guide Logo
About
Explore Colleges
Courses
Locations
Guidance
FAQs
Privacy Policy
Terms
Contact
WhatsApp
```

Do not include direct college contact information.

---

# 80. Privacy UI

The website should have clear:

```text
Privacy Policy
Terms & Conditions
Cookie / Tracking Notice
```

as applicable.

---

# 81. Cookie / Analytics Consent

If analytics technologies require consent in the target jurisdiction, implement an appropriate consent mechanism.

Do not collect unnecessary tracking data.

---

# 82. Microinteractions

Use subtle animations for:

```text
Hover
Card selection
Shortlist
Compare
Search
Form submission
Page transitions
```

Animations must improve UX, not distract.

---

# 83. Animation Rules

Keep animations:

```text
Fast
Subtle
Purposeful
Accessible
```

Respect:

```text
prefers-reduced-motion
```

---

# 84. Avoid

Do not use:

```text
Excessive Animations
Auto-playing Audio
Huge Popups
Fake Urgency
Fake Counters
Fake Reviews
Fake Awards
Misleading Rankings
```

---

# 85. Conversion Strategy

Every major page should have a logical CTA.

Example:

```text
College Page
→ Get Guidance

Course Page
→ Find Colleges

Location Page
→ Explore Colleges

Guide Article
→ Get Guidance

Comparison
→ Talk to College Guide
```

---

# 86. CTA Hierarchy

Use:

```text
Primary CTA
Get Guidance

Secondary CTA
Explore Colleges

Support CTA
WhatsApp
```

Do not make every button look equally important.

---

# 87. Student Trust

Trust should be built through:

```text
Accurate Information
Professional Design
Verified Data
Real Awards
Real Testimonials
Clear Guidance
Transparent Communication
```

not aggressive marketing.

---

# 88. Performance UX

Target:

```text
Fast First Load
Fast Search
Fast Filtering
Optimized Images
Minimal Layout Shift
```

Prioritize Core Web Vitals.

---

# 89. Skeleton Strategy

Use skeletons for dynamic content.

Do not show:

```text
Loading...
```

for every small action.

Use contextual loading indicators.

---

# 90. Toast Notifications

Use toasts for lightweight feedback:

```text
Added to shortlist
Removed from shortlist
College added to comparison
Follow-up created
```

Do not use toasts for critical information that users need to read carefully.

---

# 91. Modal Rules

Use modals only for:

```text
Confirmation
Important Forms
Image Gallery
Focused Interaction
```

Avoid excessive modal usage.

---

# 92. Mobile CTA Priority

On mobile, ensure:

```text
Get Guidance
WhatsApp
```

remain easy to access without blocking content.

---

# 93. Search Page UX

Recommended:

```text
Search Header
 ↓
Search Input
 ↓
Recent / Suggested Searches
 ↓
Filters
 ↓
Results
```

If no search is entered:

```text
Popular Categories
Popular Locations
```

can be displayed.

---

# 94. College Count

If showing counts:

```text
Engineering Colleges
245
```

the number must come dynamically from the database.

Never hardcode fake counts.

---

# 95. Data Freshness

Where relevant, show:

```text
Last Updated
```

for important data.

Example:

```text
College information updated recently.
```

Only show exact dates if the underlying data supports them.

---

# 96. Trust Without Overclaiming

Avoid:

```text
#1 College Consultancy
Guaranteed Admission
Best College in Tamil Nadu
100% Success
```

unless the client has verified evidence and the claim is legally appropriate.

---

# 97. UI Content Tone

Copy should be:

```text
Simple
Friendly
Professional
Encouraging
Clear
```

Avoid overly technical language.

---

# 98. Tamil Nadu Audience

The website should be optimized for students in Tamil Nadu.

Future localization may support:

```text
English
Tamil
```

The architecture should allow multilingual content later.

Do not hardcode all text directly into components if localization is expected.

---

# 99. Language Switching

If multilingual support is implemented:

```text
English | தமிழ்
```

The language selector should be easy to find.

---

# 100. Final Design Principle

> **College Guide should feel like a trusted education companion—not a database.**

Every page should help students discover, understand, compare and confidently reach College Guide for guidance.

The final design must balance:

```text
Student Experience
        +
Trust
        +
Information
        +
Conversion
        +
Performance
```

without compromising accessibility, privacy or credibility.

```
```
