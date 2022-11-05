import React from "react";

const HeadlessLayout = ({children}) => {
  return (
    <HeadlessLayout>
        <div>
          
    <div>counter</div>

      <div>클릭수{num}</div>
      <div>
        <button onClick={increase}>클릭</button>
        </div>


    {/* <Link to={"/"}>메인으로 이동</Link> */}
    <button onClick={() => navigate("/")}>메인으로이동</button>
    </HeadlessLayout>
    </div>
    <div>
    {children}
    </div>
  );
};

export default HeadlessLayout