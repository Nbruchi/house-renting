"use client";

import { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const handleUpload = useCallback(
    (result: any) => {
      const secureUrl = result?.info?.secure_url ?? result?.secure_url;

      if (!secureUrl) {
        console.warn("Cloudinary upload missing secure_url", result);
        return;
      }

      onChange(secureUrl);
      console.log(result);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="airbnb"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        const handleOpen = () => {
          if (!open) {
            return;
          }

          open();
        };

        return (
          <div
            onClick={handleOpen}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-400"
          >
            <TbPhotoPlus size={50} />
            <p className="font-semibold text-lg">Add a photo</p>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={value}
                  alt="Upload"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
