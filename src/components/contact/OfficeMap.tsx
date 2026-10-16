"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, ExternalLink, Plus, Minus } from "lucide-react";

interface OfficeMapProps {
  directionsUrl?: string;
}

export function OfficeMap({
  directionsUrl = "https://maps.google.com/?q=Patong+Beach+Road+Phuket+83150+Thailand",
}: OfficeMapProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.15, 1.45));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.15, 0.85));

  return (
    <div className="relative w-full h-[260px] sm:h-[280px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-[#e8f0f8] select-none group">
      {/* Map Graphic Canvas / Background (Patong Beach, Phuket, Thailand) */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out origin-center"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        <svg
          viewBox="0 0 600 320"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sea / Andaman Ocean background */}
          <rect width="600" height="320" fill="#b9ddf5" />

          {/* Gentle water ripples */}
          <path
            d="M -20,60 Q 60,70 140,60 T 300,60"
            fill="none"
            stroke="#9ed1f0"
            strokeWidth="1.5"
            strokeDasharray="4,6"
          />
          <path
            d="M -10,180 Q 70,190 150,180 T 280,180"
            fill="none"
            stroke="#9ed1f0"
            strokeWidth="1.5"
            strokeDasharray="4,6"
          />

          {/* Island Landmass (Phuket Island West Coast) */}
          <path
            d="M 330,-10 
               C 330,30 350,50 370,60 
               C 400,75 420,90 380,110 
               C 340,130 320,150 330,170 
               C 350,210 390,220 370,250 
               C 350,280 430,310 460,330 
               L 610,330 L 610,-10 Z"
            fill="#e2edd8"
            stroke="#c8e0b8"
            strokeWidth="2"
          />

          {/* Hills & Green Reserve Regions */}
          <path
            d="M 440,20 Q 520,30 550,80 T 520,160 Q 460,140 440,70 Z"
            fill="#d3e7c5"
          />
          <path
            d="M 420,180 Q 480,190 530,240 T 460,310 Q 400,280 420,210 Z"
            fill="#d3e7c5"
          />

          {/* Sand Beach line */}
          <path
            d="M 330,-10 C 330,30 350,50 370,60 C 400,75 420,90 380,110 C 340,130 320,150 330,170 C 350,210 390,220 370,250 C 350,280 430,310 460,330"
            fill="none"
            stroke="#f5e8b7"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Primary Roads & Highways */}
          <path
            d="M 610,60 C 510,70 440,85 390,95 L 375,100"
            fill="none"
            stroke="#fca5a5"
            strokeWidth="3.5"
          />
          <path
            d="M 375,100 L 360,135 L 350,170 L 370,230 L 440,320"
            fill="none"
            stroke="#fcd34d"
            strokeWidth="3"
          />
          <path
            d="M 480,-10 L 510,80 L 530,180 L 550,330"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeDasharray="8,2"
          />

          {/* Secondary Roads */}
          <path
            d="M 380,95 C 410,120 450,140 510,150"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />
          <path
            d="M 350,170 C 390,175 430,200 480,210"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />

          {/* Road Badges */}
          <g transform="translate(415, 80)">
            <rect width="24" height="12" rx="3" fill="#ef4444" />
            <text x="12" y="9" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">4029</text>
          </g>
          <g transform="translate(440, 215)">
            <rect width="24" height="12" rx="3" fill="#3b82f6" />
            <text x="12" y="9" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">4016</text>
          </g>

          {/* Geographic Text Labels */}
          {/* Patong Beach */}
          <g transform="translate(420, 50)">
            <text fill="#334155" fontSize="13" fontWeight="bold" textAnchor="middle">
              Patong Beach
            </text>
            <text fill="#64748b" fontSize="8" textAnchor="middle" y="11">
              หาดป่าตอง
            </text>
          </g>

          {/* Freedom Beach */}
          <g transform="translate(355, 195)">
            <circle cx="-6" cy="-3" r="5" fill="#0284c7" />
            <path d="M -8,-3 L -4,-3 M -6,-5 L -6,-1" stroke="#fff" strokeWidth="1" />
            <text fill="#0f766e" fontSize="10" fontWeight="bold" x="3">
              Freedom Beach
            </text>
            <text fill="#64748b" fontSize="7" x="3" y="9">
              หาดฟรีดอม
            </text>
          </g>

          {/* Karon Beach */}
          <g transform="translate(400, 275)">
            <circle cx="-6" cy="-3" r="5" fill="#059669" />
            <text fill="#065f46" fontSize="11" fontWeight="bold" x="4">
              Karon Beach
            </text>
          </g>

          {/* Kathu / District label */}
          <g transform="translate(535, 175)">
            <rect width="32" height="13" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
            <text x="16" y="9.5" fill="#475569" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              KATHU
            </text>
          </g>

          {/* Phuket City label */}
          <g transform="translate(525, 100)">
            <text fill="#475569" fontSize="11" fontWeight="extrabold" textAnchor="middle">
              PHUKET
            </text>
          </g>
        </svg>
      </div>

      {/* Office Pin Overlay Pinning Patong Beach */}
      <div className="absolute top-[35%] left-[54%] sm:left-[55%] -translate-x-1/2 -translate-y-full z-20 pointer-events-auto">
        <div className="flex flex-col items-center">
          {/* Card Label */}
          <div className="bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-pink-100 flex items-center gap-2 mb-1.5 animate-bounce-subtle">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <MapPin className="w-3 h-3" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-slate-900 leading-tight">
                QBIC Travel
              </p>
              <p className="text-[10px] text-slate-500 font-medium">
                Phuket, Thailand
              </p>
            </div>
          </div>

          {/* Pin Arrow */}
          <div className="w-3 h-3 bg-primary rotate-45 rounded-[2px] -mt-2 shadow-sm" />
        </div>
      </div>

      {/* External Map Action Button */}
      <div className="absolute top-3 right-3 z-30">
        <Link
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 hover:bg-white text-slate-700 hover:text-primary px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm border border-slate-200/80 transition-colors flex items-center gap-1.5"
          aria-label="Open QBIC Travel office location in Google Maps"
        >
          <span>Open in Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Zoom Controls (Bottom Right) */}
      <div className="absolute bottom-3 right-3 z-30 flex flex-col rounded-lg border border-slate-200/90 bg-white/95 backdrop-blur-xs shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={handleZoomIn}
          className="p-1.5 text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors border-b border-slate-200"
          aria-label="Zoom in map"
          title="Zoom in"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleZoomOut}
          className="p-1.5 text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
          aria-label="Zoom out map"
          title="Zoom out"
        >
          <Minus className="w-4 h-4" />
        </button>
      </div>

      {/* Footer attribution */}
      <div className="absolute bottom-1.5 left-2.5 z-20 pointer-events-none text-[9px] text-slate-500 font-medium bg-white/80 px-1.5 py-0.5 rounded">
        Patong Beach, Phuket, Thailand
      </div>
    </div>
  );
}
