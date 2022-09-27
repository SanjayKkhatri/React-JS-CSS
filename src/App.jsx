import logo from './logo.svg';
import './App.css';
import { Button, Alert, Table } from 'react-bootstrap';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
// import User from './User'
import { useEffect, useRef } from 'react';
import axios from 'axios';
function App() {

  

  let usingRef = useRef(null);

  function inputHandle() {
    console.log("called the ref");
    usingRef.current.value = "Sanjay";
    usingRef.current.style.color = "white";
    usingRef.current.style.backgroundColor = "black"
  }
  // let data = "Sanjay Kumar";
  // function parentAlert(data) {
  //   alert(`${data.email} <br /> ${data.name}`   );


  // useEffect(()=>{
  //   async function callApi() {
  //     const apiJason = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     console.log(callApi);
  //   } 
  // })

  // const users = [
  //   {     name: "Sanjay", email: "khatrisanjay095@gmail.com", contact: "1111"},
  //   {     name: "Talha", email: "khatritalha111@gmail.com", contact: "2222"},
  //   {     name: "Umair", email: "khatriumair056@gmail.com", contact: "3333"},
  //   {     name: "Noman", email: "khatrinoman088@gmail.com", contact: "4444"}
  // ]
  // const student = ["Sanjay", "Talha", "Ahsan", "Khalid"];
  // const students = [
  //   {
  //     name: "Sanjay", email: "khatrisanjay095@gmail.com", address: [
  //       { Hn: "10", city: "Karachi", country: "Pakistan" },
  //       { Hn: "24", city: "Hyderabad", country: "Pakistan" },
  //       { Hn: "30", city: "Mirpur", country: "Pakistan" },
  //       { Hn: "16", city: "Khipro", country: "Pakistan" }
  //     ]
  //   },
  //   {
  //     name: "Ahsan", email: "ahsanatd095@gmail.com", address: [
  //       { Hn: "11", city: "Karachi", country: "Pakistan" },
  //       { Hn: "22", city: "Hyderabad", country: "Pakistan" },
  //       { Hn: "32", city: "Mirpur", country: "Pakistan" },
  //       { Hn: "19", city: "Khipro", country: "Pakistan" }
  //     ]
  //   },
  //   {
  //     name: "Khalid", email: "khalidrajput095@gmail.com", address: [
  //       { Hn: "13", city: "Karachi", country: "Pakistan" },
  //       { Hn: "26", city: "Hyderabad", country: "Pakistan" },
  //       { Hn: "35", city: "Mirpur", country: "Pakistan" },
  //       { Hn: "14", city: "Khipro", country: "Pakistan" }
  //     ]
  //   },
  //   {
  //     name: "Sammad", email: "sammadrajput095@gmail.com", address: [
  //       { Hn: "16", city: "Karachi", country: "Pakistan" },
  //       { Hn: "27", city: "Hyderabad", country: "Pakistan" },
  //       { Hn: "33", city: "Mirpur", country: "Pakistan" },
  //       { Hn: "15", city: "Khipro", country: "Pakistan" }
  //     ]
  //   }
  // ]
  // student.map((items)=>{
  //   console.log("Hi my name is : ", items);
  // })
  // for(let i = 0; i < student.length; i++) {
  //   console.log("In the For Loop, my name is : ", student[i]);
  // }
  return (
    <div className="App">
      {/* <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>

      {
        students.map((data)=>
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.contact}</td>
        </tr>
        )
      }
      </table> */}

      {/* <h1>Making List with Bootstrap</h1>

       <Table striped bordered hover variant='dark'>
        <thead>

        
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>

        {
          students.map((items, i)=>
          items.contact === +923052739397 ?
          <tr key={i}>
            <td>{items.name}</td>
            <td>{items.email} </td>
            <td>{items.contact} </td>
          </tr>:null
          )
        }
        </thead>
       </Table> */}

      {/* <Table variant='dark' >
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </tbody>
        {
          students.map((item, i) =>
            <tbody>
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td> <Table variant='dark' striped>
                  <tbody>
                    {item.address.map((data, key) =>
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{data.Hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    )}
                  </tbody>
                  </Table>
                </td>
              </tr>
            </tbody>
          )

        }
      </Table> */}
      {/* {
        users.map((items, ind) => 
        <User data={items} />
         )

      } */}

      {/* <User /> */}
      {/* <h1>React Fragment</h1>
      <table>
        <tbody>
          <tr>
            <User />
          </tr>
        </tbody>
      </table> */}

      {/* <h1>Lifting State Up</h1>
      <User name={data} alert={parentAlert} /> */}

      {/* <User /> */}

<h1>Using useRef Hook</h1>
<input type="text" ref={usingRef} />
<button onClick={inputHandle}>Handle Input</button>


    </div>
  );
}

export default App;
