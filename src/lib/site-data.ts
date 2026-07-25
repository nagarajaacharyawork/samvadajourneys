import expCoastal from "@/assets/imgi_13_675ffeed8edd871379a0092d_DJI_0519-Enhanced-NR copy.webp";
import expHeritage from "@/assets/imgi_23_677215f313af8fcb3bd47c1b_Varanga Traditional Kambala 2024.webp";
import expFood from "@/assets/imgi_22_677216968747c3a89492ff89_Moode Idli  kotte Kadubu.webp";
import expWaterfall from "@/assets/imgi_34_67456fb9ed1002405e16426a_DJI_0925-Enhanced-NR copy.webp";
import expSunrise from "@/assets/imgi_4_67cd949f03e3822d94252b8b_spri.webp";
import expCoffee from "@/assets/imgi_9_673840a46b26f4521bcc7a7a_Kodachadri Hills 3.webp";
import expCorporate from "@/assets/imgi_14_675fffd94726e2249fcad7a1_DSC03674.webp";
import galleryCulture from "@/assets/imgi_25_6772135f6e792f9e5aad99f0_471489661_512039215186411_7174681571825144467_n.webp";
import galleryNature from "@/assets/imgi_48_67cd956958e2299374d3d90b_Nature-p-1080.webp";
import galleryPeople from "@/assets/imgi_20_67737f871ccf77fed3275d35_469479383_17892428070108648_6886044078070230829_n.webp";
import blogEatery from "@/assets/imgi_12_675ffe1e96ccefdef53fff51_IMG_1101-Enhanced-NR.webp";

export const experiences = [
  {
    slug: "coastal-explorer",
    title: "Coastal Explorer",
    tagline: "Hidden beaches, islands & fishing villages",
    image: expCoastal,
    duration: "2 Days",
    group: "6 – 12",
    highlights: [
      "Sunrise with local fishermen at Malpe",
      "Boat ride to St. Mary's Island",
      "Fresh coastal seafood lunch",
    ],
  },
  {
    slug: "heritage-walks",
    title: "Heritage Walks",
    tagline: "Temples, traditions & local history",
    image: expHeritage,
    duration: "Half Day",
    group: "4 – 15",
    highlights: [
      "Krishna Matha's untold stories",
      "Meet a temple priest family",
      "Old town Udupi lanes on foot",
    ],
  },
  {
    slug: "food-trails",
    title: "Food Trails",
    tagline: "Authentic cuisine with the people who make it",
    image: expFood,
    duration: "1 Day",
    group: "4 – 10",
    highlights: [
      "Breakfast at a 70-year-old eatery",
      "Learn to roll a proper Neer Dosa",
      "Coastal home-lunch on banana leaf",
    ],
  },
  {
    slug: "waterfall-treks",
    title: "Hidden Waterfall Treks",
    tagline: "Adventure through nature's best-kept secrets",
    image: expWaterfall,
    duration: "1 Day",
    group: "6 – 12",
    highlights: [
      "Off-map Western Ghats trail",
      "Wild swim under a waterfall",
      "Village lunch after the trek",
    ],
  },
  {
    slug: "sunrise-sunset",
    title: "Sunrise & Sunset Experiences",
    tagline: "Magical moments beyond tourist crowds",
    image: expSunrise,
    duration: "Few Hours",
    group: "2 – 20",
    highlights: [
      "Golden hour at Kaup Lighthouse",
      "Silent beach yoga session",
      "Chai with fishermen at dusk",
    ],
  },
  {
    slug: "coffee-estate",
    title: "Coffee Estate Experiences",
    tagline: "Plantation life & local coffee culture",
    image: expCoffee,
    duration: "2 – 3 Days",
    group: "4 – 14",
    highlights: [
      "Stay on a working estate",
      "Bean-to-cup with the grower",
      "Sunrise walk through the plantation",
    ],
  },
  {
    slug: "corporate-retreats",
    title: "Corporate & Startup Retreats",
    tagline: "Team-building with meaning",
    image: expCorporate,
    duration: "Custom",
    group: "10 – 60",
    highlights: [
      "Founder-led fireside sessions",
      "Outdoor collaboration missions",
      "Curated dinners with local artists",
    ],
  },
];

export const trips = [
  {
    id: "malpe-weekend",
    title: "Malpe Coastal Weekender",
    category: "Weekend Explorer",
    date: "12 – 13 Oct 2026",
    from: "Bengaluru",
    price: "₹8,900",
    spots: 4,
    image: expCoastal,
  },
  {
    id: "udupi-food-trail",
    title: "Udupi Hidden Food Trail",
    category: "Food Trails",
    date: "26 Oct 2026",
    from: "Mangaluru",
    price: "₹3,500",
    spots: 6,
    image: expFood,
  },
  {
    id: "kudlu-waterfall",
    title: "Kudlu Falls Monsoon Trek",
    category: "Waterfall Treks",
    date: "9 Nov 2026",
    from: "Udupi",
    price: "₹2,800",
    spots: 2,
    image: expWaterfall,
  },
  {
    id: "krishna-heritage",
    title: "Krishna Matha Heritage Walk",
    category: "Heritage Walks",
    date: "16 Nov 2026",
    from: "Udupi",
    price: "₹1,900",
    spots: 10,
    image: expHeritage,
  },
  {
    id: "kaup-sunrise",
    title: "Kaup Sunrise & Lighthouse Morning",
    category: "Sunrise",
    date: "23 Nov 2026",
    from: "Udupi",
    price: "₹1,400",
    spots: 8,
    image: expSunrise,
  },
  {
    id: "chikmagalur-estate",
    title: "Chikmagalur Estate Escape",
    category: "Coffee Estates",
    date: "6 – 8 Dec 2026",
    from: "Bengaluru",
    price: "₹14,500",
    spots: 5,
    image: expCoffee,
  },
  {
    id: "paryaya-festival",
    title: "Paryaya Festival Insider",
    category: "Festival Special",
    date: "18 Jan 2027",
    from: "Udupi",
    price: "₹4,200",
    spots: 3,
    image: expHeritage,
  },
];

export const gallery = [
  { src: galleryCulture, category: "Culture", alt: "Yakshagana performer" },
  { src: galleryNature, category: "Nature", alt: "St. Mary's Island" },
  { src: galleryPeople, category: "People", alt: "Travelers at sunset" },
  { src: expCoastal, category: "Adventure", alt: "Fishermen at sunrise" },
  { src: expFood, category: "Food", alt: "Banana leaf meal" },
  { src: expSunrise, category: "Memories", alt: "Sunset silhouette" },
  { src: expWaterfall, category: "Nature", alt: "Hidden waterfall" },
  { src: expCoffee, category: "Adventure", alt: "Coffee estate" },
];

export const posts = [
  {
    id: "70-year-eatery",
    title: "Behind the Scenes with Udupi's 70-Year-Old Eatery Founders",
    excerpt:
      "Long before Udupi hotels became a national obsession, one family kept a tiny wood-fired kitchen alive. We spent a morning at their stove.",
    category: "Local Stories",
    date: "Oct 4, 2026",
    image: blogEatery,
    readTime: "6 min read",
  },
  {
    id: "coastal-fishing-economics",
    title: "The Unspoken Economics of Coastal Fishing Villages",
    excerpt:
      "Between the trawler and the fish market lies an entire economy nobody writes about. Here's what a sunrise on Malpe beach taught us.",
    category: "Culture",
    date: "Sep 22, 2026",
    image: expCoastal,
    readTime: "8 min read",
  },
  {
    id: "yakshagana-nights",
    title: "Yakshagana Nights: Meeting the Artists Behind the Masks",
    excerpt:
      "The performance ends at 4 AM. The stories, however, keep going. A quiet conversation with a third-generation Yakshagana troupe.",
    category: "Culture",
    date: "Sep 9, 2026",
    image: galleryCulture,
    readTime: "5 min read",
  },
  {
    id: "chikmagalur-coffee",
    title: "A Chikmagalur Morning: From Bean to Filter Kaapi",
    excerpt:
      "What actually happens between the plant and your cup — told by the growers who've been doing it for four generations.",
    category: "Food & Heritage",
    date: "Aug 30, 2026",
    image: expCoffee,
    readTime: "7 min read",
  },
  {
    id: "hidden-waterfalls",
    title: "A Traveler's Guide to Karnataka's Hidden Waterfalls",
    excerpt:
      "Skip the guidebook lists. These are the falls the locals still hike to on Sunday mornings.",
    category: "Travel Guides",
    date: "Aug 12, 2026",
    image: expWaterfall,
    readTime: "9 min read",
  },
  {
    id: "tulu-culture",
    title: "Tulu, Not Just a Language: A Culture Explained",
    excerpt:
      "From Bhoota Kola to Kambala, the Tulu belt is one of India's most misunderstood cultural regions. A gentle primer.",
    category: "Culture",
    date: "Jul 28, 2026",
    image: expHeritage,
    readTime: "6 min read",
  },
];

export const testimonials = [
  {
    name: "Aditi Sharma",
    role: "Solo Traveler, Mumbai",
    rating: 5,
    quote:
      "Samvada took me to places Google Maps doesn't even know exist. The 4 AM boat with the fishermen is a memory I'll keep forever.",
  },
  {
    name: "Rahul & Meera",
    role: "Couple, Bengaluru",
    rating: 5,
    quote:
      "We've been to Udupi three times as 'tourists'. This was the first time we actually met the town. Beautifully curated.",
  },
  {
    name: "Karan Rao",
    role: "Startup Founder, Pune",
    rating: 5,
    quote:
      "Ran our team offsite with them. The 'meet a local entrepreneur' session hit harder than any workshop we've paid for.",
  },
];