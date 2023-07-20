import React from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import styles from "./Main.module.scss"
import { setRecordingDate, setRecordingTime } from "../../store/dataSlice";
// import { Link } from 'react-router-dom';

function Main() {

    const dispatch = useDispatch()
    dispatch(setRecordingDate(""));
    dispatch(setRecordingTime(""));

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
