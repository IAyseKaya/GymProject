
import coaches from '../data/coaches.js';
import lessons from "../data/lessons";
import React, { useState } from 'react';
import { DayPicker, Row, RowProps } from 'react-day-picker';

import { differenceInCalendarDays } from 'date-fns';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

function Appointment() {
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
    return (
        <div className="appointment flex flex-col items-center justify-center">
            <div className="nav-block h-[80px]"></div>
            <form className='w-4/5'>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 ">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-500">Use a permanent address where you can receive mail.</p>

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
                        <button type="button" className="text-sm font-semibold leading-6 ">
                            Cancel
                        </button>
                    </a>
                    <button
                        type="submit"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Appointment;