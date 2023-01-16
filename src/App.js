import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthcontext';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter >
        <Container>
          <Row>
            <Col>
              <UserAuthContextProvider>
            <Routes>
              <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
              <Route path='/' element={<Login/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
            </Routes>
              </UserAuthContextProvider>
            </Col>
          </Row>
        </Container>
      </BrowserRouter >
    </>
  );
}

export default App;
