import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Payment } from "../Components/Payment/Payment";
import { useAxios } from "../Hooks/useAxios";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'

export const PaymentPage = () => {
    const { id } = useParams();
    const { hotelData } = useAxios(`https://my-api-data.herokuapp.com/data/?hotelId=${id}`);
    const loginStatus = ""


    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => { }, 2500);
    }, []);

    // if (loginStatus === false) {
    //     swal({
    //         title: "You have to login for reserve a hotel room.",
    //         icon: "info",
    //         buttons: true,
    //     }).then((willDelete) => {
    //         if (willDelete) {
    //             history.push("/signIn");
    //         } else {
    //             swal("Room booking has been canceled", {
    //                 icon: "error",
    //                 button: false,
    //                 timer: 1500,
    //             }).then(() => {
    //                 history.goBack();
    //             });
    //         }
    //     })
    // }

    return (
        <>
            <Payment hotelData={hotelData} />
        </>
    );
};
