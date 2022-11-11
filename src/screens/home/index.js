import React, { useState } from "react";
import "./styles.css";

import Navbar from "../../components/navbar";
import HomeDesigns from "./components/homeDesigns";
import ProfessionalCard from "./components/ProfessionalCard";
import BankSlider from "./components/BankSlider";
import DialogBox from "../../components/downloadAppPopup";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Toolbar from "@mui/material/Toolbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { CardActionArea } from "@mui/material";
import { styles } from "./styles";

export default function Index() {
  const mediaQuery = window.matchMedia("(min-width: 700px)");

  const [open, setOpen] = useState(false);

  return (
    <>
      <DialogBox open={open} setOpen={setOpen} />
      <body className="home-body" style={styles.background}>
        <Navbar />
        <Container maxWidth="xl">
          <Typography component="div" sx={styles.text1}>
            Tamil Nadu’s house design and
          </Typography>
          <Typography sx={styles.text2}>Construction Community</Typography>
          <Typography sx={styles.text3}>
            Home design ideas | Service providers | Home loans | Ask Queries
          </Typography>
          <a
            style={styles.maina}
            href="https://play.google.com/store/apps/details?id=in.verkoApp"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="follow-btn"
              color="orange"
              variant="contained"
              sx={styles.downloadBtn}
            >
              DOWNLOAD THE APP NOW
            </Button>
          </a>

          <Box sx={styles.cardStack}>
            <Card
              elevation={1}
              sx={styles.card}
              onClick={() => {
                setOpen(true);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="130px"
                  image={require("../../assets/images/interiordesign.png")}
                  alt=""
                />
                <CardContent sx={styles.CardContent}>
                  <Typography sx={styles.cardHeadText}>
                    Explore design ideas
                  </Typography>
                  <Typography sx={styles.cardBodyText}>
                    Thousands of bedroom, kitchen, bathroom, living room,
                    dining, roof, interior, furniture & many more designs
                  </Typography>
                </CardContent>
              </CardActionArea>
              <IconButton
                aria-label="more"
                variant="contained"
                sx={styles.cardBtn}
              >
                <ChevronRightIcon sx={{ color: "white" }} />
              </IconButton>
            </Card>

            <Card
              elevation={1}
              sx={styles.card}
              onClick={() => {
                setOpen(true);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="130px"
                  image={require("../../assets/images/professional.png")}
                  alt=""
                />
                <CardContent sx={styles.CardContent}>
                  <Typography sx={styles.cardHeadText}>
                    Find professionals
                  </Typography>
                  <Typography sx={styles.cardBodyText}>
                    Check profiles of verified Carpenters, Contractors, Interior
                    Designers & many more service providers
                  </Typography>
                </CardContent>
              </CardActionArea>
              <IconButton
                aria-label="more"
                variant="contained"
                sx={styles.cardBtn}
              >
                <ChevronRightIcon sx={{ color: "white" }} />
              </IconButton>
            </Card>

            <Card
              elevation={1}
              sx={styles.card}
              onClick={() => {
                setOpen(true);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="130px"
                  image={require("../../assets/images/homeloan.png")}
                  alt=""
                />
                <CardContent sx={styles.CardContent}>
                  <Typography sx={styles.cardHeadText}>
                    Get home loan
                  </Typography>
                  <Typography sx={styles.cardBodyText}>
                    Get loan from number of banks according to your needs and
                    interest rates.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <IconButton
                aria-label="more"
                variant="contained"
                sx={styles.cardBtn}
              >
                <ChevronRightIcon sx={{ color: "white" }} />
              </IconButton>
            </Card>

            <Card
              elevation={1}
              sx={styles.card}
              onClick={() => {
                setOpen(true);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="130px"
                  image={require("../../assets/images/discuss.png")}
                  alt=""
                />
                <CardContent sx={styles.CardContent}>
                  <Typography sx={styles.cardHeadText}>
                    Discuss with community
                  </Typography>
                  <Typography sx={styles.cardBodyText}>
                    Discuss and communicate with other users about your home
                    plans and ideas.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <IconButton
                aria-label="more"
                variant="contained"
                sx={styles.cardBtn}
              >
                <ChevronRightIcon sx={{ color: "white" }} />
              </IconButton>
            </Card>
          </Box>

          <Typography sx={styles.text4}>
            Discover home Design Ideas from Tamil Nadu
          </Typography>

          <Box sx={styles.homeDesignCard}>
            <HomeDesigns
              img={require("../../assets/images/bedroom.png")}
              text="Bedroom"
              open={open}
              setOpen={setOpen}
            />
            <HomeDesigns
              img={require("../../assets/images/kitchen.png")}
              text="Kitchen"
              open={open}
              setOpen={setOpen}
            />
            <HomeDesigns
              img={require("../../assets/images/livingroom.png")}
              text="Living room "
              open={open}
              setOpen={setOpen}
            />
            <HomeDesigns
              img={require("../../assets/images/bathroom.png")}
              text="Bathroom"
              open={open}
              setOpen={setOpen}
            />
          </Box>

          <Box sx={styles.homeDesignCard}>
            <HomeDesigns
              img={require("../../assets/images/storage.png")}
              text="Storage "
              open={open}
              setOpen={setOpen}
            />
            <HomeDesigns
              img={require("../../assets/images/furniture.png")}
              text="Furniture"
              open={open}
              setOpen={setOpen}
            />
            <HomeDesigns
              img={require("../../assets/images/dining.png")}
              text="Dining"
              open={open}
              setOpen={setOpen}
            />
            <HomeDesigns
              img={require("../../assets/images/staircase.png")}
              text="Staircase"
              open={open}
              setOpen={setOpen}
            />
          </Box>
        </Container>

        <BankSlider />

        <Container maxWidth="xl">
          <Typography sx={styles.text4}>
            Discover professionals from Tamil Nadu
          </Typography>

          <Box sx={styles.professionalsCard}>
            <Box sx={styles.professionalFlex}>
              <ProfessionalCard
                img={require("../../assets/images/architect.png")}
                text="Architect"
                open={open}
                setOpen={setOpen}
              />
              <ProfessionalCard
                img={require("../../assets/images/constructioncontracter.png")}
                text="Construction contracter"
                open={open}
                setOpen={setOpen}
              />
            </Box>
            <Box sx={styles.professionalFlex}>
              <ProfessionalCard
                img={require("../../assets/images/civil.png")}
                text="Civil engineer"
                open={open}
                setOpen={setOpen}
              />
              <ProfessionalCard
                img={require("../../assets/images/carpenter.png")}
                text="Carpenter "
                open={open}
                setOpen={setOpen}
              />
            </Box>
            <Box sx={styles.professionalFlex}>
              <ProfessionalCard
                img={require("../../assets/images/electrician.png")}
                text="Electrician "
                open={open}
                setOpen={setOpen}
              />
              <ProfessionalCard
                img={require("../../assets/images/flooring.png")}
                text="Flooring contracter"
                open={open}
                setOpen={setOpen}
              />
            </Box>
          </Box>
          <Box sx={styles.professionalsCard}>
            <Box sx={styles.professionalFlex}>
              <ProfessionalCard
                img={require("../../assets/images/mason.png")}
                text="Mason "
                open={open}
                setOpen={setOpen}
              />
              <ProfessionalCard
                img={require("../../assets/images/painter.png")}
                text="Painter"
                open={open}
                setOpen={setOpen}
              />
            </Box>
            <Box sx={styles.professionalFlex}>
              <ProfessionalCard
                img={require("../../assets/images/interiordesigner.png")}
                text="Interior design "
                open={open}
                setOpen={setOpen}
              />
              <ProfessionalCard
                img={require("../../assets/images/Plumber.png")}
                text="Plumber  "
                open={open}
                setOpen={setOpen}
              />
            </Box>
            <Box sx={styles.professionalFlex}>
              <ProfessionalCard
                img={require("../../assets/images/materialsupplier.jpg")}
                text="Materilal supplier"
                open={open}
                setOpen={setOpen}
              />
              <ProfessionalCard />
            </Box>
          </Box>

          <Typography sx={styles.text4}>We are now live at</Typography>
          <Box direction="row" spacing={2} sx={styles.locationStack}>
            {mediaQuery.matches ? (
              <>
                <Box sx={styles.locationRightBox}>
                  <div>
                    <Box sx={styles.locationBox}>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Madurai
                      </Stack>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Theni
                      </Stack>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Virudhunagar
                      </Stack>
                    </Box>

                    <Box sx={styles.locationBox}>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Dindigul
                      </Stack>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Sivagangai
                      </Stack>
                    </Box>
                  </div>
                </Box>
              </>
            ) : (
              <>
                <Box sx={styles.locationRightBox}>
                  <div>
                    <Box sx={styles.locationBox}>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Madurai
                      </Stack>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Theni
                      </Stack>
                    </Box>

                    <Box sx={styles.locationBox}>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Dindigul
                      </Stack>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Sivagangai
                      </Stack>
                    </Box>
                    <Box sx={styles.locationBox}>
                      <Stack direction="row" sx={styles.locationItem}>
                        <LocationOnIcon /> Virudhunagar
                      </Stack>
                    </Box>
                  </div>
                </Box>
              </>
            )}

            <Box direction="row" sx={styles.locationImgBox}>
              <img
                src={require("../../assets/images/Address-rafiki.png")}
                alt=""
                style={styles.locationImg}
              />
              <Box>
                <Typography sx={styles.locationText}>COMING SOON..</Typography>
                <Typography sx={styles.locationText}>
                  to other locations in Tamilnadu
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Stack direction="row" sx={styles.downloadBox}>
          <Container maxWidth="xl">
            <Stack direction="row" sx={styles.downloadBox3}>
              <Box sx={styles.downloadBox2}>
                <div>
                  <Typography sx={styles.downloadText}>
                    Download Verko App to make
                  </Typography>
                  <Typography sx={styles.downloadText}>
                    your dream home a reality.
                  </Typography>
                  <a
                    style={styles.playIcon}
                    href="https://play.google.com/store/apps/details?id=in.verkoApp"
                    target="_blank" rel="noreferrer"
                  >
                    <img
                      src={require("../../assets/images/googlePlay.png")}
                      alt=""
                      style={styles.playIcon}
                    />
                  </a>
                </div>
              </Box>
              {mediaQuery.matches ? (
                <img
                  src={require("../../assets/images/Build your home-bro.png")}
                  alt=""
                  style={styles.downloadImg}
                  className="downloadImg"
                />
              ) : (
                <img
                  src={require("../../assets/images/Build your home-bro.png")}
                  alt=""
                  style={styles.downloadImgPhone}
                  className="downloadImg"
                />
              )}
            </Stack>
          </Container>
        </Stack>
        <Container maxWidth="xl">
          <Toolbar sx={styles.toolbar}>
            <Box sx={styles.innerBox}>
              <CardMedia
                component="img"
                sx={styles.logo}
                image={require("../../assets/images/logo.png")}
              />
              <Typography sx={styles.footerText}>
                &copy;2022 Verko-app
              </Typography>
              <Box style={styles.box}>
                <div>
                  <Typography sx={styles.footerText}>Follow us on</Typography>
                  <FacebookIcon sx={styles.footerIcon} />
                  <InstagramIcon sx={styles.footerIcon} />
                  <YouTubeIcon sx={styles.footerIcon} />
                  <LinkedInIcon sx={styles.footerIcon} />
                </div>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </body>
    </>
  );
}
