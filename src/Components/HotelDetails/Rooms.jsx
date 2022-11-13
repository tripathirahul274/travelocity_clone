import React from 'react'
import styles from './styles/room.module.css'
import { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md';
import { BiInfoCircle } from 'react-icons/bi';
import Box from '@material-ui/core/Box'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import GroupIcon from '@material-ui/icons/Group';
import WifiIcon from '@material-ui/icons/Wifi';
import HotelIcon from '@material-ui/icons/Hotel';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import DoneIcon from '@material-ui/icons/Done';
import RadioGroup from '@material-ui/core/RadioGroup';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { useDispatch } from 'react-redux'
import { paymentType } from '../../Store/Action'
import { useHistory } from 'react-router-dom'

const Rooms = ({ room, hId }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState(0)
    // const [totalPrice, setTotalPrice] = useState(room.roomPrice + price)
    const totalPrice = room.roomPrice + price
    // console.log('totalPrice:', totalPrice)

    const handleOpen = () => {
        dispatch(paymentType(totalPrice))
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handlePricesInc = () => {
        setPrice(118)
    }
    const handlePricesDec = () => {
        setPrice(0)
    }
    const handlePaymentPage = () => {
        history.push('/payment')
    }

    const handleOpenRoom = (id) => {
        // history.push('roomPage')
        dispatch(paymentType(totalPrice))
        history.push(`/hotels/${hId}/${id}`);
        // console.log(id, hId)
    }

    const modal = (
        <div className={styles.modal}>
            <Box className={styles.flex_box}>
                <CloseIcon onClick={handleClose} />
                <p>Your payment options</p>
            </Box>
            <Box className={styles.flex_3}>
                <VerifiedUserIcon />
                <div>
                    <h4>Fully refundable before Sat, Sep 11</h4>
                    <p>You can change or cancel this stay if plans change. Because flexibility matters.</p>
                </div>
            </Box>
            <Box className={styles.flex_4}>
                <div>
                    <h4>Pay now</h4>
                    <ul>
                        <li>We will process your payment in your local currency</li>
                        <li>More ways to pay: use Debit/Credit card</li>
                        <li>You can use a valid Travelocity coupon</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{ margin: '0', padding: '0' }}>${room.roomPrice}</h3>
                    <small>per night</small>
                    <small style={{ fontWeight: 'bold' }}>${room.roomPrice + price} total</small>
                    <small>included tax & fees</small>
                    <button style={{ width: '100px', marginLeft: '71px' }} onClick={handlePaymentPage}>Pay now</button>
                </div>
            </Box>
            <Box className={styles.flex_4}>
                <div>
                    <h4>Pay when you stay</h4>
                    <ul>
                        <li>You will not be charged until your stay</li>
                        <li>Pay the property directly in their local currency</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{ margin: '0', padding: '0' }}>${room.roomPrice}</h3>
                    <small>per night</small>
                    <small style={{ fontWeight: 'bold' }}>${room.roomPrice + price} total</small>
                    <small>included tax & fees</small>
                    <button style={{ width: '140px', marginLeft: '31px' }} onClick={handlePaymentPage}>Pay at property</button>
                </div>
            </Box>
        </div>
    );

    return (
        <div>
            <div className={styles.room_div}>
                <img src={room.images[0].url} alt="" onClick={() => handleOpenRoom(room.roomTypeId)} />
                <div className={styles.room_details}>
                    <h3 style={{ fontSize: '17px', marginTop: '10px' }}>{room.name}</h3>
                    <p style={{ marginTop: '10px' }}>4.7 / 5 guest room rating</p>
                    <Box className={styles.flex_1}>
                        <SquareFootIcon />
                        <p>{Math.floor((Math.random() * 300) + 99)} Square fit</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <LocationCityIcon />
                        <p>City view</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <GroupIcon />
                        <p>Sleep 3</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <HotelIcon />
                        <p>2 Twin beds</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <WifiIcon />
                        <p>Free wifi</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <FreeBreakfastIcon />
                        <p>Breakfast buffet</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <LocalParkingIcon />
                        <p>free self parking</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <DoneIcon />
                        <p>Reserve now, pay deposit</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <p className={styles.green}>Fully refundable</p>
                        <span><BiInfoCircle /></span>
                    </Box>
                    <small>Before sun, 5 sep</small>
                    <Box className={styles.flex_1}>
                        <p className={styles.more} onClick={handleOpenRoom}>More details</p>
                        <span><MdNavigateNext /></span>
                    </Box>
                    <div className={styles.line}></div>
                    <div className={styles.extra}>
                        <h4>Extras</h4>
                        <RadioGroup aria-label="price" name="price_1">
                            <Box className={styles.flex_2}>
                                <FormControlLabel value="noExtra" control={<Radio color="primary" />} label="One-way airport transfer" onChange={handlePricesDec} />
                                <p>+ $0</p>
                            </Box>
                            <Box className={styles.flex_2}>
                                <FormControlLabel value="halfBoard" control={<Radio color="primary" />} label="Half Board" onChange={handlePricesInc} />
                                <p>+ $118</p>
                            </Box>
                        </RadioGroup>
                        <h3 className={styles.h3_price}>${room.roomPrice + price}</h3>
                        <div className={styles.flex_2}>
                            <div className={styles.flex_small}>
                                <small>per night</small>
                                <small style={{ fontWeight: 'bold', marginBottom: '5px' }}>${room.roomPrice + price} total</small>
                                <small>include tax & fees</small>
                            </div>
                            <button onClick={handleOpen}>Reserve</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    {modal}
                </Modal>
            </div>

        </div>
    )
}

export default Rooms
