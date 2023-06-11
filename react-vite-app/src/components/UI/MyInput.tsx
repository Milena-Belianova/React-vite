/* eslint-disable import/no-cycle */
import { InputGroup, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

type InputProps = {
  value: string;
  onChange: (arg0: string) => void;
  placeholder: string;
};

export const MyInput = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <InputGroup style={{ maxWidth: '500px' }}>
      <Form.Control
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <Button variant="outline-secondary">Search</Button>
    </InputGroup>
  );
};
