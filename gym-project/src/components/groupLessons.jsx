import lessons from "../data/lessons";

function GroupLessons() {
    return (
        <div className="GroupLessons ">
            <div className="nav-block h-[80px]"></div>
            <div className="slider">
                <div className='w-full h-[600px] m-auto relative group'>
                    <div
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1599447421321-1c96150f0f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)` }}
                        className='slider-control w-full h-full bg-center bg-cover '
                    >
                        <div className="slider-text absolute flex items-center justify-center h-full w-full">
                            <div className="text flex items-center justify-center h-full w-full">
                                <div className="flex flex-col items-center justify-center m-10 h-full w-full">
                                    <h1 className="text-4xl text-white font-bold tracking-tight drop-shadow-lg   sm:text-6xl">

                                        MOTIVATION AND ENERGY
                                    </h1>
                                    <p className="mt-4 text-xl text-white drop-shadow-lg ">
                                        Group Lessons
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="">
                <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold mt-5 ">Lessons</h2>
                        <p className=" text-sm mt-2 mb-5">
                            Alternatives that appeal to different interests are waiting for you, where you can participate free of charge with professional instructors.</p>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                            {lessons.map((lesson) => (
                                <div key={lesson.name} className="group relative">
                                    <div className="relative h-[500px] w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-[500px]">
                                        <img
                                            src={lesson.imageSrc}
                                            alt={lesson.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-lg font-extrabold">
                                        <a href={lesson.href}>
                                            <span className="absolute inset-0" />
                                            {lesson.name}
                                        </a>
                                    </h3>
                                    <p className="h-28 text-base font-semibold ">{lesson.description}</p>
                                    <div className="pb-10">
                                        <a
                                        
                                        className=" h-28 mb-10 text-base text-red-500 leading-6 "
                                    >
                                        Join Lesson<span aria-hidden="true">&rarr;</span>
                                    </a>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default GroupLessons;