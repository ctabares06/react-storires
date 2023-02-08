import { Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/system';
import Container from '../../components/Container';
import keyboardBG from '../../assets/keyboard_bg.jpg';
import BackgroundImage from '../../components/Image/BackgroundImage';
import Subtitle from './Subtitle';
import Contact from './Contact';

function Home() {
	const theme = useTheme();

	return (
		<>
			<BackgroundImage url={keyboardBG}>
				<Typography
					sx={{
						textDecoration: 'none',
					}}
					color="primary.contrastText"
					variant="h1"
					component="a"
				>
					CheapCaps
				</Typography>
			</BackgroundImage>
			<Container
				sx={{
					mt: theme.spacing(5),
				}}
			>
				<Subtitle label="About Us" />
				<Typography component="p" variant="body1" color="primary.contrastText">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					sunt, minus nemo eius earum vel deserunt, sint amet labore numquam
					animi quidem a sequi? Doloribus temporibus beatae ipsa quia. Tempore
					iste rem rerum eveniet dignissimos nesciunt sit, illo, magni ea vel
					commodi nemo suscipit esse sequi, nisi corrupti possimus in autem?
					Porro quas adipisci tempore aliquid ad at doloremque quod voluptatibus
					est consectetur, nesciunt modi vel odit suscipit? Incidunt accusamus
					mollitia, voluptatum quis tempore nostrum maxime velit voluptas itaque
					officiis tempora modi nulla nemo? In repudiandae voluptatum maiores
					beatae excepturi modi. Facilis aliquam eos soluta, debitis nulla
					quidem eveniet quibusdam?
				</Typography>
				<Subtitle label="Mission" />
				<Subtitle label="Vision" />
				<Contact />
			</Container>
		</>
	);
}

export default Home;
