export const styles = {
  postBox: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    flexDirection: 'column',
    background: "#333",
    minWidth: '500px',
    position: 'relative',
  },
  postImg: {
    width: "500px",
    height: "100%",
    objectFit: 'contain',
  },
  postImgBox: {
    width: "500px",
    maxHeight: "100%",
    height: "auto",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addImageBox: {
    borderRadius: '4px',
    position: 'absolute',
    bottom: 0,
    height: 120,
    right: '8px',
    left: '8px',
    pl: '8px',
    pr: '8px',
    backgroundColor: '#000000',
    gridAutoFlow: "column",
    overflow: 'scroll',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: border => ({
    width: '80px',
    height: '110px',
    backgroundColor: 'black',
    borderRadius: '4px',
    border: border ? '1px solid #00abfb' : null
  }),
  addImage: {
    width: 80,
    height: 110,
    backgroundColor: '#121212',
    borderRadius: '4px',
    border: '1px dashed #00abfb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};