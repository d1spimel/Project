import logotype from "./images/logotype.png"
import styles from "./logotype.module.css"

export const Logotype = () => {
    return (
        <div className={styles.container__logotype}>
            <a href="/">
                <div className={styles.logotype}>
                    <img src={logotype}/>
                </div>
                <span className={styles.title}>sk33t</span>
            </a>
        </div>
    );
};