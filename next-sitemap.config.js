/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://aiagentlisting.com", // Replace with your site URL
  generateRobotsTxt: true, // Generate robots.txt
  changefreq: "daily", // Frequency of updates for search engines
  priority: 0.7, // Default priority for all pages
  sitemapSize: 500000, // Max number of URLs per sitemap file
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  additionalPaths: async (config) => {
    const paths = [];

    // Fetch the slug and industry data from the API
    const response = await fetch(`https://aiagentlisting.com/api/slugs`);
    if (response.headers.get("content-type").includes("application/json")) {
      const data = await response.json();
    } else {
      throw new Error("Unexpected content type");
    }

    // Generate paths for /categories/[industry]
    data.forEach(({ slug, industry }) => {
      // Path for /categories/[industry]
      paths.push({
        loc: `/categories/${industry}`,
        lastmod: new Date().toISOString(),
      });

      // Path for /categories/[slug]
      paths.push({
        loc: `/categories/${slug}`,
        lastmod: new Date().toISOString(),
      });
    });

    return paths;
  },
};
