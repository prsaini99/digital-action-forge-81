
import { CaseStudyData } from '../components/CaseStudyDetail';

export const caseStudies: CaseStudyData[] = [
  {
    id: 'bmw-mumbai',
    title: 'BMW Mumbai',
    description: 'High-quality lead generation boosting dealership preference through strategic digital campaigns.',
    image: '/images/case-studies/bmw-case-study.jpg',
    category: 'Performance Marketing',
    challenge: "BMW Mumbai was facing intensified competition in the luxury car segment, with declining market share and lead quality. Traditional advertising channels were yielding diminishing returns, and they needed to optimize their digital presence to attract qualified leads specifically interested in BMW's premium offerings. The client sought a performance marketing strategy that would not only increase lead volume but also improve lead quality and conversion rates.",
    solution: "We implemented a comprehensive performance marketing strategy targeting high-net-worth individuals in Mumbai and surrounding areas. Our approach included highly targeted paid search campaigns, strategic display advertising on premium websites, and sophisticated remarketing funnels. We developed custom landing pages with compelling offers and streamlined lead capture forms. Additionally, we leveraged data analytics to continuously optimize campaigns, focusing budget on the highest-performing channels and demographics.",
    results: [
      'Increased qualified leads by 45% within the first quarter',
      'Improved dealership preference metrics by 32% among target demographics',
      'Reduced cost per acquisition by 30% through optimized campaign targeting',
      'Achieved 22% higher conversion rates from lead to test drive',
      'Delivered 3.5x ROI on marketing spend'
    ],
    testimonial: {
      quote: "The digital campaign strategy developed for our dealership has transformed our lead generation approach. We're now connecting with the right customers at the right time, resulting in higher conversion rates and more efficient marketing spend.",
      author: "Raj Sharma",
      position: "Marketing Director, BMW Mumbai"
    },
    stats: [
      {
        label: "Increase in Qualified Leads",
        value: "45",
        suffix: "%"
      },
      {
        label: "Reduction in Cost per Acquisition",
        value: "30",
        suffix: "%"
      },
      {
        label: "ROI on Marketing Spend",
        value: "3.5",
        suffix: "x"
      }
    ],
    gallery: [
      '/images/case-studies/bmw-gallery-1.jpg',
      '/images/case-studies/bmw-gallery-2.jpg',
      '/images/case-studies/bmw-gallery-3.jpg',
    ]
  },
  {
    id: 'aster-pharmacy-dubai',
    title: 'Aster Pharmacy Dubai',
    description: '15% revenue growth in 4 months via Google Search Ads and strategic digital marketing.',
    image: '/images/case-studies/aster-case-study.jpg',
    category: 'Digital Advertising',
    challenge: "Aster Pharmacy, a leading pharmacy chain in Dubai, was struggling to stand out in an increasingly competitive healthcare market. Despite having multiple physical locations, their online presence wasn't generating sufficient traffic or conversions. They needed a comprehensive digital strategy to increase visibility, drive online sales, and support in-store traffic in a market where consumers were increasingly researching health products online before making purchase decisions.",
    solution: "We developed a multi-channel digital advertising strategy centered around Google Search Ads to capture high-intent users actively searching for pharmacy products and services. This was supported by display advertising, local SEO optimization for each store location, and targeted social media campaigns. We implemented advanced audience segmentation to deliver personalized messaging based on user behavior and preferences. Additionally, we created a measurement framework to track online-to-offline conversions, allowing for continuous optimization of campaign performance.",
    results: [
      '15% revenue growth achieved in just 4 months',
      '78% increase in online traffic to the Aster Pharmacy website',
      '42% improvement in conversion rate for the online store',
      '35% increase in in-store visits attributed to digital campaigns',
      'Successfully established Aster as a digital leader in the pharmacy sector'
    ],
    testimonial: {
      quote: "The digital marketing transformation has significantly impacted our business growth. The strategic approach not only increased our online visibility but also translated into meaningful revenue growth that exceeded our expectations.",
      author: "Dr. Azad Moopen",
      position: "Managing Director, Aster DM Healthcare"
    },
    stats: [
      {
        label: "Revenue Growth",
        value: "15",
        suffix: "%"
      },
      {
        label: "Increase in Website Traffic",
        value: "78",
        suffix: "%"
      },
      {
        label: "Improvement in Conversion Rate",
        value: "42",
        suffix: "%"
      }
    ],
    gallery: [
      '/images/case-studies/aster-gallery-1.jpg',
      '/images/case-studies/aster-gallery-2.jpg',
      '/images/case-studies/aster-gallery-3.jpg',
    ]
  },
  {
    id: 'damac-lagoons-dubai',
    title: 'DAMAC Lagoons Dubai',
    description: 'Sold 65% of Phase 1 units in 6 months with targeted ads, influencer marketing, and AI-assisted lead nurturing.',
    image: '/images/case-studies/damac-case-study.jpg',
    category: 'Integrated Marketing',
    challenge: "DAMAC Properties launched their ambitious Lagoons project in Dubai during a competitive period in the luxury real estate market. They faced the challenge of differentiating this new Mediterranean-inspired community from other high-end developments in the area. Additionally, they needed to attract both local and international investors during a time when global economic uncertainties were affecting investment decisions. The goal was to achieve rapid pre-sales for Phase 1 units while building long-term brand positioning for subsequent phases.",
    solution: "We implemented a comprehensive integrated marketing approach combining digital, traditional, and experiential channels. This included targeted programmatic advertising across multiple platforms, strategic partnerships with luxury lifestyle influencers, immersive virtual reality experiences of the property, and AI-assisted lead nurturing workflows. We also developed exclusive launch events for high-net-worth individuals and created compelling content highlighting the unique Mediterranean-inspired lifestyle offered by the development. The campaign was further enhanced by dynamic retargeting and sophisticated CRM integration to ensure consistent communication with prospects.",
    results: [
      '65% of Phase 1 units sold within 6 months of launch',
      'Generated over 12,000 qualified leads from target markets',
      'Achieved a 28% conversion rate from qualified leads to sales',
      'Reduced average sales cycle by 40% through AI-assisted lead nurturing',
      'Created a 15,000+ strong database of potential buyers for future phases'
    ],
    testimonial: {
      quote: "The integrated campaign for DAMAC Lagoons exceeded our expectations in both lead quality and conversion rates. The innovative approach to combining digital targeting with experiential elements created a compelling proposition for our buyers.",
      author: "Hussain Sajwani",
      position: "Chairman, DAMAC Properties"
    },
    stats: [
      {
        label: "Phase 1 Units Sold",
        value: "65",
        suffix: "%"
      },
      {
        label: "Qualified Leads Generated",
        value: "12",
        suffix: "k+"
      },
      {
        label: "Lead to Sale Conversion",
        value: "28",
        suffix: "%"
      }
    ],
    gallery: [
      '/images/case-studies/damac-gallery-1.jpg',
      '/images/case-studies/damac-gallery-2.jpg',
      '/images/case-studies/damac-gallery-3.jpg',
    ]
  },
  {
    id: 'urban-oasis-missoni',
    title: 'Urban Oasis by Missoni',
    description: '75% pre-completion sales, extensive luxury branding, and international investor outreach.',
    image: '/images/case-studies/urban-oasis-case-study.jpg',
    category: 'Luxury Marketing',
    challenge: "Urban Oasis, a luxury real estate development featuring interiors by fashion brand Missoni, needed to establish a distinctive brand identity in Dubai's saturated high-end property market. The project required attracting ultra-high-net-worth individuals from both regional and international markets, emphasizing the unique fashion-branded living experience. The challenge was to communicate the premium value proposition of this collaboration while achieving substantial pre-completion sales in a market where buyers had numerous luxury options.",
    solution: "We developed an exclusive luxury marketing campaign that highlighted the unique Missoni design elements and lifestyle offering. This included creating a bespoke brand identity that seamlessly integrated both real estate and fashion elements, producing high-end video and photography content, and designing an immersive sales center experience. We implemented targeted outreach to international investors through private banking channels, luxury publications, and exclusive events in key global cities. Digital elements included sophisticated 3D visualizations, virtual tours, and personalized digital brochures sent to prospective buyers. The campaign leveraged the fashion credentials of Missoni while emphasizing the investment potential of the development.",
    results: [
      '75% pre-completion sales achieved within 9 months',
      'Successfully attracted buyers from 27 different countries',
      'Generated premium pricing 18% above market average for comparable properties',
      'Created significant earned media coverage valued at over $2.8 million',
      'Established a new benchmark for fashion-branded real estate in the region'
    ],
    testimonial: {
      quote: "The marketing strategy perfectly captured the essence of both Urban Oasis and Missoni, creating a compelling narrative that resonated with our target audience of discerning luxury buyers. The results speak for themselves - record sales in a challenging market.",
      author: "Marco Missoni",
      position: "Creative Director, Missoni Home"
    },
    stats: [
      {
        label: "Pre-completion Sales",
        value: "75",
        suffix: "%"
      },
      {
        label: "Countries Represented",
        value: "27",
        prefix: ""
      },
      {
        label: "Premium Above Market Average",
        value: "18",
        suffix: "%"
      }
    ],
    gallery: [
      '/images/case-studies/urban-gallery-1.jpg',
      '/images/case-studies/urban-gallery-2.jpg',
      '/images/case-studies/urban-gallery-3.jpg',
    ]
  },
  {
    id: 'jbl-harman-campaign',
    title: 'JBL Harman Campaign',
    description: '#MuteTheWorld campaign promoting noise-cancellation headphones, enhancing brand visibility.',
    image: '/images/case-studies/jbl-case-study.jpg',
    category: 'Social Media',
    challenge: "JBL Harman was launching their new line of premium noise-cancellation headphones in a highly competitive audio market dominated by established players. They needed to cut through the noise (literally and figuratively) to reach their target audience of young urban professionals and audio enthusiasts. The campaign needed to not only drive awareness and sales for the new product line but also strengthen JBL's position as an innovative leader in audio technology.",
    solution: "We created the #MuteTheWorld social media campaign, a multi-platform initiative centered around the concept of finding moments of peace and focus in today's noisy world. The campaign featured a series of highly shareable short-form videos showing people in chaotic urban environments instantly transitioning to serene states upon activating the noise-cancellation feature. We partnered with popular content creators across music, productivity, and travel niches to demonstrate real-world applications. The campaign included interactive Instagram filters allowing users to \"mute\" their surroundings virtually, a TikTok challenge, and targeted paid social campaigns.",
    results: [
      'Generated over 50 million impressions across social platforms',
      'Achieved 380% increase in social engagement compared to previous campaigns',
      '28% increase in direct website traffic during the campaign period',
      '#MuteTheWorld hashtag used in over 120,000 user-generated posts',
      'Contributed to a 35% sales increase for the featured headphone models'
    ],
    testimonial: {
      quote: "The #MuteTheWorld campaign perfectly captured the essence of our noise-cancellation technology while creating a culturally relevant moment that resonated with our audience. The creative approach delivered exceptional engagement metrics and tangible business results.",
      author: "Ralph Santana",
      position: "Chief Marketing Officer, HARMAN International"
    },
    stats: [
      {
        label: "Social Impressions",
        value: "50",
        suffix: "M+"
      },
      {
        label: "Increase in Engagement",
        value: "380",
        suffix: "%"
      },
      {
        label: "Sales Increase",
        value: "35",
        suffix: "%"
      }
    ],
    gallery: [
      '/images/case-studies/jbl-gallery-1.jpg',
      '/images/case-studies/jbl-gallery-2.jpg',
      '/images/case-studies/jbl-gallery-3.jpg',
    ]
  },
  {
    id: 'kohinoor-basmati-rice',
    title: 'Kohinoor Basmati Rice',
    description: 'Transformed brand engagement through recipe-driven social media content, significantly increasing follower numbers.',
    image: '/images/case-studies/kohinoor-case-study.jpg',
    category: 'Content Marketing',
    challenge: "Kohinoor Basmati Rice was struggling to differentiate itself in a crowded market dominated by commodity-driven messaging. Despite having a premium product, the brand lacked emotional connection with consumers and faced declining market share. They needed to transform their digital presence from traditional product-focused advertising to engaging content that would resonate with modern consumers, particularly those seeking authentic culinary experiences.",
    solution: "We developed a comprehensive content marketing strategy centered around authentic recipes and culinary storytelling. This included creating a rich content hub featuring step-by-step video recipes, chef collaborations, and cultural stories behind iconic rice dishes. We implemented a content calendar aligned with seasonal events and food trends, producing high-quality food photography and videos optimized for each social platform. The strategy also incorporated user-generated content campaigns encouraging customers to share their Kohinoor rice creations, as well as partnerships with food bloggers and influencers who created authentic content featuring the brand.",
    results: [
      'Grew social media following from 25,000 to over 200,000 across platforms',
      'Achieved 425% increase in social engagement rates',
      'Generated over 1.5 million video views of recipe content',
      'Increased website traffic by 180% through content-driven referrals',
      'Contributed to a 22% increase in year-on-year sales'
    ],
    testimonial: {
      quote: "The content strategy completely transformed how consumers perceive and interact with our brand. By focusing on recipes and culinary experiences rather than just product features, we've built a community of engaged customers who now see Kohinoor as an essential part of their cooking journey.",
      author: "Anil Mittal",
      position: "Chairman, Kohinoor Foods Ltd"
    },
    stats: [
      {
        label: "Social Media Growth",
        value: "8",
        suffix: "x"
      },
      {
        label: "Increase in Engagement",
        value: "425",
        suffix: "%"
      },
      {
        label: "Video Content Views",
        value: "1.5",
        suffix: "M+"
      }
    ],
    gallery: [
      '/images/case-studies/kohinoor-gallery-1.jpg',
      '/images/case-studies/kohinoor-gallery-2.jpg',
      '/images/case-studies/kohinoor-gallery-3.jpg',
    ]
  }
];

// Helper function to find a case study by ID
export const getCaseStudyById = (id: string): CaseStudyData | undefined => {
  return caseStudies.find(study => study.id === id);
};
