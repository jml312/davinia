import React from "react";

function Instagram({ value: { image, url } }) {
  if (!image) {
    return (
      <a href={url} target="_blank" rel="noreferrer">
        Instagram Post
      </a>
    );
  }
  const [_, id, size, extension] = image.split("-");
  const imageUrl = `https://cdn.sanity.io/images/afor6pp9/production/${id}-${size}.${extension}`;
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img
        src={imageUrl}
        style={{
          width: "8em",
          height: "8em",
          objectFit: "cover",
        }}
        alt="instagram pic"
      />
    </a>
  );
}

export default Instagram;
