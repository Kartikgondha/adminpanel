import React, { useEffect, useState } from "react";
import { number } from "yup";

function Listitem({ getItem }) {
  const [item, setItem] = useState([0]);

  useEffect(() => {
    setItem(getItem(5));
  }, [getItem]);

  return (
  item.map((i)=>{
                return (
                    <p>{i}</p>
                )
             })

     
  );
}

export default Listitem;
