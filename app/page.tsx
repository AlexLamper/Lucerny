import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alex Page',
  description: 'Description of Alex Page',
}

const HomePage = () => {

  return (
    <div>
      <div className="w-100 m-10 rounded-lg" style={{ backgroundImage: 'url(/images/header-bg3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.9' }}>
        <div className="relative h-48 overflow-hidden rounded-lg">
          <div className="absolute inset-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">My Blog Site</h1>
            <p className="text-lg md:text-xl">Test Subtitle</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10 pb-10">
        <h1>text</h1>
      </div>
    </div>
  );
};

export default HomePage;
