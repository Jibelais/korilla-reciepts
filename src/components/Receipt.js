
import {useState} from 'react'


const Receipt = ({receipt}) =>{
   
    let paid = "true"
    if (receipt.paid == false){
         paid = "false"
    }   

const [paidStat, setPaidStat] = useState(paid)   

 function toggle() {
       
        if (paidStat === 'true'){
            setPaidStat("false")
        }else{
            setPaidStat("true")
        }
       
    }



    return(
      
            <div className = 'box'>
                <p>{receipt.person}</p>
                <p>{receipt.order.main}</p>
                <p>{receipt.order.protein}</p>
                <p>{receipt.order.rice}</p>
                <p>{receipt.order.sauce}</p>
                <p>{receipt.order.drink}</p>
                <p>{receipt.order.cost}</p>
                <p onClick = {toggle}>{paidStat}</p> 
            </div>
            
   
    )

}

export default Receipt