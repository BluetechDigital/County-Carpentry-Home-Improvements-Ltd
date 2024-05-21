// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCard} from "@/types/components";
import {initial, fadeInUp} from "@/animations/animations";

// Styling
import styles from "../../styles/components/OurServices.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const OurServicesCard: FC<IOurServicesCard> = ({
	link,
	image,
	title,
	paragraph,
}) => {
	return (
		<>
			<div className="flex flex-col group overflow-hidden">
				<Link
					href={`${link?.url}`}
					target={link?.target}
					aria-label={`${link?.title}`}
					className={
						styles.card +
						" overflow-hidden bg-black group-hover:scale-105 transition duration-700 ease-in-out"
					}
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="bg-primary-default group-hover:bg-accent-two relative px-4 py-6 w-full lg:py-12 h-[250px] sm:h-[275px] bg-center bg-no-repeat bg-cover"
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					>
						<div
							className={
								link?.url
									? "absolute -bottom-0 right-0 transition duration-700 ease-in-out"
									: "hidden"
							}
						>
							<div className="w-fit p-2 group-hover:mr-[8px] flex items-center justify-between text-primary-default bg-lightGreyTwo group-hover:bg-accent-three group-hover:text-white">
								<span className="w-full min-w-52 lg:min-w-40 px-4 text-tiny font-Inter uppercase">
									{link?.title}
								</span>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="cursor-pointer w-full h-[35px] object-contain object-center rotate-[-45deg] group-hover:rotate-[0deg] transition-all duration-500 ease-in-out"
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
											fillRule="evenodd"
											clipRule="evenodd"
											d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
											fill="#040404"
											className="group-hover:fill-white transition-all duration-200 ease-in-out"
										></path>{" "}
									</g>
								</svg>
							</div>
						</div>
					</motion.div>
				</Link>
				<div className="px-4 py-6">
					<Link
						href={`${link?.url}`}
						target={link?.target}
						aria-label={`${link?.title}`}
						className={styles.card}
					>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-center text-primary-default group-hover:text-accent-two uppercase font-Inter text-medium my-3 font-semibold"
						>
							{title}
						</motion.h3>
					</Link>
					<Paragraph
						content={
							paragraph?.length > 235
								? paragraph?.substring(0, 235) + "..."
								: paragraph
						}
						tailwindStyling="text-primary-default text-base text-center"
					/>
				</div>
			</div>
		</>
	);
};

export default OurServicesCard;
