import fs from "fs-extra";
import path from 'path';

const require = (filepath, encoding = "utf8") =>
  JSON.parse(fs.readFileSync(filepath, { encoding }));

const pages = require(path.join(process.cwd(), "gen", "pages.json"));

function _buildTagMap() {
  const tagMap = {};

  Object.values(pages).forEach(page => {
    page.tags.forEach(tag => {
      tagMap[tag] = [...(tagMap[tag] || []), page];
    })
  });

  return tagMap;
}

function buildTags() {
  const tagMap = _buildTagMap(pages);
  fs.writeFileSync(
    path.join(process.cwd(), "gen", "tagmap.json"),
    JSON.stringify(tagMap)
  );
  console.log('build-tags');
}

buildTags();
