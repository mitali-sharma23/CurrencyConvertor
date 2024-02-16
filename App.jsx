import { useState } from 'react'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import Inputbox from './components/Inputbox';

function App() {
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [amount,setAmount] = useState(0);
  const [convertedamount,setConvertedamount] = useState(0);
  const currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(currencyinfo);
  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedamount);
    setConvertedamount(amount);
  }
  const convert = ()=>{
    setConvertedamount(amount*currencyinfo[to]);
  }
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}
    >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
              onSubmit={(e) => {
                  e.preventDefault();
                  convert()
                       
              }}
          >
            <div className="w-full mb-1">
              <Inputbox
              label="From"
              amount={amount}
              currencyoptions={options}
              selectCurrency={from}
              setCurrencychange={(currency)=>setFrom(currency)}
              setAmountchange={(amount)=>setAmount(amount)}/>
            </div>
            <div className="relative w-full h-0.5">
                  <button
                      type="button"
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                      onClick={swap}>
                       swap
                  </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
              label="To"
              amount={convertedamount}
              currencyoptions={options}
              selectCurrency={to}
              setCurrencychange={(currency)=>setTo(currency)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from} to {to}
            </button>
          </form>
          </div>
       </div>
    </div>  
  );
}

export default App;
