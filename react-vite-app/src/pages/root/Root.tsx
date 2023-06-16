import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export default function Root() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* <ErrorBoundary> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </ErrorBoundary> */}
    </div>
  );
}
