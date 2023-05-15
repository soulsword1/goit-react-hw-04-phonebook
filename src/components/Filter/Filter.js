import PropTypes from 'prop-types';
import { FilterForm, FilterLabel, FilterInput } from './Filter.styled';

export default function Filter({ onInput }) {
  return (
    <FilterForm>
      <FilterLabel>
        Search:
        <FilterInput
          type="tel"
          name="search"
          title=""
          onChange={onInput}
        />
      </FilterLabel>
    </FilterForm>
  );
}

Filter.propTypes = {
  onInput: PropTypes.func,
};
