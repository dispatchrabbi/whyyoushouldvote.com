const yaml = require('js-yaml');
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {

  // allow using YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  eleventyConfig.addPassthroughCopy('CNAME'); // enables custom domain on gh-pages

  eleventyConfig.addPassthroughCopy('assets/fonts');
  eleventyConfig.addPassthroughCopy('assets/images');
  eleventyConfig.addPassthroughCopy('assets/scripts');
  eleventyConfig.addPassthroughCopy('assets/styles');

  eleventyConfig.addPassthroughCopy('assets/uswds');
  eleventyConfig.addPassthroughCopy('assets/fontawesome-pro-5.14.0-web/css/fontawesome.min.css');
  eleventyConfig.addPassthroughCopy('assets/fontawesome-pro-5.14.0-web/css/solid.min.css');
  eleventyConfig.addPassthroughCopy('assets/fontawesome-pro-5.14.0-web/webfonts/fa-solid-900.woff2');

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
