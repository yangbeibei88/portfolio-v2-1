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
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";

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

  // Handle main carousel thumbnail sync
  useEffect(() => {
    if (!mainApi) {
      return;
    }

    const handleSelect = () => {
      const newIndex = mainApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      const currentThumb = thumbRefs.current[newIndex];
      currentThumb?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    };

    mainApi.on("select", handleSelect);
    handleSelect();

    return () => {
      mainApi.off("select", handleSelect);
    };
  }, [mainApi]);

  // useEffect(() => {
  //   if (mainApi) {
  //     mainApi.scrollTo(initialIndex);
  //   }
  // }, [mainApi, initialIndex]);

  // Handle dialog carousel thumbnail sync
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
    dialogApi.scrollTo(selectedIndex); // sync on open

    return () => dialogApi.off("select", handleSelect);
  }, [dialogApi, isDialogOpen]);

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
                  className="max-w-full h-auto object-contain cursor-zoom-in"
                  onClick={() => setIsDialogOpen(true)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
      {/* Carousel thumbnail navigation */}
      <nav className="mt-2">
        <Carousel className="w-full">
          <CarouselContent className="flex flex-row flex-nowrap gap-2 overflow-x-auto ml-0 px-2">
            {images.map((img, idx) => (
              <CarouselItem
                key={img.position}
                onClick={() => onThumbClick(idx)}
                className={`basis-auto cursor-pointer border flex-shrink-0 ml-0 pl-0 ${
                  idx === selectedIndex ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <div
                  ref={(el) => {
                    thumbRefs.current[idx] = el;
                  }}
                >
                  <Image
                    width={120}
                    height={120}
                    src={img.image_path || "/assets/image_placeholder_2.jpg"}
                    alt={
                      img.image_path.split("/")[2] || `${project_name} image`
                    }
                    priority={true}
                    className="size-[120px] p-1 border object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </nav>

      {/* Dialog with Main Carousel + Thumbnails */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-screen h-screen max-w-none p-0 flex flex-col items-center justify-center bg-background">
          <DialogTitle className="sr-only">
            {project_name} Image Gallery
          </DialogTitle>
          {/* Dialog carousel */}
          <Carousel
            // className="w-full"
            opts={{ loop: true }}
            setApi={setDialogApi}
          >
            <CarouselContent>
              {images.map((img) => (
                <CarouselItem
                  key={img.position}
                  className="flex justify-center items-center"
                >
                  <div className="w-full h-full flex justify-center items-center">
                    <Image
                      width={3600}
                      height={2000}
                      src={img.image_path}
                      alt={
                        img.image_path.split("/")[2] || `${project_name} image`
                      }
                      className="max-h-[80vh] max-w-[90vw] object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          {/* Dialog thumbnails */}
          <nav className="overflow-x-auto">
            <Carousel className="w-full">
              <CarouselContent className="flex flex-row gap-2 px-2">
                {images.map((img, idx) => (
                  <CarouselItem
                    key={img.position}
                    onClick={() => onDialogThumbClick(idx)}
                    className={`basis-auto cursor-pointer border flex-shrink-0 ${
                      idx === selectedIndex
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    <div
                      ref={(el) => {
                        dialogThumbRefs.current[idx] = el;
                      }}
                    >
                      <Image
                        width={240}
                        height={240}
                        src={img.image_path}
                        alt={
                          img.image_path.split("/")[2] ||
                          `${project_name} image`
                        }
                        className="size-[240px] p-1 border object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </nav>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default memo(ProjectImagesCarousel);
