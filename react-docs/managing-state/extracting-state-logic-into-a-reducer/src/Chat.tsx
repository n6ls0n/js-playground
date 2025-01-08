export interface Contact {
  id: number;
  name: string;
  email: string;
}

interface ChatProps {
  contact: Contact;
  message: string;
  dispatch: React.Dispatch<any>;
}

export default function Chat({ contact, message, dispatch }: ChatProps) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
            dispatch({
                type: 'edited_message',
                message: e.target.value,
              });
        }}
      />
      <br />
      <button
        onClick={() => {
            alert(`Sending "${message}" to ${contact.email}`);
            dispatch({
                type: 'sent_message',
              });
        }}
      >Send to {contact.email}</button>
    </section>
  );
}
