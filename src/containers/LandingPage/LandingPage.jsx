import "./LandingPage.scss";
import LandingPageTitle from "../../components/LandingPageTitle/LandingPageTitle";
import DetailsBox from "../../components/DetailsBox/DetailsBox";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <LandingPageTitle />
      <DetailsBox />
    </div>
  );
};

export default LandingPage;
