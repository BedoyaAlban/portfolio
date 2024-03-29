import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TimeLine = (props) => {
    return (
        <>
        <section className="experiences-section p-3 p-lg-5">
            <h2 className="title-style text-center">Expérience Professionnelle</h2>
            <div className="container" id="timeline">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2018 - 2019"
                        iconStyle={{ background: 'rgb(132, 0, 255)', color: '#fff' }}
                        icon={
                            <svg 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="graduation-cap" 
                                className="svg-inline--fa fa-graduation-cap fa-w-20" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 512">
                                    <path 
                                        fill="currentColor" 
                                        d="M622.34 153.2L343.4 
                                        67.5c-15.2-4.67-31.6-4.67-46.79 
                                        0L17.66 153.2c-23.54 7.23-23.54 
                                        38.36 0 45.59l48.63 14.94c-10.67 
                                        13.19-17.23 29.28-17.88 46.9C38.78 
                                        266.15 32 276.11 32 288c0 10.78 
                                        5.68 19.85 13.86 25.65L20.33 
                                        428.53C18.11 438.52 25.71 448 
                                        35.94 448h56.11c10.24 0 17.84-9.48 
                                        15.62-19.47L82.14 313.65C90.32 
                                        307.85 96 298.78 96 
                                        288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 
                                        8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 
                                        26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 
                                        23.55-38.36 0-45.6zM352.79 315.09c-28.53 
                                        8.76-52.84 3.92-65.59 0l-145.02-44.55L128 
                                        384c0 35.35 85.96 64 192 64s192-28.65 
                                        192-64l-14.18-113.47-145.03 44.56z"></path>
                            </svg>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Developpeur Web Junior</h3>
                        <h4 className="vertical-timeline-element-subtitle">OpenClassrooms, Paris</h4>
                        <p>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2012 - 2017"
                        iconStyle={{ background: 'rgb(255, 132, 0)', color: '#fff' }}
                        icon={
                            <svg 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="briefcase" 
                                className="svg-inline--fa fa-briefcase fa-w-20" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512"
                                ><path 
                                    fill="currentColor" 
                                    d="M320 336c0 8.84-7.16 16-16 
                                    16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 
                                    25.6 22.4 48 48 48h416c25.6 0 48-22.4 
                                    48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6
                                    0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48
                                    48v80h512v-80c0-25.6-22.4-48-48-48zm-144
                                    0H192V96h128v32z"></path>
                            </svg>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Responsable de centre</h3>
                        <h4 className="vertical-timeline-element-subtitle">UrbanSoccer, Beynost 01700</h4>
                        <p>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2012"
                        iconStyle={{ background: 'rgb(255, 132, 0)', color: '#fff' }}
                        icon={
                            <svg 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="briefcase" 
                                className="svg-inline--fa fa-briefcase fa-w-20" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512"
                                ><path 
                                    fill="currentColor" 
                                    d="M320 336c0 8.84-7.16 16-16 
                                    16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 
                                    25.6 22.4 48 48 48h416c25.6 0 48-22.4 
                                    48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6
                                    0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48
                                    48v80h512v-80c0-25.6-22.4-48-48-48zm-144
                                    0H192V96h128v32z"></path>
                            </svg>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Responsable planning</h3>
                        <h4 className="vertical-timeline-element-subtitle">FootIndoor Barolles 69, Brignais 69530</h4>
                        <p>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(255, 132, 0)', color: '#fff' }}
                        icon={
                            <svg 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="briefcase" 
                                className="svg-inline--fa fa-briefcase fa-w-20" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512"
                                ><path 
                                    fill="currentColor" 
                                    d="M320 336c0 8.84-7.16 16-16 
                                    16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 
                                    25.6 22.4 48 48 48h416c25.6 0 48-22.4 
                                    48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6
                                    0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48
                                    48v80h512v-80c0-25.6-22.4-48-48-48zm-144
                                    0H192V96h128v32z"></path>
                            </svg>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Employé Polyvalent</h3>
                        <h4 className="vertical-timeline-element-subtitle">FootIndoor Barolles 69, Brignais 69530</h4>
                        <p>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2006 2007"
                        iconStyle={{ background: 'rgb(132, 0, 255)', color: '#fff' }}
                        icon={
                            <svg 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="graduation-cap" 
                                className="svg-inline--fa fa-graduation-cap fa-w-20" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 512">
                                    <path 
                                        fill="currentColor" 
                                        d="M622.34 153.2L343.4 
                                        67.5c-15.2-4.67-31.6-4.67-46.79 
                                        0L17.66 153.2c-23.54 7.23-23.54 
                                        38.36 0 45.59l48.63 14.94c-10.67 
                                        13.19-17.23 29.28-17.88 46.9C38.78 
                                        266.15 32 276.11 32 288c0 10.78 
                                        5.68 19.85 13.86 25.65L20.33 
                                        428.53C18.11 438.52 25.71 448 
                                        35.94 448h56.11c10.24 0 17.84-9.48 
                                        15.62-19.47L82.14 313.65C90.32 
                                        307.85 96 298.78 96 
                                        288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 
                                        8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 
                                        26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 
                                        23.55-38.36 0-45.6zM352.79 315.09c-28.53 
                                        8.76-52.84 3.92-65.59 0l-145.02-44.55L128 
                                        384c0 35.35 85.96 64 192 64s192-28.65 
                                        192-64l-14.18-113.47-145.03 44.56z"></path>
                            </svg>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">1 ère année Licence STAPS</h3>
                        <h4 className="vertical-timeline-element-subtitle">Université Lyon 1</h4>
                        <p>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={{ background: 'rgb(132, 0, 255)', color: '#fff' }}
                        icon={
                            <svg 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="graduation-cap" 
                                className="svg-inline--fa fa-graduation-cap fa-w-20" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 512">
                                    <path 
                                        fill="currentColor" 
                                        d="M622.34 153.2L343.4 
                                        67.5c-15.2-4.67-31.6-4.67-46.79 
                                        0L17.66 153.2c-23.54 7.23-23.54 
                                        38.36 0 45.59l48.63 14.94c-10.67 
                                        13.19-17.23 29.28-17.88 46.9C38.78 
                                        266.15 32 276.11 32 288c0 10.78 
                                        5.68 19.85 13.86 25.65L20.33 
                                        428.53C18.11 438.52 25.71 448 
                                        35.94 448h56.11c10.24 0 17.84-9.48 
                                        15.62-19.47L82.14 313.65C90.32 
                                        307.85 96 298.78 96 
                                        288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 
                                        8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 
                                        26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 
                                        23.55-38.36 0-45.6zM352.79 315.09c-28.53 
                                        8.76-52.84 3.92-65.59 0l-145.02-44.55L128 
                                        384c0 35.35 85.96 64 192 64s192-28.65 
                                        192-64l-14.18-113.47-145.03 44.56z"></path>
                            </svg>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Baccalauréat Electrotechnique</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lycée Parc Chabrières, Oullins</h4>
                        <p>
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
        <div className="bord-bottom"></div>
        </>
     );
}
 
export default TimeLine;