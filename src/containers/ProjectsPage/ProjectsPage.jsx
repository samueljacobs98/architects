import "./ProjectsPage.scss";
import cardData from "../../assets/data/cardData";
import Project from "../../components/Project/Project";
import useWindowSize from "../../assets/hooks/useWindowSize";
import PageHeading from "../../components/PageHeading/PageHeading";

const ProjectsPage = () => {
  const projectCardsJSX = cardData.map((card) => {
    return <Project key={card.id} data={card} />;
  });

  return (
    <div className="projects">
      {useWindowSize(768) && (
        <PageHeading
          heading={"Selected Projects"}
          spanText={"●ALL PROJECTS "}
          text={"/141"}
        />
      )}
      <div className="projects-container">{projectCardsJSX}</div>
    </div>
  );
};

export default ProjectsPage;
