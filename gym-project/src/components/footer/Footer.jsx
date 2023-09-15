import React from 'react';
import './Footer.css';

const plans = [
    {
        id: 1,
        title: 'DISCOVER',
        list: [
            'Clubs and Studios', 'My Account', 'Membership Packages', 'Price list',
        ],
        href: '/'
    },
    {
        id: 2,
        title: 'ABOUT',
        list: [
            'Career', 'Institutional', 'Terms & Policies', 'Support',
        ],
        href: 'about'
    },
    {
        id: 3,
        title: 'CLUBS AND CALCULATION TOOLS',
        list: [
            'Body mass index', 'Classes', 'Campaigns',

        ],
        href: '/'
    },


]

function Footer() {

    return (
        <div className="footer">
            <div className="space h-10 "></div>
            <div className="hr-1-div border-2 border-lime-300 grid grid-cols-4">
                <hr className="hr-1-1 w-full border-4 border-solid border-red-800" />
                <hr className="hr-1-2 w-full border-4 border-solid border-red-700" />
                <hr className="hr-1-3 w-full border-4 border-solid border-red-600" />
                <hr className="hr-1-4 w-full border-4 border-solid border-red-500" />
            </div>
            <div className="inner-footer">
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 lg:grid-flow-col lg:grid-rows-2 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto row-span-1 col-span-2  min-w-[600px] flex max-w-2xl flex-col gap-y-4">
                            <div className="flex items-center justify-center ">
                                <dl className="grid grid-cols-1 gap-x-8 text-center lg:grid-cols-3">
                                    {plans.map((plan) => (
                                        <article key={plan.id} className="item-card flex flex-col max-w-xl ">
                                            <div >
                                                <div className="group relative">
                                                    <h3 className="mt-3 text-lg font-semibold leading-6">
                                                        <a href={plan.href}>
                                                            <span >{plan.title}</span>
                                                        </a>
                                                    </h3>
                                                    <div className="mt-5 mb-5 text-sm leading-6 ">
                                                        <ul
                                                            role="list"
                                                            className="mt-8 text-sm leading-6 "
                                                        >
                                                            {plan.list.map((feature) => (
                                                                <li key={feature} className="flex " href>
                                                                    <a href={plan.href}>
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
                        <div className="mx-auto col-span-2 flex max-w-xs flex-col gap-y-4">

                            <div className="main social flex flex-col gap-2">
                                <div className="up flex flex-row gap-2">
                                    <a href="https://www.instagram.com/">
                                        <button className="card1 w-[90px] h-[90px] outline-none border-solid border-2 border-red-600 hover:text-white">
                                            <div className="instagram">
                                                <i className="fa-brands fa-instagram"></i>
                                            </div>
                                        </button>
                                    </a>
                                    <a href="https://twitter.com/">
                                        <button className="card2 w-[90px] h-[90px] outline-none  border-solid border-2 border-red-600 hover:text-white">
                                            <div className="twitter">
                                                <i className="fa-brands fa-twitter"></i>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                                <div className="down flex flex-row gap-2">
                                    <a href="https://www.youtube.com/">
                                        <button className="card3 w-[90px] h-[90px] outline-none  border-solid border-2 border-red-600 hover:text-white">
                                            <div className="youtube">
                                                <i className="fa-brands fa-youtube"></i>
                                            </div>
                                        </button>
                                    </a>
                                    <a href="https://www.facebook.com/">
                                        <button className="card4 w-[90px] h-[90px] outline-none  border-solid border-2 border-red-600 hover:text-white">
                                            <div className="facebook" >
                                                <i className="fa-brands fa-facebook"></i>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </div>


                        </div>
                        <div className="mx-auto row-span-3 flex max-w-xs flex-col gap-y-4 items-end justify-end">
                            <img className='h-[500px] w-auto' src="https://media.discordapp.net/attachments/988883199209926710/1146903423195815946/pngaaa.com-314618.png?width=423&height=671" alt="" />
                        </div>
                    </dl>
                </div>
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
