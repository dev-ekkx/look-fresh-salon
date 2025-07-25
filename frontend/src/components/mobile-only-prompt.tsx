import React from "react";
import { Monitor, Smartphone } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { howToAccessMobileArr } from "@/constants";
import { BsArrowRight } from "react-icons/bs";

const MobileOnlyPrompt = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-800 via-gray-800 to-zinc-800 p-6 text-white">
          <div className="mb-2 flex items-center gap-3">
            <div className="rounded-full border border-amber-500/30 bg-amber-500/20 p-2">
              <Smartphone size={24} className="text-amber-400" />
            </div>
            <h2 className="text-xl font-bold">Mobile Experience Required</h2>
          </div>
          <p className="text-sm text-gray-300">
            For the best salon & barbershop experience, please switch to mobile
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full border border-red-200 bg-red-50 p-3">
                  <Monitor size={32} className="text-red-500" />
                </div>
                <span className="text-sm text-gray-600">Desktop</span>
              </div>

              <BsArrowRight className={"text-primary mx-4"} size={26} />

              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full border border-emerald-200 bg-emerald-50 p-3">
                  <Smartphone size={32} className="text-emerald-600" />
                </div>
                <span className="text-sm text-gray-600">Mobile</span>
              </div>
            </div>
          </div>

          <Alert className="border-amber-200 bg-amber-50">
            <AlertDescription className="text-amber-900">
              Our salon & barbershop booking system is optimized for mobile
              devices. Book cuts, styling, and treatments easily from your
              phone.
            </AlertDescription>
          </Alert>

          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">
              How to access on mobile:
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {howToAccessMobileArr.map(el => {
                return (
                  <li key={el} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"></div>
                    <span>{el}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileOnlyPrompt;
