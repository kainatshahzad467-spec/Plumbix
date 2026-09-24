import { ServiceItem, ProjectItem, TestimonialItem, FaqItem, BenefitItem } from '../types';

import heroImg from '../assets/images/hero_plumbing_mechanic_1790253437070.jpg';
import vanTechImg from '../assets/images/plumber_service_van_1790253457863.jpg';
import waterHeaterImg from '../assets/images/water_heater_install_1790253473777.jpg';
import drainEquipImg from '../assets/images/drain_cleaning_equipment_1790253488534.jpg';
import vanBannerImg from '../assets/images/plumbing_service_truck_banner_1790253501721.jpg';

export const ASSETS = {
  hero: heroImg,
  vanTech: vanTechImg,
  waterHeater: waterHeaterImg,
  drainEquip: drainEquipImg,
  vanBanner: vanBannerImg,
};

export const COMPANY_INFO = {
  name: 'PlumbBix',
  legalName: 'PlumbBix Plumbing & Drain Solutions, LLC',
  tagline: 'Delivering Dependable Plumbing Solutions with Precision and Care',
  license: 'Texas Master Plumber Lic #M-41908 | Insured & Bonded',
  phone: '(800) 555-7890',
  emergencyPhone: '(800) 555-2473',
  email: 'service@plumbbix.com',
  dispatchEmail: 'dispatch@plumbbix.com',
  address: '1420 South Congress Ave, Suite 300, Austin, TX 78704',
  serviceHours: '24/7 Emergency Dispatch Available 365 Days a Year',
  regularHours: 'Monday – Saturday: 7:00 AM – 7:00 PM',
  serviceAreas: [
    'Downtown Austin',
    'Round Rock',
    'Cedar Park',
    'Georgetown',
    'Lakeway',
    'Westlake',
    'Pflugerville',
    'Buda & Kyle'
  ],
};

export const STATS = [
  {
    value: '15,840+',
    label: 'Jobs Completed',
    description: 'Residential & commercial service calls solved right the first time.',
  },
  {
    value: '99.4%',
    label: 'Satisfied Clients',
    description: 'Backed by verified Google 5-star reviews and our written guarantee.',
  },
  {
    value: '26+',
    label: 'Years Experience',
    description: 'Local family-operated plumbing mastery serving the community since 1998.',
  },
  {
    value: '45 Min',
    label: 'Average Response Time',
    description: 'Fully stocked service vans dispatched directly from your neighborhood zone.',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    number: '01',
    title: 'Licensed Experts',
    description: 'Every job is handled by background-checked, state-certified Master and Journeyman plumbers who undergo rigorous continual technical training.',
    badge: 'Master Plumber Certified',
  },
  {
    number: '02',
    title: 'Transparent Pricing',
    description: 'Upfront flat-rate quotes provided before any wrench touches a pipe. No hidden diagnostic fees, surprise hourly markups, or weekend surge rates.',
    badge: 'No Hidden Fees',
  },
  {
    number: '03',
    title: 'Fast Response',
    description: 'When pipes burst or drains back up, minutes matter. Our mobile inventory units are positioned across town for priority emergency dispatch.',
    badge: '< 45 Min Dispatch',
  },
  {
    number: '04',
    title: 'Quality Workmanship',
    description: 'We adhere to the highest International Plumbing Code (IPC) standards and back every repair with our comprehensive 1-to-5 year warranty guarantee.',
    badge: '100% Guaranteed',
  },
  {
    number: '05',
    title: 'Modern Equipment',
    description: 'Equipped with fiber-optic sewer cameras, acoustic acoustic leak locators, commercial-grade hydro-jetters, and trenchless pipe relining systems.',
    badge: 'Advanced Tech Fleet',
  },
  {
    number: '06',
    title: 'Customer First',
    description: 'We protect your home with clean boot covers, heavy-duty floor drop cloths, and leave your workspace cleaner than we found it. Guaranteed.',
    badge: 'White Glove Cleanliness',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    tagline: '24/7 Immediate Response for Urgent Water & Sewer Emergencies',
    description: 'Burst pipes, major water line ruptures, sewage overflowing, and severe gas leaks require immediate professional action to protect your home from catastrophic damage.',
    image: heroImg,
    features: [
      '24/7/365 live operator dispatch',
      'Rapid arrival with stocked mobile repair vans',
      'Immediate main water shut-off and containment',
      'Direct coordination with homeowner insurance',
    ],
    responseTime: 'Immediate (under 45 mins)',
    warranty: '100% Satisfaction & 1-Year Labor Guarantee',
    badge: 'Priority 24/7',
    popularIssues: ['Ruptured main supply pipes', 'Sewer overflow inside home', 'Failed sump pumps during storms', 'Gas line leak detection & repair'],
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning & Hydro-Jetting',
    tagline: 'Clear Tough Clogs, Grease, & Tree Roots with Hydro-Power',
    description: 'Sluggish drains and persistent foul odors are signs of deep blockages. We use high-resolution color camera inspection followed by 4,000 PSI hydro-jetting to restore pipes to like-new condition.',
    image: drainEquipImg,
    features: [
      'Digital HD fiber-optic camera line inspection',
      'High-pressure 4,000 PSI hydro-jetting scour',
      'Root-cutting mechanical augers',
      'Safe on PVC, cast iron, and clay sewer lines',
    ],
    responseTime: 'Same-day appointments available',
    warranty: 'No-Clog Guarantee up to 1 Year',
    badge: 'Most Requested',
    popularIssues: ['Bathtub & sink standing water', 'Main sewer line root intrusion', 'Kitchen grease & food accumulation', 'Multiple gurgling drains'],
  },
  {
    id: 'water-heaters',
    title: 'Water Heater Repair & Replacement',
    tagline: 'Tank & High-Efficiency Tankless Systems from Top US Brands',
    description: 'From rusty water and strange knocking sounds to total cold-water failure, our factory-certified technicians repair and install Bradford White, Rheem, and Navien tankless units.',
    image: waterHeaterImg,
    features: [
      'Gas and electric tank repairs & burner tune-ups',
      'Tankless continuous endless hot water conversion',
      'Thermal expansion tank inspection & code compliance',
      'Safe removal and eco-friendly disposal of old units',
    ],
    responseTime: 'Same-day replacement available',
    warranty: 'Up to 10-Year Manufacturer Warranty + 2-Year PlumbBix Labor',
    badge: 'Energy Star Certified',
    popularIssues: ['Lukewarm or rapidly cooling water', 'Tank base puddles or rust corrosion', 'Pilot light won’t stay lit', 'Loud banging sediment noises'],
  },
  {
    id: 'leak-detection',
    title: 'Leak Detection & Slab Repairs',
    tagline: 'Non-Invasive Acoustic & Thermal Locating for Hidden Water Leaks',
    description: 'Hidden leaks behind sheetrock or under foundation concrete slabs cause structural damage and sky-high utility bills. We pinpoint leaks accurately without destructive trial digging.',
    image: heroImg,
    features: [
      'Electronic acoustic frequency ground listening',
      'FLIR thermal imaging to trace moisture paths',
      'Precision underground line locating',
      'Direct slab repair, bypasses, and epoxy relining',
    ],
    responseTime: 'Same-day priority evaluation',
    warranty: 'Transferable Lifetime Warranty on PEX repipes',
    badge: 'Zero-Destruction Tech',
    popularIssues: ['Unexplained spike in monthly water bill', 'Warm spots on tile or hardwood floors', 'Sound of running water behind walls', 'Foundation cracks or damp baseboards'],
  },
  {
    id: 'pipe-repair',
    title: 'Whole-Home Repiping & Pipe Repair',
    tagline: 'Replace Deteriorating Galvanized & Copper with Modern PEX-a',
    description: 'Frequent pinhole leaks and discolored water are signs of aging, corroding pipe networks. We replace obsolete plumbing with corrosion-proof Uponor PEX-a for pristine water pressure.',
    image: vanBannerImg,
    features: [
      'Minimally invasive drywall openings with neat patching',
      'Highest-grade Uponor PEX-a expandable piping',
      'Lead-free brass fittings and quarter-turn shutoffs',
      'Whole-house pressure regulating valve (PRV) tuning',
    ],
    responseTime: 'Free in-home evaluation & written estimate',
    warranty: '25-Year Manufacturer Pipe Warranty + 10-Year PlumbBix Guarantee',
    badge: 'Lifetime Value',
    popularIssues: ['Rusty, yellowish drinking water', 'Low shower and fixture water pressure', 'Recurrent pinhole leaks in ceilings', 'Polybutylene or galvanized pipe failure'],
  },
  {
    id: 'commercial-plumbing',
    title: 'Commercial Plumbing Solutions',
    tagline: 'Heavy-Duty Plumbing Services for Restaurants, Retail, & Facilities',
    description: 'Keep your business compliant, open, and code-adherent. We handle commercial grease traps, annual backflow preventer testing, high-capacity boilers, and emergency utility shutdowns.',
    image: vanTechImg,
    features: [
      'Certified annual backflow testing and state filing',
      'Commercial grease interceptor maintenance',
      'Industrial sensor faucets & flushometer repairs',
      'Tailored preventative maintenance agreements',
    ],
    responseTime: '24/7 Commercial priority dispatch',
    warranty: 'Commercial Grade Service Guarantee',
    badge: 'Commercial Certified',
    popularIssues: ['Commercial restroom backing up', 'Grease trap code violations', 'Failed city backflow inspection', 'Kitchen water heater downtime'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'High-Efficiency Tankless Water Heater Upgrade',
    category: 'water-heaters',
    location: 'Rollingwood, Austin, TX',
    completionTime: '1 Business Day',
    description: 'Replaced a leaking 14-year-old 50-gallon atmospheric tank with a dual-condensing Navien NPE-240A2 tankless system with built-in recirculation pump.',
    beforeNotes: 'Outdated tank was leaking around lower seam; homeowner had 15 minutes of hot water before cold showers.',
    afterNotes: 'Endless continuous hot water across 4 bathrooms; estimated $320 annual energy savings and reclaimed 18 sq ft of utility closet space.',
    image: waterHeaterImg,
    highlightStat: '98%',
    highlightLabel: 'Energy Efficiency Rating',
  },
  {
    id: 'project-2',
    title: 'Trenchless Mainline Sewer Pipe Rehabilitation',
    category: 'drain-repair',
    location: 'Travis Heights, Austin, TX',
    completionTime: '6 Hours',
    description: '60 feet of severely crushed 1950s clay sewer line plagued by live oak tree roots was restored using epoxy cured-in-place pipe (CIPP) relining without digging up the pristine flagstone driveway.',
    beforeNotes: 'Homeowner faced recurring monthly sewage backups into downstairs bathtub; other contractors quoted excavating the entire yard.',
    afterNotes: 'Seamless jointless epoxy liner installed with zero lawn or driveway excavation; restored 100% flow capacity with 50-year design life.',
    image: drainEquipImg,
    highlightStat: '0 ft',
    highlightLabel: 'Lawn Excavation Needed',
  },
  {
    id: 'project-3',
    title: 'Full Residential Copper-to-PEX Repiping',
    category: 'residential',
    location: 'Round Rock, TX',
    completionTime: '2 Days',
    description: 'Complete replacement of deteriorating copper piping suffering from slab pinhole leaks with Uponor Class-A expandable PEX tubing, including individual room isolation manifolds.',
    beforeNotes: 'Three separate slab leaks within 6 months caused soggy carpets and drywall staining.',
    afterNotes: 'Zero leaks, balanced water pressure across all fixtures, clean drywall restoration, and complete peace of mind.',
    image: heroImg,
    highlightStat: '100%',
    highlightLabel: 'Non-Destructive Routing',
  },
  {
    id: 'project-4',
    title: 'Downtown Gastropub Commercial Grease & Backflow Overhaul',
    category: 'commercial',
    location: '6th Street District, Austin, TX',
    completionTime: 'Overnight Service',
    description: 'Installed commercial high-volume hydromechanical grease interceptor and tested dual RPZ backflow preventers before mandatory city health inspection.',
    beforeNotes: 'Aging grease trap was backing up during peak Friday dinner shifts, risking municipal health shutdown.',
    afterNotes: 'Installed overnight with zero disruption to restaurant operations; passed city inspection with zero citations.',
    highlightStat: '0 hrs',
    highlightLabel: 'Business Downtime',
    image: vanBannerImg,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Michael Thompson',
    location: 'Barton Creek, Austin',
    rating: 5,
    service: 'Emergency Water Line Burst Repair',
    date: '3 days ago',
    quote: 'From the first phone call at 2:00 AM to the final inspection, the PlumbBix team was professional, punctual, and transparent. They fixed our main line burst quickly, dried out the area, and left everything spotless. I wouldn’t hesitate to recommend them to anyone looking for reliable plumbing.',
    verified: true,
    avatarText: 'MT',
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    location: 'Round Rock, TX',
    rating: 5,
    service: 'Tankless Water Heater Installation',
    date: '1 week ago',
    quote: 'Our old tank heater failed on a Friday afternoon right before family arrived from out of town. Dan from PlumbBix arrived within an hour, walked us through our options with upfront pricing, and installed a Navien tankless unit the same afternoon. Hot water has been amazing ever since!',
    verified: true,
    avatarText: 'SJ',
  },
  {
    id: 'test-3',
    name: 'David Vance',
    location: 'Cedar Park, TX',
    rating: 5,
    service: 'Hydro-Jetting & Sewer Camera Inspection',
    date: '2 weeks ago',
    quote: 'We had persistent sewer backups that two other companies couldn’t resolve without quoting an $8,000 yard trench. PlumbBix ran their camera, showed us the exact tree root obstruction on screen, and hydro-jetted the line clear in under two hours. Fair pricing, no upsell pressure.',
    verified: true,
    avatarText: 'DV',
  },
  {
    id: 'test-4',
    name: 'Elena Rostova',
    location: 'Westlake Hills, TX',
    rating: 5,
    service: 'Electronic Slab Leak Detection',
    date: '3 weeks ago',
    quote: 'Noticed a warm spot on our kitchen tile floor and our water bill tripled. The technician brought acoustic sensors and pinpointed the exact pinhole leak under the slab within 30 minutes without tearing up the house. True craftsmen who respect your home.',
    verified: true,
    avatarText: 'ER',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Request Service',
    description: 'Contact us online or call our 24/7 dispatch hotline. Describe your plumbing situation, and our friendly dispatchers will schedule an immediate appointment or arrival window that fits your schedule.',
  },
  {
    step: '02',
    title: 'On-Site Diagnostic & Upfront Quote',
    description: 'Our licensed master plumber arrives in a fully stocked service vehicle, conducts a rigorous diagnostic inspection, and presents straightforward, fixed-price repair options before any work begins.',
  },
  {
    step: '03',
    title: 'Expert Precision Repair',
    description: 'Using commercial-grade tooling and OEM components, we complete your repair or installation efficiently according to International Plumbing Code with protective footwear and drop cloths.',
  },
  {
    step: '04',
    title: 'Final Quality Check & Walkthrough',
    description: 'We pressure-test the system, demonstrate the completed fix, clean the workspace completely, and provide your signed warranty documentation and maintenance guidelines.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Emergency Service',
    question: 'Do you offer 24/7 emergency plumbing services?',
    answer: 'Yes. We have certified plumbers on active call 24 hours a day, 7 days a week, 365 days a year—including holidays and weekends. For urgent emergencies like burst pipes, sewer backups, or gas leaks, our average arrival time is under 45 minutes.',
  },
  {
    id: 'faq-2',
    category: 'Pricing',
    question: 'How does your pricing work, and do you provide free estimates?',
    answer: 'We operate on a 100% upfront flat-rate pricing model. You receive an itemized, exact quote before any work starts, so you never have to worry about running timers or hidden surcharges. For new water heater replacements, repipes, and major sewer overhauls, our on-site estimates are completely free.',
  },
  {
    id: 'faq-3',
    category: 'Qualifications',
    question: 'Are your plumbers licensed and insured?',
    answer: 'All PlumbBix technicians are state-licensed through the Texas State Board of Plumbing Examiners (Master Plumber Lic #M-41908), background-checked, and drug-tested. We carry comprehensive $2,000,000 commercial liability and workers’ compensation insurance for your total protection.',
  },
  {
    id: 'faq-4',
    category: 'Water Heaters',
    question: 'Should I repair or replace my water heater?',
    answer: 'As a rule of thumb, if your tank heater is over 8–10 years old and leaking from the tank body, replacement is the safest and most economical choice. If it is under 7 years old with an electrical element, thermocouple, or pressure valve issue, a simple repair will often restore full operation.',
  },
  {
    id: 'faq-5',
    category: 'Drain Cleaning',
    question: 'What is hydro-jetting and is it safe for my older pipes?',
    answer: 'Hydro-jetting uses controlled water pressure (up to 4,000 PSI) with specialized rotating nozzles to scrub tree roots, grease, and mineral scale off inner pipe walls. Before jetting, we always perform an HD fiber-optic camera inspection to verify the structural integrity of your line.',
  },
  {
    id: 'faq-6',
    category: 'Commercial',
    question: 'Do you handle commercial properties and restaurants?',
    answer: 'Yes. We service commercial kitchens, retail plazas, office facilities, and multi-family communities with specialized commercial plumbing services, including grease trap installations, commercial boiler maintenance, and certified annual backflow preventer testing.',
  },
];

export const PARTNERS = [
  { name: 'Bradford White', category: 'Water Heaters', desc: 'American Made Professional Water Heaters' },
  { name: 'Rheem', category: 'HVAC & Plumbing', desc: 'Global Leader in Water Heating Solutions' },
  { name: 'Moen', category: 'Fixtures', desc: 'Buy It For Looks. Buy It For Life.' },
  { name: 'Kohler', category: 'Luxury Fixtures', desc: 'The Bold Look of Kohler' },
  { name: 'Delta Faucet', category: 'Fixtures & Valves', desc: 'Innovative Kitchen & Bath Systems' },
  { name: 'Ferguson', category: 'Supply Partner', desc: 'Leading North American Plumbing Supply' },
  { name: 'PHCC Member', category: 'Trade Association', desc: 'Plumbing-Heating-Cooling Contractors' },
  { name: 'BBB Accredited', category: 'A+ Rating', desc: 'Better Business Bureau Accredited' },
];
