import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./DateAndTime.module.scss"
import { RootState } from "../../store/store.index"
import { setRecordingDate, setRecordingTime } from "../../store/dataSlice"
import { Link } from "react-router-dom" // Импортируйте Link из "react-router-dom"

function DateAndTime() {
    const dispatch = useDispatch()
    const recordingDate = useSelector(
        (state: RootState) => state.dataOfBarbershop.recordingDate
    )
    const recordingTime = useSelector(
        (state: RootState) => state.dataOfBarbershop.recordingTime
    )

    const handleTimeClick = (time: string) => {
        dispatch(setRecordingTime(time))
    }

    const handleDateClick = (date: string) => {
        dispatch(setRecordingDate(date))
    }

    // useEffect(() => {
    //     console.log("Updated recordingDate:", recordingDate)
    // }, [recordingDate])

    // useEffect(() => {
    //     console.log("Updated recordingTime:", recordingTime)
    // }, [recordingTime])

    const shouldRedirect = recordingDate !== "" && recordingTime !== ""

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h3>Choose date:</h3>
                <div className={styles.listDate}>
                    <div className={styles.itemDate}>
                        <button
                            className={
                                recordingDate === "14.07" ? styles.active : ""
                            }
                            onClick={() => handleDateClick("14.07")}
                        >
                            14.07
                        </button>
                    </div>
                </div>

                <h3>Choose time:</h3>
                <div className={styles.listTime}>
                    <div className={styles.itemTime}>
                        <button
                            className={
                                recordingTime === "12:00" ? styles.active : ""
                            }
                            onClick={() => handleTimeClick("12:00")}
                        >
                            12:00
                        </button>
                    </div>
                </div>

                {shouldRedirect && (
                    <Link to="/dateAndTime/services">
                        <button className={styles.Btn}>
                            Перейти к услугам
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default DateAndTime
