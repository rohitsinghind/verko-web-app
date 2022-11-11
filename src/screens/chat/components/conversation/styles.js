
export const styles = {
  conversationBox: {
    flex: 7,
    display: "flex",
    flexDirection: 'column',
    position: 'relative'
  },
  mainMessages: {
    overflow: "scroll",
    overflowX: "hidden",
    flex: 1,
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  placeHolder: {
    flex: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative'
  },
  commentInputBox: {
    borderTop: '1px solid #ddd',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    display: 'flex',
  },
  header: {
    borderBottom: '1px solid #ddd',
    width: '100%',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    display: 'flex',
  },
  commentInput: {
    fontSize: 15,
    flex: 1
  },
  rightMainBox: {
    width: '100%',
    padding: '16px',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  leftMainBox: {
    width: '100%',
    padding: '8px',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  messageLeftBox: {
    minWidth: '200px',
    maxWidth: '340px',
    backgroundColor: '#00abfb',
    borderRadius: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  messageRightBox: {
    minWidth: '200px',
    maxWidth: '340px',
    backgroundColor: '#ccc',
    borderRadius: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    position: 'relative',
  },
  date: {
    fontSize: 12,
  },
  leftText: {
    color: 'white',
  },
  rightText: {
    color: 'black',
  }
};