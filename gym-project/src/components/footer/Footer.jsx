import React from 'react';
import './Footer.css';
import maps from '../../data/maps';

function Footer() {

    return (
        <div className="footer">
            <div className="space h-10"></div>
            <div className="hr-1-div border-2 border-lime-300 grid grid-cols-4">
                <hr className="hr-1-1 w-full border-4 border-solid border-red-800" />
                <hr className="hr-1-2 w-full border-4 border-solid border-red-700" />
                <hr className="hr-1-3 w-full border-4 border-solid border-red-600" />
                <hr className="hr-1-4 w-full border-4 border-solid border-red-500" />
            </div>
            <div className="inner-footer pt-20">
                <dl className="grid grid-cols-1 lg:grid-flow-col lg:grid-rows-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-start">
                        
                        <div className="main social flex flex-col gap-2 ">
                            <div className="up flex flex-row gap-2">
                                <a href="https://www.instagram.com/">
                                    <button className="card1 w-[70px] h-[70px] outline-none border-solid border-2 border-red-600 hover:text-white">
                                        <div className="instagram">
                                            <i className="fa-brands fa-instagram"></i>
                                        </div>
                                    </button>
                                </a>
                                <a href="https://twitter.com/">
                                    <button className="card2 w-[70px] h-[70px] outline-none  border-solid border-2 border-red-600 hover:text-white">
                                        <div className="twitter">
                                            <i className="fa-brands fa-twitter"></i>
                                        </div>
                                    </button>
                                </a>
                            </div>
                            <div className="down flex flex-row gap-2">
                                <a href="https://www.youtube.com/">
                                    <button className="card3 w-[70px] h-[70px] outline-none  border-solid border-2 border-red-600 hover:text-white">
                                        <div className="youtube">
                                            <i className="fa-brands fa-youtube"></i>
                                        </div>
                                    </button>
                                </a>
                                <a href="https://www.facebook.com/">
                                    <button className="card4 w-[70px] h-[70px] outline-none  border-solid border-2 border-red-600 hover:text-white">
                                        <div className="facebook" >
                                            <i className="fa-brands fa-facebook"></i>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="logo flex flex-col items-center">
                        <img
                            className="h-12 w-auto mt-12"
                            src="https://media.discordapp.net/attachments/988883199209926710/1146903215053484042/pngaaa.com-2946803.png"
                            alt=""
                        />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold ">Gym Name</div>
                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-300">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-500">Sport Center</div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto  min-w-[600px] flex max-w-2xl flex-col gap-y-4">
                        <div className="flex items-center justify-center ">
                            <dl className="grid grid-cols-1 gap-y-10 lg:grid-cols-3">
                                {maps.map((map) => (
                                    <article key={map.id} className="item-card flex flex-col max-w-xl ">
                                        <div >
                                            <div className="group relative">
                                                <h3 className="mt-3 text-xl font-semibold leading-6">
                                                    <a href={map.href}>
                                                        <span >{map.title}</span>
                                                    </a>
                                                </h3>
                                                <div className="mt-5 mb-5 text-base leading-6 ">
                                                    <ul
                                                        role="list"
                                                        className="mt-8 text-base leading-6 "
                                                    >
                                                        {map.list.map((feature) => (
                                                            <li key={feature} className="flex" href>
                                                                <a href={map.href}>
                                                                    {feature}
                                                                </a>


                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </article>
                                ))}

                            </dl>

                        </div>

                    </div>

                    <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-end justify-end">
                        <img className='h-[400px] w-auto' src="https://media.discordapp.net/attachments/988883199209926710/1146903423195815946/pngaaa.com-314618.png?width=423&height=671" alt="" />
                    </div>
                </dl>
            </div>
            <div className="hr-1-div border-2 border-lime-300 grid grid-cols-4">
                <hr className="hr-1-1 w-full border-4 border-solid border-red-800" />
                <hr className="hr-1-2 w-full border-4 border-solid border-red-700" />
                <hr className="hr-1-3 w-full border-4 border-solid border-red-600" />
                <hr className="hr-1-4 w-full border-4 border-solid border-red-500" />
            </div>
            <div className="space h-10 "></div>

        </div>
    );
}
export default Footer;
