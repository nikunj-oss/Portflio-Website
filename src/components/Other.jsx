import React from "react";

const Other=(prop)=>{
    return(
        <div>
            <button
                class="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition mx-2"
                >
                {prop.name}
            </button>

        </div>
    )
}

export default Other;