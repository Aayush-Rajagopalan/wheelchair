"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { useEffect, useState } from "react";

export default function Wheelchair() {
  const [obstacle, setObstacle] = useState(false);
  let connected = true;

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://wheelchair-server.vercel.app")
        .then((res) => res.json())
        .then((data) => {
          setObstacle(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, [connected]);

  console.log(obstacle);

  return (
    <>
      <div className="h-16 mb-3">
        <Navbar ip={"76.76.21.9"} connected={connected} />
      </div>

      <div className="grid grid-cols-1 h-[90vh] space-y-5 md:space-y-0 md:space-x-5 p-5">
        <Card>
          <CardHeader>
            <CardTitle>Obstacle Detection</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            {obstacle ? (
              <div className=" bg-red-500 transition-colors h-full mx-auto rounded-xl flex items-center justify-center">
                Obstacle detected
              </div>
            ) : (
              <div className=" bg-green-500 transition-colors h-full mx-auto rounded-xl flex items-center justify-center">
                No obstacles detected
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
