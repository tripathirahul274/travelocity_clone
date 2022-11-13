import React, { useState, useEffect } from 'react'
import MainHotel from '../Components/HotelDetails/MainHotel'
import { useParams } from 'react-router-dom'
import { useAxios } from '../Hooks/useAxios'
import { CircularProgress } from '@material-ui/core'
import logo from '../logo.svg'

const MainHotelPage = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)

    const { hotelData } = useAxios(`https://my-api-data.herokuapp.com/data?hotelId=${id}`)
    // console.log('hotelData:', hotelData)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 2500);
    }, [])

    const styles = {
        progress: {
            width: '20%',
            margin: '200px auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        img: {
            width: '100px',
        },

    }

    return (
        <>
            {isLoading && hotelData.length > 0 ?
                <div>
                    <MainHotel hotelData={hotelData[0]} id={id} />
                </div>
                : <div style={styles.progress}>
                    <img src={logo} alt="" style={styles.img} />
                    <CircularProgress />
                </div>}
        </>
    )
}

export default MainHotelPage
