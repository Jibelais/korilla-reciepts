
import './App.css';
import receiptData from './receiptData';
import Receipts from './components/Receipts';
import Form from './components/Form';
import React, {useState} from 'react';



function App() {
  
      const [receipts, setReceipts] = useState(receiptData)
      // console.log(receiptData[0].person)

      const compareName = (name) => {

      const result = receiptData.filter(receipt =>  name === receipt.person)
       setReceipts(result)

      }
    
  return (

    <div>
       <h1>Korilla Receipts</h1>
       <Form  compareName = {compareName}/>
       <section className = "container">
       <Receipts receipts={receipts}/>
       </section>
    </div>
  );
}

export default App;
