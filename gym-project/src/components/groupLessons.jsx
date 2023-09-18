
const lessons = [
    
    {
        name: 'Pilates',
        description: 'Pilates lessons, which add a creative and fun interpretation to the 34 mat exercises developed by Joseph Pilates, are waiting for you to make you stronger, more flexible, increase your endurance and improve your posture.',
        imageSrc: 'https://img-macfit.mncdn.com/mnresize/676/450/wp-content/uploads/2022/07/pilates-1.jpg',
        imageAlt: 'sport',
        href: '#',
    },
    {
        name: 'Dance',
        description: 'The most fun way to stay fit is through group dance classes. Fun lessons from Zumba to Street Dance, from Hip Hop to Latin dances are waiting for you. You can take advantage of the dance lessons that suit you best.',
        imageSrc: 'https://img-macfit.mncdn.com/mnresize/676/450/wp-content/uploads/2022/07/dans.jpg',
        imageAlt: 'sport',
        href: '#',
    },
    {
        name: 'Cardio',
        description: 'If you want to get your heart rhythm used to a high tempo and benefit your cardiovascular health, cardio group classes are for you. You can benefit from cardio group classes that will help you both lose weight and become more durable with an intense pace.',
        imageSrc: 'https://img-macfit.mncdn.com/mnresize/676/450/wp-content/uploads/2022/07/kardiyo.jpg',
        imageAlt: 'sport',
        href: '#',
    },
    {
        name: 'Force',
        description: 'The goal is to strengthen and shape all muscle areas and increase performance while achieving a healthier posture. To participate in strength classes at different levels and durations and to get stronger much faster under the control of an instructor, make a reservation with our MAC+ application.',
        imageSrc: 'https://img-macfit.mncdn.com/mnresize/676/450/wp-content/uploads/2022/07/kuvvet.jpg',
        imageAlt: 'sport',
        href: '#',
    },
    {
        name: 'Cycling',
        description: 'Cycling group lessons, which are held on the bike accompanied by music and rhythm and whose difficulty level is determined using rpm and level settings, bring together fun and sports. A wide variety of cycling lessons that you can join according to your level are waiting for you in our clubs.',
        imageSrc: 'https://img-macfit.mncdn.com/mnresize/676/450/wp-content/uploads/2022/07/cycling.jpeg',
        imageAlt: 'sport',
        href: '#',
    },
    {
        name: 'Yoga',
        description: 'Yoga, which originated in India and means integration in Sanskrit, is known for its physical benefits as well as resting the soul and mind. Yoga, which is based on postures that work different muscle groups and correct breathing, is perfect for you with different lesson alternatives.',
        imageSrc: 'https://img-macfit.mncdn.com/mnresize/676/450/wp-content/uploads/2022/07/yoga.jpg',
        imageAlt: 'sport',
        href: '#',
    },
    {
        name: 'Core',
        description: 'Core training, which consists of the most basic exercises of a proper and strong posture, becomes much more efficient with the guidance of an instructor and the synergy created by the group. You can benefit from various core group lessons for different levels.',
        imageSrc: 'https://img-macfit.mncdn.com/mnresize/676/450/wp-content/uploads/2022/07/core.jpg',
        imageAlt: 'sport',
        href: '#',
    },
]

function GroupLessons() {
    return (
        <div className="GroupLessons ">
            <div className="nav-block bg-black h-[80px]"></div>
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
                                    <p className="h-28 text-base font-semibold mb-10">{lesson.description}</p>
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