import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/system';
import Container from '../../components/Container';
import ProductCard from '../../components/ProductCard';
import keyboards from '../../mocks/keyboards';
import keyboardBG from '../../assets/keyboard_bg.jpg';
import BackgroundImage from '../../components/Image/BackgroundImage';

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
          href="#keyboards"
        >
          KEYBOARDS
        </Typography>
      </BackgroundImage>
      <Container sx={{
        mt: theme.spacing(5),
      }}
      >
        <Typography
          sx={{
            textAlign: 'center',
          }}
          id="keyboards"
          color="primary.contrastText"
          variant="h1"
          component="h1"
        >
          PRODUCT LIST
        </Typography>
        <Grid container spacing={2}>
          {keyboards.map(({ product, image }) => (
            <Grid item xs={3}>
              <ProductCard product={product} image={image} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
