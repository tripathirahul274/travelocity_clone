import React from 'react'
import styles from './styles/hotelDetails.module.css'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import PoolIcon from '@material-ui/icons/Pool';
import SpaIcon from '@material-ui/icons/Spa';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import WifiIcon from '@material-ui/icons/Wifi';
import HotTubIcon from '@material-ui/icons/HotTub';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { MdNavigateNext } from 'react-icons/md';

const HotelOverview = ({ hotelData }) => {

    return (
        <>
            <div className={styles.grid}>
                <div className={styles.name}>
                    <h1>{hotelData.name.replace('[SANDBOX]', '')}</h1>
                    <Rating name="size-small" defaultValue={null} disabled size="small" />
                    <h3>{hotelData.starRating}/5 {hotelData.starRating > 4 ? "Wonderful" : hotelData.starRating > 3 ? "Good" : hotelData.starRating > 3 ? "Average" : "Poor"}</h3>
                    <p style={{ color: '#505c66', fontSize: '14px' }}>Guests rated this property 4.7/5 for cleanliness.</p>
                    <Box className={styles.flex_1}>
                        <p className={styles.more}> {Math.floor((Math.random() * 1000) + 1)} reviews </p>
                        <span><MdNavigateNext /></span>
                    </Box>
                </div>
                <div className={styles.amenities}>
                    <h3>Popular amenities</h3>
                </div>
                <div className={styles.amenities_1}>
                    <Box className={styles.flex_1}>
                        <AcUnitIcon />
                        <p>Air Conditioning</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <PoolIcon />
                        <p>Swimming pool</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <SpaIcon />
                        <p>Spa</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <LocalParkingIcon />
                        <p>Parking</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <p className={styles.more}>See all</p>
                        <span><MdNavigateNext /></span>
                    </Box>
                </div>
                <div className={styles.amenities_2}>
                    <Box className={styles.flex_1}>
                        <WifiIcon />
                        <p>Wifi</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <LocalLaundryServiceIcon />
                        <p>Laundry</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <HotTubIcon />
                        <p>Hot tub</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <FreeBreakfastIcon />
                        <p>Breakfast available</p>
                    </Box>
                </div>
                <div className={styles.safety}>
                    <h3>Cleaning and safety practices</h3>
                </div>
                <div className={styles.safety_1}>
                    <Box className={styles.flex_1}>
                        <svg width="22px" height="22px" fill="#505c66"><path d="M17.5 2.5L19 4l1.5-1.5L19 1l-1.5 1.5zM19 7l1.2.8L21 9l.8-1.2L23 7l-1.2-.8L21 5l-.8 1.2L19 7zM4 4c0-1.1.9-2 2-2h9v3l-1 .2V9h-1l-.86-3.43L10 6v2l5 5v7a2 2 0 01-2 2H6a2 2 0 01-2-2V10l2-2V6L4 4z"></path></svg>
                        <p>Cleaned with disinfectant</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <svg width="22px" height="22px" fill="#505c66"><path d="M14 22v-3h2.8a2 2 0 001.76-1.06l1.91-3.6a2 2 0 00-.05-1.97L19 10v-.5a7.5 7.5 0 00-15 0c0 1.5.15 3.64 2 5.37V22h8zm-2.5-7v-3.5h6.65l.98 1.64c.1.15.1.33.02.49l-1.91 3.6a.5.5 0 01-.44.27H14a2.5 2.5 0 01-2.5-2.5z" ></path></svg>
                        <p>Personal protective equipment</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <p className={styles.more}>See all</p>
                        <span><MdNavigateNext /></span>
                    </Box>
                </div>
                <div className={styles.safety_2}>
                    <Box className={styles.flex_1}>
                        <svg width="22px" height="22px" fill="#505c66"><path d="M12 19a7 7 0 114.95-11.95L14 10h7V3l-2.64 2.64A9 9 0 1021 12h-2a7 7 0 01-7 7z"></path><path d="M12.5 8H11v5l2.95 3 1.1-1-2.55-2.6V8z"></path></svg>
                        <p>24-hour vacancy between guest room stays</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <svg width="22px" height="22px" fill="#505c66"><path d="M16 7a2 2 0 002-2c0-2-2-4-2-4s-2 2-2 4c0 1.1.9 2 2 2z"></path><path d="M2.88 10.12L9.5 3.5l.48.48a2 2 0 01.38 2.3L9 9h9.75a1.25 1.25 0 110 2.5H13v1h7.75a1.25 1.25 0 110 2.5H13v1h6.66a1.25 1.25 0 110 2.5H13v1h4.75a1.25 1.25 0 010 2.5H5a3 3 0 01-3-3v-6.76a3 3 0 01.88-2.12z"></path></svg>
                        <p>Hand sanitizer provided</p>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default HotelOverview
