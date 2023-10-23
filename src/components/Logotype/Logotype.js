import logotype from "./images/logotype.png"
import styles from "./logotype.css"

export const Logotype = () => {
    return (
        <div className="container__logotype">
            <a href="/">
                <div className="logotype">
                    <img src={logotype}/>
                </div>
                <span className="title">sk33t</span>
            </a>
        </div>
    );
};