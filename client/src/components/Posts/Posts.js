import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
  // add css classes
  const classes = useStyles();
  // get post from store
  const posts = useSelector(state => state.posts);
  console.log(posts);
  const renderPosts = !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map(post => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div>
      <h1>Posts</h1>
      {renderPosts}
    </div>
  );
};

export default Posts;
