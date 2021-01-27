import React from "react"
import {Route ,Switch ,  BrowserRouter, Router} from "react-router-dom"
import Home from "../page/home/index"
import commodity from "../page/commodityType/index"
import tabs from "../page/tabs";
import manageInventory from "../page/manageInventory";
import repertory from '../page/repertory';
import report from '../page/report/report';
import Video from '../page/Video/Video';
import adminVideo from '../page/adminVideo/adminVideo';
import imgup from '../page/imgup/imgup';
import shopup from '../page/shopup/shopup';
import advertisement from '../page/advertisement';
import orderReport from '../page/orderReport';
import manageReturns from '../page/manageReturns';
import registerToVine from '../page/registerToVine';
import manageYourExperiments from '../page/manageYourExperiments';
import newBundle from '../page/newBundle';
const App = ()=> (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/commodity" exact={true} component={commodity}/>
            <Route path="/tabs" exact={true} component={tabs}/>
            <Route path="/manageInventory" exact={true} component={manageInventory}/>

            {/* 临时路由 */}
            <Route path="/repertory" exact={true} component={repertory}/>
            <Route path="/report" exact={true} component={report} />
            <Route path="/Video" exact={true} component={Video} />
            <Route path="/adminVideo" exact={true} component={adminVideo} />
            <Route path="/imgup" exact={true} component={imgup} />
            <Route path="/shopup" exact={true} component={shopup} />
            <Route path="/advertisement" exact={true} component={advertisement} />
            <Route path="/orderReport" exact={true} component={orderReport} />
            <Route path="/manageReturns" exact={true} component={manageReturns} />
            <Route path="/registerToVine" exact={true} component={registerToVine} />
            <Route path="/manageYourExperiments" exact={true} component={manageYourExperiments} />
            <Route path="/newBundle" exact={true} component={newBundle} />
        </Switch>

    </BrowserRouter>
)

export default App