
import Counter from './components/Counter';
import AuthForm from './components/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
    {/* <AuthForm/> */}
    {/* <Counter /> */}
    <Route path="/" element={<AuthForm />} />
        <Route path="/counter" element={<Counter />} />
    <Route path='/userprofile' element={<UserProfile/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
