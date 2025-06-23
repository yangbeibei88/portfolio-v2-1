"use client";

import { ProjectType } from "@/lib/types";
import { memo, useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

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
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogApi, setDialogApi] = useState<CarouselApi>();
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dialogThumbRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasMounted = useRef(false);

  // Handle main carousel thumbnail sync
  useEffect(() => {
    if (!mainApi) {
      return;
    }

    const handleSelect = () => {
      const newIndex = mainApi.selectedScrollSnap();
      setSelectedIndex(newIndex);

      if (hasMounted.current) {
        const currentThumb = thumbRefs.current[newIndex];
        currentThumb?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    };

    mainApi.on("select", handleSelect);
    // initial call (scroll suppressed)
    handleSelect();

    hasMounted.current = true;

    return () => {
      mainApi.off("select", handleSelect);
    };
  }, [mainApi]);

  // handle dialog thumbnails sync
  useEffect(() => {
    if (!dialogApi) {
      return;
    }

    const handleSelect = () => {
      const newIndex = dialogApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      const thumb = dialogThumbRefs.current[newIndex];
      thumb?.scrollIntoView({ behavior: "smooth", inline: "center" });
    };

    dialogApi.on("select", handleSelect);
    // dialogApi.scrollTo(selectedIndex); // sync on open

    return () => {
      dialogApi.off("select", handleSelect);
    };
  }, [dialogApi]);

  // When opening dialog, scroll to selected
  useEffect(() => {
    if (isDialogOpen && dialogApi) {
      dialogApi.scrollTo(selectedIndex);
    }
  }, [isDialogOpen, dialogApi, selectedIndex]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (mainApi) {
        mainApi.scrollTo(index);
      }
    },
    [mainApi]
  );
  const onDialogThumbClick = useCallback(
    (index: number) => {
      dialogApi?.scrollTo(index);
    },
    [dialogApi]
  );
  return (
    <div className="flex flex-col space-y-2 w-full">
      {/* Main Carousel */}
      <Carousel
        className="w-full overflow-hidden"
        setApi={setMainApi}
        opts={{ loop: true }}
      >
        <CarouselContent className="">
          {images.map((img) => (
            <CarouselItem
              key={img.position}
              className="w-full max-h-[300px] flex justify-center items-start"
            >
              <Image
                width={1024}
                height={686.4}
                src={img.image_path || "/assets/image_placeholder_2.jpg"}
                alt={
                  `${project_name} - ${img.image_desc}` ||
                  `${project_name} image`
                }
                priority={true}
                className="w-full max-h-full object-contain cursor-zoom-in"
                onClick={() => setIsDialogOpen(true)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-2 opacity-50" />
            <CarouselNext className="right-2 opacity-50" />
          </>
        )}
      </Carousel>

      {/* Thumbnail Nav: Horizontally scrollable only */}
      <nav className="mt-2 overflow-x-auto whitespace-nowrap">
        <div className="flex flex-row flex-nowrap gap-2 px-2">
          {images.map((img, idx) => (
            <div
              key={img.position}
              ref={(el) => {
                thumbRefs.current[idx] = el;
              }}
              onClick={() => onThumbClick(idx)}
              className={`cursor-pointer border flex-shrink-0 ${
                idx === selectedIndex ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <Image
                width={120}
                height={120}
                src={img.image_path || "/assets/image_placeholder_2.jpg"}
                alt={
                  `${project_name} - ${img.image_desc}` ||
                  `${project_name} image`
                }
                className="size-[120px] p-1 border object-cover"
              />
            </div>
          ))}
        </div>
      </nav>

      {/* Dialog with large carousel */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          // !max-w-7xl
          className="!w-[80%] !h-[95%] !max-w-none px-8 py-6 bg-background flex flex-col justify-center items-center"
        >
          <DialogTitle className="sr-only">
            {project_name} Image Gallery
          </DialogTitle>
          {/* Dialog carousel */}
          <div className="flex-1 flex w-full items-center justify-center">
            <Carousel
              className="w-full"
              opts={{ loop: true }}
              setApi={setDialogApi}
            >
              <CarouselContent className="h-full">
                {images.map((img) => (
                  <CarouselItem
                    key={img.position}
                    className="flex flex-col justify-center items-center"
                  >
                    <figure>
                      <Image
                        width={3600}
                        height={2000}
                        src={img.image_path}
                        alt={
                          `${project_name} - ${img.image_desc}` ||
                          `${project_name} image`
                        }
                        className="max-h-[70vh] max-w-[90vw] object-contain"
                      />
                      <figcaption className="text-muted-foreground py-2 text-center text-sm">
                        {`${project_name} - ${img.image_desc}`}
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
          </div>

          {/* Dialog Thumbnails */}
          <nav className="w-full overflow-x-auto overflow-y-hidden whitespace-nowrap">
            <div className="flex flex-row gap-2 px-2">
              {images.map((img, idx) => (
                <div
                  key={img.position}
                  ref={(el) => {
                    dialogThumbRefs.current[idx] = el;
                  }}
                  onClick={() => onDialogThumbClick(idx)}
                  className={`cursor-pointer border flex-shrink-0 ${
                    idx === selectedIndex
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    width={100}
                    height={100}
                    src={img.image_path}
                    alt={
                      `${project_name} - ${img.image_desc}` ||
                      `${project_name} image`
                    }
                    className="size-[100px] p-1 border object-contain"
                  />
                </div>
              ))}
            </div>
          </nav>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default memo(ProjectImagesCarousel);
