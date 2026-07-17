interface ProgressBarProps {
  percent: number;
  label?: string;
}

export function ProgressBar({ percent, label }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent));
  return (
    <div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy-50">
        <div className="h-full rounded-full bg-lemon-500 transition-all" style={{ width: `${clamped}%` }} />
      </div>
      {label && <div className="mt-1.5 text-xs text-surface-muted">{label}</div>}
    </div>
  );
}