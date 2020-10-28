import React from "react";
import { Menu, Container, Image, Header } from "semantic-ui-react";
import logo from "../images/logo.png";

const AppBar = () => {
	return (
		<Menu inverted>
			<Container>
				<Menu.Item as="a" href="/" header>
					<Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
					Global Acoustics
				</Menu.Item>
			</Container>
		</Menu>
	);
};

export default AppBar;
