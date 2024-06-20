"use client";

// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsTwo} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import TestimonialsCard from "./Cards/TestimonialsCard";

const TestimonialsTwo: FC<ITestimonialsTwo> = ({title, subtitle}) => {
	const globalContext = useGlobalContext();
	return (
		<>
			<div className={styles.testimonials + ` py-6 px-4 bg-white`}>
				<div className="lg:container m-auto px-0 flex flex-col gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							title && subtitle
								? "w-full flex flex-col lg:flex-row items-center justify-between py-4 gap-3"
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
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="w-full lg:w-1/4 max-w-sm lg:max-w-full mx-auto lg:mx-0 py-3 px-4"
						>
							<Image
								width={1000}
								height={1000}
								alt={`Checkatrade Logo`}
								src="/img/checkatrade-com-strapline.png"
								className="bg-white my-auto lg:mx-0 p-1 w-full h-[130px] object-contain object-center"
							/>
						</motion.div>
					</motion.div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-4"
					>
						{globalContext?.testimonials?.length > 0 ? (
							globalContext?.testimonials
								?.slice(0, 3)
								?.map((item: any, index: number) => (
									<Fragment key={index}>
										<div
											className={
												// Hides the last card between these breakpoints ("md:" to "xl:" )
												index === 2 ? "block md:hidden xl:block" : "w-full"
											}
										>
											<TestimonialsCard
												name={item?.node?.testimonialReview?.name}
												image={item?.node?.testimonialReview?.image}
												rating={item?.node?.testimonialReview?.rating}
												position={item?.node?.testimonialReview?.position}
												paragraph={item?.node?.testimonialReview?.paragraph}
											/>
										</div>
									</Fragment>
								))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsTwo;
