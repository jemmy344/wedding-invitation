import Image from 'next/image';

export default function InvitationPage1() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-orange-300 via-orange-100 to-orange-50 overflow-hidden shadow-xl rounded-lg">
      {/* Background Floral Elements */}
      <div className="absolute inset-0">
        {/* Top Right Florals: flower-sun4.svg upside down */}
        <div className="absolute -top-85 -right-25 w-[38rem] h-[38rem] sm:opacity-90 opacity-40" style={{ transform: 'rotate(180deg)' }}>
          <Image
            src="/Image/flower-sun4.svg"
            alt="Floral Sun 4 Upside Down"
            width={608}
            height={608}
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>
        {/* Top Left Florals replaced with flower-sun.png */}
        <div className="absolute -top-25 -left-25 w-[38rem] h-[38rem] sm:opacity-90 opacity-40">
          <Image
            src="/Image/flower-sun.png"
            alt="Floral Sun"
            width={608}
            height={608}
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>


        {/* Bottom Left Florals: flower-sun2.svg */}
        <div className="absolute -bottom-25 -left-25 w-[38rem] h-[38rem] sm:opacity-90 opacity-40">
          <Image
            src="/Image/flower-sun2.svg"
            alt="Floral Sun 2"
            width={608}
            height={608}
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Center Right Florals: flower-sun3.svg (moved to end) */}
        <div className="absolute top-1/2 -right-40 transform -translate-y-1/2 w-[22rem] h-[22rem] sm:opacity-90 opacity-40">
          <Image
            src="/Image/flower-sun3.svg"
            alt="Floral Sun 3"
            width={352}
            height={352}
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>
        {/* Bottom Right Florals: flower-sun4.svg */}
        <div className="absolute -bottom-85 -right-25 w-[38rem] h-[38rem] sm:opacity-90 opacity-40">
          <Image
            src="/Image/flower-sun4.svg"
            alt="Floral Sun 4"
            width={608}
            height={608}
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-right justify-right pl-3 sm:pl-12 pr-3 sm:pr-20 py-16" style={{ fontFamily: 'Playlist Script, cursive' }}>
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-4xl sm:text-6xl text-amber-900 mb-1 sm:pl-[35%] text-center sm:text-left" style={{ fontFamily: 'Playlist Script, cursive' }}>
            Wedding Invitation
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-black text-lg font-bold text-center sm:pl-[5%] mb-2" style={{ fontFamily: 'Glacial Indifference, serif' }}>
          The families of
        </p>
        <p
          className="text-black text-lg sm:text-2xl font-bold mb-2 flex flex-col sm:flex-row sm:justify-between text-center sm:text-left"
          style={{ fontFamily: 'Glacial Indifference, serif' }}
        >
          <span>Mr Samson & Mrs Oluwakemi Jacobs</span>
          <span>Mr Akinsola & Mrs Grace Akinwole</span>
        </p>
        <h3 className="text-2xl text-amber-800 text-center sm:pl-[5%]" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
          cordially invites you
        </h3>
        <p className="text-black text-lg font-bold text-center sm:pl-[5%] mb-2" style={{ fontFamily: 'Glacial Indifference, serif' }}>
          to the holy matrimony of their children
        </p>

        {/* Names */}
        <div className="mb-2 leading-none space-y-1">
          <h3 className="text-2xl sm:text-4xl text-amber-800 sm:pl-[35%] text-center sm:text-left" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
            Jemimah
          </h3>
          <div className="text-4xl sm:text-7xl font-bold text-amber-800 sm:pl-[50%] text-center sm:text-left" style={{ fontFamily: 'Brittany, cursive', fontStyle: 'italic' }}>
            &
          </div>
          <h3 className="text-2xl sm:text-4xl text-amber-800 text-center sm:pl-[35%]" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
            Adeola
          </h3>
        </div>

        {/* Message */}
        <div className="text-right">
          <p className="text-black mb-2 leading-none text-center sm:text-right text-base sm:text-lg" style={{ fontFamily: 'Glacial Indifference' }}>
            With love and joy in our hearts, we invite you to share in our wedding celebration <br />
            as we exchange vows and begin our new journey together.
          </p>
        </div>


        {/* Date and Venue */}
        <div className="flex flex-col items-center mb-2">
          <div className="text-center mb-4">
            <div className="text-lg sm:text-2xl font-bold text-amber-900" style={{ fontFamily: 'Glacial Indifference' }}>
              6th December, 2025
            </div>
          </div>
          {/* Mobile: only first time/location; Desktop: all four side by side */}
          <div className="w-full">
            {/* Mobile view: only first time/location stacked */}
            <div className="flex flex-col sm:hidden w-full">
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="text-base font-bold text-amber-800 mb-1 text-center" style={{ fontFamily: 'Glacial Indifference' }}>
                  10:00 am
                </div>
                <div className="text-sm text-amber-800 text-center" style={{ fontFamily: 'Glacial Indifference' }}>
                  New reservation area Baptist church,<br />
                  New GRA, Iyaganku, Ibadan.
                </div>
                <div className="text-base font-bold text-amber-800 mb-1 text-center" style={{ fontFamily: 'Glacial Indifference' }}>
                  13:00 pm
                </div>
                <div className="text-sm text-amber-800 text-center" style={{ fontFamily: 'Glacial Indifference' }}>
                  Gallani Suites, Abel Awe close,<br />
                  Ajao street, GRA, off Baale Oyewole Road, Jericho GRA, Ibadan.
                </div>
              </div>
            </div>
            {/* Desktop view: all four side by side */}
            <div className="hidden sm:flex flex-row justify-center items-stretch gap-2 w-full">
              {/* 10:00 am */}
              <div className="flex flex-col items-end justify-center flex-1">
                <div className="text-xl font-bold text-amber-800 mb-1" style={{ fontFamily: 'Glacial Indifference' }}>
                  10:00 am
                </div>
              </div>
              {/* Divider */}
              <div className="w-px h-24 bg-amber-600 mx-2"></div>
              {/* RCCG venue */}
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="text-md text-amber-800 leading-none" style={{ fontFamily: 'Glacial Indifference' }}>
                  New reservation area Baptist church,<br />
                  New GRA, Iyaganku, Ibadan.
                </div>
              </div>

              {/* 13:00 pm */}
              <div className="flex flex-col items-end justify-center flex-1">
                <div className="text-xl font-bold text-amber-800 mb-1" style={{ fontFamily: 'Glacial Indifference' }}>
                  13:00 pm
                </div>
              </div>
              {/* Divider */}
              <div className="w-px h-24 bg-amber-600 mx-2"></div>
              {/* Ostra venue */}
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="text-md text-amber-800 leading-none" style={{ fontFamily: 'Glacial Indifference' }}>
                  Gallani Suites, Abel Awe close,<br />
                  Ajao street, GRA, off Baale Oyewole Road, Jericho GRA, Ibadan.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP */}
        <div className="text-right leading-none">
          <p className="text-black text-center sm:text-right text-base sm:text-lg" style={{ fontFamily: 'Glacial Indifference, serif' }}>
            Your presence would mean the world to us!
          </p>
          <p className="text-black text-center sm:text-right text-base sm:text-lg" style={{ fontFamily: 'Glacial Indifference, serif' }}>
            Kindly RSVP by 18 September 2025
          </p>
        </div>
      </div>
    </div>
  );
}