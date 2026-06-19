import React, { useState } from "react";
import { Play, Check, X, ShieldAlert, Award } from "lucide-react";

const CandidateCard = ({ candidate, onShortlist, onReject, onPlayVideo }) => {
  const isShortlisted = candidate.status === "shortlisted";
  const isRejected = candidate.status === "rejected";

  return (
    <div className="bg-white rounded-3xl p-5 shadow-[0_12px_36px_rgba(0,0,0,0.03)] border border-slate-100/80 flex flex-col justify-between hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
      
      {/* Top Section: Cover Letter Video Header */}
      <div className="text-left mb-3.5">
        <button
          onClick={() => onPlayVideo(candidate)}
          className="text-xs font-bold text-blue-600 hover:text-blue-800 underline focus:outline-none cursor-pointer"
        >
          Cover Letter Video
        </button>
      </div>

      {/* Video Placeholder Box */}
      <div
        onClick={() => onPlayVideo(candidate)}
        className="w-full h-40 rounded-2xl bg-gradient-to-br from-slate-900 via-[#112F5A] to-slate-900 border border-slate-200/50 flex items-center justify-center relative cursor-pointer overflow-hidden group shadow-inner"
      >
        {/* Decorative Grid Mesh or background details */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Demo Candidate Face Placeholder/Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none">
          <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>

        {/* Video Player HUD Overlays */}
        <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[9px] font-black text-white/90">
          01:34 mins
        </div>
        <div className="absolute bottom-2 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[9px] font-black text-green-400">
          • HD 1080p
        </div>

        {/* Play Button Icon */}
        <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-300 z-10">
          <Play className="w-5 h-5 text-[#112F5A] fill-current translate-x-0.5" />
        </div>
      </div>

      {/* Candidate Profile Details */}
      <div className="my-4 text-left">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h4 className="font-display font-extrabold text-[#0E1B3E] text-base leading-tight">
              {candidate.name}
            </h4>
            <p className="text-slate-500 text-xs font-bold mt-0.5">
              {candidate.role}
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-[#2B6CB0] block leading-tight">
              {candidate.pay}
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">
              per hour
            </span>
          </div>
        </div>

        {/* Key category tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {candidate.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-[10px] font-bold bg-blue-50/80 text-[#2B6CB0] border border-blue-100/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3.5 mt-2">
        <button
          onClick={() => onShortlist(candidate.id)}
          disabled={isRejected}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-extrabold shadow-sm transition-all cursor-pointer ${
            isShortlisted
              ? "bg-[#22C55E] text-white shadow-green-500/20"
              : "bg-white border border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-white"
          } ${isRejected ? "opacity-30 cursor-not-allowed border-slate-200 text-slate-400" : ""}`}
        >
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
          <span>{isShortlisted ? "Shortlisted" : "Shortlist"}</span>
        </button>
        <button
          onClick={() => onReject(candidate.id)}
          disabled={isShortlisted}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-extrabold shadow-sm transition-all cursor-pointer ${
            isRejected
              ? "bg-[#EF4444] text-white shadow-red-500/20"
              : "bg-white border border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white"
          } ${isShortlisted ? "opacity-30 cursor-not-allowed border-slate-200 text-slate-400" : ""}`}
        >
          <X className="w-3.5 h-3.5" strokeWidth={3} />
          <span>{isRejected ? "Rejected" : "Reject"}</span>
        </button>
      </div>

    </div>
  );
};

export default CandidateCard;
