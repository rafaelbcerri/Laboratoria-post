import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import * as PostsActions from "../actions/postsActions.js"
import store from '../store.js';
import Dropdown from "../components/dropdown.jsx";
import PostCardList from "../components/postCardList.jsx";
import EditCard from "../components/editCard.jsx";

@connect((store) =>{
  return {
    userId: store.posts.userId,
    error: store.posts.error,
    posts: store.posts.posts,
    newPost: store.posts.newPost
  };
})
class Feed extends React.Component {
  constructor(props){
    super(props);

    this.handleNewPostText = this.handleNewPostText.bind(this);
    this.handleNewPostType = this.handleNewPostType.bind(this);
    this.handleNewPostClick = this.handleNewPostClick.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  componentDidMount() {
    let params = (new URL(document.location)).searchParams;
    let userId = params.get("userId");
    this.props.dispatch(PostsActions.getPosts(userId));
  }
  handleNewPostText(text) {
    this.props.dispatch(PostsActions.handleNewPostTextEdition(text));
  }
  handleNewPostType(type) {
    this.props.dispatch(PostsActions.handleNewPostTypeEdition(type));
  }
  handleFilterChange(event) {
    const type = event.target.value;
    this.props.dispatch(PostsActions.handleFilterChange(this.props.userId, type));
  }
  handleNewPostClick() {
    const userId = this.props.userId;
    this.props.dispatch(PostsActions.createPost(userId, this.props.newPost));
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col m6 offset-m3">
            <EditCard editCardTextId="postCardText" editCardId="postCard" textValue={this.props.newPost.text} onChangeText={this.handleNewPostText} onChangeDropdown={this.handleNewPostType} onClick={this.handleNewPostClick } buttonText="Publicar"/>
          </div>
        </div>
        <div className="row">
          <div className="col m2 offset-m7">
            <Dropdown classes="col s12" dropdownId="filter" options={[{value: "public", text: "Público"}, {value: "friends", text: "Amigos"}]} label="Filtro" onChange={this.handleFilterChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col m6 offset-m3">
            <PostCardList {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}



ReactDOM.render(<Provider store={store}><Feed /></Provider>, document.getElementById("root"));
