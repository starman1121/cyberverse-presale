import { ethers, BigNumber } from "ethers";
import { addresses } from "../constants";
import { abi as ierc20Abi } from "../abi/IERC20.json";
import { abi as Presale } from "../abi/Presale.json";
import { clearPendingTxn, fetchPendingTxns } from "./PendingTxnsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAccountSuccess, getBalances } from "./AccountSlice";
import { error, info } from "../slices/MessagesSlice";
import { IActionValueAsyncThunk, IChangeApprovalAsyncThunk, IJsonRPCError } from "./interfaces";

interface IUAData {
  address: string;
  value?: string;
  approved: boolean;
  txHash: string | null;
  type: string | null;
}


export const changeDeposit = createAsyncThunk(
  "presale/changeDeposit",
  async ({ action, value, provider, address, networkID }: IActionValueAsyncThunk, { dispatch }) => {
    if (!provider) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    const signer = provider.getSigner();
    const presale = new ethers.Contract(addresses[networkID].PRESALE_ADDRESS as string, Presale, signer);

    let depositTx;
    let uaData: IUAData = {
      address: address,
      value: value,
      approved: true,
      txHash: null,
      type: null,
    };
    try {
      uaData.type = "presale";
      console.log("depositing......");
      console.log("value", ethers.utils.parseUnits(value, "ether"));
      console.log(address);
      console.log(presale);
      depositTx = await presale.deposit({value:ethers.utils.parseUnits(value, "ether"), gasLimit:3600000});
      const pendingTxnType = "depositing";
      uaData.txHash = depositTx.hash;
      dispatch(fetchPendingTxns({ txnHash: depositTx.hash, text: "Depositing...", type: pendingTxnType }));
      await depositTx.wait();
    } catch (e: unknown) {
      uaData.approved = false;
      const rpcError = e as IJsonRPCError;
      if (rpcError.code === -32603 && rpcError.message.indexOf("ds-math-sub-underflow") >= 0) {
        dispatch(
          error(
            "You may be trying to deposit more than your balance! Error code: 32603. Message: ds-math-sub-underflow",
          ),
        );
      } else {
        dispatch(error(rpcError.message));
      }
      return;
    } finally {
      if (depositTx) {
        // segmentUA(uaData);

        dispatch(clearPendingTxn(depositTx.hash));
      }
    }
    dispatch(getBalances({ address, networkID, provider }));
  },
);
