import Receipt from "./Receipt"

const Receipts = (props)=> {



 
    return props.receipts.map((ele, index) =>{

        
       return (
         <div>
             <Receipt receipt = {ele} 
                      key = {index} />
            
        </div>
       )

       
    })
    

    // return (

    //     <div>

    //         <Receipt />

    //         <p>{props.receipts}</p>
            
    //         {/* <p>{props.person}</p>
    //         <p>{props.order.main}</p>
    //         <p>{props.order.protein}</p>
    //         <p>{props.order.rice}</p>
    //         <p>{props.order.sauce}</p>
    //         <p>{props.order.drink}</p>
    //         <p>{props.order.cost}</p>
    //         <p>{props.paid}</p> */}

         
    //     </div>
    // )

}

export default Receipts