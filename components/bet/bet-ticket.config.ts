import type { BetData, BetStatusData, SelectionTypes } from '@/constants/bet'; // adjust to wherever your types live

/* ---------- 1. Derive the real bet status from the selections ---------- */
export function deriveBetStatus(bet: BetData): BetStatusData {
  const { status: backend, selections } = bet;

  if (backend === 'cashout') return 'cashout'; // backend override
  if (selections.length === 0) return backend;

  if (selections.some((s) => s.status === 'lost')) return 'lost';

  const active = selections.filter((s) => s.status !== 'void');
  if (active.length === 0) return 'void';
  if (active.some((s) => s.status === 'pending')) return 'pending';

  return backend === 'partially-won' ? 'partially-won' : 'won';
}

/* ---------- 2. Per-status UI config (compile-time exhaustive) ---------- */
type BetStatusConfig = {
  border: string;
  pillLabel: string | null; // header pill, null = no pill
  pillClass: string;
  pillTextClass: string;
  pillShowsAmount: boolean;
  badge: string | null; // ribbon on top of the card
  showReuse: boolean;
  returnLabel: string;
  returnMuted: boolean;
  footer: 'cashout-button' | 'won' | 'muted' | 'cashed-out';
  footerLabel: string;
  payout: (bet: BetData) => number;
};

const won: BetStatusConfig = {
  border: 'border-[#00ffb6]',
  pillLabel: 'Won',
  pillClass: 'bg-[#00ffb6]',
  pillTextClass: 'text-[#111]',
  pillShowsAmount: true,
  badge: 'won',
  showReuse: false,
  returnLabel: 'Return',
  returnMuted: false,
  footer: 'won',
  footerLabel: 'Returned',
  payout: (b) => b.returns,
};

const lost: BetStatusConfig = {
  border: 'border-transparent',
  pillLabel: 'Lost',
  pillClass: 'bg-[#4f4f4f]',
  pillTextClass: 'text-[#ffffffcc]',
  pillShowsAmount: false,
  badge: null,
  showReuse: false,
  returnLabel: 'Return',
  returnMuted: true,
  footer: 'muted',
  footerLabel: 'Returned',
  payout: () => 0,
};

export const BET_STATUS_CONFIG: Record<BetStatusData, BetStatusConfig> = {
  pending: {
    border: 'border-transparent',
    pillLabel: null,
    pillClass: '',
    pillTextClass: '',
    pillShowsAmount: false,
    badge: null,
    showReuse: true,
    returnLabel: 'To Return',
    returnMuted: false,
    footer: 'cashout-button',
    footerLabel: 'Cash Out',
    payout: (b) => b.stake,
  },
  won,
  'partially-won': { ...won, pillLabel: 'Partially Won', badge: null },
  lost,
  void: { ...lost, pillLabel: 'Void', payout: (b) => b.stake },
  cashout: {
    border: 'border-transparent',
    pillLabel: 'Cashed Out',
    pillClass: 'bg-[#4f4f4f]',
    pillTextClass: 'text-[#48dbac]',
    pillShowsAmount: true,
    badge: null,
    showReuse: false,
    returnLabel: 'Return',
    returnMuted: true,
    footer: 'cashed-out',
    footerLabel: 'Cashed Out',
    payout: (b) => b.returns,
  },
};

/* ---------- 3. Label records ---------- */
export const BET_TYPE_LABEL: Record<BetData['type'], { open: string; settled: string }> = {
  single: { open: 'Single', settled: 'Single' },
  double: { open: 'Double', settled: 'Doubles' },
  multiple: { open: 'Treble', settled: 'Trebles' },
};

// Adding a new matchSelectionType to your union will error here until you label it
export const SELECTION_TYPE_LABEL: Record<SelectionTypes['matchSelectionType'], string> = {
  'correct score': 'Correct Score',
  'over/under': 'Over/Under',
  'match result': 'Match Result',
};

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
  // currency: 'USD',
});

export const formatMoney = (n: number) => money.format(n);
export const formatOdds = (n: number) => n.toFixed(2);
