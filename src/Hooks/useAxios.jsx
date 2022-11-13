import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (url) => {
    const [hotelData, setHotelData] = useState([]);

    useEffect(() => {
        (async () => {
            let { data } = await axios.get(url);
            setHotelData(data)
        })()
    }, [url])

    return { hotelData }
}