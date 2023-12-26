import Link from "next/link"


const Header = () => {
  return (
    <div>
        <div className="w-[90%] mx-auto py-5 group">
            <Link href={'/'} className="text-xl  tracking-wider">
                ADEKEMI <span className="text-[#0093A9] ">ADEYOMBO</span>.
            </Link>
            <div className="h-[1.5px] bg-black w-0 group-hover:w-56 transition-all ease-linear duration-300 " />
        </div>
    </div>
  )
}

export default Header