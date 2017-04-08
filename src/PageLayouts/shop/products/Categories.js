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

        var imageStyle = {
            height: 10,
            width: 10
        };
        
        return (


     <div>
            <a
                key={key}
                onClick={contactClicked.bind(null, index)}
                href="#"
                className={`list-group-item ${activeClass}`}
            >


                {contact.name}  <span className="price">  {contact.price_gross} PLN  </span>
            </a>


</div>

        );
    });
    const result = (
        <div>
        <ul className="list-group">
            {contactButtons}
        </ul>

        </div>

    );
    return result;
}

export default Categories;


