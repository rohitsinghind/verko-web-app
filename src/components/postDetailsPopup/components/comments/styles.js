export const styles = {
  main: {
    width: '70vh',
    flex: 4,
    overflow: 'scroll',
    overflowX:"hidden",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    "::-webkit-scrollbar": {
      width:'5px'
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "10px"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
      borderRadius: "10px"
    },
    "::-webkit-scrollbar-track ": {
      background: "#f1f1f1",
      borderRadius: "10px"
    }
  },
  userDetails: {
    display: "flex",
    justifyContent: "space-between",
    padding: '16px',
    width: '70vh',
  },
  date: {
    fontSize: 12,
    minWidth: '100px',
    textAlign: 'flex-end',
  },
  nocomments: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};