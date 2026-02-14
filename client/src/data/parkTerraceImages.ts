export type ParkTerraceCategory =
  | 'Gardens'
  | 'Architecture'
  | 'Community'
  | 'Seasonal';

export interface ParkTerraceImage {
  id: string;
  title: string;
  category: ParkTerraceCategory;
  description: string;
  imageUrl: string;
  alt: string;
}

export interface ParkTerraceHistoryMilestone {
  year: string;
  title: string;
  description: string;
}

export interface ParkTerraceHistoryImage {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  alt: string;
}

export const parkTerraceImageSource = {
  name: 'My Inwood',
  articleUrl: 'https://myinwood.net/park-terrace-gardens/',
};

export const parkTerraceImages: ParkTerraceImage[] = [
  {
    id: 'dsc-hero',
    title: 'Garden Courtyard Panorama',
    category: 'Gardens',
    description: 'A broad view of the courtyard gardens framed by mature trees.',
    imageUrl: '/images/park-terrace/DSC07677.jpg',
    alt: 'Park Terrace Gardens courtyard with trees and landscaped grounds',
  },
  {
    id: 'nyc-1',
    title: 'Tree-Lined Walkway',
    category: 'Gardens',
    description:
      'A calm pedestrian path moving through the center of the gardens.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-1.jpg',
    alt: 'A leafy path through Park Terrace Gardens',
  },
  {
    id: 'nyc-2',
    title: 'Park Terrace Facade',
    category: 'Architecture',
    description:
      'Historic brick buildings overlooking the cooperative landscape.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-2.jpg',
    alt: 'Historic brick facade at Park Terrace Gardens',
  },
  {
    id: 'nyc-3',
    title: 'Summer Garden Beds',
    category: 'Seasonal',
    description: 'Dense summer plantings add color and texture to shared areas.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-3.jpg',
    alt: 'Summer garden beds in Park Terrace Gardens',
  },
  {
    id: 'nyc-4',
    title: 'Entrance and Plantings',
    category: 'Architecture',
    description:
      'Landscaped entry details that blend architecture and greenery.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-4.jpg',
    alt: 'Building entrance with lush plantings',
  },
  {
    id: 'nyc-5',
    title: 'Stone Path Through Gardens',
    category: 'Gardens',
    description: 'Curving pathways connect shaded corners and open courtyards.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-5.jpg',
    alt: 'Stone path through landscaped courtyard gardens',
  },
  {
    id: 'nyc-6',
    title: 'Quiet Courtyard Corner',
    category: 'Community',
    description:
      'A tucked-away green pocket designed for quiet moments outdoors.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-6.jpg',
    alt: 'Quiet landscaped corner in Park Terrace Gardens',
  },
  {
    id: 'nyc-7',
    title: 'Roofline and Canopy',
    category: 'Architecture',
    description: 'Tree canopy softens the scale of classic eight-story buildings.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-7.jpg',
    alt: 'Tree canopy and building roofline at Park Terrace Gardens',
  },
  {
    id: 'nyc-10',
    title: 'Garden Seating View',
    category: 'Community',
    description: 'Shared outdoor spaces built for everyday resident use.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-10-.jpg',
    alt: 'Garden seating area in a landscaped courtyard',
  },
  {
    id: 'nyc-12',
    title: 'Seasonal Flower Border',
    category: 'Seasonal',
    description: 'Colorful annual and perennial plantings animate the paths.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-12-.jpg',
    alt: 'Seasonal flowers and border plantings in the gardens',
  },
  {
    id: 'nyc-14',
    title: 'Shaded Path Near Buildings',
    category: 'Gardens',
    description: 'Pedestrian routes weave between architecture and mature trees.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-14.jpg',
    alt: 'Shaded walkway near Park Terrace buildings',
  },
  {
    id: 'nyc-17',
    title: 'Community Garden Vista',
    category: 'Community',
    description: 'Open green spaces support gatherings and daily circulation.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-17.jpg',
    alt: 'Open community garden vista with pathways',
  },
  {
    id: 'nyc-18',
    title: 'Courtyard Perspective',
    category: 'Gardens',
    description: 'Layered planting beds frame views through the complex.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-18.jpg',
    alt: 'Courtyard perspective with layered plants and trees',
  },
  {
    id: 'nyc-20',
    title: 'Historic Brick Details',
    category: 'Architecture',
    description: 'Classic masonry architecture integrated with landscape edges.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-20.jpg',
    alt: 'Historic brick building details at Park Terrace Gardens',
  },
  {
    id: 'nyc-22',
    title: 'Garden Along Building Edge',
    category: 'Gardens',
    description:
      'Long planted edges create a strong green frame around residences.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-22.jpg',
    alt: 'Garden planting strip along a residential building',
  },
  {
    id: 'nyc-23',
    title: 'Late-Day Light',
    category: 'Seasonal',
    description: 'Changing light highlights foliage texture across the grounds.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-23.jpg',
    alt: 'Late-day sunlight over trees and paths in the gardens',
  },
  {
    id: 'nyc-24',
    title: 'Courtyard Looking North',
    category: 'Gardens',
    description: 'A long courtyard view with generous tree cover and pathways.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-24.jpg',
    alt: 'Courtyard view with pathways and tree canopy',
  },
];

export const parkTerraceHistoryMilestones: ParkTerraceHistoryMilestone[] = [
  {
    year: 'Late 1800s',
    title: 'Seaman Estate Era',
    description:
      'The hilltop site was part of the historic Seaman Mansion estate, whose landscaped grounds shaped the area before apartment development.',
  },
  {
    year: '1939',
    title: 'Construction Phase',
    description:
      'Archival coverage from April 24, 1939 documents Park Terrace Gardens under construction on the former estate property.',
  },
  {
    year: '1940',
    title: 'Complex Completed',
    description:
      'The five-building, eight-story garden apartment complex opened with 397 units and a landscaped block interior.',
  },
  {
    year: '1976',
    title: 'Co-op Conversion',
    description:
      'The property transitioned into a shareholder-owned housing cooperative while preserving its garden-centered plan.',
  },
];

export const parkTerraceHistoryImages: ParkTerraceHistoryImage[] = [
  {
    id: 'ptg-map-1911',
    title: '1911 Area Map',
    caption: 'Map view of the neighborhood before the cooperative era.',
    imageUrl: '/images/park-terrace/ptg-1911-map-resized.jpg',
    alt: '1911 map view of the Park Terrace Gardens area in Inwood',
  },
  {
    id: 'ptg-1939',
    title: 'Under Construction (1939)',
    caption: 'New York Sun coverage from April 24, 1939.',
    imageUrl:
      '/images/park-terrace/Park-Terrace-Gardens-NY-Sun-April-24-1939.jpg',
    alt: 'Park Terrace Gardens under construction in 1939',
  },
  {
    id: 'ptg-1941',
    title: 'Completed Complex (1941)',
    caption: 'Early view of Park Terrace Gardens shortly after completion.',
    imageUrl: '/images/park-terrace/Park-Terrace-Gardens-in-1941..jpg',
    alt: 'Park Terrace Gardens complex photographed in 1941',
  },
];
