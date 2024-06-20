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
import {IOurServicesGridTwo} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import OurServicesCardTwo from "./Cards/OurServicesCardTwo";

const OurServicesGridTwo: FC<IOurServicesGridTwo> = ({
	title,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServicesTwo +
					" relative py-8 px-4 bg-primary-default border-t-8 border-accent-default border-solid"
				}
			>
				<div className="lg:container relative m-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center"
					>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto lg:mx-0 text-white uppercase font-Inter leading-tight text-center text-lg sm:text-xl lg:text-4xl"
						>
							{title}
						</motion.h3>
					</motion.div>
					<div className="w-full relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-6 px-0 md:px-4 gap-6 lg:gap-4 items-start justify-center">
						{servicesGrid?.length > 0 ? (
							servicesGrid?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<OurServicesCardTwo
											currentIteration={index}
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
					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						aria-label={`${buttonLink?.title}`}
						className={
							buttonLink?.url
								? "mb-8 mr-8 group w-fit hidden lg:block"
								: "hidden"
						}
					>
						<div className="bg-accent-two group-hover:bg-tertiary-default p-4 lg:px-6 flex justify-between gap-6 h-full transition-all duration-500 ease-in-out">
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
				</div>
			</div>
		</>
	);
};

export default OurServicesGridTwo;
