import React from "react";
import styles from "./Recording.module.scss"
import { RootState } from "../../store/store.index"
import { useSelector } from "react-redux";

function Recording() {

    const choosedImageBarber = useSelector((state: RootState) => state.dataOfBarbershop.choosedImageBarber)
    const choosedStatusBarber = useSelector((state: RootState) => state.dataOfBarbershop.choosedStatusBarber)
    const choosedNameBarber = useSelector((state: RootState) => state.dataOfBarbershop.choosedNameBarber)
    const choosedService = useSelector((state: RootState) => state.dataOfBarbershop.choosedService)
    const recordingDate = useSelector((state: RootState) => state.dataOfBarbershop.recordingDate)
    const recordingTime = useSelector((state: RootState) => state.dataOfBarbershop.recordingTime)

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h3>Recording</h3>
                <div className={styles.content}>
                    <img src={choosedImageBarber} alt="Img" />
                    <div className={styles.info}>
                        <div className={styles.barber}>
                            <h3>{choosedStatusBarber}</h3>
                            <h2>{choosedNameBarber}</h2>
                            <h4>{choosedService}</h4>
                        </div>
                        <div className={styles.dataAndTime}>
                            <div>
                                <h3>Date and Time:</h3>

                                <div>
                                    <h3>{recordingDate}</h3>
                                    <h3>{recordingTime}</h3>
                                </div>
                            </div>

                            <div>
                                <h3>Price:</h3>
                                <h3>13$</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recording
