"use client";

import { useCallback } from "react";
import { CldUploadWidget,CldImage } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";

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
      onChange(result?.info?.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="airbnb"
      options={{ maxFiles: 1,resourceType:"image" }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-400"
          >
            <TbPhotoPlus size={50} />
            <p className="font-semibold text-lg">Add a photo</p>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <CldImage
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
