import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{' '}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Work
          </div>
        </div>

        <div className="qualification__sections">
          {/*=============== Content 1 ===============*/}
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content '
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Engineer</h3>
                <span className="qualification__subtitle">Siam University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2017-2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">High school</h3>
                <span className="qualification__subtitle">
                  Rajaprajanugroh School 50 Khon Kaen
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2014 - 2016
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Middle school</h3>
                <span className="qualification__subtitle">
                  Bannernthawon School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2013 - 2015
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          {/*=============== Content 2 ===============*/}
          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content '
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Engineer (Intern)</h3>
                <span className="qualification__subtitle">INEX</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  05/2019 - 08/2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">Engineer</h3>
                <span className="qualification__subtitle">INEX</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2020 - 2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Recruit Training Center
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
