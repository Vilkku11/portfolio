import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

import { useImageOpenStore } from "../../store/store";

import "./ImageView.css";

/*
  Component to view image
*/

const ImageView = () => {
  const { isOpen, setIsOpen, image } = useImageOpenStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeView();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeView = () => {
    setIsOpen(false);
  };

  if (!isOpen || !image) return null;

  return (
    <div className="image-view-overlay" onClick={closeView}>
      <div className="image-view-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="" className="image-view-img" />
      </div>
      <button className="image-view-close" onClick={closeView}>
        <IoCloseSharp size={48} />
      </button>
    </div>
  );
};

export default ImageView;
