import React from "react";
import styles from './DateAndTime.module.scss'

function DateAndTime() {
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h3>Choose date:</h3>
                <ul className={styles.listDate}>
                    <li className={styles.itemDate}>
                        <button>12.07</button>
                        <button>13.07</button>
                        <button>14.07</button>
                        <button>15.07</button>
                        <button>16.07</button>
                    </li>
                </ul>

                <h3>Choose time:</h3>
                <ul className={styles.listTime}>
                    <li className={styles.itemTime}>
                        <button>12:00</button>
                        <button>13:00</button>
                        <button>14:00</button>
                        <button>15:00</button>
                        <button>16:00</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DateAndTime;
