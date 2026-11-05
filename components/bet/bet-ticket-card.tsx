'use client';

import { cn } from 'cn';
import { useMemo, useState } from 'react';
import type { BetData, SelectionTypes } from '@/constants/bet';
import { SelectionStatusIcon } from './selection-status-icon';
import {
  BET_STATUS_CONFIG,
  BET_TYPE_LABEL,
  SELECTION_TYPE_LABEL,
  deriveBetStatus,
  formatMoney,
  formatOdds,
} from './bet-ticket.config';

/* eslint-disable @next/next/no-img-element */

// Paste your existing SVGs here unchanged
function ReuseIcon() {
  return (
    <svg
      width="15"
      height="23"
      viewBox="0 0 15 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-4"
    >
      <path
        d="M8 0V3.5H6.66513C5.57556 3.5 4.50647 3.79612 3.57216 4.3567C2.86495 4.78103 2.25262 5.34633 1.77325 6.01745L1.51605 6.37752C0.530048 7.75793 0 9.41193 0 11.1083V15L2.5 12.5V10.5534C2.5 9.25227 3.07791 8.01841 4.07743 7.18547C4.99662 6.41949 6.15526 6 7.35177 6H8V8.5L12 4.5L8 0Z"
        fill="currentColor"
      />
      <path
        d="M7 22.5V19H8.33487C9.42444 19 10.4935 18.7039 11.4278 18.1433C12.135 17.719 12.7474 17.1537 13.2267 16.4826L13.4839 16.1225C14.47 14.7421 15 13.0881 15 11.3917V7.5L12.5 10V11.9466C12.5 13.2477 11.9221 14.4816 10.9226 15.3145C10.0034 16.0805 8.84474 16.5 7.64823 16.5H7V14L3 18L7 22.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg
      width="12"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Calendar outline */}
      <path
        fill="currentColor"
        transform="translate(0 5.11612)"
        fillRule="evenodd"
        d="M3.5 1.5L2.5 1.5C1.9477153 1.5 1.5 1.9477153 1.5 2.5L1.5 7.5C1.5 8.0522852 1.9477153 8.5 2.5 8.5L9.5 8.5C10.052285 8.5 10.5 8.0522852 10.5 7.5L10.5 2.5C10.5 1.9477153 10.052285 1.5 9.5 1.5L8.5 1.5L8.5 0L10 0C11.104569 0 12 0.89543051 12 2L12 8C12 9.1045694 11.104569 10 10 10L2 10C0.89543051 10 0 9.1045694 0 8L0 2C0 0.89543051 0.89543051 2.220446e-16 2 0L3.5 0L3.5 1.5Z"
      />

      {/* Upload arrow */}
      <path
        fill="currentColor"
        transform="translate(2.96967 0.323226)"
        fillRule="evenodd"
        d="M2.6767766 0.14644662C2.8720388 -0.048815537 3.1886213 -0.048815537 3.3838835 0.14644662L5.9053302 2.6678932C6.1124368 2.875 6.1124368 3.2107863 5.9053302 3.4178932C5.6982231 3.625 5.3624368 3.625 5.1553302 3.4178932L3.53 1.7920001L3.5303302 8.2928934C3.5303302 8.5690355 3.3064725 8.7928934 3.0303302 8.7928934C2.7541878 8.7928934 2.5303302 8.5690355 2.5303302 8.2928934L2.53 1.7920001L0.90533006 3.4178932C0.72123516 3.6019881 0.43546745 3.6224432 0.22877856 3.4792583L0.15533009 3.4178932C-0.051776696 3.2107863 -0.051776696 2.875 0.15533009 2.6678932L2.6767766 0.14644662Z"
      />

      {/* Arrow outline */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeMiterlimit="10"
        transform="translate(2.96967 0.323226)"
        fillRule="evenodd"
        d="M2.6767766 0.14644662C2.8720388 -0.048815537 3.1886213 -0.048815537 3.3838835 0.14644662L5.9053302 2.6678932C6.1124368 2.875 6.1124368 3.2107863 5.9053302 3.4178932C5.6982231 3.625 5.3624368 3.625 5.1553302 3.4178932L3.53 1.7920001L3.5303302 8.2928934C3.5303302 8.5690355 3.3064725 8.7928934 3.0303302 8.7928934C2.7541878 8.7928934 2.5303302 8.5690355 2.5303302 8.2928934L2.53 1.7920001L0.90533006 3.4178932C0.72123516 3.6019881 0.43546745 3.6224432 0.22877856 3.4792583L0.15533009 3.4178932C-0.051776696 3.2107863 -0.051776696 2.875 0.15533009 2.6678932L2.6767766 0.14644662Z"
      />
    </svg>
  );
}

function TeamLine({
  team,
  score,
  showScore,
  meta,
}: {
  team: Team;
  score: number;
  showScore: boolean;
  meta?: string;
}) {
  return (
    <div className="flex items-center box-border">
      <div className="mr-1.25 inline-flex h-4 w-4 flex-[0_0_auto] items-center">
        {team.assets.logo ? (
          <img src={team.assets.logo} alt="" className="h-full w-full" />
        ) : (
          <span className="h-4 w-4 rounded-full bg-[#ffffff1a]" />
        )}
      </div>
      <span className="mr-1.25 flex min-h-5 flex-1 items-center overflow-hidden text-ellipsis whitespace-nowrap text-[11px] leading-[13px] font-semibold text-[var(--color-greyFF)]">
        {team.shortName || team.name}
      </span>
      {showScore && (
        <span className="h-5 min-w-5.25 flex-[0_0_auto] rounded-xs bg-[#4f4f4f] px-1.5 py-px text-center text-[11px] leading-4 font-bold text-white">
          {score}
        </span>
      )}
      {meta && (
        <span className="text-[11px] leading-[13px] font-semibold text-[#ffffffcc]">{meta}</span>
      )}
    </div>
  );
}

function SelectionRow({ selection, divider }: { selection: SelectionTypes; divider: boolean }) {
  const { matchFixture: m } = selection;
  const isPreMatch = m.status === 'pending';

  return (
    <div
      className={cn(
        'relative flex flex-col gap-y-[5px] px-[15px] pt-[10px] pb-[15px] box-border',
        divider &&
          "after:content-[''] after:absolute after:bottom-0 after:left-[10px] after:right-[10px] after:h-px after:bg-[#ffffff1a]",
      )}
    >
      <div className="flex items-start">
        <div className="flex min-h-[20px] flex-[0_0_16px] self-stretch">
          <SelectionStatusIcon status={selection.status} />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex justify-start gap-x-[10px]">
            <span className="min-w-0 flex-[0_1_auto] break-words text-[14px] leading-[20px] font-bold">
              {selection.name}
            </span>
            <span className="mr-[5px] flex-[0_0_auto] whitespace-nowrap text-[14px] leading-[20px] text-[var(--color-greyFF)]">
              {formatOdds(selection.odds)}
            </span>
          </div>
          <div className="line-clamp-2 max-h-6.5 overflow-hidden text-[11px] leading-3.25 text-[#ffffffcc]">
            {SELECTION_TYPE_LABEL[selection.matchSelectionType]}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col">
        <div className="mb-1.25">
          <TeamLine
            team={m.homeTeam}
            score={m.homeTeamScore}
            showScore={!isPreMatch}
            meta={isPreMatch ? m.kickOffDate : undefined}
          />
        </div>
        <TeamLine
          team={m.awayTeam}
          score={m.awayTeamScore}
          showScore={!isPreMatch}
          meta={isPreMatch ? m.kickOffTime : undefined}
        />
      </div>
    </div>
  );
}

export function BetTicketCard({
  bet,
  cashoutValue,
}: {
  bet: BetData;
  cashoutValue?: number; // live cash-out offer, only used while pending
}) {
  const [isOpen, setIsOpen] = useState(false);

  const status = useMemo(() => deriveBetStatus(bet), [bet]);
  const ui = BET_STATUS_CONFIG[status];
  const payout = formatMoney(ui.payout(bet));

  const typeLabel = BET_TYPE_LABEL[bet.type][status === 'pending' ? 'open' : 'settled'];
  const summary = bet.selections.map((s) => s.name).join(' , ');

  return (
    <div
      className={cn(
        'relative mb-2.5 box-border overflow-hidden rounded-[8px] border-2 bg-linear-to-br from-[#303d39] to-[#353535]',
        ui.border,
      )}
    >
      {/* ---------- header ---------- */}
      <div className="relative cursor-pointer overflow-hidden rounded-lg outline-none">
        <div
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          className="relative box-border flex h-13.75 items-center justify-between text-white"
        >
          <div className="flex flex-1 flex-wrap items-baseline gap-x-2 self-center overflow-hidden pl-3.75">
            <span className="shrink-0 text-[15px] leading-5.75 font-bold text-[#00ffb6]">
              {formatMoney(bet.stake)}
            </span>
            <span className="shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-[15px] leading-[23px] font-bold text-[#00ffb6]">
              {typeLabel}
            </span>
            <span
              className={cn(
                'mr-auto min-w-0 flex-1 basis-0 overflow-hidden text-ellipsis whitespace-nowrap pr-[10px] text-[11px] leading-[23px] text-[#ddd] transition-opacity duration-300 ease-in-out',
                isOpen ? 'opacity-0' : 'opacity-100',
              )}
            >
              {summary}
            </span>
          </div>

          {ui.pillLabel && (
            <div
              className={cn(
                'transition-opacity duration-300 ease-in-out',
                isOpen ? 'pointer-events-none opacity-0' : 'opacity-100',
              )}
              aria-hidden={isOpen}
            >
              <span
                className={cn(
                  'mr-3.75 flex h-8 min-w-[85px] max-w-[140px] flex-col items-center justify-center rounded-2xl px-3',
                  ui.pillClass,
                )}
              >
                <span
                  className={cn(
                    'block whitespace-nowrap text-center text-xs font-bold',
                    ui.pillTextClass,
                  )}
                >
                  {ui.pillLabel}
                </span>
                {ui.pillShowsAmount && (
                  <span
                    className={cn(
                      'block whitespace-nowrap text-center text-xs font-bold',
                      ui.pillTextClass,
                    )}
                  >
                    {payout}
                  </span>
                )}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ---------- body ---------- */}
      <div
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
        aria-hidden={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="box-border flex flex-col pb-3.75">
            {/* actions */}
            <div className="flex w-full items-center justify-center gap-[5px] px-[15px]">
              {ui.showReuse && <ActionButton label="Reuse Selections" icon={<ReuseIcon />} />}
              <ActionButton label="Share" icon={<ShareIcon />} />
            </div>

            {/* selections */}
            {bet.selections.map((sel, i) => (
              <SelectionRow key={sel.id} selection={sel} divider={i < bet.selections.length - 1} />
            ))}

            {/* summary + footer */}
            <div className="box-border flex w-full flex-wrap items-center pt-3.75 min-[590px]:flex-nowrap min-[590px]:border-t min-[590px]:border-[#ffffff1a]">
              <div className="flex-[1_0_50%] self-start px-3.75 min-[590px]:flex-[1_1_25%] min-[950px]:flex-[1_1_33.333%]">
                <div className="flex flex-col text-white">
                  <span className="pb-0.5 text-[12px] leading-3.5 whitespace-nowrap opacity-60">
                    Stake
                  </span>
                  <span className="text-[17px] leading-5 font-semibold">
                    {formatMoney(bet.stake)}
                  </span>
                </div>
              </div>

              <div className="flex flex-[1_0_50%] flex-col items-end px-3.75 min-[590px]:flex-[1_1_25%] min-[590px]:items-start min-[590px]:self-start min-[950px]:flex-[1_1_33.333%]">
                <div className={cn('flex flex-col text-white', ui.returnMuted && 'text-[#fff6]')}>
                  <span className="pb-0.5 text-[12px] leading-3.5 whitespace-nowrap opacity-60">
                    {ui.returnLabel}
                  </span>
                  <span className="text-[17px] leading-5 font-semibold">
                    {formatMoney(bet.returns)}
                  </span>
                </div>
              </div>

              <FooterAction
                kind={ui.footer}
                label={ui.footerLabel}
                payout={payout}
                cashoutValue={cashoutValue}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- won ribbon ---------- */}
      {ui.badge && (
        <span
          aria-hidden={!isOpen}
          className={cn(
            `pointer-events-none absolute right-[34px] -top-[3px] z-[1] grid h-[29px] place-content-center bg-[#00ffb6] text-[16px] font-black text-[#0d221b] uppercase transition-[translate,opacity] duration-250 ease-in-out
            before:absolute before:top-0 before:left-[-23px] before:h-[29px] before:w-[23px] before:bg-[#00ffb6] before:content-[''] before:[mask-image:var(--icon-wonBadgeEndCap)] before:[mask-position:center] before:[mask-repeat:no-repeat]
            after:absolute after:top-0 after:right-[-23px] after:h-[29px] after:w-[23px] after:bg-[#00ffb6] after:content-[''] after:[mask-image:var(--icon-wonBadgeEndCap)] after:[mask-position:center] after:[mask-repeat:no-repeat] after:[transform:scaleX(-1)]`,
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
          )}
        >
          {ui.badge}
        </span>
      )}
    </div>
  );
}

function ActionButton({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="min-w-0 flex-1">
      <button className="flex h-[35px] w-full cursor-pointer items-center justify-center gap-[5px] rounded-[3px] border-0 bg-[#ffffff12]">
        <div className="ml-[10px] flex h-[15px] w-[15px] min-w-[15px] items-center justify-center text-[#e4e4e4]">
          {icon}
        </div>
        <p className="mr-[10px] line-clamp-2 max-h-[30px] overflow-hidden break-words text-[12px] leading-[15px] font-bold text-[#e4e4e4]">
          {label}
        </p>
      </button>
    </div>
  );
}

function FooterAction({
  kind,
  label,
  payout,
  cashoutValue,
}: {
  kind: 'cashout-button' | 'won' | 'muted' | 'cashed-out';
  label: string;
  payout: string;
  cashoutValue?: number;
}) {
  if (kind === 'cashout-button' && cashoutValue === undefined) return null;

  const wrapper =
    'flex-[1_0_100%] -mb-3.75 mt-3.75 min-[590px]:my-0 min-[590px]:flex min-[590px]:flex-[1_1_50%] min-[590px]:justify-end min-[590px]:px-3.75 min-[950px]:flex-[1_1_33.333%]';

  if (kind === 'cashout-button') {
    return (
      <div className={wrapper}>
        <button className="flex h-11.25 w-full items-center justify-center rounded-b-[5px] bg-[#008F5A] px-[10px]">
          <span className="flex flex-row-reverse flex-wrap items-center justify-center gap-x-2.5 text-[15px] leading-4.5 font-bold text-white">
            <span>{formatMoney(cashoutValue!)}</span>
            <span>{label}</span>
          </span>
        </button>
      </div>
    );
  }

  const tone = {
    won: 'text-[#00ffb6]',
    muted: 'text-[#fffc]',
    'cashed-out': 'text-[#48dbac]',
  }[kind];

  return (
    <div className={wrapper}>
      <div className="flex h-11.25 w-full cursor-default items-center justify-center rounded-[5px] bg-[#ffffff12] px-[10px]">
        <div
          className={cn(
            'flex flex-wrap items-center justify-center gap-x-2.5 text-[15px] leading-4.5 font-bold',
            kind === 'cashed-out' || 'won' ? 'flex-row' : 'flex-row-reverse',
            tone,
          )}
        >
          {kind === 'won' && (
            <span className="inline-flex h-[21px] w-[21px] items-center justify-center rounded-full border-2 border-[#00ffb6] text-[12px] leading-none">
              ✓
            </span>
          )}
          <span>{payout} </span>
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}
