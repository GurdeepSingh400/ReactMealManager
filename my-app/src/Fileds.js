import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <button type="button" onClick={() => handleAdd()}>
        +
      </button>

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter text"
              value={field.value || ""}
              onChange={e => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}









// import React, { useState } from 'react';
// import './App.css';
// import Page4 from './Page4'


// const Page3 = (props) => {
//     const [p4state, setp4state] = useState(true)
//     const [p3state, setp3state] = useState([])
//     console.log(p3state)
//     const [fields, setFields] = useState([{ value: null }]);



//     const nextClick = (event) => {
//         event.preventDefault();
//         setp4state(false)
//     }


//     const Page3State = (event) => {
//         const { id, value } = event.target;
//         console.log(id, value);
//         setp3state({ ...p3state, [id]: value })

//         props.NewResult({ ...props.NewFresult, [id]: value })



//     }
//     console.log(props.NewFresult, "NewAllResult")
//     function handleChange(i, event) {
//         const values = [...fields];
//         values[i].value = event.target.value;
//         setFields(values);
//     }


//     function handleAdd() {
//         const values = [...fields];
//         values.push({ value: null });
//         setFields(values);
//     }

//     function handleRemove(i) {
//         const values = [...fields];
//         values.splice(i, 1);
//         setFields(values);
//     }
//     return (<>

//         {p4state ?
//             <div className="form1" > form 3
//                 <form>
//                     <div className="selectmeal">
//                         <label className="label" for="label" >Please Select a Dish.</label>   <br></br>
//                         <select onChange={Page3State} className="mealselect" id="Dish" >

//                             <option value="" >---</option>
//                             {props.Myjson4.map((jsonmap2) => {
//                                 {/* console.log(jsonmap2) */ }
//                                 return (

//                                     <option value={jsonmap2.name}>{jsonmap2.name} </option>

//                                 )
//                             })}
//                         </select>
//                     </div>
//                     <div className="selectmeal">
//                         <label className="label" for="label" >Please Enter No of Serving.</label>   <br></br>
//                         <select onChange={Page3State} className="mealselect" id="NoServing" >
//                             <option value="" >---</option>
//                             <option value="1" >1</option>
//                             <option value="2" >2</option>

//                             <option value="3" >3</option>
//                             <option value="4" >4</option>
//                             <option value="5" >5</option>
//                             <option value="6" >6</option>
//                             <option value="7" >7</option>
//                             <option value="8" >8</option>
//                             <option value="9" >9</option>
//                             <option value="10" >10</option>


//                         </select>
//                     </div>
//                 </form>
//                 <input id="prebtn" type="submit" value="Previous" />
//                 <input id="nextbtn" type="submit" value="Next" onClick={nextClick} />

//                 <div>{p3state.Dish}</div>
//                 <div>{p3state.NoServing}</div>
//             </div> : <Page4 Myjson5={props.NewFresult}

//             />}
//     </>
//     )
// }



// export default Page3;
