const fs = require('fs');
const path = require('path');

// Helper to write file safely
function saveFile(relPath, content) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`Saved: ${relPath} (${content.length} bytes)`);
}

console.log("Generating 2016 examination files...");
