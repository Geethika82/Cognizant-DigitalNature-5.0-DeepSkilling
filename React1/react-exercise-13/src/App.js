import React from "react";
import "./App.css";

function App() {
  const books = [
    { name: "Master React", price: 670 },
    { name: "Deep Dive into Angular 11", price: 800 },
    { name: "Mongo Essentials", price: 450 }
  ];

  return (
    <div className="container">

      {/* Course Details */}
      <div className="box">
        <h2>Course Details</h2>

        <h3>Angular</h3>
        <p>4/5/2021</p>

        <h3>React</h3>
        <p>6/3/2021</p>
      </div>

      {/* Book Details */}
      <div className="box">
        <h2>Book Details</h2>

        {books.map((book, index) => (
          <div key={index}>
            <h4>{book.name}</h4>
            <p>{book.price}</p>
          </div>
        ))}
      </div>

      {/* Blog Details */}
      <div className="box">
        <h2>Blog Details</h2>

        <h3>React Learning</h3>
        <h5>Stephen Biz</h5>
        <p>Welcome to learning React!</p>

        <h3>Installation</h3>
        <h5>Schwedenier</h5>
        <p>You can install React from npm.</p>
      </div>

    </div>
  );
}

export default App;