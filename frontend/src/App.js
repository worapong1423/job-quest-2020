import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input ,Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [firstname, setFirstname] = useState('Chuck');
  const [lastname, setLastname] = useState('Norris');
  const [amount, setAmount] = useState(5);
  const [dataApi, setDataApi] = useState(null);
  const [columns,setColumns] = useState([
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'joke',
      dataIndex: 'joke',
      key: 'joke',
    },
  ]);
  useEffect( () => {
    fecthAllJoke()
  },[]);
  const fecthAllJoke = () => {
    axios.get(`http://api.icndb.com/jokes/?firstName=${firstname}&&lastName=${lastname}`).then( response => 
    {
       setDataApi(response.data.value)
    })
    .catch(error => {
      return error
    });
  }
  const fecthJoke = () => {
    axios.get(`http://api.icndb.com/jokes/random/${amount}/?firstName=${firstname}&&lastName=${lastname}`).then(async response => 
    {
      // return response.data.value
      await setDataApi(response.data.value)
      console.log(dataApi)
    })
    .catch(error => {
      return error
    });
  }
  const clearData = ()=>{
    setDataApi(null)
  }
  return (
    <div className="container">
       <div className= "wrapper">
	   		<div className= "inputwrap">
				<p>Firstname</p><Input value={firstname} onChange={ (input) => setFirstname(input.target.value)} />
				<p>Lastname</p><Input value={lastname} onChange={ (input) => setLastname(input.target.value)} />
				<p>Amount Of Joke</p><Input type="number" value={amount} onChange={ (input) => setAmount(input.target.value)} />
			</div>
        	<div className="buttonwrap">
				<Button type="primary" className="button" onClick={fecthAllJoke}>Get All Joke</Button>
				<Button type="primary" className="button"onClick={fecthJoke}>Get  {!amount ? 0 : amount} Joke</Button>
				<Button type="danger" className="button" onClick={clearData}>Clear Joke</Button>
        	</div>
			<div className="table">
				<Table columns={columns} dataSource={dataApi} />
			</div>
      </div>
    </div>
  );
  
}

export default App;
