import React, { useEffect } from "react";
import { LinkableImageProps } from "../favourite-shots/favourite-shots.types";
import { Icon } from "../icon";
import FocusTrap from "focus-trap-react";
import * as s from "./image-modal.module.scss";

interface ImageModalProps extends LinkableImageProps {
  onClose?: () => void;
}

export const ImageModal = ({
  common,
  scientific,
  href,
  src,
  onClose,
}: ImageModalProps) => {
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
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove(s.disableScrollForModal);
    };
  }, []);

  const _onClose = () => {
    onClose && onClose();
  };

  const alt = `${common} (${scientific})`;
  return (
    <FocusTrap>
      <div className={s.modalRoot}>
        <div className={s.modalBackdrop} onClick={_onClose}></div>
        <div style={{ margin: "30px 0" }}>
          <div
            className={s.modalContent}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
          >
            <button
              role="button"
              className={s.cross}
              onClick={_onClose}
              aria-label="Close modal"
            >
              <span aria-hidden="true">✕</span>
            </button>
            <h2
              id="modalTitle"
              style={{ textAlign: "center", margin: "10px 0 5px 0" }}
            >
              {common} <em>({scientific})</em>
            </h2>
            <div
              style={{
                minHeight: 0,
                display: "flex",
                justifyContent: "center",
              }}
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
              <Icon style={{ flexShrink: 0 }} type="externalLink" />
            </a>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};
