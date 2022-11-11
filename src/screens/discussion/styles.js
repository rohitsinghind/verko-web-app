export const styles = {
  paper: {
    display: 'flex',
    overflow: "scroll",
    overflowX: "hidden",
    alignItems: 'center',
    flexDirection: 'column',
    height: '92vh',
    backgroundColor: '#F1F2F2',
  },
  innerPaper: {
    width: '40%',
    height: '98%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F1F2F2',
    '@media (max-width: 900px)': {
      width: '90%',
    },
  },
  placeholder: {
    height: '100%',
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};