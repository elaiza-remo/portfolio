import React from "react";

// Paper plane, the dogs, clouds and other small drawings used around the site.

export function Plane({ width = 34, height = 26, light = "#C9C5FF", mid = "#8F88FF", dark = "var(--accent)", className }) {
  return (
    <svg className={className} aria-hidden="true" width={width} height={height} viewBox="0 0 64 48">
      <path d="M2 22 L62 4 L24 30 Z" fill={light} />
      <path d="M24 30 L62 4 L30 44 Z" fill={mid} />
      {dark && <path d="M24 30 L30 44 L21 35 Z" fill={dark} />}
    </svg>
  );
}

export function Westie({ className }) {
  return (
    <svg className={className} aria-hidden="true" width="20" height="20" viewBox="0 0 40 40">
      <path d="M10 14 L13 3 L18 12 Z M30 14 L27 3 L22 12 Z" fill="#FFFFFF" stroke="#1C1B22" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 24 C4 14 12 9 20 9 C28 9 36 14 34 24 C36 32 28 38 20 37 C12 38 4 32 6 24 Z" fill="#FFFFFF" stroke="#1C1B22" strokeWidth="2" />
      <circle cx="15" cy="22" r="2" fill="#1C1B22" />
      <circle cx="25" cy="22" r="2" fill="#1C1B22" />
      <ellipse cx="20" cy="28" rx="2.8" ry="2.2" fill="#1C1B22" />
    </svg>
  );
}

export function Schnauzer({ className }) {
  return (
    <svg className={className} aria-hidden="true" width="20" height="20" viewBox="0 0 40 40">
      <path d="M10 10 L4 21 L13 17 Z M30 10 L36 21 L27 17 Z" fill="#5B5E66" stroke="#1C1B22" strokeWidth="2" strokeLinejoin="round" />
      <rect x="10" y="8" width="20" height="23" rx="7" fill="#8A8D93" stroke="#1C1B22" strokeWidth="2" />
      <path d="M11 27 C11 39 29 39 29 27 L26 24 H14 Z" fill="#E6E6E6" stroke="#1C1B22" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 16 L18 14 M28 16 L22 14" stroke="#EDEDED" strokeWidth="3" strokeLinecap="round" />
      <circle cx="15.5" cy="19.5" r="1.8" fill="#1C1B22" />
      <circle cx="24.5" cy="19.5" r="1.8" fill="#1C1B22" />
      <ellipse cx="20" cy="25" rx="2.6" ry="2" fill="#1C1B22" />
    </svg>
  );
}

export function Cloud({ width, height, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 80 40">
      <path d="M16 36h48a11 11 0 0 0 0-22 15 15 0 0 0-28-5A12 12 0 0 0 16 36z" fill={fill} />
    </svg>
  );
}

export function NumberPlane() {
  return (
    <svg aria-hidden="true" width="120" height="20" viewBox="0 0 120 20">
      <path d="M2 14 Q 50 2, 96 10" fill="none" stroke="#B9B4FF" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" />
      <path d="M98 9 L118 3 L106 12 Z" fill="#8F88FF" />
      <path d="M106 12 L118 3 L108 17 Z" fill="var(--accent)" />
    </svg>
  );
}

const STARS = [
  [80, 60, 1.6], [210, 140, 1], [330, 40, 1.4], [460, 190, 1], [540, 80, 1.8], [690, 30, 1],
  [760, 160, 1.3], [900, 70, 1], [1010, 200, 1.6], [1120, 50, 1.2], [1230, 130, 1], [1340, 60, 1.7],
  [1390, 230, 1], [140, 300, 1.2], [1280, 330, 1.3], [60, 460, 1], [1400, 480, 1.1]
];

export function Stars() {
  return (
    <svg className="stars" aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none">
      <g fill="#EEEBFA">
        {STARS.map(([cx, cy, r]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
        ))}
      </g>
      <circle cx="1180" cy="110" r="22" fill="#F4F0D8" opacity=".9" />
      <circle cx="1192" cy="102" r="20" fill="#171A2B" />
    </svg>
  );
}

export function Postmark({ date }) {
  const mono = "Courier Prime, monospace";
  return (
    <svg className="postmark" width="150" height="80" viewBox="0 0 150 80">
      <path d="M0 28 q12 -8 24 0 t24 0 t24 0 M0 40 q12 -8 24 0 t24 0 t24 0 M0 52 q12 -8 24 0 t24 0 t24 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="112" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="112" y="30" textAnchor="middle" fontFamily={mono} fontSize="8" fill="currentColor">EDMONTON AB</text>
      <text x="112" y="44" textAnchor="middle" fontFamily={mono} fontSize="10" fontWeight="700" fill="currentColor">{date}</text>
      <text x="112" y="56" textAnchor="middle" fontFamily={mono} fontSize="8" fill="currentColor">YEG · CANADA</text>
    </svg>
  );
}
