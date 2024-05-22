// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurServices} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import OurServicesCard from "./Cards/OurServicesCard";

const OurServices: FC<IOurServices> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices +
					" py-10 pb-20 lg:pb-10 px-4 bg-white bg-cover bg-center bg-no-repeat"
				}
				style={{
					backgroundImage: `url(/svg/background/stacked-peaks-haikei-white-grey.svg)`,
				}}
			>
				<div className="lg:container m-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
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
								className="my-3 max-w-xl mx-auto lg:mx-0 text-primary-default uppercase font-Inter leading-tight lg:leading-[2.25rem] text-center lg:text-left text-lg sm:text-xl lg:text-4xl"
							>
								{title}
							</motion.h3>
						</div>
						<div className="">
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-xl text-primary-default text-paragraph text-center lg:text-left"
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
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-6 px-0 gap-6 w-full">
						{servicesGrid?.length > 0 ? (
							servicesGrid?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="w-full"
									>
										<OurServicesCard
											link={item?.card?.link}
											image={item?.card?.image}
											title={item?.card?.title}
											paragraph={item?.card?.paragraph}
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurServices;
