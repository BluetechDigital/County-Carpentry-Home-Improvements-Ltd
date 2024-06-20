// Imports
import {
	getAllPagesSlugs,
	getAllServicesPagesSlugs,
} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {MetadataRoute} from "next";
import {getAllOurProjectsSlugs} from "@/functions/graphql/Queries/GetAllOurProjects";

const sitemap = async () => {
	const [pagesSlugs, ourProjectsSlugs, ourServicesSlugs] = await Promise.all([
		getAllPagesSlugs(),
		getAllOurProjectsSlugs(),
		getAllServicesPagesSlugs(),
	]);

	const siteUrl: any = process.env.SITE_URL;

	/* Pages, Services, News Insights Posts Arrays */
	const pagesLinks: any = [];
	const ourProjectsLinks: any = [];
	const ourServicesLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/${keys?.slug}`,
			lastModified: `${keys?.modified}`,
			changeFrequency: "monthly",
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Our Projects Dynamic Links
	ourProjectsSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/projects/${keys?.slug}`,
			lastModified: `${keys?.modified}`,
			changeFrequency: "daily",
			priority: 0.8,
		};

		ourProjectsLinks.push(object);
	});

	// Our Services Dynamic Links
	ourServicesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/services/${keys?.slug}`,
			lastModified: `${keys?.modified}`,
			changeFrequency: "daily",
			priority: 0.8,
		};

		ourServicesLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: MetadataRoute.Sitemap = [
		...pagesLinks,
		...ourProjectsLinks,
		...ourServicesLinks,
	];

	return allLinks;
};

export default sitemap;
