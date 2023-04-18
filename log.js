// Import modules
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function log(text) {
  const tempFilePath = path.join(__dirname, 'log.txt');

  try {
    await fs.appendFile(tempFilePath, text + '\n');
  } catch (err) {
    console.error('Error appending text to the temporary file:', err);
  }
}

export { log };
