export const WELCOME_SESSION_KEY = "portfolio-welcome-seen";

export const shouldShowWelcome = () => {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  try {
    return window.sessionStorage.getItem(WELCOME_SESSION_KEY) !== "true";
  } catch {
    return true;
  }
};

export const markWelcomeSeen = () => {
  try {
    window.sessionStorage.setItem(WELCOME_SESSION_KEY, "true");
  } catch {
    // ponytail: session storage can be unavailable; replaying the short intro is acceptable.
  }
};
