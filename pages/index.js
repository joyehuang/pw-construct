import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col h-screen p-20">
      <div className="flex-grow">
        <h1 className="text-7xl font-light mb-8">Welcome.</h1>
        <div className="border-l-2 border-yellow-400 pl-4 max-w-xl">
        <p className="text-xl mb-4">My name is Joye Huang, I'm a first-year university student based in Melbourne.</p>  
        <p className="text-xl mb-4">I'm majoring in Computing and Software Systems and have a passion for programming and building innovative applications.</p>
        <p className="text-xl">In my spare time, I enjoy playing the cello and exploring the world of classical music.</p>
        </div>
      </div>
        <div className="absolute top-20 right-20 w-64">
          <h2 className="text-2xl font-light mb-4">Projects</h2>
          <div className="border-t-2 border-yellow-400 pt-4">
            <ul className="space-y-2">
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
              <li>Project 4</li>
              <li>Project 5</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}