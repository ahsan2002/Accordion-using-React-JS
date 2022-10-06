import React, { useState } from 'react';
import { questions } from './api';
import  Myaccord  from './myaccord';
import './index.css';

const Accordion=()=>{
    const[data,setdata]=useState(questions);
    return(
        <>
        <section className='main-div'>
            <h1>React Interview Questions</h1>
        {
            data.map((elem)=>{
                return <Myaccord {...elem} key={elem.id} />;
                // return <h1>Ahsan</h1>
            })
        }
        </section>
        </>
    )

}

export default Accordion;