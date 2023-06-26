import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <div className={styles.App}>
      <div className={styles.Nav}>
        <NavBar />
      </div>
      <div>
        <h1>Create a League</h1>
        <Row>
          <Col xs={{ span: 6, offset: 3 }} className={styles.Form}>
            <Form>
              <Form.Group controlId='leagueName'>
                <Form.Label>League Name</Form.Label>
                <Form.Control type='text' placeholder='Enter League Name' required />
              </Form.Group>
              <Form.Group controlId='leagueType'>
                <Form.Label>League Type</Form.Label>
                <Form.Check type='radio' label='Solo' name='leagueType' id='solo' />
                <Form.Check type='radio' label='Team' name='leagueType' id='team' required />
              </Form.Group>
              <Button type='submit'>Create League</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App;
