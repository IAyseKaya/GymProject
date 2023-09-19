function About() {
    return (
        <div className="about ">
            <div className="nav-block h-[80px]"></div>

            <section className=" min-h-[800px] overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <img 
                        className="mx-auto h-12" 
                        src="https://media.discordapp.net/attachments/988883199209926710/1146903215053484042/pngaaa.com-2946803.png"
                        alt="" 
                    />
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                            <p>
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img
                                className="mx-auto h-10 w-10 rounded-full"
                                src="https://media.discordapp.net/attachments/988883199209926710/1150188594162585700/PAHC825.JPG"
                                alt=""
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold ">İsmet Ayşe Kaya</div>
                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-300">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-500">Developer</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    );
}
export default About;