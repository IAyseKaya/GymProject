import { useState } from 'react';


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
        <div className="mainpage">
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

            <div className="index">

            </div>

        </div>
    );
}

export default MainPage;