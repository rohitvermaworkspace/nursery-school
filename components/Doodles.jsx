export function DoodleRainbow({ className = '' }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none">
      <path d="M5 55a45 45 0 0190 0" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
      <path d="M15 55a35 35 0 0170 0" stroke="#FFC928" strokeWidth="5" strokeLinecap="round" />
      <path d="M25 55a25 25 0 0150 0" stroke="#65B82E" strokeWidth="5" strokeLinecap="round" />
      <path d="M35 55a15 15 0 0130 0" stroke="#2F91D9" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function DoodleSun({ className = '', color = 'var(--color-yellow)' }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      <circle cx="30" cy="30" r="12" fill={color} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4
        return (
          <line
            key={i}
            x1={30 + Math.cos(a) * 18}
            y1={30 + Math.sin(a) * 18}
            x2={30 + Math.cos(a) * 26}
            y2={30 + Math.sin(a) * 26}
            stroke={color}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}

export function DoodleStar({ className = '', color = '#FFC928' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill={color}>
      <path d="M20 2l4.7 12.6L38 20l-13.3 5.4L20 38l-4.7-12.6L2 20l13.3-5.4L20 2Z" />
    </svg>
  )
}

export function DoodleHeart({ className = '', color = '#E8577E' }) {
  return (
    <svg viewBox="0 0 40 36" className={className} fill={color}>
      <path d="M20 33S3 22 3 11a9 9 0 0117-4 9 9 0 0117 4c0 11-17 22-17 22Z" />
    </svg>
  )
}

export function DoodlePaperPlane({ className = '', color = 'var(--color-ink)' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M4 20 36 6 22 36l-4-12-14-4Z" />
      <path d="M18 24 36 6" />
    </svg>
  )
}

export function DoodleButterfly({ className = '', color = '#9B5DE5' }) {
  return (
    <svg viewBox="0 0 50 40" className={className} fill={color}>
      <ellipse cx="16" cy="14" rx="13" ry="10" />
      <ellipse cx="34" cy="14" rx="13" ry="10" />
      <ellipse cx="16" cy="28" rx="9" ry="7" opacity="0.75" />
      <ellipse cx="34" cy="28" rx="9" ry="7" opacity="0.75" />
      <rect x="23.5" y="8" width="3" height="24" rx="1.5" fill="#4B3A2A" />
    </svg>
  )
}

export function DoodleFlower({ className = '', color = 'var(--color-pink)' }) {
  return (
    <svg viewBox="0 0 40 50" className={className}>
      <line x1="20" y1="24" x2="20" y2="48" stroke="var(--color-green)" strokeWidth="3" strokeLinecap="round" />
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * Math.PI) / 3
        return <circle key={i} cx={20 + Math.cos(a) * 9} cy={16 + Math.sin(a) * 9} r="7" fill={color} />
      })}
      <circle cx="20" cy="16" r="6" fill="var(--color-yellow)" />
    </svg>
  )
}

export function DoodleTree({ className = '' }) {
  return (
    <svg viewBox="0 0 60 70" className={className}>
      <rect x="26" y="45" width="8" height="24" rx="2" fill="#8B5E3C" />
      <circle cx="30" cy="28" r="24" fill="var(--color-green)" />
      <circle cx="16" cy="36" r="14" fill="var(--color-green)" />
      <circle cx="44" cy="36" r="14" fill="var(--color-green)" />
    </svg>
  )
}

export function GrassDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 1200 52" preserveAspectRatio="none" className={className} aria-hidden="true">
      {/* Lighter back grass layer */}
      <path
        d="M0 30c25 10 50 10 75 0s50-10 75 0 50 10 75 0 50-10 75 0 50 10 75 0 50-10 75 0 50 10 75 0 50-10 75 0 50 10 75 0 50-10 75 0 50 10 75 0 50-10 75 0V52H0V30Z"
        fill="var(--color-green)"
        opacity="0.5"
      />
      {/* Main grass wave */}
      <path
        d="M0 24c30 14 60 14 90 0s60-14 90 0 60 14 90 0 60-14 90 0 60 14 90 0 60-14 90 0 60 14 90 0 60-14 90 0 60 14 90 0 60-14 90 0 60 14 90 0 60-14 90 0V52H0V24Z"
        fill="var(--color-green-deep)"
      />
      {/* Grass blade silhouettes — varied heights */}
      <g fill="var(--color-green-deep)" opacity="0.9">
        <path d="M18 26 Q20 8 22 26" />
        <path d="M42 28 Q44 14 46 28" />
        <path d="M68 25 Q71 5 74 25" />
        <path d="M95 27 Q97 10 99 27" />
        <path d="M122 26 Q124 7 126 26" />
        <path d="M150 28 Q152 12 154 28" />
        <path d="M178 25 Q181 4 184 25" />
        <path d="M208 27 Q210 9 212 27" />
        <path d="M238 26 Q240 6 242 26" />
        <path d="M268 28 Q270 11 272 28" />
        <path d="M298 25 Q301 5 304 25" />
        <path d="M330 27 Q332 8 334 27" />
        <path d="M362 26 Q364 7 366 26" />
        <path d="M395 28 Q397 13 399 28" />
        <path d="M428 25 Q431 4 434 25" />
        <path d="M462 27 Q464 9 466 27" />
        <path d="M498 26 Q500 6 502 26" />
        <path d="M535 28 Q537 11 539 28" />
        <path d="M572 25 Q575 5 578 25" />
        <path d="M610 27 Q612 8 614 27" />
        <path d="M648 26 Q650 7 652 26" />
        <path d="M688 28 Q690 12 692 28" />
        <path d="M728 25 Q731 4 734 25" />
        <path d="M768 27 Q770 9 772 27" />
        <path d="M810 26 Q812 6 814 26" />
        <path d="M852 28 Q854 11 856 28" />
        <path d="M895 25 Q898 5 901 25" />
        <path d="M938 27 Q940 8 942 27" />
        <path d="M982 26 Q984 7 986 26" />
        <path d="M1028 28 Q1030 13 1032 28" />
        <path d="M1075 25 Q1078 4 1081 25" />
        <path d="M1122 27 Q1124 9 1126 27" />
        <path d="M1170 26 Q1172 6 1174 26" />
      </g>
    </svg>
  )
}

export function DoodleCloud({ className = '', color = '#ffffff' }) {
  return (
    <svg viewBox="0 0 80 50" className={className}>
      <ellipse cx="40" cy="30" rx="28" ry="16" fill={color} />
      <ellipse cx="22" cy="28" rx="18" ry="14" fill={color} />
      <ellipse cx="58" cy="28" rx="18" ry="14" fill={color} />
      <ellipse cx="32" cy="20" rx="16" ry="12" fill={color} />
      <ellipse cx="50" cy="20" rx="14" ry="11" fill={color} />
    </svg>
  )
}

export function DoodleBalloon({ className = '', color = '#E8577E' }) {
  return (
    <svg viewBox="0 0 40 60" className={className}>
      <ellipse cx="20" cy="22" rx="14" ry="18" fill={color} />
      <ellipse cx="20" cy="22" rx="14" ry="18" fill="white" opacity="0.2" />
      <polygon points="17,39 20,44 23,39" fill={color} />
      <line x1="20" y1="44" x2="20" y2="58" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

export function DoodleLeaf({ className = '', color = 'var(--color-green)' }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <path
        d="M20 4C12 8 4 18 4 26c0 8 7.2 10 16 10s16-2 16-10C36 18 28 8 20 4Z"
        fill={color}
      />
      <path
        d="M20 12v24M14 20c2-1 4-1 6 0M26 20c-2-1-4-1-6 0M12 28c3-1 5-1 8 0M28 28c-3-1-5-1-8 0"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  )
}

export function DoodleTeddy({ className = '' }) {
  return (
    <svg viewBox="0 0 70 80" className={className}>
      {/* Body */}
      <ellipse cx="35" cy="55" rx="20" ry="22" fill="#C4956A" />
      {/* Head */}
      <circle cx="35" cy="28" r="16" fill="#C4956A" />
      {/* Ears */}
      <circle cx="20" cy="16" r="7" fill="#C4956A" />
      <circle cx="50" cy="16" r="7" fill="#C4956A" />
      <circle cx="20" cy="16" r="4.5" fill="#A07850" />
      <circle cx="50" cy="16" r="4.5" fill="#A07850" />
      {/* Eyes */}
      <circle cx="29" cy="25" r="2.5" fill="#4B3A2A" />
      <circle cx="41" cy="25" r="2.5" fill="#4B3A2A" />
      <circle cx="29.8" cy="24.2" r="0.8" fill="white" />
      <circle cx="41.8" cy="24.2" r="0.8" fill="white" />
      {/* Nose */}
      <ellipse cx="35" cy="30" rx="3.5" ry="2.8" fill="#4B3A2A" />
      {/* Mouth */}
      <path d="M31 33 Q35 38 39 33" stroke="#4B3A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Belly */}
      <ellipse cx="35" cy="58" rx="12" ry="14" fill="#D4A574" />
      {/* Arms */}
      <ellipse cx="16" cy="50" rx="6" ry="10" fill="#C4956A" transform="rotate(-15 16 50)" />
      <ellipse cx="54" cy="50" rx="6" ry="10" fill="#C4956A" transform="rotate(15 54 50)" />
      {/* Feet */}
      <ellipse cx="26" cy="74" rx="8" ry="5" fill="#C4956A" />
      <ellipse cx="44" cy="74" rx="8" ry="5" fill="#C4956A" />
    </svg>
  )
}

export function DoodleTrain({ className = '' }) {
  return (
    <svg viewBox="0 0 120 70" className={className}>
      {/* Track */}
      <rect x="0" y="62" width="120" height="4" rx="2" fill="#8B5E3C" />
      {/* Wheels */}
      <circle cx="22" cy="58" r="7" fill="#4B3A2A" />
      <circle cx="22" cy="58" r="3" fill="#8B5E3C" />
      <circle cx="48" cy="58" r="7" fill="#4B3A2A" />
      <circle cx="48" cy="58" r="3" fill="#8B5E3C" />
      <circle cx="85" cy="58" r="7" fill="#4B3A2A" />
      <circle cx="85" cy="58" r="3" fill="#8B5E3C" />
      <circle cx="105" cy="58" r="7" fill="#4B3A2A" />
      <circle cx="105" cy="58" r="3" fill="#8B5E3C" />
      {/* Coal car */}
      <rect x="6" y="28" width="30" height="28" rx="4" fill="#7B3FE4" />
      <rect x="10" y="32" width="22" height="10" rx="2" fill="#6A2FCC" />
      <rect x="10" y="32" width="22" height="10" rx="2" fill="white" opacity="0.15" />
      {/* Main engine */}
      <rect x="40" y="20" width="36" height="36" rx="5" fill="#FF8A00" />
      <rect x="44" y="24" width="16" height="12" rx="3" fill="white" opacity="0.25" />
      <circle cx="68" cy="42" r="5" fill="#FFC928" />
      {/* Cabin */}
      <rect x="78" y="14" width="28" height="42" rx="5" fill="#65B82E" />
      <rect x="82" y="18" width="20" height="14" rx="3" fill="white" opacity="0.25" />
      {/* Smokestack */}
      <rect x="48" y="8" width="8" height="14" rx="3" fill="#4B3A2A" />
      {/* Smoke puffs */}
      <circle cx="52" cy="5" r="4" fill="#E0E0E0" opacity="0.6" />
      <circle cx="46" cy="2" r="3" fill="#E0E0E0" opacity="0.4" />
      <circle cx="58" cy="1" r="2.5" fill="#E0E0E0" opacity="0.3" />
      {/* Cowcatcher */}
      <polygon points="6,58 16,52 16,58" fill="#4B3A2A" />
      {/* Coupling */}
      <rect x="36" y="46" width="6" height="4" rx="1" fill="#8B5E3C" />
    </svg>
  )
}
