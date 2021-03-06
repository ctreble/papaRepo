import React from 'react';
import { connect } from 'react-redux';

import Post from './../Feed/post.jsx';
import Navbar from './../Navbar/navbar.jsx';
import NewPost from './newPost.jsx';
import Loading from './../Loading/loading.jsx';
import style from './profile.css';

class Profile extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
          <div className={style.body}>
            <div className={style.feed}>
              <div className={style.title}>
                <div className={style.picborder}>
                  <img
                    className={style.profilepic}
                    src={this.props.currentUser.profilePic} />
                  {/* <h2>Bio</h2> */}
                  {/* <div>{this.props.currentUser.bio}</div> */}
                </div>
                <h2>{this.props.firebaseUser ?
                  this.props.firebaseUser.displayname :
                  null }
                's Photos</h2>
                <div className={style.addpost}>
                  <NewPost />
                </div>
                <div className={style.loading}>
                  {this.props.loading ? <Loading /> : null}
                </div>
              </div>
                <div>
                {
                  this.props.photos.length
                  ? this.props.photos
                    .map(photo => <Post key={photo._id} photo={photo} />)
                  : <div className={style.title}>You have no photos. Click "Add New Post"!</div>
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    firebaseUser: state.firebaseUser,
    photos: state.photos,
    loading: state.loading,
  };
}

export default connect(mapStateToProps)(Profile);
