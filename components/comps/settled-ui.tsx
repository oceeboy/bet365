import { LostTicketCard } from './lost-card';
import { OpenTicketCard } from './open-card';
import { TicketCard } from './ticket-card';
import { WonTicketCard } from './won-card';

export function SettledUi() {
  // for
  return (
    <section>
      <div className="px-2.5 flex flex-col pb-2.5">
        {/* for the above deployment mobile phone uses px-2.5 not px-7.5 which is for desktop */}
        <TicketCard />
        <WonTicketCard />
        <LostTicketCard />
        <OpenTicketCard />
      </div>
      <div className="flex justify-center box-border">
        <button className="flex h-[45px] w-full max-w-[315px] cursor-pointer items-center justify-center rounded-[5px] border border-[#fff3] hover:border-[#fff6] bg-transparent text-[15px] font-bold text-[#fff] mt-[20px] mb-[30px] transition-[border-color] duration-[250ms]">
          View More
        </button>
      </div>
    </section>
  );
}
