export const styles = {
  box: {
    elevation: 1,
    sx: {
      overflow: "visible",
      filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.32))',
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
      width: '200px'
    },
  },
  divider: {
    height: 1.5
  }
};