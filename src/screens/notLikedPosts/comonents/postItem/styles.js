export const styles = {
  postImgView: {
    height: "300px",
    padding: "4px",
    display: 'felx',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImg: (height) => ({
    borderRadius: 2,
    height,
    transition: 'opacity 1s',
    border: height ? '1px solid #ccc' : null
  }),
  skelton: {
    height: "232px",
    borderRadius: 8,
  },
  countView: color => ({
    display: 'flex',
    position: 'absolute',
    top: '4px',
    right: '4px',
    borderRadius: 2,
    left: '4px',
    bottom: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    cursor: 'pointer'
  }),
  count: {
    fontSize: '20px',
    color: 'white'
  }
};
