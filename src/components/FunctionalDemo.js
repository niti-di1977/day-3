
import Fdemo2 from './FunctionalDemo2';

import CD from '../Class_components/ClassDemo1';
import ContactUs from '../components/ContactUs';
function Demo(props)
{

    return(
            <div>
            <h1> Class and </h1>
            <h1> Hi , {props.username}</h1>
            <Fdemo2 />
            <h2>Functional Demos</h2>
             <CD />
             <ContactUs />
            </div>
    );
}

export default Demo;