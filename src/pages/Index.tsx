
import React from 'react';
import Header from '@/components/Header';
import Calendar from '@/components/Calendar';
import Legend from '@/components/Legend';
import TransitionWrapper from '@/components/TransitionWrapper';
import { CalendarProvider } from '@/context/CalendarContext';
import PersonSelector from '@/components/PersonSelector';
import MergedCalendar from '@/components/MergedCalendar';

const Index = () => {
  return (
    <CalendarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <TransitionWrapper>
            <div className="flex flex-col space-y-6">
              <Header />
              <MergedCalendar />
              <Legend />
              <PersonSelector />
              <Calendar />
              
              <TransitionWrapper delay={400}>
                <footer className="text-center text-sm text-muted-foreground mt-8 pb-8">
                  <p>Cliquez sur les créneaux pour changer leur état.</p>
                </footer>
              </TransitionWrapper>
            </div>
          </TransitionWrapper>
        </div>
      </div>
    </CalendarProvider>
  );
};

export default Index;
