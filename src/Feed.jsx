import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/*Header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Twitter Box */}
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

      {/* Post */}
      <Post
        displayName="Alfonso Dalix"
        username="alfondalix"
        verified={true}
        text="JEJEJEJEJE"
        avatar="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg"
        image="https://media3.giphy.com/media/65AzTdpi3clAdjomZ39/giphy.gif"
      />

      {/* Post */}
    </div>
  );
}

export default Feed;
