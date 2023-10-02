import { CheckIcon } from '@heroicons/react/20/solid';
import './main-page.css';
import memberships from '../data/memberships.js';


function MembershipType() {
    return (
        <div className="membership">
            <div className="nav-block h-[80px]"></div>
            <div id='membership' className="cards mt-28 w-full flex items-center justify-center">
            <div className=" mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center">
                <div className="mx-auto  lg:mx-0 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                        Choose the membership package that suits you best
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-500">
                        A one-time participation fee for new memberships is calculated at the payment step.
                    </p>
                </div>
                <div className="mx-auto mt-10 mb-10 pt-10 pb-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
                    {memberships.map((membership) => (
                        <article key={membership.id} className="item-card flex items-center justify-center w-[300px] h-[400px] transition duration-500  ease-out rounded-3xl bg-gradient-to-r from-red-900 to-red-500 max-w-xl flex-col hover:scale-110 ">
                            <div className="w-4/5 h-4/5">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6">
                                        <a href={membership.href}>
                                            <button data-text="Awesome" className="button">
                                                <span className="actual-text">&nbsp;{membership.title}&nbsp;</span>
                                            </button>
                                        </a>
                                    </h3>
                                    <div className="mt-5 mb-5 text-sm leading-6 text-white">
                                        <ul
                                            role="list"
                                            className="mt-8 text-sm leading-6 text-white"
                                        >
                                            {membership.description.map((feature) => (
                                                <li key={feature} className="flex ">
                                                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <a href={membership.href}
                                className=" w-4/5 rounded-3xl bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 hover:text-black
                            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-gray-600"
                            >
                                {membership.button}<span aria-hidden="true" className=' ml-32'>&rarr;</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>

        </div>
        </div>
        

    );
}
export default MembershipType;