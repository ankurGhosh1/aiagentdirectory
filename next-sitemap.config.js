/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://aiagentlisting.com", // Replace with your site URL
  generateRobotsTxt: true, // Generate robots.txt
  changefreq: "daily", // Frequency of updates for search engines
  priority: 0.7, // Default priority for all pages
  sitemapSize: 500000, // Max number of URLs per sitemap file
  generateIndexSitemap: false, // Generate an index sitemap
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  additionalPaths: async (config) => {
    const paths = [];

    // Fetch the slug and industry data from the API
    const response = await fetch(`https://aiagentlisting.com/api/slugs`);
    const data = await response.json();
    const categoriesData = [
      {
        industry: "technology",
      },
      {
        industry: "human-resource",
      },
      {
        industry: "marketing",
      },
      {
        industry: "others",
      },
      {
        industry: "e-commerce",
      },
      {
        industry: "healthcare",
      },
      {
        industry: "education",
      },
      {
        industry: "travel-hospitality",
      },
      {
        industry: "real-estate",
      },
      {
        industry: "finance",
      },
      {
        industry: "manufacturing",
      },
      {
        industry: "legal",
      },
      {
        industry: "horizontal",
      },
      {
        industry: "vertical",
      },
      {
        industry: "energy-utilities",
      },
    ];

    categoriesData.forEach(({ industry }) => {
      // Path for /categories/[slug]
      paths.push({
        loc: `/categories/${industry}`,
        lastmod: new Date().toISOString(),
      });
    });

    data.forEach(({ slug }) => {
      // Path for /categories/[slug]
      paths.push({
        loc: `/agent/${slug}`,
        lastmod: new Date().toISOString(),
      });
    });
    return paths;
  },
};
