import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
