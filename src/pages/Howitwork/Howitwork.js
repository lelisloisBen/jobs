import React from 'react';
import styles from './Howitwork.module.css';

const Howitwork = () => {
    return (
        <div className={styles.timeline}>
            <div className={[styles.container, styles.left].join(' ')}>
                <div className={styles.content}>
                <h2>2017</h2>
                <p>
                    Fry! Stay back! He's too powerful! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. There's one way and only one way to determine if an animal is intelligent. Dissect its brain!
                </p>
                </div>
            </div>
            <div className={[styles.container,styles.right].join(' ')}>
                <div className={styles.content}>
                <h2>2016</h2>
                <p>
                    Ow, my spirit! I love you, buddy! Hello, little man. I will destroy you! I love this planet! I've got wealth, fame, and access to the depths of sleaze that those things bring. Too much work. Let's burn it and say we dumped it in the sewer.
                </p>
                </div>
            </div>
            <div className={[styles.container,styles.left].join(' ')}>
                <div className={styles.content}>
                <h2>2015</h2>
                <p>
                    Oh sure! Blame the wizards! Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? Wow, you got that off the Internet? In my day, the Internet was only used to download pornography.
                </p>
                </div>
            </div>
            <div className={[styles.container,styles.right].join(' ')}>
                <div className={styles.content}>
                <h2>2012</h2>
                <p>
                    You lived before you met me?! Why would a robot need to drink? Guards! Bring me the forms I need to fill out to have her taken away! Can we have Bender Burgers again? Incidentally, you have a dime up your nose.
                </p>
                </div>
            </div>
            <div className={[styles.container,styles.left].join(' ')}>
                <div className={styles.content}>
                <h2>2011</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
            </div>
            <div className={[styles.container,styles.right].join(' ')}>
                <div className={styles.content}>
                <h2>2007</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
            </div>
        </div>
    );
}

export default Howitwork;