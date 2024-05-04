const Creations = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 z-50 pb-20 lg:px-20">
      <div className="flex items-center justify-center lg:justify-between w-full">
        <h1 className="text-3xl text-black font-light font-josefin uppercase">
          our creations
        </h1>
        <button className="hidden lg:block text-black uppercase font-josefin font-normal border border-black py-2 px-8 hover:text-white hover:bg-black hover:transition-colors cursor-pointer">
          see all
        </button>
      </div>
      <div className="flex flex-col gap-6 p-5 lg:flex-row">
        <div>
          <img
            src="Images/mobile/image-deep-earth.jpg"
            alt="deep-earth-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[92rem] left-10">
            deep <br></br> earth
          </p>
        </div>
        <div>
          <img
            src="Images/mobile/image-night-arcade.jpg"
            alt="deep-earth-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[102rem] left-10">
            night <br></br> arcade
          </p>
        </div>
        <div>
          <img
            src="Images/mobile/image-soccer-team.jpg"
            alt="deep-earth-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[110rem] left-10">
            soccer <br></br> team vr
          </p>
        </div>
      </div>
      <button className="lg:hidden text-black uppercase font-josefin font-normal border border-black py-2 px-8 hover:text-white hover:bg-black cursor-pointer">
        see all
      </button>
    </div>
  );
};

export default Creations;
