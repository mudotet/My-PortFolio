import { useEffect, useState } from "react";
import { markWelcomeSeen, shouldShowWelcome } from "../lib/welcome";

const lines = ["Phan Thanh Tu", "Software Engineer", "Welcome to my work."];
const lineStarts = [0, 540, 1080];
const lineDurations = [540, 540, 720];

export const WelcomeSequence = () => {
  const [isVisible, setIsVisible] = useState(shouldShowWelcome);

  useEffect(() => {
    if (!isVisible) return undefined;

    markWelcomeSeen();
    const timeout = window.setTimeout(() => setIsVisible(false), 1970);
    return () => window.clearTimeout(timeout);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="welcome-sequence"
      role="button"
      tabIndex={0}
      aria-label="Skip welcome animation"
      onClick={() => setIsVisible(false)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsVisible(false);
        }
      }}
    >
      <div className="welcome-orb welcome-orb-start" aria-hidden="true" />
      <div className="welcome-orb welcome-orb-end" aria-hidden="true" />
      <div className="welcome-copy" aria-hidden="true">
        {lines.map((line, lineIndex) => (
          <p
            key={line}
            className="welcome-line"
            style={{
              "--welcome-line-delay": `${lineStarts[lineIndex]}ms`,
              "--welcome-line-duration": `${lineDurations[lineIndex]}ms`,
            }}
          >
            {Array.from(line).map((character, characterIndex) => (
              <span
                key={`${character}-${characterIndex}`}
                className="welcome-character"
                style={{
                  "--welcome-delay": `${lineStarts[lineIndex] + characterIndex * 18}ms`,
                }}
              >
                {character === " " ? "\u00A0" : character}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
};
