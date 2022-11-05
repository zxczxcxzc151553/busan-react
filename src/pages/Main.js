import React from 'react'
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
  return (
    <div>
<headlayout>
<div>Main</div>
    <button onClick={() => navigate("/counter")}>메인으로이동</button>

</headlayout>
</div>
  );
};

export default Main;