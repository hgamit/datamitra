# Datamitra Website Specification (Simple MVP)

## Overview
Build a simple, persuasive lead-generation website for Datamitra, a Data and AI consulting agency. The site should clearly explain what Datamitra does and help visitors submit their business pain points through a Contact Us form. The site will be hosted on GitHub Pages.

## Goals
1. Launch a clean one-page website quickly.
2. Communicate Datamitra's core services in plain business language.
3. Capture qualified leads through a simple contact form.
4. Keep implementation easy to maintain and update.

## Requirements

### Functional Requirements
1. The site must have a clear hero section with:
   - Company name (Datamitra)
   - One-line value proposition
   - Primary call-to-action button (Contact Us)
2. The site must include short sections for core offerings:
   - Assessment
   - Stakeholder engagement
   - Pilot projects
   - Tailored solutions
   - Change management
   - Future-proofing
3. The site must include a Contact Us form with at least:
   - Name
   - Work email
   - Company
   - Pain point/challenge (textarea)
4. The site must validate required fields before submission.
5. The site must show clear success and error messages after form submission.
6. The site must provide a fallback contact method (email text link) if form submission fails.

### Non-Functional Requirements
1. The site must be compatible with static hosting on GitHub Pages.
2. The site must work on mobile and desktop screens.
3. The site must load quickly and avoid heavy dependencies.
4. The site must use semantic HTML and basic accessibility practices.
5. The form integration must not expose secrets in client-side code.
6. The content and layout must be easy for developers to edit.

## Assumptions
1. MVP scope is a single-page site.
2. Datamitra does not need login/authentication for this phase.
3. Form handling will use a third-party or serverless endpoint (because GitHub Pages is static).
4. English-only content is sufficient for initial launch.
5. Existing text in Idea.md is source material and will be shortened for clarity.
6. Legal copy (privacy/consent text) can be minimal for MVP and refined later.
7. Brand assets are either available or can be approximated in MVP.

## Open Questions
1. Which form backend should be used for MVP (Formspree, Google Apps Script, other)?
2. Which email inbox or CRM should receive submitted leads?
3. Is a Privacy Policy page required at launch?
4. Should analytics be included now or post-launch?
5. Who will approve final copy and design before publishing?

## Step-by-Step Plan
1. Confirm MVP decisions.
   - Choose form backend.
   - Confirm lead recipient email.
   - Confirm launch owner/approver.
2. Finalize concise copy.
   - Draft hero headline and subheadline.
   - Reduce service descriptions to short benefit-focused points.
3. Build page structure.
   - Create sections: Hero, Services, Why Datamitra, Contact.
   - Add one primary CTA in hero and one near footer.
4. Implement contact form.
   - Add required fields and client-side validation.
   - Connect to selected backend endpoint.
   - Add success/error states and fallback email link.
5. Apply basic styling.
   - Keep design clean, readable, and mobile-first.
   - Ensure consistent spacing, typography, and CTA visibility.
6. Add launch essentials.
   - Add SEO title and meta description.
   - Add basic accessibility checks (labels, keyboard focus, contrast).
7. Test and deploy.
   - Test on mobile and desktop.
   - Test valid and invalid form submissions.
   - Publish via GitHub Pages and verify live form flow.
8. Iterate after launch.
   - Review lead quality for first 2-4 weeks.
   - Refine copy and form fields based on incoming leads.

## Notes for Iterative Refinement
1. Each section can be updated independently without rewriting the full document.
2. Open Questions should be converted into confirmed decisions in future updates.
3. Requirements can be expanded from MVP to Phase 2 once launch is stable.
