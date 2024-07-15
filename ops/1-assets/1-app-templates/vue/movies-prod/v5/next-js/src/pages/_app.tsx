import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../styles/global.scss'
import "sweetalert2/src/sweetalert2.scss";

import AppLayout from "@/layouts/App";
import Frontend from "@/layouts/Frontend";
import Blank from '@/layouts/blank';
import Merchandise from '@/layouts/MerchandiseLayout';

//store
import { Provider } from 'react-redux';
//reducer
import { wrapperStore } from '@/store'

const layouts: any = {
  "Blank": Blank,
  "Frontend": Frontend,
  "Merchandise": Merchandise
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout: string
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const layoutName = layouts[Component.layout] || layouts['Frontend']
  const Layout = layoutName || ((children: any) => <>{children}</>);
  const { store, props } = wrapperStore.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      {/* <SSRProvider> */}
      <AppLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppLayout>
      {/* </SSRProvider> */}
    </Provider>
  )
}
