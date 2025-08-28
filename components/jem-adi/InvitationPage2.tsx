import { useState } from 'react';
import { QrCode, Download, Gift, Users, Baby } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
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
    <div className="w-full bg-gradient-to-br from-orange-300 via-orange-100 to-orange-50 rounded-lg shadow-xl p-8">
      {/* Header with Floral Accent */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-4 mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          <div className="text-rose-600">🌸</div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
        </div>
        <h2 className="text-3xl font-serif text-amber-800 italic mb-2">Wedding Details</h2>
        <p className="text-gray-700">Important Information for Our Special Day</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Aso-Ebi Details */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <QrCode className="w-5 h-5" />
                Aso-Ebi Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 text-sm">
                Join us in our traditional colors! Download the style guide and submit your RSVP online.
              </p>
              <div>
                                <div className="space-y-3 text-amber-900 text-sm">
                                    <div>
                                        <span className="font-bold">Ladies:</span> Lace with Aso-Oke Gele — <span className="font-semibold">₦60,000</span>
                                        <br />
                                        Lace Only — <span className="font-semibold">₦50,000</span>
                                        <br />
                                        Ankara with Aso-oke Gele — <span className="font-semibold">₦24,000</span>
                                        <br />
                                        Complete Aso-Oke — <span className="font-semibold">₦20,000</span>

                                    </div>
                                    <div>
                                        <span className="font-bold">Men:</span> Cap Only — <span className="font-semibold">₦2,500</span>
                                        
                                    </div>
                                    <div>
                                        <span className="font-medium">Payment Accounts:</span>
                                        <ul className="list-disc ml-6 mt-1">
                                            <li>
                                                <span className="font-semibold">Crown elite global services</span>
                                                <br />
                                                <span>GTBank — <span className="font-mono">3001581849</span></span>
                                                <br />
                                                <span>WhatsApp proof: <span className="font-mono">+234 803 353 6743</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="italic text-amber-700">
                                        Kindly send proof of payment via WhatsApp to the above contact.
                                    </div>
                                    <div className="text-amber-800">
                                        ⏳ Deadline for Aso-Ebi Payments: October 7th
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
                Your presence is the greatest gift! For those who wish to honor us with a gift, 
                 a contribution toward our future together would be gratefully appreciated.
              </p>
              <div>
                                        <span className="font-medium text-gray-700">Payment Accounts:</span>
                                        <ul className="list-disc ml-6 mt-1 text-gray-700">
                                            <li>
                                                <span className="font-semibold">Jemimah Jacobs</span>
                                                <br />
                                                <span>Sort Code: <span className="font-mono">60-84-07</span></span>
                                                <br />
                                                <span>Account number: <span className="font-mono">20449615</span></span>
                                            </li>
                                            <li className="mt-2">
                                                <span className="font-semibold">Adeola Akinwole</span>
                                                <br />
                                                <span>Kuda MicroFinance — <span className="font-mono">07012345678</span></span>

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
                <Label htmlFor="guestName" className="text-gray-600">Your Name</Label>
                <Input
                  id="guestName"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Enter your full name"
                  className="bg-white text-gray-600"
                />
              </div>

              <Separator />

              {/* RSVP Response */}
              <div className="space-y-3">
                <Label className="text-gray-600">Will you be attending?</Label>
                <RadioGroup value={rsvpResponse} onValueChange={setRsvpResponse}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="text-green-700 font-medium">
                      ✓ Yes, I'll be there!
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="text-red-700 font-medium">
                      ✗ Sorry, can't make it
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="maybe" />
                    <Label htmlFor="maybe" className="text-amber-700 font-medium">
                      ? Maybe (will confirm later)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              {/* Plus One Request */}
              <div className="space-y-3 text-gray-600">
                <Label>Plus-One Request</Label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={plusOneRequested}
                      onChange={(e) => setPlusOneRequested(e.target.checked)}
                      className="rounded border-rose-300 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-sm text-gray-700">
                      I would like to request approval for a plus-one
                    </span>
                  </label>
                  {plusOneRequested && (
                    <p className="text-xs text-amber-600 ml-6">
                      We'll contact you regarding plus-one approval.
                    </p>
                  )}
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
           {/* Guest Policies Card (duplicated from left column) */}
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-amber-800">
                  <Users className="w-5 h-5" />
                  Guest Policies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* No Kids Policy */}
                <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                  <Baby className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-800 text-sm">Adults Only Celebration</p>
                    <p className="text-gray-700 text-sm">
                      Respectfully, this event is for adults only.
                    </p>
                  </div>
                </div>

                {/* Plus One Policy */}
                <div className="p-3 bg-amber-50 rounded-lg">
                  <p className="font-medium text-amber-800 text-sm mb-2">Plus-One Policy</p>
                  <p className="text-gray-700 text-sm">
                    This invitation admits only one. If you'd like to attend with a plus one, 
                    kindly indicate below — approval will be sent accordingly.
                  </p>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          <span className="text-rose-600 text-2xl">💕</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
        </div>
        <p className="text-gray-600 mt-4 italic">
          We can't wait to celebrate with you!
        </p>
      </div>
    </div>
  );
}