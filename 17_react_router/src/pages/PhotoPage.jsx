import React from "react";
import { useState } from "react";
import { getData } from "../utils/getData";
import { useEffect } from "react";

export default function PhotoPage() {
  const [photos, setPhotos] = useState([]);
  // const getPhotos = () => {
  //   fetch(
  //     "https://jsonplaceholder.typicode.com/photos "
  //       .then((response) => response.json())
  //       .then((data) => setPhotos(data))
  //   );
  // };

  useEffect(() => {
    // getPhotos();
    getData("https://jsonplaceholder.typicode.com/photos", setPhotos);
  }, []);

  return (
    <div>
      <div>사진 페이지</div>
      {photos.map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.title}></img>
          </div>
        );
      })}
    </div>
  );
}
