import Alert from 'react-bootstrap/Alert';

function Home() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, your authentication successfull</Alert.Heading>
      <p>
        Simple user Authentication using MERN Stack by Joseph Liyon PT
      </p>
      <hr />
        <Alert.Link style={{textDecorationLine:'none'}} href='https://github.com/jliyon23' >Github       </Alert.Link>
        <Alert.Link style={{textDecorationLine:'none'}} href='https://www.linkedin.com/in/joseph-liyon-9619ab250/' >LinkdIn        </Alert.Link>
        <Alert.Link style={{textDecorationLine:'none'}} href='https://www.instagram.com/liyon.raw/' >Instagram      </Alert.Link>
    </Alert>
  );
}

export default Home;