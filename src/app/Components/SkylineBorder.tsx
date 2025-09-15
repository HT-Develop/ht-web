'use client'

const SkylineBorder: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="140"
        viewBox="0 0 1600 140"
        preserveAspectRatio="none"
      >
        {/* Background */}
        <rect width="1600" height="140" fill="#ffffff" />

        {/* Ground line */}
        <rect y="120" width="1600" height="20" fill="#000000" />

        {/* Define one skyline pattern */}
        <g id="skyline">
          {/* House */}
          <rect x="0" y="70" width="70" height="50" fill="#000000" />
          <polygon points="0,70 35,45 70,70" fill="#000000" />
          <rect x="25" y="95" width="20" height="25" fill="#f9f871" />
          <rect x="10" y="80" width="12" height="12" fill="#f9f871" />
          <rect x="50" y="80" width="12" height="12" fill="#f9f871" />

          {/* Mid-sized Building */}
          <rect x="90" y="40" width="60" height="80" fill="#000000" />
          <g fill="#f9f871">
            <rect x="100" y="50" width="12" height="15" />
            <rect x="120" y="50" width="12" height="15" />
            <rect x="100" y="70" width="12" height="15" />
            <rect x="120" y="70" width="12" height="15" />
            <rect x="100" y="90" width="12" height="15" />
            <rect x="120" y="90" width="12" height="15" />
          </g>

          {/* Crane */}
          <rect x="170" y="30" width="10" height="90" fill="#000000" />
          <rect x="140" y="30" width="80" height="6" fill="#000000" />
          <rect x="210" y="36" width="2" height="25" fill="#000000" />
          <rect x="208" y="61" width="10" height="6" fill="#000000" />
          <rect x="210" y="67" width="2" height="20" fill="#000000" />
          <circle cx="211" cy="87" r="4" fill="#f9f871" />

          {/* Tall Building */}
          <rect x="240" y="20" width="70" height="100" fill="#000000" />
          <g fill="#f9f871">
            <rect x="250" y="30" width="12" height="15" />
            <rect x="270" y="30" width="12" height="15" />
            <rect x="290" y="30" width="12" height="15" />
            <rect x="250" y="55" width="12" height="15" />
            <rect x="270" y="55" width="12" height="15" />
            <rect x="290" y="55" width="12" height="15" />
            <rect x="250" y="80" width="12" height="15" />
            <rect x="270" y="80" width="12" height="15" />
            <rect x="290" y="80" width="12" height="15" />
          </g>

          {/* Another House */}
          <rect x="330" y="75" width="70" height="45" fill="#000000" />
          <polygon points="330,75 365,50 400,75" fill="#000000" />
          <rect x="345" y="90" width="12" height="15" fill="#f9f871" />
          <rect x="370" y="90" width="12" height="15" fill="#f9f871" />
        </g>

        {/* Repeat skyline across width */}
        <use href="#skyline" x="0" />
        <use href="#skyline" x="400" />
        <use href="#skyline" x="800" />
        <use href="#skyline" x="1200" />
      </svg>
    </div>
  )
}

export default SkylineBorder
