import React, { useState } from "react";
import { ImageModal } from "../image-modal";
import * as s from "./favourite-shots.module.scss";
import { LinkableImageProps } from "./favourite-shots.types";

const FavouriteShot = (props: LinkableImageProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const onClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    console.log("click");
    setShowModal(true);
  };
  console.log("render");

  const alt = `${props.common} (${props.scientific})`;
  return (
    <>
      <a href="#" onClick={onClick}>
        <img src={props.src} alt={alt} title={alt} />
      </a>
      {showModal && (
        <ImageModal {...props} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

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
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/245454671/large.jpg",
    a: "https://inaturalist.ca/observations/143137155",
    common: "Northern Cardinal",
    scientific: "Cardinalis cardinalis",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/241972604/large.jpg",
    a: "https://inaturalist.ca/observations/141267846",
    common: "Golden-crowned Kinglet",
    scientific: "Regulus satrapa",
  },
];

const favouriteShots = _favouriteShots.map(
  ({ src, a, common, scientific }, i) => (
    <FavouriteShot
      key={i}
      href={a}
      src={src}
      common={common}
      scientific={scientific}
      // alt={`${common} (${scientific})`}
    />
  )
);

export const FavouriteShots = () => (
  <div className={s.favouriteShotsGrid}>{favouriteShots}</div>
);
