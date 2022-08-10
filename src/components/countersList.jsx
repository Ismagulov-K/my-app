import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {

    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь" }, 
        {id: 1, value: 4, name: "Ложка" }, 
        {id: 2, value: 0, name: "Вилка" },
        {id: 3, value: 0, name: "Тарелка" },
        {id: 4, value: 0, name: "Набор минималиста" },
    ];



    const [counters , serCounters] = useState(initialState);
    const handleDelete = (id)=>{
        const newCounters = counters.filter((c) => c.id !== id);
        console.log('newCounters', newCounters);
        serCounters(newCounters);

    };
    const hadleReset = () =>{
        serCounters(initialState);
        console.log('hadleReset', hadleReset);
    };
    // const hadleUpdate = () =>{
    //     const updatedState = [
    //         {id: 0, value: 1, name: "Ненужная вещь" }, 
    //         {id: 1, value: 2, name: "Ложка" }, 
    //         {id: 2, value: 3, name: "Вилка" },
    //         {id: 3, value: 4, name: "Тарелка" },
    //         {id: 4, value: 0, name: "Набор минималиста" },
    //     ];
    //     serCounters(updatedState);
    //     console.log('updatedState', updatedState);
    // };

    return( 
        <>
           {counters.map((count) => (
            <Counter 
                key = {count.id} 
                onDelete = {handleDelete}
                {...count}
            
            /> 
            
           ))}
            <button className='btn btn-primary btn-sm m-2' onClick={hadleReset}>Сброс </button>
            {/* <button className='btn btn-primary btn-sm m-2' onClick={hadleUpdate}>Обновить состояние </button> */}
        </>
    )
};

export default CountersList;