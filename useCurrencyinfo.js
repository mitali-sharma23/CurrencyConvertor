import { useState,useEffect } from "react";
function useCurrencyinfo(currency){                           //custom hook
    const [data,setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(response=>response.json())
        .then(res=>setdata(res[currency]))
    },[currency])
    return data;
}
export default useCurrencyinfo;