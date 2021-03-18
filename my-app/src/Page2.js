import React, { useState } from 'react';
import './App.css';



const Page2 = (props) => {
  // const [result, setResult] = useState(true)
  const [p2state, setP2state] = useState([])
  console.log(p2state,"p2state")
  // const  dd = p2state;
  // console.log(dd)




  const nextbuttonClick = () => {
     props.hideResults(2)

  }
  const prevbtnclick =  () => {
    props.hideResults(0)



  }

  const Page2State = (event) => {
    const { id, value } = event.target;
    console.log("id", id, "value", value)

    setP2state({...p2state, [id]: value });
    console.log(...p2state, "tttttttttttttttttttttttttttttttttttttttttt")
    props.setFinalResult({ ...props.finalResult, [id]: value });

  }
  console.log(props.finalResult, "finalresult")


  

  // const showingdata  =()=> {
  //   const [p2state, setp2state] = useState([])
  //   const dd = p2state;
  //   console.log(dd)
  //   return (
  //     dd.map((Datashow) => <li>{Datashow}</li>)
  //   )

  // }

  //  const newdata  =   props.Myjson.filter(newfilter => { return newfilter.restaurant.includes()

  // })
  // console.log(newdata)



  return (

    <>

      {
        <div className="form1" > form 2
          <form>
            {/* <input id="nextbtn" type="submit" value="Next" onClick={showingdata} /> */}
            <div className="selectmeal">
              <label className="label" id="Rest" >Please Select a Restaurant </label>   <br></br>
              <select className="mealoption" onChange={Page2State} id="Restaurant" >
                <option value="---" >---</option>

                {/* { props.Myjson.filter(newfilter => { return newfilter.restaurant.includes("Mc")
              
            })} */}
                {/* {props.Myjson.filter(newfilter => { return newfilter.restaurant.includes("Mc")})} */}



                
                {props.availabledata.map((jsonmap) => {
                  {/* console.log(jsonmap) */ }
                  return (<>

                    <option value={jsonmap.restaurant}>{jsonmap.restaurant} </option>
                    {/* <div> Data Show :-  {jsonmap.restaurant}</div> */}
                    {/* <div> data show : -  {jsonmap.restaurant}</div> */}
                  </>
                  )
                })}
              </select>
              {/* <div> data show : -  {jsonmap.restaurant}</div> */}
            </div>
          </form>
          <div>
            <input id="prebtn" type="submit" value="Previous"  onClick ={()=> prevbtnclick()}   />
            <input id="nextbtn" type="submit" value="Next" onClick={() => nextbuttonClick()} />
          </div>
          <div>
            {p2state.Restaurant}
          </div>
                        {/* </div> : <Page3 Myjson4={props.Myjson}
                         NewFresult={props.Fresult}
                         NewResult={props.allResult}
                          />} */}

        </div>
      }

    </>
  
  )

}

export default Page2;