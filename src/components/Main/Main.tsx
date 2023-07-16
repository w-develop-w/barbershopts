import styles from "./Main.module.scss"
import { Link } from 'react-router-dom';


function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h2>Barbershop</h2>
                <ul>
                    <li>
                        <Link to="/specialists">
                            <button>Specialists</button>
                        </Link>
                    </li>

                    <li>
                        <button>Service</button>
                    </li>

                    <li>
                        <button>Date and time</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Main
