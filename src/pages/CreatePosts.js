import React, { useState } from 'react';

function CreatePosts() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const createPosts = (e) => {
    e.preventDefault();
    setValue('');
    value && setPosts([...posts, value]);
  };
  return (
    <div>
      <form>
        <input type="text" placeholder="input" value={value} onChange={handleChange} />
        <button onClick={createPosts}>Create</button>
      </form>
      {posts?.map((post, id) => (
        <div key={id} style={{ width: '400px', height: '100px' }}>
          {post}
        </div>
      ))}
    </div>
  );
}

export default CreatePosts;
