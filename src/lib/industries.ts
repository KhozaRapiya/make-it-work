import {
  Store,
  Building2,
  Landmark,
  GraduationCap,
  Briefcase,
  Rocket,
  House,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
  text: string;
  needs: string[];
  services: string[];
};

export const industries: Industry[] = [
  {
    name: "Small and Medium Enterprises (SMEs)",
    icon: Store,
    text: "Enterprise-grade technology, sized and priced for growing businesses without an in-house IT department.",
    needs: ["Reliable IT support", "Microsoft 365 and business email", "Business hardware", "Cloud backup"],
    services: ["it-support-infrastructure", "microsoft-365", "hardware-components"],
  },
  {
    name: "Corporate Organisations",
    icon: Building2,
    text: "Dependable infrastructure, ERP support and procurement that keep complex operations running.",
    needs: ["ERP and Dynamics GP support", "Cloud infrastructure", "Hardware procurement at scale", "Systems integration"],
    services: ["microsoft-dynamics-gp", "cloud-solutions", "custom-software-development"],
  },
  {
    name: "Government and Public Sector",
    icon: Landmark,
    text: "Practical ICT solutions that support service delivery, accountability and secure information management.",
    needs: ["Secure productivity platforms", "Hardware supply", "Infrastructure support", "Process digitisation"],
    services: ["hardware-components", "it-support-infrastructure", "custom-software-development"],
  },
  {
    name: "Education and Training Institutions",
    icon: GraduationCap,
    text: "Devices, collaboration tools and connectivity that support teaching, learning and administration.",
    needs: ["Student and staff devices", "Microsoft 365 for collaboration", "Network support", "Web presence"],
    services: ["hardware-components", "microsoft-365", "web-design-digital-solutions"],
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    text: "Secure, mobile and well-supported technology for firms where time and client data matter.",
    needs: ["Secure document management", "Remote working", "Accounting and practice software", "IT support"],
    services: ["cloud-solutions", "software-solutions", "it-support-infrastructure"],
  },
  {
    name: "Entrepreneurs and Startups",
    icon: Rocket,
    text: "Get set up properly from day one, with technology that scales as the business grows.",
    needs: ["Website and domain", "Business email", "Laptops configured for work", "Scalable cloud tools"],
    services: ["web-design-digital-solutions", "microsoft-365", "custom-device-configuration"],
  },
  {
    name: "Individual and Home Office Users",
    icon: House,
    text: "Personal and home office technology that is set up correctly and supported when you need help.",
    needs: ["Laptop and desktop setup", "Software installation", "Troubleshooting", "Home office networking"],
    services: ["custom-device-configuration", "it-support-infrastructure", "hardware-components"],
  },
];
