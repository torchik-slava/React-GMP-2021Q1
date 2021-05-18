import React, { useEffect, useState } from "react";

const defaultUrl = "https://i.ibb.co/hmtBmhz/no-poster.jpg";

interface ICardDetails {
  posterPath: string;
  className: string;
  width: string;
}

const Poster = ({
  posterPath,
  className,
  width,
}: ICardDetails): React.ReactElement => {
  const [url, setUrl] = useState(posterPath);

  useEffect(() => {
    setUrl(posterPath);
  }, [posterPath]);

  return (
    <img
      className={className}
      src={url}
      onError={() => setUrl(defaultUrl)}
      alt="poster"
      width={width}
    />
  );
};

export default Poster;
