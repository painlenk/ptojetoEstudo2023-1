import { memo, useEffect, useState } from "react";
import { getImages } from "../../services/images";
import { IPostsData } from "../../types/interfaces/IPostsData";

const Posts = () => {
  const [posts, setPosts] = useState<IPostsData[]>([]);

  useEffect(() => {
    const setDataPosts = async () => {
      const data = await getImages();

      localStorage.setItem("@posts", JSON.stringify(data));
      setPosts(data);
    };

    const storageData = localStorage.getItem("@posts");
    if (storageData) {
      setPosts(JSON.parse(storageData));
    }

    setDataPosts();
  }, []);

  return (
    <>
      <div>
        {posts.length > 0 ? (
          <h2>Posts : </h2>
        ) : (
          <button onClick={async () => setPosts(await getImages())}>
            getImages
          </button>
        )}
      </div>

      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid red",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>{post.titulo}</h3>

            <img
              src={post.capa}
              alt={`${post.titulo}`}
              style={{
                width: "100%",
                minHeight: "250px",
                border: "1px solid blue",
              }}
            />
            <span>{post.categoria}</span>
            <span>{post.subtitulo}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(Posts);
