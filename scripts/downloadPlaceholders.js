import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');
const audioDir = path.resolve(__dirname, '../public/audio');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const images = [
  {
    name: 'mila-hero.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop'
  },
  {
    name: 'memory-1.jpg',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop'
  },
  {
    name: 'memory-2.jpg',
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=900&auto=format&fit=crop'
  },
  {
    name: 'memory-3.jpg',
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop'
  },
  {
    name: 'memory-4.jpg',
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=900&auto=format&fit=crop'
  },
  {
    name: 'photo-1.jpg',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'photo-2.jpg',
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'photo-3.jpg',
    url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'photo-4.jpg',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'photo-5.jpg',
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'photo-6.jpg',
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop'
  }
];

async function download() {
  console.log('Starting download of cinematic aesthetic photos...');
  for (const item of images) {
    const dest = path.join(imagesDir, item.name);
    // Don't overwrite if file already exists (e.g. if user placed their own)
    if (fs.existsSync(dest)) {
      console.log(`Skipping ${item.name} as it already exists.`);
      continue;
    }
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buffer));
      console.log(`Downloaded ${item.name} (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Failed to download ${item.name}: ${err.message}`);
    }
  }
  console.log('All placeholder images prepared successfully.');
}

download();
