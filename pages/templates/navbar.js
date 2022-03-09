import { Container, Navbar } from "react-bootstrap";
import Sidebar from "./sidebar";

export default function Navigation() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">Home Bang</Navbar.Brand>
				<Sidebar />
			</Container>
		</Navbar>
	);
}
