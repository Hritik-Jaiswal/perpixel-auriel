"use client";

import Image from "next/image";
import { useState } from "react";
import { experiences, formatInr, rooms } from "@/lib/content";
import { dayNumber, quoteBooking, todayString, unavailableRoomSlugs, validateBooking, type BookingInput } from "@/lib/booking";

const initial: BookingInput = { arrival: "", departure: "", guests: 2, roomSlug: "", addOns: [] };
const steps = ["Dates & guests", "Room & moments", "Review", "Demo itinerary"];

export default function BookingJourney() {
  const [input, setInput] = useState<BookingInput>(initial);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const unavailable = unavailableRoomSlugs(input.arrival, input.departure);
  const room = rooms.find((item) => item.slug === input.roomSlug);
  const quote = quoteBooking(input);
  const today = todayString();

  function update(patch: Partial<BookingInput>) { setInput((current) => ({ ...current, ...patch })); setErrors([]); }
  function nextFromDates() {
    const messages: string[] = [];
    const arrival = dayNumber(input.arrival);
    const departure = dayNumber(input.departure);
    if (arrival === null || departure === null) messages.push("Choose valid arrival and departure dates.");
    else { if (arrival < dayNumber(today)!) messages.push("Arrival cannot be in the past."); if (departure <= arrival) messages.push("Departure must be at least one night after arrival."); }
    if (!Number.isInteger(input.guests) || input.guests < 1 || input.guests > 4) messages.push("Choose between one and four guests.");
    setErrors(messages);
    if (!messages.length) setStep(1);
  }
  function nextFromRoom() {
    const messages = validateBooking(input);
    setErrors(messages);
    if (!messages.length) setStep(2);
  }

  return <div className="booking-shell"><div className="booking-progress" aria-label="Booking demo progress">{steps.map((label, index) => <div key={label} className={index === step ? "active" : index < step ? "complete" : ""}><span>0{index + 1}</span><span>{label}</span></div>)}</div><div className="booking-content">
    <div className="booking-main">
      {step === 0 && <section aria-labelledby="booking-dates"><p className="eyebrow">01 / Begin your stay</p><h2 id="booking-dates">When shall we<br /><em>imagine arriving?</em></h2><p>Choose a date and the people travelling with you. This is a local planning demonstration.</p><div className="booking-fields"><label>Arrival<input type="date" value={input.arrival} min={today} onChange={(event) => update({ arrival: event.target.value })} /></label><label>Departure<input type="date" value={input.departure} min={input.arrival || today} onChange={(event) => update({ departure: event.target.value })} /></label><label>Guests<select value={input.guests} onChange={(event) => update({ guests: Number(event.target.value), roomSlug: "" })}><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option></select></label></div><p className="booking-hint">Try 14–17 January 2027 to see the Pavilion Residence unavailable in this fixed demo inventory.</p><button type="button" className="button button-olive" onClick={nextFromDates}>Compare rooms <span aria-hidden="true">→</span></button></section>}
      {step === 1 && <section aria-labelledby="booking-rooms"><p className="eyebrow">02 / Make it yours</p><h2 id="booking-rooms">Choose your<br /><em>place to stay.</em></h2><p>These rates and availability states are illustrative. Select a room and any moments to add to your sample itinerary.</p><div className="booking-room-list">{rooms.map((item) => { const unavailableHere = unavailable.includes(item.slug); const tooSmall = input.guests > item.occupancy; const disabled = unavailableHere || tooSmall; return <label key={item.slug} className={`booking-room${input.roomSlug === item.slug ? " selected" : ""}${disabled ? " unavailable" : ""}`}><input type="radio" name="room" value={item.slug} checked={input.roomSlug === item.slug} disabled={disabled} onChange={() => update({ roomSlug: item.slug })} /><span className="booking-room-image"><Image src={item.image} alt="" fill sizes="140px" /></span><span className="booking-room-copy"><strong>{item.name}</strong><small>{item.area} m² · up to {item.occupancy} guests</small><small>{unavailableHere ? "Unavailable for these demo dates" : tooSmall ? "Too small for your party" : `${formatInr(item.rate)} / night`}</small></span></label>; })}</div><h3 className="booking-subtitle">Add a moment</h3><p className="booking-hint">Each selected experience is priced once per guest for the stay.</p><div className="booking-addons">{experiences.map((item) => <label key={item.slug}><input type="checkbox" checked={input.addOns.includes(item.slug)} onChange={(event) => update({ addOns: event.target.checked ? [...input.addOns, item.slug] : input.addOns.filter((slug) => slug !== item.slug) })} /><span><strong>{item.name}</strong><small>{formatInr(item.rate)} / person · {item.duration}</small></span></label>)}</div><div className="booking-buttons"><button type="button" className="text-link" onClick={() => { setErrors([]); setStep(0); }}>← Edit dates</button><button type="button" className="button button-olive" onClick={nextFromRoom}>Review itinerary <span aria-hidden="true">→</span></button></div></section>}
      {step === 2 && quote && room && <section aria-labelledby="booking-review"><p className="eyebrow">03 / Before you arrive</p><h2 id="booking-review">A stay, laid<br /><em>out clearly.</em></h2><p>Review every detail. You can still change dates, room or experiences.</p><div className="review-facts"><div><span>Arrival</span><strong>{input.arrival}</strong></div><div><span>Departure</span><strong>{input.departure}</strong></div><div><span>Guests</span><strong>{input.guests}</strong></div><div><span>Room</span><strong>{room.name}</strong></div></div><div className="booking-buttons"><button type="button" className="text-link" onClick={() => setStep(0)}>← Edit dates</button><button type="button" className="text-link" onClick={() => setStep(1)}>Edit room & moments ↗</button></div><button type="button" className="button button-olive" onClick={() => setStep(3)}>Create demo itinerary <span aria-hidden="true">→</span></button><p className="booking-hint">No reservation, payment or personal information is collected.</p></section>}
      {step === 3 && quote && room && <section aria-labelledby="booking-done" className="booking-done"><p className="eyebrow">04 / Your imagined stay</p><span className="done-mark" aria-hidden="true">✳</span><h2 id="booking-done">A little more<br /><em>to look forward to.</em></h2><p className="done-disclosure">Demo itinerary created — no reservation or payment has been made.</p><p>{quote.nights} {quote.nights === 1 ? "night" : "nights"} in the {room.name}, for {input.guests} {input.guests === 1 ? "guest" : "guests"}.</p><div className="booking-buttons"><button type="button" className="text-link" onClick={() => setStep(1)}>Edit this itinerary ↗</button><button type="button" className="button button-olive" onClick={() => { setInput(initial); setStep(0); setErrors([]); }}>Start again <span aria-hidden="true">↗</span></button></div></section>}
      {errors.length > 0 && <div className="booking-errors" role="alert"><strong>Please check the following:</strong><ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul></div>}
    </div>
    <aside className="booking-summary" aria-label="Your demo stay summary"><p className="eyebrow">Your stay / illustration</p><div className="summary-image"><Image src={room?.image || "/images/courtyard.webp"} alt="" fill sizes="(min-width: 960px) 350px, 100vw" /></div><h3>{room?.name || "A room to be chosen"}</h3><p>{input.arrival && input.departure ? `${input.arrival} → ${input.departure}` : "Choose dates to begin"}</p><p>{input.guests} {input.guests === 1 ? "guest" : "guests"}</p>{quote && <div className="summary-lines"><div><span>{room?.name} · {quote.nights} {quote.nights === 1 ? "night" : "nights"}</span><strong>{formatInr(quote.roomTotal)}</strong></div>{quote.addOnLines.map((line) => <div key={line.name}><span>{line.name} · {line.quantity} {line.quantity === 1 ? "guest" : "guests"}</span><strong>{formatInr(line.amount)}</strong></div>)}<div className="summary-total"><span>Illustrative subtotal</span><strong>{formatInr(quote.total)}</strong></div></div>}<small>All rates are sample INR values. Taxes and fees are not included. No real availability, reservation or charge.</small></aside>
  </div></div>;
}
