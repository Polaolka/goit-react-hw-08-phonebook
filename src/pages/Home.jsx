import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#fff',
      display: 'block',
      width: '400px',
      margin: '30px 60px auto auto',
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };
  
  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
        Say goodbye to lost phone numbers - with our app!
          <span role="img" aria-label="Greeting icon">
            <EmojiPeopleOutlinedIcon fontSize="large"/>
          </span>
        </h1>
      </div>
    );
  }
  