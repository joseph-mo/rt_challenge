import { Routes, Route } from 'react-router-dom';
import NavigationBar from './share/NavigationBar';
import ReviewsList from './reviews/ReviewsList';
import ReviewDetail from './reviews/ReviewDetail';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ReviewsList />} />
        <Route path="/review/:id" element={<ReviewDetail />} />
      </Routes>
    </>
  );
};

export default App;
