import { Hotelcard } from "./HotelCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import StarRateIcon from "@material-ui/icons/StarRate";
import logo from "../../logo.svg";
import Ads from "../HotelDetails/Ads";
import {
  FormControlLabel,
  makeStyles,
  Radio,
  Button,
  FormControl,
  RadioGroup,
  CircularProgress,
} from "@material-ui/core";
import { useCallback } from "react";
import { SearchByProperty } from "./Filters/SearchByProperty";
import { PopularFilter } from "./Filters/PopularFilter";
import { GuestRating } from "./Filters/GuestRating";
import { PaymentType } from "./Filters/PaymentType";
import { PropertyType } from "./Filters/PropertyType";
import { PopularLocation } from "./Filters/PopularLocation";
import { Mealplans } from "./Filters/MealPlans";
import { useHistory } from "react-router";
// import { useAxios } from "../../Hooks/useAxios";

const useStyle = makeStyles({
  button: {
    margin: "10px 10px 0 0",
    background: "white",
  },

  selected: {
    display: "flex",
    background: "#f0f3f5",
  },
});

const Wrapper = styled.div`
  width: 75%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 22% 63% 15%;
  grid-gap: 1.5rem;

  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }

  .popular-filter {
    display: flex;
    flex-direction: column;
    color: #505c66;
  }

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

export const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const classes = useStyle();
  const [priceFilter, setPriceFilter] = useState("");
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getData();
    console.log(hotels);
  }, []);

  const handleQueryChange = (val) => {
    setSearchQuery(val);
  };

  const handleChange = (event) => {
    const range = event.target.value.split(" ").map(Number);
    setPriceFilter(event.target.value);
    handlePriceFilter(range[0], range[1]);
  };

  const handlePriceFilter = (a, b) => {
    setloading(true);
    const newData = data.filter((item) => {
      return item.price >= a && item.price < b;
    });

    setHotels(newData);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  const getData = () => {
    setloading(true);
    axios
      .get("https://my-api-data.herokuapp.com/data")
      .then((res) => {
        const { data } = res;
        setData(data);
        setHotels(data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStar = useCallback(
    (star) => {
      setloading(true);
      const newData = data.filter((item) => {
        return item.starRating >= star;
      });

      setHotels(newData);

      setTimeout(() => {
        setloading(false);
      }, 2000);
    },
    [data]
  );

  const handleOpenHotel = (id) => {
    history.push(`/hotels/${id}`);
  };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <Wrapper>
        <div className="sorting">
          <SearchByProperty
            handleQueryChange={handleQueryChange}
            query={searchQuery}
          />

          {/* ---------------------------------------------------------------------------------------------------Star rating  */}
          <div className="filter-title">Star rating</div>
          <Button
            onClick={() => {
              handleStar(1);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            1
          </Button>
          <Button
            onClick={() => {
              handleStar(2);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            2
          </Button>
          <Button
            onClick={() => {
              handleStar(3);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            3
          </Button>
          <Button
            onClick={() => {
              handleStar(4);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            4
          </Button>
          <Button
            onClick={() => {
              handleStar(5);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            5
          </Button>

          {/* ------------------------------------------------------------------------------------------------------- Your Budget rating  */}
          <div className="filter-title">Your Budget</div>
          <div className="popular-filter">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="guest-rating"
                name="guest-rating"
                value={priceFilter}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="0 75"
                  control={<Radio color="primary" />}
                  label="Less than 75$"
                />
                <FormControlLabel
                  value="75 125"
                  control={<Radio color="primary" />}
                  label="75$ to 125$"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="125 200"
                  control={<Radio color="primary" />}
                  label="125$ to 200$"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="200 300"
                  control={<Radio color="primary" />}
                  label="200$ to 300$"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="300 1000"
                  control={<Radio color="primary" />}
                  label="300$ and above"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <PopularFilter />
          <GuestRating />
          <PaymentType />
          <PropertyType />
          <PopularLocation />
          <Mealplans />
        </div>

        {/*------------------------------------------------------------------------------------------>>>>>> Hotel List  */}

        <div className="list">
          {loading ? (
            <div className="progress">
              <img src={logo} alt="" />
              <CircularProgress />
            </div>
          ) : (
            hotels.map((item) => {
              return (
                <Hotelcard
                  handleOpenHotel={handleOpenHotel}
                  key={item.hotelId}
                  data={item}
                />
              );
            })
          )}
        </div>
        <div>
          <Ads />
          <Ads />
        </div>
      </Wrapper>
    </>
  );
};
