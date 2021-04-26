import React, { useEffect } from "react";

const defaultUrl = "https://i.ibb.co/hmtBmhz/no-poster.jpg";

interface ICardDetails {
  posterPath: string;
  className: any;
}

function isValidPath(path) {
  let promise = new Promise((resolve) => {
    let img = document.createElement("img");
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
    img.src = path;
  });

  return promise;
}

const Poster = ({
  posterPath,
  className,
}: ICardDetails): React.ReactElement => {
  const imgRef = React.useRef(null);

  useEffect(() => {
    isValidPath(posterPath).then((isValid) => {
      if (!isValid) {
        imgRef.current.src = defaultUrl;
      }
    });
  }, [posterPath]);

  return (
    <img
      className={className}
      src={posterPath}
      alt="poster"
      ref={imgRef}
    />
  );
};

export default Poster;
