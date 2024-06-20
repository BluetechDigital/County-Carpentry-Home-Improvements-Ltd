import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* THEMES OPTIONS CONTENT
 The ID number refers to the
"Global Content" page ID*/
export const getThemesOptionsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				themeOptions(where: {name: "Global Content", status: PUBLISH}) {
					edges {
						node {
							themeOptions {
								email
								address
								emailTwo
								textarea
								phoneNumber
								businessHours
								phoneNumberTwo
								phoneNumberThree
								copyrightText
								facebookLink {
									url
									title
									target
								}
								twitterLink {
									url
									title
									target
								}
								linkedinLink {
									url
									title
									target
								}
								instagramLink {
									url
									title
									target
								}
								displayNoticeBanner
								noticeBannerTextarea
								errorPageContent {
									displaySection
									title
									paragraph
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.themeOptions?.edges[0]?.node?.themeOptions;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch themes options content"
		);
	}
};
