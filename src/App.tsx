import React from "react";
import TabsRouter from "components/navigation";
import RoterLink from "routes/index";
import 'styles/App.css'

const App = () => (
    <div className='app'>
        <TabsRouter/>
        <RoterLink/>
    </div>
);

export default App;

