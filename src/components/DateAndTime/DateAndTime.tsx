// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "./DateAndTime.module.scss";
// import { RootState } from "../../store/store.index";
// import { setRecordingDate, setRecordingTime } from "../../store/dataSlice";
// import { Link, useLocation } from "react-router-dom";
// import { useSpecialistsQuery } from "../../api/fetchDataSpecialists";
// import { Barbers } from "../../models/models";

// function DateAndTime() {
//   const dispatch = useDispatch();
//   const recordingDate = useSelector(
//     (state: RootState) => state.dataOfBarbershop.recordingDate
//   );
//   const recordingTime = useSelector(
//     (state: RootState) => state.dataOfBarbershop.recordingTime
//   );
//   const choosedNameBarber = useSelector(
//     (state: RootState) => state.dataOfBarbershop.choosedNameBarber
//   );

//   const handleTimeClick = (time: string) => {
//     dispatch(setRecordingTime(time));
//   };

//   const handleDateClick = (date: string) => {
//     dispatch(setRecordingDate(date));
//   };

//   const shouldRedirect = recordingDate !== "" && recordingTime !== "";

//   const location = useLocation();

//   const { data: dataBarbers, error: errorBarbers, isLoading: isLoadingBarbers } =
//     useSpecialistsQuery(null);

//   if (isLoadingBarbers) {
//     return <div>Loading...</div>;
//   }

//   if (errorBarbers) {
//     if ("status" in errorBarbers) {
//       return <div>Error: {errorBarbers.status}</div>;
//     } else {
//       return <div>Error: {errorBarbers.message}</div>;
//     }
//   }

//   if (location.pathname !== "/specialists/services/dataAndTime") {
//     return (
//       <div className={styles.container}>
//         <div className={styles.modal}>
//           <h3>Choose date:</h3>
//           <div className={styles.listDate}>
//             <div className={styles.itemDate}>
//               <button
//                 className={recordingDate === "14.07" ? styles.active : ""}
//                 onClick={() => handleDateClick("14.07")}
//               >
//                 14.07
//               </button>

//               <button
//                 className={recordingDate === "15.07" ? styles.active : ""}
//                 onClick={() => handleDateClick("15.07")}
//               >
//                 15.07
//               </button>

//               <button
//                 className={recordingDate === "16.07" ? styles.active : ""}
//                 onClick={() => handleDateClick("16.07")}
//               >
//                 16.07
//               </button>
//             </div>
//           </div>

//           <h3>Choose time:</h3>
//           <div className={styles.listTime}>
//             <div className={styles.itemTime}>
//               <button
//                 className={recordingTime === "10:00" ? styles.active : ""}
//                 onClick={() => handleTimeClick("10:00")}
//               >
//                 10:00
//               </button>

//               <button
//                 className={recordingTime === "11:00" ? styles.active : ""}
//                 onClick={() => handleTimeClick("11:00")}
//               >
//                 11:00
//               </button>

//               <button
//                 className={recordingTime === "12:00" ? styles.active : ""}
//                 onClick={() => handleTimeClick("12:00")}
//               >
//                 12:00
//               </button>

//               <button
//                 className={recordingTime === "13:00" ? styles.active : ""}
//                 onClick={() => handleTimeClick("13:00")}
//               >
//                 13:00
//               </button>

//               <button
//                 className={recordingTime === "14:00" ? styles.active : ""}
//                 onClick={() => handleTimeClick("14:00")}
//               >
//                 14:00
//               </button>
//             </div>
//           </div>

//           {shouldRedirect && (
//             <Link to="/dateAndTime/services">
//               <button className={styles.Btn}>Go to services</button>
//             </Link>
//           )}
//         </div>
//       </div>
//     );
//   } else if (location.pathname === "/specialists/services/dataAndTime") {
//     return (
//       <div>
//         {dataBarbers &&
//           dataBarbers.map((item) => {
//             if (item.name === choosedNameBarber) {
//               return (
//                 <div key={item.id} className={styles.container}>
//                   <div className={styles.modal}>
//                     <h3>Choose date:</h3>
//                     <div className={styles.listDate}>
//                       <div className={styles.itemDate}>
//                         <button
//                           className={recordingDate === "14.07" ? styles.active : ""}
//                           onClick={() => handleDateClick("14.07")}
//                         >
//                           14.07
//                         </button>
//                       </div>
//                     </div>
//                     <h3>Choose time:</h3>
//                     <div className={styles.listTime}>
//                       <div className={styles.itemTime}>
//                         <button
//                           className={recordingTime === "10:00" ? styles.active : ""}
//                           onClick={() => handleTimeClick("10:00")}
//                         >
//                           10:00
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             } else {
//               return null;
//             }
//           })}
//       </div>
//     );
//   }
// }

// export default DateAndTime;



// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "./DateAndTime.module.scss";
// import { RootState } from "../../store/store.index";
// import { setRecordingDate, setRecordingTime } from "../../store/dataSlice";
// import { Link, useLocation } from "react-router-dom";
// import { useSpecialistsQuery } from "../../api/fetchDataSpecialists";
// import { Barbers } from "../../models/models";

// function DateAndTime() {
//   const dispatch = useDispatch();
//   const recordingDate = useSelector(
//     (state: RootState) => state.dataOfBarbershop.recordingDate
//   );
//   const recordingTime = useSelector(
//     (state: RootState) => state.dataOfBarbershop.recordingTime
//   );
//   const choosedNameBarber = useSelector(
//     (state: RootState) => state.dataOfBarbershop.choosedNameBarber
//   );

//   const handleTimeClick = (time: string) => {
//     dispatch(setRecordingTime(time));
//   };

//   const handleDateClick = (date: string) => {
//     dispatch(setRecordingDate(date));
//   };

//   const shouldRedirect = recordingDate !== "" && recordingTime !== "";

//   const location = useLocation();

//   const { data: dataBarbers, error: errorBarbers, isLoading: isLoadingBarbers } =
//     useSpecialistsQuery(null);

//   if (isLoadingBarbers) {
//     return <div>Loading...</div>;
//   }

//   if (errorBarbers) {
//     if ("status" in errorBarbers) {
//       return <div>Error: {errorBarbers.status}</div>;
//     } else {
//       return <div>Error: {errorBarbers.message}</div>;
//     }
//   }

//   if (location.pathname === "/specialists/services/dataAndTime") {
//     return (
//       <div>
//         {dataBarbers &&
//           dataBarbers.map((item) => {
//             if (item.name === choosedNameBarber) {
//               return (
//                 <div key={item.id} className={styles.container}>
//                   <div className={styles.modal}>
//                     <h3>Choose date:</h3>
//                     <div className={styles.listDate}>
//                       <div className={styles.itemDate}>
//                         {
//                             item.datesAndTime.map(el => {
//                                 <button
//                                 // className={recordingDate === {el.date} ? styles.active : ""}
//                                 onClick={() => handleDateClick({el.date})}
//                                 >
//                                 {el.date}
//                                 </button>
//                             })
//                         }
//                       </div>
//                     </div>
//                     <h3>Choose time:</h3>
//                     <div className={styles.listTime}>
//                       <div className={styles.itemTime}>
//                         {
//                             item.datesAndTime.map(el => {
//                                 el.time.map(element => {
//                                 <button
//                                 // className={recordingTime === {element} ? styles.active : ""}
//                                 onClick={() => handleDateClick({element})}
//                                 >
//                                 {element}
//                                 </button>
//                                 })
//                             })
//                         }
//                         <button
//                           className={recordingTime === "10:00" ? styles.active : ""}
//                           onClick={() => handleTimeClick("10:00")}
//                         >
//                           10:00
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             } else {
//               return null;
//             }
//           })}
//       </div>
//     );
//   }

//   // В остальных случаях отображаем этот код:
//   return (
//     <div className={styles.container}>
//       <div className={styles.modal}>
//         <h3>Choose date:</h3>
//         <div className={styles.listDate}>
//           <div className={styles.itemDate}>
//             <button
//               className={recordingDate === "14.07" ? styles.active : ""}
//               onClick={() => handleDateClick("14.07")}
//             >
//               14.07
//             </button>

//             <button
//               className={recordingDate === "15.07" ? styles.active : ""}
//               onClick={() => handleDateClick("15.07")}
//             >
//               15.07
//             </button>

//             <button
//               className={recordingDate === "16.07" ? styles.active : ""}
//               onClick={() => handleDateClick("16.07")}
//             >
//               16.07
//             </button>
//           </div>
//         </div>

//         <h3>Choose time:</h3>
//         <div className={styles.listTime}>
//           <div className={styles.itemTime}>
//             <button
//               className={recordingTime === "10:00" ? styles.active : ""}
//               onClick={() => handleTimeClick("10:00")}
//             >
//               10:00
//             </button>

//             <button
//               className={recordingTime === "11:00" ? styles.active : ""}
//               onClick={() => handleTimeClick("11:00")}
//             >
//               11:00
//             </button>

//             <button
//               className={recordingTime === "12:00" ? styles.active : ""}
//               onClick={() => handleTimeClick("12:00")}
//             >
//               12:00
//             </button>

//             <button
//               className={recordingTime === "13:00" ? styles.active : ""}
//               onClick={() => handleTimeClick("13:00")}
//             >
//               13:00
//             </button>

//             <button
//               className={recordingTime === "14:00" ? styles.active : ""}
//               onClick={() => handleTimeClick("14:00")}
//             >
//               14:00
//             </button>
//           </div>
//         </div>

//         {shouldRedirect && (
//           <Link to="/dateAndTime/services">
//             <button className={styles.Btn}>Go to services</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DateAndTime;





import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DateAndTime.module.scss";
import { RootState } from "../../store/store.index";
import { setRecordingDate, setRecordingTime } from "../../store/dataSlice";
import { Link, useLocation } from "react-router-dom";
import { useSpecialistsQuery } from "../../api/fetchDataSpecialists";
import { Barbers } from "../../models/models";

function DateAndTime() {
  const dispatch = useDispatch();
  const recordingDate = useSelector(
    (state: RootState) => state.dataOfBarbershop.recordingDate
  );
  const recordingTime = useSelector(
    (state: RootState) => state.dataOfBarbershop.recordingTime
  );
  const choosedNameBarber = useSelector(
    (state: RootState) => state.dataOfBarbershop.choosedNameBarber
  );

  const handleTimeClick = (time: string) => {
    dispatch(setRecordingTime(time));
  };

  const handleDateClick = (date: string) => {
    dispatch(setRecordingDate(date));
  };

  const shouldRedirect = recordingDate !== "" && recordingTime !== "";

  const location = useLocation();

  const { data: dataBarbers, error: errorBarbers, isLoading: isLoadingBarbers } =
    useSpecialistsQuery(null);

  if (isLoadingBarbers) {
    return <div>Loading...</div>;
  }

  if (errorBarbers) {
    if ("status" in errorBarbers) {
      return <div>Error: {errorBarbers.status}</div>;
    } else {
      return <div>Error: {errorBarbers.message}</div>;
    }
  }

  if (location.pathname === "/specialists/services/dataAndTime") {
    return (
      <div>
        {dataBarbers &&
          dataBarbers.map((item) => {
            if (item.name === choosedNameBarber) {
              return (
                <div key={item.id} className={styles.container}>
                  <div className={styles.modal}>
                    <h3>Choose date:</h3>
                    <div className={styles.listDate}>
                      <div className={styles.itemDate}>
                        {item.datesAndTime.map((el) => (
                          <button
                            key={el.date}
                            className={recordingDate === el.date ? styles.active : ""}
                            onClick={() => handleDateClick(el.date)}
                          >
                            {el.date}
                          </button>
                        ))}
                      </div>
                    </div>
                    <h3>Choose time:</h3>
                    <div className={styles.listTime}>
                      <div className={styles.itemTime}>
                        {item.datesAndTime.map((el) =>
                          el.time.map((element) => (
                            <button
                              key={element}
                              className={recordingTime === element ? styles.active : ""}
                              onClick={() => handleTimeClick(element)}
                            >
                              {element}
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    );
  }

  // В остальных случаях отображаем этот код:
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h3>Choose date:</h3>
        <div className={styles.listDate}>
          <div className={styles.itemDate}>
            <button
              className={recordingDate === "14.07" ? styles.active : ""}
              onClick={() => handleDateClick("14.07")}
            >
              14.07
            </button>

            <button
              className={recordingDate === "15.07" ? styles.active : ""}
              onClick={() => handleDateClick("15.07")}
            >
              15.07
            </button>

            <button
              className={recordingDate === "16.07" ? styles.active : ""}
              onClick={() => handleDateClick("16.07")}
            >
              16.07
            </button>
          </div>
        </div>

        <h3>Choose time:</h3>
        <div className={styles.listTime}>
          <div className={styles.itemTime}>
            <button
              className={recordingTime === "10:00" ? styles.active : ""}
              onClick={() => handleTimeClick("10:00")}
            >
              10:00
            </button>

            <button
              className={recordingTime === "11:00" ? styles.active : ""}
              onClick={() => handleTimeClick("11:00")}
            >
              11:00
            </button>

            <button
              className={recordingTime === "12:00" ? styles.active : ""}
              onClick={() => handleTimeClick("12:00")}
            >
              12:00
            </button>

            <button
              className={recordingTime === "13:00" ? styles.active : ""}
              onClick={() => handleTimeClick("13:00")}
            >
              13:00
            </button>

            <button
              className={recordingTime === "14:00" ? styles.active : ""}
              onClick={() => handleTimeClick("14:00")}
            >
              14:00
            </button>
          </div>
        </div>

        {shouldRedirect && (
          <Link to="/dateAndTime/services">
            <button className={styles.Btn}>Go to services</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default DateAndTime;








