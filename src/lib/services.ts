import {
  Cloud,
  ChartNoAxesCombined,
  LayoutGrid,
  Cpu,
  LifeBuoy,
  Laptop,
  PackageCheck,
  CodeXml,
  Globe,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  summary: string;
  hero: { eyebrow: string; title: string; intro: string };
  overview: string[];
  challenges: string[];
  capabilities: { title: string; text: string }[];
  benefits: string[];
  technologies: string[];
  approach: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
  seoKeywords: string[];
};

export const services: Service[] = [
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    shortName: "Cloud",
    icon: Cloud,
    summary:
      "Modernise your IT environment with scalable, secure, and flexible cloud solutions. We help businesses adopt cloud technologies that improve accessibility, collaboration, resilience, and operational efficiency.",
    hero: {
      eyebrow: "Cloud Solutions",
      title: "Move to the cloud with a plan, not a leap of faith.",
      intro:
        "From first steps to fully cloud-based operations, we help you choose, migrate to and run cloud services that fit your business, your budget and your security requirements.",
    },
    overview: [
      "Cloud technology lets your team work from anywhere, scale resources up or down as demand changes, and protect critical data without investing in more on-premises hardware.",
      "Make IT Work assesses where you are today, recommends the right mix of cloud services, and manages the move so that day-to-day operations keep running. Through the Microsoft Cloud Solution Provider (CSP) programme we can also supply and manage your Microsoft cloud subscriptions.",
    ],
    challenges: [
      "Ageing on-premises servers that are expensive to maintain or replace",
      "Files and systems that staff cannot reach securely when working remotely",
      "No dependable backup or recovery plan if hardware fails or data is lost",
      "Uncertainty about which workloads should move to the cloud, and how",
      "Concerns about data security, access control and compliance",
    ],
    capabilities: [
      { title: "Cloud adoption", text: "A readiness assessment and roadmap that sets out which workloads to move, in what order, and why." },
      { title: "Cloud infrastructure", text: "Design and configuration of cloud servers, networking and identity for reliable, right-sized environments." },
      { title: "Cloud migration", text: "Planned migration of files, email, applications and servers with minimal disruption to users." },
      { title: "Cloud storage", text: "Secure, structured file storage and sharing that replaces scattered local drives and file servers." },
      { title: "Cloud backup", text: "Automated off-site backup and tested recovery procedures for critical systems and data." },
      { title: "Cloud productivity", text: "Collaboration, email and document tools delivered from the cloud, including Microsoft 365." },
      { title: "Security considerations", text: "Access controls, multi-factor authentication and sensible security baselines from day one." },
      { title: "Scalable environments", text: "Resources that grow with your business, so you pay for what you need as you need it." },
    ],
    benefits: [
      "Secure access to business systems from the office, home or on the road",
      "Lower dependency on on-site hardware and reduced maintenance overhead",
      "Improved resilience through off-site backup and recovery planning",
      "Predictable, subscription-based costs that scale with your team",
      "Better collaboration across teams and locations",
    ],
    technologies: ["Microsoft Cloud Solution Provider (CSP)", "Microsoft 365", "Microsoft cloud services", "Cloud backup solutions"],
    approach: [
      { title: "Assess", text: "Review your current systems, data, users and connectivity." },
      { title: "Plan", text: "Agree a migration roadmap, security baseline and timeline." },
      { title: "Migrate", text: "Move workloads in stages with testing and user communication." },
      { title: "Support", text: "Monitor, optimise and support the environment going forward." },
    ],
    faqs: [
      { q: "Is the cloud secure enough for business data?", a: "Cloud platforms can be very secure when they are configured correctly. We set up access controls, multi-factor authentication and backup as part of every cloud project, and explain the security measures in place." },
      { q: "Do we have to move everything to the cloud at once?", a: "No. Most businesses move in stages, starting with email, files or backup. We recommend an approach based on your systems and priorities." },
      { q: "Can you manage our Microsoft cloud subscriptions?", a: "Yes. Through the Microsoft Cloud Solution Provider programme we can supply and help manage Microsoft cloud subscriptions." },
      { q: "What happens to our existing servers?", a: "We assess each server. Some workloads move to the cloud, some may stay on-site, and some can be retired. You get a clear recommendation for each." },
    ],
    related: ["microsoft-365", "it-support-infrastructure", "software-solutions"],
    seoKeywords: ["cloud solutions", "cloud migration South Africa", "cloud backup", "Microsoft CSP"],
  },
  {
    slug: "microsoft-dynamics-gp",
    name: "Microsoft Dynamics GP",
    shortName: "Dynamics GP",
    icon: ChartNoAxesCombined,
    summary:
      "Enterprise resource planning solutions that support financial management, business operations, reporting, and organisational efficiency. We provide Microsoft Dynamics GP implementation, support, troubleshooting, and related services.",
    hero: {
      eyebrow: "Microsoft Dynamics GP",
      title: "Keep your ERP accurate, stable and working for the business.",
      intro:
        "Practical Microsoft Dynamics GP support for finance and operations teams: configuration, troubleshooting, integrations, reporting and planning for what comes next.",
    },
    overview: [
      "Microsoft Dynamics GP sits at the centre of financial management for many organisations. When it is slow, misconfigured or poorly integrated, month-end, reporting and day-to-day operations suffer.",
      "Make IT Work provides hands-on Dynamics GP implementation support, technical troubleshooting, configuration and optimisation, and helps you plan migrations and modernisation where that is the right path.",
    ],
    challenges: [
      "Errors, performance issues or failed processes that hold up finance teams",
      "Reports that do not give management the information it needs",
      "Manual workarounds between GP and other business systems",
      "Upgrades, maintenance and year-end procedures that feel risky",
      "Uncertainty about the long-term ERP roadmap",
    ],
    capabilities: [
      { title: "Implementation support", text: "Assistance with setting up Dynamics GP modules, users, security and company configuration." },
      { title: "System configuration", text: "Configuration of modules, posting setups, workflows and user roles to match how you operate." },
      { title: "Troubleshooting", text: "Diagnosis and resolution of errors, data issues, integration failures and performance problems." },
      { title: "Technical support", text: "Responsive support for finance and operations users when GP is not behaving as expected." },
      { title: "ERP integrations", text: "Connecting Dynamics GP with other business applications to reduce manual capture." },
      { title: "Reporting & processes", text: "Reports and process improvements that give management accurate, timely information." },
      { title: "Maintenance & optimisation", text: "Routine maintenance, database health checks and performance tuning." },
      { title: "Migration & modernisation advisory", text: "Where applicable, guidance on migration planning and modernising your ERP environment." },
    ],
    benefits: [
      "Fewer disruptions to month-end and year-end processes",
      "More reliable financial data and reporting",
      "Less manual capture through integrations",
      "A system configured to how your business actually works",
      "A clear view of your ERP roadmap",
    ],
    technologies: ["Microsoft Dynamics GP", "Microsoft SQL Server", "Microsoft 365", "Reporting tools"],
    approach: [
      { title: "Understand", text: "Learn your processes, modules in use and current pain points." },
      { title: "Diagnose", text: "Investigate configuration, data and system health." },
      { title: "Resolve", text: "Fix issues, configure and optimise with minimal downtime." },
      { title: "Support", text: "Provide ongoing assistance and advice as needs evolve." },
    ],
    faqs: [
      { q: "Can you help with an existing Dynamics GP installation?", a: "Yes. Much of our Dynamics GP work is supporting, troubleshooting and optimising existing installations." },
      { q: "Do you help with migrating away from Dynamics GP?", a: "We provide migration planning and modernisation advisory where applicable, helping you understand the options and plan a transition." },
      { q: "Can Dynamics GP be connected to our other systems?", a: "In many cases, yes. We assess your systems and recommend an integration approach that reduces manual work." },
      { q: "Do you support Dynamics GP year-end procedures?", a: "We can assist with planning and running maintenance and year-end procedures. Contact us to discuss your timing and requirements." },
    ],
    related: ["microsoft-365", "software-solutions", "custom-software-development"],
    seoKeywords: ["Microsoft Dynamics GP support", "Dynamics GP South Africa", "ERP support"],
  },
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    shortName: "Microsoft 365",
    icon: LayoutGrid,
    summary:
      "Improve workplace productivity and collaboration through Microsoft 365. Access modern productivity applications, communication tools, cloud services, and business collaboration solutions.",
    hero: {
      eyebrow: "Microsoft 365",
      title: "The right Microsoft 365 setup for how your team works.",
      intro:
        "Licensing, setup, migration and support for Microsoft 365, from business email to Teams, SharePoint and OneDrive, configured properly from the start.",
    },
    overview: [
      "Microsoft 365 brings email, documents, meetings, chat and file storage into one platform. Its value depends on the right licences and a sensible configuration.",
      "We help you choose the right subscriptions, migrate email and files, set up Teams and SharePoint for real collaboration, and support your users day to day.",
    ],
    challenges: [
      "Paying for licences that do not match what users actually need",
      "Email on old servers or unreliable hosting",
      "Files spread across personal drives, email attachments and USB sticks",
      "Teams and SharePoint set up without structure or permissions",
      "Users who are not getting value from the tools they already pay for",
    ],
    capabilities: [
      { title: "Subscriptions & licensing", text: "Advice on the right Microsoft 365 plans and licence management through Microsoft CSP." },
      { title: "Exchange Online", text: "Business email setup, migration, mailbox configuration and email security." },
      { title: "SharePoint Online", text: "Structured document libraries, intranet sites and permissions that make sense." },
      { title: "Microsoft Teams", text: "Teams and channel structure, meetings, calling and collaboration setup." },
      { title: "OneDrive", text: "Personal file storage and sync with sensible sharing policies." },
      { title: "Office applications", text: "Deployment of Word, Excel, PowerPoint, Outlook and other apps across devices." },
      { title: "Business collaboration", text: "Shared workspaces and practices that help teams work together effectively." },
      { title: "User configuration & support", text: "Onboarding, offboarding, password and device support for your users." },
    ],
    benefits: [
      "Licences matched to roles, so you only pay for what is needed",
      "Professional, reliable business email",
      "One secure place for documents and collaboration",
      "Productive remote and hybrid working",
      "Users supported when they need help",
    ],
    technologies: ["Microsoft 365", "Exchange Online", "SharePoint Online", "Microsoft Teams", "OneDrive", "Microsoft CSP"],
    approach: [
      { title: "Review", text: "Understand users, roles, current email and file storage." },
      { title: "Recommend", text: "Propose licences and a tenant configuration." },
      { title: "Deploy", text: "Set up, migrate and secure the environment." },
      { title: "Support", text: "Train, support and adjust as your team changes." },
    ],
    faqs: [
      { q: "Can you move our existing email to Microsoft 365?", a: "Yes. We plan and carry out email migrations to Exchange Online, including mailbox data where supported, with a cut-over plan to minimise disruption." },
      { q: "Which Microsoft 365 plan do we need?", a: "It depends on your users' roles and requirements. We review your needs and recommend appropriate plans rather than a one-size-fits-all bundle." },
      { q: "Can you buy Microsoft 365 licences through you?", a: "Yes. Microsoft 365 subscriptions can be provided through the Microsoft Cloud Solution Provider programme. Contact us for a quotation." },
      { q: "Do you help users after setup?", a: "Yes. We provide user configuration and support, including onboarding new staff and resolving day-to-day issues." },
    ],
    related: ["cloud-solutions", "it-support-infrastructure", "web-design-digital-solutions"],
    seoKeywords: ["Microsoft 365 solutions", "Microsoft 365 licensing South Africa", "Exchange Online migration"],
  },
  {
    slug: "hardware-components",
    name: "Hardware & Components",
    shortName: "Hardware",
    icon: Cpu,
    summary:
      "Access reliable computer hardware, laptops, desktops, servers, components, and accessories from established technology manufacturers and distributors.",
    hero: {
      eyebrow: "Hardware & Components",
      title: "Business hardware, specified properly and sourced reliably.",
      intro:
        "Laptops, desktops, workstations, servers, networking and components from established manufacturers and distributors, with advice on what fits your workload.",
    },
    overview: [
      "Buying the wrong hardware costs time and money: underpowered machines slow people down, while over-specified ones waste budget.",
      "Make IT Work recommends and supplies hardware matched to how each person or system will be used, sourced through an established network of technology manufacturers and distribution partners.",
    ],
    challenges: [
      "Slow, unreliable devices that hold staff back",
      "Difficulty comparing specifications across brands",
      "Sourcing servers, networking and components for specific requirements",
      "Inconsistent device fleets that are hard to support",
      "Procurement that takes too much internal time",
    ],
    capabilities: [
      { title: "Business laptops", text: "Reliable business-class laptops for office, field and executive users." },
      { title: "Desktop computers", text: "Desktops for general office, front-desk and specialist use." },
      { title: "Workstations", text: "Higher-performance machines for design, engineering, data and media work." },
      { title: "Servers", text: "Server hardware for file, application, database and virtualisation workloads." },
      { title: "Computer components", text: "Memory, storage, processors, graphics and other upgrade components." },
      { title: "Networking equipment", text: "Switches, routers, wireless access points and related networking gear." },
      { title: "Peripherals", text: "Monitors, docking stations, printers, keyboards, headsets and accessories." },
      { title: "Procurement & recommendations", text: "Specification advice and procurement handled from quotation to delivery." },
    ],
    benefits: [
      "Hardware specified for the work it needs to do",
      "Access to recognised brands through established distribution partners",
      "One supplier for devices, components and accessories",
      "Consistent fleets that are easier to support",
      "Less time spent on procurement",
    ],
    technologies: ["Lenovo", "HP", "Dell", "Acer", "Mustek", "Pinnacle", "Rectron", "Axiz", "Tarsus", "Direct Distribution Services"],
    approach: [
      { title: "Requirements", text: "Understand users, workloads, quantities and budget." },
      { title: "Specify", text: "Recommend models and configurations with clear options." },
      { title: "Quote & source", text: "Provide a quotation and source through our partner network." },
      { title: "Set up", text: "Configure and deploy devices if required." },
    ],
    faqs: [
      { q: "Which brands can you supply?", a: "We work with established manufacturers including Lenovo, HP, Dell and Acer, and distribution partners such as Mustek, Pinnacle, Rectron, Axiz, Tarsus and Direct Distribution Services. Availability varies, so we confirm options on each quotation." },
      { q: "Can you quote for bulk orders?", a: "Yes. Send us your requirements and quantities through the quotation form and we will respond with options." },
      { q: "Do you provide warranties?", a: "Warranty terms depend on the manufacturer and product. We confirm the applicable warranty on each quotation." },
      { q: "Can you set up the devices before delivery?", a: "Yes. See our Custom Desktop & Laptop Configuration service for operating system installation and software setup." },
    ],
    related: ["custom-device-configuration", "it-support-infrastructure", "software-solutions"],
    seoKeywords: ["computer hardware suppliers", "business laptops South Africa", "server hardware"],
  },
  {
    slug: "it-support-infrastructure",
    name: "IT Support & Infrastructure",
    shortName: "IT Support",
    icon: LifeBuoy,
    summary:
      "Keep your technology environment running smoothly with dependable technical support, infrastructure management, troubleshooting, configuration, and maintenance.",
    hero: {
      eyebrow: "IT Support & Infrastructure",
      title: "IT that stays up, so your business keeps moving.",
      intro:
        "Dependable technical support and infrastructure management for desktops, laptops, networks and servers, available as once-off assistance or ongoing support.",
    },
    overview: [
      "When IT fails, work stops. Most businesses do not need a full in-house IT department, but they do need someone dependable to call and an environment that is properly maintained.",
      "Make IT Work provides troubleshooting, configuration and maintenance across your devices, network and servers. Businesses looking for ongoing support can enquire about a support and maintenance arrangement tailored to their environment.",
    ],
    challenges: [
      "Recurring IT problems that never quite get fixed",
      "No clear person responsible for IT",
      "Slow or unreliable networks and Wi-Fi",
      "Servers and devices that are not patched or maintained",
      "Downtime that affects customers and revenue",
    ],
    capabilities: [
      { title: "Desktop support", text: "Troubleshooting and repair of desktop hardware, software and user issues." },
      { title: "Laptop support", text: "Laptop diagnostics, configuration, upgrades and user support." },
      { title: "Network troubleshooting", text: "Diagnosing connectivity, Wi-Fi, performance and network configuration issues." },
      { title: "Server infrastructure", text: "Server setup, configuration, monitoring and maintenance." },
      { title: "Operating system support", text: "Installation, updates and troubleshooting of operating systems." },
      { title: "Hardware maintenance", text: "Preventive maintenance and replacement planning for equipment." },
      { title: "Infrastructure configuration", text: "Configuring networks, user accounts, permissions and shared resources." },
      { title: "Technical troubleshooting", text: "Structured problem-solving for issues that cross devices and systems." },
    ],
    benefits: [
      "Less downtime and fewer recurring issues",
      "A dependable technology partner to call",
      "A properly maintained, documented environment",
      "Support that scales from once-off help to ongoing arrangements",
      "More time for your team to focus on the business",
    ],
    technologies: ["Microsoft Windows", "Microsoft 365", "Business networking equipment", "Server platforms"],
    approach: [
      { title: "Log", text: "Capture the issue or support requirement clearly." },
      { title: "Diagnose", text: "Identify the root cause, not just the symptom." },
      { title: "Fix", text: "Resolve, configure or replace as required." },
      { title: "Prevent", text: "Recommend maintenance to stop issues recurring." },
    ],
    faqs: [
      { q: "Do you offer ongoing IT support contracts?", a: "Yes. Businesses seeking ongoing ICT support can enquire about a support and maintenance arrangement. Scope and terms are agreed based on your environment." },
      { q: "Can you help with a once-off problem?", a: "Yes. Contact us with details of the issue and we will advise on the next steps." },
      { q: "Do you provide on-site support?", a: "Support options depend on your location and requirements. Contact us to discuss what is available for your business." },
      { q: "Can you take over IT from a previous provider?", a: "Yes. We start by documenting your environment so that we understand what is in place before making changes." },
    ],
    related: ["cloud-solutions", "hardware-components", "microsoft-365"],
    seoKeywords: ["IT support services", "IT infrastructure support", "business IT support South Africa"],
  },
  {
    slug: "custom-device-configuration",
    name: "Custom Desktop & Laptop Configuration",
    shortName: "Device Configuration",
    icon: Laptop,
    summary:
      "Get devices configured to meet your specific business, professional, and personal requirements. We assist with hardware selection, custom specifications, operating system installation, and software configuration.",
    hero: {
      eyebrow: "Custom Desktop & Laptop Configuration",
      title: "Devices that are ready to work the day they arrive.",
      intro:
        "Hardware selection, custom specifications, operating system installation and software configuration for businesses, professionals and home users.",
    },
    overview: [
      "A new device is only useful once it is set up with the right operating system, applications, accounts and security settings.",
      "We help you choose or build a device to the right specification and configure it to your requirements, so users can sign in and start working.",
    ],
    challenges: [
      "Hours lost setting up each new device manually",
      "Off-the-shelf machines that do not suit specialist work",
      "Inconsistent configurations across the team",
      "Missing security settings on new devices",
    ],
    capabilities: [
      { title: "Hardware selection", text: "Guidance on the right device for the user and workload." },
      { title: "Custom specifications", text: "Processor, memory, storage and graphics configured to requirement." },
      { title: "Operating system installation", text: "Clean installation and updating of the operating system." },
      { title: "Software configuration", text: "Installation and setup of business and productivity applications." },
      { title: "Account & email setup", text: "User accounts, Microsoft 365 and email configured and tested." },
      { title: "Security baseline", text: "Updates, security software and sensible settings applied before handover." },
    ],
    benefits: [
      "Devices ready to use on day one",
      "Consistent setups that are easier to support",
      "Specifications that match the work",
      "Less internal time spent on setup",
    ],
    technologies: ["Microsoft Windows", "Microsoft 365", "Lenovo", "HP", "Dell", "Acer"],
    approach: [
      { title: "Requirements", text: "Understand the user and what they need to run." },
      { title: "Specify", text: "Select or build the device to the right specification." },
      { title: "Configure", text: "Install and configure OS, software and accounts." },
      { title: "Handover", text: "Deliver, test with the user and support afterwards." },
    ],
    faqs: [
      { q: "Can you configure devices we already own?", a: "Yes. We can configure new or existing devices, subject to an assessment of their condition and specification." },
      { q: "Do you build custom desktops?", a: "We assist with custom specifications and component selection. Contact us with your requirements for a quotation." },
      { q: "Do you help individuals and home offices?", a: "Yes. This service is available to businesses, professionals and individual users." },
    ],
    related: ["hardware-components", "it-support-infrastructure", "software-solutions"],
    seoKeywords: ["custom laptop configuration", "custom desktop build", "device setup"],
  },
  {
    slug: "software-solutions",
    name: "Software Solutions & Implementation",
    shortName: "Software Solutions",
    icon: PackageCheck,
    summary:
      "Identify, acquire, implement, and configure software solutions that address business requirements and improve productivity.",
    hero: {
      eyebrow: "Software Solutions & Implementation",
      title: "The right software, properly licensed and implemented.",
      intro:
        "We help you identify the software your business needs, acquire it through the right channels, and implement and configure it so people actually use it.",
    },
    overview: [
      "Software only delivers value when it fits the process, is licensed correctly and is set up well. Choosing in a hurry often leads to shelfware and workarounds.",
      "Make IT Work helps you define requirements, compare options, acquire licences from vendors such as Microsoft, Adobe and Sage, and implement and configure the solution for your team.",
    ],
    challenges: [
      "Unclear which software best fits a business need",
      "Licensing that is out of date, non-compliant or wasteful",
      "Software purchased but never properly implemented",
      "Disconnected tools that duplicate effort",
    ],
    capabilities: [
      { title: "Requirements analysis", text: "Define what the software must do before you buy it." },
      { title: "Solution identification", text: "Shortlist and compare options against your requirements." },
      { title: "Licensing & acquisition", text: "Source the right licences through vendor and distribution channels." },
      { title: "Implementation", text: "Install, configure and integrate the software into your environment." },
      { title: "User enablement", text: "Help users get started so the software is actually adopted." },
      { title: "Licence management", text: "Keep track of renewals and right-size licences over time." },
    ],
    benefits: [
      "Software chosen against clear requirements",
      "Correct, compliant licensing",
      "Faster adoption and fewer workarounds",
      "One partner from selection to support",
    ],
    technologies: ["Microsoft", "Microsoft 365", "Adobe", "Sage", "Microsoft Dynamics GP"],
    approach: [
      { title: "Define", text: "Capture requirements and constraints." },
      { title: "Select", text: "Recommend options with trade-offs explained." },
      { title: "Implement", text: "Acquire, install and configure." },
      { title: "Adopt", text: "Support users and review usage." },
    ],
    faqs: [
      { q: "Can you supply Adobe and Sage software?", a: "Yes, we can assist with acquiring software from vendors including Adobe and Sage. Contact us with your requirements for a quotation." },
      { q: "What if no off-the-shelf product fits?", a: "Then custom software may be the better route. See our Custom Software Development service." },
      { q: "Do you help with licence renewals?", a: "Yes. We can help you track renewals and adjust licences to match your current team." },
    ],
    related: ["custom-software-development", "microsoft-365", "microsoft-dynamics-gp"],
    seoKeywords: ["business software solutions", "software implementation", "software licensing"],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    shortName: "Custom Software",
    icon: CodeXml,
    summary:
      "Transform business requirements into practical digital solutions through bespoke system development, application development, workflow automation, and tailored software integrations.",
    hero: {
      eyebrow: "Custom Software Development",
      title: "Software built around your process, not the other way round.",
      intro:
        "Bespoke business applications, workflow automation and system integrations that turn manual, error-prone work into reliable digital processes.",
    },
    overview: [
      "Spreadsheets, paper forms and copy-paste between systems work until they do not. When off-the-shelf software cannot fit how you operate, custom software can.",
      "We translate your business requirements into practical, maintainable applications, from internal tools and database-driven systems to integrations between the platforms you already use.",
    ],
    challenges: [
      "Critical processes running on spreadsheets and email",
      "Duplicate data capture across disconnected systems",
      "Off-the-shelf software that forces awkward workarounds",
      "Legacy applications that are hard to maintain or extend",
    ],
    capabilities: [
      { title: "Business applications", text: "Web-based applications tailored to specific business functions." },
      { title: "Custom system development", text: "End-to-end systems designed around your workflows and data." },
      { title: "Workflow automation", text: "Automating approvals, notifications and repetitive tasks." },
      { title: "Database-driven applications", text: "Structured data, reporting and access control built in." },
      { title: "Business process optimisation", text: "Rethinking the process before it is digitised." },
      { title: "Systems integration", text: "Connecting applications so data flows without re-capture." },
      { title: "Application maintenance", text: "Ongoing updates, fixes and enhancements after launch." },
    ],
    benefits: [
      "Processes that match how your business really works",
      "Less manual effort and fewer capture errors",
      "Better visibility through structured data and reporting",
      "Software you own and can extend as you grow",
    ],
    technologies: ["Web application frameworks", "Relational databases", "APIs and integrations", "Microsoft 365 integrations"],
    approach: [
      { title: "Discover", text: "Map the process, users, data and goals." },
      { title: "Design", text: "Agree scope, screens and architecture." },
      { title: "Build & test", text: "Develop in iterations with your feedback." },
      { title: "Launch & maintain", text: "Deploy, train and support the application." },
    ],
    faqs: [
      { q: "How much does custom software cost?", a: "Cost depends entirely on scope and complexity. We provide a quotation after understanding your requirements. Request a quote to start the conversation." },
      { q: "How long does a project take?", a: "Timelines depend on scope. We agree a timeline and milestones as part of the proposal." },
      { q: "Can you integrate with our existing systems?", a: "Often, yes. We assess the systems involved and recommend an integration approach." },
      { q: "Do you maintain the software after launch?", a: "Yes. Application maintenance and enhancements can be arranged after launch." },
    ],
    related: ["software-solutions", "web-design-digital-solutions", "microsoft-dynamics-gp"],
    seoKeywords: ["custom software development", "workflow automation", "systems integration South Africa"],
  },
  {
    slug: "web-design-digital-solutions",
    name: "Web Design & Digital Solutions",
    shortName: "Web Design",
    icon: Globe,
    summary:
      "Establish a professional digital presence through modern website development, domain registration and management, hosting configuration, and digital solutions.",
    hero: {
      eyebrow: "Web Design & Digital Solutions",
      title: "A professional online presence that works as hard as you do.",
      intro:
        "Modern websites, e-commerce, domains, hosting, business email and DNS, designed, configured and maintained by one technology partner.",
    },
    overview: [
      "Your website is often the first impression a customer has of your business. It needs to look professional, load quickly, work on phones and be easy to find.",
      "Make IT Work designs and builds websites and handles the technical side around them, including domains, hosting, DNS and business email, so everything works together.",
    ],
    challenges: [
      "An outdated website that does not reflect the business",
      "No clear ownership of domains, hosting or DNS",
      "Email and website problems after hosting changes",
      "A site that is slow, insecure or poor on mobile",
    ],
    capabilities: [
      { title: "Corporate websites", text: "Professional, responsive websites that communicate what you do." },
      { title: "E-commerce websites", text: "Online stores with product catalogues, payments and order management." },
      { title: "Domain registration & management", text: "Registering, renewing and managing your domain names." },
      { title: "Web hosting", text: "Hosting configured for performance, security and reliability." },
      { title: "Website maintenance", text: "Updates, backups, content changes and security patching." },
      { title: "Business email configuration", text: "Professional email on your own domain, configured correctly." },
      { title: "DNS management", text: "DNS records for websites, email and verification done right." },
      { title: "Website optimisation", text: "Speed, search engine and mobile optimisation." },
    ],
    benefits: [
      "A credible, modern digital presence",
      "Websites that work on every device",
      "Domains, hosting and email under control",
      "One partner for the website and the infrastructure behind it",
    ],
    technologies: ["Modern web frameworks", "Microsoft 365 business email", "Domain and DNS services", "Web hosting platforms"],
    approach: [
      { title: "Brief", text: "Understand your goals, audience and content." },
      { title: "Design", text: "Agree structure and look before building." },
      { title: "Build", text: "Develop, test and optimise the site." },
      { title: "Launch & care", text: "Go live and maintain over time." },
    ],
    faqs: [
      { q: "Can you take over our existing domain and hosting?", a: "Yes. We review your current setup and plan any transfer so that your website and email keep working." },
      { q: "Will our website work on mobile phones?", a: "Yes. All websites we build are responsive and tested on phones, tablets and desktops." },
      { q: "Can you set up email on our domain?", a: "Yes. We configure business email, typically with Microsoft 365, including the DNS records it needs." },
      { q: "Do you offer website maintenance?", a: "Yes. Ongoing maintenance, updates and content changes can be arranged." },
    ],
    related: ["custom-software-development", "microsoft-365", "cloud-solutions"],
    seoKeywords: ["website design and development", "web hosting South Africa", "domain registration"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Order used in the navigation menu and footer (as specified in the brief). */
export const navServiceSlugs = [
  "cloud-solutions",
  "microsoft-dynamics-gp",
  "microsoft-365",
  "hardware-components",
  "it-support-infrastructure",
  "software-solutions",
  "custom-software-development",
  "web-design-digital-solutions",
];
