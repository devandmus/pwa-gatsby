import React, { useRef, useLayoutEffect, useState} from 'react';


/*
* Service Worker installed on Gatsby Browser usign sw.js in static folder & custom manifest usign gatsby-plugin-manifest
* */
const buttonStyles = {
  padding: '16px',
  margin: 'auto',
  borderRadius: '8px',
  backgroundColor: '#6a3280',
  border: 0,
  color: 'white',
  cursor: 'pointer',
};

const InstallButton = () => {
  const [installabled, setInstallabled] = useState(false);
  const beforeinstallpromptEventRef = useRef(null);

  const choiceHandler = () => {
    const handler = beforeinstallpromptEventRef.current;
    handler.prompt();
    handler
      .userChoice
      .then(result => {
        if (result.outcome === 'accepted') {
          setInstallabled(false);
          console.log('Accepted');
        }
        else console.log('Not accepted');
      });
  }

  useLayoutEffect(() => {
    // only works in Chrome, android WebView, android Chrome, Samsung Internet and Internet explorer
    // https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
    window && window.addEventListener(
      'beforeinstallprompt',
      beforeinstallpromptEvent => {
        console.log('APP NOT INSTALLED');
        beforeinstallpromptEvent.preventDefault();
        beforeinstallpromptEventRef.current = beforeinstallpromptEvent;
        setInstallabled(true)
      });
  }, []);

  return (
    <>
      {
        installabled && (
          <button
            type="button"
            onClick={choiceHandler}
            style={{...buttonStyles}}
          >
            Click here to install
          </button>
        )
      }
    </>
  )
}

export default InstallButton;
