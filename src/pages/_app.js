import '@/styles/globals.css'
import { Inter } from 'next/font/google';
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '@/hooks/store/index';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const App = ({ Component, pageProps }) => {
  return (<>
    <Provider store={store}>
      <main className={inter.variable}>
        <Component {...pageProps} />
      </main>
    </Provider>
  </>);
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
