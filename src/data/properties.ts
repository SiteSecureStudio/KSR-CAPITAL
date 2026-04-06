// ── Kampung Baru images ──
import imgKB1 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5236.jpg'
import imgKB2 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5237.jpg'
import imgKB3 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5240.jpg'
import imgKB4 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5241.jpg'

// ── Rinching images ──
import imgRC1 from '../../brand assests/Portfolio pictures/Industrial Shoplot Rinching/45a640ed-0beb-4d1c-bcf0-674bbd8cd1ab.JPG'
import imgRC2 from '../../brand assests/Portfolio pictures/Industrial Shoplot Rinching/f097ef78-ee4a-4297-8fb3-612b17224849.JPG'

// ── Sungai Besi images ──
import imgSB1 from '../../brand assests/Portfolio pictures/Industrial Shoplot Sungai Besi/IMG_5248.JPG'

// ── Pickleball images ──
import imgPB1 from '../../brand assests/Portfolio pictures/Pickleball Court Kampung Pandan/dele 43.jpg'
import imgPB2 from '../../brand assests/Portfolio pictures/Pickleball Court Kampung Pandan/dele 44.jpg'
import imgPB3 from '../../brand assests/Portfolio pictures/Pickleball Court Kampung Pandan/dele 45.jpg'

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
    images: [imgRC1, imgRC2],
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
]
