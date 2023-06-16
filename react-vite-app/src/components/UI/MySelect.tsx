import Form from 'react-bootstrap/Form';

type SelectOption = {
  value: string;
  name: string;
};

type SelectProps = {
  options: Array<SelectOption>;
  defaultValue: string;
  value: string;
  onChange: (arg0: string) => void;
};

export const MySelect = ({
  options,
  defaultValue,
  value,
  onChange,
}: SelectProps) => {
  return (
    <Form.Select
      style={{ width: 'fit-content' }}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Form.Select>
  );
};
