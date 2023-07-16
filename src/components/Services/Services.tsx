import React from "react"
import styles from "./Services.module.scss"
import { useServicingQuery } from "../../api/fetchDataServices"
import { Servicing } from "../../models/models"

function Services() {
    const { data, error, isLoading } = useServicingQuery(null)

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

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <ul className={styles.list}>
                    {data &&
                        data.map((el: Servicing) => (
                            <li className={styles.item} key={el.id}>
                                <h3>{el.name}</h3>
                                <h2>{el.price}</h2>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default Services
