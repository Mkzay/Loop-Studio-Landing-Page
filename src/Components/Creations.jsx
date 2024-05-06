const Creations = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 z-50 pb-20 md:px-20">
      <div className="flex items-center justify-center md:justify-between w-full">
        <h1 className="text-3xl text-black font-light font-josefin uppercase">
          our creations
        </h1>
        <button className="hidden md:block text-black uppercase font-josefin font-normal border border-black py-2 px-8 hover:text-white hover:bg-black hover:transition-colors cursor-pointer">
          see all
        </button>
      </div>
      <div className="flex flex-col gap-6 p-5 md:flex-row md:flex-wrap">
        <div>
          <img
            className="md:hidden"
            src="Images/mobile/image-deep-earth.jpg"
            alt="deep-earth-image"
          />
          <img
            className="hidden md:block"
            src="Images/desktop/image-deep-earth.jpg"
            alt="deep-earth-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[92rem] left-10 md:hidden lg:block lg:left-32 lg:top-[108rem] lg:text-2xl">
            deep <br></br> earth
          </p>
        </div>
        <div>
          <img
            className="md:hidden"
            src="Images/mobile/image-night-arcade.jpg"
            alt="night-arcade-image"
          />
          <img
            className="hidden md:block"
            src="Images/desktop/image-night-arcade.jpg"
            alt="night-arcade-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[102rem] left-10 md:hidden lg:block lg:left-[26rem] lg:top-[108rem] lg:text-2xl">
            night <br></br> arcade
          </p>
        </div>
        <div>
          <img
            className="md:hidden"
            src="Images/mobile/image-soccer-team.jpg"
            alt="soccer-team-image"
          />
          <img
            className="hidden md:block"
            src="Images/desktop/image-soccer-team.jpg"
            alt="soccer-team-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[110rem] left-10 md:hidden lg:block lg:left-[43rem] lg:top-[108rem] lg:text-2xl">
            soccer <br></br> team vr
          </p>
        </div>
        <div>
          <img
            className="md:hidden"
            src="Images/mobile/image-grid.jpg"
            alt="the-grid-image"
          />
          <img
            className="hidden md:block"
            src="Images/desktop/image-grid.jpg"
            alt="the-grid-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[120rem] left-10 md:hidden lg:block lg:left-[61rem] lg:top-[108rem] lg:text-2xl">
            the <br></br> grid
          </p>
        </div>
        <div>
          <img
            className="md:hidden"
            src="Images/mobile/image-from-above.jpg"
            alt="from-above-image"
          />
          <img
            className="hidden md:block"
            src="Images/desktop/image-from-above.jpg"
            alt="from-above-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[129rem] left-10 md:hidden lg:block lg:left-32 lg:top-[138rem] lg:text-2xl">
            from up <br></br> above vr
          </p>
        </div>
        <div>
          <img
            className="md:hidden"
            src="Images/mobile/image-pocket-borealis.jpg"
            alt="from-above-image"
          />
          <img
            className="hidden md:block"
            src="Images/desktop/image-pocket-borealis.jpg"
            alt="pocket-borealis-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[138rem] left-10 md:hidden lg:block lg:left-[26rem] lg:top-[138rem] lg:text-2xl">
            pocket <br></br> borealis
          </p>
        </div>
        <div>
          <img
            className="md:hidden"
            src="Images/mobile/image-curiosity.jpg"
            alt="curiosity-image"
          />
          <img
            className="hidden md:block"
            src="Images/desktop/image-curiosity.jpg"
            alt="curiosity-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[147rem] left-10 md:hidden lg:block lg:left-[43rem] lg:top-[138rem] lg:text-2xl">
            the <br></br> curiosity
          </p>
        </div>
        <div>
          <img
            className="md:hidden"
            src="Images/mobile/image-fisheye.jpg"
            alt="curiosity-image"
          />
          <img
            className="hidden md:block"
            src="Images/desktop/image-fisheye.jpg"
            alt="fisheye-image"
          />
          <p className="uppercase text-white text-xl font-light font-josefin absolute top-[156rem] left-10 md:hidden lg:block lg:left-[61rem] lg:top-[138rem] lg:text-2xl">
            make it <br></br> fisheye
          </p>
        </div>
      </div>
      <button className="md:hidden text-black uppercase font-josefin font-normal border border-black py-2 px-8 hover:text-white hover:bg-black cursor-pointer">
        see all
      </button>
    </div>
  );
};

export default Creations;
