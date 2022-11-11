export const styles = {
  paper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    overflow: "scroll",
    height: "92vh",
    backgroundColor: '#F1F2F2',
  },
  innerPaper: {
    width: "60%",
    height: "98%",
    backgroundColor: '#F1F2F2',
    '@media (max-width: 900px)': {
      width: '95%',
    },
  },
  placeHolder: {
    width: '100%',
    height: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column',
  },
};
