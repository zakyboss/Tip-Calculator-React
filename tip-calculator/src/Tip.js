import './index.css';
export default function Tip({tip , totalAmount}){
if(totalAmount===0){
return null
    }else {

    
    return (
        <div className='tipContainer'>
            <span className='tipStats'><em>{`Your pay $${Math.floor(totalAmount)}($${Math.floor(totalAmount)}+$${Math.floor(tip)} tip)`}</em></span>
        </div>
    )
    }
}