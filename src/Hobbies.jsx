import React from 'react';

const Hobbies = (props) => {
    return ( 
        <>
        <section className="hobbies-section p-3 p-lg-5">
        <h2 className="title-style text-center">Hobbies</h2>
			<div className="container">
				<div className="list-group">
					<div className="item col-6 col-lg-5">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item border-0 font-weight-bold">Sports:</li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="basketball-ball" 
                                    className="svg-inline--fa fa-basketball-ball fa-w-20 size-svg" 
                                    role="img" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 496 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2
                                            53.8l77.4 77.4c27.8-35.8 43.3-81.2 
                                            44.8-131.2zM248 222L405.9 
                                            64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 
                                            122.3-58.7 167.7L248 222zM56.1 
                                            98.1c-29.7 36-47.5 78.4-53.8 122.2 
                                            50-1.5 95.5-17 131.2-44.8L56.1 
                                            98.1zm272.2 204.2c45.3-37.1 103.7-57.4 
                                            167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 
                                            46.3zM248 290L90.1 447.9c42.4 34.9 
                                            93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 
                                            58.7-167.7L248 290zm191.9 123.9c29.7-36 
                                            47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 
                                            44.8l77.4 77.4zM167.7 209.7C122.3 
                                            246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 
                                            103.1 56.1 145.5L214 256l-46.3-46.3zm116 
                                            292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 
                                            35.7-43.2 81.2-44.8 131.2z"
                                        ></path>
                                </svg>
                            </li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="dumbbell" 
                                    className="svg-inline--fa fa-dumbbell fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 640 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M104 96H56c-13.3 0-24 10.7-24 
                                            24v104H8c-4.4 0-8 3.6-8 8v48c0 
                                            4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 
                                            24h48c13.3 0 24-10.7 
                                            24-24V120c0-13.3-10.7-24-24-24zm528 
                                            128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 
                                            10.7-24 24v272c0 13.3 10.7 24 24 
                                            24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 
                                            8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 
                                            32h-48c-13.3 0-24 10.7-24 
                                            24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 
                                            0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 
                                            24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 
                                            24-10.7 24-24V56c0-13.3-10.7-24-24-24z"
                                        ></path>
                                </svg>
                            </li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="futbol" 
                                    className="svg-inline--fa fa-futbol fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 512 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M504 256c0 136.967-111.033 248-248 
                                            248S8 392.967 8 256 119.033 8 256 8s248 
                                            111.033 248 248zm-48 0l-.003-.282-26.064 
                                            22.741-62.679-58.5 16.454-84.355 34.303 
                                            3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 
                                            31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 
                                            13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 
                                            84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 
                                            83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 
                                            77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 
                                            0l-29.902-17.786 36.301-77.826 85.138-10.447 
                                            7.704 33.897C442.503 339.952 456 299.015 456 
                                            256zm-248.102 69.571l-29.894-91.312L256 
                                            177.732l77.996 56.527-29.622 91.312h-96.476z"
                                        ></path>
                                </svg>
                            </li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="football-ball" 
                                    className="svg-inline--fa fa-football-ball fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 496 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M481.5 60.3c-4.8-18.2-19.1-32.5-37.3-37.4C420.3 
                                            16.5 383 8.9 339.4 8L496 164.8c-.8-43.5-8.2-80.6-14.5-104.5zm-467 
                                            391.4c4.8 18.2 19.1 32.5 37.3 37.4 23.9 6.4 61.2 14 
                                            104.8 14.9L0 347.2c.8 43.5 8.2 80.6 14.5 104.5zM4.2 
                                            283.4L220.4 500c132.5-19.4 248.8-118.7 271.5-271.4L275.6 
                                            12C143.1 31.4 26.8 130.7 4.2 283.4zm317.3-123.6c3.1-3.1 8.2-3.1 11.3 
                                            0l11.3 11.3c3.1 3.1 3.1 8.2 0 11.3l-28.3 28.3 28.3 28.3c3.1 3.1 3.1 8.2 0 
                                            11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-28.3-28.3-22.6 22.7 28.3 28.3c3.1 
                                            3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L248 278.6l-22.6 22.6 
                                            28.3 28.3c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 
                                            0l-28.3-28.3-28.3 28.3c-3.1 3.1-8.2 3.1-11.3 0l-11.3-11.3c-3.1-3.1-3.1-8.2 
                                            0-11.3l28.3-28.3-28.3-28.2c-3.1-3.1-3.1-8.2 0-11.3l11.3-11.3c3.1-3.1 8.2-3.1 
                                            11.3 0l28.3 28.3 22.6-22.6-28.3-28.3c-3.1-3.1-3.1-8.2 0-11.3l11.3-11.3c3.1-3.1 
                                            8.2-3.1 11.3 0l28.3 28.3 22.6-22.6-28.3-28.3c-3.1-3.1-3.1-8.2 
                                            0-11.3l11.3-11.3c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3 28.3-28.5z"
                                        ></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className="item col-6 col-lg-5">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item border-0 font-weight-bold">Culture:</li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="hamburger" 
                                    className="svg-inline--fa fa-hamburger fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 512 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 
                                            128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 
                                            64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 
                                            0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 
                                            32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 
                                            224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 
                                            16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 
                                            32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"
                                        ></path>
                                </svg>
                            </li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="utensils" 
                                    className="svg-inline--fa fa-utensils fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 416 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 
                                            52.3-27.8 89.6-68.9 104.6L168 486.7c.7 
                                            13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 
                                            233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 
                                            15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 
                                            7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 
                                            141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 
                                            285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 
                                            24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"
                                        ></path>
                                </svg>
                            </li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="yin-yang" 
                                    className="svg-inline--fa fa-yin-yang fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 496 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 
                                            248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 
                                            0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 
                                            32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 
                                            96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 
                                            42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 
                                            32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
                                        ></path>
                                </svg>
                            </li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="torii-gate" 
                                    className="svg-inline--fa fa-torii-gate fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 512 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M376.45 32h-240.9A303.17 303.17 0 0 1 0 0v96c0 17.67 
                                            14.33 32 32 32h32v64H16c-8.84 0-16 7.16-16 16v32c0 8.84 
                                            7.16 16 16 16h48v240c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 
                                            16-16V256h256v240c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 
                                            16-16V256h48c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-48v-64h32c17.67 0 
                                            32-14.33 32-32V0a303.17 303.17 0 0 1-135.55 32zM128 128h96v64h-96v-64zm256 
                                            64h-96v-64h96v64z"
                                        ></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className="item col-6 col-lg-5">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item border-0 font-weight-bold">New Tech:</li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="laptop-code" 
                                    className="svg-inline--fa fa-laptop-code fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 640 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 
                                            0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 
                                            192l35.71-35.72c6.25-6.25 6.25-16.38 
                                            0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 
                                            0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 
                                            58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 
                                            22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 
                                            0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 
                                            0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 
                                            192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 
                                            416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 
                                            0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 
                                            35.2 28.8 64 64 64h512c35.2 0 64-28.8 
                                            64-64v-16c0-8.8-7.2-16-16-16zM576 
                                            48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 
                                            48v336h512V48zm-64 272H128V64h384v256z"
                                        ></path>
                                </svg>
                            </li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="project-diagram" 
                                    className="svg-inline--fa fa-project-diagram fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 640 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 
                                            17.67 14.33 32 32 32h128c17.67 0 32-14.33 
                                            32-32V352c0-17.67-14.33-32-32-32zM192 
                                            32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 
                                            32v128c0 17.67 14.33 32 32 32h95.72l73.16 
                                            128.04C211.98 300.98 232.4 288 256 288h.28L192 
                                            175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 
                                            14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 
                                            32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
                                        ></path>
                                </svg>
                            </li>
                            <li className="list-group-item border-0">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="sitemap" 
                                    className="svg-inline--fa fa-sitemap fa-w-20 size-svg" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 640 512">
                                        <path 
                                            fill="currentColor" 
                                            d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 
                                            17.67 14.33 32 32 32h96c17.67 0 
                                            32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 
                                            0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67
                                             14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 
                                             80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 
                                             32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 
                                             32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"
                                        ></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div className="bord-bottom"></div>
        </>
     );
}
 
export default Hobbies;