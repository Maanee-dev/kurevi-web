import { motion } from 'motion/react';
import { Calendar, Clock, Video, ArrowLeft, ArrowRight, Building2, User, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDateObj, setSelectedDateObj] = useState<{ day: number, offset: number } | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isPersonal, setIsPersonal] = useState(false);

  // Form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contextInput, setContextInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Calendar Logic
  const today = new Date();
  const displayDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const currentMonth = displayDate.toLocaleString('default', { month: 'long' });
  const currentYear = displayDate.getFullYear();
  const daysInMonth = new Date(currentYear, displayDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, displayDate.getMonth(), 1).getDay();
  const currentDay = today.getDate();

  const handleNextMonth = () => setMonthOffset(m => m + 1);
  const handlePrevMonth = () => {
    if (monthOffset > 0) setMonthOffset(m => m - 1);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('meeting_requests')
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            request_type: isPersonal ? 'Personal' : 'Company',
            context: contextInput,
            meeting_date: `${currentMonth} ${selectedDateObj?.day}, ${currentYear}`,
            meeting_time: selectedTime,
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      // Reset after 3 seconds
      setTimeout(() => {
        setStep(1);
        setSelectedDateObj(null);
        setSelectedTime(null);
        setMonthOffset(0);
        setIsPersonal(false);
        setFirstName('');
        setLastName('');
        setEmail('');
        setContextInput('');
        setSubmitStatus('idle');
      }, 3000);

    } catch (err: any) {
      console.error("Booking error:", err.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedDate = selectedDateObj?.day;

  return (
    <section id="book-meeting" className="py-24 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Book a <br /> Meeting</h2>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-md">
              Ready to scale your digital presence? Schedule a 15-minute discovery call 
              with our strategy team to discuss your goals and how we can help.
            </p>
            <div className="space-y-6 pt-6 border-t border-[var(--border)] max-w-md">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">Duration</h4>
                  <span className="text-sm text-[var(--muted)]">15 min Discovery Call</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
                  <Video size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">Location</h4>
                  <span className="text-sm text-[var(--muted)]">Google Meet / Zoom</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border border-[var(--border)] bg-[var(--background)] p-8 md:p-10 shadow-2xl min-h-[450px] flex flex-col justify-center">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div className="flex justify-between items-center mb-6 border-b border-[var(--border)] pb-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">Select Date</h3>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handlePrevMonth} 
                      disabled={monthOffset === 0}
                      className={`text-[var(--foreground)] transition-opacity ${monthOffset === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:opacity-70 cursor-pointer'}`}
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <div className="text-sm font-mono tracking-widest text-[var(--muted)] uppercase w-32 text-center">
                      {currentMonth} {currentYear}
                    </div>
                    <button 
                      onClick={handleNextMonth}
                      className="text-[var(--foreground)] hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, i) => (
                    <div key={`${day}-${i}`} className="text-center text-[10px] font-mono text-[var(--muted)] py-2 uppercase tracking-widest">{day}</div>
                  ))}
                  
                  {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <div key={`blank-${i}`} className="aspect-square"></div>
                  ))}

                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isPast = monthOffset === 0 && day < currentDay;
                    const isSelected = selectedDateObj?.day === day && selectedDateObj?.offset === monthOffset;

                    return (
                      <button 
                        key={i} 
                        disabled={isPast}
                        onClick={() => {
                          setSelectedDateObj({ day, offset: monthOffset });
                          setStep(2);
                        }}
                        className={`aspect-square rounded-none border border-[var(--border)] flex items-center justify-center text-xs transition-colors font-mono
                          ${isPast ? 'opacity-20 cursor-not-allowed bg-[var(--border)]/5' : 'hover:bg-[var(--foreground)] hover:text-[var(--background)] cursor-pointer bg-[var(--background)]'}
                          ${isSelected ? 'bg-[var(--foreground)] text-[var(--background)]' : ''}
                        `}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div className="flex justify-between items-center mb-6 border-b border-[var(--border)] pb-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">Select Time</h3>
                  <div className="text-sm font-mono tracking-widest text-[var(--foreground)] uppercase">
                    {currentMonth} {selectedDate}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 auto-rows-max">
                  {['09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM', '04:30 PM'].map((timeStr) => (
                    <button 
                      key={timeStr}
                      onClick={() => handleTimeSelect(timeStr)}
                      className="py-4 border border-[var(--border)] text-sm font-mono tracking-widest hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all bg-[var(--background)]"
                    >
                      {timeStr}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setStep(1)}
                  className="mt-8 flex items-center text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group w-full pt-4 border-t border-[var(--border)]"
                >
                  <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Calendar
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                {submitStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                    <CheckCircle2 size={48} className="text-green-500" />
                    <h3 className="text-2xl font-black uppercase tracking-tighter">Meeting Requested!</h3>
                    <p className="text-[var(--muted)] text-sm font-mono max-w-xs leading-relaxed">
                      We've received your request and will send a calendar invite to {email} shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-6 border-b border-[var(--border)] pb-4">
                      <h3 className="text-xl font-bold uppercase tracking-tight">Your Details</h3>
                      <div className="text-[10px] sm:text-xs font-mono tracking-widest text-[var(--muted)]">
                        {selectedDate} {currentMonth} @ {selectedTime}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">First Name</label>
                          <input required type="text" value={firstName} onChange={e => setFirstName(e.target.value)} disabled={isSubmitting} className="w-full bg-transparent border border-[var(--border)] focus:border-[var(--foreground)] px-4 py-3 text-sm transition-colors outline-none font-mono disabled:opacity-50" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Last Name</label>
                          <input required type="text" value={lastName} onChange={e => setLastName(e.target.value)} disabled={isSubmitting} className="w-full bg-transparent border border-[var(--border)] focus:border-[var(--foreground)] px-4 py-3 text-sm transition-colors outline-none font-mono disabled:opacity-50" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Email Address</label>
                        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isSubmitting} className="w-full bg-transparent border border-[var(--border)] focus:border-[var(--foreground)] px-4 py-3 text-sm transition-colors outline-none font-mono disabled:opacity-50" />
                      </div>

                      {/* Toggle Type of Request */}
                      <div className="pt-4 border-t border-[var(--border)]">
                        <div className="flex bg-[var(--border)]/20 p-1 rounded-none border border-[var(--border)]">
                          <button
                            type="button"
                            onClick={() => setIsPersonal(false)}
                            disabled={isSubmitting}
                            className={`flex-1 flex items-center justify-center py-2 text-xs font-mono uppercase tracking-widest transition-colors ${!isPersonal ? 'bg-[var(--foreground)] text-[var(--background)]' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`}
                          >
                            <Building2 size={12} className="mr-2" /> Company
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsPersonal(true)}
                            disabled={isSubmitting}
                            className={`flex-1 flex items-center justify-center py-2 text-xs font-mono uppercase tracking-widest transition-colors ${isPersonal ? 'bg-[var(--foreground)] text-[var(--background)]' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`}
                          >
                            <User size={12} className="mr-2" /> Personal
                          </button>
                        </div>
                      </div>

                      {!isPersonal ? (
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Company Name</label>
                          <input required={!isPersonal} type="text" value={contextInput} onChange={e => setContextInput(e.target.value)} disabled={isSubmitting} placeholder="Acme Corp" className="w-full bg-transparent border border-[var(--border)] focus:border-[var(--foreground)] px-4 py-3 text-sm transition-colors outline-none font-mono disabled:opacity-50" />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Personal Context</label>
                          <input required={isPersonal} type="text" value={contextInput} onChange={e => setContextInput(e.target.value)} disabled={isSubmitting} placeholder="E.g., Independent Creator, Student" className="w-full bg-transparent border border-[var(--border)] focus:border-[var(--foreground)] px-4 py-3 text-sm transition-colors outline-none font-mono disabled:opacity-50" />
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="text-xs font-mono tracking-widest text-red-500 uppercase flex justify-between">
                          <span>An error occurred. Please try again.</span>
                        </div>
                      )}

                      <div className="pt-4 flex items-center gap-4 border-t border-[var(--border)]">
                        <button 
                          type="button"
                          onClick={() => setStep(2)}
                          disabled={isSubmitting}
                          className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group flex items-center disabled:opacity-50"
                        >
                          <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-[var(--foreground)] text-[var(--background)] font-bold uppercase tracking-widest text-xs py-4 hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50"
                        >
                          {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : 'Confirm Booking'}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
