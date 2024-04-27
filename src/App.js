import data from './data.json'
import './App.css';
import { SocialIcon } from 'react-social-icons';


function App() {
  return (
    <div className="App">
      <div className='navigation'/>
      <div className='fullpage'>
        <h1>
          {data.title}
        </h1>
        <h2>
          {data.subtitle}
        </h2>
        <div className='icon-wrapper'>
        {
          Object.keys(data.links).map((keys)=>{
            return <SocialIcon url={data.links[keys]}/>;
          })
        }
        </div>
        <h3>
          {data.sections[0].title}
        </h3>
        <p>
          {data.sections[0].items[0].content}
        </p>
      </div>
      <div className='fullpage'/>
      <div className='fullpage'/>

    </div>
  );
}

export default App;
