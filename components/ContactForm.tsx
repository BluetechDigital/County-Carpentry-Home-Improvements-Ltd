"use client";

// Imports
import Link from "next/link";
import React, {FC} from "react";
import {motion} from "framer-motion";
import {IContactForm} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import FormikForm from "./Elements/FormikForm";

const ContactForm: FC<IContactForm> = ({title, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="px-4 py-10 bg-cover bg-center bg-no-repeat">
				<div className="lg:container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
					<div className="w-full lg:w-1/2 p-0 flex flex-col items-center lg:items-baseline">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="mb-12"
						>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto xl:mx-0 uppercase text-primary-default text-center lg:text-left font-semibold font-Inter text-lg md:text-xl"
							>
								{title}
							</motion.h3>

							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-xl mx-auto xl:mx-0 text-primary-default text-base text-center lg:text-left"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex mb-6 items-center"
						>
							<div className="hidden sm:flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-10 h-10 bg-primary-default rounded-full">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									className="w-5 h-5"
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
											d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
											stroke="#ffffff"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>{" "}
									</g>
								</svg>
							</div>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="max-w-xl mx-auto sm:mx-0"
							>
								<Link
									className={
										globalContext?.themesOptionsContent?.phoneNumber
											? "flex items-center gap-3 text-tiny sm:text-base text-center sm:text-left"
											: "hidden"
									}
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
									aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
								>
									<span className="font-semibold uppercase font-Inter">
										Office:{" "}
									</span>
									<span className="text-primary-default hover:text-accent-two hover:border-b-2">
										{globalContext?.themesOptionsContent?.phoneNumber}
									</span>
								</Link>
								<Link
									className={
										globalContext?.themesOptionsContent?.phoneNumberTwo
											? "flex items-center gap-3 text-tiny sm:text-base text-center sm:text-left"
											: "hidden"
									}
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
								>
									<span className="font-semibold uppercase font-Inter">
										Tel:{" "}
									</span>
									<span className="text-primary-default hover:text-accent-two hover:border-b-2">
										{globalContext?.themesOptionsContent?.phoneNumberTwo}
									</span>
								</Link>
								<Link
									className={
										globalContext?.themesOptionsContent?.phoneNumberThree
											? "flex items-center gap-3 text-tiny sm:text-base text-center sm:text-left"
											: "hidden"
									}
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumberThree}`}
								>
									<span className="font-semibold uppercase font-Inter">
										Phone:{" "}
									</span>
									<span className="text-primary-default hover:text-accent-two hover:border-b-2">
										{globalContext?.themesOptionsContent?.phoneNumberThree}
									</span>
								</Link>
							</motion.div>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex mb-6 items-center"
						>
							<div className="hidden sm:flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-10 h-10 bg-primary-default rounded-full">
								<svg
									width="20"
									height="20"
									fill="none"
									viewBox="0 0 20 20"
									className="w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
										stroke="#ffffff"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</div>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="max-w-xl mx-auto sm:mx-0"
							>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-2 uppercase text-primary-default text-center sm:text-left font-semibold text-base"
								>
									Email
								</motion.h3>
								<Link
									className={
										globalContext?.themesOptionsContent?.email
											? "block text-tiny sm:text-base text-primary-default text-center sm:text-left hover:text-accent-two hover:border-b-2"
											: "hidden"
									}
									href={`mailto:${globalContext?.themesOptionsContent?.email}`}
									aria-label={`${globalContext?.themesOptionsContent?.email}`}
								>
									{globalContext?.themesOptionsContent?.email}
								</Link>
								<Link
									className={
										globalContext?.themesOptionsContent?.email
											? "block text-tiny sm:text-base text-primary-default text-center sm:text-left hover:text-accent-two hover:border-b-2"
											: "hidden"
									}
									href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
								>
									{globalContext?.themesOptionsContent?.emailTwo}
								</Link>
							</motion.div>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex items-center"
						>
							<div className="hidden sm:flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-10 h-10  bg-primary-default rounded-full">
								<svg
									fill="#000000"
									className="w-5 h-5"
									viewBox="0 0 512 512"
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
											fill="var(--ci-primary-color, #ffffff)"
											d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z"
										></path>
										<path
											fill="var(--ci-primary-color, #ffffff)"
											d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z"
										></path>
									</g>
								</svg>
							</div>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="max-w-xl mx-auto sm:mx-0"
							>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-2 uppercase text-primary-default text-center sm:text-left font-semibold text-base"
								>
									Address
								</motion.h3>
								<Paragraph
									content={globalContext?.themesOptionsContent?.address}
									tailwindStyling="max-w-xl mx-auto xl:mx-0 text-tiny sm:text-base text-primary-default text-center sm:text-left"
								/>
							</motion.div>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="mt-8 w-full"
						>
							<iframe
								width="100%"
								height="350"
								loading="lazy"
								style={{border: "0"}}
								allowFullScreen={true}
								referrerPolicy="no-referrer-when-downgrade"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.31598408805!2d-1.0435407230126865!3d50.84383265896122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874434a630a0755%3A0xbd936e04fe1b751a!2s43%20Lealand%20Rd%2C%20Drayton%2C%20Portsmouth%20PO6%201LZ!5e0!3m2!1sen!2suk!4v1716323451623!5m2!1sen!2suk"
							></iframe>
						</motion.div>
					</div>
					<FormikForm />
				</div>
			</div>
		</>
	);
};

export default ContactForm;
