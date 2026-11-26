import "./ScrollProgress.css";

function ScrollProgress({ progress = 0 }) {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        className="scroll-progress__bar"
        style={{
          transform: `scaleX(${safeProgress / 100})`,
        }}
      />
    </div>
  );
}

export default ScrollProgress;
