import React, { useEffect, useState, useCallback } from "react";
import css from "./Cases.module.css";
import Card from "./Card/Card";
import useEmblaCarousel from "embla-carousel-react";
import { cardData } from "./Card/data";
import { PrevButton, NextButton } from "./EmblaButtons";

const Cases = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Successful cases of our company</h2>
      <div className={css.controls}>
        <span className={css.counter}>
          {(selectedIndex + 1).toString().padStart(2, "0")} /{" "}
          {cardData.length.toString().padStart(2, "0")}
        </span>
        <div className={css.arrows}>
          <PrevButton onClick={() => emblaApi?.scrollPrev()} />
          <NextButton onClick={() => emblaApi?.scrollNext()} />
        </div>
      </div>

      <div className={css.embla}>
        <div className={css.emblaViewport} ref={emblaRef}>
          <div className={css.emblaContainer}>
            {cardData.map((item, index) => (
              <div className={css.emblaSlide} key={index}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
