import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner Icon */}
        <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
        
        {/* Loading Text */}
        <p className="text-gray-600 text-lg font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}

