"use client";
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Marquee = () => {
  const marqueeRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrame;
    let speed = 2; // Скорость прокрутки

    const scrollMarquee = () => {
      if (marquee) {
        marquee.scrollLeft += speed;
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollMarquee);
    };

    animationFrame = requestAnimationFrame(scrollMarquee);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleClick = () => {
    const targetElement = document.getElementById("real-block");
    if (targetElement) {
      const headerOffset = 50; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const elementStyle = window.getComputedStyle(targetElement);
      const elementMarginTop = parseInt(elementStyle.marginTop, 10) || 0;
      const elementPaddingTop = parseInt(elementStyle.paddingTop, 10) || 0;
      const offsetPosition = elementPosition - headerOffset - elementPaddingTop - elementMarginTop;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="wrap-line-text">
      <div className="marquee-container" ref={marqueeRef} style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block' }}>
          {Array(2).fill(
            <span onClick={handleClick} style={{ paddingRight: '50px', cursor: 'pointer' }}>
              {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
