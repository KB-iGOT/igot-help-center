import { Building2, Users, Calendar, BarChart3, FileText, UserX, ArrowRightLeft, LayoutDashboard, Map, BookOpen, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface StepDetail {
  title: string;
  description: string;
  screenshot?: string;
}

export interface Feature {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  icon: LucideIcon;
  steps: StepDetail[];
  category: string;
  contentType: "video" | "knowledge" | "howto";
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  iconBg: string;
  features: Feature[];
  tab: "mdo" | "learner" | "cbp";
}

export const categories: Category[] = [
  {
    id: "organisation",
    title: "Organisation Settings",
    description: "Configure your MDO's designations, competencies, and organisational structure.",
    icon: Building2,
    colorClass: "text-org",
    bgClass: "bg-org/10",
    iconBg: "bg-org/15",
    tab: "mdo",
    features: [
      {
        id: "designation-master",
        title: "Create / Update Designation Master",
        titleHi: "पदनाम मास्टर बनाएं / अपडेट करें",
        description: "Import designations from the iGOT master list, bulk upload via CSV, add custom designations, or remove existing ones from your MDO's designation master.",
        icon: FileText,
        category: "organisation",
        contentType: "howto",
        steps: [
          { title: "Login to MDO Portal", description: "Go to mdo.igotkarmayogi.gov.in and click 'Click here to Login'. Use your MDO Leader / Admin credentials to log in.", screenshot: "/images/designation-master/step-1.jpg" },
          { title: "Navigate to Organisation Setting → Designations", description: "Scroll down on the left menu and click on 'Organisation Setting', then click on 'Designations' to view the designation master.", screenshot: "/images/designation-master/step-2.jpg" },
          { title: "View & Manage Designation Master", description: "Your current designation master is listed. You can import from iGOT master, bulk upload via CSV, or remove designations using the '…' menu.", screenshot: "/images/designation-master/step-3.jpg" },
        ],
      },
      {
        id: "competency-mapping",
        title: "Map Role Competency",
        titleHi: "भूमिका योग्यता मैप करें",
        description: "Map competencies and competency sub-themes to specific designations within your MDO to define skill requirements for each role.",
        icon: Map,
        category: "organisation",
        contentType: "howto",
        steps: [
          { title: "Navigate to Competency Role Mapping", description: "Under 'Organisation Setting', click on 'Competency Role Mapping' to access the mapping interface.", screenshot: "/images/competency-mapping/step-1.jpg" },
          { title: "Select Designation & Add Competencies", description: "Select a designation from your MDO's master list, then search and add relevant competencies from the iGOT competency framework.", screenshot: "/images/competency-mapping/step-2.jpg" },
          { title: "Map Competency Sub-Themes", description: "For each competency, select the relevant sub-themes to define granular skill requirements for the designation.", screenshot: "/images/competency-mapping/step-3.jpg" },
        ],
      },
    ],
  },
  {
    id: "user-management",
    title: "User Management",
    description: "Manage users across your organisation — verify, transfer, or flag users.",
    icon: Users,
    colorClass: "text-user",
    bgClass: "bg-user/10",
    iconBg: "bg-user/15",
    tab: "mdo",
    features: [
      {
        id: "not-my-user",
        title: "Mark 'Not My User'",
        titleHi: "'Not My User' चिह्नित करें",
        description: "Identify and flag users who don't belong to your organisation by navigating to their profile and marking them.",
        icon: UserX,
        category: "user-management",
        contentType: "howto",
        steps: [
          { title: "Go to Users → All Users", description: "On the left pane, click 'Users' then 'All Users'. You'll see verified, non-verified, and flagged user tabs.", screenshot: "/images/not-my-user/step-1.jpg" },
          { title: "Edit User Profile", description: "Click the 'Edit' button next to the user you want to flag to expand their profile details.", screenshot: "/images/not-my-user/step-2.jpg" },
          { title: "Mark as 'Not My User'", description: "Scroll down in the user's profile and click the 'Not My User' button to flag them. Confirm the action.", screenshot: "/images/not-my-user/step-3.jpg" },
        ],
      },
      {
        id: "transfer-users",
        title: "Transfer Users",
        titleHi: "उपयोगकर्ताओं को स्थानांतरित करें",
        description: "Transfer users to a new organisation. Users initiate the request, and MDO admins approve the transfer.",
        icon: ArrowRightLeft,
        category: "user-management",
        contentType: "knowledge",
        steps: [
          { title: "User Logs In & Views Profile", description: "The user logs into igotkarmayogi.gov.in with their learner credentials and clicks 'View Profile'.", screenshot: "/images/transfer-users/step-1.jpg" },
          { title: "User Initiates Transfer Request", description: "In the profile page, the user navigates to the transfer section, searches for the new organisation, and submits a transfer request.", screenshot: "/images/transfer-users/step-2.jpg" },
          { title: "MDO Admin Approves Transfer", description: "The MDO admin reviews the incoming transfer request in the portal and approves or rejects it.", screenshot: "/images/transfer-users/step-3.jpg" },
        ],
      },
    ],
  },
  {
    id: "events",
    title: "Events",
    description: "Create, manage, and conduct pre-recorded learning events.",
    icon: Calendar,
    colorClass: "text-event",
    bgClass: "bg-event/10",
    iconBg: "bg-event/15",
    tab: "mdo",
    features: [
      {
        id: "create-events",
        title: "Create & Conduct Events",
        titleHi: "इवेंट बनाएं और संचालित करें",
        description: "Create pre-recorded events on the iGOT portal with event details, upload recordings, set competencies, and publish for users.",
        icon: Calendar,
        category: "events",
        contentType: "video",
        steps: [
          { title: "Navigate to Events Menu", description: "Scroll down on the left-side menu and click on 'Events'. You'll see tabs for Upcoming, Draft, Pending Approval, Past, Cancelled, and Rejected events.", screenshot: "/images/create-events/step-1.jpg" },
          { title: "Create New Event", description: "Click 'Create New Event' button. Fill in the event name, select 'Recorded Event' type, and upload the event image (PNG/JPG, max 500KB).", screenshot: "/images/create-events/step-2.jpg" },
          { title: "Configure & Publish", description: "Add event description, speakers, competency tags, and configure registration settings. Review and publish the event.", screenshot: "/images/create-events/step-3.jpg" },
        ],
      },
    ],
  },
  {
    id: "analytics",
    title: "Content & Analytics",
    description: "Leverage dashboards for KPIs, content metrics, and completion analytics.",
    icon: BarChart3,
    colorClass: "text-analytics",
    bgClass: "bg-analytics/10",
    iconBg: "bg-analytics/15",
    tab: "mdo",
    features: [
      {
        id: "cbp-dashboard",
        title: "CBP Content Dashboard",
        titleHi: "CBP कंटेंट डैशबोर्ड",
        description: "Access the Content Dashboard on the CBP portal to view KPIs like content count, ratings, enrolments, completions, and language distribution.",
        icon: LayoutDashboard,
        category: "analytics",
        contentType: "knowledge",
        steps: [
          { title: "Login to CBP Portal", description: "Go to cbp.igotkarmayogi.gov.in and login with your CBP Admin credentials.", screenshot: "/images/cbp-dashboard/step-1.jpg" },
          { title: "Access Content Dashboard", description: "Click the dashboard icon at the top right corner. View KPIs including content count, average ratings, total enrolments, completions, and language distribution.", screenshot: "/images/cbp-dashboard/step-2.jpg" },
        ],
      },
    ],
  },
  {
    id: "learner-profile",
    title: "Profile & Learning",
    description: "Manage your learner profile, explore courses, and track your learning journey.",
    icon: GraduationCap,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    iconBg: "bg-primary/15",
    tab: "learner",
    features: [
      {
        id: "learner-explore",
        title: "Explore & Enrol in Courses",
        titleHi: "कोर्स खोजें और नामांकन करें",
        description: "Browse the iGOT course catalogue, search by competency or topic, and enrol in courses relevant to your role.",
        icon: BookOpen,
        category: "learner-profile",
        contentType: "video",
        steps: [
          { title: "Login to iGOT Portal", description: "Go to igotkarmayogi.gov.in and login with your learner credentials." },
          { title: "Browse Course Catalogue", description: "Use the 'Explore' section to search courses by competency, topic, or provider. Click on a course to view details." },
          { title: "Enrol & Start Learning", description: "Click 'Enrol' on the course page. Access your enrolled courses from 'My Learning' in your profile." },
        ],
      },
      {
        id: "learner-transfer",
        title: "Request Organisation Transfer",
        titleHi: "संगठन स्थानांतरण अनुरोध",
        description: "If you've been transferred to a new department, request an organisation transfer through your profile.",
        icon: ArrowRightLeft,
        category: "learner-profile",
        contentType: "howto",
        steps: [
          { title: "Go to Your Profile", description: "Login and click 'View Profile' from the top-right menu." },
          { title: "Initiate Transfer", description: "Navigate to the transfer section, search for your new organisation, and submit the transfer request." },
          { title: "Await Approval", description: "The MDO admin of the new organisation will review and approve your request." },
        ],
      },
    ],
  },
];
