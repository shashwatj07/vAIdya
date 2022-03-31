// import React from "react";


// function InName(){
//     return(
//         <div className="font-sans grid grid-col-2">
//             <form>
//                 <div className=" mb-5"><input className=" flex py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer" placeholder="Type your name here.."></input> </div>

            // <button type="button" onClick={() => speak({ text: value })} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            // <span className="flex-row relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            //     Enter
            // </span> 
            // </button>
//             </form>
//         </div>
//     )
// }

// export default InName;

import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function InName(){
  const [value, setValue] = React.useState("");
  const { speak } = useSpeechSynthesis();
  const onValueChange = (e) =>
   {
    setValue("Nice to meet you " + e.target.value + "What are your symptoms ");
   }
    return(
        <div className="font-sans">
            <form>
               <div className="mb-5"><input onChange={(e) => onValueChange(e)} className=" flex py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer" placeholder="Type your name here.."></input></div> 
               <button type="button" onClick={() => speak({ text: value })} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="flex-row relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Enter
            </span> 
            </button>
            </form>
        </div>
    )
}
export default InName;