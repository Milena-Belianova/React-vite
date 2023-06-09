import { useState } from 'react';
import { Card, Button, Collapse, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export type PostItemType = {
  id?: number;
  title: string;
  text: string;
};

export const PostItem = ({ title, text }: PostItemType) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      style={{ minWidth: '19rem' }}
      className="flex-grow-1 flex-row bg-light"
    >
      <Link to="/user">
        {/* <Card.Img variant="left" src="holder.js/100px180" /> */}
        <div
          className="d-flex p-3 align-items-center justify-content-center"
          style={{ height: '100%' }}
        >
          <Image
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
            style={{ maxWidth: '7rem', maxHeight: '7rem' }}
            className="img-thumbnail"
            alt="user avatar"
            roundedCircle
          />
        </div>
      </Link>
      <Card.Body>
        <Card.Title className="text-capitalize">{title}</Card.Title>
        <Card.Text className="text-capitalize">{text}</Card.Text>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="outline-primary"
        >
          Comments
        </Button>
        <Collapse in={open}>
          <div
            className="card card-body"
            id="example-collapse-text"
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
