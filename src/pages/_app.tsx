import { Analytics } from '@vercel/analytics/react';

import { LogsBufferContext } from 'contexts/LogsBufferContext';
import '../styles/globals.css';
import { LogsBuffer } from 'models/LogsBuffer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LogsBufferContext.Provider value={LogsBuffer}>
        <Component {...pageProps} />
      </LogsBufferContext.Provider>
      <Analytics />
    </>
  );
}

export default MyApp;
