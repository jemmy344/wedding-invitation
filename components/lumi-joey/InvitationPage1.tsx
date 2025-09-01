import Image from 'next/image';

export default function InvitationPage1() {
    return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#e7d4bd] via-[#e7d4bd] to-amber-50 overflow-hidden shadow-xl rounded-lg">
            {/* Background Floral Elements */}
            <div className="absolute inset-0">
                <div className="absolute -top-90 right-5 w-[38rem] h-[38rem] sm:opacity-90 opacity-40 rotate-360">
                    <Image src="/Image-lj/flower2.svg" alt="Floral Sun 4 Upside Down" width={720} height={720} className="w-full h-full object-contain" />
                </div>
                <div className="absolute -top-25 -right-85 w-[38rem] h-[38rem] opacity-10 rotate-180">
                    <Image src="/Image-lj/flower.svg" alt="Floral Sun" width={608} height={608} className="w-full h-full object-contain" />
                </div>
                <div className="absolute -top-5 right-15 w-[28rem] h-[28rem] sm:opacity-90 opacity-40">
                    <Image src="/Image-lj/design2.svg" alt="Floral Sun" width={448} height={448} className="w-full h-full object-contain" />
                </div>
                <div className="absolute -top-105 -left-55 w-[38rem] h-[38rem] sm:opacity-90 opacity-40 rotate-90">
                    <Image src="/Image-lj/flower.svg" alt="Floral Sun" width={608} height={608} className="w-full h-full object-contain" />
                </div>
                <div className="absolute -top-25 -left-75 w-[38rem] h-[38rem] opacity-10 rotate-180">
                    <Image src="/Image-lj/flower.svg" alt="Floral Sun" width={608} height={608} className="w-full h-full object-contain" />
                </div>
                <div className="absolute -top-5 -left-15 w-[28rem] h-[28rem] sm:opacity-90 opacity-40">
                    <Image src="/Image-lj/design2.svg" alt="Floral Sun" width={448} height={448} className="w-full h-full object-contain" />
                </div>
                <div className="absolute -bottom-45 -left-55 w-[38rem] h-[38rem] sm:opacity-90 opacity-40">
                    <Image src="/Image-lj/flower.svg" alt="Floral Bottom Left" width={608} height={608} className="w-full h-full object-contain" />
                </div>
                <div className="absolute top-1/2 -right-110 transform -translate-y-1/2 w-[34rem] h-[34rem] sm:opacity-90 opacity-40">
                    <Image src="/Image-lj/flower.svg" alt="Floral Sun 3" width={544} height={544} className="w-full h-full object-contain" />
                </div>
                <div className="absolute -bottom-100 -right-15 w-[45rem] h-[45rem] sm:opacity-90 opacity-40 rotate-180">
                    <Image src="/Image-lj/flower2.svg" alt="Floral Sun 4 Upside Down" width={720} height={720} className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col items-right justify-right pl-3 sm:pl-12 pr-3 sm:pr-20 py-16" style={{ fontFamily: 'Playlist Script, cursive' }}>
                {/* Header */}
                <div className="mb-4">
                    <h1 className="text-4xl sm:text-6xl text-[#7b3c29] mb-1 sm:pl-[35%] text-center sm:text-left" style={{ fontFamily: 'Playlist Script, cursive' }}>
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
                    <span>Mr Tunde & Mrs Shade Oladimeji</span>
                    <span>Chief Edet & Princess Adetutu Abang</span>
                </p>
                <h3 className="text-2xl text-[#7b3c29] text-center sm:pl-[5%]" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
                    cordially invites you
                </h3>
                <p className="text-black text-lg font-bold text-center sm:pl-[5%] mb-2" style={{ fontFamily: 'Glacial Indifference, serif' }}>
                    to the holy matrimony of their children
                </p>

                {/* Names */}
                <div className="mb-2 leading-none space-y-1">
                    <h3 className="text-2xl sm:text-4xl text-[#7b3c29] sm:pl-[30%] text-center sm:text-left" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
                        Oluwapelumi Sarah
                    </h3>
                    <div className="text-4xl sm:text-7xl font-bold text-[#7b3c29] sm:pl-[65%] text-center sm:text-left" style={{ fontFamily: 'Brittany, cursive', fontStyle: 'italic', lineHeight: '1' }}>
                        &
                    </div>
                    <h3 className="text-2xl sm:text-4xl text-[#7b3c29] text-center sm:text-right" style={{ fontFamily: 'Playlist Script, cursive', fontStyle: 'italic' }}>
                        Joseph Adegboyega
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
                        <div className="text-lg sm:text-2xl font-bold text-[#7b3c29]" style={{ fontFamily: 'Glacial Indifference' }}>
                            29th November, 2025
                        </div>
                    </div>
                    {/* Mobile: only first time/location; Desktop: all four side by side */}
                    <div className="w-full">
                        {/* Mobile view: only first time/location stacked */}
                        <div className="flex flex-col sm:hidden w-full">
                            <div className="flex flex-col items-center justify-center flex-1">
                                <div className="text-base font-bold text-[#7b3c29] mb-1 text-center" style={{ fontFamily: 'Glacial Indifference' }}>
                                    10:00 am
                                </div>
                                <div className="text-sm text-[#7b3c29] text-center" style={{ fontFamily: 'Glacial Indifference' }}>
                                    RCCG Strong Tower Sanctuary, 39-41,<br />
                                    Ogudu road, Victoria Bus-Stop, Ogudu-Ojota Road.
                                </div>
                                <div className="text-base font-bold text-[#7b3c29] mb-1 text-center" style={{ fontFamily: 'Glacial Indifference' }}>
                                    13:00 pm
                                </div>
                                <div className="text-sm text-[#7b3c29] text-center" style={{ fontFamily: 'Glacial Indifference' }}>
                                    Ostra hall, Otunba Jobi fele way,<br />
                                    Agidingbi, Lagos
                                </div>
                            </div>
                        </div>
                        {/* Desktop view: all four side by side */}
                        <div className="hidden sm:flex flex-row justify-center items-stretch gap-2 w-full pl-24">
                            {/* 10:00 am */}
                            <div className="flex flex-col items-end justify-center flex-1">
                                <div className="text-xl font-bold text-black mb-1" style={{ fontFamily: 'Glacial Indifference' }}>
                                    10:00 am
                                </div>
                            </div>
                            {/* Divider */}
                            <div className="w-px h-24 bg-[#7b3c29] mx-2"></div>
                            {/* RCCG venue */}
                            <div className="flex flex-col items-center justify-center flex-1">
                                <div className="text-md text-[#7b3c29] leading-none" style={{ fontFamily: 'Glacial Indifference' }}>
                                    RCCG Strong Tower Sanctuary, 39-41,<br />
                                    Ogudu road, Victoria Bus-Stop, Ogudu-Ojota Road.
                                </div>
                            </div>

                            {/* 13:00 pm */}
                            <div className="flex flex-col items-end justify-center flex-1">
                                <div className="text-xl font-bold text-black mb-1" style={{ fontFamily: 'Glacial Indifference' }}>
                                    13:00 pm
                                </div>
                            </div>
                            {/* Divider */}
                            <div className="w-px h-24 bg-[#7b3c29] mx-2"></div>
                            {/* Ostra venue */}
                            <div className="flex flex-col items-center justify-center flex-1">
                                <div className="text-md text-[#7b3c29] leading-none" style={{ fontFamily: 'Glacial Indifference' }}>
                                    Ostra hall, Otunba Jobi fele way,<br />
                                    Agidingbi, Lagos
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
                    <p className="text-black text-center sm:text-right text-sm sm:text-base" style={{ fontFamily: 'Glacial Indifference, serif' }}>
                        Kindly RSVP by 18 September 2025
                    </p>
                </div>
            </div>
        </div>
    );
}