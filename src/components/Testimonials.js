import React from 'react'
import styles from "./Testimonials.module.scss";
import image2 from '../images/avatar-ali.png';
import image3 from '../images/avatar-anisha.png';
import image4 from '../images/avatar-richard.png';
import image5 from '../images/avatar-shanai.png';

const Testimonials = () => {
    return (
        <div className={styles.testimonial_content}>
            <h2>What they’ve said</h2>
            <div className={styles.testimonial}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.content}>
                            <div className={styles.img}>
                                <img src={image2} alt="image" />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.name}>Anisha Li</p>
                                <p>“Manage has supercharged our team’s workflow. The ability to maintain
                                    visibility on larger milestones at all times keeps everyone motivated.”
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.content}>
                            <div className={styles.img}>
                                <img src={image3} alt="image" />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.name}>Ali Bravo</p>
                                <p>“We have been able to cancel so many other subscriptions since using
                                    Manage. There is no more cross-channel confusion and everyone is much
                                    more focused.”
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.content}>
                            <div className={styles.img}>
                                <img src={image4} alt="image" />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.name}>Richard Watts</p>
                                <p>“Manage allows us to provide structure and process. It keeps us organized
                                    and focused. I can’t stop recommending them to everyone I talk to!”
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.content}>
                            <div className={styles.img}>
                                <img src={image5} alt="image" />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.name}>Shanai Gough</p>
                                <p>“Their software allows us to track, manage and collaborate on our projects
                                    from anywhere. It keeps the whole team in-sync without being intrusive.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.button_testimonial}>Get Started</div>
        </div>
    )
}

export default Testimonials