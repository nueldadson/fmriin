// sitemapGenerator.js
import fs from "fs";
import path from "path";
import { routes } from "./src/routesConfig.js"; // Note the .js extension

const generateSitemap = (filename) => {
	const baseUrl = "https://fmrin.com";
	const paths = routes.map((route) => route.path);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${paths
			.map(
				(routePath) => `
      <url>
        <loc>${baseUrl}${routePath}</loc>
      </url>`,
			)
			.join("")}
  </urlset>`;

	const filePath = path.resolve(__dirname, `./public/${filename}`);
	fs.writeFileSync(filePath, sitemap, "utf-8");
	console.log(`Sitemap generated successfully at ${filePath}`);
};

// Generate both sitemaps
generateSitemap("sitemap.xml");
generateSitemap("sitemap2.xml");
