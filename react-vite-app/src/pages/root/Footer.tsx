import { Container } from 'react-bootstrap';
import { BsHeartHalf } from 'react-icons/bs';

export const Footer = () => {
  return (
    <div
      className="bg-light d-flex align-items-center"
      style={{ minHeight: '5.5rem', marginTop: 'auto' }}
    >
      <Container>
        <p style={{ margin: '0' }} className="text-end">
          Сделано с любовью <BsHeartHalf />
        </p>
      </Container>
    </div>
  );
};
