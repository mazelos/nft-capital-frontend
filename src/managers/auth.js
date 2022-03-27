import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import web3 from 'web3';

const formatBalance = wei => parseFloat(web3.utils.fromWei(wei, 'ether'));

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
}

function useProvideAuth() {
  const { connector, library, chainId, account, active } = useWeb3React();
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(0);
  const [tokens, setTokens] = useState([]);

  const updateBalances = useCallback(async () => {
    try {
      const res = await axios.get(`https://api.covalenthq.com/v1/${chainId}/address/${account}/balances_v2/?nft=false&no-nft-fetch=false&key=ckey_d08af29fee2e462481eeeaeaa6e`);
      if (!res?.data?.data) return;
      const { items: tokensData } = res.data.data;
      const [avaxData] = tokensData.splice(0, 1);
      setBalance(formatBalance(avaxData.balance));
      setTokens(tokensData.map(t=> ({ name: t.contract_ticker_symbol, address: t.contract_address, balance: formatBalance(t.balance) })));
    } catch (error) {
      console.log(error, 'dsdsds');
    }
  }, [chainId]);

  useEffect(() => {
    if (active) {
      toast.success('Coinbase Wallet connected');
      setConnected(true);
      updateBalances();
    }
  }, [active, updateBalances]);

  return {
    connected,
    balance,
    address: account,
    tokens,
  }
}