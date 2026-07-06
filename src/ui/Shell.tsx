interface ShellProps {
  children: React.ReactNode;
}

export default function Shell({ children }: ShellProps) {
  return <div className="flex h-dvh flex-col text-ink">{children}</div>;
}

export function ShellBody({ children }: ShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-3 overflow-hidden px-4 py-3 sm:gap-4 sm:px-8 sm:py-5">
      {children}
    </div>
  );
}

export function ShellScroll({ children }: ShellProps) {
  return (
    <div className="min-h-0 flex-1 overflow-auto rounded-3xl border border-line bg-white shadow-sm">
      {children}
    </div>
  );
}

export function ShellFooter({ children }: ShellProps) {
  return (
    <div className="shrink-0 border-t border-line bg-white/70 px-4 py-3 backdrop-blur sm:px-8 sm:py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-3">
        {children}
      </div>
    </div>
  );
}
