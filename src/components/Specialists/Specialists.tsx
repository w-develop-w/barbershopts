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
    const recordingDate = useSelector((state: RootState) => state.dataOfBarbershop.recordingDate)
    const recordingTime = useSelector((state: RootState) => state.dataOfBarbershop.recordingTime)

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



    const availableTimeAndDate = (dataBarbers: any, dataServing: any, nameBarber: string) => {
        
        // dataBarbers.map((item: any)  => {
        //     // console.log(item)
        //     if(item) {

        //     }
        // })

        // console.log(nameBarber)
        
        // variable with time for service in db servicing
        let timeForServiceFact: number = 0
        
        dataServing.map((item: any) => {
            if(item.name ===  choosedService) {
                timeForServiceFact = item.time
            }            
        })
        
        
        // variable for index time 
        let indexOfTime: number  = 0
        // variable with time for service in db barbers
        let timeForServiceBarber: number = 0

        dataBarbers.map((item: any) => {

            if(item.name === nameBarber) {
                item.datesAndTime.map((el:any) => {

                    if(el.date === recordingDate) {
                        // console.log(el.time)
                        el.time.map((element: any) => {
                            // console.log(`${recordingTime}`)
                            if(element === recordingTime) {
                                indexOfTime = (el.time).indexOf(recordingTime)
                                // console.log(`indedxofTime ${indexOfTime}`)
                                timeForServiceBarber= el.access[indexOfTime]
                                console.log(timeForServiceBarber)

                            }
                            else {
                                console.log('hehehhe')
                            }
                        })
                    }
                })
            }
        })


    } 


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
                                                                            onClick={() => availableTimeAndDate(dataBarbers, dataServing, el.name)}
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
