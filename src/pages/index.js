import Head from 'next/head';
import MonacoEditor from '../components/MonacoEditor';

const Home = () => {
  return (
    <div>
      <Head>
        <title>VSOJ</title>
      </Head>
      <main>
        <MonacoEditor />
      </main>
    </div>
  );
};

export default Home;
