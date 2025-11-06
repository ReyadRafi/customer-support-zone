import React from "react";

export default function TicketCard({ ticket, onSelect }) {
  return (
    <div className="ticket-card card" onClick={() => onSelect(ticket)}>
      <div className="ticket-header">
        <h4>{ticket.title}</h4>
        <span className="badge green">Open</span>
      </div>
      <p className="ticket-desc">{ticket.description}</p>
      <div className="ticket-meta">
        <span className="meta">
          #{ticket.id} • {ticket.priority} Priority
        </span>
        <span className="meta">{ticket.customer}</span>
        <span className="meta">{ticket.createdAt}</span>
      </div>
    </div>
  );
}
