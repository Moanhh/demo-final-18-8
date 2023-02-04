import styles from "../assets/style/starter.module.css";
import { Link } from "react-router-dom";
// import Registration from "../loginApp/Registration";

const Starter = () => {

  return (
    <div className={styles.parent}>
      <header className={styles.masthead}>
        <div className={styles.container}>
            <div className={styles.mast_head_subheading}>Welcome To FlashCard</div>
            <div className={styles.mast_head_heading}>It's Nice To Meet You</div>
            <Link to='/signup' className={styles.btn_starter}>
              Click to start !
            </Link>

        </div>
      </header>
    </div>
  );
};

export default Starter;
