// Imports
import fadeInUp, {
	initial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {FC, Fragment} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IStats} from "@/types/components/index";
import Paragraph from "./Elements/Paragraph";

const Stats: FC<IStats> = ({contentStats}) => {
	return (
		<>
			<div className="p-4 lg:py-4 bg-lightGreyTwo">
				<div className="lg:container mx-auto grid gap-4 grid-cols-1 md:grid-cols-3 items-center justify-center">
					{contentStats?.length > 0 ? (
						contentStats?.map((item: any, index: number) => (
							<Fragment key={index}>
								<motion.div
									custom={index}
									initial={initial}
									whileInView="animate"
									viewport={{once: true}}
									variants={arrayLoopStaggerChildren}
									className="h-full w-full flex flex-col lg:flex-row items-center gap-4"
								>
									<div>
										<div className="w-[81px] h-[81px] p-4 rounded-full bg-primary-default flex items-center justify-center">
											<Image
												src={item?.icon?.sourceUrl}
												alt={`${item?.icon?.altText}`}
												width={item?.icon?.mediaDetails?.width}
												height={item?.icon?.mediaDetails?.height}
												className={
													item?.icon?.sourceUrl
														? `block object-contain object-center w-full h-[125px]`
														: `hidden`
												}
											/>
										</div>
									</div>
									<div>
										<motion.h4
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="font-Inter text-accent-two text-xl lg:text-2xl font-extrabold italic uppercase text-center xl:text-left"
										>
											{item?.numbers}
										</motion.h4>
										<Paragraph
											content={item?.textarea}
											tailwindStyling="text-base text-center xl:text-left"
										/>
									</div>
								</motion.div>
							</Fragment>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};

export default Stats;
