import { useEffect, useState } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import injected from './injected';
import { useWeb3React } from '@web3-react/core';

export default function Web3Provider({ children }) {
  return (
    <Web3ReactProvider getLibrary={(provider) => new Web3(provider)}>
      <Provider>
        {children}
      </Provider>
    </Web3ReactProvider>
  )
}

function Provider({ children }) {
  const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    injected
      .isAuthorized()
      .then((isAuthorized) => {
        setLoaded(true)
        if (isAuthorized && !networkActive && !networkError) {
          activateNetwork(injected)
        }
      })
      .catch(() => {
        setLoaded(true)
      })
  }, [activateNetwork, networkActive, networkError])

  /* if (loaded) {
    return children
  }
  return <>Loading</> */
  return children
}