import type { NextPage } from 'next';
import RenderThree from '../components/RenderThree';

const Home: NextPage = () => {
  return (
    <main className='absolute top-0 left-0 h-screen w-full bg-black'>
      <RenderThree />
    </main>
  );
};

export default Home;
