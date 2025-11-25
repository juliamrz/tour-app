// External deps
import { Routes, Route } from 'react-router-dom';

// Internal deps
import AppProvider from '@/context/app';
import SearchTour from '@/pages/SearchTourPage';
import TourPage from '@/pages/TourPage';

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<SearchTour />} />
        <Route path="/tour/:priceId/:hotelId" element={<TourPage />} />
      </Routes>
    </AppProvider>
  )
}

export default App
