import Mission from "../Components/Mission/Mission";
import Services from "../Containers/ServicesContainer";
import Testemonials from "../Containers/TestemonialContainer";

function Homepage(){
    return(
        <div>
            <Mission />
            <Services />
            <Testemonials />
        </div>
    );
}

export default Homepage;