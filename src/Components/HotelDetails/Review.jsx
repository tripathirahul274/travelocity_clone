import React from 'react'
import styles from './styles/review.module.css'
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { FaRegSmileBeam } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const reviews = [
    {
        user: "Kulwinder",
        date: "28 Aug 2021",
        comment: "Disliked: Staff & service, property conditions & facilities, room comfort",
        time: "Stay one night",
        rating: 1,
        likes: 1,
    },
    {
        user: "JOSEPH MICHAEL",
        date: "26 Aug 2021",
        comment: "Liked: Cleanliness, staff & service, property conditions & facilities",
        time: "Stay three night",
        rating: 4,
        likes: 3,
    },
    {
        user: "Balachandran",
        date: "18 Aug 2021",
        comment: "Liked: Cleanliness, staff & service, amenities, property conditions & facilities",
        time: "Stay two night",
        rating: 4,
        likes: 2,
    },
    {
        user: "Arshaan",
        date: "12 Aug 2021",
        comment: "Liked: Cleanliness, property conditions & facilities, room comfort",
        time: "Stay one night",
        rating: 3,
        likes: 2,
    },
    {
        user: "Aditya",
        date: "7 Aug 2021",
        comment: "Disliked: Staff & service",
        time: "Stay one night",
        rating: 2,
        likes: 1,
    },
]

const Review = () => {

    let totalReview = Math.floor((Math.random() * 300) + 299)
    let excellent = Math.floor(totalReview / 2) + 20
    let good = Math.floor(excellent / 2) - 10
    let okay = Math.floor(good / 2) + 20
    let poor = Math.floor(okay / 2) - 10
    let terrible = Math.floor(poor / 2)

    return (
        <div className={styles.review_cont}>
            <div className={styles.review}>
                <div className={styles.left}>
                    <div className={styles.first}>
                        <h1>3.9</h1>
                        <div>
                            <h3 style={{ margin: '0' }}>Good</h3>
                            <small>{totalReview} reviews</small>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.count_review}>
                            <div>
                                <small>5 - Excellent</small>
                                <small style={{ fontWeight: 'bold' }}>{excellent}</small>
                            </div>
                            <ProgressBar
                                percent={(excellent / totalReview) * 100}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                        <div className={styles.count_review}>
                            <div>
                                <small>4 - Good</small>
                                <small style={{ fontWeight: 'bold' }}>{good}</small>
                            </div>
                            <ProgressBar
                                percent={(good / excellent) * 100}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                        <div className={styles.count_review}>
                            <div>
                                <small>3 - Okay</small>
                                <small style={{ fontWeight: 'bold' }}>{okay}</small>
                            </div>
                            <ProgressBar
                                percent={(okay / good) * 100}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                        <div className={styles.count_review}>
                            <div>
                                <small>2 - Poor</small>
                                <small style={{ fontWeight: 'bold' }}>{poor}</small>
                            </div>
                            <ProgressBar
                                percent={(poor / good) * 100}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                        <div className={styles.count_review}>
                            <div>
                                <small>1 - Terrible</small>
                                <small style={{ fontWeight: 'bold' }}>{terrible}</small>
                            </div>
                            <ProgressBar
                                percent={(terrible / poor) * 100}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                    </div>
                    <div className={styles.third}>
                        <div>
                            <h3>4.6/5</h3>
                            <p>Cleanliness</p>
                        </div>
                        <div>
                            <h3>4.6/5</h3>
                            <p>Staff & Service</p>
                        </div>
                        <div>
                            <h3>4.6/5</h3>
                            <p>Amenities</p>
                        </div>
                        <div>
                            <h3>4.5/5</h3>
                            <p>Property conditions & facilities</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    {reviews.map((review, index) => (
                        <div div key={index} className={styles.abc}>
                            <h3>{review.rating}/5 {review.rating === 5 ? "Excellent" : review.rating === 4 ? "Good" : review.rating === 3 ? "Okay" : review.rating === 2 ? "Poor" : "Terrible"}</h3>
                            <h4>{review.user}</h4>
                            <p style={{ marginTop: "-10px" }}>{review.date}</p>
                            <div className={styles.flex}>
                                {review.rating > 2 ? <FaRegSmileBeam /> : <SentimentVeryDissatisfiedIcon style={{ fontSize: '19px' }} />}
                                <small>{review.comment}</small>
                            </div>
                            <small>{review.time}</small>
                            <div className={styles.flex} style={{ color: '#2A6EC1' }}>
                                <AiFillLike style={{ fontSize: '20px', cursor: 'pointer' }} />
                                <small>{review.likes}</small>
                            </div>
                        </div>
                    ))}
                    <button>See all reviews</button>
                </div>
            </div>
        </div>
    )
}

export default Review