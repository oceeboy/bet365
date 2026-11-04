import { bet_data, cashout_offers } from '@/constants/bet-data';
import { OpenTicketCard } from './open-card';
import { BetTicketCard } from '../bet';

export function OpendUi() {
  // for
  return (
    <div className="px-2.5 flex flex-col pb-2.5">
      {bet_data
        .filter((i) => i.status === 'pending')
        .map((bet) => (
          <BetTicketCard key={bet.id} bet={bet} cashoutValue={cashout_offers[bet.id]} />
        ))}
    </div>
  );
}
