import React, { useEffect } from "react";
import { LinkableImageProps } from "../favourite-shots/favourite-shots.types";
import * as s from "./image-modal.module.scss";

interface ImageModalProps extends LinkableImageProps {
  onClose?: () => void;
}

export const ImageModal = ({ alt, href, src, onClose }: ImageModalProps) => {
  const onKeyDown = (ev: KeyboardEvent) => {
    switch (ev.code) {
      case "Escape":
        _onClose();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add(s.disableScrollForModal);
    console.log("MOUNT");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove(s.disableScrollForModal);
      console.log("DEMOUNT");
    };
  }, []);

  const _onClose = () => {
    console.log("CLOSING");
    onClose && onClose();
  };

  return (
    <div className={s.modalRoot}>
      <div className={s.modalBackdrop} onClick={_onClose}></div>
      <div className={s.modal}>
        <button className={s.cross} onClick={_onClose}>
          &times;
        </button>
        <div className={s.modalContent}>
          <h2 style={{ textAlign: "center", margin: "10px 0 5px 0" }}>{alt}</h2>
          <div
            style={{ minHeight: 0, display: "flex", justifyContent: "center" }}
          >
            <img src={src} alt={alt} title={alt} />
          </div>
          <a
            href={href}
            className={s.linkButton}
            rel="noopener"
            target="_blank"
          >
            See Observation on iNaturalist
          </a>
        </div>
      </div>
    </div>
  );
};
