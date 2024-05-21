// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleContentImage} from "@/types/components";

// Components
import TitleContentImageCard from "./Cards/TitleContentImageCard";

const TitleContentImage: FC<ITitleContentImage> = ({
	title,
	image,
	subtitle,
	textTitle,
	paragraph,
	buttonLink,
	bulletPoints,
	displayContentOption,
	displayBackgroundColor,
}) => {
	let backgroundColor;

	switch (displayBackgroundColor) {
		case "White":
			backgroundColor = "bg-white";
			break;
		case "Grey":
			backgroundColor = "bg-lightGreyTwo";
			break;
		default:
			backgroundColor = "bg-white";
			break;
	}

	return (
		<>
			<div className={`titleContentImage py-10 ${backgroundColor}`}>
				<div
					className={
						title ? "relative z-10 lg:container mx-auto block p-4" : "hidden"
					}
				>
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
						className="my-2 lg:max-w-4xl leading-snug lg:leading-[2.5rem] uppercase font-Inter text-primary-default text-center lg:text-left font-semibold text-lg sm:text-xl lg:text-4xl"
					>
						{title}
					</motion.h3>
				</div>
				<div
					className={`relative z-10 gap-4 lg:gap-x-16 p-0 mx-auto items-center justify-center flex flex-col ${
						displayContentOption == "Left"
							? "lg:flex-row-reverse"
							: "lg:flex-row"
					}`}
				>
					<motion.div
						viewport={{once: true}}
						initial={
							displayContentOption == "Left"
								? slideInRightInitial
								: slideInLeftInitial
						}
						whileInView={slideInRightFinish}
						className={`bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px] ${
							title ? "xl:h-[650px]" : "xl:h-[600px]"
						}`}
						style={{
							backgroundImage: `url(${image?.sourceUrl})`,
						}}
					/>

					<motion.div
						viewport={{once: true}}
						initial={
							displayContentOption == "Left"
								? slideInLeftInitial
								: slideInRightInitial
						}
						whileInView={slideInRightFinish}
						className={`${
							displayContentOption == "Left"
								? "xl:pl-28 2xl:pl-48 lg:items-end"
								: "xl:pr-28 2xl:pr-32 lg:items-start"
						} lg:w-1/2 h-full`}
					>
						<TitleContentImageCard
							title={title}
							subtitle={subtitle}
							textTitle={textTitle}
							paragraph={paragraph}
							buttonLink={buttonLink}
							bulletPoints={bulletPoints}
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TitleContentImage;
