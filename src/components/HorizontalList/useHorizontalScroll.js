import { useState } from "react";

const useHorizontalScroll = (ref) => {
  const [hasLeftArrow, setLeftArrow] = useState(false);
  const [hasRightArrow, setRightArrow] = useState(true);
  const [sectionIndex, setSectionIndex] = useState(0);

  const moveTo = (indexToScroll) => () => {
    const { offsetWidth, scrollWidth } = ref.current;
    const scrollSections = Math.floor(scrollWidth / offsetWidth) + 1;
    const scrollSectionWidth = scrollWidth / scrollSections;
    const nextScroll = scrollSectionWidth * indexToScroll;
    const isScrollLimit = indexToScroll > scrollSections || indexToScroll < 0;

    if (isScrollLimit) {
      return;
    }

    setSectionIndex(indexToScroll);
    ref.current.scrollTo({
      top: 0,
      left: nextScroll,
      behavior: "smooth"
    });
  };

  const setArrows = (event) => {
    const { scrollLeft, scrollWidth, offsetWidth } = event.target;
    const scrollView = scrollWidth - offsetWidth;
    const isScrollToRight = scrollLeft < scrollView;
    const isScrollToLeft = scrollLeft === scrollView;

    if (scrollLeft === 0 && hasLeftArrow) {
      setLeftArrow(false);
    }
    if (scrollLeft > 0 && !hasLeftArrow) {
      setLeftArrow(true);
    }
    if (isScrollToLeft && hasRightArrow) {
      setRightArrow(false);
    }
    if (isScrollToRight && !hasRightArrow) {
      setRightArrow(true);
    }
  };

  const onScrollListener = (event) => {
    event.stopPropagation();
    setArrows(event);
  };

  return {
    hasLeftArrow,
    hasRightArrow,
    onScrollListener,
    moveTo,
    sectionIndex
  };
};

export default useHorizontalScroll;
