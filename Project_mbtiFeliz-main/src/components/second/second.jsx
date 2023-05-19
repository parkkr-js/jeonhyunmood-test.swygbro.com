import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../second/second.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';

// import { CopyToClipboard } from 'react-copy-to-clipboard';

const Second = () => {
    const url = window.location.href; // url 복사
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                    <div className={styles.header}>전 애인의 이름을 입력해주세요</div>
                    </div>
                    <div className={styles.input_container}>
                        <input type="text" name ="최애이름" placeholder="이름" /> 
                        <input type="text" name ="최악이름" placeholder="이름" /> 
                    </div>
                    <div className={styles.best_worst_container}>
                        <div className={styles.best}>최애</div>
                        <div className={styles.worst}>최악</div>
                    </div>
                    <div className={styles.middle}>
                        <div>* 입력조차 하기 싫으면.. 바로 시작!! *</div>
                    </div>
                    <div className={styles.illust}>
                        <img
                            className={styles.logo}
                            src="img/천사1.png"
                        />
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/tripMBTI" className={styles.start__button}>
                            바로 시작!
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Second;
