import { Contact } from "./Chat";

interface ContactListProps {
  contacts: Contact[];
  selectedId: number;
  dispatch: React.Dispatch<any>;
}

export default function ContactList({contacts, selectedId, dispatch}: ContactListProps) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map((contact: Contact) => (
            <li key={contact.id}>
              <button
                onClick={() => {
                    dispatch({
                        type: 'changed_selection',
                        contactId: contact.id,
                      });
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
