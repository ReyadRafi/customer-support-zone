import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import { initialTickets } from './data/tickets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleSelect = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.info('Ticket already in progress');
      return;
    }
    if (resolved.find((t) => t.id === ticket.id)) {
      toast.info('Ticket already resolved');
      return;
    }
    setInProgress([...inProgress, { ...ticket, status: 'in-progress' }]);
    toast.info('Ticket added to In-Progress');
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, { ...ticket, status: 'resolved' }]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.success('Ticket marked as resolved');
  };

  return (
    <>
      <Navbar />
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <main className="container main-grid">
        {/* Left Column: Customer Tickets */}
        <section className="tickets-section">
          <h3>Customer Tickets</h3>
          <div className="tickets-grid">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </section>

        {/* Right Column: Task Status */}
        <TaskStatus
          tasks={inProgress}
          resolved={resolved}
          onComplete={handleComplete}
        />
      </main>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}
