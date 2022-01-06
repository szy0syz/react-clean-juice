import Header from '@components/Header';
import TextContainer from '@components/TextContainer';
import BottleContainer from '@components/BottleContainer';
import LeafContainer from '@components/LeafContainer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TextContainer />
        <BottleContainer />
        <LeafContainer />
      </main>
    </>
  );
}
