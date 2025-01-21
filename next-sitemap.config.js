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
};
