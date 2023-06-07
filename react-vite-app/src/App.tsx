import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import { UserDetails } from './pages/UserDetails';
import { AboutMe } from './pages/AboutMe';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/user" element={<UserDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
