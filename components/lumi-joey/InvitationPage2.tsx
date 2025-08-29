import { useState } from 'react';
import { Gift, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

export default function InvitationPage2() {
    const [guestName, setGuestName] = useState('');
    const [rsvpResponse, setRsvpResponse] = useState('');
    const [plusOneRequested, setPlusOneRequested] = useState(false);

    const handleSubmitRSVP = () => {
        // This would connect to Supabase in a real implementation
        console.log('RSVP submitted:', { guestName, rsvpResponse, plusOneRequested });
        alert('Thank you for your RSVP! We will be in touch soon.');
    };

    return (
        <div className="w-full border-2 border-amber-200 shadow-2xl bg-gradient-to-br from-[#e7d4bd] via-[#e7d4bd] to-amber-50 relative overflow-hidden rounded-lg p-8">
            {/* Header with Floral Accent */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-4 mb-4">
                </div>
                <h2 className="text-3xl font-serif text-amber-800 italic mb-2">Wedding Details</h2>
                <p className="text-gray-700">Important Information for Our Special Day</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    {/* Aso-Ebi Details */}

                    <Card className="border-amber-100 bg-white rounded-lg shadow-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-amber-900">
                                <Users className="w-5 h-5" />
                                Groom&apos;s Family &amp; Friends Aso-Ebi Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <div className="space-y-3 text-amber-900 text-sm">
                                    <div>
                                        <span className="font-bold">Women:</span> Elegant gold lace with a matching gele – classic and beautiful.
                                    </div>
                                    <div>
                                        <span className="font-bold">Men:</span> Taupe/neutral outfit with a gold fila – simple, sharp, and coordinated.
                                    </div>
                                    
                                </div>

                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-amber-100 bg-white rounded-lg shadow-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-amber-900">
                                <Users className="w-5 h-5" />
                                Bride&apos;s Family &amp; Friends Aso-Ebi Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <div className="space-y-3 text-amber-900 text-sm">
                                    <div>
                                        <span className="font-bold">Ladies:</span> Lace with Aso-Oke Gele & Ipele — <span className="font-semibold">₦100,000</span>
                                    </div>
                                    <div>
                                        <span className="font-bold">Gentlemen:</span> Material with Aso-Oke Fila — <span className="font-semibold">₦50,000</span>
                                        <br />
                                        Complete Agbada with Aso-Oke Fila — <span className="font-semibold">₦100,000</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Payment Accounts:</span>
                                        <ul className="list-disc ml-6 mt-1">
                                            <li>
                                                <span className="font-semibold">Mrs. Bukola Oladimeji-Ekeji</span>
                                                <br />
                                                <span>EcoBank — <span className="font-mono">5101067025</span></span>
                                                <br />
                                                <span>WhatsApp proof: <span className="font-mono">+234 902 848 4787</span></span>
                                            </li>
                                            <li className="mt-2">
                                                <span className="font-semibold">Mrs. Ayodele Olufunke</span>
                                                <br />
                                                <span>First Bank — <span className="font-mono">3055509360</span></span>
                                                <br />
                                                <span>WhatsApp proof: <span className="font-mono">+234 806 241 9468</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="italic text-amber-700">
                                        Kindly send proof of payment via WhatsApp to the respective contact.
                                    </div>
                                    <div className="text-amber-800">
                                        ⏳ Deadline for Aso-Ebi Payments: October 7th
                                    </div>
                                      <div className="text-amber-800">
                                        As we prepare for this joyous occasion, we humbly ask for your prayers 🙏
                                    </div>
                                </div>

                            </div>
                        </CardContent>
                    </Card>

                    {/* Gifting Information */}
                    <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-amber-800">
                                <Gift className="w-5 h-5" />
                                Gifting Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 text-sm">
                               Your presence at our wedding is the greatest gift of all. Should you wish to honor us with a gift, a contribution toward our future together would be warmly appreciated.
                            </p>
                            <div>
                                        <span className="font-medium text-gray-700">Payment Accounts:</span>
                                        <ul className="list-disc ml-6 mt-1 text-gray-700">
                                            <li>
                                                <span className="font-semibold">Oluwapelumi Oladimeji</span>
                                                <br />
                                                <span>Sort Code: <span className="font-mono">60-84-07</span></span>
                                                <br />
                                                <span>Account number: <span className="font-mono">27699150</span></span>
                                            </li>
                                            <li className="mt-2">
                                                <span className="font-semibold">Joseph Adegboyega</span>
                                                <br />
                                                <span>Access Bank Nigeria — <span className="font-mono">0763445951</span></span>
                                                
                                            </li>
                                        </ul>
                                    </div>
                        </CardContent>
                    </Card>

                </div>

                {/* Right Column - RSVP Form */}
                <div>
                    <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-amber-800 text-center">RSVP</CardTitle>
                            <p className="text-center text-gray-600 text-sm">Please respond by September 15, 2026</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Guest Name */}
                            <div className="space-y-2">
                                <Label htmlFor="guestName" className="text-gray-600">Guest Name *</Label>
                                <Input
                                    id="guestName"
                                    value={guestName}
                                    onChange={(e) => setGuestName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className="border-amber-200 focus:border-amber-400"
                                />
                            </div>

                            <Separator />

                            {/* RSVP Response */}
                            <div className="space-y-3">
                                <Label className="text-gray-600">Will you be attending? *</Label>
                                <div className="flex gap-4 mt-2">
                                    {['Yes', 'No', 'Maybe'].map((option) => (
                                        <label key={option} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="rsvp"
                                                value={option}
                                                checked={rsvpResponse === option}
                                                onChange={(e) => setRsvpResponse(e.target.value)}
                                                className="mr-2 text-amber-600"
                                            />
                                            <span className="text-amber-800">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            {/* Plus One Request */}
                            <div className="space-y-3 text-gray-600">
                                <Label>Plus-One Request</Label>
                                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Plus-One Clause:</h4>
                  <p className="text-sm text-amber-800 mb-3">
                    &quot;This invitation admits only one. If you&apos;d like to attend with a plus one, kindly indicate — approval will be sent accordingly.&quot;
                  </p>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={plusOneRequested}
                      onChange={(e) => setPlusOneRequested(e.target.checked)}
                      className="mr-2 text-amber-600"
                    />
                    <span className="text-amber-800">I would like to request a plus-one</span>
                  </label>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800 font-medium">
                    ⚠️ No Kids Allowed - This is an adult-only celebration
                  </p>
                </div>
                                
                            </div>

                            <Separator />

                            {/* Submit Button */}
                            <Button
                                onClick={handleSubmitRSVP}
                                className="w-full bg-amber-800 hover:bg-amber-700 text-white"
                                disabled={!guestName || !rsvpResponse}
                            >
                                Submit RSVP
                            </Button>

                            <p className="text-xs text-center text-gray-500">
                                Questions? Call us at +123-456-7890
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
                <p className="text-gray-600 mt-4 italic">
                    We can&apos;t wait to celebrate with you!
                </p>
            </div>
        </div >
    );
}