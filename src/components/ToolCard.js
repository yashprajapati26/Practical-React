import React from "react";

export const ToolCard = () => {
  return (<div className="max-w-sm bg-white shadow-lg overflow-hidden p-2 rounded-xl">
            <img className="w-full h-48 object-cover rounded-2xl" src="https://imageio.forbes.com/specials-images/imageserve/63fefbce18935583292d39ac/The-Best-Examples-of-What-You-Can-Do-With-ChatGPT/960x0.jpg?format=jpg&width=1440" alt="Card Image" />
        
            <div className="flex justify-start items-center py-2 bg-transperant">
            <img className="h-12 mr-4 rounded-full border relative" src="https://findmyaitool-rh.s3.ap-southeast-2.amazonaws.com/images/ai-tool/logo/jpeg-1722410469637" alt="Your Logo" />
            <div className="absolute top-4 left-4 bg-[red] rounded-full"><span className="text-sm text-white px-3 py-1">Featured</span></div>
            <div>
                <p className="text-gray-700 text-base">MarsCode</p>
            <p className="text-gray-700 text-sm">Code Assistant</p>
            </div>
            </div>
        </div>)
  
 
};
