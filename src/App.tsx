// Internal deps
import AppProvider from '@/context/app';
import SearchTourForm from "@/components/features/searchTourForm";

const App = () => {

  return (
    <AppProvider>
      <SearchTourForm/>
    </AppProvider>
  )
}

export default App
