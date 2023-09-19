import { useState } from 'react';
import './main-page.css';
import slides from '../data/slides.js';
import callouts from '../data/callouts.js';
import coaches from '../data/coaches.js'

import MembershipType from './membershipType';
import CalculateBMI from './calculateBMI';

function MainPage() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

    };

    return (
        <div className="mainpage ">
            <div className="slider">
                <div className='w-full h-[900px] m-auto relative group'>
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='slider-control w-full h-full bg-center bg-cover '
                    >
                        <div className="slider-text absolute flex items-center justify-center h-full w-full">
                            <div className="text flex items-center justify-center h-full w-full">
                                <div className="flex flex-col items-center justify-center m-10 h-full w-full">
                                    <h1 className="text-4xl text-white font-bold tracking-tight drop-shadow-lg   sm:text-6xl">
                                        {slides[currentIndex].header}
                                    </h1>
                                    <p className="mt-4 text-xl text-white drop-shadow-lg ">
                                        {slides[currentIndex].description}
                                    </p>
                                    <a
                                        href={slides[currentIndex].href}
                                        className="font-semibold text-white text-lg leading-6 "
                                    >
                                        {slides[currentIndex].button} <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left Arrow */}
                    <div className=' group-hover:block absolute top-[50%] -translate-x-0  left-5 text-2xl p-2  cursor-pointer'>

                        <i className="fa-solid fa-chevron-left text-white" onClick={prevSlide} size={30} ></i>
                    </div>
                    {/* Right Arrow */}
                    <div className=' group-hover:block absolute top-[50%] -translate-x-0  right-5 text-2xl  p-2  cursor-pointer'>

                        <i className="fa-solid fa-chevron-right text-white " onClick={nextSlide} size={30}></i>
                    </div>
                </div>
            </div>
            <CalculateBMI/>
           <MembershipType/>
            <div className="coaches">
                <div className=" p-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Meet our sports coaches</h2>
                            <p className="mt-6 text-lg leading-8 ">
                            “Sports Coach” plans what the individual should do to be more successful, helps the individual see his blind spots, helps him get out of the emotional or physical vortex he is in, and plays an active role in helping the individual meet his true potential. As a result of success or failure; Instead of seeing only the statistical expressions and the result table of the result, it also enables the athlete to see the factors that lead to this success or failure. It offers programmed, time-bound and versatile training for success in sports, as in all areas of life.

“Sports Coach” does not only coach the team; It instills a philosophy of life and culture in team players and fans.
                            </p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            {coaches.map((coach) => (
                                <li key={coach.name} >
                                    <div className="coaches-card">
                                        <div className="coaches-image">
                                            <img src={coach.imageUrl} alt={coach.imageAlt} />
                                        </div>
                                        <div className="coaches-card-info">
                                            <span>{coach.role}</span>
                                            <p>{coach.role}</p>
                                        </div>
                                        <a className="coaches-button" href="/lessons">Make An Appointment</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid-section mb-40 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {callouts.map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src={callout.imageSrc}
                                            alt={callout.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm ">
                                        <a href={callout.href}>
                                            <span className="absolute inset-0" />
                                            {callout.name}
                                        </a>
                                    </h3>
                                    <p className="text-base font-semibold ">{callout.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default MainPage;