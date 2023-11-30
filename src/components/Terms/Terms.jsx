import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './terms.module.css';

export const Terms = () => {
    const [showDialog, setShowDialog] = useState(false);

    const toggleDialog = () => {
        setShowDialog(!showDialog);
    };

    return (
        <div className={styles.terms__container}>
            <button onClick={toggleDialog} className={styles.terms__button}>Toggle Dialog</button>

            <CSSTransition
                in={showDialog}
                timeout={300} // Adjust the timeout as needed
                classNames="dialog"
                unmountOnExit
            >
                <div className={styles.terms__container}>
                    <h1>Terms...</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa expedita architecto totam obcaecati, error molestias, perferendis ratione quaerat at, molestiae reiciendis provident! Nihil laboriosam ratione libero tempora, vel at, dignissimos iure sit aut accusantium quo fuga mollitia facilis ullam sint? Commodi, velit architecto. Nulla, laboriosam alias quae eligendi laborum qui maxime corrupti neque quasi ratione saepe officia ex error iste recusandae ducimus provident aperiam voluptas minus quos fuga delectus eum voluptatibus omnis? Nesciunt optio fuga, repellendus temporibus dolorum, ad rem exercitationem ex aliquam magnam laboriosam eum qui facere et. Qui eligendi pariatur, molestias vero sed nisi sit distinctio error quod ex explicabo rem consectetur perferendis labore. Rem ad hic illo! Voluptate aliquam reiciendis sint dolorem exercitationem commodi perferendis expedita ratione praesentium culpa a, excepturi id maxime nisi vitae, porro eligendi obcaecati quibusdam illum optio asperiores debitis consectetur dicta! Placeat deserunt, illum numquam ut sapiente temporibus pariatur iste totam vitae repellendus. Veritatis quidem corporis rem ex, laborum quis illo dolor, minus animi, voluptate et temporibus itaque dicta provident molestiae omnis tenetur culpa accusantium quasi debitis asperiores. Asperiores eius culpa reiciendis cupiditate quasi? Dicta dignissimos ad ipsam incidunt quod iste quidem accusantium in earum tempora laborum tenetur facilis laboriosam, nostrum ut? Asperiores atque et ab voluptatum beatae assumenda dolorum harum? Dicta, voluptate aliquam! Accusamus, molestiae dolore. A neque ad aspernatur soluta esse cumque pariatur omnis alias aut atque illum enim, recusandae cupiditate totam dolorum hic commodi exercitationem asperiores! Illum repellendus placeat a quod sequi odit alias adipisci voluptate repellat, excepturi ab aliquam voluptatum iste natus totam quidem magnam beatae aperiam? Voluptate sit neque esse nulla voluptates libero, necessitatibus id officia! Illum, debitis eaque distinctio minus voluptates sunt iste ab, alias suscipit ipsum incidunt tempore ut a obcaecati. In autem quis vitae. Vel eum accusantium harum sequi id asperiores et, inventore, nemo praesentium omnis aperiam libero rerum soluta facere optio reiciendis tenetur. Delectus corporis consectetur, vitae cupiditate dolores non nam eos autem quas veritatis ducimus at nobis consequuntur aliquam distinctio, ea eligendi hic! Quos doloremque ducimus temporibus maiores alias veniam? Asperiores omnis, vel nihil, quo aperiam explicabo accusantium enim pariatur dolores ex animi dignissimos amet officiis nemo illo ratione autem ea blanditiis deserunt dolorem laboriosam. Mollitia, officia ad! Cum error ipsa assumenda amet doloribus repellendus rem numquam molestias voluptate. Odit voluptatum explicabo incidunt laborum tempora aperiam pariatur, error ducimus dicta! Quam natus, dignissimos cum rem adipisci reiciendis inventore quis provident labore nemo delectus, optio numquam fugit laudantium at aspernatur reprehenderit magnam sapiente. Sequi iure similique minima blanditiis sed magnam amet voluptatem! Consectetur ipsum aliquam dolorem eaque provident officiis laboriosam beatae libero! Amet cumque vel debitis facilis nobis aperiam, quo ea omnis, nulla, voluptatum quaerat explicabo odio neque impedit a tempore! Quod quisquam quo recusandae perferendis eum laborum impedit maiores suscipit alias dolore ea cum ipsa voluptatum enim omnis delectus magni saepe, dignissimos laudantium optio provident culpa, eaque quaerat quos! Illo ut incidunt illum non omnis atque asperiores nobis earum repellendus enim sit cupiditate delectus, maiores aspernatur. Quod tempora dolores illum ad odio aut!</span>
                </div>
            </CSSTransition>
        </div>
    );
};
