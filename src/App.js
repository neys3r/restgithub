import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [keyword, setKeybord] = useState("");

  const fetchData = () => {
    // Llamada al API REST
    const url = `https://api.github.com/search/repositories?q=${keyword}`;
    fetch(url)
    .then((response)=> response.json())
    .then((responseData) => {
      setData(responseData.items);
    })

  }
  const handleChange = (e) => {
    setKeybord(e.target.value);
  }

  const tableRows = data.map((item, index)=> 
    <tr key={index}>
      <td>{item.full_name}</td>
      <td><a href={item.html_url}>{item.html_url}</a></td>
      </tr>
  );

  return (
    <div className="App">
      <input type='text' onChange={handleChange}/>
      <button onClick={fetchData} value={keyword}>
        Get Data
        </button>
        <table>
          <tbody>{tableRows}</tbody>
        </table>
    </div>
  );
}

export default App;
