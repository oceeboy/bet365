import { bet_data, cashout_offers } from '@/constants/bet-data';
import { BetTicketCard } from '../bet';
import { LostTicketCard } from './lost-card';
import { OpenTicketCard } from './open-card';
import { TicketCard } from './ticket-card';
import { WonTicketCard } from './won-card';

export function SettledUi() {
  // for
  return (
    <section>
      <div className="px-2.5 flex flex-col pb-2.5">
        {bet_data.map((bet) => (
          <BetTicketCard key={bet.id} bet={bet} cashoutValue={cashout_offers[bet.id]} />
        ))}
      </div>
      <div className="flex justify-center box-border">
        <button className="flex h-[45px] w-full max-w-[315px] cursor-pointer items-center justify-center rounded-[5px] border border-[#fff3] hover:border-[#fff6] bg-transparent text-[15px] font-bold text-[#fff] mt-[20px] mb-[30px] transition-[border-color] duration-[250ms]">
          View More
        </button>
      </div>
    </section>
  );
}
