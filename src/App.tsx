// internal deps
import AppProvider from '@/context/app';
import SearchTourForm from "@/components/features/searchTourForm";

const App = () => {

  return (
    <AppProvider>
      <div>
        <SearchTourForm/>
      </div>
    </AppProvider>
  )
}

export default App
