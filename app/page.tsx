'use client';
import { css } from '@/styled-system/css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// Components
import Button from '@/components/Button/Button';
// Homepage image
import HomepageImage from 'assets/home-pic.png';

const Home = () => {
  const router = useRouter();

  const handleButtonClick = () => router.push('/quiz');

  return (
    <div className={css({ textAlign: 'center' })}>
      <p className={css({ color: 'white', p: '4' })}>Do you have what it takes to become the React-Quiz master?</p>
      <Image className={css({ maxW: '700px', w: 'full', rounded: '10px' })} src={HomepageImage} alt='home-page' />
      <p className={css({ color: '#9F50AC', pt: '2', pb: '8', fontSize: '10px' })}>
        Image from Unsplash by Milad Fakurian
      </p>
      <Button text='Start Quiz' onClick={handleButtonClick} />
    </div>
  );
};

export default Home;
