import { generateReactHelpers } from "@uploadthing/react";

import type { UploadFileRouter } from "@/app/api/upload/core";

const uploadThingUrl = "/api/upload";

export const { useUploadThing: useUpload, uploadFiles } =
  generateReactHelpers<UploadFileRouter>({ url: uploadThingUrl });
