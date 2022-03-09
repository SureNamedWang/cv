import "../styles/globals.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
		>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
