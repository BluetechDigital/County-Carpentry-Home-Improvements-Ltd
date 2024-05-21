// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/pages";
import {IPostTypeFlexibleContent} from "@/types/context";

// Components
import CTA from "../CTA";
import Hero from "../Hero";
import Stats from "../Stats";
import CTATwo from "../CTATwo";
import HeroTwo from "../HeroTwo";
import Gallery from "../Gallery";
import OurClients from "../OurClients";
import VideoBlock from "../VideoBlock";
import ContactForm from "../ContactForm";
import OurServices from "../OurServices";
import ErrorPage from "../Global/ErrorPage";
import GallerySlider from "../GallerySlider";
import Accreditations from "../Accreditations";
import TitleParagraph from "../TitleParagraph";
import Maintenance from "../Global/Maintenance";
import TestimonialsTwo from "../TestimonialsTwo";
import OurProjectsGrid from "../OurProjectsGrid";
import TestimonialsGrid from "../TestimonialsGrid";
import TitleContentImage from "../TitleContentImage";
import SkillsExperiences from "../SkillsExperiences";
import AboutContentImage from "../AboutContentImage";
import TestimonialsSlider from "../TestimonialsSlider";
import OurServicesGridTwo from "../OurServicesGridTwo";
import RequestAppointmentForm from "../RequestAppointmentForm";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: IPostTypeFlexibleContent =
		content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMap: any = {
		[`${FlexibleContent}_Cta`]: CTA,
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_Stats`]: Stats,
		[`${FlexibleContent}_CtaTwo`]: CTATwo,
		[`${FlexibleContent}_Gallery`]: Gallery,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_VideoBlock`]: VideoBlock,
		[`${FlexibleContent}_OurClients`]: OurClients,
		[`${FlexibleContent}_ContactForm`]: ContactForm,
		[`${FlexibleContent}_Maintenance`]: Maintenance,
		[`${FlexibleContent}_OurServices`]: OurServices,
		[`${FlexibleContent}_ErrorPageContent`]: ErrorPage,
		[`${FlexibleContent}_GallerySlider`]: GallerySlider,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_Accreditations`]: Accreditations,
		[`${FlexibleContent}_TestimonialsTwo`]: TestimonialsTwo,
		[`${FlexibleContent}_OurProjectsGrid`]: OurProjectsGrid,
		[`${FlexibleContent}_TestimonialsGrid`]: TestimonialsGrid,
		[`${FlexibleContent}_AboutContentImage`]: AboutContentImage,
		[`${FlexibleContent}_TitleContentImage`]: TitleContentImage,
		[`${FlexibleContent}_SkillsExperiences`]: SkillsExperiences,
		[`${FlexibleContent}_TestimonialsSlider`]: TestimonialsSlider,
		[`${FlexibleContent}_OurServicesGridTwo`]: OurServicesGridTwo,
		[`${FlexibleContent}_RequestAppointmentForm`]: RequestAppointmentForm,
	};

	return (
		<>
			{content?.content?.length > 0 &&
				content?.content?.map((item: any, index: number) => (
					<section
						key={index}
						className={item?.displaySection ? "block" : "hidden"}
					>
						{componentMap[item?.fieldGroupName] && (
							<Fragment>
								{React.createElement(componentMap[item?.fieldGroupName], {
									...item,
								})}
							</Fragment>
						)}
					</section>
				))}
		</>
	);
};

export default RenderFlexibleContent;
