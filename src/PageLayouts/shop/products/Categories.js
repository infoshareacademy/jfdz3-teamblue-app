import React from 'react';

function Categories (props) {
    const { contacts, onClick, active } = props;
    function contactClicked(index) {
        if (typeof onClick !== 'function') {
            return;
        }
        onClick(index);
    }
    function addToCart(name, price){
        let cart = JSON.parse(localStorage.getItem('cartItems'));
        if( !Array.isArray(cart)){
            cart = [];
        }
        cart.push( {name: name, price: price});
        localStorage.setItem('cartItems', JSON.stringify(cart));


    }
    const contactButtons = contacts.map((contact, index) => {
        const key = index;
        const activeClass = index === active ? 'active' : '';

        var imageStyle = {
            height: 120,
            width: 150
        };

        // var cartItems = {name: name , price: price_gross};

        return (




     <div >
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

<button style={{display:"inline-block"}} onClick={() => addToCart(contact.name, contact.price_gross)}>Dodaj do koszyczka</button> <span>{localStorage.getItem('cartItems.name')}</span>


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


