import type { ReactNode } from 'react';
import type { SelectionStatusData } from '@/constants/bet';

const ICONS: Record<SelectionStatusData, ReactNode> = {
  // filled bg instead of border
  pending: <span className="w-2 h-2 border-1 ml-1 rounded-full border-[#ffffffcc]"></span>,

  won: (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
      <g fill="none" fillRule="evenodd">
        <circle cx="6.5" cy="6.5" r="6.5" fill="#189970" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          stroke="#FFF"
          strokeWidth=".3"
          d="M2.167 6.376 5.34 9.75l5.493-5.756-.663-.744-4.83 5.011-2.463-2.58z"
        />
      </g>
    </svg>
  ),

  lost: (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
      <g fill="none" fillRule="evenodd">
        <circle cx="6.5" cy="6.5" r="6.5" fill="#D05858" />
        <path
          fill="#FFF"
          d="m8.995 3.25.766.766-2.489 2.49 2.49 2.49-.767.765-2.489-2.489-2.49 2.49-.766-.767 2.49-2.489-2.49-2.49.766-.766 2.49 2.49 2.49-2.49Z"
        />
      </g>
    </svg>
  ),

  // same colour as the pending dot, dash cut out in the card colour
  void: (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
      <circle cx="6.5" cy="6.5" r="6.5" fill="#ffffffcc" />
      <rect x="3.5" y="5.9" width="6" height="1.2" rx=".6" fill="#303d39" />
    </svg>
  ),
};

export function SelectionStatusIcon({ status }: { status: SelectionStatusData }) {
  return (
    <span className="relative flex h-[20px] w-[22px] flex-[0_0_22px] items-center animate-[ruc-27a020_0.5s]">
      {ICONS[status]}
    </span>
  );
}
