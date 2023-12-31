
import coaches from '../data/coaches.js';
import lessons from "../data/lessons";
import { DayPicker, Row } from 'react-day-picker';
import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { differenceInCalendarDays } from 'date-fns';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

function Appointment() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [coach, setCoach] = useState("");
    const [lesson, setLesson] = useState("");
    const [hour, setHour] = useState("");
    const [city, setCity] = useState("");

    const [modal, setModal] = useState("");

    const modalMessage = (event) => {
        event.preventDefault();
        setModal(
            " Name Surname : " + name + " " + lastName + " , " +
            " E-mail : " + email + " , " +
            " Phone : " + phone + " , " +
            " Coach : " + coach + " , " +
            " Lesson : " + lesson + " , " +
            " Hours : " + hour + " , " +
            " City : " + city + " , " +
            " Date : " + format(selected, 'PP'));
        setOpen(true);
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
    const [open, setOpen] = useState(false);

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
                                        required
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
                                        required
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
                                        required
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
                                        required
                                        onChange={(e) => { setCoach(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    >
                                        <option disabled>Select Coaches</option>
                                        {coaches.map((coach) => (
                                            <option key={coach.id}  value={coach.name}>{coach.name}-{coach.role}</option>
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
                                        required
                                        onChange={(e) => { setLesson(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    >   <option disabled>Select Lesson</option>
                                        {lessons.map((lesson) => (
                                            <option key={lesson.id} value={lesson.name}>{lesson.name}</option>
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
                                        required
                                        onChange={(e) => { setHour(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    >
                                        <option disabled>Select Hours</option>
                                        <option value="09:00 - 10:00">09:00 - 10:00</option>
                                        <option value="10:00 - 11:00">10:00 - 11:00</option>
                                        <option value="11:00 - 12:00">11:00 - 12:00</option>
                                        <option value="14:00 - 15:00">14:00 - 15:00</option>
                                        <option value="15:00 - 16:00">15:00 - 16:00</option>
                                        <option value="16:00 - 17:00">16:00 - 17:00</option>
                                        <option value="17:00 - 18:00">17:00 - 18:00</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 ">
                                    City
                                </label>
                                <div className="mt-2">
                                    <select
                                        name="city"
                                        id="city"
                                        autoComplete="address"
                                        required
                                        onChange={(e) => { setCity(e.target.value) }}
                                        className="block w-full rounded-md text-black  border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    >
                                        <option disabled>Select City</option>
                                        <option value="İstanbul">İstanbul</option>
                                        <option value="Ankara">Ankara</option>
                                        <option value="İzmir">İzmir</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-4 lg:col-span-3">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 ">
                                    Chose Date
                                </label>
                                <div className="mt-2 flex bg-white  items-center justify-center rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300">

                                    <DayPicker
                                        required
                                        className="block  text-black  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        mode="single"
                                        selected={selected}
                                        onSelect={setSelected}
                                        footer={footer}
                                        fromDate={new Date()}
                                        components={{ Row: OnlyFutureRow }}
                                        hidden={isPastDate}
                                        showOutsideDays
                                    />
                                </div>
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
                </div>
            </form>
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
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Signed For The Course
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        {modal}
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
    );
}
export default Appointment;