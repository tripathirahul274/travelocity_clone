import { useState } from "react";
import { useEffect } from "react";
import { HotelList } from "../Components/HotelsList/HotelList";
import logo from "../logo.svg";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  .progress {
    width: 20%;
    margin: 200px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .progress > img {
    margin-bottom: 10px;
    width: 100px;
  }
`;

export const HotelsListPage = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  });
  return (
    <>
      {loading ? (
        <Wrapper>
          <div className="progress">
            <img src={logo} alt="" />
            <CircularProgress />
          </div>
        </Wrapper>
      ) : (
        <HotelList />
      )}
    </>
  );
};
