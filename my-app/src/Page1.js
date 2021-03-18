import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import dishes from './dishes.json'


const Page1 = (props) => {

  // const [hideResult, hideResults] = useState(true)
  const [p1State, setP1state] = useState([])
  console.log(p1State, "p1state")
  const [getjson, setjson] = useState([])
  // console.log(getjson,"getjson")

  const [finalResult, setFinalResult] = useState([])
  console.log(finalResult, "finalresult")

  const buttonClick = () => {
    props.p1State.MealName && props.p1State.NoOfPeople && props.hideResults(1)
  
console.log("showsssssssssssssssss",props.hideResult)
    // hideResults(false)
  }

  useEffect(
    function fetchdata() {
      setjson(dishes.dishes)

    }, []);

  const Page1State = (event) => {
    const { id, value } = event.target;
    console.log(id, value);
    props.setP1state({ ...props.p1State, [id]: value });
    props.setFinalResult({ ...props.finalResult, [id]: value });

    // setjson([...getjson, {[id] : value}])
  }
  console.log(p1State,"props.............")







  return (
    <>

      { <div>
        <div className="form1" > form 1
          <form>
            <div className="selectmeal">
              <label className="label" for="label"  >Please Select a Meal </label>   <br></br>
              <select onChange={Page1State} className="mealselect" id="MealName" >
                <option value="" >---</option>

                <option value="breakfast"  >breakfast</option>
                <option value="lunch" >lunch</option>
                <option value="dinner" >dinner</option>
              </select>
            </div>

            <div className="noofpple">
              <label className="label2" for="label2" >Please Enter Number Of People </label><br></br>
              <select onChange={Page1State} className="mealoption" id="NoOfPeople"  >
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
            </div>
          </form>
          <div>
            <input id="submitbtn" type="submit" value="Next" onClick={()=>buttonClick()} />

          </div>
          <div>{p1State.MealName}</div>
          <div>{p1State.NoOfPeople}</div>

          {/* </div> : <Page2 Myjson={availabledata}
          Fresult={finalResult}
          allResult={setFinalResult}
        />} */}

        </div>
     


      </div>
      }
    </>

  )
}

export default Page1;