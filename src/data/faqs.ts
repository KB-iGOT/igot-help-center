export const faqCategories = [
  { id: "platform-overview", label: "Platform Overview and Access", icon: "globe" },
  { id: "registration-login", label: "Registration and Login (Web + Mobile)", icon: "login" },
  { id: "profile-org-transfers", label: "Profile, Organisation and Transfers", icon: "user" },
  { id: "learning-certificates", label: "Learning and Certificates (Web, Android, iOS)", icon: "award" },
  { id: "apar-training", label: "APAR Training Plans and Comprehensive Assessment (CA)", icon: "clipboard" },
  { id: "sparrow-apar", label: "SPARROW APAR Integration", icon: "link" },
  { id: "mobile-issues", label: "Mobile-only Issues (Android and iOS)", icon: "smartphone" },
  { id: "mdo-admin-faqs", label: "MDO / CCA Admin Advanced FAQs", icon: "shield" },
  { id: "cbp-authoring", label: "CBP / Content Authoring FAQs", icon: "pencil" },
  { id: "support-escalation", label: "Support and Escalation (including CA–APAR war-room)", icon: "lifebuoy" },
  { id: "troubleshooting", label: "Quick Troubleshooting Tables", icon: "wrench" },
];

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  tab: "mdo" | "learner" | "cbp";
  faqCategory: string;
}

export const faqData: FAQ[] = [
  // ──────────────────────────────────────────────
  // 1. Platform Overview and Access
  // ──────────────────────────────────────────────
  {
    id: "platform-1-1",
    question: "1.1 What is iGOT Karmayogi?",
    answer: "iGOT Karmayogi (Karmayogi Bharat) is the Government of India's digital platform for competency‑driven capacity building of civil servants. It offers courses, programs, events and assessments aligned to Mission Karmayogi and the Karmayogi Competency Model.",
    tab: "learner",
    faqCategory: "platform-overview",
  },
  {
    id: "platform-1-2",
    question: "1.2 What are the official URLs and apps?",
    answer: "• Web learner portal: https://portal.igotkarmayogi.gov.in or https://igotkarmayogi.gov.in.\n• Android app: \"iGOT Karmayogi\" on Google Play, publisher Karmayogi Bharat.\n• iOS app: \"iGOT Karmayogi\" on Apple App Store, provider Karmayogi Bharat.\n• MDO portal: https://mdo.igotkarmayogi.gov.in – for MDO / CCA administration.\n• CBP / Content portal: https://cbp.igotkarmayogi.gov.in – for content creators, reviewers and publishers.\n\nIf you are unsure whether a link is official, check that the host ends with igotkarmayogi.gov.in or appears in your departmental circulars.",
    tab: "learner",
    faqCategory: "platform-overview",
  },
  {
    id: "platform-1-3",
    question: "1.3 Which devices and browsers are supported?",
    answer: "• Desktop / laptop: Latest Chrome, Edge or Firefox are recommended for full functionality, including admin and authoring features.\n• Android phones/tablets: Official Android app from Google Play; some complex admin pages may still require a desktop browser.\n• iPhone / iPad: Official iOS app (requires a recent iOS / iPadOS version); advanced admin functions remain web‑only.",
    tab: "learner",
    faqCategory: "platform-overview",
  },

  // ──────────────────────────────────────────────
  // 2. Registration and Login (Web + Mobile)
  // ──────────────────────────────────────────────
  {
    id: "reg-2-1",
    question: "2.1 Who can register on iGOT?",
    answer: "• Central, State and UT government officials, including attached and subordinate offices, as per departmental instructions.\n• Many officials are bulk‑onboarded by MDO admins; others self‑register using official government email IDs.",
    tab: "learner",
    faqCategory: "registration-login",
  },
  {
    id: "reg-2-2",
    question: "2.2 How do I register as a new user (web or mobile)?",
    answer: "1. Open the web portal or mobile app and choose Register / Sign Up / Register here.\n2. Enter required details such as name, official email, mobile number, organisation (MDO), group and designation.\n3. Verify both email and mobile via OTPs. Registration is complete only after OTP verification.\n\nIf you exit before verifying OTPs, your details may be partially saved and you may later see \"invalid user\" or \"no OTP received\" errors.",
    tab: "learner",
    faqCategory: "registration-login",
  },
  {
    id: "reg-2-3",
    question: "2.3 What are the ways to log in?",
    answer: "• Password login using email and password on web or app.\n• OTP login using \"Login with OTP\" and entering registered email or mobile.\n• Parichay login, where enabled, from the web portal.",
    tab: "learner",
    faqCategory: "registration-login",
  },
  {
    id: "reg-2-4",
    question: "2.4 OTP is not received or \"Invalid user details\" appears on the app.",
    answer: "Try these in order:\n1. Confirm that you completed registration by using Forgot Password on the web portal. If your email is not recognised, register again properly.\n2. If you can log in on web, open your profile and confirm that email and mobile are correct and verified.\n3. Wait at least 3 minutes between OTP requests; check spam/junk folders for email OTP and ensure SMS messages are not blocked.\n4. If the problem persists, your email or mobile may have been entered differently at onboarding. Contact your MDO admin to check and correct your record.",
    tab: "learner",
    faqCategory: "registration-login",
  },
  {
    id: "reg-2-5",
    question: "2.5 The app switches back to login when I open SMS to read OTP.",
    answer: "On some phones, the app reloads when you switch to the SMS app. You can:\n• Use email OTP and read it from the notification shade without fully switching apps.\n• If available, enable auto‑reading of OTP by the app.\n• Set a password via the web portal and then log in on the app using password instead of OTP; enable \"keep me signed in\" where available.",
    tab: "learner",
    faqCategory: "registration-login",
  },
  {
    id: "reg-2-6",
    question: "2.6 I used my personal email during registration. Can I change to official email?",
    answer: "Yes. Edit your email under Profile → Edit Profile. This change usually requires MDO admin approval under Users → Approvals → Profile Verifications. Avoid creating a second account with your official email; that leads to duplicate profiles and split progress.",
    tab: "learner",
    faqCategory: "registration-login",
  },

  // ──────────────────────────────────────────────
  // 3. Profile, Organisation and Transfers
  // ──────────────────────────────────────────────
  {
    id: "profile-3-1",
    question: "3.1 Why is accurate profile data critical, especially for APAR/CA?",
    answer: "APAR training plans and Comprehensive Assessments are assigned based on fields such as organisation, group, service, cadre, batch, designation and (for AIS) a central deputation flag. If these values are wrong, APAR courses and assessments may not appear, or the wrong plan may be assigned.",
    tab: "learner",
    faqCategory: "profile-org-transfers",
  },
  {
    id: "profile-3-2",
    question: "3.2 How do I update my profile details?",
    answer: "• On web or app, open Profile / My Profile → Edit Profile.\n• Update allowed fields (for example contact details) directly.\n• Changes to primary fields (organisation, group, designation, service, cadre, batch) usually generate a verification request, which your MDO admin must approve.",
    tab: "learner",
    faqCategory: "profile-org-transfers",
  },
  {
    id: "profile-3-3",
    question: "3.3 How do I request a transfer to another organisation or CCA?",
    answer: "1. Go to Profile and select Make Transfer Request from the menu.\n2. Choose your target organisation, group and designation and submit the request.\n3. Withdraw any earlier pending transfer requests before submitting a new one.\n4. MDO admins of the target organisation review the request under Users → Approvals → Transfers, then approve or reject and verify primary fields under Profile Verifications.",
    tab: "learner",
    faqCategory: "profile-org-transfers",
  },
  {
    id: "profile-3-4",
    question: "3.4 I completed transfer but APAR courses or CA still show for the old organisation.",
    answer: "• Check whether new organisation and designation are fully approved, not just requested.\n• Log out and log back in on both web and app to refresh assignments.\n• If old and new organisations have different APAR plans, you may see a changed set of courses and assessments. Check with your new MDO or CCA on what is applicable for you.",
    tab: "learner",
    faqCategory: "profile-org-transfers",
  },

  // ──────────────────────────────────────────────
  // 4. Learning and Certificates (Web, Android, iOS)
  // ──────────────────────────────────────────────
  {
    id: "learning-4-1",
    question: "4.1 Where do I find my courses?",
    answer: "• On web, go to My iGOT on the homepage. You will see tabs such as APAR, Upcoming, Overdue, Completed and All.\n• On mobile apps, the home or dashboard area shows sections like In Progress, Completed and recommendations.",
    tab: "learner",
    faqCategory: "learning-certificates",
  },
  {
    id: "learning-4-2",
    question: "4.2 Course does not start or video does not load on app.",
    answer: "• Ensure you have a stable network connection; prefer Wi‑Fi when possible.\n• Try rotating the device between portrait and landscape if buttons or controls appear off‑screen.\n• If a particular module consistently fails on the app, open the same course on the web portal and continue there; progress will stay in sync.",
    tab: "learner",
    faqCategory: "learning-certificates",
  },
  {
    id: "learning-4-3",
    question: "4.3 Course is stuck at 90–99 percent completion.",
    answer: "• Make sure every module, including feedback/survey, has been opened and completed and any Submit / Mark as complete buttons are clicked.\n• On the app, if a video stops just before the end, replay the last part without skipping, then exit to the course outline and re‑enter.\n• If progress is still stuck, try the last module on the web portal. If it remains stuck there too, capture screenshots and raise a request with the course name and approximate time.",
    tab: "learner",
    faqCategory: "learning-certificates",
  },
  {
    id: "learning-4-4",
    question: "4.4 Certificate not generated even after completion.",
    answer: "Check the following:\n1. All mandatory modules and assessments have been completed and you have met any minimum pass scores.\n2. You have allowed some time for background processing and then logged out and logged back in.\n3. You have checked the course from both web and app.\n\nIf the certificate is still missing, especially for APAR‑linked courses, share screenshots of the completed course outline and completion date when seeking help.",
    tab: "learner",
    faqCategory: "learning-certificates",
  },
  {
    id: "learning-4-5",
    question: "4.5 My name or designation is wrong on the certificate.",
    answer: "• First, correct your profile (name, designation) on the portal; primary fields may need MDO approval.\n• For critical certificates (APAR, promotion, examinations), request a corrected certificate through your department or support, attaching the incorrect certificate and your updated profile screenshot.",
    tab: "learner",
    faqCategory: "learning-certificates",
  },

  // ──────────────────────────────────────────────
  // 5. APAR Training Plans and Comprehensive Assessment (CA)
  // ──────────────────────────────────────────────
  {
    id: "apar-5-1",
    question: "5.1 What is an APAR Training Plan?",
    answer: "An APAR Training Plan is a curated set of courses tagged for Annual Performance Appraisal Report purposes. These plans are created by MDOs or Cadre Controlling Authorities and assigned to specific services, cadres, batches, organisations, groups and designations. On the learner portal they appear in the APAR tab on the My iGOT section, often with end dates and Overdue status after the deadline.",
    tab: "learner",
    faqCategory: "apar-training",
  },
  {
    id: "apar-5-2",
    question: "5.2 What is a Comprehensive Assessment (CA)?",
    answer: "A Comprehensive Assessment Program evaluates competency attainment across one or more APAR courses using structured question banks with defined difficulty levels and pass/fail rules. For many cadres and grades, successful completion of both the APAR Training Plan and the relevant CA is required to meet APAR training requirements.",
    tab: "learner",
    faqCategory: "apar-training",
  },
  {
    id: "apar-5-3",
    question: "5.3 How do I complete APAR Training Plan and CA?",
    answer: "1. In My iGOT, open the APAR tab and complete all listed APAR‑tagged courses, ensuring all modules and assessments are done.\n2. From the homepage, locate the CA card under Scheduled Assessments and click or tap Start Program.\n3. Attempt all sections of the CA carefully and avoid closing the browser or app in the middle.\n4. After completion, ensure the CA shows as Completed and, if configured, that any associated certificate appears under your certificates.",
    tab: "learner",
    faqCategory: "apar-training",
  },
  {
    id: "apar-5-4",
    question: "5.4 CA is not visible even after APAR courses are completed.",
    answer: "• Confirm that the CA window (start and end dates) is currently open.\n• Verify that your profile fields (organisation, service, cadre, batch, designation, central deputation for AIS) match the access conditions that your MDO/CCA has shared.\n• If you transferred recently, check whether the new organisation or CCA has mapped you to a different APAR plan and CA.\n• If all of the above seem correct, contact your MDO/CCA or support with screenshots of your APAR tab and profile.",
    tab: "learner",
    faqCategory: "apar-training",
  },
  {
    id: "apar-5-5",
    question: "5.5 CA crashed or app/browser closed in the middle.",
    answer: "• Whenever possible, attempt CA on a desktop or laptop with a stable connection and avoid switching tabs or apps while the assessment is running.\n• If the app or browser crashes, open CA again on the web to check whether an attempt was counted and whether another attempt is available.\n• If attempts were exhausted due to clear technical issues, escalate through your MDO or CCA with timestamps and screenshots so that content and platform teams can review.",
    tab: "learner",
    faqCategory: "apar-training",
  },
  {
    id: "apar-5-6",
    question: "5.6 I completed APAR courses but they do not carry the APAR flag.",
    answer: "Some departments host both general and APAR versions of similar courses. Only the versions included in the APAR Training Plan, usually marked with an APAR indicator in My iGOT, count towards APAR requirements. Check that you are consuming courses from the APAR list rather than unrelated search results. If you completed the wrong versions, seek guidance from your MDO/CCA.",
    tab: "learner",
    faqCategory: "apar-training",
  },

  // ──────────────────────────────────────────────
  // 6. SPARROW APAR Integration
  // ──────────────────────────────────────────────
  {
    id: "sparrow-6-1",
    question: "6.1 What data flows from iGOT to SPARROW?",
    answer: "For integrated cadres and services, iGOT sends details such as completion status of APAR Training Plan courses, learning hours and CA results to SPARROW so that they can be reflected under training‑related sections of APAR. The exact fields and timelines are notified in departmental guidelines.",
    tab: "learner",
    faqCategory: "sparrow-apar",
  },
  {
    id: "sparrow-6-2",
    question: "6.2 APAR training details are not visible in SPARROW.",
    answer: "Use this checklist:\n1. Confirm that all required APAR courses and CA programs are completed and visible as Completed on iGOT.\n2. Ensure that profile identifiers (SPARROW email, employee ID, service, cadre, batch and central deputation flag where applicable) in iGOT match SPARROW records.\n3. Verify that you are actually covered by a published APAR plan for that cycle.\n4. Check departmental communication for the last or upcoming data sync window.\n5. If everything appears correct and the deadline is near, escalate through your MDO/CCA and nodal officers with iGOT completion and profile screenshots and the relevant SPARROW screen.",
    tab: "learner",
    faqCategory: "sparrow-apar",
  },

  // ──────────────────────────────────────────────
  // 7. Mobile-only Issues (Android and iOS)
  // ──────────────────────────────────────────────
  {
    id: "mobile-7-1",
    question: "7.1 The app UI is broken (buttons off‑screen, cannot tap Next/Submit).",
    answer: "• Try rotating between portrait and landscape; in some layouts, controls are only properly visible in one orientation.\n• Temporarily disable very high display zoom or magnification settings that might push buttons off‑screen.\n• If controls remain unreachable, complete that module on the web portal and report your device model, OS version and app version so the issue can be reproduced.",
    tab: "learner",
    faqCategory: "mobile-issues",
  },
  {
    id: "mobile-7-2",
    question: "7.2 App keeps loading or shows blank screen.",
    answer: "• Test your connection on another site or app; if possible, switch to Wi‑Fi.\n• Close and reopen the iGOT app; on Android, clear app cache and ensure battery saver is not blocking background data.\n• If the issue only affects one course, test that course on web to see whether it is a content problem.",
    tab: "learner",
    faqCategory: "mobile-issues",
  },
  {
    id: "mobile-7-3",
    question: "7.3 Accessibility challenges for visually impaired users.",
    answer: "• Screen‑reader support and keyboard navigation on mobile apps may not yet cover all screens and controls.\n• For critical tasks such as registration, APAR courses, CA and downloading certificates, visually impaired users may find the desktop web portal more usable in combination with standard assistive technologies.",
    tab: "learner",
    faqCategory: "mobile-issues",
  },
  {
    id: "mobile-7-4",
    question: "7.4 Battery and data usage concerns.",
    answer: "• Long streaming videos consume significant data and battery; whenever possible, use a reliable Wi‑Fi connection.\n• Where bandwidth is limited, prioritise completing heavy video modules on desktop or at times of better connectivity, and use mobile for shorter readings and quizzes.",
    tab: "learner",
    faqCategory: "mobile-issues",
  },

  // ──────────────────────────────────────────────
  // 8. MDO / CCA Admin Advanced FAQs
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 9. CBP / Content Authoring FAQs
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 10. Support and Escalation
  // ──────────────────────────────────────────────
  {
    id: "support-10-1",
    question: "10.1 What should I include when raising a support request?",
    answer: "Provide at minimum:\n• Full name, organisation, group, designation and, for AIS, service/cadre/batch and deputation status.\n• Whether you are using web, Android or iOS, with browser or app version and device model.\n• Clear description of the problem type (login, profile, APAR courses, CA, certificate, SPARROW, other) and exact error message text where available.\n• Screenshots for the relevant screens: login page, My iGOT APAR tab, course/CA status, profile, and SPARROW APAR view if applicable.\n\nAvoid creating new accounts, changing email/mobile multiple times or reinstalling the app repeatedly while a ticket is being investigated.",
    tab: "learner",
    faqCategory: "support-escalation",
  },
  {
    id: "support-10-3",
    question: "10.3 When should I escalate beyond my MDO or department?",
    answer: "Escalate through prescribed channels when:\n• APAR deadlines are close and APAR courses or CA are still not visible despite apparently correct profile details.\n• APAR completion is still not visible in SPARROW well after the latest announced sync window, even though your iGOT completion is correct.\n• You observe large‑scale platform issues affecting many officials simultaneously, such as widespread login failures or recurring app crashes.\n\nIn these cases, departmental nodal officers or CCA focal points should bundle cases and raise them with the central Mission Karmayogi / SPV teams, along with evidence and impact details.",
    tab: "learner",
    faqCategory: "support-escalation",
  },

  // ──────────────────────────────────────────────
  // 11. Quick Troubleshooting Tables
  // ──────────────────────────────────────────────
  {
    id: "trouble-11-1",
    question: "OTP not received (web/app) — what should I do?",
    answer: "Likely cause: Incomplete registration or wrong contact details.\n\nQuick checks:\n• Use Forgot Password on web to verify your email is recognised.\n• Verify email/mobile in your profile.\n• Wait at least 3 minutes between OTP requests.\n\nNext contact: MDO admin to confirm your record; then support if still failing.",
    tab: "learner",
    faqCategory: "troubleshooting",
  },
  {
    id: "trouble-11-2",
    question: "\"Invalid user details\" on app — what does it mean?",
    answer: "Likely cause: User not registered or using a different email/mobile.\n\nQuick checks:\n• Try web login to verify your account exists.\n• Check which email/mobile was used during onboarding.\n\nNext contact: MDO admin for lookup and correction.",
    tab: "learner",
    faqCategory: "troubleshooting",
  },
  {
    id: "trouble-11-3",
    question: "App returns to login when reading OTP — how to fix?",
    answer: "Likely cause: OS kills the app when switching to the SMS app.\n\nQuick checks:\n• Use email OTP instead.\n• Or set a password and use password login.\n\nNext contact: Support if the behaviour persists across app updates.",
    tab: "learner",
    faqCategory: "troubleshooting",
  },
  {
    id: "trouble-11-4",
    question: "Course stuck at 90–99 percent — what to do?",
    answer: "Likely cause: Last module or feedback not fully completed.\n\nQuick checks:\n• Re‑open last module, play to the end, submit feedback and refresh on web.\n\nNext contact: Support with screenshots if still stuck.",
    tab: "learner",
    faqCategory: "troubleshooting",
  },
  {
    id: "trouble-11-5",
    question: "Certificate not generated — troubleshooting steps.",
    answer: "Likely cause: Background delay or unmet completion rule.\n\nQuick checks:\n• Confirm all modules and quizzes are passed.\n• Re‑login after some time.\n\nNext contact: MDO or content team if APAR‑critical; then support with course details.",
    tab: "learner",
    faqCategory: "troubleshooting",
  },
  {
    id: "trouble-11-6",
    question: "Wrong name or designation on certificate — how to correct?",
    answer: "Likely cause: Outdated profile at time of generation.\n\nQuick checks:\n• Update profile and seek MDO verification.\n• Request corrected certificate only for essential use cases.\n\nNext contact: MDO admin, then support with old and corrected details.",
    tab: "learner",
    faqCategory: "troubleshooting",
  },
  {
    id: "trouble-11-7",
    question: "APAR tab is empty — why?",
    answer: "Likely cause: No APAR plan assigned or profile dimensions mismatch.\n\nQuick checks:\n• Confirm organisation/service/cadre/batch/designation in your profile.\n• Check if any APAR plan is announced for you.\n\nNext contact: MDO or CCA admin to review training plan access control.",
    tab: "learner",
    faqCategory: "troubleshooting",
  },
  {
    id: "trouble-11-8",
    question: "CA not visible — troubleshooting steps.",
    answer: "Likely cause: CA window not open or access filters not met.\n\nQuick checks:\n• Check Scheduled Assessments, plan dates and profile details.\n\nNext contact: MDO or CCA, then support if mapping appears correct.",
    tab: "learner",
    faqCategory: "troubleshooting",
  },
  {
    id: "trouble-11-9",
    question: "APAR completion not visible in SPARROW — what to check?",
    answer: "Likely cause: Identifier mismatch between iGOT and SPARROW, or sync pending.\n\nQuick checks:\n• Verify iGOT completion status.\n• Check profile identifiers match SPARROW records.\n• Check sync timelines.\n\nNext contact: MDO/CCA and central teams if near cut‑off.",
    tab: "learner",
    faqCategory: "troubleshooting",
  },
];
