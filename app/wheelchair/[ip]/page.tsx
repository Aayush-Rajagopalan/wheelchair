import { IPForm } from "@/components/ip_form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import {
  ArrowBigDown,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
  Command,
} from "lucide-react";

export default async function Wheelchair({
  params,
}: {
  params: { ip: string };
}) {
  const obstacle = false;
  let connected = false;
  try {
    const res = await fetch(`http://${params.ip}/ping`, { method: "HEAD" });
    if (res.status === 200) {
      connected = true;
    }
  } catch (error) {
    connected = false;
  }
  return (
    <>
      <div className="h-16 mb-3">
        <Navbar ip={params.ip} connected={connected} />
      </div>
      {connected ? (
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:space-x-5 p-5">
          <Card>
            <CardHeader>
              <CardTitle>Obstacle Detection</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              {obstacle ? (
                <div className=" bg-red-500 h-full mx-auto rounded-xl flex items-center justify-center">
                  Obstacle detected
                </div>
              ) : (
                <div className=" bg-green-500 h-full mx-auto rounded-xl flex items-center justify-center">
                  No obstacles detected
                </div>
              )}
            </CardContent>
          </Card>
          

          <Card>
            <CardHeader>
              <CardTitle>Wheelchair details</CardTitle>
            </CardHeader>
            <CardContent className="h-full space-y-5">
              <Card className="px-4 py-2 text-green-200">
                Wheelchair connected
              </Card>
              <Card className="px-4 py-2 text-green-200">
                Smart Spectacles Connected
              </Card>
              <Card className="px-4 py-2">Wheelchair IP: {params.ip}</Card>
              <Card className="px-4 py-2">Spectacles IP: {params.ip}</Card>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="bg-dot-white/[0.2] h-[90vh] p-4  flex flex-col justify-center  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#09090b)]"></div>
          <h1 className="mb-4 text-lg md:text-2xl font-semibold text-center">
            Invalid IP Address, Try again{" "}
          </h1>
          <h1 className="mb-4 text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Smart Wheelchair
          </h1>
          <IPForm />
        </div>
      )}
    </>
  );
}
