// Imports
import fadeInUp, {
	stagger,
	initial,
	arrayLoopStaggerChildren,
} from "../../animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITitleContentImageCard} from "@/types/components";

// Components
import Title from "../Elements/Title";
import Paragraph from "../Elements/Paragraph";

const TitleContentImageCard: FC<ITitleContentImageCard> = ({
	title,
	subtitle,
	textTitle,
	paragraph,
	buttonLink,
	titleColor,
	bulletPoints,
	paragraphColor,
	buttonHoverColor,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={`flex flex-col items-center ${
					title ? "pt-2 pb-10 lg:py-4" : "py-10"
				} px-4 lg:items-baseline`}
			>
				<motion.h4
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={`text-center lg:text-left text-base text-accent-two uppercase font-semibold font-Inter`}
				>
					{subtitle}
				</motion.h4>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={`my-2 lg:max-w-4xl leading-snug lg:leading-[2.5rem] uppercase font-Inter ${titleColor} text-center lg:text-left font-semibold text-lg sm:text-xl lg:text-4xl`}
				>
					{title}
				</motion.h3>

				<Title
					content={textTitle}
					tailwindStyling={`my-2 lg:max-w-xl leading-[1.5rem] font-semibold text-paragraph text-center lg:text-left ${titleColor}`}
				/>
				<Paragraph
					content={paragraph}
					tailwindStyling={`lg:max-w-xl leading-[1.5rem] text-paragraph lg:text-left ${paragraphColor}`}
				/>
				<div
					className={
						bulletPoints
							? "lg:max-w-xl flex flex-col my-8 lg:my-6 gap-2"
							: "hidden"
					}
				>
					{bulletPoints?.length > 0 ? (
						bulletPoints?.map((item: any, index: number) => (
							<Fragment key={index}>
								<motion.div
									custom={index}
									initial={initial}
									whileInView="animate"
									viewport={{once: true}}
									variants={arrayLoopStaggerChildren}
								>
									<div className="flex items-center justify-start gap-2">
										<span>
											<svg
												fill="none"
												className="w-6 h-6"
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
													{" "}
													<path
														d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
														fill="#040404"
													></path>{" "}
												</g>
											</svg>
										</span>
										<span>
											<h4 className="text-left text-primary-default text-paragraph">
												{item?.points}
											</h4>
										</span>
									</div>
								</motion.div>
							</Fragment>
						))
					) : (
						<></>
					)}
				</div>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={buttonLink?.title ? "flex mt-4" : "hidden"}
				>
					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						aria-label={`${buttonLink?.title}`}
						className={buttonLink?.url ? "group" : "hidden"}
					>
						<div
							className={`bg-accent-two ${buttonHoverColor} p-4 lg:px-6 flex justify-between gap-6 h-full transition-all duration-500 ease-in-out`}
						>
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
				</motion.div>
			</motion.div>
		</>
	);
};

export default TitleContentImageCard;
