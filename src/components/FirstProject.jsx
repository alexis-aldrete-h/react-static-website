import "./FirstProject.css";
import InfoButtonsCard from "./InfoButtonsCard";

function FirstProject() {
  return (
    <div className="first-project">
      <InfoButtonsCard
        title="Transforming enterprise with AI & automation."
        content="We are a multi-strategy technology transformation & investment holding company, focused on revolutionizing traditional industries with technology"
        button1="Products"
        button2="Portfolio"
      />
    </div>
  );
}

export default FirstProject;
