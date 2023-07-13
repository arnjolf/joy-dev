import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ children }) {
  const ITEM_WIDTH = 873;
  const [offset, setOffset] = useState(0);
  const pagesCount = 3;

  function handleLeftArrowClick() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + ITEM_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  }

  function handleRightArrowClick() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - ITEM_WIDTH;
      const maxOffset = -(ITEM_WIDTH * (pagesCount - 1));
      console.log(newOffset);
      return Math.max(newOffset, maxOffset);
    });
  }

  return (
    <div className="carousel">
      <div className="carousel__main">
        <FaChevronLeft
          className="carousel__arrow"
          id="left-arrow"
          onClick={handleLeftArrowClick}
        />
        <div className="carousel__window">
          <div
            className="carousel__all-img"
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {children}
          </div>
        </div>
        <FaChevronRight
          className="carousel__arrow"
          onClick={handleRightArrowClick}
        />
      </div>
      <div className="carousel__buttons"></div>
    </div>
  );
}
