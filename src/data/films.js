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
//   vimeoUrl       — "Watch Film" button
//   trailerUrl     — optional trailer button
//   miniDocUrl     — optional behind-the-scenes link
//
// ─────────────────────────────────────────────────────────────────────────────

export const director = {
  name: 'Blais Cameron',
  roles: ['Director', 'Producer', 'Writer'],
  bio: 'Recognized by the 54 Hour Film Festival, Croatian International Film Festival, and others.',
  muxPlaybackId: 'b8UB6nXPTSQWgmcncf2SaGHVnATLIBns4FYS7ramxNg',
  heroStill: '/stills/hero.jpg',
}

export const films = [
  {
    id: 'the-human-experience',
    title: 'The Human Experience',
    year: 2024,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'Old friends confront tensions and secrets from their past, rediscovering the significance of embracing change on their journey towards self-discovery.',
    description: 'In just 54 hours, my incredible team and I brought to life what I believe is truly meaningful. Drawing the genre of Coming of Age, we crafted a story about a group of friends reuniting after years apart, each grappling with their own struggles and confronting change. I am super proud of our film.\n\nWith over 60 teams competing in this 54 Hour Film Festival, we achieved 27 award nominations and won 11, including Best Student Directing and Best Student Film!',
    poster: '/posters/the-human-experience.png',
    heroStill: '/stills/the-human-experience-0.jpg',
    muxPlaybackId: null,
    vimeoUrl: 'https://vimeo.com/1174650177/419a330939',
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
      '/stills/the-human-experience-1.jpg',
      '/stills/the-human-experience-2.jpg',
      '/stills/the-human-experience-3.jpg',
      '/stills/the-human-experience-4.jpg',
      '/stills/the-human-experience-5.jpg',
    ],
  },
  {
    id: 'brothers-in-arms',
    title: 'Brothers In Arms',
    year: 2025,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'In the final days of WWII, two brothers — one trying to protect, the other trying to prove himself — are forced into an impossible decision.',
    description: 'Brothers in Arms was born out of a desire to challenge ourselves as storytellers emotionally. The 54-Hour Film Festival gave us a brutal constraint, but we saw it as an opportunity: to prove that even under extreme pressure, it\'s possible to tell a story that connects deeply with an audience.\n\nThis story of two brothers at war felt urgent and personal. It\'s about loyalty, sacrifice, and the weight of love in the most brutal circumstances. As someone who has lost people I love, I was drawn to the emotional truth in that final moment between them — when words fall away, and all that\'s left is connection.',
    poster: '/posters/brothers-in-arms-1944.png',
    heroStill: '/stills/brothers-in-arms-1944-0.jpg',
    muxPlaybackId: null,
    vimeoUrl: 'https://vimeo.com/1093298686/e46e0199fb',
    trailerUrl: 'https://vimeo.com/1092980940/e7f577896c',
    miniDocUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Griffin Davis', role: 'DP' },
      { name: 'Evyn J Barron', role: 'Producer / Writer / Editor' },
    ],
    stills: [
      '/stills/brothers-in-arms-1944-1.jpg',
      '/stills/brothers-in-arms-1944-2.jpg',
      '/stills/brothers-in-arms-1944-3.jpg',
    ],
  },
  {
    id: 'brothers-in-arms-1941',
    title: 'Brothers In Arms 1941',
    year: 2025,
    roles: ['Director', 'Producer', 'Writer'],
    logline: '',
    description: '',
    poster: '/posters/laurels-brothers-in-arms-1941.png',
    heroStill: '/stills/brothers-in-arms-1941-0.jpg',
    muxPlaybackId: null,
    vimeoUrl: 'https://vimeo.com/1065915271/c0141de841',
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
      '/stills/brothers-in-arms-1941-1.jpg',
      '/stills/brothers-in-arms-1941-2.jpg',
      '/stills/brothers-in-arms-1941-3.jpg',
      '/stills/brothers-in-arms-1941-4.jpg',
      '/stills/brothers-in-arms-1941-5.jpg',
      '/stills/brothers-in-arms-1941-6.jpg',
      '/stills/brothers-in-arms-1941-7.jpg',
    ],
  },
  {
    id: 'brothers-in-arms-1944',
    title: 'Brothers In Arms 1944',
    year: 2025,
    roles: ['Director', 'Producer', 'Writer'],
    logline: '',
    description: '',
    poster: '/posters/laurels-brothers-in-arms-1944.png',
    heroStill: '/stills/brothers-in-arms-1944-0.jpg',
    muxPlaybackId: null,
    vimeoUrl: 'https://vimeo.com/1065908056/89b46abe65',
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
      '/stills/brothers-in-arms-1944-1.jpg',
      '/stills/brothers-in-arms-1944-2.jpg',
      '/stills/brothers-in-arms-1944-3.jpg',
    ],
  },
  {
    id: 'the-view-was-everything',
    title: 'The View Was Everything',
    year: 2025,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'Confined to his car and juggling absurd gig jobs, Leo fights to fund a dream trip to Croatia for his terminally ill fiancée — until he must decide if a promise is still worth keeping alone.',
    description: 'This is a dual-perspective love story about presence, sacrifice, and grief. It\'s built on small, intimate moments and the idea that what you share with someone matters more than where you go.',
    poster: '/posters/the-view-was-everything.png',
    heroStill: '/stills/the-view-was-everything-0.jpg',
    muxPlaybackId: null,
    vimeoUrl: null,
    trailerUrl: null,
    miniDocUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Griffin Davis', role: 'DP' },
      { name: 'Evyn J Barron', role: 'Producer / Editor' },
    ],
    stills: [
      '/stills/the-view-was-everything-1.jpg',
      '/stills/the-view-was-everything-2.jpg',
      '/stills/the-view-was-everything-3.jpg',
    ],
  },
  {
    id: 'mati-moja',
    title: 'Mati Moja',
    year: 2025,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'A daughter, thrilled to return to her mother — only to leave again. Because in the end, we always have to return to normal life.',
    description: 'Getting the opportunity to direct a film for a song this personal to Tajči Cameron was a privilege. We filmed around some of the most beautiful places in Croatia — it only felt fitting to bring this story about young Tajči and her mother to life on the very same land her family and ancestors grew up on in old Zagorje.\n\nSpecial thank you to Evyn J Barron, who took 8 hours of my crazy, shaky footage and turned it into a masterpiece.',
    poster: '/posters/mati-moja.png',
    heroStill: '/stills/mati-moja-0.jpg',
    muxPlaybackId: null,
    vimeoUrl: 'https://www.youtube.com/watch?v=CSCIboBXD_E',
    trailerUrl: null,
    miniDocUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Tajci Cameron', role: 'Artist' },
      { name: 'Evyn J Barron', role: 'Editor' },
    ],
    stills: [
      '/stills/mati-moja-1.jpg',
      '/stills/mati-moja-2.jpg',
      '/stills/mati-moja-3.jpg',
      '/stills/mati-moja-4.jpg',
      '/stills/mati-moja-6.jpg',
      '/stills/mati-moja-8.jpg',
    ],
  },
  {
    id: 'train-tunnels',
    title: 'Train Tunnels',
    year: 2025,
    roles: ['Director', 'Producer'],
    logline: 'An XR Stage production.',
    description: '',
    poster: '/posters/train-tunnels.png',
    heroStill: '/stills/train-tunnels.jpg',
    muxPlaybackId: null,
    vimeoUrl: null,
    trailerUrl: null,
    miniDocUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer' },
      { name: 'Charlie Villa', role: 'Collaborator' },
      { name: 'Hans Badou', role: 'Collaborator' },
    ],
    stills: [
      '/stills/train-tunnels-1.jpg',
      '/stills/train-tunnels-2.jpg',
      '/stills/train-tunnels-3.jpg',
    ],
  },
  {
    id: 'clocked-out',
    title: 'Clocked Out',
    year: 2026,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'A musical short film where a mundane work environment transforms into a stylized, music-driven experience.',
    description: 'This was about pushing scale under pressure — proving a full musical could be written, shot, and edited in 54 hours. It leans into heightened reality and creative ambition.',
    poster: '/posters/clocked-out.png',
    heroStill: '/stills/clocked-out-0.jpg',
    muxPlaybackId: null,
    vimeoUrl: null,
    trailerUrl: null,
    miniDocUrl: null,
    awards: [
      { name: '54 Hour Film Festival', detail: 'Official Selection', year: 2026 },
    ],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Owen Westphal', role: 'DP' },
      { name: 'Evyn J Barron', role: 'Producer / Writer / Editor' },
    ],
    stills: [
      '/stills/clocked-out-1.jpg',
      '/stills/clocked-out-2.jpg',
      '/stills/clocked-out-3.jpg',
      '/stills/clocked-out-4.jpg',
      '/stills/clocked-out-5.jpg',
    ],
  },
  {
    id: 'i-kissed-ur-mom',
    title: 'I Kissed Ur Mom',
    year: 2026,
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'Before playing a song called "I Kissed Ur Mom" in his middle school talent show, Jason must face one of the most difficult challenges in life — slowly losing the people you love.',
    description: 'This film is based on two true stories from when I was a kid, about the moments in life when we are forced to grow up faster than we should.',
    poster: '/posters/i-kissed-ur-mom.png',
    heroStill: '/stills/i-kissed-ur-mom-0.jpg',
    muxPlaybackId: null,
    vimeoUrl: 'https://vimeo.com/1171818555',
    trailerUrl: null,
    miniDocUrl: null,
    awards: [
      { name: '54 Hour Film Festival', detail: 'Official Selection', year: 2026 },
    ],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Producer / Writer' },
      { name: 'Evyn J Barron', role: 'DP / Producer / Writer / Editor' },
    ],
    stills: [
      '/stills/i-kissed-ur-mom-1.jpg',
      '/stills/i-kissed-ur-mom-2.jpg',
      '/stills/i-kissed-ur-mom-3.jpg',
      '/stills/i-kissed-ur-mom-4.jpg',
    ],
  },
]

// Helper: get a film by its URL slug
export function getFilm(id) {
  return films.find((f) => f.id === id)
}
