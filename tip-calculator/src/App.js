import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";
import Tip from "./Tip";
import { useState } from "react";
function App() {
  const [billAmount , setBillAmount]= useState(0);
  const [myLikingPercent, setMyLikingPercent]= useState(0)
  const [friendsLikingPercent, setFriendsLikingPercent]= useState(0);
   const [tip,setTip]= useState(0)
   const [totalAmount, setTotalAmount]= useState(0);
  function handleCalcTip(){
    if(billAmount==='0'&&myLikingPercent===0&&friendsLikingPercent===0)
      return 
    const calculatedTip =
      ((friendsLikingPercent / 100) * Number(billAmount) +
      (myLikingPercent / 100) * Number(billAmount))/2;
  setTip(calculatedTip);
  const calculatedTotal = Number(billAmount) + calculatedTip;

  setTotalAmount(calculatedTotal);

    }
    function handleFormSubmit(e){
      e.preventDefault();
      handleCalcTip()
      setFriendsLikingPercent(0)
 setMyLikingPercent(0)
 setBillAmount(0)
          }
  return (
    <div className="App">
      <Header/>
<Form setBillAmount={setBillAmount} setMyLikingPercent={setMyLikingPercent} 
setFriendsLikingPercent={setFriendsLikingPercent}
 billAmount={billAmount}  myLikingPercent={myLikingPercent} 
 friendsLikingPercent={friendsLikingPercent} onCalcTip={handleFormSubmit}/>
     <Tip tip={tip} totalAmount={totalAmount}/> 
      <Footer/>
    </div>
  );
}

export default App;
