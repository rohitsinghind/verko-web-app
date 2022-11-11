 export const styles = {
  
  maina: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "100px",
  },
  background: {
    // backgroundImage: require("../../assets/images/interiorup.png").URL,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  text1: {
    pt: "120px",
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "54px",
    fontFamily: "Open Sans",
    color: "#1D1D1D",
    '@media (max-width: 700px)': {
      fontSize: "35px",
      pt:"60px"
    },
  },
  text2: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "54px",
    fontFamily: "Open Sans",
    color: "#1D1D1D",
    '@media (max-width: 700px)': {
      fontSize: "35px",
    },
  },
  text3: {
    display: "flex",
    justifyContent: "center",
    py: 6,
    fontWeight: "700",
    fontSize: "30px",
    color: "#1D1D1D",
    fontFamily: "Open Sans",
    '@media (max-width: 700px)': {
      fontSize: "22px",
    },
  },
  downloadBtn: {
    color: "white",
    height: "49px",
    fontSize: "20px",
    fontFamily: "Open Sans",
    fontWeight: "700",
    background: "#F26225",
    '@media (max-width: 700px)': {
      fontSize: "17px",
    },
  },
  cardStack: {
    display: "flex",
    justifyContent: "center",
    pt: "50px",
    '@media (max-width: 700px)': {
      display:"inline"
    },
  },
  card: {
    width: "30%",
    position: "relative",
    mx:"5px",
    '@media (max-width: 700px)': {
      width: "98%",
      mt:"10px"
    },
  },
  CardContent: {
    mb: "40px",
  },
  cardHeadText: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#2D2D2D",
    fontFamily: "Open Sans",
    lineHeight: "24.51px",
  },
  cardBodyText: {
    pt: "10px",
    fontWeight: "400",
    fontSize: "20px",
    fontFamily: "Open Sans",
    lineHeight: "21.07px",
    color: "#6D6D6D",
  },
  cardBtn: {
    background: "#F26225",
    width: "38px",
    height: "38px",
    position: "absolute",
    right: "20px",
    bottom: "20px",
    "&:hover": {
      backgroundColor: "#d53f00",
    },
  },
  text4: {
    fontWeight: "700",
    fontSize: "34px",
    color: "#2D2D2D",
    fontFamily: "Open Sans",
    lineHeight: "32.68px",
    mt: "100px",
    '@media (max-width: 700px)': {
      fontSize: "28px",
    },
  },
  homeDesignCard: {
    mt: "60px",
    display: "flex",
    justifyContent: "center",
    '@media (max-width: 700px)': {
      display:"inline"
    },
  },
  homeDesigns:{
    width: "30%" ,
    mx:"5px",
    '@media (max-width: 700px)': {
      width: "98%",
      mt:"10px"
    },
  },
  homeDesignText: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "500",
    fontSize: "24px",
    color: "#2D2D2D",
    fontFamily: "Open Sans",
    lineHeight: "24.51px",
    mt: "20px",
  },
  bankCardBg: {
    background: "rgba(247, 161, 124, 0.2)",
    padding: "80px 70px",
    mt: "100px",
    '@media (max-width: 500px)': {
      padding: "50px 0px",
    },
  },
  bankCardStack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    my: "40px",
    '@media (max-width: 500px)': {
      my: "10px",
    },
  },
  bankCardText: {
    fontWeight: "700",
    fontSize: "34px",
    color: "#2D2D2D",
    fontFamily: "Open Sans",
    lineHeight: "32.68px",
    '@media (max-width: 500px)': {
     ml:"10px",
     fontSize: "28px",
    },
  },
  bankCardImg: {
    height: "220px",
    width: "22%",
    background: "white",
    '@media (max-width: 500px)': {
      height: "100px",
    },
  },
  bankCardImgPhone:{
    height: "50px",
    width: "35%",
    background: "white",
  },
  bankPreviousBtn: {
    background: "#F26225",
    width: "38px",
    height: "38px",
    margin: "30px",
    "&:hover": {
      backgroundColor: "#d53f00",
    },
    '@media (max-width: 500px)': {
      width: "24px",
      height: "24px",
    },
  },
  bankBackBtn: {
    background: "#F26225",
    width: "38px",
    height: "38px",
    margin: "30px",

    "&:hover": {
      backgroundColor: "#d53f00",
    },
    '@media (max-width: 500px)': {
      width: "24px",
      height: "24px",
    },
  },
  professional: {
    width: "50%",
    mx:"5px",
    '@media (max-width: 700px)': {
      width: "98%",
      mt:"10px"
    },
  },
  professionalsCard: {
    mt: "30px",
    display: "flex",
    '@media (max-width: 700px)': {
      display:"inline",
    },
  },
  professionalFlex:{
    display: "flex",
    width:"100%"
  },
  locationStack: {
    display: "flex",
    '@media (max-width: 700px)': {
      display:"inline"
    },
  },
  locationRightBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  locationBox: {
    my: "50px",
    display: "flex",
  },
  locationItem: {
    color: "#F26225",
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "28px",
    fontFamily: "Open Sans",
    lineHeight: "24.51px",
    justifyContent: "start",
    mr: "7vw",
    '@media (max-width: 700px)': {
      fontSize: "20px",
    },
  },
  locationImg: {
    width: "40%",
  },
  locationText: {
    fontWeight: "700",
    fontSize: "28px",
    color: "#4D4D4D",
    fontFamily: "Open Sans",
    lineHeight: "37.24px",
  },
  locationImgBox: {
    display: "flex",
    alignItems: "center",
  },
  downloadBox: {
    background: "rgba(247, 161, 124, 0.2)",
    mt: "60px",
  },
  downloadBox3: {
    display: "flex",
    alignItems: "center",
    '@media (max-width: 700px)': {
      display:"inline"
    },
  },
  downloadBox2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    '@media (max-width: 700px)': {
      width: "100%",
    },
  },
  downloadText: {
    fontWeight: "700",
    fontSize: "38px",
    color: "#1D1D1D",
    fontFamily: "Open Sans",
    lineHeight: "48.13px",
    '@media (max-width: 700px)': {
      fontSize: "24px",
    },
  },
  playIcon: {
    width: "280px",
    marginTop: "-70px",
    marginBottom: "-90px",
  },
  downloadImg: {
    width: "45%",
    marginRight: "20px",
  },
  downloadImgPhone: {
    width: "100%",
  },
  toolbar: {
    borderTop: "0.1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    height: "300px",
  },
  innerBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: "8px",
    '@media (max-width: 700px)': {
      width: 40,
      height: 40,
      marginRight: "0px",
    },
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "0.1px solid #ccc",
    backgroundColor: "white",
  },
  box: {
    display: "flex",
    alignItems: "center",
  },
  footerText: {
    color: "#2D2D2D",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: "24px",
    fontFamily: "Open Sans",
    lineHeight: "24.51px",
    '@media (max-width: 700px)': {
      fontSize: "17px",
    },
  },
  footerIcon: {
    width: "50",
    height: "50",
    m: "10px",
    color: "#F26225",
    '@media (max-width: 700px)': {
      width: "20",
      height: "20",
      m: "0px"
    },
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    paddingBottom: "16px",
  },
  flex:{
    display:"flex",
    justifyContent: "center",
  }
};
