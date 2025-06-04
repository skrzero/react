import './App.css'
import Custombutton from './customButton';
import Taskitem from './taskitem';

function App() {
  const bibliotheque = [
    {
      id : 1,
      title: 'Faire le menage',
    },
    {
      id: 2,
      title: 'Cuisiner delicieux',
    },
    {
      id: 3,
      title: 'Ce reposer', 
    }
  ]; 
  return (
    <div>
      <Custombutton color="red" background="grey" text="hello"/>
      <Custombutton color="purple" background="white" text="button toto"/>

      {bibliotheque.map(function(list){
        return(
          <div>
            identifiant {list.id}
            titre  {list.title}
          </div>
        )
      })}
      
    </div>
      
  );
}

export default App
