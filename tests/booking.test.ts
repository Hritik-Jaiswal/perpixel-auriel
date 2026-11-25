import assert from "node:assert/strict";
import test from "node:test";
import { dayNumber, quoteBooking, unavailableRoomSlugs, validateBooking, type BookingInput } from "../src/lib/booking";

const today = "2026-11-25";
const valid: BookingInput = { arrival: "2027-02-10", departure: "2027-02-12", guests: 2, roomSlug: "courtyard-room", addOns: ["landscape-walk", "seasonal-dinner"] };

test("quotes nights and per-guest experiences without a charge", () => {
  assert.deepEqual(quoteBooking(valid, today), { nights: 2, roomTotal: 24000, addOnLines: [{ name: "The landscape walk", quantity: 2, amount: 3000 }, { name: "At the shared table", quantity: 2, amount: 6000 }], total: 33000 });
});
test("uses calendar dates across a daylight-saving change", () => {
  assert.equal(dayNumber("2027-03-13")! + 2, dayNumber("2027-03-15"));
  assert.equal(quoteBooking({ ...valid, arrival: "2027-03-13", departure: "2027-03-15", addOns: [] }, today)?.nights, 2);
});
test("rejects past, invalid and same-day stays", () => {
  assert.match(validateBooking({ ...valid, arrival: "2026-11-24" }, today).join(" "), /past/);
  assert.match(validateBooking({ ...valid, departure: valid.arrival }, today).join(" "), /at least one night/);
  assert.match(validateBooking({ ...valid, arrival: "2027-02-30" }, today).join(" "), /valid arrival/);
});
test("rejects occupancy above room capacity", () => {
  assert.match(validateBooking({ ...valid, guests: 3 }, today).join(" "), /sleeps up to 2/);
});
test("offers alternative rooms during deterministic sold-out dates", () => {
  const input = { ...valid, arrival: "2027-01-14", departure: "2027-01-17", roomSlug: "pavilion-residence" };
  assert.deepEqual(unavailableRoomSlugs(input.arrival, input.departure), ["pavilion-residence"]);
  assert.match(validateBooking(input, today).join(" "), /unavailable/);
  assert.equal(quoteBooking({ ...input, roomSlug: "aravalli-suite" }, today)?.nights, 3);
});
test("rejects unknown add-ons and rooms", () => {
  assert.equal(quoteBooking({ ...valid, roomSlug: "unknown" }, today), null);
  assert.match(validateBooking({ ...valid, addOns: ["unknown"] }, today).join(" "), /not available/);
});
