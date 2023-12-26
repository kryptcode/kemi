import Link from "next/link"


const Header = () => {
  return (
    <div>
        <div className="w-[90%] mx-auto py-5 flex justify-between">
            <div className="group w-56 ">
                <Link href={'/'} className="text-lg ">
                    ADEKEMI <span className="text-[#0093A9] ">ADEYOMBO</span>.
                </Link>
                <div className="h-[1.7px] bg-black w-0 group-hover:w-56 transition-all ease-linear duration-[400ms] " />
            </div>

            <button className="hover:text-[#0093A9] transition-colors ease-in-out duration-300">
                Contact Me
            </button>
        </div>
    </div>
  )
}

export default Header