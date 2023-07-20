// import React from "react";
// import styles from "./Recording.module.scss"
// import { RootState } from "../../store/store.index"
// import { useSelector } from "react-redux";
// import { useSpecialistsQuery } from "../../api/fetchDataSpecialists";
// import { Barbers } from "../../models/models";

// function Recording() {

//     const choosedImageBarber = useSelector((state: RootState) => state.dataOfBarbershop.choosedImageBarber)
//     const choosedStatusBarber = useSelector((state: RootState) => state.dataOfBarbershop.choosedStatusBarber)
//     const choosedNameBarber = useSelector((state: RootState) => state.dataOfBarbershop.choosedNameBarber)
//     const choosedService = useSelector((state: RootState) => state.dataOfBarbershop.choosedService)
//     const recordingDate = useSelector((state: RootState) => state.dataOfBarbershop.recordingDate)
//     const recordingTime = useSelector((state: RootState) => state.dataOfBarbershop.recordingTime)
//     const priceChoosedService = useSelector((state: RootState) => state.dataOfBarbershop.priceChoosedService)
//     const percentsOnPrice = useSelector((state: RootState) => state.dataOfBarbershop.percentsOnPrice)
//     const indexChoosedTime = useSelector((state: RootState) => state.dataOfBarbershop.indexChoosedTime)


//     const {
//         data: dataBarbers,
//         error: errorBarbers,
//         isLoading: isLoadingBarbers,
//     } = useSpecialistsQuery(null)


//     const updateDataBaseBarbers = (dataBarbers: Barbers[]) => {
//         dataBarbers.map((el: Barbers) => {
//             if(el.name === choosedNameBarber) {
//                 el.datesAndTime.map(element => {
//                     if(element.date === recordingDate) {
//                         element.booking[indexChoosedTime] = false
//                         console.log(el)
//                     }
//                 })
//             }
//         })
//     }

//     updateDataBaseBarbers(dataBarbers)

//     const calculatePrice = () => {
//         if (percentsOnPrice === "-20%") {
//             return Math.ceil(priceChoosedService - ((priceChoosedService / 100) * 20));
//         } else if (percentsOnPrice === "-10%") {
//             return Math.ceil(priceChoosedService - ((priceChoosedService / 100) * 10));
//         } else {
//             return priceChoosedService;
//         }
//     };

//     // console.log(percentsOnPrice);

//     return (
//         <div className={styles.container}>
//             <div className={styles.modal}>
//                 <h3>Recording</h3>
//                 <div className={styles.content}>
//                     <img src={choosedImageBarber} alt="Img" />
//                     <div className={styles.info}>
//                         <div className={styles.barber}>
//                             <h3>{choosedStatusBarber}</h3>
//                             <h2>{choosedNameBarber}</h2>
//                             <h4>{choosedService}</h4>
//                         </div>
//                         <div className={styles.dataAndTime}>
//                             <div>
//                                 <h3>Date and Time:</h3>
//                                 <div>
//                                     <h3>{recordingDate}</h3>
//                                     <h3>{recordingTime}</h3>
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3>Price:</h3>
//                                 <h3>{calculatePrice()}$</h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Recording;



import React, { useEffect } from "react";
import styles from "./Recording.module.scss"
import { RootState } from "../../store/store.index"
import { useSelector } from "react-redux";
import { useSpecialistsQuery } from "../../api/fetchDataSpecialists";
import { Barbers, DatesAndTime } from "../../models/models";
import DateAndTime from "../DateAndTime/DateAndTime";

function Recording() {

    const choosedImageBarber = useSelector((state: RootState) => state.dataOfBarbershop.choosedImageBarber)
    const choosedStatusBarber = useSelector((state: RootState) => state.dataOfBarbershop.choosedStatusBarber)
    const choosedNameBarber = useSelector((state: RootState) => state.dataOfBarbershop.choosedNameBarber)
    const choosedService = useSelector((state: RootState) => state.dataOfBarbershop.choosedService)
    const recordingDate = useSelector((state: RootState) => state.dataOfBarbershop.recordingDate)
    const recordingTime = useSelector((state: RootState) => state.dataOfBarbershop.recordingTime)
    const priceChoosedService = useSelector((state: RootState) => state.dataOfBarbershop.priceChoosedService)
    const percentsOnPrice = useSelector((state: RootState) => state.dataOfBarbershop.percentsOnPrice)

    const {
        data: dataBarbers,
        error: errorBarbers,
        isLoading: isLoadingBarbers,
    } = useSpecialistsQuery(null)

    useEffect(() => {
        
        // Проверяем, что данные о парикмахерах получены с сервера
        if (dataBarbers) {
            // Функция для обновления данных о парикмахерах
            const updateDataBaseBarbers = (dataBarbers: Barbers[]) => {
                dataBarbers.forEach((el: Barbers) => {
                    if (el.name === choosedNameBarber) {
                        let deepCopyObject = JSON.parse(JSON.stringify(el));
                        // console.log(deepCopyObject)
                        deepCopyObject.datesAndTime.map((element: DatesAndTime) => {
                            if (element.date === recordingDate) {
                                // console.log()
                                // element.booking[indexChoosedTime] = false
                                // console.log(el)
                                element.booking[(element.time).indexOf(recordingTime)] = false

                                // console.log(deepCopyObject)
                            }
                        })
                    }
                })
            }
            // Вызываем функцию для обновления данных
            updateDataBaseBarbers(dataBarbers)
        }
    }, [dataBarbers, choosedNameBarber, recordingDate])

    const calculatePrice = () => {
        if (percentsOnPrice === "-20%") {
            return Math.ceil(priceChoosedService - ((priceChoosedService / 100) * 20));
        } else if (percentsOnPrice === "-10%") {
            return Math.ceil(priceChoosedService - ((priceChoosedService / 100) * 10));
        } else {
            return priceChoosedService;
        }
    };

    // console.log(percentsOnPrice);

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
    )
}

export default Recording;

