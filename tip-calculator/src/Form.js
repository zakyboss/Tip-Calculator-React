import './index.css';
export default function Form ({setBillAmount,setMyLikingPercent,setFriendsLikingPercent, billAmount, myLikingPercent,friendsLikingPercent, onCalcTip}){
    return (
        <div className='formContainer'>
        <form onSubmit={onCalcTip}>
            <h2>Kindly fill in Below 😀</h2>
            <label>How much Was The bill</label>
              <input type='text' value ={billAmount} onChange={(e)=>setBillAmount(e.target.value)}/> 
              <br/>
            
            <Select label='How did you like the service' value={myLikingPercent} onChange={setMyLikingPercent}/>
            <Select label='How did your friend like the service' value={friendsLikingPercent} onChange={setFriendsLikingPercent}/>
                  <button type='submit'>submit</button>
        </form>
        </div>
    )
}
function Select({ label, value, onChange }) {
    return (
      <>
        <label>{label}</label>
        <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was Okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing(20%)</option>
        </select>
      </>
    );
  }