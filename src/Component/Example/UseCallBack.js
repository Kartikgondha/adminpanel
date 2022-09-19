import React, { useCallback, useState } from 'react';
import Listitem from './Listitem';

function UseCallBack(props) {
    const [theme, SetTheme]= useState(false);
    const [number, SetCounter]= useState([]);

    console.log(theme);

     const themeStyle = {
        backgroundColor : theme ? '#fff' : '#000',
        color : theme ? '#000' : '#fff'
     }

     const getItem = useCallback((inc) => {
          return[number, number+inc, number+inc+5]
        },
        [number],
      );

    return (
        <div style={themeStyle}>
            <button onClick={()=>SetTheme(!theme)}>Toggle</button>
            <input placeholder='enter any number' onChange={(e)=>SetCounter (parseInt(e.target.value))} />
            <Listitem getItem={getItem}/>
        </div>
    );
}

export default UseCallBack;