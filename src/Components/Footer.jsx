const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-16 px-10 text-white font-alata w-full bg-black -z-50 md:flex-row md:justify-between md:px-36">
      <div className="flex flex-col items-center gap-5 md:items-start">
        <h1 className="font-normal text-white text-3xl">loopstudios</h1>
        <ul className="flex flex-col items-center gap-5 font-normal text-base md:flex-row lg:gap-8">
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">About</li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">Careers</li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">Events</li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">Products</li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">Support</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4 md:items-end">
        <ul className="flex gap-5">
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">
            <img src="Images/icon-facebook.svg" alt="facebook icon" />
          </li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">
            <img src="Images/icon-twitter.svg" alt="twitter icon" />
          </li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">
            <img src="Images/icon-pinterest.svg" alt="pinterest icon" />
          </li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">
            <img src="Images/icon-instagram.svg" alt="instagram icon" />
          </li>
        </ul>
        <h2 className="text-darkgray text-sm">
          © 2021 Loopstudios. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
