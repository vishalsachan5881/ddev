import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import meridianLogo from './meridian-logo.svg';
import katalLogo from './katal-logo.svg';
import polarisLogo from './polaris-logo.svg';
import simLogo from './sim-logo.jpg';
import sageLogo from './sage-logo.svg';
import slackLogo from './slack-logo.svg';
import ttLogo from './tt-logo.svg';
import './App.css';
import { TrainingTracker, CurrentEventName } from '@amzn/harmony-react-tutorials';

function App () {

  // Uncomment the following to enable access control to this page. 
  // CAUTION! This does not gate access to any APIs your app might interact with. It
  // also does not prevent anyone from inspecting the assets of your app (JS, HTML & CSS).
  /*
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  
  // Fill in a valid Bindle Lock Id here. You can create a new one at 
  // https://bindles.amazon.com/lock/new
  const bindleLockId = "amzn1.bindle.resource.xxxxxxxxxxxxxxxxxxxx";

  useEffect(() => {
    // https://console.harmony.a2z.com/navigation/window.harmony.api.bindle.html#.isUserAuthorized
    window.harmony.api.bindle.isUserAuthorized({
      bindleLockId,
    }).then(response => {
      setHasAccess(response.isAuthorized);
      setCheckingAccess(false);
    }).catch(err => {
      console.log(err);
      setCheckingAccess(false);
    });
  }, [])

  if (checkingAccess) {
    return "Just a second..."
  }

  if (!hasAccess) {
    return (
      <>
        Sorry, you don't have access to this page. You need to be able to unlock <a target="_blank" rel="noopener" href={`https://bindles.amazon.com/resource/amzn1.bindle.resource.hz24hs5qhog5efwysx7q/${bindleLockId}`}>this Bindle Lock</a> (make sure it's valid too).
      </>
    )
  }
  */

  const user = window.harmony.api.getUser();

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Welcome to React in Harmony, <span style={{ color: '#f99829' }}>{user.firstName}</span>!</h1>
      </header>

      <p className="app-intro">
        <strong>Congratulations</strong> on starting your Harmony app! If you're not already doing so, we suggest running through <a href="https://console.harmony.a2z.com/docs/tutorials.html">our tutorials</a>.
      </p>

      <p className="app-intro">
        To get a feel for the development experience, edit <code>src/App.js</code> and save to reload.
      </p>

      <div className="app-features">
        <div className="app-features-list left-aligned">
          <h2>So what's next?</h2>
          <p><strong>Keep working through the tutorial</strong> to see how you can:</p>
          <ul>
          <li><a target="_blank" rel="noopener" href="https://console.harmony.a2z.com/docs/tutorials.html#Deploying%20Your%20App">Deploy your app to Beta</a></li>
          <li><a target="_blank" rel="noopener" href="https://console.harmony.a2z.com/docs/tutorials.html#Creating%20a%20Brazil%20Package%20for%20your%20App">Create a Brazil package for it</a></li>
          <li><a target="_blank" rel="noopener" href="https://console.harmony.a2z.com/docs/deploying-harmony-apps.html#Using%20Harmony%20CDK%20Package%20to%20set%20up%20Pipeline">Set up a CD/CI pipeline</a></li>
          <li><a target="_blank" rel="noopener" href="https://console.harmony.a2z.com/docs/tutorials.html#Calling%20an%20API">Call your backend</a></li>
          <li>Claim your coveted <a target="_blank" rel="noopener" href="https://phonetool.amazon.com/awards/101388/award_icons/114771">Phone Tool icon!</a></li>
          </ul>

          <p><strong>Lock down access to your app</strong>. By default, <span className="highlighted">all Harmony users can access your app</span>. Proper access control should <strong>always</strong> be enforced <u>at the API level</u>, but Harmony does provide <a target="_blank" rel="noopener" href="https://console.harmony.a2z.com/docs/application-development.html#Restricting%20Access%20to%20Apps">some tools</a> to help you hide elements of your app that users shouldn't have access to. Check out the source code of this page for an example that uses <a target="_blank" rel="noopener" href="https://bindles.amazon.com/lock/new">Bindle Locks</a>.</p>

          <p><strong>Choose a design system</strong>. You are free to use any design system that works for you. Polaris, Meridian & Katal are all great Amazon-internal options but you can also leverage external solutions such as <a target="_blank" rel="noopener" href="https://getbootstrap.com/">Bootstrap</a> and many others.</p>

          <div className="design-option">
            <img className="logo" width="50px" height="50px" src={katalLogo}></img>
            <span className="description">In addition to a cute logo, <a target="_blank" rel="noopener" href="https://katal.amazon.dev/design-system/overview/">Katal</a> offers many common components out of the box, like accordians, date pickers, calendars and many more.</span>
          </div>

          <div className="design-option">
            <img className="logo" width="150px" src={meridianLogo}></img>
            <span className="description"><a target="_blank" rel="noopener" href="https://meridian.a2z.com/">Meridian</a> offers a modern look, lots of components and opinionated guides to spare you some of those design decisions.</span>
          </div>

          <div className="design-option">
            <img className="logo" width="150px" style={{ padding: "5px", background: '#232f3e' }} src={polarisLogo}></img>
            <span className="description"><a target="_blank" rel="noopener" href="https://polaris.a2z.com/">Polaris</a> is the design system used in the AWS console and has a very simple, pragmatic look & feel.</span>
          </div>

          <p>If you need help, please reach out on one of the following:</p>

          <div className="help-channel">
          <a href="https://amzn-wwc.slack.com/archives/C017WNK903Z"><img src={slackLogo} alt="Slack Channel" style={{ height: "75px" }}></img></a><br />
              <a href="https://amzn-wwc.slack.com/archives/C017WNK903Z">Harmony Slack Channel</a><br />
              <span style={{fontSize: "x-small", lineHeight: "1.5em", display: "block", marginTop: "7px"}}>(ping the <a href="https://oncall.corp.amazon.com/#/view/harmony-console-consultations/schedule">consult master</a> if you can't get in)</span>
          </div>

          <div className="help-channel">
            <a href="https://sage.amazon.com/tags/harmony"><img src={sageLogo} alt="Sage Tag" style={{ height: "75px" }}></img></a><br />
              <a href="https://sage.amazon.com/tags/harmony">Harmony Sage Tag</a>
          </div>

          <div className="help-channel">
              <a href="https://email-list.corp.amazon.com/email-list/expand-list/harmony-console-interest"><svg className="bi bi-envelope-open-fill" width="75px" height="75px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">

        <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"></path>
      </svg></a><br />
              <a href="https://email-list.corp.amazon.com/email-list/expand-list/harmony-console-interest">Mailing List</a>
          </div>

          <div className="help-channel">
          <a href="https://tiny.amazon.com/x8tm4rb6/harmonyrequestinformation"><img src={simLogo} alt="Harmony Sim Queue" style={{ height: "75px" }}></img></a><br />
              <a href="https://tiny.amazon.com/x8tm4rb6/harmonyrequestinformation">SIM Queue</a>
          </div>

          <div className="help-channel">
          <a href="https://tt.amazon.com/quicklink/Q001177917"><img src={ttLogo} alt="TT Queue" style={{ height: "75px" }}></img></a><br />
              <a href="https://tt.amazon.com/quicklink/Q001177917">TT Queue</a>
          </div>


        </div>
        <TrainingTracker eventName={CurrentEventName} />
      </div>
    </div>
  );
}

export default App;
