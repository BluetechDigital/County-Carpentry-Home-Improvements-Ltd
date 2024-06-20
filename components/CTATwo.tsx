// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICTATwo} from "@/types/components/index";
import fadeInUp, {initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/CTA.module.scss";

// Components
import Title from "./Elements/Title";
import RenderStars from "./Elements/RenderStars";

const CTATwo: FC<ICTATwo> = ({title, buttonLink, backgroundImage}) => {
	return (
		<>
			<div
				className={
					styles.ctaTwo + ` ctaTwo p-4 lg:px-0  bg-center bg-no-repeat bg-cover`
				}
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(0, 0, 0, 0.4),
								rgba(0, 0, 0, 0.4),
								rgba(0, 0, 0, 0.4)
							),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className="lg:container mx-auto px-0 lg:px-8">
					<div className="flex flex-col gap-6 py-6 px-4 bg-cover bg-center bg-no-repeat">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								title
									? "w-full flex flex-col lg:flex-row items-center lg:items-end justify-between py-4 gap-10 lg:gap-3"
									: "hidden"
							}
						>
							<div className="w-full lg:w-1/2">
								<Title
									content={title}
									tailwindStyling="title my-3 max-w-xl mx-auto lg:mx-0 text-white uppercase font-Inter leading-[2.25rem] text-center lg:text-left text-lg sm:text-xl lg:text-4xl"
								/>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="w-fit max-w-lg lg:max-w-md xl:max-w-full mx-auto lg:mx-0 py-3 px-4 bg-lightGreyTwo/30 grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center lg:justify-start gap-6"
								>
									<div className="flex items-center justify-center lg:justify-start gap-3">
										<Image
											width={1000}
											height={1000}
											alt={`Facebook reviews logo`}
											src="/img/facebook-logo-blue-circle-large-white.webp"
											className="my-auto lg:mx-0 w-10 h-10 object-cover object-center"
										/>
										<div className="flex flex-col gap-1">
											<div className="flex items-center justify-start gap-1">
												<RenderStars rating={5} />
											</div>
											<h3 className="font-medium text-tiny font-openSauceSansRegular text-white">
												4.8 Rating
											</h3>
										</div>
									</div>
									<div className="flex items-center justify-center lg:justify-start gap-3">
										<Image
											width={1000}
											height={1000}
											alt={`Google reviews logo`}
											src="/svg/google-tile-logo.svg"
											className="bg-white rounded-full my-auto lg:mx-0 p-1 w-10 h-10 object-cover object-center"
										/>
										<div className="flex flex-col gap-1">
											<div className="flex items-center justify-start gap-1">
												<RenderStars rating={5} />
											</div>
											<h3 className="font-medium text-tiny font-openSauceSansRegular text-white">
												4.9 Rating
											</h3>
										</div>
									</div>
									<div className="flex items-center justify-center lg:justify-start gap-3">
										<Image
											width={1000}
											height={1000}
											alt={`Checkatrade Logo`}
											src="/img/Checkatrade-checkmark.png"
											className="bg-white rounded-full my-auto lg:mx-0 p-1 w-10 h-10 object-cover object-center"
										/>
										<div className="flex flex-col gap-1">
											<div className="flex items-center justify-start gap-1">
												<RenderStars rating={5} />
											</div>
											<h3 className="font-medium text-tiny font-openSauceSansRegular text-white">
												4.9 Rating
											</h3>
										</div>
									</div>
								</motion.div>
							</div>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								aria-label={`${buttonLink?.title}`}
								className={buttonLink?.url ? "group" : "hidden"}
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
												strokeWidth="3"
											/>
											<path
												id="Path_49"
												data-name="Path 49"
												d="M463.015,2090.015l11.306,11.082L463.3,2112.131"
												transform="translate(-1.047 -15.019)"
												fill="none"
												stroke="#ffffff"
												strokeWidth="3"
											/>
										</g>
									</svg>
								</div>
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CTATwo;
