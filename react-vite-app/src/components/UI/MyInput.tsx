import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from 'react-icons/ai';
import CloseButton from 'react-bootstrap/CloseButton';

type InputProps = {
  value: string;
  onChange: (arg0: string) => void;
  placeholder: string;
};

export const MyInput = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <InputGroup style={{ maxWidth: '500px' }}>
      <InputGroup.Text id="basic-addon1">
        <AiOutlineSearch />
      </InputGroup.Text>
      <Form.Control
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-end pe-4"
      />
      <CloseButton
        className="position-absolute top-50 end-0 translate-middle rounded"
        style={{ fontSize: '11px', zIndex: '5' }}
        onClick={() => onChange('')}
        hidden={!value}
      />
    </InputGroup>
  );
};
