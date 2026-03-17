// ─────────────────────────────────────────────────────────────────────────────
// Films data
// ─────────────────────────────────────────────────────────────────────────────
//
// IMAGES
//   Put poster images in:  public/posters/<filename>
//   Put film stills in:    public/stills/<filename>
//   Reference them as:     '/posters/filename.png'  '/stills/filename.jpg'
//
// MUX VIDEO
//   Set muxPlaybackId to your Mux playback ID (from mux.com dashboard).
//   Leave as null to use a static still image for the hero instead.
//
// VIMEO
//   Set vimeoUrl to the full Vimeo link for the "Watch Film" button.
//   Set vimeoTrailerUrl for a separate trailer link if you have one.
//
// ─────────────────────────────────────────────────────────────────────────────

export const director = {
  name: 'Blais Cameron',
  roles: ['Director', 'Producer', 'Writer'],
  bio: 'He\'s been recognized by the 54 Hour Film Festival, Šibenik Film Festival, and others.',
  // Home hero: set a Mux playback ID for a background showreel,
  // or set heroStill to a static image path.
  muxPlaybackId: 'b8UB6nXPTSQWgmcncf2SaGHVnATLIBns4FYS7ramxNg',            // e.g. 'GNMq01L02VjSFXiYkzJtqWOhIFqvdGt01s'
  heroStill: '/stills/hero.jpg',  // fallback / static background
}

export const films = [
  {
    id: 'view-is-everything',
    title: 'The View Is Everything',
    year: 2025,
    duration: '12 min',
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'A gang of friends chase their last adventures from teen youth while grappling with the realities of adulthood as they gather around a crackling bonfire.',
    description: 'The human experience is about a gang of friends who have a fun time reminiscing about their adventures from teen youth while grappling with the realities of adulthood. As they gather around a crackling bonfire, the warmth of nostalgia envelops them.',
    poster: '/posters/the-view-streaming.png',
    heroStill: '/stills/.jpg',
    muxPlaybackId: null,          // set for a Mux video background on film hero
    vimeoUrl: 'https://vimeo.com/YOUR_CLOCKED_OUT_ID',
    vimeoTrailerUrl: null,
    awards: [
      { name: '54 Hour Film Festival', detail: 'Official Selection', year: 2024 },
      { name: 'Šibenik Film Festival', detail: 'Official Selection', year: 2024 },
    ],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Writer' },
      { name: 'Jack Nichols', role: 'Cinematographer' },
      { name: 'Jake Paul', role: 'Writer' },
    ],
    stills: [
      '/stills/clocked-out-2.jpg',
      '/stills/clocked-out-3.jpg',
    ],
  },
  {
    id: 'clocked-out',
    title: 'Clocked Out',
    year: 2024,
    duration: '12 min',
    roles: ['Director', 'Producer', 'Writer'],
    logline: 'A gang of friends chase their last adventures from teen youth while grappling with the realities of adulthood as they gather around a crackling bonfire.',
    description: 'The human experience is about a gang of friends who have a fun time reminiscing about their adventures from teen youth while grappling with the realities of adulthood. As they gather around a crackling bonfire, the warmth of nostalgia envelops them.',
    poster: '/posters/clocked-out-streaming.png',
    heroStill: '/stills/clockedout-still1.jpg',
    muxPlaybackId: null,          // set for a Mux video background on film hero
    vimeoUrl: 'https://vimeo.com/YOUR_CLOCKED_OUT_ID',
    vimeoTrailerUrl: null,
    awards: [
      { name: '54 Hour Film Festival', detail: 'Official Selection', year: 2024 },
      { name: 'Šibenik Film Festival', detail: 'Official Selection', year: 2024 },
    ],
    credits: [
      { name: 'Blais Cameron', role: 'Director / Writer' },
      { name: 'Jack Nichols', role: 'Cinematographer' },
      { name: 'Jake Paul', role: 'Writer' },
    ],
    stills: [
      '/stills/clocked-out-2.jpg',
      '/stills/clocked-out-3.jpg',
    ],
  },
  {
    id: 'kissed-ur-mom',
    title: 'Kissed Ur Mom',
    year: 2023,
    duration: '8 min',
    roles: ['Director', 'Producer'],
    logline: 'A short description of what this film is about.',
    description: 'A longer description of the film goes here. Replace this with your actual film description.',
    poster: '/posters/poster-kissedurmom-streaming.png',
    heroStill: '/stills/kym-still1.jpg',
    muxPlaybackId: null,
    vimeoUrl: 'https://vimeo.com/YOUR_KISSED_UR_MOM_ID',
    vimeoTrailerUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director' },
    ],
    stills: [
      '/stills/kissed-ur-mom-1.jpg',
      '/stills/kissed-ur-mom-2.jpg',
      '/stills/kissed-ur-mom-3.jpg',
    ],
  },
  {
    id: 'brothers-in-arms-1941',
    title: 'Brothers In Arms (1941)',
    year: 2025,
    duration: '# min',
    roles: ['Director', 'Writer'],
    logline: 'A short description of what this film is about.',
    description: 'A longer description of the film goes here. Replace this with your actual film description.',
    poster: '/posters/bia-2-streaming.png',
    heroStill: '/stills/bia-2-still1.jpg',
    muxPlaybackId: null,
    vimeoUrl: 'https://vimeo.com/YOUR_KISSED_UR_MOM_ID',
    vimeoTrailerUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director' },
    ],
    stills: [
      '/stills/kissed-ur-mom-1.jpg',
      '/stills/kissed-ur-mom-2.jpg',
      '/stills/kissed-ur-mom-3.jpg',
    ],
  },
  {
    id: 'brothers-in-arms-1944',
    title: 'Brothers In Arms (1944)',
    year: 2025,
    duration: '# min',
    roles: ['Director', 'Writer'],
    logline: 'A short description of what this film is about.',
    description: 'A longer description of the film goes here. Replace this with your actual film description.',
    poster: '/posters/bia-1-streaming.png',
    heroStill: '/stills/bia-1-still1.jpg',
    muxPlaybackId: null,
    vimeoUrl: 'https://vimeo.com/YOUR_KISSED_UR_MOM_ID',
    vimeoTrailerUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director' },
    ],
    stills: [
      '/stills/kissed-ur-mom-1.jpg',
      '/stills/kissed-ur-mom-2.jpg',
      '/stills/kissed-ur-mom-3.jpg',
    ],
  },
  {
    id: 'placeholder',
    title: 'PLACEHOLDER',
    year: 2025,
    duration: '20 min',
    roles: ['Director', 'Producer'],
    logline: 'A short description of what this film is about.',
    description: 'A longer description of the film goes here. Replace this with your actual film description.',
    poster: '',
    heroStill: '',
    muxPlaybackId: null,
    vimeoUrl: '',
    vimeoTrailerUrl: null,
    awards: [],
    credits: [
      { name: 'Blais Cameron', role: 'Director' },
    ],
    stills: [
      '/stills/kissed-ur-mom-1.jpg',
      '/stills/kissed-ur-mom-2.jpg',
      '/stills/kissed-ur-mom-3.jpg',
    ],
  },
]

// Helper: get a film by its URL slug
export function getFilm(id) {
  return films.find((f) => f.id === id)
}
