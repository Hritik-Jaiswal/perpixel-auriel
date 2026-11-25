import { experiences, rooms } from "./content";

export type BookingInput = { arrival: string; departure: string; guests: number; roomSlug: string; addOns: string[] };
export type BookingQuote = { nights: number; roomTotal: number; addOnLines: { name: string; quantity: number; amount: number }[]; total: number };

// Dates are calendar dates. UTC arithmetic avoids daylight-saving hour shifts.
export function dayNumber(date: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const [year, month, day] = date.split("-").map(Number);
  const timestamp = Date.UTC(year, month - 1, day);
  const value = new Date(timestamp);
  if (value.getUTCFullYear() !== year || value.getUTCMonth() !== month - 1 || value.getUTCDate() !== day) return null;
  return timestamp / 86400000;
}

export function todayString(now = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function unavailableRoomSlugs(arrival: string, departure: string): string[] {
  const start = dayNumber(arrival);
  const end = dayNumber(departure);
  const fixtureStart = dayNumber("2027-01-14")!;
  const fixtureEnd = dayNumber("2027-01-17")!;
  return start !== null && end !== null && start < fixtureEnd && end > fixtureStart ? ["pavilion-residence"] : [];
}

export function validateBooking(input: BookingInput, today = todayString()): string[] {
  const errors: string[] = [];
  const arrival = dayNumber(input.arrival);
  const departure = dayNumber(input.departure);
  const current = dayNumber(today)!;
  const room = rooms.find((item) => item.slug === input.roomSlug);
  if (arrival === null || departure === null) errors.push("Choose valid arrival and departure dates.");
  else {
    if (arrival < current) errors.push("Arrival cannot be in the past.");
    if (departure <= arrival) errors.push("Departure must be at least one night after arrival.");
  }
  if (!Number.isInteger(input.guests) || input.guests < 1 || input.guests > 4) errors.push("Choose between one and four guests.");
  if (!room) errors.push("Choose a room.");
  else if (input.guests > room.occupancy) errors.push(`${room.name} sleeps up to ${room.occupancy} guests.`);
  if (room && unavailableRoomSlugs(input.arrival, input.departure).includes(room.slug)) errors.push(`${room.name} is unavailable for these demo dates. Try another room or dates.`);
  if (input.addOns.some((slug) => !experiences.some((item) => item.slug === slug))) errors.push("An experience selection is not available.");
  return errors;
}

export function quoteBooking(input: BookingInput, today = todayString()): BookingQuote | null {
  if (validateBooking(input, today).length) return null;
  const room = rooms.find((item) => item.slug === input.roomSlug)!;
  const nights = dayNumber(input.departure)! - dayNumber(input.arrival)!;
  const roomTotal = room.rate * nights;
  const addOnLines = experiences.filter((item) => input.addOns.includes(item.slug)).map((item) => ({ name: item.name, quantity: input.guests, amount: item.rate * input.guests }));
  return { nights, roomTotal, addOnLines, total: roomTotal + addOnLines.reduce((sum, item) => sum + item.amount, 0) };
}
