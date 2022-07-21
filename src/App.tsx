import React from "react";
import Navigation from "components/navigation";
import RouterLink from "routes/index";
import 'styles/App.css'

const App = () => (
    <div className='app'>
        <Navigation/>
        <RouterLink/>
    </div>
);

export default App;

