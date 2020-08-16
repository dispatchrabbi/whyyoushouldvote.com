const yaml = require('js-yaml');
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {

  // allow using YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  eleventyConfig.addPassthroughCopy('assets');

  // create the markdownify filter
  // thanks to https://twitter.com/jeremenichelli/status/1206564493632983040
  const mdRenderer = new markdownIt();
  eleventyConfig.addFilter('markdownify', str => mdRenderer.render(str));

  eleventyConfig.setTemplateFormats([
    "md",
    "html"
  ]);

  return {
    dir: {
      layouts: '_layouts',
    },
    htmlTemplateEngine: 'liquid',
  };
};
