/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/cloudinary-loader.ts",
  },
};

export default nextConfig;
