import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
