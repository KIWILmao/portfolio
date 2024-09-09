import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <Image
          src="/thumbnail.png"
          width={300}
          height={300}
          alt="404 Chibi Character"
          className="mx-auto rounded-full"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, you seem to have taken a wrong turn!
        </h1>
        <p className="mt-4 text-muted-foreground">
          We couldn&apos;t find the page you were looking for. Don&apos;t worry,
          it happens to the best of us.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Take me back home
          </Link>
        </div>
      </div>
    </div>
  );
}
