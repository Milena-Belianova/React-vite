import { Stack } from 'react-bootstrap';
import { MyInput } from '../UI/MyInput';
import { MySelect } from '../UI/MySelect';

type Filter = {
  sort: string;
  query: string;
};

type PostFilterProps = {
  filter: Filter;
  setFilter: (arg0: Filter) => void;
};

export const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  return (
    <Stack direction="horizontal" className="justify-content-between mb-4">
      <MyInput
        value={filter.query}
        onChange={(query) => setFilter({ ...filter, query })}
        placeholder="Search post"
      />

      <MySelect
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort })}
        defaultValue="Sort By"
        options={[
          { value: 'titleAZ', name: 'Title(A-Z)' },
          { value: 'titleZA', name: 'Title(Z-A)' },
        ]}
      />
    </Stack>
  );
};
