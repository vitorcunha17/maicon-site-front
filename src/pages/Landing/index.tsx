import React, { FunctionComponent } from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from '@material-ui/core';
import Header from './Header';
import { Carousel } from "react-responsive-carousel";
import img1 from "../../images/1.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import Grid from "@material-ui/core/Grid";
import FeaturedPost from './FeaturedPost';
import AboutUs from './AboutUs';
import Footer from './Footer';

const Landing: FunctionComponent = ({ }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <main>
          <br />
          <div style={{ marginBottom: 110 }}>
            <Carousel>
              <div style={{ height: "250px" }}>
                <img src={img4} alt="img1" />
              </div>
              <div style={{ height: "500px" }}>
                <img src={img3} alt="img3" />
              </div>
              <div style={{ height: "500px" }}>
                <img src={img1} alt="img4" />
              </div>
            </Carousel>
          </div>
          <div style={{ marginBottom: 110 }}>
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
              Depoimentos
            </h1>
            <br />
            <Grid container spacing={4}>
              <FeaturedPost />
            </Grid>
          </div>
          <div style={{ marginBottom: 90 }}>
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
              Nossa história
            </h1>
            <br />
            <AboutUs />
          </div>
          <Footer />
        </main>
      </Container>
    </>
  )
}

export default Landing
