import React from "react";

export default function TicketCard({ ticket, onSelect }) {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return { color: "#F83044" }; 
      case "medium":
        return { color: "#dab148ff" }; 
      case "low":
        return { color: "#02A53B" }; 
      default:
        return { color: "#555" }; 
    }
  };

  return (
    <div className="ticket-card card" onClick={() => onSelect(ticket)}>
      <div className="ticket-header">
        <h4>{ticket.title}</h4>
        <span className="badge green">Open</span>
      </div>

      <p className="ticket-desc">{ticket.description}</p>

      <div className="ticket-meta">
        <span className="meta">
          #{ticket.id} •{" "}
          <span style={getPriorityColor(ticket.priority)}>
            {ticket.priority} Priority
          </span>
        </span>
        <span className="meta">{ticket.customer}</span>
        <span className="meta">{ticket.createdAt}</span>
      </div>
    </div>
  );
}
