import {
    TextField,
    makeStyles,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@material-ui/core";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { useState } from "react";

const Wrapper = styled.div`
  background: white;
  width: 75%;
  margin: 40px auto;
  padding: 15px;
  .images {
    display: flex;
  }

  .images img {
    width: 50px;
  }

  .name {
    width: 60%;
    height: 44px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .code {
    display: grid;
    grid-template-columns: 20% 20%;
    grid-gap: 10px;
  }

  .code-number {
    margin: 20px 0;
  }

  .info {
    display: flex;
    align-items: center;
  }

  .message {
    display: flex;
    align-items: center;
    color: green;
    font-size: 0.8rem;
  }
`;

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: "10px",
        marginLeft: "20px",
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const initState = {
    name: "",
    card: "",
    month: "",
    year: "",
    cvv: "",
    zip: "",
};

export const PaymentForm = () => {
    const [state, setState] = useState(initState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const classes = useStyles();
    return (
        <Wrapper>
            <div className="info">
                <CreditCardIcon />
                <div className="message">
                    <CheckIcon className={classes.icon} />
                    <p>We use secure transmission</p>
                </div>
                <div className="message">
                    <CheckIcon className={classes.icon} />
                    <p>We protect your personal information</p>
                </div>
            </div>
            <div className="images">
                <img
                    src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
                    alt=""
                />
                <img
                    src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"
                    alt=""
                />
                <img
                    src="https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg"
                    alt=""
                />
                <img
                    src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg"
                    alt=""
                />
                <img
                    src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg"
                    alt=""
                />
                <img
                    src="https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg"
                    alt=""
                />
                <img
                    src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"
                    alt=""
                />
            </div>

            <form action="">
                <TextField
                    onChange={handleChange}
                    type="text"
                    variant="outlined"
                    name="name"
                    value={state.name}
                    className="name"
                    label="Name on Card"
                />
                <TextField
                    onChange={handleChange}
                    type="number"
                    variant="outlined"
                    name="card"
                    value={state.card}
                    className="name"
                    label="Debit/Credit card number"
                />

                <div className="month-year">
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">
                            Month
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="month"
                            value={state.month}
                            onChange={handleChange}
                        >
                            <MenuItem value="january">January</MenuItem>
                            <MenuItem value="february">February</MenuItem>
                            <MenuItem value="march">March</MenuItem>
                            <MenuItem value="april">April</MenuItem>
                            <MenuItem value="may">May</MenuItem>
                            <MenuItem value="june">June</MenuItem>
                            <MenuItem value="july">July</MenuItem>
                            <MenuItem value="august">August</MenuItem>
                            <MenuItem value="september">September</MenuItem>
                            <MenuItem value="october">October</MenuItem>
                            <MenuItem value="november">November</MenuItem>
                            <MenuItem value="december">December</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="year"
                            value={state.year}
                            onChange={handleChange}
                        >
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                            <MenuItem value={2024}>2024</MenuItem>
                            <MenuItem value={2025}>2025</MenuItem>
                            <MenuItem value={2026}>2026</MenuItem>
                            <MenuItem value={2027}>2027</MenuItem>
                            <MenuItem value={2028}>2028</MenuItem>
                            <MenuItem value={2029}>2029</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="code">
                    <TextField
                        onChange={handleChange}
                        type="password"
                        variant="outlined"
                        name="cvv"
                        value={state.cvv}
                        className="code-number"
                        label="Security Code"
                    />
                    <TextField
                        onChange={handleChange}
                        type="number"
                        variant="outlined"
                        name="zip"
                        value={state.zip}
                        className="code-number"
                        label="Zip Code"
                    />
                </div>
            </form>
        </Wrapper>
    );
};
