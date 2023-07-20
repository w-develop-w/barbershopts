import React, { useEffect } from "react";
import styles from "./Recording.module.scss";
import { RootState } from "../../store/store.index";
import { useSelector } from "react-redux";
import { useSpecialistsQuery } from "../../api/fetchDataSpecialists";
import { Barbers, DatesAndTime } from "../../models/models";
import DateAndTime from "../DateAndTime/DateAndTime";
import { useUpdateSpecialistMutation } from "../../api/putDataSpecialists";

function Recording() {
    const dataOfBarbershop = useSelector((state: RootState) => state.dataOfBarbershop);
    const { choosedNameBarber, recordingDate, recordingTime } = dataOfBarbershop;
    const { choosedImageBarber, choosedStatusBarber, choosedService, priceChoosedService, percentsOnPrice } = dataOfBarbershop;

    const [updateSpecialist, { isLoading, error }] = useUpdateSpecialistMutation();

    const { data: dataBarbers, error: errorBarbers, isLoading: isLoadingBarbers } = useSpecialistsQuery(null);

    useEffect(() => {
        if (dataBarbers) {
            const updateDataBaseBarbers = (dataBarbers: Barbers[]) => {
                dataBarbers.forEach((el: Barbers) => {
                    if (el.name === choosedNameBarber) {
                        const deepCopyObject: Barbers = JSON.parse(JSON.stringify(el));
                        const { datesAndTime } = deepCopyObject;
                        datesAndTime.forEach((element: DatesAndTime) => {
                            if (element.date === recordingDate) {
                                element.booking[element.time.indexOf(recordingTime)] = false;
                                updateSpecialist(deepCopyObject);
                            }
                        });
                    }
                });
            };
            updateDataBaseBarbers(dataBarbers);
        }
    }, [dataBarbers, choosedNameBarber, recordingDate, recordingTime, updateSpecialist]);

    const calculatePrice = () => {
        if (percentsOnPrice === "-20%") {
            return Math.ceil(priceChoosedService - (priceChoosedService * 0.2));
        } else if (percentsOnPrice === "-10%") {
            return Math.ceil(priceChoosedService - (priceChoosedService * 0.1));
        } else {
            return priceChoosedService;
        }
    };

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
                                <h3>{calculatePrice()}$</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recording;



