// scripts/images.mjs
// ─────────────────────────────────────────────────────────────────────────────
// Converts all JPG / PNG images in public/posters and public/stills to WebP.
// Runs automatically before `npm run dev` and `npm run build`.
//
// - Skips files that already have a matching .webp (won't re-convert)
// - Keeps the originals untouched (safe to re-run)
// - WebP quality 85 is a good balance of size and visual quality
// ─────────────────────────────────────────────────────────────────────────────

import sharp from 'sharp'
import { readdirSync, existsSync, statSync } from 'fs'
import { join, extname, basename } from 'path'

const DIRS    = ['public/posters', 'public/stills', 'public/thumbnails', 'public/blais']
const CONVERT = new Set(['.jpg', '.jpeg', '.png'])
const QUALITY = 85

async function convertDir(dir) {
  if (!existsSync(dir)) return

  for (const file of readdirSync(dir)) {
    const fullPath = join(dir, file)
    if (statSync(fullPath).isDirectory()) continue   // skip sub-folders

    const ext    = extname(file).toLowerCase()
    if (!CONVERT.has(ext)) continue                  // skip non-images

    const stem   = basename(file, ext)
    const outPath = join(dir, `${stem}.webp`)

    if (existsSync(outPath)) continue                // already converted

    try {
      await sharp(fullPath).webp({ quality: QUALITY }).toFile(outPath)
      console.log(`  ✓  ${outPath}`)
    } catch (err) {
      console.warn(`  ✗  ${fullPath}: ${err.message}`)
    }
  }
}

console.log('Converting images → WebP…')
for (const dir of DIRS) await convertDir(dir)
console.log('Done.\n')
