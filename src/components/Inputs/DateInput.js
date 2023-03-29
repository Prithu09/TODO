import React,{useState} from 'react';
import classes from './DateInput.module.css';

const DateInput = function (props)
{
    const [datee , Setdate] = useState(new Date());


    const OnchangeHandlerdate = function(event)

    {
        Setdate(event.target.value);

        // console.log(datee);
        props.fun(event.target.value);
        
    }

    return (<>
       <div>
       <div className={classes.inputtext}>
            <p>
                {props.value}
            </p>
        </div>
        <div className={classes.datewala} >
        <input type='date' value ={datee} onChange={OnchangeHandlerdate} className={classes.forbox} />
        </div>
       </div>

    </>

    );
}
export default DateInput;