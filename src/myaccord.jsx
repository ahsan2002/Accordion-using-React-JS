import React ,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

const Myaccord = (val) => {
 const[show,setshow]=useState(false);
  return (
    <>
    <div className='main-heading'>
        <p onClick={()=>{
          setshow(!show)
        }}>
          {show ? <RemoveRoundedIcon className='btn'/> :  <AddIcon className='btn'/>}
          </p>
        <h3>{val.question}</h3>
    </div>
    {
      show && <p className='answers'>{val.answer}</p>
    }
    
    </>
  )
}

export default Myaccord;