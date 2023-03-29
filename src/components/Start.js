
import React,{Fragment} from 'react';
import classes from './Start.module.css';
import Input from './Inputs/Input';

const Start = function ()
{
    return(
        <Fragment>
            <div  className={classes.head}>
            <h1>
                NOTES!
            </h1>
            </div>
            <Input/>
        </Fragment>

    );
};


export default Start ; 