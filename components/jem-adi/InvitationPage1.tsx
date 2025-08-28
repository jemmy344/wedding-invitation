import exampleImage from 'figma:asset/3adedcfc1d7e183b2ecf783ce81955bce1ca0bf6.png';

export default function InvitationPage1() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-orange-300 via-orange-100 to-orange-50 overflow-hidden shadow-xl rounded-lg">
      {/* Background Floral Elements */}
      <div className="absolute inset-0">
        {/* Top Right Florals: flower-sun4.svg upside down */}
        <div className="absolute -top-85 -right-25 w-[38rem] h-[38rem] sm:opacity-90 opacity-40" style={{ transform: 'rotate(180deg)' }}>
          <img
            src="/Image/flower-sun4.svg"
            alt="Floral Sun 4 Upside Down"
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>
        {/* Top Left Florals replaced with flower-sun.png */}
        <div className="absolute -top-25 -left-25 w-[38rem] h-[38rem] sm:opacity-90 opacity-40">
          <img
            src="/Image/flower-sun.png"
            alt="Floral Sun"
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>


        {/* Bottom Left Florals: flower-sun2.svg */}
        <div className="absolute -bottom-25 -left-25 w-[38rem] h-[38rem] sm:opacity-90 opacity-40">
          <img
            src="/Image/flower-sun2.svg"
            alt="Floral Sun 2"
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Center Right Florals: flower-sun3.svg (moved to end) */}
        <div className="absolute top-1/2 -right-40 transform -translate-y-1/2 w-[22rem] h-[22rem] sm:opacity-90 opacity-40">
          <img
            src=" /Image/flower-sun3.svg"
            alt="Floral Sun 3"
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>
        {/* Bottom Right Florals: flower-sun4.svg */}
        <div className="absolute -bottom-85 -right-25 w-[38rem] h-[38rem] sm:opacity-90 opacity-40">
          <img
            src="/Image/flower-sun4.svg"
            alt="Floral Sun 4"
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-right justify-right pl-12 pr-20 py-16" style={{ fontFamily: 'Playlist Script, cursive' }}>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-7xl text-amber-900 mb-1 sm:pl-[55%]" style={{ fontFamily: 'Playlist Script, cursive' }}>
            Wedding
          </h1>
          <h1 className="text-7xl text-amber-900 text-right" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
            Invitation
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-black text-2xl font-bold text-right mb-2" style={{ fontFamily: 'Glacial Indifference, serif' }}>
          You're Invited to Celebrate Our Special Day!
        </p>

        {/* Names */}
        <div className="mb-2">
          <h3 className="text-4xl text-amber-800 pl-[30%]" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
            Jemimah Oluwasayo
          </h3>
          <div className="text-7xl text-bold text-amber-800 pl-[65%]" style={{ fontFamily: 'Brittany, cursive', fontStyle: 'italic' }}>
            &
          </div>
          <h3 className="text-4xl text-amber-800 text-right" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
            Adeola Abraham
          </h3>
        </div>

        {/* Message */}
        <div className="text-right">
          <p className="text-black mb-2 leading-relaxed" style={{ fontFamily: 'Glacial Indifference' }}>
            With love and joy in our hearts, we invite you to share in our wedding celebration <br />
            as we exchange vows and begin our new journey together.
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-end">
          <img
            src="/deco-line.svg"
            alt="Decorative Divider"
            className="w-[28rem] h-auto"
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Date and Venue */}
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-12 mb-2">
          <div className="text-center mb-2 sm:mb-0">
            <div className="text-xl sm:text-2xl font-bold text-amber-900" style={{ fontFamily: 'Glacial Indifference' }}>
              06.12.2025
            </div>
            <div className="text-xl sm:text-2xl font-bold text-amber-800" style={{ fontFamily: 'Glacial Indifference' }}>
              12:00 pm
            </div>
          </div>
          <div className="w-full sm:w-px h-px sm:h-16 bg-amber-600 sm:mx-0 mx-auto"></div>
          <div className="text-center">
            <div className="text-lg sm:text-xl text-amber-800" style={{ fontFamily: 'Glacial Indifference' }}>
              Abel Awe Close, Jericho
            </div>
            <div className="text-lg sm:text-xl text-amber-800" style={{ fontFamily: 'Glacial Indifference' }}>
              GRA, Ibadan, Nigeria.
            </div>
          </div>
        </div>

        {/* RSVP */}
        <div className="text-right">
          <p className="text-black" style={{ fontFamily: 'Glacial Indifference, serif' }}>
            Your presence would mean the world to us!
          </p>
          <p className="text-black" style={{ fontFamily: 'Glacial Indifference, serif' }}>
            Kindly RSVP by 15 September 2026 to +123-456-7890
          </p>
        </div>
      </div>
    </div>
  );
}