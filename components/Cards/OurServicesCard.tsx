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
			<div className="h-full flex flex-col group overflow-hidden">
				<Link
					href={`${link?.url}`}
					target={link?.target}
					aria-label={`${link?.title}`}
					className={
						styles.card +
						" overflow-hidden group-hover:scale-105 transition duration-700 ease-in-out"
					}
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="px-4 py-6 mx-auto w-full h-full max-w-[275px] min-h-[275px] rounded-full lg:py-12 bg-center bg-no-repeat bg-cover"
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					></motion.div>
				</Link>
				<div className="px-4 py-6 flex flex-col justify-between">
					<div className="">
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
								paragraph?.length > 205
									? paragraph?.substring(0, 205) + "..."
									: paragraph
							}
							tailwindStyling="text-primary-default text-base text-center"
						/>
					</div>

					<Link
						href={`${link?.url}`}
						target={link?.target}
						aria-label={`${link?.title}`}
						className={link?.url ? "mt-8 group w-fit mx-auto" : "hidden"}
					>
						<div className="bg-accent-two group-hover:bg-primary-default p-4 lg:px-6 flex justify-between gap-6 h-full transition-all duration-500 ease-in-out">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-white font-extrabold uppercase text-left text-paragraph"
							>
								{link?.title}
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
			</div>
		</>
	);
};

export default OurServicesCard;
