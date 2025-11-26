// External deps
import type { PropsWithChildren } from 'react';

// Local deps
import './MainContainer.css';

const MainContainer = ({children}: PropsWithChildren) => {
  return (
    <main className="main">
      {children}
    </main>
  )
}

export default MainContainer;
