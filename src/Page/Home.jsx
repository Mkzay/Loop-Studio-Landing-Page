import Creations from "../Components/Creations";
import Main from "../Components/Main";
import Section from "../Components/Section";

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <Main />
      <Section />
      <Creations />
    </div>
  );
};

export default Home;
