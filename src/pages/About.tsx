import AboutLayout from "../layouts/AboutLayout"

function AboutContent() {
    return (
        <div>
            <div className="bg-white md:h-42 md:p-4">
                <h1 className="text-center md:text-4xl md:mx-[4rem] mx-8 text-xl">We deliver finger licking, <span className="block">delicious, and</span><span>amzing dishes.</span></h1>
            </div>

            <div className="grid grid-cols-2">
                <div className="">
                    <img className="w-full" loading="lazy" src='/about.jpg'/>
                </div>

                <div className="h-full w-full md:p-12">
                    <p className="md:w-[16rem] w-[10rem] md:text-base text-xs font-medium">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet modi 
                        vel nam voluptas ipsum dicta ipsa reiciendis magni, ipsam aliquam obcaecati 
                        molestiae, iusto est omnis velit inventore beatae ea fugiat!
                    </p>
                </div>
            </div>

            <div className="bg-white md:h-42 md:p-4">
                <h1 className="text-center md:text-4xl md:mx-[4rem] mx-8 text-xl">
                    Order from us, and 
                    <span className="block">
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