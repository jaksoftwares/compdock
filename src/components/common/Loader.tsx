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


// export default function Loader() {
//   return (
//     <div className="flex items-center justify-center min-h-[60vh] w-full bg-white">
//       <div className="relative w-20 h-20">
//         {/* Outer Ring */}
//         <div className="absolute inset-0 border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow" />
        
//         {/* Middle Ring */}
//         <div className="absolute inset-2 border-4 border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-medium" />
        
//         {/* Inner Ring */}
//         <div className="absolute inset-4 border-4 border-t-blue-300 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-fast" />

//         {/* Center Dot */}
//         <div className="absolute inset-[42%] w-3 h-3 bg-blue-600 rounded-full" />
//       </div>

//       {/* Loading Text */}
//       <div className="ml-6">
//         <p className="text-gray-700 text-lg font-semibold animate-pulse">Compdock is loading...</p>
//       </div>
//     </div>
//   );
// }
