// Imports
import {
	initial,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISkillsExperiences} from "@/types/components/index";

// Components
import Paragraph from "./Elements/Paragraph";

const SkillsExperiences: FC<ISkillsExperiences> = ({
	title,
	image,
	paragraph,
	displayImageFullWidth,
	skillsExperiencesGrid,
}) => {
	return (
		<>
			<section className="relative overflow-hidden py-8 px-4">
				<div className="lg:container px-0 mx-auto">
					<div className="flex flex-wrap border-b border-primary-default mb-8">
						<div className="w-full lg:w-1/2 p-4 mb-4">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 uppercase text-primary-default text-center lg:text-left font-semibold text-lg sm:text-xl lg:text-4xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-xl leading-7 text-primary-default text-paragraph text-center lg:text-left"
							/>
						</div>
						<div className="w-full lg:w-1/2 p-4">
							<Image
								src={image?.sourceUrl}
								alt={`${image?.altText}`}
								width={image?.mediaDetails.width}
								height={image?.mediaDetails.height}
								className={`${
									image?.sourceUrl
										? `mx-auto xl:mx-0 w-full h-[150px] lg:h-[200px] rounded-full ${
												displayImageFullWidth
													? "px-0 object-cover"
													: "px-16 lg:px-28 object-contain"
										  } object-center`
										: "hidden"
								}`}
							/>
						</div>
					</div>
					<div className="p-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 items-center justify-center">
						{skillsExperiencesGrid?.length > 0 ? (
							skillsExperiencesGrid?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="flex items-center h-fit"
									>
										<span>
											<svg
												fill="none"
												className="block mr-5 w-4 h-4 md:w-7 md:h-7"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<path
														d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
														fill="#d9ba7e"
													></path>
												</g>
											</svg>
										</span>
										<Paragraph
											content={item?.text}
											tailwindStyling="font-Inter uppercase text-primary-default text-base text-left"
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default SkillsExperiences;
