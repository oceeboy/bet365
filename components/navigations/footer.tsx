'use client';
import { useState } from 'react';
import ServerTime from '../shared/server-time';

/* eslint-disable @next/next/no-img-element */
export function Footer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="my-3.75 pt-7.5 pb-18.75">
      <div className="  pb-2.5">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="border-y flex border-[#282828] w-full"
        >
          <span className="text-[#b5b5b5] h-11.25 flex items-center justify-center gap-1 leading-11.25 px-2.5 w-full text-[11px]">
            Information and transmission delays
            <span className="w-3.25 h-10 flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="5"
                viewBox="0 0 12 7"
                aria-hidden="true"
              >
                <path
                  fill="#b5b5b5"
                  fillRule="evenodd"
                  d="M12 .784L11.243 0 6 5.431.757 0 0 .784l5.243 5.432L6 7l.757-.784z"
                />
              </svg>
            </span>
          </span>
        </button>
        {isOpen && (
          <div className="flex flex-col px-5 border-[#282828] border-b">
            <div className="pt-5 text-[11px]   max-w-175 w-full leading-4.25 text-[#b5b5b5]">
              Although every effort is made to ensure that information displayed on site with
              regards to an event is correct, it is to be used as a guide only. In the event of any
              particular information (score, time of game etc) being incorrect we assume no
              liability for this. Please refer to our betting rules for information on how we settle
              individual markets.
            </div>
            <div className="pt-2.5 pb-6.25 text-[11px]   max-w-175 w-full leading-4.25 text-[#b5b5b5]">
              For the purposes of In-Play betting, customers should be aware that transmissions
              described as live by some broadcasters including bet365 Live Streaming may actually be
              delayed. The extent of any delay may vary between customers, depending on the set-up
              through which they are receiving pictures or data.
            </div>
          </div>
        )}
      </div>
      {/* first */}
      <div className="flex flex-col w-full pt-3.75 h-full">
        <div className="px-2.5 pb-2.5 flex flex-wrap">
          <div className="content-center text-[#ddd] flex flex-wrap text-sm font-bold leading-[40px] mb-[10px] pt-[5px] w-full">
            Settings
          </div>
          <div className="flex h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">
              languaes{' '}
              <span className="w-3.25 h-10 flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="5"
                  viewBox="0 0 12 7"
                  aria-hidden="true"
                >
                  <path
                    fill="#b5b5b5"
                    fillRule="evenodd"
                    d="M12 .784L11.243 0 6 5.431.757 0 0 .784l5.243 5.432L6 7l.757-.784z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="px-2.5 pb-2.5 flex flex-wrap">
          <div className="content-center text-[#ddd] flex flex-wrap text-sm font-bold leading-[40px] mb-[10px] pt-[5px] w-full">
            Promotions
          </div>
          <div className="flex h-10   w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Open Account Offer </div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 "> Current Rewards </div>
          </div>
        </div>
        <div className="px-2.5 pb-2.5 flex flex-wrap">
          <div className="content-center text-[#ddd] flex flex-wrap text-sm font-bold leading-[40px] mb-[10px] pt-[5px] w-full">
            Audio
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Horse Racing</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Greyhounds</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Football</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Cricket</div>
          </div>
        </div>
        <div className="px-2.5 pb-2.5 flex flex-wrap">
          <div className="content-center text-[#ddd] flex flex-wrap text-sm font-bold leading-[40px] mb-[10px] pt-[5px] w-full">
            Form & Stats
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Football Stats</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Sports Stats</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Horse Racing Archive</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Australian Horse Form</div>
          </div>
        </div>
        <div className="px-2.5 pb-2.5 flex flex-wrap">
          <div className="content-center text-[#ddd] flex flex-wrap text-sm font-bold leading-[40px] mb-[10px] pt-[5px] w-full">
            Scores & Results
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Live Scores</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Results</div>
          </div>
        </div>
        <div className="px-2.5 pb-2.5 flex flex-wrap">
          <div className="content-center text-[#ddd] flex flex-wrap text-sm font-bold leading-[40px] mb-[10px] pt-[5px] w-full">
            Help
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Deposits</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Withdrawals</div>
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Contact Us</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">bet365 FAQ</div>
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Terms and Conditions</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Responsible Gambling</div>
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Technical Issues</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Privacy Policy</div>
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Cookie Policy</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Fair Payouts</div>
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Complaints Procedure</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Rules</div>
          </div>
        </div>

        <div className="px-2.5 pb-2.5 flex flex-wrap">
          <div className="content-center text-[#ddd] flex flex-wrap text-sm font-bold leading-[40px] mb-[10px] pt-[5px] w-full">
            Sites
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Careers</div>
          </div>
          <div className="flex w-[50%] h-10 items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Partners</div>
          </div>
          <div className="flex h-10  w-[50%] items-center  text-left text-[#b5b5b5] text-[13px]">
            <div className="flex items-center capitalize gap-1 ">Sports & Betting News</div>
          </div>
        </div>
      </div>

      {/* second */}

      <div className=" border-t border-[#282828] max-w-7xl mx-auto">
        <div className="bg-transparent flex flex-wrap ">
          <div className="h-26.25 flex items-center w-full justify-center max-w-200 flex-wrap">
            <div className="flex items-center justify-center">
              <img
                src={'/ucl1.webp'}
                alt="bet365"
                loading="lazy"
                className="h-14.75 overflow-clip place-content-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t border-[#282828] max-w-7xl px-2.5 py-7.5 mx-auto">
        <div className="bg-transparent flex flex-wrap ">
          <div className="flex flex-wrap items-center h-[105px]">
            <div className="flex items-center justify-center pb-[30px] pr-[40px]">
              <img
                src={'/gt_v2.svg'}
                alt="gt_v2"
                loading="lazy"
                className=" overflow-clip place-content-center"
              />
            </div>
            <div className="flex items-center justify-center pb-[30px] pr-[40px]">
              <img
                src={'/ibia_masterlogo_stacked_grey_24.svg'}
                alt="ibia_masterlogo_stacked_grey_24"
                loading="lazy"
                className=" overflow-clip place-content-center"
              />
            </div>
            <div className="flex items-center justify-center pb-[30px] pr-[40px]">
              <img
                src={'/gibraltar.svg'}
                alt="gibraltar"
                loading="lazy"
                className=" overflow-clip place-content-center"
              />
            </div>
            <div className="flex items-center justify-center pb-[30px] pr-[40px]">
              <img
                src={'/ecogra.svg'}
                alt="ecogra"
                loading="lazy"
                className=" overflow-clip place-content-center"
              />
            </div>
            <div className="flex items-center justify-center pb-[30px] pr-[40px]">
              <img
                src={'/18.svg'}
                alt="18"
                loading="lazy"
                className=" overflow-clip place-content-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111]">
        <div className="flex flex-wrap px-2.5 box-border">
          <div className="flex flex-wrap items-center max-w-[800px] w-full h-full">
            <div className="flex items-center justify-center pb-[15px] ">
              <img
                src={'/bet365-logo.svg'}
                alt="bet365logo"
                loading="lazy"
                className=" overflow-clip place-content-center"
              />
            </div>
            <div className=" text-[#b5b5b5] text-[11px] pb-[15px]">
              <div>
                <span>
                  Gambling can be addictive, please play responsibly. For information on support
                  measures, please visit our
                </span>
                <span className="text-[#ddd] hover:text-white cursor-pointer transition-all duration-200 ease-in-out">
                  {' '}
                  Responsible Gambling Help
                </span>
                <span> page.</span>
              </div>
            </div>
            <div className=" text-[#b5b5b5] text-[11px] pb-[15px]">
              <div>
                <span>
                  Registered Office Hillside (Gibraltar Sports) LP (registration number 198), Unit
                  1.1, First Floor, Waterport Place, 2 Europort Avenue, Gibraltar. Hillside
                  (Gibraltar Sports) LP is licensed by the Government of Gibraltar and regulated by
                  the Gibraltar Gambling Commissioner (RGL number 130).
                </span>
              </div>
            </div>
            <div className=" text-[#b5b5b5] text-[11px] pb-[15px]">
              <div>
                <span>
                  Registered Office Hillside (Gibraltar Gaming) LP (registration number 197), Unit
                  1.1, First Floor, Waterport Place, 2 Europort Avenue, Gibraltar. Hillside
                  (Gibraltar Gaming) LP is licensed by the Government of Gibraltar and regulated by
                  the Gibraltar Gambling Commissioner (RGL number 129).
                </span>
              </div>
            </div>
            <div className=" text-[#b5b5b5] text-[11px] pb-[15px]">
              <div>
                <span>© 2001-2026 bet365. All rights reserved.</span>
              </div>
            </div>
          </div>
          <div className=" text-[#b5b5b5] text-[11px] pt-[15px] pb-[25px]">
            <ServerTime />
          </div>
        </div>
      </div>
      <div className=" bg-[#111]">
        <div className="flex flex-wrap items-center max-w-[800px] w-full h-full ">
          <div className="px-2.5 pb-8.75 text-[11px]">
            <div>
              <span className="text-[#b5b5b5] ">
                By accessing, continuing to use or navigating throughout this site you accept that
                we will use certain browser cookies to improve your customer experience with us.
                bet365 only uses cookies which will improve your experience with us and will not
                interfere with your privacy. Please refer to our
              </span>
              <span className="text-[#ddd] font-bold hover:text-white cursor-pointer transition-all duration-200 ease-in-out">
                {' '}
                Cookies Policy
              </span>
              <span className="text-[#b5b5b5] ">
                {' '}
                for further information on our use of cookies and how you can disable or manage
                their use should you wish.
              </span>
            </div>
          </div>
          <div className="px-2.5 pb-8.75 text-[11px]">
            <div>
              <span className="text-[#b5b5b5] ">
                This site is protected by reCAPTCHA and the Google
              </span>
              <span className="text-[#ddd] hover:text-white cursor-pointer transition-all duration-200 ease-in-out">
                {' '}
                Privacy Policy
              </span>
              <span className="text-[#b5b5b5] "> and</span>
              <span className="text-[#ddd] hover:text-white cursor-pointer transition-all duration-200 ease-in-out">
                {' '}
                Terms of Service
              </span>
              <span className="text-[#b5b5b5] "> apply.</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t border-[#282828] bg-[#111] max-w-7xl px-2.5 py-7.5 mx-auto">
        <div className="flex flex-wrap justify-between bg-transparent max-w-[800px] w-full h-full  ">
          <div className=" text-[13px] text-[#b5b5b5] font-semibold pt-0.5 pr-[45px]">
            <div className="box-border">Partners</div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="pr-[20px] text-[#b5b5b5]">
              <div>
                <img
                  src={'/social_x.svg'}
                  alt="social-x"
                  className="box-border overflow-clip [overflow-clip-margin:content-box]"
                />
              </div>
            </div>
            <div className="pr-[20px] text-[#b5b5b5]">
              <div>
                <img
                  src={'/social_facebook.svg'}
                  alt="social-x"
                  className="box-border overflow-clip [overflow-clip-margin:content-box]"
                />
              </div>
            </div>
            <div className="pr-[20px] text-[#b5b5b5]">
              <div>
                <img
                  src={'/social_instagram.svg'}
                  alt="social-x"
                  className="box-border overflow-clip [overflow-clip-margin:content-box]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
