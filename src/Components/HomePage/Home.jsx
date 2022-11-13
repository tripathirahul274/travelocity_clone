import React, { useEffect } from 'react';
import styles from "./Home.module.css"
import ScrollableTabsButtonForce from './Slider';
import Grid from '@material-ui/core/Grid';



export function HomePage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.forms}>
                <div style={{marginRight: "10px"}}>
                    <div className={styles.formsContainer}>
                        <ScrollableTabsButtonForce />
                    </div>
                    <div className={styles.offerTop}>
                        <h3>Cheers to 25 Years Sale</h3>
                        <p>To celebrate 25 years of finding the right trip for the entire family, save 25% or more on select hotels!</p>
                        <button>Take a trip</button>
                    </div>
                </div>
            </div>
            <div className={styles.info1}>
                <div className={styles.info1InnerDiv}>
                    <div style={{ width: '50%' }}>
                        <h3 className={styles.info1Heading}>GIVE THE WORLD A SHOT</h3>
                        <p className={styles.info1Para}>Book on the Travelocity app and we’ll help get a Covid vaccine to someone, somewhere who needs it. Let's reopen the world, one trip, one shot at a time.</p>
                        <button className={styles.info1Btn}>Learn More</button>
                    </div>
                </div>
            </div>
            <div className={styles.info1BottomPara}>
                <p>For every eligible Travelocity booking, Expedia, Inc. will donate $2 USD, up to $12 million USD, in support of UNICEF’s global COVID-19 response. Expedia, Inc. pledges a minimum donation of $10 million USD. Certain eligibility criteria apply. Click Learn more above for complete program terms. Learn more about UNICEF's work at <a href="http://www.unicef.org" target="_blank" rel="noreferrer">www.unicef.org</a> </p>
            </div>
            <div className={styles.info2}>
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <div style={{ border: "1px solid #c7c7c7", borderRadius: "10px", background: "white" }}>
                            <div className={styles.info2Img}>
                            </div>
                            <div className={styles.info2ImgDescription}>
                                <img src="	https://tpc.googlesyndication.com/simgad/11901415560359135758?" alt="" />
                                <div className={styles.info2OfferDes}>
                                    <h1>Create new traditions. Safely.</h1>
                                    <p>Get 10% off the base rate.*</p>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid xs={12} sm={4}>
                        <div>
                            <div className={styles.info2Right} style={{ marginBottom: "10px" }}>
                                <div className={styles.info2RightImg1}></div>
                                <div style={{ width: "70%"}}>
                                    <h2>Looking for a great hotel deal?</h2>
                                    <p>Book a hotel under $99</p>
                                </div>
                            </div>
                            <div className={styles.info2Right}>
                                <div className={`${styles.info2RightImg1} ${styles.info2RightImg2}`}></div>
                                <div style={{ width: "70%"}}>
                                    <h2>Vacation Packages Under $400</h2>
                                    <p>Book your flight and hotel together, and together, we can make it happen.</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={styles.info3}>
                <div>
                    <h2 className={styles.info3Heading}>Seize deals on exactly the trip you need</h2>
                </div>
                <div>
                    <Grid container style={{ width: '100%' }}>
                        <Grid item xs={12} sm={3}>
                            <div className={styles.info3BgImg1}>
                                <h3>Fabulous family getaways</h3>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div className={styles.info3BgImg2}>

                                <h3>Sunny beach vacations</h3>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div className={styles.info3BgImg3}>
                                <h3>Last Minute getaways</h3>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div className={styles.info3BgImg4}>
                                <h3>Carefree all-inclusive resorts</h3>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <h2 className={styles.info3Heading}>What’s stopping you from Seizing Your Someday? Travelocity is here to help.</h2>
                </div>
                <div className={styles.infoVideo}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ItS8X0SjT4s" title="YouTube video player" allowFullScreen></iframe>
                </div>
                <div>
                    <h2 className={styles.info3Heading}>Featured offers</h2>
                </div>
                <div className={styles.infoFeaturedImg}>
                    <div className={styles.infoFeaturedOfferDetails}>
                        <h3>Wander Wisely™ with great deals</h3>
                        <p>Traveling now or planning a trip for later? Let us help.</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}







