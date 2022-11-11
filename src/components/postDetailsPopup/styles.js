import { borderRadius, padding } from "@mui/system";

export const styles = {
  dialogbox: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeIcon: {
    height: 40,
    width: 40,
    color: "white",
  },
  previousBtn:{
    position: "absolute",
    left: 30
  },
  nextBtn:{
    position: "absolute",
    right: 30,
  },
  navigationIcon: {
    height: 40,
    width: 40,
    color: "black",
    background:"white",
    borderRadius:20,
  },
  paper: {
    display: "flex",
    justifyContent: "start",
    height: "98%",
    maxWidth: "75%",
  },
};
