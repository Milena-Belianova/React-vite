import { Spinner } from 'react-bootstrap';

export const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '10%' }}
    >
      <Spinner
        animation="grow"
        role="status"
        style={{ width: '3rem', height: '3rem' }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
