export const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: 2
  },
  innerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
    '@media (max-width: 900px)': {
      width: '95%',
      '@media (max-width: 700px)': {
        justifyContent: 'center',
      },
    },
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: '8px',
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    fontSize: 28,
    color: '#111111'
  },
  stack: {
    alignItems: 'center',
    '@media (max-width: 700px)': {
     ml:"15%"
    },
  },
  avatar: border => ({
    width: 28,
    height: 28,
    border: `${border ? '2px' : '0px'} solid #00abfb`
  }),
};
