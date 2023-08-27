import About from "./components/About"
import Header from "./components/Header"
import Typewriter from 'typewriter-effect'
import Projects from "./components/Projects"
import 'animate.css'


function App() {

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <div className="w-[90%] animate__animated animate__fadeInLeft mx-auto text-8xl lg:text-9xl oswald font-medium uppercase mb-32 lg:mb-64 ">
        <div className="oswald">
          HI, I&apos;M
        </div>
        <div className="oswald text-[#ffecd1]">
          adekemi
        </div>
        <div className="text-2xl">
        <Typewriter
                options={{
                    strings: ['Graphics Designer', 'Art Director'],
                    autoStart: true,
                    loop: true,
        }}
        />
        </div>
      </div>

      <About />
      <Projects />

      <div className="w-[90%] animate__animated animate__slideInLeft mx-auto py-10 text-3xl flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 items-center text-[#ffecd1]">
        <div >
        <a href="https://www.behance.net/taiwoadeyombo" className=" py-1 px-4 border-[#ffecd1] border-[2px] ">BEHANCE</a>
        </div>
        <div>
        <a href="mailto:adeyombotk@gmail.com" className=" py-1 px-4 border-[#ffecd1] border-[2px] ">adeyombotk@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default App
