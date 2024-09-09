export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`h-full w-full bg-background dark:bg-grid-zinc-400/[0.2] bg-grid-zinc-800/[0.3] relative flex justify-center items-center  scroll-smooth`}
    >
      <div>{children}</div>
    </div>
  );
}
