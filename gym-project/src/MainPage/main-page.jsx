import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import './main-page.css';

const slides = [
    {
        id: 1,
        header: 'Do you have a gym membership?',
        description: '',
        button: 'Create Gym Membership',
        url: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        imgAlt: '',
        href: './login',
    },
    {
        id: 2,
        header: 'Have you seen your special sports calendar?',
        description: '',
        button: 'See Sports Calendar',
        url: 'https://images.unsplash.com/photo-1681407978539-b57f1c41c75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
        imgAlt: '',
        href: './login',
    },

    {
        id: 3,
        header: 'Have you registered for the pilates class?',
        description: '',
        button: 'Register',
        url: 'https://media.discordapp.net/attachments/988883199209926710/1146903037361791117/dylan-gillis-YJdCZba0TYE-unsplash.jpg?width=720&height=480',
        imgAlt: '',
        href: './login',
    },
];

const plans = [
    {
        id: 1,
        title: 'CLASSIC',
        href: '/',
        description: [
            'Stopping by Membership Period',
            'Early Booking for Group Lessons - 4 Days',
            'Measurement and Program with 2 People',
            'Unlimited Use of Membership Club ',
        ],
        button: 'Join Plan',
    },
    {
        id: 2,
        title: 'GOLD',
        href: '/',
        description: [
            'Pausing by Membership Period',
            'Early Booking for Group Lessons - 4 Days',
            'Personalized Measurement and Program, Unlimited Use of All Clubs',
            'Ability to Bring Guests Twice a Month',
            'Free Private Lessons',
        ],

        button: 'Join Plan',
    },
    {
        id: 3,
        title: 'SILVER',
        href: '/',
        description: [
            '30 Days Extra Free Stopping',
            'Early Booking for Group Lessons - 4 Days ',
            'Private Measurement and Program ',
            'Unlimited Use of All Clubs ',
            '2 Guests per Month ',
            '25% Discount on Private Lessons ',
        ],
        button: 'Join Plan',

    },
];

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
        <div className="mainpage bg-black">
            <div className="slider">
                <div className='w-full h-[900px] m-auto relative group'>
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='slider-control w-full h-full bg-center bg-cover '
                    >
                        <div className="slider-text absolute flex items-center justify-center h-full w-full">
                            <div className="text flex items-center justify-center h-full w-full">
                                <div className="flex flex-col items-center justify-center m-10 h-full w-full">
                                    <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg  text-white sm:text-6xl">
                                        {slides[currentIndex].header}
                                    </h1>
                                    <p className="mt-4 text-xl text-white drop-shadow-lg ">
                                        {slides[currentIndex].description}
                                    </p>
                                    <a
                                        href="login"
                                        className="font-semibold text-lg leading-6 text-white"
                                    >
                                        {slides[currentIndex].button} <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left Arrow */}
                    <div className=' group-hover:block absolute top-[50%] -translate-x-0  left-5 text-2xl p-2 text-white cursor-pointer'>

                        <i className="fa-solid fa-chevron-left" onClick={prevSlide} size={30} ></i>
                    </div>
                    {/* Right Arrow */}
                    <div className=' group-hover:block absolute top-[50%] -translate-x-0  right-5 text-2xl  p-2 text-white cursor-pointer'>

                        <i className="fa-solid fa-chevron-right " onClick={nextSlide} size={30}></i>
                    </div>
                </div>
            </div>
            <div className="index">

            </div>

            <div className="cards w-full flex items-center justify-center">
                <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center">
                        <div className="mx-auto  lg:mx-0 flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                                Choose the membership package that suits you best
                            </h2>
                            <p className="mt-2 text-lg leading-8 text-gray-300">
                                A one-time participation fee for new memberships is calculated at the payment step.
                            </p>
                        </div>
                        <div className="mx-auto mt-10 mb-10 pt-10 pb-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
                            {plans.map((plan) => (
                                <article key={plan.id} className="item-card flex items-center justify-center w-[300px] h-[400px] transition duration-500  ease-out rounded-3xl bg-gradient-to-r from-red-900 to-red-500 max-w-xl flex-col hover:scale-110 ">
                                    <div className="w-4/5 h-4/5">
                                        <div className="group relative">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-100">
                                                <a href={plan.href}>
                                                    <button data-text="Awesome" class="button">
                                                        <span class="actual-text">&nbsp;{plan.title}&nbsp;</span>
                                                    </button>
                                                </a>
                                            </h3>
                                            <p className="mt-5 mb-5 text-sm leading-6 text-white">
                                                <ul
                                                    role="list"
                                                    className="mt-8 text-sm leading-6 text-white"
                                                >
                                                    {plan.description.map((feature) => (
                                                        <li key={feature} className="flex ">
                                                            <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                    <a href="/"
                                        className=" w-4/5 rounded-3xl bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 hover:text-black
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-gray-600"
                                    >
                                        {plan.button}<span aria-hidden="true" className=' ml-32'>&rarr;</span>
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;