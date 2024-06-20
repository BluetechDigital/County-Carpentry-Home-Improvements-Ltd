// Imports
import type {AppProps} from "next/app";

// Styling
import "../styles/globals.scss";

// Global Context Provider
import {IGlobalProps} from "@/types/context";

// Queries Functions
import {
	getMobileLinks,
	getCopyrightLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getOurServicesSublinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllOurProjectsContent} from "@/functions/graphql/Queries/GetAllOurProjects";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/functions/graphql/Queries/GetAllTestimonials";

// Components
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import GlobalContextProvider from "@/context/providers/GlobalContextProvider";
import ApolloContextProvider from "@/context/providers/ApolloContextProvider";

const App = async ({children}: AppProps | any) => {
	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const mobileLinks: any = await getMobileLinks();
	const copyrightLinks: any = await getCopyrightLinks();
	const navbarMenuLinks: any = await getNavbarMenuLinks();
	const footerMenuLinks: any = await getFooterMenuLinks();
	const ourProjects: any = await getAllOurProjectsContent();
	const testimonials: any = await getAllTestimonialsContent();
	const servicesSublinks: any = await getOurServicesSublinks();
	const themesOptionsContent: any = await getThemesOptionsContent();

	const globalProps: IGlobalProps = {
		mobileLinks: mobileLinks,
		ourProjects: ourProjects,
		testimonials: testimonials,
		copyrightLinks: copyrightLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		servicesSublinks: servicesSublinks,
		themesOptionsContent: themesOptionsContent,
	};

	return (
		<html lang="en">
			<body>
				<ApolloContextProvider>
					<GlobalContextProvider globalProps={globalProps}>
						<Navbar />
						<main>{children}</main>
						<Footer />
					</GlobalContextProvider>
				</ApolloContextProvider>
			</body>
		</html>
	);
};

export default App;
