#!/usr/bin/env node
/**
 * Clean Build Script
 * 清理 .next 目录中的大文件和缓存，避免 Cloudflare Pages 25MB 文件限制
 */

const fs = require('fs');
const path = require('path');

const nextDir = path.join(process.cwd(), '.next');
const cacheDir = path.join(nextDir, 'cache');
const traceFile = path.join(nextDir, 'trace');

function removeDirectory(dir) {
  if (fs.existsSync(dir)) {
    console.log(`🗑️  Removing: ${dir}`);
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`✅ Removed: ${dir}`);
  } else {
    console.log(`⏭️  Not found (skipping): ${dir}`);
  }
}

function removeFile(file) {
  if (fs.existsSync(file)) {
    console.log(`🗑️  Removing: ${file}`);
    fs.unlinkSync(file);
    console.log(`✅ Removed: ${file}`);
  } else {
    console.log(`⏭️  Not found (skipping): ${file}`);
  }
}

function getDirectorySize(dir) {
  if (!fs.existsSync(dir)) return 0;
  
  let size = 0;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      size += getDirectorySize(filePath);
    } else {
      size += fs.statSync(filePath).size;
    }
  }
  
  return size;
}

function formatSize(bytes) {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(2)} MB`;
}

console.log('🧹 Starting build cleanup for Cloudflare Pages deployment...\n');

// Check initial size
const initialSize = getDirectorySize(nextDir);
console.log(`📊 Initial .next directory size: ${formatSize(initialSize)}\n`);

// Remove cache directory (largest files)
removeDirectory(cacheDir);

// Remove trace file
removeFile(traceFile);

// Check final size
const finalSize = getDirectorySize(nextDir);
const savedSize = initialSize - finalSize;

console.log('\n📊 Cleanup Summary:');
console.log(`   Before: ${formatSize(initialSize)}`);
console.log(`   After:  ${formatSize(finalSize)}`);
console.log(`   Saved:  ${formatSize(savedSize)}`);
console.log('\n✅ Build cleanup complete! Ready for deployment.\n');
