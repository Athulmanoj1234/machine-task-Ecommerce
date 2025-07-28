import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ProductPage from './pages/ProductPage';
import SomethingWentWrongPage from './pages/SomethingWrong';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/some-wrong' element={<SomethingWentWrongPage />} />
        <Route path='not-found' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
