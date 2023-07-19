import React from "react";
import styles from "./Services.module.scss";
import { useServicingQuery } from "../../api/fetchDataServices";
import { Servicing } from "../../models/models";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.index"
import { setChoosedService } from "../../store/dataSlice";

function Services() {
    const { data, error, isLoading } = useServicingQuery(null);
    const location = useLocation(); // Получаем текущий путь

    const dispatch = useDispatch()
    // const choosedService = useSelector(
    //     (state: RootState) => state.dataOfBarbershop.choosedService
    // )

    const handleChoosedServiceClick = (time: string, price: string) => {
        // console.log(time)
        // console.log(price)
        dispatch(setChoosedService(time))
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        if ("status" in error) {
            // Обработка ошибки FetchBaseQueryError
            return <div>Error: {error.status}</div>;
        } else {
            // Обработка ошибки SerializedError
            return <div>Error: {error.message}</div>;
        }
    }

    // Функция для определения правильного пути в зависимости от текущего пути
    const getToPath = (currentPath: string): string => {

        // console.log(currentPath)
        if (currentPath === "/specialists/services") {
            return "/specialists/services/recording";
        } 
        else if (currentPath === "/dateAndTime/services") {
            return "/dateAndTime/services/specialists";
        } 
        else if (currentPath === "/services") {
            return "/services/specialists";
        } 
        else {
            return "/"; // Возвращаем что-то по умолчанию, если необходимо
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <ul className={styles.list}>
                    {data &&
                        data.map((el: Servicing) => (
                            <Link
                                className={styles.link}
                                to={getToPath(location.pathname)} // Устанавливаем правильный путь
                                key={el.id}
                            >
                                <li className={styles.item} onClick={() => handleChoosedServiceClick(el.name, el.price)}>
                                    <h3>{el.name}</h3>
                                    <h2>{el.price}</h2>
                                </li>
                            </Link>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Services;
