import React from "react";
import "../css/Campaigns.css";
import shoes from "../img/shoes.png";
import yoga from "../img/yoga.png";

function Campaigns() {
    return (
        <section id="campaigns">
            <h2>Ongoing campaigns</h2>
            <div className="box">
                <div className="col">
                    <img src={shoes} alt="shoes" />
                    <svg
                        className="bell"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d)">
                            <circle cx="14.5" cy="12.5" r="12.5" fill="#F60051" />
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.7566 11.5153C16.3584 8.50672 15.6317 7.36422 13.3471 7.41143C12.5335 7.42823 12.7289 6.82222 12.1086 7.05214C11.4887 7.28218 12.0206 7.61867 11.3864 8.13897C9.60675 9.59968 9.77083 10.9511 10.5961 14.172C10.9441 15.5285 9.75783 15.5951 10.2272 16.9102C10.5697 17.869 13.0958 18.2705 15.761 17.2815C18.4261 16.2928 20.1084 14.33 19.7659 13.3711C19.2964 12.056 18.3458 12.7821 17.7566 11.5153V11.5153ZM15.4717 16.4714C13.0915 17.3545 11.1353 16.8349 11.0526 16.6042C10.9101 16.2059 11.821 14.8775 14.5422 13.8677C17.2636 12.858 18.7821 13.2323 18.9409 13.6772C19.0348 13.9399 17.8521 15.5882 15.4717 16.4714V16.4714ZM14.7067 14.3286C13.4623 14.7904 12.5975 15.3186 12.0379 15.7941C12.4317 16.1519 13.1698 16.2392 13.9055 15.9663C14.842 15.6189 15.417 14.8213 15.1895 14.185C15.1869 14.1773 15.1828 14.1704 15.18 14.1628C15.0264 14.2136 14.8689 14.2685 14.7067 14.3286V14.3286Z"
                            fill="white"
                        />
                        <defs>
                            <filter
                                id="filter0_d"
                                x="0"
                                y="0"
                                width="29"
                                height="29"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.308282 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>

                    <div className="description">
                        <div className="center">
                            <div className="status">
                                <p className="status-name">Active</p>
                                <p className="status-day">Closes in 3 days</p>
                            </div>
                            <p className="influencer-number">9 INFLUENCERS</p>
                            <p className="campaign-name">NIKE Sneaker Campaign Summer II</p>
                        </div>
                    </div>
                    <div className="numbers">
                        <div className="center">
                            <div className="row">
                                <div className="column">
                                    <p className="number">12 567</p>
                                    <p className="text">
                                        <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1.01529 0H6.89479C7.45316 0 7.91 0.413392 7.91 1.01521V6.89487C7.91 7.49669 7.45316 7.91008 6.89479 7.91008H1.01529C0.456762 7.91008 0 7.49669 0 6.89487V1.01521C0 0.413392 0.456762 0 1.01529 0V0V0ZM5.76215 0.878844C5.56625 0.878844 5.40618 1.039 5.40618 1.23498V2.08735C5.40618 2.28324 5.56625 2.44348 5.76215 2.44348H6.65618C6.85207 2.44348 7.01231 2.28324 7.01231 2.08735V1.23498C7.01231 1.039 6.85207 0.878844 6.65618 0.878844H5.76215V0.878844V0.878844ZM7.01605 3.34515H6.31986C6.38573 3.56021 6.42138 3.78802 6.42138 4.02371C6.42138 5.33942 5.32041 6.40595 3.96255 6.40595C2.60478 6.40595 1.50397 5.33942 1.50397 4.02371C1.50397 3.78786 1.53954 3.56013 1.60549 3.34515H0.879006V6.68647C0.879006 6.85938 1.02049 7.00094 1.19348 7.00094H6.70174C6.87473 7.00094 7.01621 6.85946 7.01621 6.68647V3.34515H7.01605V3.34515ZM3.96247 2.39857C3.08517 2.39857 2.37388 3.08769 2.37388 3.93786C2.37388 4.78804 3.08517 5.47716 3.96247 5.47716C4.83985 5.47716 5.55123 4.78804 5.55123 3.93786C5.55123 3.08769 4.83993 2.39857 3.96247 2.39857V2.39857Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                        REACH
                                    </p>
                                </div>

                                <div className="column">
                                    <p className="number">1 789</p>
                                    <p className="text">
                                        <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1.01529 0H6.89479C7.45316 0 7.91 0.413392 7.91 1.01521V6.89487C7.91 7.49669 7.45316 7.91008 6.89479 7.91008H1.01529C0.456762 7.91008 0 7.49669 0 6.89487V1.01521C0 0.413392 0.456762 0 1.01529 0V0V0ZM5.76215 0.878844C5.56625 0.878844 5.40618 1.039 5.40618 1.23498V2.08735C5.40618 2.28324 5.56625 2.44348 5.76215 2.44348H6.65618C6.85207 2.44348 7.01231 2.28324 7.01231 2.08735V1.23498C7.01231 1.039 6.85207 0.878844 6.65618 0.878844H5.76215V0.878844V0.878844ZM7.01605 3.34515H6.31986C6.38573 3.56021 6.42138 3.78802 6.42138 4.02371C6.42138 5.33942 5.32041 6.40595 3.96255 6.40595C2.60478 6.40595 1.50397 5.33942 1.50397 4.02371C1.50397 3.78786 1.53954 3.56013 1.60549 3.34515H0.879006V6.68647C0.879006 6.85938 1.02049 7.00094 1.19348 7.00094H6.70174C6.87473 7.00094 7.01621 6.85946 7.01621 6.68647V3.34515H7.01605V3.34515ZM3.96247 2.39857C3.08517 2.39857 2.37388 3.08769 2.37388 3.93786C2.37388 4.78804 3.08517 5.47716 3.96247 5.47716C4.83985 5.47716 5.55123 4.78804 5.55123 3.93786C5.55123 3.08769 4.83993 2.39857 3.96247 2.39857V2.39857Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                        LIKES
                                    </p>
                                </div>
                                <div className="column">
                                    <p className="number">876</p>
                                    <p className="text">
                                        <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1.01529 0H6.89479C7.45316 0 7.91 0.413392 7.91 1.01521V6.89487C7.91 7.49669 7.45316 7.91008 6.89479 7.91008H1.01529C0.456762 7.91008 0 7.49669 0 6.89487V1.01521C0 0.413392 0.456762 0 1.01529 0V0V0ZM5.76215 0.878844C5.56625 0.878844 5.40618 1.039 5.40618 1.23498V2.08735C5.40618 2.28324 5.56625 2.44348 5.76215 2.44348H6.65618C6.85207 2.44348 7.01231 2.28324 7.01231 2.08735V1.23498C7.01231 1.039 6.85207 0.878844 6.65618 0.878844H5.76215V0.878844V0.878844ZM7.01605 3.34515H6.31986C6.38573 3.56021 6.42138 3.78802 6.42138 4.02371C6.42138 5.33942 5.32041 6.40595 3.96255 6.40595C2.60478 6.40595 1.50397 5.33942 1.50397 4.02371C1.50397 3.78786 1.53954 3.56013 1.60549 3.34515H0.879006V6.68647C0.879006 6.85938 1.02049 7.00094 1.19348 7.00094H6.70174C6.87473 7.00094 7.01621 6.85946 7.01621 6.68647V3.34515H7.01605V3.34515ZM3.96247 2.39857C3.08517 2.39857 2.37388 3.08769 2.37388 3.93786C2.37388 4.78804 3.08517 5.47716 3.96247 5.47716C4.83985 5.47716 5.55123 4.78804 5.55123 3.93786C5.55123 3.08769 4.83993 2.39857 3.96247 2.39857V2.39857Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                        COMMENTS
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <p className="number">10 782</p>
                                    <p className="text">
                                        <svg
                                            width="9"
                                            height="9"
                                            viewBox="0 0 9 9"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M4.48805 8.4459C4.47347 8.44702 4.45828 8.44764 4.44309 8.44764C3.90991 8.44764 3.56768 8.20574 3.23677 7.97176C3.00826 7.8103 2.79265 7.65789 2.53858 7.61557C2.4146 7.59505 2.2912 7.58462 2.17195 7.58462C1.95712 7.58462 1.78764 7.61778 1.66391 7.64197C1.58872 7.6567 1.52386 7.66934 1.47456 7.66934C1.42306 7.66934 1.36725 7.6582 1.343 7.57533C1.32192 7.50353 1.30667 7.434 1.292 7.36673C1.25421 7.1936 1.22737 7.08714 1.15482 7.076C0.309171 6.94538 0.0671388 6.76727 0.0131729 6.64089C0.00553075 6.62281 0.0011845 6.6047 0.000152262 6.58678C-0.00258225 6.53823 0.0318074 6.49536 0.0797792 6.48752C1.37974 6.27345 1.96268 4.94482 1.98688 4.88839C2.06853 4.72254 2.08411 4.58258 2.03543 4.46785C1.94622 4.2576 1.65528 4.16521 1.46266 4.10411C1.41554 4.0892 1.37087 4.0751 1.33563 4.06119C0.951311 3.90925 0.91933 3.75329 0.934433 3.67381C0.960184 3.53837 1.14119 3.44399 1.28757 3.44399C1.32771 3.44399 1.36305 3.4511 1.39276 3.46497C1.56565 3.54596 1.72145 3.58701 1.85589 3.58701C2.04166 3.58701 2.12273 3.50894 2.13266 3.49871C2.12793 3.41074 2.12208 3.31883 2.11611 3.22403C2.07739 2.60943 2.02942 1.84576 2.22386 1.40985C2.80662 0.103187 4.04242 0.00168417 4.40728 0.00168417C4.41663 0.00168417 4.56724 9.05468e-05 4.56724 9.05468e-05C4.95457 0 6.19307 0.101702 6.77615 1.40907C6.97065 1.84522 6.92253 2.60954 6.88374 3.22367L6.88213 3.25036C6.87675 3.33589 6.87157 3.41899 6.86723 3.49857C6.87652 3.50806 6.95109 3.57984 7.11951 3.58631C7.24767 3.5814 7.39475 3.5406 7.55616 3.46499C7.60348 3.44292 7.65602 3.43824 7.69178 3.43824C7.7464 3.43824 7.8018 3.44882 7.84777 3.46802C7.98113 3.51543 8.06666 3.60695 8.06849 3.70257C8.07019 3.79261 8.00145 3.92799 7.66424 4.06121C7.62929 4.07493 7.58461 4.08913 7.53731 4.10413C7.34452 4.1653 7.05366 4.25762 6.96451 4.46782C6.91578 4.58249 6.93139 4.72236 7.01092 4.88368C7.03724 4.94478 7.61967 6.27303 8.92019 6.48734C8.96822 6.49525 9.0025 6.53808 8.99986 6.58669C8.99877 6.6049 8.99433 6.62325 8.98656 6.64109C8.93292 6.76657 8.69107 6.94444 7.84515 7.07515C7.77604 7.08576 7.74926 7.17582 7.70802 7.36465C7.69303 7.43337 7.67784 7.50088 7.65694 7.57187C7.63892 7.63348 7.60053 7.66231 7.53595 7.66231C7.48061 7.66231 7.41688 7.65429 7.33613 7.63844C7.19292 7.61043 7.03235 7.58462 6.82805 7.58462C6.70875 7.58462 6.58532 7.59505 6.46125 7.61557C6.20746 7.65789 5.99198 7.81001 5.76391 7.97124C5.43235 8.20574 5.09017 8.44764 4.55683 8.44764C4.53363 8.44764 4.51085 8.44697 4.48805 8.4459Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                        OPENS
                                    </p>
                                </div>
                                <div className="column">
                                    <p className="number">789</p>
                                    <p className="text">
                                        <svg
                                            width="9"
                                            height="9"
                                            viewBox="0 0 9 9"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M4.48805 8.4459C4.47347 8.44702 4.45828 8.44764 4.44309 8.44764C3.90991 8.44764 3.56768 8.20574 3.23677 7.97176C3.00826 7.8103 2.79265 7.65789 2.53858 7.61557C2.4146 7.59505 2.2912 7.58462 2.17195 7.58462C1.95712 7.58462 1.78764 7.61778 1.66391 7.64197C1.58872 7.6567 1.52386 7.66934 1.47456 7.66934C1.42306 7.66934 1.36725 7.6582 1.343 7.57533C1.32192 7.50353 1.30667 7.434 1.292 7.36673C1.25421 7.1936 1.22737 7.08714 1.15482 7.076C0.309171 6.94538 0.0671388 6.76727 0.0131729 6.64089C0.00553075 6.62281 0.0011845 6.6047 0.000152262 6.58678C-0.00258225 6.53823 0.0318074 6.49536 0.0797792 6.48752C1.37974 6.27345 1.96268 4.94482 1.98688 4.88839C2.06853 4.72254 2.08411 4.58258 2.03543 4.46785C1.94622 4.2576 1.65528 4.16521 1.46266 4.10411C1.41554 4.0892 1.37087 4.0751 1.33563 4.06119C0.951311 3.90925 0.91933 3.75329 0.934433 3.67381C0.960184 3.53837 1.14119 3.44399 1.28757 3.44399C1.32771 3.44399 1.36305 3.4511 1.39276 3.46497C1.56565 3.54596 1.72145 3.58701 1.85589 3.58701C2.04166 3.58701 2.12273 3.50894 2.13266 3.49871C2.12793 3.41074 2.12208 3.31883 2.11611 3.22403C2.07739 2.60943 2.02942 1.84576 2.22386 1.40985C2.80662 0.103187 4.04242 0.00168417 4.40728 0.00168417C4.41663 0.00168417 4.56724 9.05468e-05 4.56724 9.05468e-05C4.95457 0 6.19307 0.101702 6.77615 1.40907C6.97065 1.84522 6.92253 2.60954 6.88374 3.22367L6.88213 3.25036C6.87675 3.33589 6.87157 3.41899 6.86723 3.49857C6.87652 3.50806 6.95109 3.57984 7.11951 3.58631C7.24767 3.5814 7.39475 3.5406 7.55616 3.46499C7.60348 3.44292 7.65602 3.43824 7.69178 3.43824C7.7464 3.43824 7.8018 3.44882 7.84777 3.46802C7.98113 3.51543 8.06666 3.60695 8.06849 3.70257C8.07019 3.79261 8.00145 3.92799 7.66424 4.06121C7.62929 4.07493 7.58461 4.08913 7.53731 4.10413C7.34452 4.1653 7.05366 4.25762 6.96451 4.46782C6.91578 4.58249 6.93139 4.72236 7.01092 4.88368C7.03724 4.94478 7.61967 6.27303 8.92019 6.48734C8.96822 6.49525 9.0025 6.53808 8.99986 6.58669C8.99877 6.6049 8.99433 6.62325 8.98656 6.64109C8.93292 6.76657 8.69107 6.94444 7.84515 7.07515C7.77604 7.08576 7.74926 7.17582 7.70802 7.36465C7.69303 7.43337 7.67784 7.50088 7.65694 7.57187C7.63892 7.63348 7.60053 7.66231 7.53595 7.66231C7.48061 7.66231 7.41688 7.65429 7.33613 7.63844C7.19292 7.61043 7.03235 7.58462 6.82805 7.58462C6.70875 7.58462 6.58532 7.59505 6.46125 7.61557C6.20746 7.65789 5.99198 7.81001 5.76391 7.97124C5.43235 8.20574 5.09017 8.44764 4.55683 8.44764C4.53363 8.44764 4.51085 8.44697 4.48805 8.4459Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                        SCREENS
                                    </p>
                                </div>
                                <div className="column">
                                    <p className="number">67%</p>
                                    <p className="text">
                                        <svg
                                            width="9"
                                            height="9"
                                            viewBox="0 0 9 9"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M4.48805 8.4459C4.47347 8.44702 4.45828 8.44764 4.44309 8.44764C3.90991 8.44764 3.56768 8.20574 3.23677 7.97176C3.00826 7.8103 2.79265 7.65789 2.53858 7.61557C2.4146 7.59505 2.2912 7.58462 2.17195 7.58462C1.95712 7.58462 1.78764 7.61778 1.66391 7.64197C1.58872 7.6567 1.52386 7.66934 1.47456 7.66934C1.42306 7.66934 1.36725 7.6582 1.343 7.57533C1.32192 7.50353 1.30667 7.434 1.292 7.36673C1.25421 7.1936 1.22737 7.08714 1.15482 7.076C0.309171 6.94538 0.0671388 6.76727 0.0131729 6.64089C0.00553075 6.62281 0.0011845 6.6047 0.000152262 6.58678C-0.00258225 6.53823 0.0318074 6.49536 0.0797792 6.48752C1.37974 6.27345 1.96268 4.94482 1.98688 4.88839C2.06853 4.72254 2.08411 4.58258 2.03543 4.46785C1.94622 4.2576 1.65528 4.16521 1.46266 4.10411C1.41554 4.0892 1.37087 4.0751 1.33563 4.06119C0.951311 3.90925 0.91933 3.75329 0.934433 3.67381C0.960184 3.53837 1.14119 3.44399 1.28757 3.44399C1.32771 3.44399 1.36305 3.4511 1.39276 3.46497C1.56565 3.54596 1.72145 3.58701 1.85589 3.58701C2.04166 3.58701 2.12273 3.50894 2.13266 3.49871C2.12793 3.41074 2.12208 3.31883 2.11611 3.22403C2.07739 2.60943 2.02942 1.84576 2.22386 1.40985C2.80662 0.103187 4.04242 0.00168417 4.40728 0.00168417C4.41663 0.00168417 4.56724 9.05468e-05 4.56724 9.05468e-05C4.95457 0 6.19307 0.101702 6.77615 1.40907C6.97065 1.84522 6.92253 2.60954 6.88374 3.22367L6.88213 3.25036C6.87675 3.33589 6.87157 3.41899 6.86723 3.49857C6.87652 3.50806 6.95109 3.57984 7.11951 3.58631C7.24767 3.5814 7.39475 3.5406 7.55616 3.46499C7.60348 3.44292 7.65602 3.43824 7.69178 3.43824C7.7464 3.43824 7.8018 3.44882 7.84777 3.46802C7.98113 3.51543 8.06666 3.60695 8.06849 3.70257C8.07019 3.79261 8.00145 3.92799 7.66424 4.06121C7.62929 4.07493 7.58461 4.08913 7.53731 4.10413C7.34452 4.1653 7.05366 4.25762 6.96451 4.46782C6.91578 4.58249 6.93139 4.72236 7.01092 4.88368C7.03724 4.94478 7.61967 6.27303 8.92019 6.48734C8.96822 6.49525 9.0025 6.53808 8.99986 6.58669C8.99877 6.6049 8.99433 6.62325 8.98656 6.64109C8.93292 6.76657 8.69107 6.94444 7.84515 7.07515C7.77604 7.08576 7.74926 7.17582 7.70802 7.36465C7.69303 7.43337 7.67784 7.50088 7.65694 7.57187C7.63892 7.63348 7.60053 7.66231 7.53595 7.66231C7.48061 7.66231 7.41688 7.65429 7.33613 7.63844C7.19292 7.61043 7.03235 7.58462 6.82805 7.58462C6.70875 7.58462 6.58532 7.59505 6.46125 7.61557C6.20746 7.65789 5.99198 7.81001 5.76391 7.97124C5.43235 8.20574 5.09017 8.44764 4.55683 8.44764C4.53363 8.44764 4.51085 8.44697 4.48805 8.4459Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                        COMPLETION
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="col">
                    <img src={yoga} alt="yoga" />
                    <div className="description">
                        <div className="center">
                            <div className="status">
                                <p className="status-name">Active</p>
                                <p className="status-day">Closes in 8 days</p>
                            </div>
                            <p className="influencer-number">11 INFLUENCERS</p>
                            <p className="campaign-name">#DOYOUYOGA Campaign</p>
                        </div>
                    </div>
                    <div className="numbers">
                        <div className="center">
                            <div className="row">
                                <div className="column">
                                    <p className="number">34 567</p>
                                    <p className="text">
                                        <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1.01529 0H6.89479C7.45316 0 7.91 0.413392 7.91 1.01521V6.89487C7.91 7.49669 7.45316 7.91008 6.89479 7.91008H1.01529C0.456762 7.91008 0 7.49669 0 6.89487V1.01521C0 0.413392 0.456762 0 1.01529 0V0V0ZM5.76215 0.878844C5.56625 0.878844 5.40618 1.039 5.40618 1.23498V2.08735C5.40618 2.28324 5.56625 2.44348 5.76215 2.44348H6.65618C6.85207 2.44348 7.01231 2.28324 7.01231 2.08735V1.23498C7.01231 1.039 6.85207 0.878844 6.65618 0.878844H5.76215V0.878844V0.878844ZM7.01605 3.34515H6.31986C6.38573 3.56021 6.42138 3.78802 6.42138 4.02371C6.42138 5.33942 5.32041 6.40595 3.96255 6.40595C2.60478 6.40595 1.50397 5.33942 1.50397 4.02371C1.50397 3.78786 1.53954 3.56013 1.60549 3.34515H0.879006V6.68647C0.879006 6.85938 1.02049 7.00094 1.19348 7.00094H6.70174C6.87473 7.00094 7.01621 6.85946 7.01621 6.68647V3.34515H7.01605V3.34515ZM3.96247 2.39857C3.08517 2.39857 2.37388 3.08769 2.37388 3.93786C2.37388 4.78804 3.08517 5.47716 3.96247 5.47716C4.83985 5.47716 5.55123 4.78804 5.55123 3.93786C5.55123 3.08769 4.83993 2.39857 3.96247 2.39857V2.39857Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                        REACH
                                    </p>
                                </div>

                                <div className="column">
                                    <p className="number">5 789</p>
                                    <p className="text">
                                        <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1.01529 0H6.89479C7.45316 0 7.91 0.413392 7.91 1.01521V6.89487C7.91 7.49669 7.45316 7.91008 6.89479 7.91008H1.01529C0.456762 7.91008 0 7.49669 0 6.89487V1.01521C0 0.413392 0.456762 0 1.01529 0V0V0ZM5.76215 0.878844C5.56625 0.878844 5.40618 1.039 5.40618 1.23498V2.08735C5.40618 2.28324 5.56625 2.44348 5.76215 2.44348H6.65618C6.85207 2.44348 7.01231 2.28324 7.01231 2.08735V1.23498C7.01231 1.039 6.85207 0.878844 6.65618 0.878844H5.76215V0.878844V0.878844ZM7.01605 3.34515H6.31986C6.38573 3.56021 6.42138 3.78802 6.42138 4.02371C6.42138 5.33942 5.32041 6.40595 3.96255 6.40595C2.60478 6.40595 1.50397 5.33942 1.50397 4.02371C1.50397 3.78786 1.53954 3.56013 1.60549 3.34515H0.879006V6.68647C0.879006 6.85938 1.02049 7.00094 1.19348 7.00094H6.70174C6.87473 7.00094 7.01621 6.85946 7.01621 6.68647V3.34515H7.01605V3.34515ZM3.96247 2.39857C3.08517 2.39857 2.37388 3.08769 2.37388 3.93786C2.37388 4.78804 3.08517 5.47716 3.96247 5.47716C4.83985 5.47716 5.55123 4.78804 5.55123 3.93786C5.55123 3.08769 4.83993 2.39857 3.96247 2.39857V2.39857Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                        LIKES
                                    </p>
                                </div>
                                <div className="column">
                                    <p className="number">234</p>
                                    <p className="text">
                                        <svg
                                            width="8"
                                            height="8"
                                            viewBox="0 0 8 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1.01529 0H6.89479C7.45316 0 7.91 0.413392 7.91 1.01521V6.89487C7.91 7.49669 7.45316 7.91008 6.89479 7.91008H1.01529C0.456762 7.91008 0 7.49669 0 6.89487V1.01521C0 0.413392 0.456762 0 1.01529 0V0V0ZM5.76215 0.878844C5.56625 0.878844 5.40618 1.039 5.40618 1.23498V2.08735C5.40618 2.28324 5.56625 2.44348 5.76215 2.44348H6.65618C6.85207 2.44348 7.01231 2.28324 7.01231 2.08735V1.23498C7.01231 1.039 6.85207 0.878844 6.65618 0.878844H5.76215V0.878844V0.878844ZM7.01605 3.34515H6.31986C6.38573 3.56021 6.42138 3.78802 6.42138 4.02371C6.42138 5.33942 5.32041 6.40595 3.96255 6.40595C2.60478 6.40595 1.50397 5.33942 1.50397 4.02371C1.50397 3.78786 1.53954 3.56013 1.60549 3.34515H0.879006V6.68647C0.879006 6.85938 1.02049 7.00094 1.19348 7.00094H6.70174C6.87473 7.00094 7.01621 6.85946 7.01621 6.68647V3.34515H7.01605V3.34515ZM3.96247 2.39857C3.08517 2.39857 2.37388 3.08769 2.37388 3.93786C2.37388 4.78804 3.08517 5.47716 3.96247 5.47716C4.83985 5.47716 5.55123 4.78804 5.55123 3.93786C5.55123 3.08769 4.83993 2.39857 3.96247 2.39857V2.39857Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                        COMMENTS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Campaigns;