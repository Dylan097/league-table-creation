import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import CreateLeague from './pages/CreateLeague';

function App() {

  return (
    <div className={styles.App}>
      <div className={styles.Nav}>
        <NavBar />
      </div>
      <Routes>
      <Route
      exact
      path="/leagues/create"
      element={<CreateLeague />} />
      </Routes>
    </div>
  )
}

export default App;
