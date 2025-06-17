import { useEffect, useState } from "react";

function FormulaireMoney() {
    const [currencyData,setCurrencyData] = useState([])
    const [result,SetResult] = useState(null)

    useEffect(()=>{
        fetch("https://grippy.learn.pierre-godino.com/api/mock/react-converter")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
         setCurrencyData(data.rates)
        })
        .catch(()=>{
            SetResult("erreur de connection API")
        })
    },[])
  return (
    <>
      <div>
        <form>
          <label className="ammount">Ammount</label>
          <input type="text" className="Ammount" placeholder="ici.."  min={0} onChange={(e)=>setCurrencyData(e.target.value)}/>
          <label className="search">Search Currenty</label>
          <input type="text"className="Search Currenty" placeholder="ici..."/>
          <ul className="liste">
            {currencyData.map((currency,index)=>{
                return <li key={index}>{currency.description} {currency.code}</li>
            })}
          </ul>
          <div className="result">
            <p>resultat</p>
          </div>
        </form>      
      </div>
    </>
  );
}
export default FormulaireMoney;
