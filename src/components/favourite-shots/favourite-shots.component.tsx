import React from "react";

const FavouriteShot = ({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) => (
  <>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ display: "block" }}
    >
      <img
        src={src}
        alt={alt}
        title={alt}
        style={{
          maxWidth: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          display: "block",
        }}
      />
    </a>
  </>
);

interface favShot {
  src: string;
  a: string;
  common: string;
  scientific: string;
}

const _favouriteShots: favShot[] = [
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/195661614/large.jpg",
    a: "https://inaturalist.ca/observations/115932728",
    common: "Common Garter Snake",
    scientific: "Thamnophis sirtalis",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/129602703/large.jpg",
    a: "https://inaturalist.ca/observations/79144109",
    common: "Eastern Carpenter Bee",
    scientific: "Xylocopa virginica",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/129602703/large.jpg",
    a: "https://inaturalist.ca/observations/79144109",
    common: "Eastern Carpenter Bee",
    scientific: "Xylocopa virginica",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/129602703/large.jpg",
    a: "https://inaturalist.ca/observations/79144109",
    common: "Eastern Carpenter Bee",
    scientific: "Xylocopa virginica",
  },
];

const favouriteShots = _favouriteShots.map(
  ({ src, a, common, scientific }, i) => (
    <FavouriteShot
      key={i}
      href={a}
      src={src}
      alt={`${common} (${scientific})`}
    />
  )
);

export const FavouriteShots = () => (
  <div style={{ display: "grid", gap: "12px", gridTemplateColumns: 'repeat(3, 1fr)' }}>{favouriteShots}</div>
);
