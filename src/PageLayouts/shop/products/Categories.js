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
            height: 120,
            width: 150
        };

        return (


     <div  style={{border:'0 !important'}}>
            <a


                key={key}
                onClick={contactClicked.bind(null, index)}
                href="#"
                className={`list-group-item ${activeClass}`}
            >
<img className="product-img" src={contact.image_url} style={imageStyle} alt="" />



                {contact.name}  <span className="price">  {contact.price_gross} PLN  </span>
                <small className="pull-right clear" style={{clear:'both',top:'-35px' }}>{contact.categories.join(', ')}</small>


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


