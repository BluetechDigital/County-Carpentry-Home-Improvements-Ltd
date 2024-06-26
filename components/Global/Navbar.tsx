"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, FC, Fragment} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Navbar.module.scss";

// Components
import SideMenu from "@/components/Elements/SideMenu";
import NoticeInfoBanner from "@/components/NoticeInfoBanner";
import NavbarContactInfoBanner from "@/components/Elements/NavbarContactInfoBanner";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);
	const [navBackgroundSublinksOpen, setNavBackgroundSublinksOpen]: any =
		useState(false);
	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
		useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	/* Display's Navbar background Color
	when Mega sublinks are hover*/
	const displayNavBackgroundColor = () => {
		setNavBackgroundSublinksOpen(!navBackgroundSublinksOpen);
	};

	// Hides or Display Our Services sublinks
	const displayOurServicesSublinks = () => {
		setOurServicesSublinksOpen(!ourServicesSublinksOpen);
	};

	const resetNavbarStyling = () => {
		setNavBackgroundSublinksOpen(false);
		setOurServicesSublinksOpen(false);
	};

	return (
		<>
			<nav className={styles.navbar + ` z-[999] h-fit w-full fixed`}>
				<NoticeInfoBanner />
				<NavbarContactInfoBanner />
				<div className="flex p-0 bg-primary-default">
					<div className="w-full flex items-center gap-4 container lg:mx-auto pl-4 pr-0 sm:px-4">
						<Link href="/">
							<Image
								priority
								width={1000}
								height={1000}
								alt="County Carpentry & Home Improvements Ltd Logo"
								src="/img/logos/county-carpentry-home-improvements-ltd-logo-white.png"
								className="object-contain object-center w-[275px] md:w-[225px] h-[70px] py-2"
							/>
						</Link>
						<div className="w-1/4 sm:w-full flex flex-row items-baseline gap-2 py-2 px-0">
							<Link
								className="flex items-center justify-center p-2 w-fit h-full rounded-full md:hidden bg-accent-two hover:bg-accent-three transition-all duration-200 ease-in-out"
								href={`mailto:${globalContext?.themesOptionsContent?.email}`}
								aria-label={`${globalContext?.themesOptionsContent?.email}`}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									className="w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
										stroke="#000"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</Link>
							<Link
								className="flex items-center justify-center p-2 w-fit h-full rounded-full md:hidden bg-accent-two hover:bg-accent-three transition-all duration-200 ease-in-out"
								href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
								aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
							>
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
											stroke="#000"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>{" "}
									</g>
								</svg>
							</Link>
						</div>
					</div>
					<div className="hidden w-full lg:min-w-[45%] 2xl:min-w-[40%] lg:flex items-center justify-center gap-8 2xl:gap-12 xl:gap-24">
						<div className="hidden lg:flex items-center justify-end">
							<div className="hidden xl:flex items-center gap-8">
								<ul className="flex lg:items-center">
									{globalContext?.navbarMenuLinks?.length > 0 ? (
										globalContext?.navbarMenuLinks?.map(
											(item: any, index: number) => (
												<Fragment key={index}>
													{item?.node?.url === "/services" ? (
														<motion.li
															custom={index}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
															className="relative group py-0 px-2"
														>
															<div className="w-full flex flex-row justify-center items-center gap-2 cursor-pointer">
																<Link
																	href={`${item?.node?.url}`}
																	target={`${
																		item?.node?.target
																			? item?.node?.target
																			: "_self"
																	}`}
																	aria-label={`${item?.node?.label}`}
																	onClick={resetNavbarStyling}
																>
																	<h3 className="font-normal tracking-wide text-white group-hover:text-accent-two text-base text-center uppercase">
																		{item?.node?.label}
																	</h3>
																</Link>
																<Image
																	width={550}
																	height={550}
																	alt="Black Arrow Icon"
																	onClick={displayOurServicesSublinks}
																	src="/svg/navigation-menu-dropdown-arrow-white.svg"
																	className={`${
																		ourServicesSublinksOpen
																			? "rotate-180"
																			: "rotate-0"
																	} cursor-pointer w-[22px] h-[22px] object-contain object-center`}
																/>
															</div>
															{ourServicesSublinksOpen ? (
																<>
																	<div
																		onMouseLeave={resetNavbarStyling}
																		onMouseEnter={displayNavBackgroundColor}
																	>
																		<div className="fixed mt-[1.3rem] w-fit mx-auto left-0 right-0 bg-white flex flex-col items-center justify-center border-l-8 border-solid border-accent-default">
																			<ul
																				className={
																					styles.ourServicesSublinks +
																					" p-4 w-fit grid grid-cols-3 gap-4 z-[999]"
																				}
																			>
																				{globalContext?.servicesSublinks
																					?.length > 0 ? (
																					globalContext?.servicesSublinks?.map(
																						(item: any, index: number) => (
																							<Fragment key={index}>
																								<motion.li
																									custom={index}
																									initial={initial}
																									whileInView="animate"
																									viewport={{once: true}}
																									variants={
																										arrayLoopStaggerChildren
																									}
																								>
																									<Link
																										href={`${item?.node?.url}`}
																										target={`${
																											item?.node?.target
																												? item?.node?.target
																												: "_self"
																										}`}
																										aria-label={`${item?.node?.label}`}
																										className={` ${
																											ourServicesSublinksOpen
																												? "w-full text-center text-primary-default hover:text-white hover:bg-accent-two"
																												: "text-primary-default"
																										} block p-4 font-Inter uppercase text-base`}
																									>
																										{item?.node?.label}
																									</Link>
																								</motion.li>
																							</Fragment>
																						)
																					)
																				) : (
																					<></>
																				)}
																			</ul>
																		</div>
																	</div>
																</>
															) : null}
														</motion.li>
													) : (
														<motion.li
															custom={index}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
														>
															<Link
																href={`${item?.node?.url}`}
																target={`${
																	item?.node?.target
																		? item?.node?.target
																		: "_self"
																}`}
																aria-label={`${item?.node?.label}`}
															>
																<h3 className="py-0 px-4 font-semibold tracking-wide text-white hover:text-accent-two text-base text-center uppercase">
																	{item?.node?.label}
																</h3>
															</Link>
														</motion.li>
													)}
												</Fragment>
											)
										)
									) : (
										<></>
									)}
								</ul>
							</div>
						</div>
					</div>
					<div className="w-1/3 sm:w-full px-4 flex flex-row items-center justify-end gap-2">
						<Image
							width={1000}
							height={1000}
							alt={`City Guilds Logo`}
							src="/img/City-Guilds.png"
							className="hidden md:block object-contain object-center w-fit md:w-[100px] h-[60px]"
						/>
						<Image
							width={1000}
							height={1000}
							alt={`Checkatrade Logo`}
							src="/img/Checkatrade_Logo_2023.png"
							className="hidden md:block object-contain object-center w-fit md:w-[150px] h-[50px]"
						/>
					</div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex flex-col xl:hidden items-center justify-center"
					>
						<button
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={
								menuActive
									? styles.navToggleOpen
									: styles.navToggle +
									  ` ${
											globalContext?.themesOptionsContent?.displayNoticeBanner
												? "top-[62.5px]"
												: "top-[20px]"
									  }`
							}
						>
							<span aria-hidden="true"></span>
						</button>
					</motion.div>
				</div>

				{/* Hidden Tablet & Mobile  Side Menu */}
				<div className={menuActive ? "flex flex-col xl:hidden" : "hidden"}>
					<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
