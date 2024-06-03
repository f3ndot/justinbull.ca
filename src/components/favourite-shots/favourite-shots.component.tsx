import React, { useState } from "react";
import { ImageModal } from "../image-modal";
import * as s from "./favourite-shots.module.scss";
import { LinkableImageProps } from "./favourite-shots.types";

const FavouriteShot = (props: LinkableImageProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const onClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const alt = `${props.common} (${props.scientific})`;
  return (
    <>
      <a href="#" onClick={onClick} className={s.galleryLink}>
        <img src={props.src} alt={alt} title={alt} />
      </a>
      {showModal && (
        <ImageModal {...props} alt={alt} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

const _favouriteShots: LinkableImageProps[] = [
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/354293986/large.jpg",
    href: "https://inaturalist.ca/observations/200776262",
    common: "Zebra Dove",
    scientific: "Geopelia striata",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/326055653/large.jpg",
    href: "https://inaturalist.ca/observations/186561156",
    common: "Red-tailed Hawk",
    scientific: "Buteo jamaicensis",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/266002730/large.jpg",
    href: "https://inaturalist.ca/observations/153975935",
    common: "Common Loon",
    scientific: "Gavia immer",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/326055537/large.jpg",
    href: "https://inaturalist.ca/observations/186561147",
    common: "Cabbage White",
    scientific: "Pieris rapae",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/257205266/large.jpg",
    href: "https://inaturalist.ca/observations/149278527",
    common: "Eastern Screech-Owl",
    scientific: "Megascops asio",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/129602703/large.jpg",
    href: "https://inaturalist.ca/observations/79144109",
    common: "Eastern Carpenter Bee",
    scientific: "Xylocopa virginica",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/266003205/large.jpg",
    href: "https://inaturalist.ca/observations/153975944",
    common: "Muskrat",
    scientific: "Ondatra zibethicus",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/245454671/large.jpg",
    href: "https://inaturalist.ca/observations/143137155",
    common: "Northern Cardinal",
    scientific: "Cardinalis cardinalis",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/241972604/large.jpg",
    href: "https://inaturalist.ca/observations/141267846",
    common: "Golden-crowned Kinglet",
    scientific: "Regulus satrapa",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/197784701/large.jpg",
    href: "https://inaturalist.ca/observations/117134231",
    common: "Red-tailed Hawk",
    scientific: "Buteo jamaicensis",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/110334580/large.jpg",
    href: "https://inaturalist.ca/observations/68182316",
    common: "Hairy Woodpecker",
    scientific: "Dryobates villosus",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/197785365/large.jpg",
    href: "https://inaturalist.ca/observations/117134254",
    common: "Eastern Chipmunk",
    scientific: "Tamias striatus",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/164098007/large.jpg",
    href: "https://inaturalist.ca/observations/98547990",
    common: "Elm Mushroom",
    scientific: "Hypsizygus ulmarius",
    unconfirmed: true,
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/244593317/large.jpeg",
    href: "https://inaturalist.ca/observations/142644924",
    common: "White-breasted Nuthatch",
    scientific: "Sitta carolinensis",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/197784906/large.jpg",
    href: "https://inaturalist.ca/observations/117134233",
    common: "Baltimore Oriole",
    scientific: "Icterus galbula",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/195661589/large.jpg",
    href: "https://inaturalist.ca/observations/115932725",
    common: "Red-winged Blackbird",
    scientific: "Agelaius phoeniceus",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/185755705/large.jpg",
    href: "https://inaturalist.ca/observations/110143299",
    common: "Gambel's Quail",
    scientific: "Callipepla gambelii",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/195661614/large.jpg",
    href: "https://inaturalist.ca/observations/115932728",
    common: "Common Garter Snake",
    scientific: "Thamnophis sirtalis",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/142734110/large.jpg",
    href: "https://inaturalist.ca/observations/86623609",
    common: "Blue Jay",
    scientific: "Cyanocitta cristata",
  },
  {
    src: "https://inaturalist-open-data.s3.amazonaws.com/photos/149747820/large.jpg",
    href: "https://inaturalist.ca/observations/90596513",
    common: "Red-banded Leafhopper",
    scientific: "Graphocephala coccinea",
  },
  // {
  //   src: "https://inaturalist-open-data.s3.amazonaws.com/photos/238906610/large.jpeg",
  //   href: "https://inaturalist.ca/observations/139657002",
  //   common: "Green Beetle Hanger",
  //   scientific: "Hesperomyces harmoniae",
  // },
];

const favouriteShots = _favouriteShots.map((props, i) => (
  <FavouriteShot key={i} {...props} />
));

export const FavouriteShots = () => (
  <div className={s.favouriteShotsGrid}>{favouriteShots}</div>
);
