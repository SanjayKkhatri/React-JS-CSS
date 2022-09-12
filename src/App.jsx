import logo from './logo.svg';
import './App.css';
import { Button, Alert, Table } from 'react-bootstrap';

function App() {
  // const student = ["Sanjay", "Talha", "Ahsan", "Khalid"];
  const students = [
    {
      name: "Sanjay", email: "khatrisanjay095@gmail.com", address: [
        { Hn: "10", city: "Karachi", country: "Pakistan" },
        { Hn: "24", city: "Hyderabad", country: "Pakistan" },
        { Hn: "30", city: "Mirpur", country: "Pakistan" },
        { Hn: "16", city: "Khipro", country: "Pakistan" }
      ]
    },
    {
      name: "Ahsan", email: "ahsanatd095@gmail.com", address: [
        { Hn: "11", city: "Karachi", country: "Pakistan" },
        { Hn: "22", city: "Hyderabad", country: "Pakistan" },
        { Hn: "32", city: "Mirpur", country: "Pakistan" },
        { Hn: "19", city: "Khipro", country: "Pakistan" }
      ]
    },
    {
      name: "Khalid", email: "khalidrajput095@gmail.com", address: [
        { Hn: "13", city: "Karachi", country: "Pakistan" },
        { Hn: "26", city: "Hyderabad", country: "Pakistan" },
        { Hn: "35", city: "Mirpur", country: "Pakistan" },
        { Hn: "14", city: "Khipro", country: "Pakistan" }
      ]
    },
    {
      name: "Sammad", email: "sammadrajput095@gmail.com", address: [
        { Hn: "16", city: "Karachi", country: "Pakistan" },
        { Hn: "27", city: "Hyderabad", country: "Pakistan" },
        { Hn: "33", city: "Mirpur", country: "Pakistan" },
        { Hn: "15", city: "Khipro", country: "Pakistan" }
      ]
    }
  ]
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

      <Table variant='dark' >
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
      </Table>

    </div>
  );
}

export default App;
