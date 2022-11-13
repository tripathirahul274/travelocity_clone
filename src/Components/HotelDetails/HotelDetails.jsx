import React, { useState } from 'react'
import Rooms from './Rooms'
import AboutArea from './AboutArea'
import Amenities from './Amenities'
// import HotelMap from './HotelMap'
import HotelOverview from './HotelOverview'
import Policies from './Policies'
import Review from './Review'
import styles from './styles/hotelDetails.module.css'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


const HotelDetails = ({ hotelData, id }) => {

    const { images } = hotelData

    const options = [
        { title: "Overview", to: "#" },
        { title: "Rooms", to: "#rooms" },
        { title: "Location", to: "#location" },
        { title: "Amenities", to: "#amenities" },
        { title: "Policies", to: "#policies" },
        { title: "Reviews", to: "#reviews" },
    ]

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const modal = (
        <div className={styles.modal}>
            <CloseIcon className={styles.close} onClick={handleClose} />
            <FaChevronLeft className={styles.left_arrow} onClick={prevSlide} />
            <FaChevronRight className={styles.right_arrow} onClick={nextSlide} />
            <div className={styles.modal_img}>
                {images.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === current && <img src={slide.url} alt="hotelImages" />}
                        </div>
                    );
                })}

            </div>
        </div>
    )

    return (
        <>
            <div className={styles.flex} onClick={handleOpen} style={{ cursor: 'pointer' }}>
                <div className={styles.left}>
                    <img src={hotelData.images[0].url} alt="" />
                </div>
                <div className={styles.right}>
                    <div>
                        <img src={hotelData.images[1].url} alt="" />
                    </div>
                    <div>
                        <img src={hotelData.images[2].url} alt="" />
                    </div>
                    <div>
                        <img src={hotelData.images[3].url} alt="" />
                    </div>
                    <div>
                        <img src={hotelData.images[4].url} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.option}>
                {options.map((option, i) => (
                    <p key={i}><a href={option.to}>{option.title}</a></p>
                ))}
                <button className={styles.optionBtn}><a href="#rooms">Reserve a room</a></button>
            </div>

            <div className={styles.flex} style={{ background: '#FFF', borderRadius: '0 0 10px 10px' }}>
                <div className={styles.left_1} id="overview">
                    <HotelOverview hotelData={hotelData} />
                </div>
                <div className={styles.right_1}>
                    {/* <HotelMap hotelData={hotelData} /> */}
                </div>
            </div>

            <div className={styles.room_grid} id="rooms">
                {hotelData.roomTypes.map(room => (
                    <Rooms key={room.roomTypeId} room={room} hId={id} />
                ))}
            </div>

            <div id="location">
                <AboutArea />
            </div>
            <div id="amenities">
                <Amenities />
            </div>
            <div id="policies">
                <Policies />
            </div>
            <div id="reviews">
                <Review />
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {modal}
            </Modal>
        </>
    )
}

export default HotelDetails
