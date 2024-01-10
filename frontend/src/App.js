import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmissionForm from './components/SubmissionForm';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/submitidea' element={<SubmissionForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
