import React, { useState } from 'react';
import './App.css';



const Page3 = (props) => {
    // const [p4state, setP4state] = useState(true)
    const [p3state, setP3state] = useState([])
    console.log(p3state,"page3state")
    // const [fields, setFields] = useState([{}]);
    console.log(props.fields, "alldishesdata ")



    const nextClick = () => {
        props.hideResults(3)
    }
    const values = [...props.fields];
    console.log(values,"newdataaaaa")

    const Page3State = (i, event) => {
        const { id, value } = event.target;
        console.log(id, value);

        console.log("=========>>>>>>>",event.target)

        setP3state({ ...p3state})
        values[i].Dish = event.target.value;
        // values[i].Noofserving = event.target.value;
     

        props.setFields(values);
        props.setFinalResult({ ...props.finalResult})



    }
    const noofserving =(i,e) =>{
        values[i].Noofserving = e.target.value;
        props.setFields(values);



    }
    console.log(props.fields, "newfiled")
    console.log(props.NewFresult, "NewAllResult")
    // function handleChange(i, event) {
    //     const values = [...fields];
    //     values[i].value = event.target.value;
    //     setFields(values);
    // }


    function handleAdd() {
        const values = [...props.fields];
        values.push({});
        props.setFields(values);
    }

    function handleRemove(i) {
        const values = [...props.fields];
        values.splice(i, 1);
        props.setFields(values);
    }


    const preeevclick = () => {
        props.hideResults(1)

    } 
    return (<>

        {
            <div className="form1" > form 3
                <form>
                    <div className="selectmeal">
                        <label className="label" for="label" >Please Select a Dish.</label>   <br></br>

                        {props.fields.map((field, idx) => {
                            return (
                                <div key={`${field}-${idx}`}>
                
                                    <select onChange={e => Page3State(idx, e)} className="mealselect" id="Dish" >
                                        <option value={field.value || ""} >---</option>
                                        {props.Myjson2.map((jsonmap2) => {
                                            return (
                                                <option value={jsonmap2.name}>{jsonmap2.name} </option>
                                            )
                                        })}
                                    </select><br></br>
                                    <label className="label" for="label" >Please Enter No of Serving.</label>   <br></br>
                                    <select onChange={e => noofserving(idx,e)} className="mealselect" id="NoServing" >
                                        <option value="" >---</option>
                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                        <option value="6" >6</option>                           
                                        <option value="7" >7</option>
                                        <option value="8" >8</option>
                                        <option value="9" >9</option>
                                        <option value="10" >10</option>
                                    </select>
                                    <button type="button" onClick={() => handleRemove(idx)}>
                                        X
                                     </button>
                                </div>
                            );
                        })}
                        {/* <select onChange={Page3State} className="mealselect" id="Dish" >

                            <option value="" >---</option>
                            {props.Myjson4.map((jsonmap2) => {

                                return (

                                    <option value={jsonmap2.name}>{jsonmap2.name} </option>

                                )
                            })}
                        </select> */}
                    </div>
                    <div className="selectmeal">
                        {/* <label className="label" for="label" >Please Enter No of Serving.</label>   <br></br> */}
                        {/* <select onChange={Page3State} className="mealselect" id="NoServing" >
                            <option value="" >---</option>
                            <option value="1" >1</option>
                            <option value="2" >2</option>

                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                            <option value="6" >6</option>
                            <option value="7" >7</option>
                            <option value="8" >8</option>
                            <option value="9" >9</option>
                            <option value="10" >10</option>


                        </select> */}
                    </div>
                    <button type="button" onClick={() => handleAdd()}>
                        +
                </button>
                </form>
                <input id="prebtn" type="submit" value="Previous"  onClick={() => preeevclick()}  />
                <input id="nextbtn" type="submit" value="Next" onClick={() => nextClick()} />

                <div>{p3state.Dish}</div>
                <div>{p3state.NoServing}</div>
             </div> 
                
        
          
        }
     </>
    
    )


    // </div> : <Page4 Myjson5={props.NewFresult}
    // dishdata = {fields}
}



export default Page3;
