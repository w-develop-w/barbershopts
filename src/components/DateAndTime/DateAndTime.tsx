import React, { useState } from "react";
import styles from "./DateAndTime.module.scss";

function DateAndTime() {
    const [activeDate, setActiveDate] = useState<string | null>(null);
    const [activeTime, setActiveTime] = useState<string | null>(null);

    const handleTimeClick = (time: string) => {
        setActiveTime((prevActiveTime) => {
            // Проверяем, если текущая кнопка уже активна, сбрасываем состояние
            return prevActiveTime === time ? null : time;
        });
    };

    const handleDateClick = (time: string) => {
        setActiveDate((prevActiveDate) => {
            // Проверяем, если текущая кнопка уже активна, сбрасываем состояние
            return prevActiveDate === time ? null : time;
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h3>Choose date:</h3>
                <ul className={styles.listDate}>
                    <li className={styles.itemDate}>
                        <button className={activeDate === "12.07" ? styles.active : ""}
                            onClick={() => handleDateClick("12.07")}>12.07</button>
                        <button className={activeDate === "13.07" ? styles.active : ""}
                            onClick={() => handleDateClick("13.07")}>13.07</button>
                        <button className={activeDate === "14.07" ? styles.active : ""}
                            onClick={() => handleDateClick("14.07")}>14.07</button>
                        <button className={activeDate === "15.07" ? styles.active : ""}
                            onClick={() => handleDateClick("15.07")}>15.07</button>
                        <button className={activeDate === "16.07" ? styles.active : ""}
                            onClick={() => handleDateClick("16.07")}>16.07</button>
                    </li>
                </ul>

                <h3>Choose time:</h3>
                <ul className={styles.listTime}>
                    <li className={styles.itemTime}>
                        <button
                            className={activeTime === "12:00" ? styles.active : ""}
                            onClick={() => handleTimeClick("12:00")}
                        >
                            12:00
                        </button>
                        <button
                            className={activeTime === "13:00" ? styles.active : ""}
                            onClick={() => handleTimeClick("13:00")}
                        >
                            13:00
                        </button>
                        <button
                            className={activeTime === "14:00" ? styles.active : ""}
                            onClick={() => handleTimeClick("14:00")}
                        >
                            14:00
                        </button>
                        <button
                            className={activeTime === "15:00" ? styles.active : ""}
                            onClick={() => handleTimeClick("15:00")}
                        >
                            15:00
                        </button>
                        <button
                            className={activeTime === "16:00" ? styles.active : ""}
                            onClick={() => handleTimeClick("16:00")}
                        >
                            16:00
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DateAndTime;
