import { useState } from 'react';
import './main-page.css';

function CalculateBMI() {

const [BMI, setBMI] = useState(0);
const [str, setStr] = useState("");

const [weight, setWeight] = useState(0);
const [height, setHeight] = useState(0);
const [age, setAge] = useState(0);
const [sex, setSex] = useState(true);

const calculateBMI = (event) => {

    event.preventDefault();
    var dividing = (height / 100);
    var squareHeight = (dividing) * (dividing);
    var totalBMI = (weight / squareHeight);
    totalBMI = Number(totalBMI.toFixed(2));
    setBMI(totalBMI);
    console.log(totalBMI);
    console.log(str)

    var newStr = "";

    if (totalBMI < 18.5) {
        newStr = "Underweight";
    }
    else if (totalBMI < 25) {

        newStr = "Normal";
    }
    else if (totalBMI < 30) {

        newStr = "Overweight";
    }
    else if (totalBMI < 35) {

        newStr = "Obese";
    }
    else if (35 < totalBMI) {

        newStr = "Extremely Obese";
    }
    else {
        newStr = "Error";
    }

    setStr(newStr);
}

return (
    <div className="calculator">
        <div className="nav-block h-[80px]"></div>
        <div className="index mt-20 w-full">
            <div className="inner-index flex flex-col items-center justify-center">
                <div className="relative isolate overflow-hidden ">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

                            <div className="max-w-xl lg:max-w-lg flex flex-col items-start justify-center">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">BMI Healthy Weight Calculator</h2>
                                <p className=" mt-4 text-lg leading-8 text-gray-500">
                                    The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.
                                    This calculator for adult.
                                </p>
                                <div className="mt-6 gap-x-4 flex items-center justify-center">
                                    <form className="w-full max-w-lg ">
                                        <div className="flex flex-wrap -mx-3 mb-6 ">
                                            <div className="w-full md:w-1/2 px-3  pt-2">
                                                <label
                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                >
                                                    Height - cm <p className='text-red-700'> *</p>
                                                </label>
                                                <input

                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-height"
                                                    type="number"
                                                    placeholder="Height - cm"
                                                    onChange={(e) => { setHeight(e.target.value) }}
                                                />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3 pt-2">
                                                <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                                    Weight - kg <p className='text-red-700'> *</p>
                                                </label>
                                                <input
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-weight"
                                                    type="number"
                                                    placeholder="Weight - kg"
                                                    onChange={(e) => { setWeight(e.target.value) }}
                                                />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3 pt-2">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                                    Age - number -<p className='text-red-700'>optional</p>
                                                </label>
                                                <input
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-age"
                                                    type="number"
                                                    placeholder="Age"
                                                    onChange={(e) => { setAge(e.target.value) }}
                                                />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3 pt-2">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                                    Sex -<p className='text-red-700'>optional</p>
                                                </label>
                                                <select
                                                    onChange={(e) => { setSex(e.target.value) }}
                                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-sex">
                                                    <option>Men</option>
                                                    <option>Women</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="flex-none w-full  pt-2 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                                            onClick={calculateBMI}
                                        >
                                            Calculate
                                        </button>
                                    </form>

                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <div className="showBMI flex flex-col items-center justify-center">
                                    <img src="https://www.pnbmetlife.com/content/dam/pnb-metlife/images/icons/bmi-calculator/meter.png" alt="bmi" className='object-cover' />
                                    <p className='text-4xl font-bold tracking-tight drop-shadow-lg flex items-center justify-center  h-20 w-full'>
                                        BMI :  {BMI}
                                    </p>
                                    <p className='text-4xl font-bold tracking-tight drop-shadow-lg flex items-center justify-center  h-20 w-full'>
                                        {str}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
export default CalculateBMI;