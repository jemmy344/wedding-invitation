"use client"
import { useState } from 'react';
import InvitationPage1 from '../../components/jem-adi/InvitationPage1';
import InvitationPage2 from '../../components/jem-adi/InvitationPage2';
import { Button } from '../../components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-[#8B4513] flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        {/* Page Navigation */}
        

        {/* Page Content */}
        <div className="relative">
          {currentPage === 1 ? <InvitationPage1 /> : <InvitationPage2 />}
        </div>

        {/* Page Navigation Arrows */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="ghost"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="flex items-center gap-2 text-rose-800 hover:text-rose-600"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <span className="text-rose-800 font-medium">
            {currentPage} of 2
          </span>
          
          <Button
            variant="ghost"
            onClick={() => setCurrentPage(2)}
            disabled={currentPage === 2}
            className="flex items-center gap-2 text-rose-800 hover:text-rose-600"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}