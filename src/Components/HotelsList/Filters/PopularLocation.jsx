import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }

  .guest-rating {
    display: flex;
    flex-direction: column;
    color: #505c66;
  }
`;

export const PopularLocation = () => {
  const [popularRating, setPopularRating] = useState("");
  const handleChange = (event) => {
    setPopularRating(event.target.value);
  };

  return (
    <Wrapper>
      <div className="filter-title">Popular Locations</div>
      <div className="popular-filter">
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="location"
            name="location"
            value={popularRating}
            onChange={handleChange}
          >
            <FormControlLabel
              color="primary"
              value="Calangute Beach"
              control={<Radio color="primary" />}
              label="Calangute Beach"
            />
            <FormControlLabel
              value="Colva Beach"
              control={<Radio color="primary" />}
              label="Colva Beach"
            />
            <FormControlLabel
              value="Varca Beach"
              control={<Radio color="primary" />}
              label="Varca Beach"
            />
            <FormControlLabel
              value="Majorda Beach"
              control={<Radio color="primary" />}
              label="Majorda Beach"
            />
            <FormControlLabel
              value="Benaulim Beach"
              control={<Radio color="primary" />}
              label="Benaulim Beach"
            />
            <FormControlLabel
              value="Dudhsagar Waterfalls"
              control={<Radio color="primary" />}
              label="Dudhsagar Waterfalls"
            />
            <FormControlLabel
              value="Miramar Beach"
              control={<Radio color="primary" />}
              label="Miramar Beach"
            />
            <FormControlLabel
              value="Fort Aguada"
              control={<Radio color="primary" />}
              label="Fort Aguada"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Wrapper>
  );
};
