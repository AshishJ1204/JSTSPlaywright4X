# VWO Full-Application QA Baseline Test Plan

## 1. Test Plan ID and Title

**Test Plan ID:** VWO-TP-001 (locally assigned)  
**Title:** VWO Full-Application QA Baseline Test Plan  
**Status:** Draft — pending product requirements, approved test access, and stakeholder review  
**Application:** VWO  
**Target URL:** https://app.vwo.com/

## 2. Objective and References

### Objective

Define a risk-aware QA baseline for the full VWO application, covering every module identified in an approved application/module inventory. The plan is intended to guide future test analysis and execution; it does not report tests as executed.

At present, only the production URL is supplied and no test credentials or product requirements are available. Accordingly, any permitted initial checks must be limited to safe, unauthenticated, non-state-changing observations. Authenticated module testing is blocked until approved test access and the needed requirements are provided.

### References

| Reference | Purpose | Availability |
| --- | --- | --- |
| https://app.vwo.com/ | Target application URL supplied for planning | Supplied; application behavior has not been verified |
| Product requirements, module inventory, acceptance criteria, and VWO product documentation | Define expected behavior and coverage traceability | Not provided |
| Generic RICE POT QA Template — Test Plan profile | Source for the required plan sections and instructions | Supplied in the Task 2 folder |

## 3. In Scope and Out of Scope

### In scope

- Establish a coverage inventory for every VWO module made available to the intended test account, after the modules and requirements are documented.
- Plan functional, integration, regression, and nonfunctional testing only where supported by agreed requirements, risks, and access.
- Plan safe, unauthenticated observation of the production entry point, only if authorized. Such checks must not change data, submit repeated credentials, trigger account lockout, or otherwise disrupt production.
- Record dependencies and blockers that prevent complete module coverage.

### Out of scope

- Authenticated production testing, because no approved test account or authorization was supplied.
- Creating, editing, deleting, publishing, or otherwise changing production data.
- Repeated or automated credential attempts, load/stress testing, penetration testing, or other intrusive production activity.
- Asserting undocumented VWO modules, workflows, roles, business rules, integrations, UI behavior, or expected messages.
- Reporting any test as executed or passed based solely on this plan.

## 4. Requirements and Planned Coverage

No VWO requirements, acceptance criteria, or module inventory were supplied. The coverage themes below are locally assigned planning identifiers, not VWO requirement IDs. Their applicability and detailed test scenarios must be confirmed against approved product documentation before execution.

| Coverage ID (local) | Planned coverage | Applicability and current status |
| --- | --- | --- |
| VWO-COV-01 | Module and workflow inventory | Identify every available module and its documented user workflows; blocked until an approved module inventory and account access are available. |
| VWO-COV-02 | Functional behavior | For each inventoried workflow, derive positive, negative, boundary, and error-handling scenarios from approved acceptance criteria; blocked pending requirements and authenticated access. |
| VWO-COV-03 | Roles and authorization | Validate role-specific access only after roles, permissions, and approved test accounts are documented; blocked. |
| VWO-COV-04 | Integration and data flow | Identify and test applicable integrations and data flows only when they are documented and within the agreed scope; dependencies and expected outcomes are Not provided. |
| VWO-COV-05 | Regression | Select regression coverage from approved requirements and change impact; release/change context is Not provided. |
| VWO-COV-06 | Public unauthenticated entry point | If authorized, observe only safe, non-state-changing behavior available without signing in. Expected behavior and detailed acceptance criteria are Not provided; not executed. |
| VWO-COV-07 | Nonfunctional qualities | Consider compatibility, accessibility, performance, reliability, and security checks only after goals, thresholds, approved environments, and permitted methods are defined; all are Not provided. No nonfunctional testing is authorized by this plan. |

Traceability must link each approved requirement and identified risk to planned tests and, after execution, to results and defects. No external requirement IDs were supplied. The local coverage IDs above are not substitutes for product requirement IDs.

## 5. Test Approach, Levels, and Types

### Approach

1. Obtain and review the current module inventory, supported workflows, requirements, acceptance criteria, user roles, and change/release context.
2. Confirm permitted environments, test accounts, data handling rules, and production restrictions with the application owner.
3. Map requirements and risks to planned scenarios; identify missing expected results before authoring executable cases.
4. Prepare test data using approved, non-sensitive accounts and data. Do not use real customer data unless separately authorized.
5. Execute only after entry conditions are met, recording evidence, actual outcomes, and linked defects.
6. Report coverage, execution status, blockers, and residual risks without converting unexecuted plans into pass results.

### Levels

| Level | Planned use | Current status |
| --- | --- | --- |
| Component/unit | Verify isolated application components where source/build artifacts and suitable test interfaces are available | Applicability, tools, and artifacts Not provided |
| Integration | Verify documented module and external-system interfaces | Integrations and environment Not provided |
| System/end-to-end | Verify documented user workflows across the full application | Requirements, module inventory, and approved authenticated access Not provided; blocked |
| Acceptance | Validate agreed business acceptance criteria with designated stakeholders | Acceptance criteria Not provided; named approvers are listed in Section 12, with approval method pending |

### Types

Functional, negative, boundary, regression, role/authorization, integration, compatibility, accessibility, performance, reliability, and security testing may be selected where relevant to approved requirements and risks. Specific procedures and thresholds are Not provided. Intrusive security or performance testing against production is excluded unless separately authorized for an appropriate environment.

## 6. Environment, Tools, Access, and Test Data

| Item | Current information |
| --- | --- |
| Application URL | https://app.vwo.com/ |
| Environment | Production URL only, as supplied |
| Approved non-production environment | Not provided |
| Test credentials/accounts | Not provided; do not share credentials in this document |
| Test data | Not provided; approved synthetic or otherwise authorized data is required before authenticated testing |
| Browsers and versions | Microsoft Edge, latest version; exact version number Not provided |
| Devices and operating systems | Laptop and iPad; operating systems and versions Not provided |
| Test management, defect tracking, and reporting tools | Jira |
| Automation tools, frameworks, and versions | Selenium and TestNG; versions Not provided; programming language Not provided |
| Access permissions and formal production test authorization | Not provided; the requested plan scope is limited to safe public checks, but separate application-owner authorization is required before performing them |
| Module inventory and configuration | Not provided |

No credentials, customer data, or secrets are included in this plan. No test execution is authorized by the availability of the URL alone.

## 7. Entry and Exit Criteria

### Entry criteria

- Approved scope and current module/workflow inventory are available.
- Applicable requirements, acceptance criteria, and expected outcomes are documented and reviewed.
- The application owner has identified the permitted environment and explicitly authorized the planned testing.
- For authenticated testing, approved test accounts, roles, and data are provisioned through the organization's approved process.
- Required tools, access, supported target platforms, and defect/reporting process are confirmed.
- Test scenarios and their requirement/risk traceability are reviewed before execution.

For any public unauthenticated check, explicit authorization for the production check and an agreed expected outcome are still required. At present, these criteria have not been confirmed.

### Exit criteria

The numeric thresholds and business acceptance rules for exit are **Not provided** and require stakeholder definition. Before a test cycle can be declared complete, the report must at minimum identify:

- Which approved requirements and modules were covered, not covered, or blocked.
- The execution status and evidence for each planned test.
- Open defects and unresolved risks, using the agreed defect process.
- Any deviations from the approved scope and any remaining access or environment limitations.
- The designated stakeholder's disposition and approval, once the approver and approval method are identified.

No pass/fail decision or release approval is defined by this plan.

## 8. Roles, Responsibilities, Estimates, and Schedule

| Role or planning item | Owner / value |
| --- | --- |
| Business/product owner | Pramod Dutta |
| Application/module owner | Meeti Jha |
| QA/test lead | Ashish J |
| Test execution team | VWO Test team |
| Development/support contacts | Dev1; support1 |
| Security, accessibility, or performance specialists (if applicable) | Pramod Dutta |
| Effort estimate | 80 hours |
| Start/end dates and milestones | Start: 2 October; end: 12 October. Year and milestone breakdown Not provided. |
| Resource availability and execution cadence | Not provided |

The supplied dates do not specify a year. Confirm the applicable year and milestone details before using this schedule.

## 9. Defect Management and Reporting

The defect tracking system, severity/priority definitions, triage ownership, reporting cadence, and escalation route are **Not provided**.

For each observed issue, retain reproducible steps, the environment and account role (without secrets), expected and actual results based on an approved requirement, supporting evidence that contains no sensitive data, and a link to the relevant requirement and test. Assign severity, priority, owner, and status only according to the agreed organizational process. Do not create a defect for an undocumented expectation without first confirming the expected behavior.

Test reporting should distinguish passed, failed, blocked, not run, and not applicable outcomes. Reporting format and cadence are Not provided.

## 10. Risks, Dependencies, Assumptions, and Open Questions

### Risks

- Without a module inventory or requirements, full-application coverage cannot be bounded or traced.
- Without approved test access, authenticated workflows, roles, and most application modules cannot be evaluated.
- Production-only access increases the risk of disrupting real users or changing live data; only explicitly authorized, safe, non-state-changing checks are eligible.
- Missing expected outcomes prevent reliable pass/fail decisions.
- Missing operating-system versions, exact browser version, automation versions/language, defect workflow, milestone breakdown, schedule year, and resource availability prevent a fully reproducible execution plan. The supplied 80-hour estimate and October dates have not been validated.

### Dependencies

- Product-approved module/workflow inventory and current requirements.
- Named stakeholders to confirm scope, expected behavior, test authorization, and acceptance.
- Approved test environment and accounts for authenticated coverage.
- Approved test data, target platforms, test tools, and defect/reporting process.

### Assumptions

- The supplied URL identifies the intended VWO application entry point; this has not been independently verified.
- “Every available module” means all modules confirmed in an approved inventory and made available to the authorized test account. This is a scope interpretation, not a claim that the modules are known.
- No testing has been performed.

### Open questions

- Which exact modules, workflows, roles, and integrations are available and in scope?
- What requirements and acceptance criteria define expected behavior for each module?
- Who formally authorizes production observation and what exact public checks are permitted?
- When will an approved non-production environment and test accounts be available?
- Which operating-system versions, exact Edge version, Selenium/TestNG versions, programming language, defect process, and completion thresholds apply?
- Which year applies to the October 2–12 schedule, what milestones are planned, and what resource availability is confirmed?
- Who owns defect triage, reporting cadence, and escalation?

## 11. Suspension and Resumption Criteria

### Suspend testing when

- Authorization, environment, or scope is unclear or withdrawn.
- A proposed action could alter production data, disrupt users, cause account lockout, or exceed the explicitly approved checks.
- Access, test data, or environment behavior is inconsistent with the approved test setup.
- A high-impact defect or unexpected behavior requires stakeholder triage before safe continuation.
- Required acceptance criteria or expected outcomes are missing for the planned check.

### Resume testing when

- The relevant safety, access, environment, or scope issue is resolved and documented.
- The application owner confirms authorization and any required recovery or data-reset steps.
- Affected requirements, expected outcomes, test data, and test cases are reviewed and approved.

Formal suspension/resumption owners and notification procedures are Not provided.

## 12. Test Deliverables and Approval

### Deliverables

- Approved module/workflow inventory and requirements-to-test traceability.
- Reviewed test scenarios and test data plan.
- Test execution records and supporting evidence, once authorized execution occurs.
- Defect records linked to requirements and tests, if issues are observed.
- Test summary with coverage, outcomes, blockers, residual risks, and approval disposition.

Only this plan is being produced now. The other deliverables depend on the missing inputs and approved access; none are represented as completed.

### Approval

| Approver role | Name | Decision / date |
| --- | --- | --- |
| Business/product owner | Pramod Dutta | Pending |
| Application/module owner | Meeti Jha | Pending |
| QA/test lead | Ashish J | Pending |
| Other required approver(s) | Dipak Pardeshi | Pending |

This draft does not authorize production testing. Scope, safety limits, access, acceptance criteria, and required approvals must be confirmed before execution.
