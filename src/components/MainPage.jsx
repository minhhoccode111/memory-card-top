import Setting from "./Setting";
import Playing from "./Playing";
import Footer from "./Footer";

const MainPage = ({ isSetting, setIsSetting }) => {
  return (
    <>
      {isSetting ? <Setting /> : <Playing />}
      <Footer />
    </>
  );
};

export default MainPage;
