import './App.css';
import imgsrc from './Images/image1.jpg';
import DescriptionContent from './DescriptionContent'


const concepts = [
  {
    title : "Components",
    image : imgsrc,
    description : 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title : "State",
    image : imgsrc,
    description : 'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title : "Events",
    image :imgsrc,
    description : 'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];
function App() {
  return (
    <>
    <div className='App'> 
    <h1>Assignment 1</h1>
    <img src={imgsrc} className='App-logo'/>
    <div className='Desc'>
    {
        concepts.map(function(e) {
          return <DescriptionContent image={e.image} title={e.title} description={e.description}/> 
          
        })
    }     
    </div>
  </div>

    </>
  );
}

export default App;
