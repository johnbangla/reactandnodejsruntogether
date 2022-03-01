import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function Tweet() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/tweets');
        const items = await data.json();
        setItems(items);
        console.log(data)
    };

    return(
        <div>
        <section>
            {
            items.map(item => (
                <div className="container-fluid p-3 w-50">
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body p-1">
                                <h6 className="card-title">{item.name}</h6>
                                <p className="card-text">{item.msg}</p>
                                <p className="card-text"><i>by {item.username}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>
        </div>
    );
}

export default Tweet;