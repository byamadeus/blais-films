// ─────────────────────────────────────────────────────────────────────────────
// Films data — sourced from Portfolio Content spreadsheet
// ─────────────────────────────────────────────────────────────────────────────
//
// IMAGES (add these yourself)
//   Posters  →  public/posters/<id>.png
//   Stills   →  public/stills/<id>.jpg  (hero)
//              public/stills/<id>-1.jpg  (grid)
//
// VIDEO
//   muxPlaybackId  — Mux ID for a background video hero (null = use heroStill)
//   movieUrl       — "Watch Film" button
//   trailerUrl     — optional trailer button
//   miniDocUrl     — optional behind-the-scenes link
//
// ─────────────────────────────────────────────────────────────────────────────

export const director = {
  name: 'Blais Cameron',
  roles: ['Director', 'Producer', 'Writer'],
  bio: 'Recognized by the 54 Hour Film Festival, Croatian International Film Festival, and others.',
  muxPlaybackId: 'b8UB6nXPTSQWgmcncf2SaGHVnATLIBns4FYS7ramxNg',
  heroStill: '/blais/hero-headshot.webp',
}

export const films = [
  {
    id: 'i-kissed-ur-mom',
    title: 'I Kissed Ur Mom',
    year: 2026,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'Before playing a song called "I Kissed Ur Mom" in his middle school talent show, Jason must face one of the most difficult challenges in life — slowly losing the people you love.',
    description: 'This film is based on two true stories from when I was a kid, about the moments in life when we are forced to grow up faster than we should.',
    poster: '/posters/i-kissed-ur-mom.webp',
    heroStill: '/stills/i-kissed-your-mom-0.webp',
    muxPlaybackId: '00VbLCe5r6K8Go01s5OykZN2Ysr7bA02JbnCvXz01rYPSXk',
    movieUrl: 'https://vimeo.com/1171818555',
    trailerUrl: null,
    miniDocUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Evyn J Barron', role: 'DP / Producer / Writer / Editor' },
    ],
    stills: [
      '/stills/i-kissed-your-mom-1.webp',
      '/stills/i-kissed-your-mom-2.webp',
      '/stills/i-kissed-your-mom-3.webp',
      '/stills/i-kissed-your-mom-4.webp',
    ],
  },
  // {
  //   id: 'the-view-was-everything',
  //   title: 'The View Was Everything',
  //   year: 2025,
  //   roles: ['Director', 'Producer', 'Writer'],
  //   logline: 'Confined to his car and juggling absurd gig jobs, Leo fights to fund a dream trip to Croatia for his terminally ill fiancée — until he must decide if a promise is still worth keeping alone.',
  //   description: 'This is a dual-perspective love story about presence, sacrifice, and grief. It\'s built on small, intimate moments and the idea that what you share with someone matters more than where you go.',
  //   poster: '/posters/the-view-was-everything.webp',
  //   heroStill: '/stills/the-view-was-everything-0.webp',
  //   muxPlaybackId: null,
  //   movieUrl: null,
  //   trailerUrl: null,
  //   miniDocUrl: null,
  //   awards: [],
  //   credits: [
  //     { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
  //     { name: 'Griffin Davis', role: 'DP' },
  //     { name: 'Evyn J Barron', role: 'Producer / Editor' },
  //   ],
  //   stills: [
  //     '/stills/the-view-was-everything-1.webp',
  //     '/stills/the-view-was-everything-2.webp',
  //     '/stills/the-view-was-everything-3.webp',
  //   ],
  // },
  
  {
    id: 'clocked-out',
    title: 'Clocked Out',
    year: 2026,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'A musical short film where a mundane work environment transforms into a stylized, music-driven experience.',
    description: 'This was about pushing scale under pressure — proving a full musical could be written, shot, and edited in 54 hours. It leans into heightened reality and creative ambition.',
    poster: '/posters/clocked-out.webp',
    heroStill: '/stills/clocked-out-0.webp',
    muxPlaybackId: '4dxiUp02Sq01c1006vZo7D00mHzWiDd2W302V42BMF00kI44Y',
    movieUrl: null,
    trailerUrl: null,
    miniDocUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Owen Westphal', role: 'DP' },
      { name: 'Evyn J Barron', role: 'Producer / Writer / Editor' },
    ],
    stills: [
      '/stills/clocked-out-1.webp',
      '/stills/clocked-out-2.webp',
      '/stills/clocked-out-3.webp',
      '/stills/clocked-out-4.webp',
      '/stills/clocked-out-5.webp',
    ],
  },
  
  {
    id: 'brothers-in-arms',
    title: 'Brothers In Arms',
    year: 2025,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'In the final days of WWII, two brothers — one trying to protect, the other trying to prove himself — are forced into an impossible decision.',
    description: 'Brothers in Arms was born out of a desire to challenge ourselves as storytellers emotionally. The 54-Hour Film Festival gave us a brutal constraint, but we saw it as an opportunity: to prove that even under extreme pressure, it\'s possible to tell a story that connects deeply with an audience.\n\nThis story of two brothers at war felt urgent and personal. It\'s about loyalty, sacrifice, and the weight of love in the most brutal circumstances. As someone who has lost people I love, I was drawn to the emotional truth in that final moment between them — when words fall away, and all that\'s left is connection.',
    poster: '/posters/brothers-in-arms-full.webp',
    heroStill: '/stills/brothers-in-arms-1941-2.webp',
    muxPlaybackId: null,
    movieUrl: 'https://vimeo.com/1093298686/e46e0199fb',
    trailerUrl: null,
    miniDocUrl: 'https://vimeo.com/1092980940/e7f577896c?fl=tl&fe=ec',
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Griffin Davis', role: 'DP' },
      { name: 'Evyn J Barron', role: 'Producer / Writer / Editor' },
    ],
    stills: [
      '/stills/brothers-in-arms-1941-1.webp',
      '/stills/brothers-in-arms-1941-2.webp',
      '/stills/brothers-in-arms-1944-3.webp',
      '/stills/brothers-in-arms-1941-4.webp',
      '/stills/brothers-in-arms-1944-5.webp',
      '/stills/brothers-in-arms-1941-6.webp',
    ],
  },
  
  {
    id: 'brothers-in-arms-1941',
    title: 'Brothers In Arms 1941',
    year: 2025,
    roles: ['Director', 'Producer', 'Writer'],
    logline: '',
    description: '',
    poster: '/posters/laurels-brothers-in-arms-1941.webp',
    heroStill: '/stills/brothers-in-arms-1941-0.webp',
    muxPlaybackId: 'RctscEvXwgLDJ9uP6HqO9OIANn3RIrWKe9q8zTz59kg',
    movieUrl: 'https://vimeo.com/1065915271/c0141de841',
    trailerUrl: null,
    miniDocUrl: null,
    awards: [
      { name: '54 Hour Film Festival', detail: 'Official Selection', year: 2025 },
    ],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Griffin Davis', role: 'DP' },
      { name: 'Evyn J Barron', role: 'Producer / Writer / Editor' },
    ],
    stills: [
      '/stills/brothers-in-arms-1941-1.webp',
      '/stills/brothers-in-arms-1941-2.webp',
      '/stills/brothers-in-arms-1941-3.webp',
      '/stills/brothers-in-arms-1941-4.webp',
      '/stills/brothers-in-arms-1941-5.webp',
      '/stills/brothers-in-arms-1941-6.webp',
      '/stills/brothers-in-arms-1941-7.webp',
    ],
  },
  {
    id: 'brothers-in-arms-1944',
    title: 'Brothers In Arms 1944',
    year: 2025,
    roles: ['Director', 'Producer', 'Writer'],
    logline: '',
    description: '',
    poster: '/posters/laurels-brothers-in-arms-1944.webp',
    heroStill: '/stills/brothers-in-arms-1944-0.webp',
    muxPlaybackId: 'zm3kDdk3GW9s1aWejQi3aE5s5gh00rDcv01nXg027CqTgY',
    movieUrl: 'https://vimeo.com/1065908056/89b46abe65',
    trailerUrl: null,
    miniDocUrl: null,
    awards: [
      { name: '54 Hour Film Festival', detail: 'Official Selection', year: 2025 },
    ],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Griffin Davis', role: 'DP' },
      { name: 'Evyn J Barron', role: 'Producer / Writer / Editor' },
    ],
    stills: [
      '/stills/brothers-in-arms-1944-1.webp',
      '/stills/brothers-in-arms-1944-2.webp',
      '/stills/brothers-in-arms-1944-3.webp',
      '/stills/brothers-in-arms-1944-4.webp',
      '/stills/brothers-in-arms-1944-5.webp',
      '/stills/brothers-in-arms-1944-6.webp',
      '/stills/brothers-in-arms-1944-7.webp',
    ],
  },
  
  {
    id: 'the-human-experience',
    title: 'The Human Experience',
    year: 2024,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'Old friends confront tensions and secrets from their past, rediscovering the significance of embracing change on their journey towards self-discovery.',
    description: 'In just 54 hours, my incredible team and I brought to life what I believe is truly meaningful. Drawing the genre of Coming of Age, we crafted a story about a group of friends reuniting after years apart, each grappling with their own struggles and confronting change. I am super proud of our film.\n\nWith over 60 teams competing in this 54 Hour Film Festival, we achieved 27 award nominations and won 11, including Best Student Directing and Best Student Film!',
    poster: '/posters/the-human-experience.webp',
    heroStill: '/stills/the-human-experience-0.webp',
    muxPlaybackId: null,
    movieUrl: 'https://vimeo.com/1174650177/419a330939',
    trailerUrl: 'https://youtu.be/VCTEEgvOzF8',
    miniDocUrl: 'https://youtu.be/0w_50_5PGfE',
    awards: [
      { name: '54 Hour Film Festival', detail: 'Best Student Directing, Best Student Film + 9 more', year: 2024 },
      { name: 'Croatian International Film Festival', detail: 'Official Selection', year: 2024 },
    ],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Sebastian Philbin', role: 'DP / Producer' },
      { name: 'Evyn J Barron', role: 'Gaffer / Editor / Colorist' },
      { name: 'Hayley Sites', role: 'Co-Writer' },
    ],
    stills: [
      '/stills/the-human-experience-1.webp',
      '/stills/the-human-experience-2.webp',
      '/stills/the-human-experience-3.webp',
      '/stills/the-human-experience-4.webp',
      '/stills/the-human-experience-5.webp',
    ],
  },
  // {
  //   id: 'train-tunnels',
  //   title: 'Train Tunnels',
  //   year: 2025,
  //   roles: ['Director', 'Producer'],
  //   logline: 'An XR Stage production.',
  //   description: '',
  //   poster: '/posters/train-tunnels.webp',
  //   heroStill: '/stills/train-tunnels.webp',
  //   muxPlaybackId: null,
  //   movieUrl: null,
  //   trailerUrl: null,
  //   miniDocUrl: null,
  //   awards: [],
  //   credits: [
  //     { name: 'Blais Cameron', role: 'Director / Producer' },
  //     { name: 'Charlie Villa', role: 'Collaborator' },
  //     { name: 'Hans Badou', role: 'Collaborator' },
  //   ],
  //   stills: [
  //     '/stills/train-tunnels-1.webp',
  //     '/stills/train-tunnels-2.webp',
  //     '/stills/train-tunnels-3.webp',
  //   ],
  // },
  
  // {
  //   id: 'mati-moja',
  //   title: 'Mati Moja',
  //   year: 2025,
  //   roles: ['Director', 'Producer', 'Writer'],
  //   logline: 'A daughter, thrilled to return to her mother — only to leave again. Because in the end, we always have to return to normal life.',
  //   description: 'Getting the opportunity to direct a film for a song this personal to Tajči Cameron was a privilege. We filmed around some of the most beautiful places in Croatia — it only felt fitting to bring this story about young Tajči and her mother to life on the very same land her family and ancestors grew up on in old Zagorje.\n\nSpecial thank you to Evyn J Barron, who took 8 hours of my crazy, shaky footage and turned it into a masterpiece.',
  //   poster: '/posters/mati-moja.webp',
  //   heroStill: '/stills/mati-moja-0.webp',
  //   muxPlaybackId: null,
  //   movieUrl: 'https://www.youtube.com/watch?v=CSCIboBXD_E',
  //   trailerUrl: null,
  //   miniDocUrl: null,
  //   awards: [],
  //   credits: [
  //     { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
  //     { name: 'Tajci Cameron', role: 'Artist' },
  //     { name: 'Evyn J Barron', role: 'Editor' },
  //   ],
  //   stills: [
  //     '/stills/mati-moja-1.webp',
  //     '/stills/mati-moja-2.webp',
  //     '/stills/mati-moja-3.webp',
  //     '/stills/mati-moja-4.webp',
  //     '/stills/mati-moja-6.webp',
  //     '/stills/mati-moja-8.webp',
  //   ],
  // },
]

export const commercials = [
  {
    id: 'mati-moja',
    title: 'Mati Moja',
    year: 2025,
    roles: ['Director', 'Producer', 'Writer'],
    genre: 'Music Video',
    overview: 'A daughter, thrilled to return to her mother — only to leave again. Because in the end, we always have to return to normal life.',
    blaisOverview: 'Getting the opportunity to direct a film for a song this personal to Tajči Cameron was a privilege. We filmed around some of the most beautiful places in Croatia — it only felt fitting to bring this story about young Tajči and her mother to life on the very same land her family and ancestors grew up on in old Zagorje.\n\nSpecial thank you to Evyn J Barron, who took 8 hours of my crazy, shaky footage and turned it into a masterpiece.',
    movieUrl: 'https://www.youtube.com/watch?v=CSCIboBXD_E',
    muxPlaybackId: null,
    thumbnail: '/thumbnails/mati-moja-0.webp',
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Tajci Cameron', role: 'Artist' },
      { name: 'Evyn J Barron', role: 'Editor' },
    ],
    awards: [],
    stills: [
      '/thumbnails/mati-moja-1.webp',
      '/thumbnails/mati-moja-2.webp',
      '/thumbnails/mati-moja-3.webp',
      '/thumbnails/mati-moja-4.webp',
    ],
  },
  // {
  //   id: 'berry-shelnutt-wedding',
  //   title: 'Berry + Shelnutt Wedding',
  //   year: 2024,
  //   roles: ['Director', 'CAM A', 'Editor'],
  //   genre: 'Wedding Video',
  //   overview: 'A cinematic wedding film capturing emotion and intimacy, focused on narrative storytelling. ',
  //   blaisOverview: 'This project helped me how to capture real, unscripted emotion. I had to stay ready for moments as they happened while still thinking like a storyteller. It really shaped how I approach working with people and preserving genuine experiences on camera.',
  //   movieUrl: 'https://vimeo.com/1065933435/1fa52d5a8d?fl=tl&fe=ec',
  //   muxPlaybackId: null,
  //   thumbnail: '/thumbnails/berry-shelnutt-wedding-0.webp',
  //   credits: [
  //     { name: 'Blais Cameron', role: 'Director / CAM A / Editor' },
  //     { name: 'Riley Morris', role: '' },
  //   ],
  //   awards: [],
  //   stills: [
  //     '/thumbnails/berry-shelnutt-wedding-1.webp',
  //     '/thumbnails/berry-shelnutt-wedding-2.webp',
  //     '/thumbnails/berry-shelnutt-wedding-3.webp',
  //     '/thumbnails/berry-shelnutt-wedding-4.webp',
  //   ],
  // },
  {
    id: 'helmet-safety',
    title: 'Helmet Safety PSA',
    year: 2023,
    roles: ['Director', 'DP'],
    genre: 'PSA Video',
    overview: 'A safety-focused PSA designed to raise awareness around the importance of wearing helmets, using a nontraditional video approach to make a straightforward message feel engaging and impactful.',
    blaisOverview: 'Created this video for class back in 2023, This was one of my first times really treating a PSA like a film. I focused on making it visually elevated while still keeping the message clear and direct. It pushed me to think about how style can actually strengthen a message.',
    movieUrl: 'https://youtu.be/s7BDr4lgt5c',
    muxPlaybackId: 'G42cJlOLz1OsRBdqvd00G01TEIVZtS3BQm5vpJ3883asY',
    thumbnail: '/thumbnails/helmet-0.webp',
    credits: [
      { name: 'Blais Cameron', role: 'Director / DP' },
      { name: 'Emmaline Warden', role: '' },
    ],
    awards: [],
    stills: [
      '/thumbnails/helmet-1.webp',
      '/thumbnails/helmet-2.webp',
      '/thumbnails/helmet-3.webp',
      '/thumbnails/helmet-4.webp',
    ],
  },
  {
    id: 'fhs-lip-dub-2023',
    title: 'FHS Lip Dub 2023',
    year: 2023,
    roles: ['Director', 'DP'],
    genre: 'Music Video',
    overview: 'The Franklin High School Admirals Present our 2023 LIP DUB. Made as a 10-year anniversary tribute to our amazing Rebels Dance Lip Dub back in 2013. Produced and Directed by Senior Vice President Emmaline Warden. Filmed and Edited by Blais Cameron. (all other credits at the end)',
    blaisOverview: 'This was a large-scale coordination project with a lot of moving parts. I learned how to organize people, plan movement, and keep energy high throughout the entire shoot. It was one of my first experiences leading something at this scale.',
    movieUrl: 'https://www.youtube.com/watch?v=x_t16-64DxM&list=RDx_t16-64DxM&start_radio=1',
    muxPlaybackId: null,
    thumbnail: '/thumbnails/fhs-lip-dub-2023-0.webp',
    credits: [
      { name: 'Blais Cameron', role: 'Director / DP' },
      { name: 'Emmaline Warden', role: '' },
    ],
    awards: [],
    stills: [
      '/thumbnails/fhs-lip-dub-2023-1.webp',
      '/thumbnails/fhs-lip-dub-2023-2.webp',
      '/thumbnails/fhs-lip-dub-2023-3.webp',
      '/thumbnails/fhs-lip-dub-2023-4.webp',
      '/thumbnails/fhs-lip-dub-2023-5.webp',
      '/thumbnails/fhs-lip-dub-2023-6.webp',
      '/thumbnails/fhs-lip-dub-2023-7.webp',
      '/thumbnails/fhs-lip-dub-2023-8.webp',
    ],
  },
  ]

// Helper: get a film by its URL slug
export function getFilm(id) {
  return films.find((f) => f.id === id)
}

// Helper: get a commercial by its URL slug
export function getCommercial(id) {
  return commercials.find((c) => c.id === id)
}