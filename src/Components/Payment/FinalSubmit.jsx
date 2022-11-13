import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import { Button, makeStyles } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  background: white;
  width: 75%;
  margin: 40px auto;
  padding: 15px;

  .title {
    font-weight: 700;
    color: #1f1e1e;
  }

  .charges {
    font-size: 0.85rem;
  }

  .info {
    display: flex;
    align-items: center;
    color: green;
    font-size: 0.85rem;
  }

  .terms {
    display: flex;
    align-items: center;
    color: grey;
    font-size: 0.85rem;
  }
`;

const useStyle = makeStyles({
    button: {
        "&:hover": {
            color: 'black'
        },
        background: "green",
        color: 'white'
    },

});



export const FinalSubmit = () => {
    const history = useHistory()
    const classes = useStyle();

    const successPayment = () => {
        swal({
            title: "Are you sure?",
            icon: "info",
            buttons: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("order_id #57RYE556AB7568", {
                    icon: "success",
                    button: false,
                    title: "Your booking has been successful!",
                    timer: 3000,
                });
                setTimeout(() => {
                    history.push('/')
                }, 3200)
            } else {
                swal("Your payment has been cancelled!", {
                    icon: "error",
                    button: false,
                    timer: 1500,
                });
            }
        })

    }

    return (
        <Wrapper>
            <p className="title">Important information about your booking</p>
            <ul className="charges">
                <li>
                    Cancellations or changes made after 6:00pm (property local time) on
                    Sep 9, 2021 or no-shows are subject to a property fee equal to 100% of
                    the total amount paid for the reservation.
                </li>
                <br />
                <li>
                    To make arrangements for check-in please contact the property at least
                    24 hours before arrival using the information on the booking
                    confirmation. Guests must contact the property in advance for check-in
                    instructions. Front desk staff will greet guests on arrival.
                </li>
            </ul>
            <p className="charges">
                By clicking on the button below, I acknowledge that I have reviewed the
                Privacy Statement Opens in a new window. and Government Travel Advice
                Opens in a new window. and have reviewed and accept the Rules &
                Restrictions Opens in a new window. and Terms of Use Opens in a new
                window..
            </p>

            <div className="info">
                <CheckIcon />
                <p>Change of plans? No problem. You can cancel for free</p>
            </div>
            <Button className={classes.button} onClick={successPayment}>Complete Booking</Button>
            <div className="terms">
                <LockIcon />
                <p>
                    We use secure transmission and encrypted storage to protect your
                    personal information.
                </p>
            </div>
            <p className="terms">
                This payment will be processed in the U.S. This does not apply when the
                travel provider (airline/hotel/rail, etc.) processes your payment.
            </p>
        </Wrapper>
    );
};
