import Footer from 'components/commons/Footer';
import Header from 'components/commons/header';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Counter = () => {
    const navigate = useNavigate();
    const [num, setNum] = useState(0);
    const increase = () => setNum((prev) => prev + 3);

  return (

  );
};

export default Counter;