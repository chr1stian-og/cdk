import React, { Component } from "react";
import axios from "axios";
import "../input-style.css";

const api = axios.create({ baseURL: "http://localhost:3001" });

class Display extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const resp = api
      .get("/getData")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const listItems = this.state.data.map((myList) => <li>{myList.Nome}</li>);
    const listItems2 = this.state.data.map((myList) => (
      <li>{myList.Apelido}</li>
    ));
    const listItems3 = this.state.data.map((myList) => (
      <li>{myList.Ocupacao}</li>
    ));
    return (
      <div>
        <script src="input-script.js"></script>
        <div className="cont" id="blur">
          <div className="content">
            <h1 className="text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">
              Registro
            </h1>
            <div className="grid grid-cols-3">
              <div>
                <h1 className="text-3xl text-pink-900">Nomes</h1>
                <ul className="m-2">{listItems}</ul>
              </div>
              <div>
                <h1 className="text-3xl text-pink-900">Apelido</h1>
                <ul className="m-2">{listItems2}</ul>
              </div>
              <div>
                <h1 className="text-3xl text-pink-900">Ocupacao</h1>
                <ul className="m-2">{listItems3}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
