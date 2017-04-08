import React from 'react';

function Categories (props) {
    const { contacts, onClick, active } = props;
    function contactClicked(index) {
        if (typeof onClick !== 'function') {
            return;
        }
        onClick(index);
    }
    const contactButtons = contacts.map((contact, index) => {
        const key = index;
        const activeClass = index === active ? 'active' : '';
        return (
            <a
                key={key}
                onClick={contactClicked.bind(null, index)}
                href="#"
                className={`list-group-item ${activeClass}`}
            >
                {contact.name}
            </a>
        );
    });
    const result = (
        <ul className="list-group">
            {contactButtons}
        </ul>
    );
    return result;
}

export default Categories;
