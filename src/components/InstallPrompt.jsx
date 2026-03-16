import { useState, useEffect } from 'react';
import { useClient } from '../context/ClientContext';
import './InstallPrompt.css';

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const { client } = useClient();

  const clientName = client?.name || 'Hometown Brew App';

  useEffect(() => {
    // Check if dismissed before
    if (localStorage.getItem('installPromptDismissed')) {
      return;
    }

    // Always show after delay, PWA ready or not
    const timer = setTimeout(() => setShowPrompt(true), 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleInstallClick = async () => {
    const prompt = window.deferredPrompt;
    if (prompt) {
      setShowPrompt(false);
      setShowInstallModal(true);
      prompt.prompt();
      const { outcome } = await prompt.userChoice;
      setShowInstallModal(false);
      if (outcome === 'accepted') {
        localStorage.setItem('installPromptDismissed', 'true');
      }
    } else {
      // Fallback
      alert('Open in Chrome on mobile and look for "Add to Home Screen" in menu!');
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('installPromptDismissed', 'true');
    setShowPrompt(false);
  };

  const handleCancelInstall = () => {
    setShowInstallModal(false);
  };

  if (!showPrompt) return null;

  return (
    <>
      {/* Floating Suggestion Pill */}
      <div className="install-prompt-pill" role="button" tabIndex={0} onClick={handleInstallClick}>
        📱 Download {clientName}
        <button className="pill-close" onClick={(e) => {
          e.stopPropagation();
          handleDismiss();
        }}>×</button>
      </div>

      {/* Install Confirmation Modal */}
      {showInstallModal && (
        <div className="install-modal-overlay">
          <div className="install-modal">
            <h3>Install {clientName}?</h3>
            <p>Add to home screen for offline access & quick ordering!</p>
            <div className="modal-buttons">
              <button className="install-confirm-btn" onClick={handleInstallClick}>
                Yes, Install
              </button>
              <button className="install-cancel-btn" onClick={handleCancelInstall}>
                Not Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InstallPrompt;

