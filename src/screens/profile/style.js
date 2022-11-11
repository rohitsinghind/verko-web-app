export const styles = {
  paper: {
    display: "flex",
    overflow: "scroll",
    overflowX: "hidden",
    alignItems: "center",
    flexDirection: "column",
    height: "92vh",
    backgroundColor: '#F2F2F2',
    '@media (max-width: 850px)': {
      height: "100%",
    },
  },
  innerPaper: {
    width: "60%",
    height: "100%",
    display: "flex",
    '@media (max-width: 850px)': {
      display: "inline",
      width: "100%",
    },
  },
};
