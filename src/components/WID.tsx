import { dm_serif } from "@/lib/fonts";
import { GoTools } from "react-icons/go";
import { TfiNotepad } from "react-icons/tfi";

const WID = () => {
  return (
    <div className="py-10">
      <div>
        <h2
          className={` ${dm_serif.className} text-right text-[25rem] opacity-10 leading-none mb-16`}
        >
          002
        </h2>
      </div>
      <div className="w-[90%] mx-auto ">
        <div className="flex">
          <div className="flex-[1.5] ">
            <h3
              className={`${dm_serif.className} text-7xl uppercase font-medium mb-5 `}
            >
              What I Do
            </h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis eaque est provident quis a nesciunt beatae aperiam repellat, totam debitis accusantium. Omnis veritatis sapiente labore incidunt magnam quis corrupti?
            </p>
          </div>
          <div className="flex-1 lg:pt-64 flex justify-end items-end">
            <div className="-rotate-45">
                <GoTools className='text-9xl opacity-30  animate-pulse' />
            </div>
          </div>
        </div>

        <div className="flex my-10 mb-32">
            <div className="flex-[1.5] ">
                <h5 className={`${dm_serif.className}  uppercase text-3xl mb-4 `}>content strategy</h5>
                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt eaque quae animi, dolorum incidunt libero perferendis exercitationem deleniti. Non!
                </p>
            </div>
            <div className="flex-1 lg:pt-44 flex justify-end items-end">
            <TfiNotepad className='text-8xl opacity-30 animate-pulse' />
            </div>
        </div>

        <div className="flex my-10">
            <div className="flex-[1.5] ">
                <h5 className={`${dm_serif.className}  uppercase text-3xl mb-4 `}>content strategy</h5>
                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt eaque quae animi, dolorum incidunt libero perferendis exercitationem deleniti. Non!
                </p>
            </div>
            <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default WID;
