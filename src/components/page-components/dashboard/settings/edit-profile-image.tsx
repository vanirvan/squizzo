"use client";

import { useState } from "react";
import { PencilIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useUpload } from "@/hooks/useUpload";

export function EditProfileImage() {
  // handle profile image change
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadedFile(e.target.files?.[0] as File);
  };

  const { startUpload, isUploading } = useUpload("profileImageUpload", {
    onClientUploadComplete: async () => {
      setUploadedFile(null);
      // await deleteProfileImage(userInfoData?.data.image!);
      // queryClient.invalidateQueries({ queryKey: ["UserInfo"] });
    },
    onUploadError: () => {},
    onUploadBegin: () => {},
  });

  return (
    <div className="space-y-2">
      <Label>Profile Image</Label>
      <div className="relative w-max">
        <Avatar className="h-32 w-32 border shadow">
          <AvatarImage src={""} alt={""} />
          <AvatarFallback>{""}</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 z-10">
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <PencilIcon className="h-4 w-4" />
          </Button>
          <input
            id="editProfilePicture"
            hidden
            type="file"
            name="profilePhotoInput"
            accept="image/*"
            disabled={isUploading}
            onChange={handleFileChange}
          />
        </div>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Your profile image
      </p>
    </div>
  );
}
