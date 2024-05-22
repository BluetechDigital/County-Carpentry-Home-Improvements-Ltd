import {useState, useEffect} from "react";

function useWindowWidth() {
	// Initialize state with a default value
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 0
	);

	useEffect(() => {
		// Check if window is defined (browser environment)
		if (typeof window !== "undefined") {
			// Handler to call on window resize
			const handleResize = () => {
				setWindowWidth(window.innerWidth);
			};

			// Add event listener for window resize
			window.addEventListener("resize", handleResize);

			// Call handler once to set initial size
			handleResize();

			// Cleanup function to remove the event listener
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []); // Empty array ensures this effect is only run on mount and unmount

	return windowWidth;
}

export default useWindowWidth;
