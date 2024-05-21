// Imports
import {
	initial,
	stagger,
	fadeInUp,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IVideoBlock} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";
import VideoWrapper from "./Elements/VideoWrapper";

const VideoBlock: FC<IVideoBlock> = ({
	title,
	video,
	subtitle,
	paragraph,
	buttonLink,
	displayVideo,
	videoBackgroundImage,
}) => {
	return (
		<>
			<div
				className="py-10 pb-20 lg:pb-24 px-4 bg-lightGreyTwo"
				style={{
					clipPath: `ellipse(100% 55% at 48% 44%)`,
				}}
			>
				<div className="lg:container mx-auto flex flex-col items-center justify-center gap-4 lg:gap-x-4 xl:gap-x-16">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							title && subtitle && paragraph
								? "flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
								: "hidden"
						}
					>
						<div>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-center lg:text-left text-base text-accent-two uppercase font-semibold font-Inter"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 text-primary-default uppercase font-Inter leading-tight text-center lg:text-left text-lg sm:text-xl lg:text-4xl"
							>
								{title}
							</motion.h3>
						</div>
						<div className="flex flex-col">
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-lg text-primary-default text-paragraph text-center lg:text-left"
							/>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								aria-label={`${buttonLink?.title}`}
								className={
									buttonLink?.url
										? "mt-2 group w-fit hidden lg:block"
										: "hidden"
								}
							>
								<div className="bg-accent-two group-hover:bg-primary-default p-4 lg:px-6 flex justify-between gap-6 h-full transition-all duration-500 ease-in-out">
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="text-white font-extrabold uppercase text-left text-paragraph"
									>
										{buttonLink?.title}
									</motion.h3>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="31.905"
										height="24.247"
										viewBox="0 0 31.905 24.247"
										className="w-6 h-6 text-white group-hover:translate-x-2 group-hover:rotate-[-45deg] transition-all duration-500 ease-in-out self-end"
									>
										<g
											id="Group_14"
											data-name="Group 14"
											transform="translate(-443.5 -2073.925)"
										>
											<line
												id="Line_2"
												data-name="Line 2"
												x2="30.063"
												transform="translate(443.5 2086.054)"
												fill="none"
												stroke="#ffffff"
												stroke-width="3"
											/>
											<path
												id="Path_49"
												data-name="Path 49"
												d="M463.015,2090.015l11.306,11.082L463.3,2112.131"
												transform="translate(-1.047 -15.019)"
												fill="none"
												stroke="#ffffff"
												stroke-width="3"
											/>
										</g>
									</svg>
								</div>
							</Link>
						</div>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={`${
							displayVideo ? "h-fit" : "h-[300px] lg:h-[500px]"
						} bg-center bg-no-repeat bg-cover mt-6 lg:mt-12 w-full`}
						style={{
							backgroundImage: `url("${
								displayVideo ? "none" : videoBackgroundImage?.sourceUrl
							}")`,
						}}
					>
						{displayVideo ? <VideoWrapper>{video}</VideoWrapper> : <></>}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default VideoBlock;
