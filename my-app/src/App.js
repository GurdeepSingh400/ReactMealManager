import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import dishes from './dishes.json'





function App(props) {
  const [hideResult, hideResults] = useState(0)
  const [p1State, setP1state] = useState([])
  const [finalResult, setFinalResult] = useState([])
  const [fields, setFields] = useState([{}]);
  console.log(fields, "dishes data")
  console.log(dishes, "json data")
  
  // setFields(props.values);

  const availabledata = dishes.dishes.filter(newfilter => {
    return newfilter.availableMeals.includes(p1State.MealName)

  })
  console.log(availabledata)

  return (
    <>
      {/* <div id="tableheading">
        <table className="table">
          <td className="td" >Step 1</td>
          <td className="td">Step 2</td>
          <td className="td">Step 3</td>
          <td className="td">Step 4</td>
        </table>
      </div> */}



      {  hideResult == 0 &&

        <Page1
          hideResults={hideResults}
          setP1state={setP1state}
          finalResult={finalResult}
          setFinalResult={setFinalResult}
          p1State={p1State}
        />}

      {  hideResult == 1 &&

        <Page2
          hideResults={hideResults}
          Myjson={dishes.dishes}
          hideResult={hideResult}
          finalResult={finalResult}
          setFinalResult={setFinalResult}
          fields={fields}
          setFields={setFields}
          availabledata = {availabledata}


        />}

      {  hideResult == 2 &&

        <Page3
          hideResults={hideResults}
          Myjson2={dishes.dishes}
          hideResult={hideResult}
          finalResult={finalResult}
          setFinalResult={setFinalResult}
          fields={fields}
          setFields={setFields}
        />}

      {  hideResult == 3 &&

        <Page4
          hideResults={hideResults}
          Myjson2={dishes.dishes}
          hideResult={hideResult}
          finalResult={finalResult}
          setFinalResult={setFinalResult}
          fields={fields}
          setFields={setFields}
        />}
      {  hideResult == 4 &&

        <Page5 />}

    </>
  )

}

export default App;
