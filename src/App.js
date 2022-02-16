import { useEffect, useState } from "react";

const jsonData = [
  { key: "1", name: "Alex" },
  { key: "2", name: "Max" },
  { key: "3", name: "Rose" },
  { key: "4", name: "Valerie" },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 4000)
  },[])

  const renderData = () => {
    
    //value is what you iterate
    return jsonData.map((value) => {
      // this is a callback that return a component
      return (
        <div>
          <ul className="list-group">
            <li key={value.key} className="list-group-item">
              {value.name}
            </li>
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center">List of people</h1>
      {/* Ternary (If isLoading is true show, otherwise show*/}
      {isLoading ? <h2>The data is loading...</h2> : renderData()}
    </div>
  );
}

export default App;
