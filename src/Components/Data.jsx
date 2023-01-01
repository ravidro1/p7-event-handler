import React, { useState } from "react";

function Data() {
    const [inputs, setInputs] = useState({});
    const [eventArray, setEventArray] = useState([])


  return {inputs, setInputs, eventArray, setEventArray};
}

export default Data;
