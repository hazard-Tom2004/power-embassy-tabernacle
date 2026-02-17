import type { AppProps } from 'next/app';
import '../index.css';
import Layout from '../App';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
