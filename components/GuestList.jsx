import GuestItem from "./GuestItem";

export default function GuestList({ guests, onGuestSelect }) {
  return (
    <article className="guests">
      {guests.map((guest) => (
        <button
  key={guest.id}
  className="guest-button"
  onClick={() => onGuestSelect(guest)}
>
  <GuestItem guest={guest} />
</button>
      ))}
    </article>
  );
}