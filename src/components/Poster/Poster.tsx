import React, { useEffect, useState } from "react";

const defaultUrl = "https://i.ibb.co/hmtBmhz/no-poster.jpg";

interface ICardDetails {
  posterPath: string;
  className: any;
}

const Poster = ({
  posterPath,
  className,
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
    />
  );
};

export default Poster;
