
import React, { Component } from 'react';

class Test extends Component {
    render() {
        let langs = [ "React ", "ES6 ", "JS "]
        return (
            <div>
               {
                    langs.map( it => <p>{it}</p>)
                }
            </div>
      
        );
    }
}

export default Test;