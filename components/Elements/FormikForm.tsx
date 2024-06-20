"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import {ISendContactForm} from "@/types/email";
import {useGlobalContext} from "@/context/global";
import {sendContactForm} from "@/lib/contactForm";
import React, {useState, FC, Fragment} from "react";
import {useFormik, Formik, Field, Form} from "formik";

// Styling
import styles from "@/styles/components/ContactForm.module.scss";

const FormikForm: FC = () => {
	const router: any = useRouter();
	const globalContext = useGlobalContext();

	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.firstName) {
			errors.firstName = "Required*";
		} else if (values?.firstName.length >= 16) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required*";
		} else if (values.lastName.length >= 21) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values?.phoneNumber) {
			errors.phoneNumber = "Required*";
		} else if (values?.phoneNumber.length < 1) {
			errors.phoneNumber = "Please inform us about the topic.";
		}

		if (!values?.selectedServices) {
			errors.selectedServices = "Required*";
		} else if (values?.selectedServices.length <= 0) {
			errors.selectedServices = "Please inform us about the topic.";
		}

		if (!values?.subject) {
			errors.subject = "Required*";
		} else if (values?.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your enquiry.";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			selectedServices: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: ISendContactForm) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
					await sendContactForm(values);
				} catch (error) {
					setErrorMessage(true);
					throw new Error(
						"Error Message: Something went wrong with Sending your Message. Please try again."
					);
				}
			} else {
				throw new Error(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		setErrorMessage(false);
		if (reCaptchaResult) {
			try {
				setLoading(true);
				/* Send Form Content */
				formik.handleSubmit();
				setLoading(false);
				setMessageSent(true);
				setTimeout(() => {
					router.reload();
				}, 3000);
			} catch (error) {
				setErrorMessage(true);
				throw new Error(
					"Error Message: Something went wrong with Sending your Message. Please try again."
				);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
	};

	return (
		<Formik
			onSubmit={formik?.onSubmit}
			initialValues={formik?.initialValues}
			className="w-full lg:w-1/2"
		>
			<Form className="lg:container mx-auto py-10 px-6 md:max-w-xl shadow-2xl border-4 border-primary-default">
				{loading ? (
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex items-center justify-center my-4 mb-8 gap-x-2"
					>
						<h3 className="text-xl font-semibold uppercase text-primary-default">
							Sending Message...
						</h3>
					</motion.div>
				) : messageSent ? (
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex items-center justify-center my-4 mb-8 gap-x-2"
					>
						<h3 className="text-xl font-semibold text-center uppercase text-primary-default">
							Message Sent!
						</h3>
					</motion.div>
				) : errorMessage ? (
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex items-center justify-center my-4 mb-8 gap-x-2"
					>
						<h3 className="text-xl font-semibold text-center uppercase text-primary-default">
							Error Message: Something went wrong with sending your message.
							Please try again.
						</h3>
					</motion.div>
				) : (
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-6"
					>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto xl:mx-0 uppercase text-primary-default text-center font-semibold text-lg md:text-xl"
						>
							Get In Touch
						</motion.h3>
					</motion.div>
				)}

				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col gap-4"
				>
					<div className="flex flex-col sm:flex-row gap-4">
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full"
						>
							{formik?.touched?.firstName && formik?.errors?.firstName ? (
								<div>
									<p className="py-1 text-left text-tiny text-primary-default ">
										{formik?.errors?.firstName}
									</p>
								</div>
							) : null}
							<Field
								id="firstName"
								name="firstName"
								placeholder="First Name"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.firstName}
								className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-primary-default focus:border-primary-default focus:ring-[1px] focus:ring-primary-default"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full"
						>
							{formik?.touched?.lastName && formik?.errors?.lastName ? (
								<div>
									<p className="py-1 text-left text-tiny text-primary-default ">
										{formik?.errors?.lastName}
									</p>
								</div>
							) : null}
							<Field
								id="lastName"
								name="lastName"
								placeholder="Last Name"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.lastName}
								className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-primary-default focus:border-primary-default focus:ring-[1px] focus:ring-primary-default"
							/>
						</motion.div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full"
						>
							{formik?.touched?.phoneNumber && formik?.errors?.phoneNumber ? (
								<div>
									<p className="py-1 text-left text-tiny text-primary-default ">
										{formik?.errors?.phoneNumber}
									</p>
								</div>
							) : null}
							<Field
								id="phoneNumber"
								name="phoneNumber"
								type="number"
								placeholder="Phone Number"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.phoneNumber}
								className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-primary-default focus:border-primary-default focus:ring-[1px] focus:ring-primary-default"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full"
						>
							{formik?.touched?.subject && formik?.errors?.subject ? (
								<div>
									<p className="py-1 text-left text-tiny text-primary-default ">
										{formik?.errors?.subject}
									</p>
								</div>
							) : null}
							<Field
								id="subject"
								name="subject"
								type="text"
								placeholder="Subject"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.subject}
								className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-primary-default focus:border-primary-default focus:ring-[1px] focus:ring-primary-default"
							/>
						</motion.div>
					</div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="w-full"
					>
						{formik?.touched?.email && formik?.errors?.email ? (
							<div>
								<p className="py-1 text-left text-tiny text-primary-default ">
									{formik?.errors?.email}
								</p>
							</div>
						) : null}
						<Field
							id="email"
							name="email"
							type="email"
							placeholder="Email Address"
							onBlur={formik?.handleBlur}
							onChange={formik?.handleChange}
							value={formik?.values?.email}
							className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-primary-default focus:border-primary-default focus:ring-[1px] focus:ring-primary-default"
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="w-full"
					>
						{formik?.touched?.selectedServices &&
						formik?.errors?.selectedServices ? (
							<div>
								<p className="py-1 text-left text-tiny text-primary-default ">
									{formik?.errors?.selectedServices}
								</p>
							</div>
						) : null}
						<Field
							as="select"
							id="selectedServices"
							name="selectedServices"
							placeholder="Pick a Service"
							onBlur={formik?.handleBlur}
							onChange={formik?.handleChange}
							value={formik?.values?.selectedServices}
							className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-primary-default focus:border-primary-default focus:ring-[1px] focus:ring-primary-default"
						>
							<option
								disabled
								value=""
								className={
									formik?.touched?.selectedServices ? "hidden" : "block"
								}
							>
								Our Services
							</option>
							{globalContext?.servicesSublinks?.length > 0 ? (
								globalContext?.servicesSublinks?.map(
									(item: any, index: number) => (
										<Fragment key={index}>
											<option value={item?.node?.label}>
												{item?.node?.label}
											</option>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
							<option value="Other">Other</option>
						</Field>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						{formik?.touched?.message && formik?.errors?.message ? (
							<div>
								<p className="py-1 text-left text-tiny text-primary-default ">
									{formik?.errors?.message}
								</p>
							</div>
						) : null}
						<textarea
							rows={5}
							id="message"
							name="message"
							placeholder="Your message"
							onBlur={formik?.handleBlur}
							onChange={formik?.handleChange}
							value={formik?.values?.message}
							className="p-4 w-full h-48  text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-primary-default focus:border-primary-default resize-none focus:ring-[1px] focus:ring-primary-default"
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={
							formik?.touched?.firstName ||
							formik?.touched?.lastName ||
							formik?.touched?.email
								? "block"
								: "hidden"
						}
					>
						<ReCAPTCHA
							sitekey={`6LfNFeQpAAAAAB67GhX4AWGUV9M2CMtR6PU20RvL`}
							onChange={handleReCaptchaChange}
						/>
					</motion.div>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						onClick={onFormSubmit}
						disabled={
							!formik?.values?.firstName ||
							!formik?.values?.lastName ||
							!formik?.values?.email ||
							!formik?.values?.phoneNumber ||
							!formik?.values?.selectedServices ||
							!formik?.values?.subject ||
							!formik?.values?.message ||
							reCaptchaResult === null ||
							reCaptchaResult === undefined
						}
						className="w-fit mx-auto lg:mx-0 font-semibold tracking-wide disabled:bg-opacity-20 disabled:cursor-not-allowed"
						type="submit"
					>
						<span
							className={
								messageSent ? `${styles.messageSent}` : `${styles.submitButton}`
							}
						>
							<h3 className="tracking-widest uppercase font-Inter text-sm">
								{loading
									? "Sending Message..."
									: messageSent
									? "Message Sent!"
									: errorMessage
									? "Sending Error!"
									: "Send Message"}
							</h3>
						</span>
					</motion.button>
				</motion.div>
			</Form>
		</Formik>
	);
};

export default FormikForm;
