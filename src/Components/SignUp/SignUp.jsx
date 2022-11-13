import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  width: 80%;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 2.5%;
  background: white;
  padding: 10px;

  .messege {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #616161;
  }
`;

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: "#0a438b",
    },
    option: {
        display: "flex",
        flexDirection: "column",
        marginTop: "70px",
    },

    button: {
        width: "50%",
        marginBottom: "20px",
    },

    icon: {
        width: "15px",
        marginRight: "5px",
    },
}));

const initState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

export const SignUp = () => {
    const classes = useStyles();
    const [state, setState] = useState(initState);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.get("https://myapidata.herokuapp.com/users");
        console.log('data:', data)
        let isPresent = false;

        for (let i = 0; i < data.length; i++) {
            if (state.email === data[i].email) {
                isPresent = true;
                break;
            }
        }

        if (state.password === state.password2) {
            if (isPresent) {
                swal("User already exists with this email!");
            } else {
                axios.post("http://localhost:3001/users", state);
                swal("Successfully signed up. Sign In to continue!");
                history.push("/signIn");
            }
        } else {
            swal("Password does not match!");
        }
    };

    return (
        <Wrapper>
            <Container className={classes.option}>
                <Button
                    className={classes.button}
                    variant="outlined"
                    color="default"
                    startIcon={<AppleIcon />}
                >
                    Sign up with apple
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    startIcon={<FacebookIcon />}
                >
                    Sign up with Facebook
                </Button>
                <div className="messege">
                    <span>
                        <VpnKeyIcon className={classes.icon} />
                    </span>
                    We kepp it private
                </div>
                <div className="messege">
                    <VerifiedUserRoundedIcon className={classes.icon} />
                    Share only with permission
                </div>
                <div className="messege">
                    <WatchLaterIcon className={classes.icon} />
                    Quick sign-in no passwords
                </div>
            </Container>
            <Container component="main">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        or Sign up with your email
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate={false}
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={handleChange}
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password2"
                                    label="confirm Password"
                                    type="password"
                                    id="confirm-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    name="terms"
                                    control={
                                        <Checkbox
                                            value="allowExtraEmails"
                                            color="primary"
                                            required
                                        />
                                    }
                                    label="Agree to terms and conditions"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/signIn">Already have an account? Sign in</Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Wrapper>
    );
};
