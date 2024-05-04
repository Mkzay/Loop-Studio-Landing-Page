const Section = () => {
  return (
    <div className="flex flex-col p-5 gap-10 lg:flex-row lg:px-20">
      <img
        className="lg:hidden"
        src="/Images/mobile/image-interactive.jpg"
        alt="interactive-image"
      />
      <img
        className="hidden lg:flex"
        src="/Images/desktop/image-interactive.jpg"
        alt="interactive-image"
      />
      <div className="flex flex-col items-center justify-center gap-5 text-center lg:absolute lg:top-[55rem] lg:right-44 lg:h-4/6 lg:w-5/12 lg:py-10 lg:px-5 lg:bg-white">
        <h1 className="text-3xl text-black font-light font-josefin uppercase">
          the leader in interactive vr
        </h1>
        <p className="text-base tracking-wider text-darkgray font-normal font-alata">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Section;
