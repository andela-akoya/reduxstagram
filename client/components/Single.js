/**
 * Created by koyexes on 01/10/2017.
 */
import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const postId = props.location.pathname.split('/')[2];
  const i = props.posts.findIndex((post) => post.code === postId );
  const post = props.posts[i];
  const postComments = props.comments[postId] || [];
  return(
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  )
};

export default Single;
