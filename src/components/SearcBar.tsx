interface SearchBarProps {
    text: string
    icon: string
}

export default function SearcBar({text, icon}: SearchBarProps) {
  return (
    <div>
        <div>
            <input className="px-4 p-1 flex mx-6 justify-between mt-1 bg-white shadow-inner shadow-gray-500 rounded-full text-xs md:w-[160px] w-32 mb-2" prefix={icon} placeholder={text}/>
        </div>
    </div>
  )
}
