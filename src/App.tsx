// Internal deps
import AppProvider from '@/context/app';
import SearchTour from '@/pages/SearchTour';

const App = () => {
  return (
    <AppProvider>
      <SearchTour />
    </AppProvider>
  )
}

export default App
