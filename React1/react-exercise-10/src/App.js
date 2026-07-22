import officeImage from "./office.jfif";
import "./App.css";

function App() {

  const office = {
    name: "Sky Tower Workspace",
    rent: 55000,
    address: "Hyderabad"
  };

  const officeSpaces = [
    {
      name: "Sky Tower Workspace",
      rent: 55000,
      address: "Hyderabad"
    },
    {
      name: "Tech Park Office",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Business Hub",
      rent: 45000,
      address: "Chennai"
    },
    {
      name: "Corporate Plaza",
      rent: 95000,
      address: "Mumbai"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="500"
        height="300"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> ₹{office.rent}
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeSpaces.map((item, index) => (
          <div className="card" key={index}>

            <h3>{item.name}</h3>

            <p
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              Rent : ₹{item.rent}
            </p>

            <p>Address : {item.address}</p>

          </div>
        ))
      }

    </div>
  );
}

export default App;