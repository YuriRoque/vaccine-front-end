import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Scheduler from './pages/Scheduler';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route element={<Home />} index />
            <Route path='scheduler' element={<Scheduler />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
