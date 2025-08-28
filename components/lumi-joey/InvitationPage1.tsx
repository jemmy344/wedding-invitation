import exampleImage from 'figma:asset/3adedcfc1d7e183b2ecf783ce81955bce1ca0bf6.png';

export default function InvitationPage1() {
    return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#e7d4bd] via-[#e7d4bd] to-amber-50 overflow-hidden shadow-xl rounded-lg">
            {/* Background Floral Elements */}
            <div className="absolute inset-0">

                <div className="absolute -top-90 right-5 w-[38rem] h-[38rem] sm:opacity-90 opacity-40 rotate-360">
                    <img
                        src="/Image-lj/flower2.svg"
                        alt="Floral Sun 4 Upside Down"
                        className="w-full h-full object-contain"
                        style={{ pointerEvents: 'none' }}
                    />
                </div>

                <div className="absolute -top-25 -right-85 w-[38rem] h-[38rem] opacity-10 rotate-180">
                    <img
                        src="/Image-lj/flower.svg"
                        alt="Floral Sun"
                        className="w-full h-full object-contain"
                        style={{ pointerEvents: 'none' }}
                    />
                </div>

                <div className="absolute -top-5 right-15 w-[28rem] h-[28rem] sm:opacity-90 opacity-40">
                    <img
                        src="/Image-lj/design2.svg"
                        alt="Floral Sun"
                        className="w-full h-full object-contain"
                        style={{ pointerEvents: 'none' }}
                    />
                </div> 

                {/* Top Left Florals replaced with flower-sun.png */}
                <div className="absolute -top-105 -left-55 w-[38rem] h-[38rem] sm:opacity-90 opacity-40 rotate-90">
                    <img
                        src="/Image-lj/flower.svg"
                        alt="Floral Sun"
                        className="w-full h-full object-contain"
                        style={{ pointerEvents: 'none' }}
                    />
                </div>

                <div className="absolute -top-25 -left-75 w-[38rem] h-[38rem] opacity-10 rotate-180">
                    <img
                        src="/Image-lj/flower.svg"
                        alt="Floral Sun"
                        className="w-full h-full object-contain"
                        style={{ pointerEvents: 'none' }}
                    />
                </div>

                <div className="absolute -top-5 -left-15 w-[28rem] h-[28rem] sm:opacity-90 opacity-40">
                    <img
                        src="/Image-lj/design2.svg"
                        alt="Floral Sun"
                        className="w-full h-full object-contain"
                        style={{ pointerEvents: 'none' }}
                    />
                </div>


                {/* Bottom Left Florals: flower-sun2.svg */}
                <div className="absolute -bottom-45 -left-55 w-[38rem] h-[38rem] sm:opacity-90 opacity-40">
                    <img
                        src="/Image-lj/flower.svg"
                        alt="Floral Bottom Left"
                        className="w-full h-full object-contain"
                        style={{ pointerEvents: 'none' }}
                    />
                </div>

                {/* Center Right Florals: flower-sun3.svg (moved to end) */}
                <div className="absolute top-1/2 -right-110 transform -translate-y-1/2 w-[34rem] h-[34rem] sm:opacity-90 opacity-40">
                    <img
                        src=" /Image-lj/flower.svg"
                        alt="Floral Sun 3"
                        className="w-full h-full object-contain"
                        style={{ pointerEvents: 'none' }}
                    />
                </div>

                <div className="absolute -bottom-100 -right-15 w-[45rem] h-[45rem] sm:opacity-90 opacity-40 rotate-180">
                    <img
                        src="/Image-lj/flower2.svg"
                        alt="Floral Sun 4 Upside Down"
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
                        Oluwapelumi Sarah
                    </h3>
                    <div className="text-7xl text-bold text-amber-800 pl-[65%]" style={{ fontFamily: 'Brittany, cursive', fontStyle: 'italic' }}>
                        &
                    </div>
                    <h3 className="text-4xl text-amber-800 text-right" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
                        Joseph Adegboyega
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
                            29.11.2025
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-amber-800" style={{ fontFamily: 'Glacial Indifference' }}>
                            10:00 am
                        </div>
                    </div>
                    <div className="w-full sm:w-px h-px sm:h-16 bg-amber-600 sm:mx-0 mx-auto"></div>
                    <div className="text-center">
                        <div className="text-lg sm:text-xl text-amber-800" style={{ fontFamily: 'Glacial Indifference' }}>
                            123 Anywhere St.,
                        </div>
                        <div className="text-lg sm:text-xl text-amber-800" style={{ fontFamily: 'Glacial Indifference' }}>
                            Ogudu-Ojota, Lagos State
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