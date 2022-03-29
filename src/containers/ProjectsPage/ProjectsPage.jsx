import "./ProjectsPage.scss";
import cardData from "../../assets/data/cardData";
import Project from "../../components/Project/Project";

const ProjectsPage = () => {
  const projectCardsJSX = cardData.map((card) => {
    return <Project key={card.id} data={card} />;
  });

  return <div className="projects">{projectCardsJSX}</div>;
};

export default ProjectsPage;
