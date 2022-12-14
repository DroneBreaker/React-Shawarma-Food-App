import AboutLayout from "../layouts/AboutLayout"

function AboutContent() {
    return (
        <div>
            <div className="bg-white md:h-40 md:p-2 mb-1">
                <h1 className="text-center md:text-5xl md:mx-[4rem] mx-8 text-2xl">We deliver finger licking, <span className="block">delicious, and</span><span>amzing dishes.</span></h1>
            </div>

            {/* grid columns */}
            <div className="grid grid-cols-2">
                <div className="">
                    <img className="w-full bg-center" loading="lazy" src='/about.jpg'/>
                </div>

                <div className="h-full w-full p-4 md:p-11">
                    <p className="md:w-[16rem] w-[10rem] md:text-base text-xs font-medium">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet modi 
                        vel nam voluptas ipsum dicta ipsa reiciendis magni, ipsam aliquam obcaecati 
                        molestiae, iusto est omnis velit inventore beatae ea fugiat!
                    </p>
                </div>
            </div>

            <div className="bg-white h-[7.5rem] w-full md:p-4">
                <h1 className="text-center text-2xl md:text-4xl md:mx-[4rem] mx-8">
                    Order from us, and 
                    <span className="block text-orange-500">
                        live happily after
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <AboutLayout><AboutContent/></AboutLayout>
    )
}