import { useState } from 'react';
import { Card, Button, Collapse, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../redux/slices/postsSlice';

export const PostItem = ({ title, body, userId }: Post) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Card
      style={{ minWidth: '19rem' }}
      className="flex-grow-1 flex-row bg-light"
    >
      <div
        className="d-flex p-3 align-items-center justify-content-center"
        style={{ height: '100%' }}
      >
        <Image
          src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          style={{ maxWidth: '7rem', maxHeight: '7rem', cursor: 'pointer' }}
          className="img-thumbnail"
          alt="user avatar"
          roundedCircle
          onClick={() => navigate(`/user/${userId}`)}
        />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text"
          aria-expanded={open}
          variant="outline-primary"
        >
          Комментарии
        </Button>
        <Collapse in={open}>
          <div
            className="card card-body"
            id="collapse-text"
            style={{ marginTop: '16px' }}
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};
