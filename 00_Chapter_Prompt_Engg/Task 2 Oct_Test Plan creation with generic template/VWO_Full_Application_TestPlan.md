# VWO Full-Application QA Baseline Test Plan

## 1. Test Plan ID and Title

**Test Plan ID:** VWO-TP-001 (locally assigned)  
**Title:** VWO Full-Application QA Baseline Test Plan  
**Status:** Draft — pending approved requirements, test access, and stakeholder sign-off  
**Application:** VWO  
**Target URL:** https://app.vwo.com/  
**Plan version:** Draft 2  
**Prepared for:** Internal QA planning and risk review

## 2. Objective and References

### Objective

This document defines a risk-based QA baseline for the VWO application and establishes the minimum structure required for future test planning and execution. The purpose is to identify a practical testing scope, define coverage themes, record key dependencies and risks, and set a clear governance boundary for what is and is not allowed without approved access and requirements.

This plan does not represent executed testing or a pass/fail conclusion. At present, the only available detail is the production application URL; no approved test credentials, product requirements, module inventory, or acceptance criteria were provided. As a result, only non-invasive, unauthenticated observations may be considered if explicitly authorized by the application owner. Authenticated coverage remains blocked pending the required access and documentation.

### References

| Reference | Purpose | Availability |
| --- | --- | --- |
| https://app.vwo.com/ | Target application URL supplied for planning | Supplied; application behavior has not been verified |
| Product requirements, module inventory, acceptance criteria, and VWO product documentation | Define expected behavior, coverage boundaries, and traceability | Not provided |
| Generic RICE POT QA Template — Test Plan profile | Source structure for this plan | Supplied in the Task 2 folder |
| Internal business/application ownership details | Confirms scope, stakeholders, and approval paths | Partially provided |

## 3. In Scope and Out of Scope

### In scope

- Establish a coverage inventory for every approved VWO module made available to the intended test account.
- Define test strategy, levels, and types based on approved requirements, risks, and access.
- Plan safe, unauthenticated observation of the production entry point only if explicitly authorized by the application owner and within strictly limited, non-state-changing boundaries.
- Capture blockers, dependencies, assumptions, and residual risks that prevent full module coverage.
- Provide a traceability foundation linking requirements, risks, planned tests, actual execution, and defects.

### Out of scope

- Authenticated production testing, because no approved test account or authorization was supplied.
- Creating, editing, deleting, publishing, or otherwise altering production data.
- Repeated or automated credential attempts, load testing, stress testing, penetration testing, or other intrusive production activity.
- Accepting undocumented workflows, business rules, roles, or expected messages as official requirements.
- Reporting tests as executed, passed, or failed solely on the basis of this draft plan.

## 4. Requirements, Risks, and Planned Coverage

No VWO-specific requirements, product documentation, or module inventory were supplied. The coverage entries below are local planning identifiers used to structure the QA baseline until approved requirements and module information are available. These identifiers do not replace official product requirement IDs and must be mapped to approved requirements before execution.

| Coverage ID (local) | Planned coverage | Applicability and current status |
| --- | --- | --- |
| VWO-COV-01 | Module and workflow inventory | Identify every approved module and associated user workflows; blocked until the module inventory and test access are formally provided. |
| VWO-COV-02 | Functional behavior | Validate positive, negative, boundary, and error-handling scenarios for each approved workflow using documented acceptance criteria; blocked until requirements and access are available. |
| VWO-COV-03 | Roles and authorization | Test role-based permissions and restrictions only after roles, permissions, and approved test accounts are documented; blocked. |
| VWO-COV-04 | Integration and data flow | Assess external or internal integrations and data movement only when documented and supported within the approved scope; dependencies and expected results are not yet provided. |
| VWO-COV-05 | Regression | Select regression coverage based on change impact and approved requirements; release/change context is not provided. |
| VWO-COV-06 | Public unauthenticated entry point | If authorized, observe only safe, non-state-changing behavior visible without sign-in; expected behaviors and acceptance criteria are not provided and this is not executed in the current plan. |
| VWO-COV-07 | Nonfunctional qualities | Include compatibility, accessibility, performance, reliability, and security checks only when goals, thresholds, environments, and methods are agreed; no nonfunctional testing is authorized by this draft. |

### Requirement and risk traceability approach

- Each approved requirement must be mapped to one or more planned test scenarios.
- Each identified risk must be linked to the relevant coverage area and associated test objective.
- Any missing requirement or unknown expected outcome must be documented as a blocker before execution begins.
- Defects identified during execution must be traceable back to the requirement, scenario, and test evidence.

No external requirement IDs were supplied; therefore, traceability will only become complete once the approved product requirements and module inventory are received.

## 5. Test Approach, Levels, and Types

### Approach

1. Obtain and review the current module inventory, supported workflows, requirements, acceptance criteria, user roles, and change/release context.
2. Confirm the permitted environment, approved access model, data handling rules, and production restrictions with the application owner and QA stakeholders.
3. Map every approved requirement and identified risk to a planned scenario and confirm any missing expected outcomes before writing executable test cases.
4. Prepare test data using approved, non-sensitive, or synthetic data only; do not use real customer data without explicit authorization.
5. Execute only after entry criteria are satisfied, documenting evidence, actual outcomes, and linked defects.
6. Report coverage, execution status, blockers, and residual risk without implying pass status for unexecuted or unapproved checks.

### Test levels

| Level | Planned use | Current status |
| --- | --- | --- |
| Component/unit | Verify isolated application components where source/build artifacts and suitable interfaces are available | Applicability, tools, and artifacts not provided |
| Integration | Validate documented module and external-system interfaces | Integrations and environment not provided |
| System/end-to-end | Cover end-to-end user workflows across the application | Requirements, module inventory, and approved authenticated access not provided; blocked |
| Acceptance | Validate agreed business acceptance criteria with designated stakeholders | Acceptance criteria not provided; approver method pending |

### Test types

Functional, negative, boundary, regression, role/authorization, integration, compatibility, accessibility, performance, reliability, and security testing may be included where relevant to approved requirements and risk. Specific procedures, thresholds, and expected results are not provided. Intrusive security or performance testing against production is excluded unless separately authorized in an appropriate environment.

## 6. Environment, Tools, Access, and Test Data

| Item | Current information |
| --- | --- |
| Application URL | https://app.vwo.com/ |
| Environment | Production URL only, as supplied |
| Approved non-production environment | Not provided |
| Test credentials/accounts | Not provided; credentials must not be shared in this document |
| Test data | Not provided; approved synthetic or otherwise authorized data is required before authenticated testing |
| Browser and version | Microsoft Edge, latest version; exact version not provided |
| Device and operating system | Laptop and iPad; operating system versions not provided |
| Test management and defect tracking | Jira |
| Automation stack | Selenium and TestNG; versions and language not provided |
| Access permissions and formal production authorization | Not provided; this plan allows only safe public checks if explicitly approved by the application owner |
| Module inventory and configuration | Not provided |

No credentials, customer data, or secrets are included in this document. No execution is authorized merely because the URL is available.

## 7. Entry and Exit Criteria

### Entry criteria

- Approved scope and current module/workflow inventory are documented and reviewed.
- Applicable requirements, acceptance criteria, and expected outcomes are documented and reviewed.
- The application owner has identified the permitted environment and explicitly authorized the planned testing.
- For authenticated testing, approved test accounts, roles, and data are provisioned through the organization’s approved process.
- Required tools, access permissions, supported platforms, and defect/reporting process are confirmed.
- Test scenarios and their requirement/risk traceability are reviewed before execution begins.

For any public unauthenticated check, explicit authorization for the production check and an agreed expected outcome are still required. At present, these criteria have not been confirmed.

### Exit criteria

The quantitative thresholds and business acceptance rules for exit are not provided and require stakeholder definition. Before a test cycle can be declared complete, the report must at minimum identify:

- Which approved requirements and modules were covered, not covered, or blocked.
- The execution status and evidence for each planned test.
- Open defects and unresolved risks using the agreed defect process.
- Any deviations from the approved scope and remaining access/environment limitations.
- The stakeholder disposition and approval decision once the approver and approval method are identified.

No pass/fail decision or release approval is defined by this plan.

## 8. Roles, Responsibilities, Estimates, and Schedule

| Role or planning item | Owner / value |
| --- | --- |
| Business/product owner | Pramod Dutta |
| Application/module owner | Meeti Jha |
| QA/test lead | Ashish J |
| Test execution team | VWO Test team |
| Development/support contacts | Dev1; support1 |
| Security, accessibility, or performance specialist | Pramod Dutta |
| Effort estimate | 80 hours |
| Start/end date | Start: 2 October; end: 12 October |
| Year and milestone breakdown | Not provided |
| Resource availability and execution cadence | Not provided |

The supplied schedule does not include a year or detailed milestones. These details must be confirmed before the plan is treated as a committed delivery schedule.

## 9. Defect Management and Reporting

The defect tracking process, severity/priority definitions, triage ownership, reporting cadence, and escalation route are not provided.

For each observed issue, retain reproducible steps, environment and account role information without disclosing secrets, expected and actual results based on an approved requirement, supporting evidence that contains no sensitive data, and a link to the relevant requirement and test. Assign severity, priority, owner, and status only according to the agreed organizational process. Do not create a defect for an undocumented expectation without confirming the expected behavior.

Test reporting should distinguish passed, failed, blocked, not run, and not applicable outcomes. Reporting format and cadence remain undefined in the current plan.

## 10. Risks, Dependencies, Assumptions, and Open Questions

### Risks

- Without a module inventory, approved scope, and product requirements, full-application coverage cannot be bounded or traced.
- Without approved test access, authenticated workflows, role checks, and most modules cannot be evaluated.
- Production-only access creates a risk of affecting real users or changing live data; only explicitly authorized, safe, non-state-changing checks are permitted.
- Missing expected outcomes prevent reliable pass/fail decisions and increase the likelihood of false positives or false negatives.
- Missing platform versions, scheduler details, automation stack details, and defect workflow information reduce repeatability and execution confidence.

### Dependencies

- Product-approved module/workflow inventory and current requirements.
- Named stakeholders to confirm scope, expected behavior, test authorization, and acceptance.
- Approved test environment, accounts, and roles for authenticated coverage.
- Approved test data, target platforms, tools, and defect/reporting procedures.

### Assumptions

- The supplied URL identifies the intended VWO application entry point; this has not been independently verified.
- “Every available module” refers to modules confirmed in an approved inventory and made available to the authorized test account. This is a scoping assumption, not a claim of known content.
- No testing has been performed to date.

### Open questions

- Which exact modules, workflows, roles, and integrations are in scope?
- What requirements and acceptance criteria define expected behavior for each module?
- Who formally authorizes production observation, and what exact public checks are permitted?
- When will an approved non-production environment and test accounts be available?
- Which operating system versions, Edge version, Selenium/TestNG versions, programming language, defect process, and completion thresholds apply?
- Which year applies to the October 2–12 schedule, what milestones are planned, and what resource availability is confirmed?
- Who owns defect triage, reporting cadence, and escalation?

## 11. Suspension and Resumption Criteria

### Suspend testing when

- Authorization, environment, or scope is unclear or withdrawn.
- A proposed action could change production data, disrupt users, trigger lockouts, or exceed the explicitly approved checks.
- Access, test data, or environment behavior is inconsistent with the approved test setup.
- A high-impact defect or unexpected behavior requires stakeholder triage before safe continuation.
- Required acceptance criteria or expected outcomes are missing for the planned check.

### Resume testing when

- The relevant safety, access, environment, or scope issue is resolved and documented.
- The application owner confirms authorization and any required recovery or reset steps.
- Affected requirements, expected outcomes, test data, and test cases are reviewed and approved.

Formal suspension/resumption owners and notification procedures are not provided in this draft.

## 12. Test Deliverables and Approval

### Deliverables

- Approved module/workflow inventory and requirements-to-test traceability.
- Reviewed test scenarios and test data plan.
- Test execution records and supporting evidence, once approved execution occurs.
- Defect records linked to requirements and tests, if issues are observed.
- Test summary with coverage, outcomes, blockers, residual risks, and approval disposition.

Only this initial plan is being produced at this stage. The remaining deliverables depend on unavailable inputs and approved access and therefore are not represented as completed.

### Approval

| Approver role | Name | Decision / date |
| --- | --- | --- |
| Business/product owner | Pramod Dutta | Pending |
| Application/module owner | Meeti Jha | Pending |
| QA/test lead | Ashish J | Pending |
| Other required approver(s) | Dipak Pardeshi | Pending |

This draft does not authorize production testing. Scope, safety limits, access, acceptance criteria, and required approvals must be formally confirmed before execution begins.

## 13. Summary

This baseline test plan is intentionally conservative and risk-aware. It is designed to establish structure and governance, not to imply functional coverage or testing completion. The main limitation is the lack of approved requirements, test accounts, and module inventory. Until these are provided, testing must remain limited to documented, safe, and explicitly authorized observations only.
