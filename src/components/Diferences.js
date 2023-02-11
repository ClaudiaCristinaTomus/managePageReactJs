import React from 'react'
import styles from "./Diferences.module.scss";

const Diferences = () => {
    return (
        <div className={styles.diferences_content}>
            <div className={styles.left}>
                <h2>What’s different about Manage?</h2>
                <p>Manage provides all the functionality your team needs, without
                    the complexity. Our software is tailor-made for modern digital
                    product teams.</p>
            </div>
            <div className={styles.right}>
                <div className={styles.card}>
                    <button className={styles.button}>01</button>
                    <div className={styles.card_content}>
                        <h5>Track company-wide progress</h5>
                        <p>See how your day-to-day tasks fit into the wider vision. Go from
                            tracking progress at the milestone level all the way done to the
                            smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                <button className={styles.button}>02</button>
                    <div className={styles.card_content}>
                        <h5>Advanced built-in reports</h5>
                        <p>Set internal delivery estimates and track progress toward company
                            goals. Our customisable dashboard helps you build out the reports
                            you need to keep key stakeholders informed.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                <button className={styles.button}>03</button>
                    <div className={styles.card_content}>
                        <h5>Everything you need in one place</h5>
                        <p>Stop jumping from one service to another to communicate, store files,
                            track tasks and share documents. Manage offers an all-in-one team
                            productivity solution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diferences