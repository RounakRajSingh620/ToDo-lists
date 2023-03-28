
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';



function App() {  
  const onDelete=()=>{
    console.log("Todo Deleted","todo")
  }          
  let todos = [
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "You need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to ghat",
      desc: "You need to go to the market to get this job done3"
    }
  ]
  return (
    <>
      <Header title="My Todos list" searchBar={false} />
      <Todos todos={todos}  onDelete={onDelete} />
     
      <Footer />

    </>
  );
}

export default App;
