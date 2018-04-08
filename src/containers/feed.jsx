import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "../components/dropdown.jsx";
import PostCard from "../components/postCard.jsx";
import EditCard from "../components/editCard.jsx";

class Feed extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col m6 offset-m3">
            <EditCard editCardId="postCard" textValue=""/>
          </div>
        </div>
        <div className="row">
          <div className="col m2 offset-m7">
            <Dropdown classes="col s12" dropdownId="filter" options={[{value: "friends", text: "Amigos"}, {value: "public", text: "Público"}]} label="Filtro" />
          </div>
        </div>
        <div className="row">
          <div className="col m6 offset-m3">
            <PostCard text="Oi tudo bem com você?"/>
            <PostCard text="Oi tudo bem com você?"/>
            <PostCard text="Oi tudo bem com você?"/>
            <PostCard text="Oi tudo bem com você?"/>
            <PostCard text="Oi tudo bem com você?"/>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Feed />, document.getElementById("root"));
