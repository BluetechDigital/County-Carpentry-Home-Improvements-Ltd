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
	let titleColor;
	let paragraphColor;
	let backgroundColor;
	let buttonHoverColor;

	switch (displayBackgroundColor) {
		case "White":
			titleColor = "text-primary-default";
			paragraphColor = "text-primary-default";
			backgroundColor = "bg-white";
			buttonHoverColor = "group-hover:bg-primary-default";
			break;
		case "Grey":
			titleColor = "text-primary-default";
			paragraphColor = "text-primary-default";
			backgroundColor = "bg-lightGreyTwo";
			buttonHoverColor = "group-hover:bg-primary-default";
			break;
		case "DarkBlue":
			titleColor = "text-white";
			paragraphColor = "text-white";
			backgroundColor = "bg-primary-default";
			buttonHoverColor = "group-hover:bg-tertiary-default";
			break;
		default:
			titleColor = "text-primary-default";
			paragraphColor = "text-primary-default";
			backgroundColor = "bg-white";
			buttonHoverColor = "group-hover:bg-primary-default";
			break;
	}

	return (
		<>
			<div className={`titleContentImage py-10 ${backgroundColor}`}>
				<div
					className={`lg:max-w-[1800px] mx-auto relative z-10 gap-4 lg:gap-x-16 py-0 px-4 lg:pr-8 items-center justify-center flex flex-col ${
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
						className={`bg-center bg-no-repeat bg-cover w-full sm:w-[350px] lg:w-[500px] h-[350px] lg:h-[500px] rounded-full ${
							title
								? "xl:h-[750px] xl:w-[750px] "
								: "xl:h-[700px] xl:w-[700px] "
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
								? "xl:pl-28 2xl:pl-20 lg:items-end"
								: "xl:pr-28 2xl:pr-20 lg:items-start"
						} lg:w-1/2 h-full`}
					>
						<TitleContentImageCard
							title={title}
							subtitle={subtitle}
							textTitle={textTitle}
							paragraph={paragraph}
							titleColor={titleColor}
							buttonLink={buttonLink}
							bulletPoints={bulletPoints}
							paragraphColor={paragraphColor}
							buttonHoverColor={buttonHoverColor}
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TitleContentImage;
