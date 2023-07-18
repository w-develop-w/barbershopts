import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useSpecialistsQuery } from "../../api/fetchDataSpecialists"
import { Barbers, DatesAndTime } from "../../models/models"
import styles from "./Specialists.module.scss"

function Specialists() {
    const { data, error, isLoading } = useSpecialistsQuery(null)
    const location = useLocation() // Получаем текущий путь

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        if ("status" in error) {
            // Обработка ошибки FetchBaseQueryError
            return <div>Error: {error.status}</div>
        } else {
            // Обработка ошибки SerializedError
            return <div>Error: {error.message}</div>
        }
    }

    const getToPath = (currentPath: string): string => {
        if (currentPath === "/services/specialists") {
            return "/services/specialists/recording"
        }
        else if (currentPath === "/specialists") {
            return "/specialists/services"
        }
        else {
            return "/" // Возвращаем что-то по умолчанию, если необходимо
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <ul className={styles.list}>
                    {data &&
                        data.map((el: Barbers) => (
                            <li className={styles.item} key={el.id}>
                                <div className={styles.content}>
                                    <img src={el.image} alt="Barber" />
                                    <div>
                                        <h3>{el.status}</h3>
                                        <h3>{el.name}</h3>
                                        <div>
                                            <ul>
                                                {el.datesAndTime.map(
                                                    (element: DatesAndTime) => (
                                                        <li key={element.date}>
                                                            <h3>
                                                                {element.date}
                                                            </h3>
                                                            {element.time.map(
                                                                (
                                                                    timeElement,
                                                                    index
                                                                ) => (
                                                                    <Link
                                                                        key={
                                                                            index
                                                                        }
                                                                        to={getToPath(
                                                                            location.pathname
                                                                        )}
                                                                        className={
                                                                            styles.link
                                                                        }
                                                                    >
                                                                        <button
                                                                            key={
                                                                                timeElement
                                                                            }
                                                                        >
                                                                            {
                                                                                timeElement
                                                                            }
                                                                        </button>
                                                                    </Link>
                                                                )
                                                            )}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default Specialists
