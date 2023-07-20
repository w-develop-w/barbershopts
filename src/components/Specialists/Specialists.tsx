import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useSpecialistsQuery } from "../../api/fetchDataSpecialists"
import { useServicingQuery } from "../../api/fetchDataServices"
import { Barbers, DatesAndTime } from "../../models/models"
import { RootState } from "../../store/store.index"
import styles from "./Specialists.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { setChoosedImageBarber, setChoosedStatusBarber, setRecordingTime, setChoosedNameBarber, setPercentsOnPrice } from "../../store/dataSlice";


function Specialists() {

    const dispatch = useDispatch()
    const timeForServiceFact = useSelector((state: RootState) => state.dataOfBarbershop.timeForServiceFact)
    const recordingDate = useSelector((state: RootState) => state.dataOfBarbershop.recordingDate)

    console.log(timeForServiceFact)

    const {
        data: dataBarbers,
        error: errorBarbers,
        isLoading: isLoadingBarbers,
    } = useSpecialistsQuery(null)

    // get current path
    const location = useLocation() 
    
    // console.log(dataServing)
    // console.log(data)
    
    if (isLoadingBarbers) {
        return <div>Loading...</div>
    }

    if (errorBarbers) {
        if ("status" in errorBarbers) {
            // handler of error FetchBaseQueryError
            return <div>Error: {errorBarbers.status}</div>
        } else {
            // handler of error SerializedError
            return <div>Error: {errorBarbers.message}</div>
        }
    }

    const getToPath = (currentPath: string): string => {
        if (currentPath === "/services/specialists") {
            return "/services/specialists/recording";
        } else if (currentPath === "/specialists") {
            return "/specialists/services";
        } else if (currentPath === "/dateAndTime/services/specialists") {
            return "/dateAndTime/services/specialists/recording";
        } else {
            return "/";
        }
    };

    const clickOnTime = (image: string, status: string, name:string, time: string, price: string ) => {
        dispatch(setChoosedImageBarber(image))
        dispatch(setChoosedStatusBarber(status))
        dispatch(setChoosedNameBarber(name))
        dispatch(setRecordingTime(time))
        dispatch(setPercentsOnPrice(price))
    }


    return (
        <div className={styles.container}>
        <div className={styles.modal}>
            <ul className={styles.list}>
            {dataBarbers &&
                dataBarbers.map((el: Barbers) => (
                el.workDay === true && (
                <li className={styles.item} key={el.id}>
                    <div className={styles.content}>
                    <img src={el.image} alt="Barber" />
                    <div>
                        <h3>{el.status}</h3>
                        <h3>{el.name}</h3>
                        <div>
                        <ul>
                            {el.datesAndTime.map((element: DatesAndTime, index: number) => (
                                 element.date === recordingDate && (
                                <li key={index}>
                                    <h3> {element.date} </h3>
                                    {element.time.map((timeElement, index) => {
                                    const isAvailable = element.access[index] >= timeForServiceFact;
                                    const isBooking = element.booking[index];
                                    const isDisabled = !isAvailable || !isBooking; 
        
                                    return (
                                        <Link
                                        key={index}
                                        to={getToPath(location.pathname)}
                                        className={styles.link}
                                        >
                                        <button
                                            key={timeElement}
                                            className={`${isAvailable && isBooking ? styles.green : ""}`}
                                            disabled={isDisabled}
                                            onClick={() => clickOnTime(el.image, el.status, el.name, timeElement, el.price)}
                                        >
                                            {timeElement}
                                        </button>
                                        </Link>
                                    );
                                    })}
                                </li> )
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                </li> )
                ))}
            </ul>
        </div>
        </div>
    );
  
}

export default Specialists
