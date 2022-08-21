import { Footer } from './Footer';

export const Main = () => {
  return (
    <main className="flex h-[calc(200vh_-_80px)] w-screen flex-col items-center bg-green-500">
      <h1 className="my-5 text-4xl font-black uppercase text-white">Main</h1>
      <Footer />
    </main>
  );
};
