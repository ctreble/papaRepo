import React, { Component } from 'react';

import Comments from './comments.jsx';
import Like from './like.jsx';
import style from './feed.css';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    };
  }

  render() {
    return (
        <div className={style.post}>
          <img src={this.props.photo.photoUrl} />
          <div>
            <h3>{this.props.photo.displayname}</h3>
            <p>{this.props.photo.description}</p>
            <p>{this.props.photo.created}</p>
            <Like
              likes={this.props.photo.likes}
              username={this.props.photo.username}
              photoId={this.props.photo.tempId}
            />
            <button
              onClick={() => {
                this.setState({ showComments: !this.state.showComments });
              }}
            >
              {this.state.showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {
              this.state.showComments ?
            <Comments id={this.props.photo.tempId}/> :
              null
            }

          </div>
        </div>
    );
  }
}


export default Post;
