export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("Images");

  // Keep output files as filename.html instead of filename/index.html
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => {
      // Keep root index as index.html
      if (data.page.fileSlug === "") {
        return "index.html";
      }
      return `${data.page.fileSlug}.html`;
    };
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}