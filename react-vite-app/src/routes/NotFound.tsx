import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Такой страницы нет =(</h1>
      <Link to="/">На главную</Link>
    </>
  );
}

export default NotFound;
