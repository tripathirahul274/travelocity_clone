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

  .property-filter {
    display: flex;
    flex-direction: column;
    color: #505c66;
  }
`;

export const PropertyType = () => {
  return (
    <Wrapper>
      <div className="filter-title">Property type</div>
      <div className="property-filter">
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Hotel resort"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Hotel"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Villa"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Private vacation Home"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Condominium resort"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Residence"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Condo"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Townhouse"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </div>
    </Wrapper>
  );
};
