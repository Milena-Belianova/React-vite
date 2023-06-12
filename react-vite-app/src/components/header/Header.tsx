import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="bg-light">
      <Container>
        {['lg'].map((expand) => (
          <Navbar key={expand} expand={expand} style={{ minHeight: '5.5rem' }}>
            <Container className="p-0">
              <Link to="/" className="navbar-brand">
                <div
                  className="logo rounded border fst-italic "
                  style={{ padding: '0.2rem', paddingRight: '0.4rem' }}
                >
                  <span
                    className="bg-primary bg-gradient shadow-sm rounded fst-normal fw-semibold text-white"
                    style={{ padding: '0.6rem' }}
                  >
                    По
                  </span>{' '}
                  стик
                </div>
              </Link>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Stack direction="horizontal" gap={2}>
                      <Image
                        src="src/assets/my-ava.jpg"
                        style={{
                          width: '4rem',
                          height: '4rem',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                        className="img-thumbnail img-fluid"
                        alt="user avatar"
                        roundedCircle
                      />
                      <Stack>
                        <p className="mb-0">Милена Белянова</p>
                        <a
                          href="mailto:milenabelianova@yandex.ru?subject=Офер"
                          className="fs-6"
                        >
                          milenabelianova@yandex.ru
                        </a>
                      </Stack>
                    </Stack>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to="/" className="nav-link">
                      Список постов
                    </Link>
                    <Link to="/about" className="nav-link">
                      Обо мне
                    </Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </Container>
    </div>
  );
};
