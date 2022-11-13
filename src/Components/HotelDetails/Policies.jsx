import React from 'react'
import styles from './styles/policies.module.css'


const icons = ["https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg", "https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg", "https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg", "https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg", "https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg", "https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg", "https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"]

const Policies = () => {
    return (
        <div className={styles.policies_div}>
            <div className={styles.policies}>
                <div className={styles.left}>
                    <h3>Policies</h3>
                </div>
                <div className={styles.mid}>
                    <h4>Check-in</h4>
                    <p>Check-in from 2:00 PM - 2:00 AM</p>
                    <p>Early check-in subject to availability</p>
                    <p>Early check-in is available for a fee (amount varies)</p>
                    <p>Express check-in</p>
                    <p>Minimum check-in age - 18</p>
                </div>
                <div className={styles.right}>
                    <h4>Check-out</h4>
                    <p>Check-out before 11:00 AM</p>
                    <p>Late check-out subject to availability</p>
                    <p>A late check-out fee will be charged</p>
                    <p>Express check-out</p>
                </div>
            </div>
            <div className={styles.policies}>
                <div className={styles.left}></div>
                <div className={styles.right_2}>
                    <div className={styles.margin}>
                        <h4>Special check-in instructions</h4>
                        <p>The check-in location differs from the property location; to check in, go to Taj Club Reception for Taj Club Rooms and Suites</p>
                        <p>This property doesn't offer after-hours check-in</p>
                        <p>To make arrangements for check-in please contact the property ahead of time using the information on the booking confirmation
                        </p>
                        <p>Guests must contact the property in advance for check-in instructions; front desk staff will greet guests on arrival
                        </p>
                        <p>To register at this property, guests who are Indian citizens must provide a valid photo identity card issued by the Government of India; Permanent Account Number (PAN) cards will not be accepted due to national regulations. Travelers who are not citizens of India must present a valid passport and visa. Indian citizens must show a PAN card at check-out for cash transactions exceeding INR 25,000.</p>
                    </div>
                    <div className={styles.margin}>
                        <h4>Access methods</h4>
                        <p>Staffed front desk</p>
                    </div>
                    <div className={styles.margin}>
                        <h4>Pets</h4>
                        <p>No pets or service animals allowed</p>
                    </div>
                    <div className={styles.margin}>
                        <h4>Children and extra beds</h4>
                        <p>Children are welcome</p>
                        <p>Kids stay free! Up to 2 children 8 years old and younger stay free when using existing bedding</p>
                        <p>Rollaway/extra beds are available for INR 2500.0 per night</p>
                        <p>Free cribs (infant beds)</p>
                    </div>
                    <div className={styles.margin}>
                        <h4>Property payment types</h4>
                        <div className={styles.flex_card}>
                            {icons.map((icon, index) => (
                                <img key={index} src={icon} alt="payment_card_logo" />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Policies
