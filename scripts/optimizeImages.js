import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './public/images';

async function optimize() {
  console.log('Optimizing heavy images...');
  
  const p5Path = path.join(dir, 'photo-5.jpg');
  if (fs.existsSync(p5Path)) {
    const inputBuffer = fs.readFileSync(p5Path);
    if (inputBuffer.length > 500000) {
      const outputBuffer = await sharp(inputBuffer)
        .jpeg({ quality: 85, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(p5Path, outputBuffer);
      console.log(`photo-5.jpg optimized from ${(inputBuffer.length/1024/1024).toFixed(2)} MB to ${(outputBuffer.length/1024).toFixed(1)} KB`);
    }
  }

  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fp = path.join(dir, f);
    const size = fs.statSync(fp).size;
    console.log(`${f}: ${(size/1024).toFixed(1)} KB`);
  }
}

optimize().catch(console.error);
