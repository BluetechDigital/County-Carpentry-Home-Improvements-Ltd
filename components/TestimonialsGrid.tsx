"use client";

// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsGrid} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const TestimonialsGrid: FC<ITestimonialsGrid> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonials +
					` relative py-16 px-4 bg-white bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `url("/svg/background/layeblue-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<div className="lg:container relative m-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-16">
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
								className="max-w-sm mx-auto lg:mx-0 text-center lg:text-left text-base text-primary-default"
							>
								{subtitle}
							</motion.h4>
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
								tailwindStyling="lg:max-w-3xl mx-auto text-primary-default leading-[1.75rem] text-paragraph text-center lg:text-left"
							/>
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
					<Pagination
						contentType="TestimonialsCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.testimonials}
						tailwindStyling={`grid px-0 lg:px-16 lg:-m-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
					/>
				</div>
			</div>
		</>
	);
};

export default TestimonialsGrid;
