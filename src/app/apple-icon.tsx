import { leckerlione } from "@/lib/font";
import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        className={`${leckerlione.className} flex h-full w-full items-center justify-center bg-blue-ultramarine text-2xl text-white`}
      >
        F
      </div>
    ),
    {
      ...size,
    },
  );
}
