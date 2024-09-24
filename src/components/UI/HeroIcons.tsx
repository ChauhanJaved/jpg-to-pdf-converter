export enum IconNames {
  CheckCircle = "check-circle",
  Envelope = "envelope",
  ArrowLongRight = "arrow-long-right",
  XMark = "x-mark",
  Bars3 = "bars-3",
  MagnifyingGlassPlus = "magnifying-glass-plus",
  ArrowDownTray = "arrow-down-tray",
  Clock = "clock",
  Link = "link",
  ArrowUp = "arrow-up",
}

interface HeroIconsProps {
  iconName: IconNames;
  className: string;
  onClick?: () => void;
  strokeWidth?: number;
}
export default function HeroIcons({
  iconName,
  className,
  onClick,
  strokeWidth,
}: HeroIconsProps) {
  let pathData;
  switch (iconName) {
    case IconNames.CheckCircle:
      pathData =
        "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";
      break;
    case IconNames.Envelope:
      pathData =
        "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75";
      break;
    case IconNames.ArrowLongRight:
      pathData = "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3";
      break;
    case IconNames.XMark:
      pathData = "M6 18 18 6M6 6l12 12";
      break;
    case IconNames.Bars3:
      pathData = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5";
      break;
    case IconNames.MagnifyingGlassPlus:
      pathData =
        "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6";
      break;
    case IconNames.ArrowDownTray:
      pathData =
        "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3";
      break;
    case IconNames.Clock:
      pathData = "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";
      break;
    case IconNames.Link:
      pathData =
        "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244";
      break;
    case IconNames.ArrowUp:
      pathData = "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18";
      break;
    default:
      pathData =
        "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z";
  }

  return (
    <svg
      id={iconName}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ? strokeWidth : 1}
      stroke="currentColor"
      onClick={onClick}
      className={className}
      aria-label={iconName}
      role="img"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={pathData} />
    </svg>
  );
}
