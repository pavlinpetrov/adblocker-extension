#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const distDir = path.join(__dirname, '../dist');
const archiveDir = path.join(__dirname, '../archives');
const { name, version } =  require('../package.json');
const filename = `${name}-v${version}.zip`;

const makeArchive = () => {
  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir);
  }
};

const buildArchive = (src, dist, filename) => {
  console.info(`Building ${filename}...`);

  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(path.join(dist, filename));

  return new Promise((resolve, reject) => {
    archive
      .directory(src, false)
      .on('error', err => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
};

makeArchive();

buildArchive(distDir, archiveDir, filename)
  .then(() => console.info(`${filename} is ready`))
  .catch(console.err);
