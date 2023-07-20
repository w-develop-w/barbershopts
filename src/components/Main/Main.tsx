import React from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import styles from "./Main.module.scss"
import { setChoosedImageBarber, setChoosedStatusBarber, setChoosedNameBarber,  setRecordingDate, setRecordingTime, setChoosedService, setPriceChoosedService, setTimeForServiceFact, setPercentsOnPrice } from "../../store/dataSlice";
// import { Link } from 'react-router-dom';

function Main() {

    const dispatch = useDispatch()
    dispatch(setChoosedImageBarber(""));
    dispatch(setChoosedStatusBarber(""));
    dispatch(setChoosedNameBarber(""));
    dispatch(setRecordingDate(""));
    dispatch(setRecordingTime(""));
    dispatch(setChoosedService(""));
    dispatch(setPriceChoosedService(0));
    dispatch(setTimeForServiceFact(0));
    dispatch(setPercentsOnPrice(""));
  

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h2>Barbershop</h2>
                <ul>
                    <li>
                        <Link className={styles.link} to="specialists">
                            <button>Specialists</button>
                        </Link>
                    </li>

                    <li>
                        <Link className={styles.link} to="services">
                            <button>Service</button>
                        </Link>
                    </li>

                    <li>
                        <Link className={styles.link} to="dateAndTime">
                            <button>Date and time</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Main
