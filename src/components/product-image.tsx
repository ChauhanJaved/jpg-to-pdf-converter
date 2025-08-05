"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Link from "next/link";
import cloudinaryLoader from "@/lib/cloudinary-loader";

interface ProductImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  galleryID: string;
}
export default function ProductImage(props: ProductImageProps) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: ".pswp-gallery__item",
      pswpModule: () => import("photoswipe"),
      loop: false,
    });
    //For photo caption
    lightbox.on("uiRegister", function () {
      lightbox.pswp?.ui?.registerElement({
        name: "custom-caption",
        order: 9,
        isButton: false,
        appendTo: "root",
        html: "Caption text",
        onInit: (el) => {
          lightbox.pswp?.on("change", () => {
            const currSlideElement = lightbox.pswp?.currSlide?.data.element;
            let captionHTML: string | null | undefined = "";
            if (currSlideElement) {
              const hiddenCaption = currSlideElement.querySelector(
                ".hidden-caption-content",
              );
              if (hiddenCaption) {
                // get caption from element with class hidden-caption-content
                captionHTML = hiddenCaption.innerHTML;
              } else {
                // get caption from alt attribute
                captionHTML = currSlideElement
                  ?.querySelector("img")
                  ?.getAttribute("alt");
              }
            }
            el.innerHTML = captionHTML || "";
          });
        },
      });
    });
    lightbox.init();
    return () => {
      lightbox.destroy();
    };
  });
  return (
    <div id={props.galleryID} className="flex w-full flex-col items-center">
      <div className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden">
        <Link
          id={"image-1"}
          href={cloudinaryLoader({
            src: props.src,
            width: props.width,
          })}
          data-pswp-width={props.width}
          data-pswp-height={props.height}
          target="_blank"
          rel="noreferrer"
          className="pswp-gallery__item cursor-zoom-in"
        >
          <Image
            width={props.width}
            height={props.height}
            src={props.src}
            alt={props.alt}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
