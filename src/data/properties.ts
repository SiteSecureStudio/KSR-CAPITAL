// ── Kampung Baru images ──
import imgKB1 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5236.jpg'
import imgKB2 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5237.jpg'
import imgKB3 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5240.jpg'
import imgKB4 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5241.jpg'

// ── Rinching images ──
import imgRC1 from '../../brand assests/Portfolio pictures/Industrial Shoplot Rinching/45a640ed-0beb-4d1c-bcf0-674bbd8cd1ab.JPG'
import imgRC2 from '../../brand assests/Portfolio pictures/Industrial Shoplot Rinching/f097ef78-ee4a-4297-8fb3-612b17224849.JPG'
import imgRC3 from '../../brand assests/Portfolio pictures/Industrial Shoplot Rinching/WhatsApp Image 2026-04-06 at 11.42.25.jpeg'

// ── Sungai Besi images ──
import imgSB1 from '../../brand assests/Portfolio pictures/Industrial Shoplot Sungai Besi/IMG_5248.JPG'

// ── Pickleball Kampung Pandan images ──
import imgPB1 from '../../brand assests/Portfolio pictures/Pickleball Court Kampung Pandan/dele 43.jpg'
import imgPB2 from '../../brand assests/Portfolio pictures/Pickleball Court Kampung Pandan/dele 44.jpg'
import imgPB3 from '../../brand assests/Portfolio pictures/Pickleball Court Kampung Pandan/dele 45.jpg'

// ── Dome Style Hall images ──
import imgDome1 from '../../brand assests/Portfolio pictures/Dome Style Hall (Ongoing)/dome-tent-true-eyecatcher.jpeg'
import imgDome2 from '../../brand assests/Portfolio pictures/Dome Style Hall (Ongoing)/228.jpg'
import imgDome3 from '../../brand assests/Portfolio pictures/Dome Style Hall (Ongoing)/1259-202007080954021962.jpg'

// ── Pker Park Pickleball Court images ──
import imgPker1 from '../../brand assests/Portfolio pictures/Pker Park Pickleball Court/SaveClip.App_620962443_17878790574376655_1029738150051296785_n.jpg'
import imgPker2 from '../../brand assests/Portfolio pictures/Pker Park Pickleball Court/WhatsApp Image 2026-04-24 at 00.33.41.jpeg'
import imgPker3 from '../../brand assests/Portfolio pictures/Pker Park Pickleball Court/WhatsApp Image 2026-04-24 at 00.33.43.jpeg'

export interface PropertyData {
  slug: string
  name: string
  location: string
  area: string
  type: 'Commercial' | 'Industrial' | 'Lifestyle'
  tag: string
  images: string[]
  story: string
  highlights: string[]
  specs: { label: string; value: string }[]
  areaContext: string
}

export const properties: PropertyData[] = [
  {
    slug: 'kampung-baru-shoplot',
    name: 'Double Storey Terrace Shoplot',
    location: 'Kampung Baru, KL',
    area: 'Kuala Lumpur',
    type: 'Commercial',
    tag: 'Commercial Retail',
    images: [imgKB1, imgKB2, imgKB3, imgKB4],
    story:
      'Nestled in the thriving community of Kampung Baru Ampang, this double-story terrace shoplot development features 10 well-crafted units that seamlessly blend functionality with contemporary design. Each unit is thoughtfully designed to cater to a variety of business ventures, offering spacious layouts that promote efficient operations and adaptability. The double-story structure provides additional flexibility for businesses, allowing for a mix of commercial and office spaces under one roof.',
    highlights: [
      '10 well-crafted units with contemporary design',
      'Double-story structure offering commercial and office flexibility',
      'Prime location with high foot traffic and excellent connectivity',
      'Spacious layouts designed for efficient operations',
    ],
    specs: [
      { label: 'Units', value: '10' },
      { label: 'Storeys', value: '2' },
      { label: 'Asset Class', value: 'Commercial' },
      { label: 'Location', value: 'Kampung Baru, KL' },
    ],
    areaContext:
      'Kampung Baru sits at the very heart of Kuala Lumpur, adjacent to the KLCC corridor. As one of the city\'s oldest Malay settlements, it has undergone rapid commercial transformation — making it a prime location for businesses seeking central KL exposure with strong daily foot traffic.',
  },
  {
    slug: 'rinching-industrial',
    name: 'Industrial Shoplot',
    location: 'Rinching, Selangor',
    area: 'Selangor',
    type: 'Industrial',
    tag: 'Industrial Unit',
    images: [imgRC1, imgRC2, imgRC3],
    story:
      'Located in the vibrant area of Rinching, this single-story industrial shoplot development comprises 32 versatile units, thoughtfully designed to cater to a wide range of business needs. The project emphasizes functionality and practicality, offering ample space for businesses to operate efficiently while fostering a conducive environment for growth. Its strategic location ensures easy accessibility and connectivity to major transportation routes, making it an ideal hub for enterprises seeking convenience and visibility.',
    highlights: [
      '32 versatile single-story units',
      'Designed for a wide range of business needs',
      'Strategic location with major transportation connectivity',
      'Emphasis on functionality and practical space planning',
    ],
    specs: [
      { label: 'Units', value: '32' },
      { label: 'Storeys', value: '1' },
      { label: 'Asset Class', value: 'Industrial' },
      { label: 'Location', value: 'Rinching, Selangor' },
    ],
    areaContext:
      'Rinching is an emerging industrial corridor in Selangor, benefiting from its proximity to major logistics routes connecting Kuala Lumpur with the southern Klang Valley. The area\'s growing industrial base, combined with improving infrastructure, makes it a strategic choice for manufacturing and light industrial operations.',
  },
  {
    slug: 'sungai-besi-industrial',
    name: 'Industrial Shoplot',
    location: 'Sungai Besi, KL',
    area: 'Kuala Lumpur',
    type: 'Industrial',
    tag: 'Industrial Complex',
    images: [imgSB1],
    story:
      'This landmark development in Sungai Besi is a meticulously designed 5-story industrial shoplot that combines functionality with modern aesthetics. Featuring six spacious units, each equipped with integrated lift systems, the project is tailored to meet the needs of businesses seeking a versatile and premium workspace. Strategically located in a bustling commercial hub, the industrial shoplot offers seamless accessibility and high visibility, making it an ideal choice for enterprises looking to thrive in a dynamic environment.',
    highlights: [
      '5-story landmark development with 6 spacious units',
      'Integrated lift systems in every unit',
      'Located in a prime, high-visibility commercial hub',
      'Modern aesthetics with optimised space efficiency',
    ],
    specs: [
      { label: 'Storeys', value: '5' },
      { label: 'Asset Class', value: 'Industrial' },
      { label: 'Location', value: 'Sungai Besi, KL' },
    ],
    areaContext:
      'Sungai Besi is one of Kuala Lumpur\'s established industrial and commercial hubs, offering direct access to the Sungai Besi Expressway and key arterial roads. Its central positioning within KL\'s southern corridor gives businesses here exceptional connectivity to both the city centre and the broader Klang Valley.',
  },
  {
    slug: 'kampung-pandan-pickleball',
    name: 'Pickleball Court',
    location: 'Kampung Pandan, KL',
    area: 'Kuala Lumpur',
    type: 'Lifestyle',
    tag: 'Recreational Facility',
    images: [imgPB1, imgPB2, imgPB3],
    story:
      'In the heart of Kampung Pandan, KSR Capital has developed a state-of-the-art pickleball court facility featuring six premium courts, designed to meet international standards. This project reflects our dedication to promoting active lifestyles and fostering community engagement. The courts are meticulously constructed to provide players with a superior experience, incorporating high-quality materials and thoughtful layouts to ensure optimal playability and safety.',
    highlights: [
      '6 premium courts built to international standards',
      'High-quality materials for optimal playability and safety',
      'Community-centred facility fostering active lifestyles',
      'Strategically located in a lively neighbourhood hub',
    ],
    specs: [
      { label: 'Courts', value: '6' },
      { label: 'Standard', value: 'International' },
      { label: 'Asset Class', value: 'Lifestyle' },
      { label: 'Location', value: 'Kampung Pandan, KL' },
    ],
    areaContext:
      'Kampung Pandan is a densely populated residential district in central Kuala Lumpur with a strong community identity. Rising demand for premium recreational facilities in urban KL — driven by a growing wellness culture — makes this lifestyle asset well-positioned to serve an active, community-focused demographic.',
  },
  {
    slug: 'dome-style-hall',
    name: 'Dome Style Hall',
    location: 'Malaysia',
    area: 'Malaysia',
    type: 'Lifestyle',
    tag: 'Event Venue · Ongoing',
    images: [imgDome1, imgDome2, imgDome3],
    story:
      "Currently under development, this striking dome-style hall is designed to serve as a landmark event and community venue. The distinctive tensile dome structure creates a unique architectural form that stands apart from conventional halls — offering a column-free interior spanning a generous footprint, ideal for community gatherings, exhibitions, and multi-purpose events. KSR Capital's expertise in civil engineering ensures structural integrity alongside aesthetic ambition.",
    highlights: [
      'Distinctive dome tensile architecture with column-free interior',
      'Designed for community gatherings, exhibitions, and events',
      'Landmark visual identity within its surrounding precinct',
      'Currently under active development',
    ],
    specs: [
      { label: 'Status', value: 'Ongoing' },
      { label: 'Structure', value: 'Dome / Tensile' },
      { label: 'Asset Class', value: 'Lifestyle' },
      { label: 'Use', value: 'Event & Community' },
    ],
    areaContext:
      "Dome structures are increasingly sought after for their versatility and visual impact. As KSR Capital continues expanding its lifestyle portfolio, this venue adds a distinctive cultural and community dimension — reflecting the company's broader mission to build spaces that connect and inspire.",
  },
  {
    slug: 'pker-park-pickleball',
    name: 'Pickleball Court',
    location: 'Pker Park',
    area: 'Malaysia',
    type: 'Lifestyle',
    tag: 'Recreational Facility',
    images: [imgPker1, imgPker2, imgPker3],
    story:
      "KSR Capital's latest recreational facility at Pker Park delivers premium pickleball courts built to exacting standards. Positioned within an established park setting, the courts benefit from existing green infrastructure and natural light — creating an inviting environment for both casual players and competitive enthusiasts. The facility continues KSR Capital's commitment to lifestyle developments that enhance community wellbeing.",
    highlights: [
      'Premium courts built to exacting international standards',
      'Situated within an established park setting',
      'Natural light and green surroundings for an inviting atmosphere',
      'Serves casual players and competitive enthusiasts alike',
    ],
    specs: [
      { label: 'Asset Class', value: 'Lifestyle' },
      { label: 'Standard', value: 'International' },
      { label: 'Location', value: 'Pker Park' },
      { label: 'Use', value: 'Recreational' },
    ],
    areaContext:
      "Pickleball has seen explosive growth across Southeast Asia as a fast-paced, accessible racquet sport appealing to all age groups. KSR Capital's investment in dedicated pickleball infrastructure reflects a clear understanding of evolving lifestyle demand — positioning these assets at the forefront of Malaysia's recreational property sector.",
  },
]
