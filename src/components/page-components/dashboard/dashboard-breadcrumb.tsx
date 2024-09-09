"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { cn } from "@/lib/utils/cn";
import { upperCaseFirstLetter } from "@/lib/utils/uppercase-first-letter";
import { Key } from "lucide-react";

export function DashboardBreadcrumb({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <Breadcrumb className={cn("", className)}>
      <BreadcrumbList>
        {pathname
          .split("/")
          .slice(1)
          .map((pn, key) => (
            <Fragment key={key}>
              <BreadcrumbItem key={key}>
                {key !== pathname.split("/").slice(1).length - 1 ? (
                  <BreadcrumbLink href={`/${pn}`}>
                    {upperCaseFirstLetter(pn)}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{upperCaseFirstLetter(pn)}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {key !== pathname.split("/").slice(1).length - 1 && (
                <BreadcrumbSeparator />
              )}
            </Fragment>
            // <>
            //   <BreadcrumbItem key={key}>
            //     {key !== pathname.split("/").slice(1).length - 1 ? (
            //       <BreadcrumbLink href={`/${pn}`}>
            //         {upperCaseFirstLetter(pn)}
            //       </BreadcrumbLink>
            //     ) : (
            //       <BreadcrumbPage>{upperCaseFirstLetter(pn)}</BreadcrumbPage>
            //     )}
            //   </BreadcrumbItem>
            //   {key !== pathname.split("/").slice(1).length - 1 && (
            //     <BreadcrumbSeparator />
            //   )}
            // </>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
