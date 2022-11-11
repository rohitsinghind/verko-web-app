export const styles = {
  boxHeight: { height: "40vh", overflow: "scroll", overflowX: "hidden" },
  box: {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
      width: '400px'
    },
  },
  head: {
    ml: 1,
    color: "black"
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 1,
    paddingLeft: 2,
    paddingRight: 2,
    borderBottom: '0.1px solid #eee'
  },
  timeText: {
    color: "gray",
  },
  postImage: {
    height: 40,
    width: 80,
  },
  nocomments: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};
