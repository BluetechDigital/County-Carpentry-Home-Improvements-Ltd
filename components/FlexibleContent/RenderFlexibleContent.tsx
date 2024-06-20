"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CTATwo from "@/components/CTATwo";
import HeroTwo from "@/components/HeroTwo";
import Gallery from "@/components/Gallery";
import OurClients from "@/components/OurClients";
import VideoBlock from "@/components/VideoBlock";
import ContactForm from "@/components/ContactForm";
import OurServices from "@/components/OurServices";
import GallerySlider from "@/components/GallerySlider";
import Accreditations from "@/components/Accreditations";
import TitleParagraph from "@/components/TitleParagraph";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import OurProjectsGrid from "@/components/OurProjectsGrid";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import TitleContentImage from "@/components/TitleContentImage";
import SkillsExperiences from "@/components/SkillsExperiences";
import AboutContentImage from "@/components/AboutContentImage";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import OurServicesGridTwo from "@/components/OurServicesGridTwo";
import RequestAppointmentForm from "@/components/RequestAppointmentForm";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: any = content?.postTypeFlexibleContent;

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
		[`${FlexibleContent}_OurServices`]: OurServices,
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
