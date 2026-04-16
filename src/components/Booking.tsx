import { motion } from 'motion/react';
import { Calendar, Clock, Video } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [step, setStep] = useState(1);

  return (
    <section id="book-meeting" className="py-24 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">Book a <br /> Meeting</h2>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
              Ready to scale your digital presence? Schedule a 15-minute discovery call 
              with our strategy team to discuss your goals and how we can help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-[var(--border)]/10 flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <span>15 min Discovery Call</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-[var(--border)]/10 flex items-center justify-center">
                  <Video size={16} />
                </div>
                <span>Google Meet / Zoom</span>
              </div>
            </div>
          </div>

          <div className="cursor-panel p-8 bg-[var(--border)]/5">
            {step === 1 ? (
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">Select a Date</h3>
                <div className="grid grid-cols-7 gap-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={`${day}-${i}`} className="text-center text-[10px] font-mono text-[var(--muted)] py-2">{day}</div>
                  ))}
                  {Array.from({ length: 31 }).map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setStep(2)}
                      className="aspect-square rounded-lg border border-[var(--border)] flex items-center justify-center text-xs hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">Select a Time</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map((time) => (
                    <button 
                      key={time}
                      onClick={() => alert('Meeting Requested!')}
                      className="py-3 rounded-lg border border-[var(--border)] text-xs font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setStep(1)}
                  className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  ← Back to calendar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
