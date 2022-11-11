export const styles = {
  postBox: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    background: "black",
    minWidth: '400px',
    position: 'relative',
  },
  postImg: {
    maxHeight: "100%",
    height: "auto",
    maxWidth: "100%",
    width: '400px',
    objectFit: 'contain',
  },
  addImageBox: {
    position: 'absolute',
    bottom: 0,
    height: 120,
    pl: 2,
    pr: 2,
    right: 0,
    left: 0,
    backgroundColor: '#00000044',
    gridAutoFlow: "column",
    overflow: 'scroll',
    overflowY:"hidden",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "::-webkit-scrollbar": {
      height:'5px'
    },
    "::-webkit-scrollbar-thumb": {
      background: "#696969",
      borderRadius: "10px"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#adadad",
      borderRadius: "10px"
    },
    "::-webkit-scrollbar-track ": {
      background: "#2f2f2f",
      borderRadius: "10px"
    }
  },
  image: selected => ({
    width: 80,
    height: 110,
    // objectFit: 'contain',
    border: `${selected ? '1px' : '0px'} solid white`,
    borderRadius: 2,
  }),
};