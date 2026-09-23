import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const dir = path.resolve('public/media')
const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g)$/i.test(f))

let saved = 0
let count = 0

for (const file of files) {
  const input = path.join(dir, file)
  const base = file.replace(/\.(png|jpe?g)$/i, '')
  const out = path.join(dir, `${base}.webp`)

  // Prefer jpg as source when both exist (same pixels, avoid double work)
  if (/\.png$/i.test(file) && fs.existsSync(path.join(dir, `${base}.jpg`))) {
    continue
  }

  const before = fs.statSync(input).size
  await sharp(input)
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 72, effort: 4 })
    .toFile(out)

  const after = fs.statSync(out).size
  saved += Math.max(0, before - after)
  count++
  console.log(`${file} → ${base}.webp  ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`)
}

console.log(`\nWrote ${count} webp files, saved ~${Math.round(saved / 1024)}KB vs sources`)
