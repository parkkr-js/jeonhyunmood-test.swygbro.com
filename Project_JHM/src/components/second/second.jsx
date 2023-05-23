import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../second/second.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Second = () => {
  const [inputValues, setInputValues] = useState({
    bestName: '',
    worstName: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const url = window.location.href; // url 복사
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.header}>
              전 애인의 이름을 입력해주세요
            </div>
          </div>
          <div className={styles.input_container}>
            <input
              type="text"
              name="bestName"
              placeholder="이름"
              value={inputValues.bestName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="worstName"
              placeholder="이름"
              value={inputValues.worstName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.best_worst_container}>
            <div className={styles.best}>최애</div>
            <div className={styles.worst}>최악</div>
          </div>
          <div className={styles.middle}>
            <div>
              <p style={{ color: '#4e4e4e' }}>
                * 입력조차 하기 싫으면.. 바로 시작!! *
              </p>
            </div>
          </div>

          <img className={styles.angel} src="img/angel.png" alt="angel" />
          <img className={styles.angry} src="img/angry.png" alt="angry" />

          <div className={styles.bottom}>
            <Link
              to={{
                pathname: '/select',
                search: `?bestName=${encodeURIComponent(
                  inputValues.bestName
                )}&worstName=${encodeURIComponent(inputValues.worstName)}`,
              }}
              className={styles.start__button}
            >
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
