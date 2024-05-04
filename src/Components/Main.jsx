const Main = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="w-full lg:hidden"
        src="Images/mobile/image-hero.jpg"
        alt="hero-image"
      />
      <img
        className="w-full hidden lg:flex"
        src="Images/desktop/image-hero.jpg"
        alt="hero-image"
      />
      <div className="absolute border-2 border-white w-11/12 py-10 px-12 flex items-center justify-center lg:px-14 lg:w-4/12 lg:left-20">
        <h1 className="text-4xl text-white font-light font-josefin uppercase">immersive experiences that deliver</h1>
      </div>
    </div>
  );
};

export default Main;
