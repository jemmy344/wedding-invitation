import { useState } from 'react';
import { QrCode, Gift, Users, Baby } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

export default function InvitationPage2() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestWhatsapp, setGuestWhatsapp] = useState('');
  const [emailError, setEmailError] = useState('');
  const [whatsappError, setWhatsappError] = useState('');
  const [rsvpResponse, setRsvpResponse] = useState('');
  const [plusOneRequested, setPlusOneRequested] = useState(false);
  const [guestType, setGuestType] = useState('');

  const handleSubmitRSVP = () => {
    let valid = true;
    setEmailError('');
    setWhatsappError('');
    // Validate required fields
    if (!firstName.trim()) {
      setEmailError('First name is required.');
      valid = false;
    }
    if (!lastName.trim()) {
      setWhatsappError('Last name is required.');
      valid = false;
    }
    // Email validation
    if (guestEmail && !/^\S+@\S+\.\S+$/.test(guestEmail)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }
    // WhatsApp validation (simple: must be at least 8 digits)
    if (guestWhatsapp && !/^\+?\d{8,}$/.test(guestWhatsapp.replace(/\D/g, ''))) {
      setWhatsappError('Please enter a valid WhatsApp number.');
      valid = false;
    }
    // Require at least one contact method
    if (!guestEmail && !guestWhatsapp) {
      setEmailError('Please provide at least one contact method.');
      setWhatsappError('Please provide at least one contact method.');
      valid = false;
    }
    // Require guest type
    if (!guestType) {
      alert('Please select your relationship to the couple.');
      valid = false;
    }
    if (!valid) return;
    console.log('RSVP submitted:', { firstName, lastName, guestEmail, guestWhatsapp, guestType, rsvpResponse, plusOneRequested });
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
          {/* Color of the Day Card */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <span className="inline-block w-5 h-5 rounded-full" style={{ background: 'linear-gradient(90deg, #CC5500 60%, #7B3F00 100%)' }}></span>
                Color of the Day
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 text-sm">
                Please incorporate these colors into your attire to help us create a beautiful and unified celebration!
              </p>
              <div className="flex gap-4 items-center mt-2">
                <div className="flex flex-col items-center">
                  <span className="block w-8 h-8 rounded-full border-2 border-orange-700" style={{ backgroundColor: '#CC5500' }}></span>
                  <span className="text-xs text-orange-700 mt-1">Burnt Orange</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="block w-8 h-8 rounded-full border-2 border-[#7B3F00]" style={{ backgroundColor: '#7B3F00' }}></span>
                  <span className="text-xs text-[#7B3F00] mt-1">Chocolate Brown</span>
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

          {/* Guest Policies Card (moved from right column) */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
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
                  This invitation admits only one. If you&apos;d like to attend with a plus one, 
                  kindly indicate below — approval will be sent accordingly.
                </p>
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
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-600">First Name <span className="text-red-600">*</span></Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="bg-white text-gray-600"
                  required
                />
                {!firstName.trim() && emailError === 'First name is required.' && (
                  <p className="text-xs text-red-600 mt-1">{emailError}</p>
                )}
              </div>
              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-600">Last Name <span className="text-red-600">*</span></Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="bg-white text-gray-600"
                  required
                />
                {!lastName.trim() && whatsappError === 'Last name is required.' && (
                  <p className="text-xs text-red-600 mt-1">{whatsappError}</p>
                )}
              </div>
              {/* Guest Type Dropdown */}
              <div className="space-y-2">
                <Label htmlFor="guestType" className="text-gray-600">I am a...</Label>
                <select
                  id="guestType"
                  value={guestType}
                  onChange={(e) => setGuestType(e.target.value)}
                  className="bg-white text-gray-600 border rounded px-3 py-2 w-full"
                  required
                >
                  <option value="">Select...</option>
                  <option value="bride-family">Bride&apos;s Family</option>
                  <option value="groom-family">Groom&apos;s Family</option>
                  <option value="bride-friend">Bride&apos;s Friend</option>
                  <option value="groom-friend">Groom&apos;s Friend</option>
                  <option value="couple">Couple</option>
                </select>
              </div>
              {/* Guest Email */}
              <div className="space-y-2">
                <Label htmlFor="guestEmail" className="text-gray-600">Email (for accreditation)</Label>
                <Input
                  id="guestEmail"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white text-gray-600"
                  type="email"
                />
                {emailError && <p className="text-xs text-red-600 mt-1">{emailError}</p>}
              </div>
              {/* Guest WhatsApp */}
              <div className="space-y-2">
                <Label htmlFor="guestWhatsapp" className="text-gray-600">WhatsApp Number (for accreditation)</Label>
                <Input
                  id="guestWhatsapp"
                  value={guestWhatsapp}
                  onChange={(e) => setGuestWhatsapp(e.target.value)}
                  placeholder="Enter your WhatsApp number"
                  className="bg-white text-gray-600"
                  type="tel"
                />
                {whatsappError && <p className="text-xs text-red-600 mt-1">{whatsappError}</p>}
              </div>

              <Separator />

              {/* RSVP Response */}
              <div className="space-y-3">
                <Label className="text-gray-600">Will you be attending?</Label>
                <RadioGroup value={rsvpResponse} onValueChange={setRsvpResponse}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" className="data-[state=checked]:bg-[#7B3F00] " />
                    <Label htmlFor="yes" className="text-green-700 font-medium">
                      ✓ Yes, I&apos;ll be there!
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" className="data-[state=checked]:bg-[#7B3F00] " />
                    <Label htmlFor="no" className="text-red-700 font-medium">
                      ✗ Sorry, can&apos;t make it
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="maybe" className="data-[state=checked]:bg-[#7B3F00] " />
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
                      We&apos;ll contact you regarding plus-one approval.
                    </p>
                  )}
                </div>
              </div>

              <Separator />

              {/* Submit Button */}
              <Button 
                onClick={handleSubmitRSVP}
                className="w-full bg-amber-800 hover:bg-amber-700 text-white"
                disabled={!firstName.trim() || !lastName.trim() || !guestType || !rsvpResponse}
              >
                Submit RSVP
              </Button>

              <p className="text-xs text-center text-gray-500">
                Questions? Call us at +234 803 353 6743
              </p>
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
          We can&apos;t wait to celebrate with you!
        </p>
      </div>
    </div>
  );
}