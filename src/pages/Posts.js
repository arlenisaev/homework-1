import React, { useEffect, useState } from 'react';

function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data?.map((data) => (
        <div key={data.id} style={{ width: '400px', height: '100px' }}>
          {data.title}
        </div>
      ))}
    </div>
  );
}

export default Posts;
