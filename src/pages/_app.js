import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import Web3Provider from '../components/connectors/Provider';
import { AuthProvider } from '../managers/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/globals.css';

import Navbar from '../components/Navbar';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Avax Project" />
      </Head>

      <Web3Provider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Navbar />
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              pauseOnFocusLoss={false}
              hideProgressBar={true}
            />
          </AuthProvider>
        </QueryClientProvider>
      </Web3Provider>
    </>
  )
}

export default MyApp
