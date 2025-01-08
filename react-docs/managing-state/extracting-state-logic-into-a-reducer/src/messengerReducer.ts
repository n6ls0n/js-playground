export const initialState = {
    selectedId: 0,
    messages: {
      0: 'Hello, Taylor',
      1: 'Hello, Alice',
      2: 'Hello, Bob',
    },
  };

interface State {
    selectedId: number;
    messages: {[key: number]: string};
}

interface Action {
    type: string;
    contactId?: number;
    message?: string;
    messages?: { [key: number]: string };
}

export function messengerReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId!,
            };
        }
        case 'edited_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message || '',
                },
            };
        }
        case 'sent_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: '',
                },
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
