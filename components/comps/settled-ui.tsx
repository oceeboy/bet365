import { LostTicketCard } from './lost-card';
import { OpenTicketCard } from './open-card';
import { TicketCard } from './ticket-card';
import { WonTicketCard } from './won-card';

export function SettledUi() {
  // for
  return (
    <div className="px-7.5 flex flex-col pb-2.5">
      {/* for the above deployment mobile phone uses px-2.5 not px-7.5 which is for desktop */}
      <TicketCard />
      <WonTicketCard />
      <LostTicketCard />
      <OpenTicketCard />
    </div>
  );
}
