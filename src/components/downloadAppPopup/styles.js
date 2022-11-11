export const styles = {
  image: {
    width: "60%",
  },
  imagePhone: {
    width: "100%",
  },
  downloadBoxStack: {
    display: "flex",
    "@media (max-width: 700px)": {
      display: "inline",
    },
  },
  downloadBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    "@media (max-width: 700px)": {
      width: "100%",
    },
  },
  text1: {
    fontWeight: "700",
    fontSize: "30px",
    fontFamily: "Open Sans",
    lineHeight: "35.51px",
    color: "#F26225",
    mb: "20px",
    "@media (max-width: 700px)": {
      fontSize: "25px",
    },
  },
  text2: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "500",
    fontSize: "20px",
    fontFamily: "Open Sans",
    lineHeight: "26.51px",
    color: "#1D1D1D",
    "@media (max-width: 700px)": {
      fontSize: "19px",
    },
  },
  iconCenter: {
    display: "flex",
    justifyContent: "center",
  },
  playIcon: {
    marginTop: "20px",
    width: "160px",
    height: "auto",
    padding: "20px 0px",
    "@media (max-width: 700px)": {
      width: "150px",
    },
  },
};
