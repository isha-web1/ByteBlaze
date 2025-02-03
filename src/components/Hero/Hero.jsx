import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className='text-5xl font-bold'>
            Welcome to
            <span className='bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient'>
              {' '}
              ByteBlaze
            </span>
          </h1>
          <p className='py-6'>
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          <div className="flex justify-center gap-4">
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ... p-3 rounded-sm">Get Started</button>
          <button className="bg-fuchsia-500 shadow-lg shadow-fuchsia-500/50 ... p-3 rounded-sm">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
