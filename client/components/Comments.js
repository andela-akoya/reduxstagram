/**
 * Created by koyexes on 02/10/2017.
 */
import React from 'react';

class Comments extends React.Component {
  constructor(){
    super();
    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getPropValue = this.getPropValue.bind(this);
  }

  getPropValue(prop) {
   return ( {
      'postId': this.props.location.pathname.split('/')[2]
    })[prop];
  }

  handleSubmit(e) {
    e.preventDefault();
    const postId = this.getPropValue('postId');
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button ref="deleteBtn" key={i} className="remove-comment" onClick={this.props.removeComment.bind(null, this.getPropValue('postId'), i)}>&times;</button>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }

}

export default Comments;
