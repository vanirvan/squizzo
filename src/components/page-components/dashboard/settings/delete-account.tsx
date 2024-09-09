"use client";

import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerFooter,
  DrawerDescription,
} from "@/components/ui/drawer";

export function DeleteAccount() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const Render = isDesktop ? Dialog : Drawer;
  const RenderContent = isDesktop ? DialogContent : DrawerContent;
  const RenderHeader = isDesktop ? DialogHeader : DrawerHeader;
  const RenderTitle = isDesktop ? DialogTitle : DrawerTitle;
  const RenderDescription = isDesktop ? DialogDescription : DrawerDescription;
  const RenderFooter = isDesktop ? DialogFooter : DrawerFooter;

  return (
    <>
      <div className="flex w-full flex-col gap-2 rounded-md bg-red-500 p-6 text-white">
        <h1 className="text-2xl font-bold">Delete your account</h1>
        <h2 className="text-sm font-light text-red-200">
          Becareful, your account and all of your data would be permanently
          removed from our servers.
        </h2>

        <Button
          onClick={() => setOpen((prev) => !prev)}
          className="mt-4 w-max bg-white text-red-500 hover:bg-gray-100 dark:bg-white dark:text-red-500"
        >
          Delete My Account
        </Button>
      </div>

      <Render open={isOpen} onOpenChange={setOpen}>
        <RenderContent className="bg-red-500 dark:bg-red-500">
          <RenderHeader>
            <RenderTitle className="text-2xl font-bold text-white dark:text-white">
              Are you absolutely sure?
            </RenderTitle>
            <RenderDescription className="text-sm font-light text-red-200 dark:text-red-200">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </RenderDescription>
          </RenderHeader>
          <div className="flex flex-col items-center gap-2"></div>
          <RenderFooter>
            <Button
              onClick={() => setOpen(false)}
              variant={"outline"}
              className="bg-transparent text-neutral-50 hover:bg-neutral-100/20 hover:text-neutral-50 dark:border-neutral-200 dark:bg-transparent dark:hover:bg-neutral-100/20"
            >
              No, don&lsquo;t delete Account
            </Button>
            <Button
              onClick={() => setOpen(false)}
              className="bg-neutral-50 text-neutral-900 hover:bg-neutral-50/90"
            >
              Yes, Delete Account
            </Button>
          </RenderFooter>
        </RenderContent>
      </Render>
    </>
  );
}
