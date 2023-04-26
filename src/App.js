import Footer from './component/footer';
import Header from './component/header';
import Main from './component/main';
import logo from './img/logo.png';
import { arrJsonDeviceName } from './js/base';

import './css/app.scss';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';

function App() {
  const locate = [
    { key: 1, url: "/", component: Main, label: "Main" },
    { key: 2, url: "/22", component: Main, label: "Alarm" }
  ];
  function fRouteSetup(data) {
    return data.map((p_locate, i) => {
      if (i !== 0) {
        return (
          <Route
            key={p_locate.key}
            path={p_locate.url}
            component={p_locate.component}
          />
        );
      }
    })
  }
  const RouteNoMatch = ({ location }) => {
    return (
      <div>
        <p> ({location.pathname}) 잘못된 경로로 접근하셨습니다. </p>
      </div>
    );
  };

  async function callApi() {
    const res = await fetch('http://192.168.0.149:8080/length');
    const body = await res.json();
    return body;
  }

  const [main, setMain] = useState([{ max_device: arrJsonDeviceName.length }]);

  useEffect(async () => {
    await callApi().then(res => {
      setMain([res]);
    }).catch(err => {
      //setMain([1]);
    });
  }, [])

  function createMain(json) {
    var length;
    try {
      length = json[0].max_device;
    } catch (e) {
      length = 0;
    }
    return (
      <Main length={length} />
    )
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        {fRouteSetup(locate)}
        <Route path="/">
          {createMain(main)}
        </Route>
        <Route component={RouteNoMatch} />
      </Switch>
      {/*< Main length={main} />*/}
      <Footer url={locate} />
    </div>
  );
}

export default App;
