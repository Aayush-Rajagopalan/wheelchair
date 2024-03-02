import { Loader2 } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Loader2 className="h-32 w-32 animate-spin" />
    </div>
  );
}
