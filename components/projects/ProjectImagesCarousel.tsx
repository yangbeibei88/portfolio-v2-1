"use client";

import { ProjectType } from "@/lib/types";
import { memo, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectImagesCarouselProps = {
  project_name: string;
  images: ProjectType["images"];
  initialIndex?: number;
  // activeIndex?: number;
};

function ProjectImagesCarousel({
  project_name,
  images,
  initialIndex = 0,
}: // activeIndex,
ProjectImagesCarouselProps) {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  useEffect(() => {
    if (!mainApi) {
      return;
    }

    const handleSelect = () => {
      const newIndex = mainApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      if (thumbApi) {
        thumbApi.scrollTo(newIndex);
      }
    };

    mainApi.on("select", handleSelect);
    handleSelect();

    return () => {
      mainApi.off("select", handleSelect);
    };
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (mainApi) {
      mainApi.scrollTo(initialIndex);
    }
  }, [mainApi, initialIndex]);

  // useEffect(() => {
  //   if (mainApi && typeof activeIndex === "number") {
  //     mainApi.scrollTo(activeIndex);
  //   }
  // }, [mainApi, activeIndex]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (mainApi) {
        mainApi.scrollTo(index);
      }
    },
    [mainApi]
  );
  return (
    <div className="flex flex-col space-y-2 w-full">
      {/* Image Cover */}
      <div className="">
        <Carousel
          className="w-full overflow-hidden"
          setApi={setMainApi}
          opts={{ loop: true }}
        >
          <CarouselContent className="">
            {images.map((img) => (
              <CarouselItem key={img.position}>
                <Image
                  width={1024}
                  height={686.4}
                  src={img.image_path || "/assets/image_placeholder_2.jpg"}
                  alt={img.image_path.split("/")[2] || `${project_name} image`}
                  priority={true}
                  className="max-w-full h-auto object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
      {/* Carousel thumbnail */}
      <nav className="mt-2">
        <Carousel setApi={setThumbApi} className="w-full">
          <CarouselContent className="flex flex-row flex-nowrap gap-2 overflow-x-auto ml-0 px-2">
            {images.map((img, idx) => (
              <CarouselItem
                key={img.position}
                onClick={() => onThumbClick(idx)}
                className={`basis-auto cursor-pointer border flex-shrink-0 ml-0 pl-0 ${
                  idx === selectedIndex ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <Image
                  width={120}
                  height={120}
                  src={img.image_path || "/assets/image_placeholder_2.jpg"}
                  alt={img.image_path.split("/")[2] || `${project_name} image`}
                  priority={true}
                  className="size-[120px] p-1 border object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </nav>
    </div>
  );
}

export default memo(ProjectImagesCarousel);
