ஆமா bro 👍 இனிமேல் **`RULES.md` + `CURRENT_TASK.md`** மட்டும் போதும். மற்ற files add பண்ண வேண்டாம்.

### `AI_CONTEXT/RULES.md`

````md
# College Guide — AI Development Rules

## 1. Core Rule

Before making any change, read the relevant files inside `AI_CONTEXT`.

Do not guess project requirements.

---

## 2. Existing Code First

Before creating or modifying code:

1. Inspect the existing project.
2. Understand the current implementation.
3. Reuse existing components and utilities.
4. Avoid unnecessary duplication.
5. Modify only what is required.

---

## 3. No Unnecessary Features

Do not add features simply because they seem interesting.

Every feature must provide:

- Student value
- Client/business value
- UX value
- Or technical necessity

If a feature does not provide meaningful value, do not implement it.

---

## 4. Student Experience

The website must be:

- Simple
- Fast
- Mobile-friendly
- Easy to understand
- Professional
- Trustworthy

Students should quickly understand:

- What College Guide does
- Which colleges are available
- Which courses are available
- Which locations are available
- How to get guidance

---

## 5. Client Protection

Students contacting the website must be routed to College Guide.

Do not expose direct college contact mechanisms unless explicitly approved by the client.

WhatsApp CTAs must point to the approved College Guide contact.

---

## 6. Trust

Never fabricate:

- Awards
- Achievements
- Testimonials
- College information
- Statistics
- Rankings
- Student success stories

Only use information provided or verified by the client.

---

## 7. College Data Accuracy

Never invent college data.

If required information is unavailable:

```text
Do not guess.
Do not fabricate.
Mark it as unavailable or request the correct data.
````

---

## 8. Design Rules

Use a consistent design system.

Avoid:

* Random colors
* Excessive animations
* Unnecessary gradients
* Cluttered layouts
* Generic templates
* Poor mobile layouts

The website should feel like a premium education guidance platform.

---

## 9. Responsive Design

Every feature must work on:

* Mobile
* Tablet
* Laptop
* Desktop

Mobile experience must be treated as a first-class experience.

---

## 10. Accessibility

Use:

* Semantic HTML
* Proper labels
* Keyboard navigation
* Visible focus states
* Alt text
* Sufficient contrast

---

## 11. Security

Never:

* Expose secrets
* Commit `.env` files
* Expose service-role keys
* Disable authentication to fix errors
* Disable RLS casually
* Trust client-side authorization
* Expose private student information

---

## 12. Validation

Validate important data on both:

```text
Frontend
   ↓
Backend
   ↓
Database
```

Never rely only on frontend validation.

---

## 13. Error Handling

Never expose technical errors to students.

Bad:

```text
PostgreSQL error: relation xyz does not exist
```

Good:

```text
Something went wrong. Please try again.
```

Detailed errors may be logged securely for development.

---

## 14. Performance

Avoid:

* Loading unnecessary data
* Huge client-side queries
* Unoptimized images
* Unnecessary API requests
* Unnecessary re-renders

Use pagination for large college lists.

---

## 15. SEO

Public college and educational content should be SEO-friendly.

Maintain:

* Clean URLs
* Metadata
* Proper headings
* Internal linking
* Structured content

Do not use misleading SEO content.

---

## 16. Database Changes

Before modifying the database:

1. Inspect existing schema.
2. Check existing migrations.
3. Avoid duplicate tables.
4. Create a migration when required.
5. Test the migration.
6. Verify existing functionality.

Never casually delete production data.

---

## 17. Code Quality

Prefer:

* TypeScript
* Reusable components
* Clear naming
* Small maintainable functions
* Centralized business logic
* Strong typing

Avoid:

* Giant components
* Duplicate logic
* Hardcoded business rules everywhere
* Unnecessary dependencies

---

## 18. AI Coding Workflow

For every task:

```text
Read Context
    ↓
Inspect Existing Code
    ↓
Understand Task
    ↓
Plan
    ↓
Implement
    ↓
Test
    ↓
Review
    ↓
Fix
```

Do not start coding immediately without understanding the existing implementation.

---

## 19. Scope Control

Only implement the current task.

Do not silently start unrelated features.

If another issue is discovered:

```text
Document it
Do not expand scope unnecessarily
```

---

## 20. Existing Component Rule

Before creating a new component, search for an existing component that can be reused.

Do not create duplicates such as:

```text
CollegeCard.tsx
CollegeCardNew.tsx
CollegeCardFinal.tsx
CollegeCardV2.tsx
```

---

## 21. No Fake Completion

Never claim that something is complete unless it has actually been implemented and checked.

---

## 22. Testing

After implementation, check:

* TypeScript
* Lint
* Build
* Relevant functionality
* Mobile layout
* Error states

---

## 23. Client Satisfaction

Every implementation decision should consider:

```text
Student Experience
        +
Client Business Value
        +
Professional Quality
```

The final product must feel client-ready, not like a student demo.

---

## 24. Final Rule

Build College Guide carefully.

Do not over-engineer.

Do not under-build.

Do not repeat existing work.

Do not invent requirements.

Always prefer the simplest solution that satisfies the actual requirement.

````

### `AI_CONTEXT/CURRENT_TASK.md`

```md
# College Guide — Current Task

## Current Phase

Project setup and AI-assisted development workflow.

---

## Current Objective

Prepare the College Guide project for structured vibe coding.

The AI must understand the existing project before implementing features.

---

## Immediate Workflow

```text
AI_CONTEXT
   ↓
Read relevant documentation
   ↓
Inspect project structure
   ↓
Inspect existing code
   ↓
Identify current implementation status
   ↓
Implement only the requested task
   ↓
Test
   ↓
Review
````

---

## Current Priority

Do not build random features.

The next implementation work should be selected based on:

1. Existing project status
2. Client requirements
3. Student experience
4. Business value
5. Technical dependencies

---

## Product Goal

College Guide is a student-focused college guidance platform for Tamil Nadu.

Students should be able to:

* Explore colleges
* Filter by category
* Filter by location
* Explore departments and courses
* View college information
* Shortlist colleges
* Compare colleges
* Request guidance
* Contact College Guide through WhatsApp

Students should not be directly redirected to colleges for contact through the platform unless explicitly approved.

---

## Client Goal

The platform should help the client:

* Attract students
* Generate enquiries
* Manage leads
* Follow up with students
* Build trust
* Showcase awards and achievements
* Improve conversions
* Manage college information
* Understand student interests

---

## Current Rule

Before implementing the next feature:

```text
DO NOT GUESS.
DO NOT REBUILD EXISTING FEATURES.
DO NOT CREATE DUPLICATE COMPONENTS.
DO NOT ADD UNREQUESTED FEATURES.
```

Inspect the current project first.

---

## Definition of Done

A task is complete only when:

* Feature works
* Existing functionality is not broken
* Responsive UI works
* Validation works
* Errors are handled
* Security requirements are respected
* Relevant tests/checks pass
* Code is maintainable

---

## AI Instruction

When this file is used by an AI coding agent:

1. Read `RULES.md`.
2. Read the other relevant AI_CONTEXT documentation.
3. Inspect the current codebase.
4. Determine what has already been implemented.
5. Implement only the task explicitly provided by the developer/user.
6. Do not duplicate existing functionality.
7. Report what was changed and what was tested.

---

## Current Task Status

Status:

```text
READY FOR NEXT IMPLEMENTATION TASK
```

No specific feature should be implemented from this file alone.
The actual feature request must come from the developer/user.

```
```
