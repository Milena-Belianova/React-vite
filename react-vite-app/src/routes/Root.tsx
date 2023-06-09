import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';

export default function Root() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {/* <ErrorBoundary> */}
      <Header />
      <Outlet />
      {/* </ErrorBoundary> */}
    </div>
  );
}
