import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div
      className="bg-light d-flex align-items-center"
      style={{ minHeight: '5.5rem', marginTop: 'auto' }}
    >
      <Container>
        <p style={{ margin: '0' }}>Footer</p>
      </Container>
    </div>
  );
};
