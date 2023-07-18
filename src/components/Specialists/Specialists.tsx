import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useSpecialistsQuery } from "../../api/fetchDataSpecialists"
import { useServicingQuery } from "../../api/fetchDataServices"
import { Barbers, DatesAndTime } from "../../models/models"
import { RootState } from "../../store/store.index"
import styles from "./Specialists.module.scss"
import { useSelector } from "react-redux"

function Specialists() {

    const choosedService = useSelector((state: RootState) => state.dataOfBarbershop.choosedService)

    const { data: dataBarbers, error: errorBarbers, isLoading: isLoadingBarbers } = useSpecialistsQuery(null)
    const { data: dataServing, error: errorServicing, isLoading: isLoadingServicing } = useServicingQuery(null)
    const location = useLocation() // Получаем текущий путь

    // console.log(dataServing)
    // console.log(data)

    if (isLoadingBarbers) {
        return <div>Loading...</div>
    }

    if (errorBarbers) {
        if ("status" in errorBarbers) {
            // Обработка ошибки FetchBaseQueryError
            return <div>Error: {errorBarbers.status}</div>
        } else {
            // Обработка ошибки SerializedError
            return <div>Error: {errorBarbers.message}</div>
        }
    }

    const getToPath = (currentPath: string): string => {
        if (currentPath === "/services/specialists") {
            return "/services/specialists/recording"
        }
        else if (currentPath === "/specialists") {
            return "/specialists/services"
        }
        else if (currentPath === "/dateAndTime/services/specialists") {
            return "/dateAndTime/services/specialists/recording"
        }
        else {
            return "/" // Возвращаем что-то по умолчанию, если необходимо
        }
    }



    const availableTimeAndDate = (dataBarbers: any, dataServing: any) => {
        
        // dataBarbers.map((item: any)  => {
        //     // console.log(item)
        //     if(item) {

        //     }
        // })
        
        let timeForService: number = 0

        dataServing.map((item: any) => {
            if(item.name ===  choosedService) {
                timeForService = item.time
            }            
        })


    } 

    // availableTimeAndDate(dataBarbers)

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <ul className={styles.list}>
                    {dataBarbers &&
                        dataBarbers.map((el: Barbers) => (
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
