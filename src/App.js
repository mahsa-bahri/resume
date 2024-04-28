import data from "./data.json";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import FullPage from "./components/fullpagee.";

function App() {
  return (
    <div className="App">
      <div className="navigation" />
      <div className="fullpage first">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>

        <div className="icon-wrapper">
          {Object.keys(data.links).map((keys) => {
            return (
              <div className="icon">
                <SocialIcon url={data.links[keys]} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="fullpage second">
        <h3>{data.sections[0].title}</h3>
        <p>{data.sections[0].items[0].content}</p>
      </div>
      <div className="fullpage third">
        <h3>{data.sections[1].title}</h3>
        <div>
          {data.sections[1].items.map((item) => {
            return <div>
              
            </div>;
          })}
        </div>
        <p>{data.sections[1].items[0].content.title}</p>
      </div>
      <div className="fullpage" />
      <div className="fullpage" />
    </div>
  );
}

export default App;
