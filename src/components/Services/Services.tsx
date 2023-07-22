import React from "react";
import styles from "./Services.module.scss";
import { useServicingQuery } from "../../api/fetchDataServices";
import { Servicing } from "../../models/models";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.index"
import { setChoosedService, setPriceChoosedService, setTimeForServiceFact } from "../../store/dataSlice";

function Services() {
    const { data, error, isLoading } = useServicingQuery(null);
    const location = useLocation();

    const dispatch = useDispatch()

    const {
        data: dataServing,
        error: errorServicing,
        isLoading: isLoadingServicing,
    } = useServicingQuery(null)


    const choosedService = useSelector(
        (state: RootState) => state.dataOfBarbershop.choosedService
    )


    const handleChoosedServiceClick = (service: string, price: number) => {
       
        dispatch(setChoosedService(service))
        dispatch(setPriceChoosedService(price))
 
        dataServing?.map((item: any) => {
            if (item.name === service) {
                dispatch(setTimeForServiceFact(item.time))
            }
        })
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        if ("status" in error) {
            return <div>Error: {error.status}</div>;
        } else {
            return <div>Error: {error.message}</div>;
        }
    }

    const getToPath = (currentPath: string): string => {

        if (currentPath === "/specialists/services") {
            return "/specialists/services/dataAndTime";
        } 
        else if (currentPath === "/dateAndTime/services") {
            return "/dateAndTime/services/specialists";
        } 
        else if (currentPath === "/services") {
            return "/services/specialists";
        } 
        else {
            return "/"; 
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
                                to={getToPath(location.pathname)} 
                                key={el.id}
                            >
                                <li className={styles.item} onClick={() => handleChoosedServiceClick(el.name, el.price)}>
                                    <h3>{el.name}</h3>
                                    <h2>{el.price}$</h2>
                                </li>
                            </Link>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Services;
