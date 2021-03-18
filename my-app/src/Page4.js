import React from 'react';
import './App.css';
import { useState } from 'react';

const Page4 = (props) => {
  
   
     console.log(props.finalResult, "thi is my final data ")
    // console.log(props.dishdata[0].Dish,"dishes data ")
   console.log(props.fields,"all dish data new")

   const lastpreeevclick = () => {
    props.hideResults(2)

   }

   const lastnextClick = () => {
    props.hideResults(4)

       
}
    return (
        <>
            <h1>Page 4</h1>

            <div className="finalresult" >
                <div>
                    <h3>Meal --- {props.finalResult.MealName} </h3>
                </div>
                <div>
                    <h3>No.of People --- {props.finalResult.NoOfPeople} </h3>
                </div>
                <div>
                    <h3>Restaurant --- {props.finalResult.Restaurant}</h3>
                </div>
                <div>
                    {props.fields.map((finaldishdata)=>{
                        return(
                            <>
                                  <h3>Dishes --- {finaldishdata.Dish}</h3>  
                                <h3>NoofServing --- {finaldishdata.Noofserving}</h3>
                            </>
                        )
                    })}
              
        

                </div>
                <input id="prebtn" type="submit" value="Previous"  onClick={() => lastpreeevclick()}  />
                <input id="nextbtn" type="submit" value="Next" onClick={() => lastnextClick()} />

            </div>
        </>
    )
}

export default Page4;