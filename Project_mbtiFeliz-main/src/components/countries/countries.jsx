import styles from './countries.module.css';
import { Link } from 'react-router-dom';
import Countries from '../../common/api/countriesApi/../countriesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import KakaoBtn from '../shareSNS/kakaoShareButton';
import FacebookBtn from '../shareSNS/facebookShareButton';
import TwitterBtn from '../shareSNS/twitterShareButton';

const Profile = ({ match }) => {
    const url = window.location.href;
    const { countryName } = match.params;
    const nation = Countries[countryName];

    if (!nation) {
        return <div>존재하지 않는 결과입니다.</div>;
    }
    const copyAlert = () => {
        alert('링크 복사완료!');
    };
    return (
        <>
            <div className={styles.wrapper} key={nation.id}>
                <div className={styles.container}>
                    <div className={styles.h5}>
                        <h5>앞으로 만나면 좋을 유형은</h5>
                    </div>
                    <div className={styles.result__type}>
                        {nation.nickname}
                    </div>
                    <br />
                    <img
                        src={nation.img}
                        alt="img"
                        className={styles.main__img}
                    />

                    <div className={styles.h4}>
                        <h4>현애인의 MOOD</h4>
                    </div>

                    <div className={styles.description_box}>
                        <div className={styles.reust__title}>
                            <h2>키워드</h2>
                        </div>
                        <ul className={`${styles.result__style__wrapper} ${styles.hashtag}`}>
                            {nation.hashtag.map((item) => {
                                return (
                                    <li className={styles.result__style__detail} key={item.des}>
                                        {item.des}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className={styles.reust__title1}>
                            <h2>상세설명</h2>
                        </div>
                        <div>
                            <ul className={styles.result__style__wrapper}>
                                {nation.description.map((item) => {
                                    return (
                                        <li
                                            className={styles.result__style__detail}
                                            key={item.des}
                                        >
                                            {item.des}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                    </div>

                    <div className={styles.shareBox}>
                        <KakaoBtn />
                        <FacebookBtn />
                        <TwitterBtn />
                    </div>
                    <div className={styles.button__box}>
                        <Link to="/" className={styles.button}>
                            처음 화면으로 돌아가기
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                className={styles.icon}
                            />
                        </Link>
                        <div className={styles.copy__button}
                            onClick={copyAlert}>
                            링크복사
                            <FontAwesomeIcon
                                icon={faCopy}
                                className={styles.icon}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

