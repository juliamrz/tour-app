// Internal deps
import AppProvider from '@/context/app';
import SearchTourForm from '@/components/features/SearchTourForm';
import TourList from '@/components/features/TourList';
import Section from '@/components/ui/Section';

const App = () => {
  return (
    <AppProvider>
      <Section>
        <SearchTourForm/>
      </Section>
      <TourList />
    </AppProvider>
  )
}

export default App
