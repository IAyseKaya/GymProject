
import coaches from '../data/coaches.js';
import lessons from "../data/lessons";
import { DayPicker, Row } from 'react-day-picker';
import React,{ Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { differenceInCalendarDays } from 'date-fns';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

function Appointment() {
    const[name,setName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[coach,setCoach] = useState("");
    const[lesson,setLesson] = useState("");
    const[hour,setHour] = useState("");
    const[city,setCity] = useState("");
    const[date,setDate] = useState("");
    

    const modalMessage = (event) => {
        event.preventDefault();
        console.log(name +" "+lastName+" "+email+" "+coach+" "+lesson+" "+hour+" "+city+" "+date);
        setOpen(open);
    }
    

    const [selected, setSelected] = React.useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    function isPastDate(date) {
        return differenceInCalendarDays(date, new Date()) < 0;
    }

    function OnlyFutureRow(props) {
        const isPastRow = props.dates.every(isPastDate);
        if (isPastRow) return <></>;
        return <Row {...props} />;
    }
    const [open, setOpen] = useState(true);

    const cancelButtonRef = useRef(null)
    return (
        <div className="appointment flex flex-col items-center justify-center">
            <div className="nav-block h-[80px]"></div>
            <form className='w-3/5'>
                <div className="space-y-12">
                    <div className=" border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 ">Registered Form For The Lesson</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-500">
                        Fill out the form to register for the lesson.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        onChange={(e) => { setName(e.target.value) }}
                                        className="block w-full rounded-md text-black border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 ">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        onChange={(e) => { setLastName(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 ">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className="block w-full rounded-md text-black border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 ">
                                    Phone Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="number"
                                        id="number"
                                        autoComplete="number"
                                        onChange={(e) => { setPhone(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="coaches" className="block text-sm font-medium leading-6 ">
                                    Coaches
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="coaches"
                                        name="coaches"
                                        autoComplete="coaches-name"
                                        onChange={(e) => { setCoach(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    >
                                        {coaches.map((coach) => (
                                            <option>{coach.name}-{coach.role}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="lessons" className="block text-sm font-medium leading-6 ">
                                    Lessons
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="lessons"
                                        name="lessons"
                                        autoComplete="lessons-name"
                                        onChange={(e) => { setLesson(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    >
                                        {lessons.map((lesson) => (
                                            <option>{lesson.name}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 ">
                                    Hours
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="date"
                                        name="date"
                                        autoComplete="date"
                                        onChange={(e) => { setHour(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">09:00 - 10:00</option>
                                        <option value="">10:00 - 11:00</option>
                                        <option value="">11:00 - 12:00</option>
                                        <option value="">14:00 - 15:00</option>
                                        <option value="">15:00 - 16:00</option>
                                        <option value="">16:00 - 17:00</option>
                                        <option value="">17:00 - 18:00</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 ">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        onChange={(e) => { setCity(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3 lg:col-span-2">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 ">
                                    Chose Date
                                </label>
                                <div className="mt-2 flex bg-white  items-center justify-center rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300">

                                    <DayPicker
                                        className="block  text-black  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        mode="single"
                                        selected={selected}
                                        onSelect={setSelected}
                                        footer={footer}
                                        fromDate={new Date()}
                                        components={{ Row: OnlyFutureRow }}
                                        hidden={isPastDate}
                                        onChange={(e) => { setDate(selected) }}
                                        showOutsideDays
                                    />

                                </div>
                            </div>
                            <div className="lg:col-span-1"></div>
                            <div className="sm:col-span-3 lg:col-span-3">
                                <fieldset>
                                    <legend className="text-sm font-semibold leading-6 ">Select Reminder Tool</legend>
                                    <p className="text-gray-500">You can choose more than one reminder tool.</p>
                                    <div className="mt-6 space-y-6">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="comments" className="font-medium ">
                                                    E-Mail
                                                </label>

                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="candidates"
                                                    name="candidates"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="candidates" className="font-medium ">
                                                    Send Text
                                                </label>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="offers"
                                                    name="offers"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="offers" className="font-medium ">
                                                    Call
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <a href="/">
                        <button type="button" className="w-[150px]  text-sm font-semibold leading-6 ">
                            Cancel
                        </button>
                    </a>
                    <button
                        onClick={modalMessage}
                        type="submit"
                        className="w-[150px] rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Save
                    </button>
                    <Transition.Root show={open} as={Fragment}>
                        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    >
                                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                <div className="sm:flex sm:items-start">
                                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                    </div>
                                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                        Signed For The Course
                                                        </Dialog.Title>
                                                        <div className="mt-2">
                                                            <p className="text-sm text-gray-500">
                                                               
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    Deactivate
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                    onClick={() => setOpen(false)}
                                                    ref={cancelButtonRef}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                </div>
            </form>
        </div>
    );
}
export default Appointment;