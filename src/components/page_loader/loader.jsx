'use client'

import Loader from "react-js-loader";

const PageLoader = () => {
    return (
        <div className="border--2 border-[red] w-full h-screen flex justify-center items-center"
            style={{
                background:
                    "linear-gradient(to top, #00a3b1, #68b2cc, #a2c2dc, #cdd4e4, #eaeaea)",
            }}>
            <Loader type="bubble-top" bgColor={"#12383b"} title={"Loading..."} size={50} />
        </div>
    );
}

export default PageLoader;