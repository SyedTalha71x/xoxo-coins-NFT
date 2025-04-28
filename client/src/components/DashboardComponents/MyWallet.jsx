import toast from "react-hot-toast";
import { FireApi } from "../../utils/FireApi";
import React, { useEffect } from "react";

const MyWallet = () => {
    const [formData, setFormData] = React.useState({
        account_balance:"",
        earning:"",
        spending:"",
        wallet_id:"",
    })
    const GetWalletDetails = async () => {
        try {
            const getRes = await FireApi("/wallet-details", "GET");
            console.log(getRes);
            setFormData({
                account_balance:getRes.account_balance,
                earning:getRes.earning,
                spending:getRes.spending,
                wallet_id:getRes.wallet_id
            })
        } catch (error) {
            console.log(error);
            toast.error(error.message || "Something went wrong");
        }
    };

    useEffect(() => {
        GetWalletDetails();
    }, [])
  return (
        <div className="col-span-1 space-y-4 ">
          <h2 className="text-xl font-semibold mb-4">My Wallet</h2>
          <div className="bg-zinc-900 rounded-xl p-4">
            <h2 className="text-sm text-center text-gray-400 mb-2">Your Balance</h2>
            <div className="text-md text-gray-300 text-center font-semibold mb-4">{formData?.account_balance}</div>

            <div className="flex mt-3 items-center gap-2 bg-black rounded-lg p-2 mb-6">
              {/* <img
                src={"/Icons-2.png"}
                alt="ETH"
                className="w-6 h-6 rounded-full"
              /> */}
              <span>XOXO Coin</span>
              <svg
                className="w-4 h-4 ml-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <p className="flex gap-3">Wallet Address: <p className="text-gray-400">{formData?.wallet_id}</p></p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={"/Icon.png"} alt="" />
                  </div>
                  <div className="flex flex-col gap-1 mt-7">
                    <div className="text-sm text-gray-400 mb-1">Earnings</div>
                    <div className="text-green-400">{formData?.earning}</div>
                  </div>

                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={"/Icon (1).png"} alt="" />
                  </div>
                  <div className="flex flex-col gap-1 mt-7">
                    <div className="text-sm text-gray-400 mb-1">Spendings</div>
                    <div className="text-red-400">{formData?.spending}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-24">
                <img src={"/Graph.png"} alt="" />
              </div>
              <div className="h-24">
                <img src={"/Graph (1).png"} alt="" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default MyWallet