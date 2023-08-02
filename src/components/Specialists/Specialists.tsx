import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSpecialistsQuery } from "../../api/fetchDataSpecialists";
import { Barbers, DatesAndTime } from "../../models/models";
import { RootState } from "../../store/store.index";
import styles from "./Specialists.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setChoosedImageBarber, setChoosedStatusBarber, setRecordingTime, setChoosedNameBarber, setPercentsOnPrice, setRecordingDate } from "../../store/dataSlice";

function Specialists() {
  const dispatch = useDispatch();
  const timeForServiceFact = useSelector((state: RootState) => state.dataOfBarbershop.timeForServiceFact);
  const recordingDate = useSelector((state: RootState) => state.dataOfBarbershop.recordingDate);

  console.log(timeForServiceFact);

  const {
    data: dataBarbers,
    error: errorBarbers,
    isLoading: isLoadingBarbers,
  } = useSpecialistsQuery(null);

  // get current path
  const location = useLocation();

  if (isLoadingBarbers) {
    return <div>Loading...</div>;
  }

  if (errorBarbers) {
    if ("status" in errorBarbers) {
      // handler of error FetchBaseQueryError
      return <div>Error: {errorBarbers.status}</div>;
    } else {
      // handler of error SerializedError
      return <div>Error: {errorBarbers.message}</div>;
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

  const clickOnTime = (image: string, status: string, name: string, time?: string, price?: string, date?: string): void =>  {
    dispatch(setChoosedImageBarber(image));
    dispatch(setChoosedStatusBarber(status));
    dispatch(setChoosedNameBarber(name));

    if (time) {
      dispatch(setRecordingTime(time));
    }

    if (price) {
      dispatch(setPercentsOnPrice(price));
    }

    if (date) {
      dispatch(setRecordingDate(date));
    }
  };

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
                          {location.pathname === "/dateAndTime/services/specialists" && el.datesAndTime.map((element: DatesAndTime, index: number) => (
                            element.date === recordingDate && (
                              <li key={index}>
                                <h3> {element.date} </h3>
                                {element.time.map((timeElement: string, index: number) => {
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
                                        onClick={() => clickOnTime(el.image, el.status, el.name, timeElement, el.price, element.date)}
                                      >
                                        {timeElement}
                                      </button>
                                    </Link>
                                  );
                                })}
                              </li>
                            )
                          ))}

                          {location.pathname === "/services/specialists" && el.datesAndTime.map((element: DatesAndTime, index: number) => (
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
                                      onClick={() => clickOnTime(el.image, el.status, el.name, timeElement, el.price, element.date)}
                                    >
                                      {timeElement}
                                    </button>
                                  </Link>
                                );
                              })}
                            </li>
                          ))}

                          {location.pathname === "/specialists" && (
                            <li>
                              <Link
                                to={getToPath(location.pathname)}
                                className={styles.link}
                              >
                                <button
                                //   className={styles.choose}
                                  onClick={() => clickOnTime(el.image, el.status, el.name)}
                                >
                                  Choose
                                </button>
                              </Link>
                            </li>
                          )}

                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            ))}
        </ul>
        {location.pathname !== "/specialists" && !dataBarbers?.some((el: Barbers) => {
          return el.workDay === true && el.datesAndTime.some((element: DatesAndTime) => {
            return element.date === recordingDate && element.time.some((timeElement, index) => {
              const isAvailable = element.access[index] >= timeForServiceFact;
              const isBooking = element.booking[index];
              return isAvailable && isBooking;
            });
          });
        }) && (
          <Link to="/dateAndTime">
            <button className={styles.chooseAnotherDate}>Choose another date</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Specialists;






