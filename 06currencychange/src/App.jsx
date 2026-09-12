
import { useState } from "react"
import usecurrncyinfo from "./hooks/usecurrencyinfo"
import { InputBox } from "./components/index.js"

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedamount, setconvertedamount] = useState(0)

  const currencyinfo = usecurrncyinfo(from)

  const options = Object.keys(currencyinfo)

  const swap = () => {
    setfrom(to)
    setto(from)
    setamount(convertedamount)
    setconvertedamount(amount)
  }

  const convert = () => {
    setconvertedamount(amount * currencyinfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4695995/pexels-photo-4695995.jpeg)",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >

            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setfrom(currency)}
                onAmountChange={(amount) => setamount(amount)}
                selectedCurrency={from}
              />
            </div>

            <div className="relative w-full h-0">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Swap
              </button>
            </div>

            <div className="w-full mb-1">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setto(currency)}
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-4"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default App
