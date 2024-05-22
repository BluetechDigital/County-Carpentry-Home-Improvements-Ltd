// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES & BLOGS */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewFlexibleContentComponents = async (
	id: number,
	postType: string,
	authToken: string,
	loginRedirectURL: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {id: "${id}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												displaySection
												title
              									ctaParagraph
												buttonLink {
                									url
                									title
                									target
                								}
												buttonLinkTwo {
                									url
                									title
                									target
                								}
              									backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
											}
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												displaySection
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												displaySection
												title
												paragraph
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_TitleContentImage {
            									fieldGroupName
												displaySection
            									title
            									textTitle
            									subtitle
            									paragraph
            									image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            									buttonLink {
            										url
            										title
            										target
            									}
            									bulletPoints {
            										points
            									}
            									displayContentOption
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_AboutContentImage {
                								fieldGroupName
                								displaySection
                								title
                								paragraph
                								buttonLink {
                									url
                									title
                									target
                								}
                								cardOne {
                									title
                									subtitle
                									buttonLink {
                										url
                										title
                										target
                									}
                									buttonLinkTwo {
                										url
                										title
                										target
                									}
                									backgroundImage {
                										altText
                										sourceUrl
                										mediaDetails {
                											height
                											width
                										}
                									}
                								}
                								cardTwo {
                									title
                									subtitle
                									link {
                									 	url
                									 	title
                									 	target
                									}
                								}
                								cardThree {
                									title
                									subtitle
                									link {
                										url
                										title
                										target
                									}
                								}
											}
											... on ${postTypeFlexibleContent}_Stats {
                								fieldGroupName
                								displaySection
                								contentStats {
                									textarea
                									numbers
													icon {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
                								}
                							}
											... on ${postTypeFlexibleContent}_OurClients {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												imageGrid {
													link {
														url
														title
														target
													}
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_OurServices {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
												servicesGrid {
													card {
														title
														paragraph
														link {
															url
															title
															target
														}
														image {
															altText
															sourceUrl
															mediaDetails {
																height
																width
															}
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_OurServicesGridTwo {
            									fieldGroupName
												displaySection
            									title
            									buttonLink {
            										url
            										title
            										target
            									}
            									servicesGrid {
            									  	card {
            									  		title
            									  		paragraph
            									  		image {
            									  			altText
            									  			sourceUrl
            									  			mediaDetails {
            									  				height
            									  				width
            									  			}
            									  		}
													}
            									}
            								}
											... on ${postTypeFlexibleContent}_SkillsExperiences {
            									fieldGroupName
												displaySection
            									title
            									paragraph
												displayImageFullWidth
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
            									skillsExperiencesGrid {
            										text
            									}
            								}
											... on ${postTypeFlexibleContent}_Accreditations {
            									fieldGroupName
												displaySection
												paragraph
              									accreditationsGrid {
              									  	image {
              									  	  	altText
              									  	  	sourceUrl
              									  	  	mediaDetails {
              									  	  	  	height
              									  	  	  	width
              									  	  	}
              									  	}
              									}
            								}
											... on ${postTypeFlexibleContent}_OurProjectsGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_VideoBlock {
												fieldGroupName
												displaySection
												title
												video
												subtitle
												paragraph
												displayVideo
												buttonLink {
													url
													title
													target
												}
												videoBackgroundImage {
            										sourceUrl
              									}
											}
											... on ${postTypeFlexibleContent}_Gallery {
												fieldGroupName
												displaySection
												title
												paragraph
												itemsDisplayedPerPage
												gallery {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_GallerySlider {
												fieldGroupName
												displaySection
												gallerySlider {
              										title
              										paragraph
													buttonLink {
                										url
                										title
                										target
                									}
              										backgroundImage {
              											altText
              											sourceUrl
              											mediaDetails {
              												height
              												width
              											}
              										}
													
              									}
											}
											... on ${postTypeFlexibleContent}_TestimonialsSlider {
												fieldGroupName
												displaySection
											}
											... on ${postTypeFlexibleContent}_TestimonialsTwo {
												fieldGroupName
												title
												subtitle
												displaySection
											}
											... on ${postTypeFlexibleContent}_TestimonialsGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
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
											... on ${postTypeFlexibleContent}_CtaTwo {
												fieldGroupName
												displaySection
												title
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
													sourceUrl
												}
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												displaySection
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_RequestAppointmentForm {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_Maintenance {
												fieldGroupName
												displaySection
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_ErrorPageContent {
												fieldGroupName
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
					}
        		}
			}
		`;

		const response: any = await client.query({
			query: content,
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error) {
		return loginRedirectURL;
	}
};
