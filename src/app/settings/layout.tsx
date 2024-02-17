"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserCircleIcon,
  EnvelopeIcon,
  KeyIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

interface SettingsLayoutProps {
  children: ReactNode;
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <div className="w-[600px] h-[500px] overflow-hidden">
      <div className="rounded-md glassBackgroundColor grid grid-cols-3 gap-3 p-3 max-w-containersx pt-5 mt-14">
        <div className="col-span-1 text-sm space-y-1 font-bold flex flex-col"></div>
        <div className="col-span-2">{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
