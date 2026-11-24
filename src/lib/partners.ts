/**
 * Technology brands and distribution partners, as supplied by Make IT Work.
 *
 * LOGOS: plain brand logos only (no "Authorized/Certified Partner" badges unless
 * Make IT Work holds that status). Files live in /public/partners/. Brands with
 * `logo: null` show a neutral name tile until a plain official logo is added.
 *
 * Descriptions deliberately avoid claiming certifications, authorisations or
 * partnership tiers beyond what the company has confirmed.
 */
export type Partner = {
  name: string;
  short?: string;
  logo: string | null;
  url: string | null;
  description: string;
};

export type PartnerGroup = {
  title: string;
  intro: string;
  partners: Partner[];
};

export const partnerGroups: PartnerGroup[] = [
  {
    title: "Technology Manufacturers",
    intro:
      "Established global brands whose devices and software form the foundation of reliable business ICT environments.",
    partners: [
      { name: "Microsoft", logo: "/partners/microsoft.png", url: "https://www.microsoft.com", description: "Productivity, cloud, operating system and business software that underpins our Microsoft 365, cloud and Dynamics GP services." },
      { name: "Lenovo", logo: "/partners/lenovo.png", url: "https://www.lenovo.com", description: "Business laptops, desktops, workstations and servers supplied as part of our hardware solutions." },
      { name: "Acer", logo: "/partners/acer.png", url: "https://www.acer.com", description: "Notebooks, desktops and monitors for business, education and home office users." },
      { name: "HP", logo: "/partners/hp.png", url: "https://www.hp.com", description: "Business PCs, workstations, printers and peripherals for office and enterprise environments." },
      { name: "Dell", logo: "/partners/dell.png", url: "https://www.dell.com", description: "Laptops, desktops, workstations, servers and displays for business and infrastructure needs." },
      { name: "Adobe", logo: "/partners/adobe.png", url: "https://www.adobe.com", description: "Creative, document and PDF software supplied through our software solutions service." },
      { name: "Sage", logo: null, url: "https://www.sage.com", description: "Accounting and business management software for small, medium and growing organisations." },
    ],
  },
  {
    title: "Distribution & Technology Supply Partners",
    intro:
      "Distribution partners that give our clients access to a broad range of hardware, components, software and accessories.",
    partners: [
      { name: "Mustek", logo: null, url: "https://www.mustek.co.za", description: "Distribution of computer hardware, components and technology products." },
      { name: "Pinnacle", logo: null, url: "https://www.pinnacle.co.za", description: "Distribution of ICT hardware, components, networking and peripherals." },
      { name: "Rectron", logo: null, url: "https://www.rectron.co.za", description: "Distribution of computer components, devices and accessories." },
      { name: "Direct Distribution Services", short: "DDS", logo: null, url: null, description: "Technology product distribution supporting our hardware and accessories supply." },
      { name: "Axiz", logo: null, url: "https://www.axiz.com", description: "Distribution of enterprise hardware, software and cloud solutions." },
      { name: "Tarsus", logo: null, url: "https://www.tarsusdistribution.co.za", description: "Distribution of technology hardware, software and services." },
    ],
  },
  {
    title: "Enterprise Software & Cloud Solutions",
    intro:
      "Enterprise platforms we work with to deliver cloud, productivity and business management solutions.",
    partners: [
      { name: "Microsoft Cloud Solution Provider", short: "Microsoft CSP", logo: null, url: "https://partner.microsoft.com/en-us/partnership/cloud-solution-provider", description: "The Microsoft programme through which we provide and help manage Microsoft cloud subscriptions." },
      { name: "Microsoft Dynamics GP", logo: null, url: "https://www.microsoft.com/en-us/dynamics-365/gp-to-business-central", description: "ERP for financial management and operations, supported through our Dynamics GP services." },
      { name: "Microsoft 365", logo: null, url: "https://www.microsoft.com/microsoft-365", description: "Email, collaboration, file storage and Office applications we license, deploy and support." },
      { name: "Sage", logo: null, url: "https://www.sage.com", description: "Business management and accounting software we help clients acquire and implement." },
    ],
  },
  {
    title: "Networking, Security & Data Protection",
    intro:
      "Security, networking and backup technologies that help keep business systems protected, connected and recoverable.",
    partners: [
      { name: "Fortinet", logo: "/partners/fortinet.png", url: "https://www.fortinet.com", description: "Firewalls and network security solutions for protecting business networks." },
      { name: "Cisco", logo: "/partners/cisco.png", url: "https://www.cisco.com", description: "Networking, wireless and collaboration technology for business infrastructure." },
      { name: "Veeam", logo: "/partners/veeam.png", url: "https://www.veeam.com", description: "Backup and recovery software for servers, endpoints, cloud and Microsoft 365 data." },
      { name: "Kaspersky", logo: "/partners/kaspersky.png", url: "https://www.kaspersky.com", description: "Endpoint and cybersecurity software for business devices." },
    ],
  },
];

/** Flat list in the order requested for the homepage showcase. */
export const showcasePartners: { name: string; short?: string; logo: string | null }[] = [
  { name: "Microsoft", logo: "/partners/microsoft.png" },
  { name: "Microsoft CSP", logo: null },
  { name: "Lenovo", logo: "/partners/lenovo.png" },
  { name: "Acer", logo: "/partners/acer.png" },
  { name: "HP", logo: "/partners/hp.png" },
  { name: "Dell", logo: "/partners/dell.png" },
  { name: "Mustek", logo: null },
  { name: "Pinnacle", logo: null },
  { name: "Rectron", logo: null },
  { name: "Direct Distribution Services", short: "DDS", logo: null },
  { name: "Axiz", logo: null },
  { name: "Tarsus", logo: null },
  { name: "Adobe", logo: "/partners/adobe.png" },
  { name: "Sage", logo: null },
  { name: "Microsoft Dynamics GP", logo: null },
  { name: "Fortinet", logo: "/partners/fortinet.png" },
  { name: "Cisco", logo: "/partners/cisco.png" },
  { name: "Veeam", logo: "/partners/veeam.png" },
  { name: "Kaspersky", logo: "/partners/kaspersky.png" },
];
