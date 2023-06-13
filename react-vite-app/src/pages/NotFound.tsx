import { Link } from 'react-router-dom';
import { Button, Container, Stack } from 'react-bootstrap';

export const NotFound = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-fill">
      <Stack className="d-flex align-items-center mb-5 mt-5" gap={2}>
        <h3 className="fw-semibold fst-italic text-secondary">
          Такой страницы нет =(
        </h3>
        <Link to="/">
          <Button variant="primary">На главную</Button>
        </Link>
      </Stack>
    </Container>
  );
};
