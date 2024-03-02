"use client";

import Link from "next/link";
import { Command } from "lucide-react";
import { Badge } from "./badge";

export const Navbar = ({
  ip,
  connected,
}: {
  ip: string;
  connected: boolean;
}) => {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="bg-transparent flex gap-6 md:gap-10">
          <Link href="/" className="items-center space-x-2 flex">
            <Command />
            <span className="font-bold inline-block">Smart Wheelchair</span>
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          {connected ? (
            <Badge variant={"secondary"}>Connected to {ip}</Badge>
          ) : (
            <Badge variant={"destructive"}>Disconnected from {ip}</Badge>
          )}
        </div>
      </div>
    </header>
  );
};
