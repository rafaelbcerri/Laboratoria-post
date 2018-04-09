import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import * as PostsActions from "../actions/postsActions.js"
import PostCard from "../components/postCard.jsx";
import EditCard from "../components/editCard.jsx";

class PostCardList extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
    this.handlePostEditionText = this.handlePostEditionText.bind(this);
    this.handlePostEditionType = this.handlePostEditionType.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handlePostEdit = this.handlePostEdit.bind(this);
    this.handlePostEditionClick = this.handlePostEditionClick.bind(this);
  }
  handlePostEditionText(text, postId) {
    this.props.dispatch(PostsActions.handlePostEditionText(text, postId, this.props.posts));
  }
  handlePostEditionType(type, postId) {
    this.props.dispatch(PostsActions.handlePostEditionType(type, postId, this.props.posts));
  }
  handleNewPostClick() {
    const userId = this.props.userId;
    this.props.dispatch(PostsActions.createPost(userId, this.props.newPost));
  }
  handlePostDelete(postId) {
    this.props.dispatch(PostsActions.deletePost(this.props.userId, postId, this.props.posts));
  }
  handlePostEdit(postId) {
    this.props.dispatch(PostsActions.handlePostEdit(postId, this.props.posts));
  }
  handlePostEditionClick(postId) {
    this.props.dispatch(PostsActions.handlePostEdition(this.props.userId, postId, this.props.posts));
  }
  renderList() {
    const posts = this.props.posts;
    let postList = [];
    for(var key in posts) {
      if(posts.hasOwnProperty(key)) {
        postList.push(
          <PostCardListItem
            key={key}
            id={key}
            {...this.props.posts[key]}
            onPostDelete={this.handlePostDelete}
            onPostEdit={this.handlePostEdit}
            onPostEditionClick={this.handlePostEditionClick}
            onPostEditionType={this.handlePostEditionType}
            onPostEditionText={this.handlePostEditionText}
            />
        );
      }
    }
    return postList;
  }
  render() {
    return this.renderList();
  }
}

function PostCardListItem(props) {
  if (props.edit == true) {
    return <EditCard editCardTextId={"text" + props.id} editCardId={props.id} textValue={props.text} typeValue={props.type} onChangeText={props.onPostEditionText} onChangeDropdown={props.onPostEditionType} onClick={props.onPostEditionClick} labelClasses="active" buttonText="Editar" />;
  } else {
    return <PostCard {...props}/>;
  }
}

PostCardList.propTypes = {
  posts: PropTypes.any,
  userId: PropTypes.string
};

module.exports = PostCardList;
