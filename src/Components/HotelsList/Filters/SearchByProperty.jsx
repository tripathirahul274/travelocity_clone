import styled from "styled-components";
import { TextField, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    background: "white",
  },
});

const Wrapper = styled.div`
  .search-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .divider {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const SearchByProperty = ({ handleQueryChange, query }) => {
  const classes = useStyles();
  return (
    <Wrapper>
      <div className="search-title">Search by property name</div>
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="Property name"
        variant="outlined"
        color="primary"
        value={query}
        onChange={(e) => {handleQueryChange(e.target.value)}}
      />
      <Divider className="divider" />
      <div className="search-title">Filter by</div>
    </Wrapper>
  );
};
