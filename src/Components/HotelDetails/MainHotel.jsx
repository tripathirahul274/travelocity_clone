import React, { useEffect } from 'react'
import styles from './styles/mainHotel.module.css'
import Ads from './Ads'
import HotelDetails from './HotelDetails'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom'

const MainHotel = ({ hotelData, id }) => {

    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.mainBox}>
                    <div className={styles.content}>
                        <div className={styles.flex}>
                            <KeyboardBackspaceIcon onClick={() => history.push('/hotels')} />
                            <p onClick={() => history.push('/hotels')}>See all properties</p>
                        </div>
                        <HotelDetails hotelData={hotelData} id={id} />
                    </div>
                    <div>
                        <div style={{ position: 'sticky', top: '10px' }}>
                            <Ads />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainHotel;
