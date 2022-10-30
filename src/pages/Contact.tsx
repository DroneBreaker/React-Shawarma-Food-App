import Button from "../components/Button"
import ContactLayout from "../layouts/ContactLayout"

interface ContactProps{
    file: string
}
function ContactContent() {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="md:p-12 bg-gray-200">
                    <h1 className="md:text-6xl px-12 my-4">Contact Us<span className="block md:text-4xl my-10 md:px-28">OR</span></h1>

                    <h2 className="md:text-[2.3rem] px-12 my-4">Visit any of our social media</h2>

                    <div className="flex justify-end">
                        <Button img={"#"} text={"Instagram"} route={'http://instagram.com/'} />
                        <Button img={"#"} text={"Whatsapp"} route={'http://whatsapp.com/'} />
                        <Button img={"#"} text={"Telephone"} route={'#'} />
                    </div>
                </div>

                <div className="">
                    <h1 className="text-center font-bold p-16 text-6xl">Let us Know</h1>

                    <form className="px-4 grid grid-cols-2 gap-[1.4rem]">
                        <input className="bg-white px-2 p-1 text-gray-400 rounded-md" placeholder="First Name"/>

                        <input className="bg-white px-2 p-1 text-gray-400 rounded-md" placeholder="Last Name "/>

                        <input className="bg-white px-2 p-1 text-gray-400 rounded-md" placeholder="Email"/>

                        <input className="bg-white px-2 p-1 text-gray-400 rounded-md" placeholder="Subject"/>

                        <div className="w-[100%]">
                            <textarea className="mb-[.85rem] px-2" name="message" placeholder="Enter your message" id="" cols={48} rows={8}></textarea>
                            
                            <Button img={"#"} text={"Submit"}/>
                        </div>
                    </form>
                    

                </div>
            </div>
        </div>
    )
}


export default function Contact() {
  return (
    <ContactLayout><ContactContent/></ContactLayout>
  )
}
