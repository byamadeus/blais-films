import { useEffect, useState } from 'react'
import { useKeanu } from '../context/KeanuContext'
import calligraphyData from '../data/calligraphy.json'

// ─── Color & helpers ──────────────────────────────────────────────────────────
const C   = 'rgba(242, 236, 215, 0.90)'   // warm chalk/pencil color
const CSub = 'rgba(242, 236, 215, 0.62)'  // sub-label color
const SW  = 2.0                            // default stroke width
const DASH = 2800                          // dasharray for hand-drawn paths

// Hand-drawn path that animates in like a pencil stroke
function P({ d, delay = 0, dur = 650, sw = SW, fill = 'none' }) {
  return (
    <path
      d={d}
      stroke={C}
      strokeWidth={sw}
      fill={fill === 'none' ? 'none' : C}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        strokeDasharray: DASH,
        strokeDashoffset: DASH,
        animation: `keanu-draw ${dur}ms ease-out ${delay}ms forwards`,
      }}
    />
  )
}

// Stubble micro-mark
function Stub({ x1, y1, x2, y2, delay = 0 }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={C} strokeWidth={1.4} strokeLinecap="round"
      style={{ strokeDasharray: 20, strokeDashoffset: 20,
               animation: `keanu-draw 120ms ease-out ${delay}ms forwards` }}
    />
  )
}

// Rough hand-drawn heart
function Heart({ cx, cy, size = 18, delay = 0 }) {
  const s = size / 20
  const d = `M${cx},${cy + 2*s} C${cx},${cy-3*s} ${cx-10*s},${cy-6*s} ${cx-10*s},${cy} C${cx-10*s},${cy+5*s} ${cx},${cy+11*s} ${cx},${cy+11*s} C${cx},${cy+11*s} ${cx+10*s},${cy+5*s} ${cx+10*s},${cy} C${cx+10*s},${cy-6*s} ${cx},${cy-3*s} ${cx},${cy+2*s}`
  return (
    <path d={d} stroke={C} strokeWidth={1.8} fill="none" strokeLinecap="round"
      style={{ strokeDasharray: 200, strokeDashoffset: 200,
               animation: `keanu-draw 320ms ease-out ${delay}ms forwards` }}
    />
  )
}

// Rough asterisk/star
function Star({ cx, cy, r = 14, delay = 0 }) {
  return (
    <>
      {[0,60,120,180,240,300].map((deg, i) => {
        const rad = deg * Math.PI / 180
        return (
          <line key={i} x1={cx} y1={cy}
            x2={cx + Math.cos(rad)*r} y2={cy + Math.sin(rad)*r}
            stroke={C} strokeWidth={1.8} strokeLinecap="round"
            style={{ strokeDasharray: 30, strokeDashoffset: 30,
                     animation: `keanu-draw 100ms ease-out ${delay + i*40}ms forwards` }}
          />
        )
      })}
    </>
  )
}

// ─── Calligraphy text group from calligrapher.ai paths ────────────────────────
// targetCx/Cy: center in overlay coords  targetW: desired width in overlay coords
// rotation: degrees (applied around target center)
function CalText({ id, targetCx, targetCy, targetW, rotation = 0, startDelay = 0, color = C }) {
  const item = calligraphyData[id]
  if (!item?.paths?.length || !item.bbox) return null

  const { x, y, w, h } = item.bbox
  const origCx = x + w / 2
  const origCy = y + h / 2
  const scale  = targetW / w
  const dx     = targetCx - origCx * scale
  const dy     = targetCy - origCy * scale

  const baseTransform = `translate(${dx.toFixed(2)}, ${dy.toFixed(2)}) scale(${scale.toFixed(4)})`
  const outerTransform = rotation !== 0
    ? `rotate(${rotation}, ${targetCx.toFixed(2)}, ${targetCy.toFixed(2)})`
    : ''

  return (
    <g transform={outerTransform || undefined}>
      <g transform={baseTransform}>
        {item.paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill={color}
            stroke={color}
            strokeWidth={0.3}
            style={{
              opacity: 0,
              animation: `keanu-fade 160ms ease-out ${startDelay + i * 45}ms forwards`,
            }}
          />
        ))}
      </g>
    </g>
  )
}

// ─── Main overlay ─────────────────────────────────────────────────────────────
export default function KeanuOverlay() {
  const { isKeanuMode, setIsKeanuMode } = useKeanu()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isKeanuMode) {
      const t = setTimeout(() => setMounted(true), 20)
      return () => clearTimeout(t)
    } else {
      setMounted(false)
    }
  }, [isKeanuMode])

  useEffect(() => {
    if (!isKeanuMode) return
    const onKey = e => { if (e.key === 'Escape') setIsKeanuMode(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isKeanuMode, setIsKeanuMode])

  if (!isKeanuMode) return null

  return (
    <div style={{ position:'fixed', inset:0, zIndex:9998, pointerEvents:'none', overflow:'hidden' }}>

      {/* Faint paper-tone tint */}
      <div style={{ position:'absolute', inset:0, background:'rgba(255,252,240,0.025)', pointerEvents:'none' }} />

      <svg
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}
      >
        <defs>
          <style>{`
            @keyframes keanu-draw { to { stroke-dashoffset: 0; } }
            @keyframes keanu-fade { from { opacity: 0; } to { opacity: 1; } }
          `}</style>

          {/* Pencil/chalk texture filter — applied to hand-drawn sketch elements */}
          <filter id="kpf" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3"
              stitchTiles="stitch" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6"
              xChannelSelector="R" yChannelSelector="G"/>
          </filter>

          {/* Lighter filter for calligraphy text paths */}
          <filter id="kpf-light" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.70" numOctaves="2"
              stitchTiles="stitch" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.9"
              xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>

        {/* ─── KEANU CARICATURE + HAND-DRAWN SKETCH (pencil filter) ─────────── */}
        <g filter="url(#kpf)">

          {/* Hair — right side */}
          <P d="M1172,298 C1192,312 1206,342 1208,375 C1210,408 1202,445 1200,480 C1198,515 1203,548 1210,578" delay={0} dur={500} />
          {/* Hair — left side */}
          <P d="M1070,298 C1050,312 1035,342 1033,375 C1031,408 1038,445 1035,480 C1032,515 1026,548 1018,578" delay={80} dur={500} />
          {/* Hair — top swept back */}
          <P d="M1082,268 C1066,248 1070,226 1083,215 C1096,204 1115,202 1130,210 C1145,218 1152,234 1148,252 C1146,262 1140,272 1130,278" delay={160} dur={420} />
          {/* Wispy strands */}
          <P d="M1082,268 C1073,250 1072,234 1080,222" delay={260} dur={220} sw={1.4} />
          <P d="M1106,264 C1100,244 1102,226 1112,218" delay={320} dur={200} sw={1.4} />
          <P d="M1130,268 C1142,248 1146,230 1138,220" delay={380} dur={200} sw={1.4} />

          {/* Head oval */}
          <P d="M1082,268 C1056,276 1042,302 1046,335 C1050,368 1068,392 1096,400 C1124,408 1156,398 1170,376 C1184,354 1178,318 1160,296 C1148,280 1130,266 1108,264 C1096,262 1088,264 1082,268" delay={440} dur={600} sw={2.2} />

          {/* Sunglasses */}
          <P d="M1058,318 L1060,338 L1096,336 L1094,316 Z" delay={700} dur={280} sw={2.2} />
          <P d="M1104,316 L1102,336 L1140,334 L1142,314 Z" delay={760} dur={280} sw={2.2} />
          <P d="M1096,327 L1102,326" delay={820} dur={100} sw={1.6} />
          <P d="M1058,327 L1040,324" delay={840} dur={120} sw={1.6} />
          <P d="M1140,324 L1158,320" delay={860} dur={120} sw={1.6} />

          {/* Nose */}
          <P d="M1118,350 C1120,356 1122,364 1120,370 M1114,370 C1118,374 1124,374 1128,370" delay={880} dur={180} sw={1.4} />
          {/* Mouth */}
          <P d="M1098,384 C1108,390 1120,392 1132,388 C1140,385 1148,380 1150,374" delay={900} dur={200} sw={1.4} />

          {/* Stubble */}
          {[
            [1070,362,1074,360],[1080,368,1083,366],[1090,360,1094,362],[1100,365,1104,363],
            [1112,362,1116,360],[1124,366,1128,364],[1136,362,1140,364],[1148,368,1152,366],
            [1160,360,1163,362],[1073,376,1076,374],[1085,380,1088,378],[1098,376,1101,378],
            [1110,380,1114,378],[1122,376,1126,378],[1134,380,1138,378],[1146,376,1150,378],
            [1158,378,1162,376],[1080,390,1084,388],[1095,393,1099,391],[1112,392,1116,390],
            [1128,393,1132,391],[1144,392,1148,390],
          ].map(([x1,y1,x2,y2], i) => (
            <Stub key={i} x1={x1} y1={y1} x2={x2} y2={y2} delay={950 + i * 7} />
          ))}

          {/* Neck */}
          <P d="M1086,400 L1080,440" delay={1100} dur={160} sw={1.8} />
          <P d="M1140,400 L1146,438" delay={1110} dur={160} sw={1.8} />

          {/* Jacket collar */}
          <P d="M1080,440 C1072,452 1062,468 1050,485" delay={1120} dur={240} sw={2.0} />
          <P d="M1146,438 C1156,450 1168,466 1182,483" delay={1140} dur={240} sw={2.0} />

          {/* Jacket body — left & right */}
          <P d="M1050,485 C1038,510 1026,548 1016,590 L1006,648 L998,720 L992,860" delay={1160} dur={480} sw={2.2} />
          <P d="M1182,483 C1194,508 1208,546 1220,588 L1234,646 L1248,718 L1258,860" delay={1180} dur={480} sw={2.2} />
          <P d="M992,860 L1258,860" delay={1360} dur={300} sw={2.0} />

          {/* Inner lapels */}
          <P d="M1098,448 C1086,474 1072,502 1058,530" delay={1200} dur={300} sw={1.6} />
          <P d="M1130,448 C1143,474 1158,502 1172,528" delay={1220} dur={300} sw={1.6} />

          {/* Left arm extended pointing at films */}
          <P d="M1050,485 C1026,478 998,474 968,474 C938,474 908,478 878,484" delay={1240} dur={400} sw={2.0} />
          <P d="M878,484 C854,488 830,492 806,494" delay={1360} dur={280} sw={2.0} />
          <P d="M806,494 C792,493 780,492 768,492 L752,491 L736,490" delay={1480} dur={240} sw={2.0} />
          <P d="M768,492 C770,500 768,508 762,512" delay={1560} dur={160} sw={1.4} />
          <P d="M758,492 C760,500 758,508 752,512" delay={1580} dur={160} sw={1.4} />

          {/* Speech bubble outline */}
          <P d="M862,220 C838,212 815,222 810,242 C805,262 820,286 845,296 C870,306 908,308 940,300 C972,292 995,276 996,255 C997,234 975,218 952,214 C929,210 884,222 862,220" delay={900} dur={520} sw={1.8} />
          {/* Bubble tail */}
          <P d="M952,300 C960,316 974,330 998,342" delay={1100} dur={200} sw={1.8} />

          {/* ── Scattered decorations ─────────────────────────────────────────── */}
          {/* Film strip */}
          <P d="M638,330 L638,370 L700,370 L700,330 Z" delay={2200} dur={300} sw={1.6} />
          <P d="M643,335 L650,335 L650,340 L643,340 Z" delay={2280} dur={120} sw={1.4} />
          <P d="M643,364 L650,364 L650,369 L643,369 Z" delay={2300} dur={120} sw={1.4} />
          <P d="M688,335 L695,335 L695,340 L688,340 Z" delay={2320} dur={120} sw={1.4} />
          <P d="M688,364 L695,364 L695,369 L688,369 Z" delay={2340} dur={120} sw={1.4} />
          <P d="M660,330 L660,370" delay={2360} dur={120} sw={1.2} />
          <P d="M676,330 L676,370" delay={2380} dur={120} sw={1.2} />
          <P d="M651,348 C656,356 663,358 668,354 C673,350 678,356 683,356 C688,356 691,352 691,350" delay={2400} dur={260} sw={1.4} />

          {/* Stray hearts */}
          <Heart cx={352} cy={112} size={22} delay={2450} />
          <Heart cx={775} cy={418} size={18} delay={2490} />
          <Heart cx={520} cy={605} size={20} delay={2530} />

          {/* Stars */}
          <Star cx={260} cy={136} r={16} delay={2560} />
          <Star cx={610} cy={520} r={12} delay={2620} />

          {/* Random pencil scribble lines */}
          <P d="M740,280 C748,276 754,280 758,278 C762,276 766,280 770,278" delay={2680} dur={200} sw={1.2} />
          <P d="M288,418 C292,414 298,418 303,416" delay={2720} dur={160} sw={1.2} />
          <P d="M180,340 C188,336 196,340 200,338" delay={2740} dur={160} sw={1.2} />

          {/* Annotation decorators */}
          <Star cx={94} cy={242} r={13} delay={1300} />
          <P d="M118,282 C180,280 240,281 316,279" delay={1430} dur={300} sw={1.4} />

          <Heart cx={72}  cy={453} size={16} delay={1540} />
          <Heart cx={96}  cy={456} size={16} delay={1570} />
          <Heart cx={120} cy={453} size={16} delay={1600} />
          <P d="M72,509 C150,507 240,508 348,506" delay={1760} dur={280} sw={1.4} />

          {/* Smiley for I Kissed Ur Mom */}
          <P d="M458,164 C441,164 433,172 433,180 C433,188 441,196 458,196 C475,196 483,188 483,180 C483,172 475,164 458,164" delay={1870} dur={320} sw={1.6} />
          <Stub x1={449} y1={176} x2={452} y2={174} delay={2000} />
          <Stub x1={465} y1={176} x2={468} y2={174} delay={2020} />
          <P d="M449,185 C452,191 464,191 467,185" delay={2040} dur={180} sw={1.6} />

        </g>

        {/* ─── CALLIGRAPHY TEXT (lighter filter) ─────────────────────────────── */}
        <g filter="url(#kpf-light)">

          {/* Speech bubble — "these slap" */}
          <CalText id="these-slap"
            targetCx={899} targetCy={254} targetW={118}
            rotation={0} startDelay={1180}
            color={C}
          />
          {/* Speech bubble — "— Keanu" */}
          <CalText id="keanu-label"
            targetCx={870} targetCy={278} targetW={94}
            rotation={-2} startDelay={1250}
            color={CSub}
          />

          {/* Annotation 1 — "Brothers in Arms" */}
          <CalText id="brothers"
            targetCx={218} targetCy={261} targetW={224}
            rotation={-3} startDelay={1360}
            color={C}
          />
          {/* Annotation 1 sub — "certified banger" */}
          <CalText id="certified"
            targetCx={200} targetCy={280} targetW={188}
            rotation={-3} startDelay={1500}
            color={CSub}
          />

          {/* Annotation 2 — "The Human Experience" */}
          <CalText id="human-exp"
            targetCx={218} targetCy={479} targetW={258}
            rotation={2} startDelay={1640}
            color={C}
          />
          {/* Annotation 2 sub — "greatest of all time" */}
          <CalText id="goat"
            targetCx={200} targetCy={498} targetW={234}
            rotation={2} startDelay={1780}
            color={CSub}
          />

          {/* Annotation 3 — "I Kissed Ur Mom" */}
          <CalText id="ikum"
            targetCx={593} targetCy={169} targetW={224}
            rotation={-4} startDelay={1920}
            color={C}
          />
          {/* Annotation 3 sub — "lmaooo" */}
          <CalText id="lmaooo"
            targetCx={563} targetCy={194} targetW={110}
            rotation={-4} startDelay={2060}
            color={CSub}
          />

          {/* "Keanu Was Here" watermark */}
          <CalText id="keanu-was-here"
            targetCx={118} targetCy={850} targetW={165}
            rotation={-2} startDelay={2820}
            color="rgba(242, 236, 215, 0.38)"
          />

        </g>
      </svg>

      {/* ── Dismiss button ──────────────────────────────────────────────────── */}
      <button
        onClick={() => setIsKeanuMode(false)}
        style={{
          position: 'absolute', top: 18, right: 72,
          pointerEvents: 'auto',
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(242,236,215,0.35)',
          borderRadius: '6px',
          color: 'rgba(242,236,215,0.65)',
          padding: '5px 14px',
          fontSize: '10px',
          cursor: 'pointer',
          fontFamily: "'Satoshi','Arial',sans-serif",
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          backdropFilter: 'blur(4px)',
          transition: 'color 0.2s, border-color 0.2s',
          opacity: 0,
          animation: 'keanu-fade 400ms ease-out 400ms forwards',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'rgba(242,236,215,1)'; e.currentTarget.style.borderColor = 'rgba(242,236,215,0.6)' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(242,236,215,0.65)'; e.currentTarget.style.borderColor = 'rgba(242,236,215,0.35)' }}
      >
        Back to Blais
      </button>

    </div>
  )
}
