import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }

  .meals-plan {
    display: flex;
    flex-direction: column;
    color: #505c66;
  }
`;

export const Mealplans = () => {
  return (
    <Wrapper>
      <div className="filter-title">Meal Plans available</div>
      <div className="meals-plan">
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Breakfast included"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Lunch included"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Dinner included"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="All included"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </div>
    </Wrapper>
  );
};
