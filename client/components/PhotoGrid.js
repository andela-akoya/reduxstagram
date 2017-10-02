/**
 * Created by koyexes on 01/10/2017.
 */
import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => {
  return(
    <div className="photo-grid">
      {props.posts.map((post, i) => <Photo key={i} {...props} i={i} post={post} /> )}
    </div>
  )
};

export default PhotoGrid;
