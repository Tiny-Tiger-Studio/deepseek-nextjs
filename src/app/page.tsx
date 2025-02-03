import type { NextPage } from 'next';
import DeepSeekForm from '@/components/DeepSeekForm';

const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <DeepSeekForm />
    </div>
  );
};

export default Home;
