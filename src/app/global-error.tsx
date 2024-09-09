"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <Image
          src="/thumbnail.png"
          width={300}
          height={300}
          alt="Error Chibi Character"
          className="mx-auto rounded-full"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops! Something went wrong
        </h1>
        <p className="mt-4 text-muted-foreground">
          We encountered an unexpected error while processing your request.
        </p>
        <div className="mt-6 space-y-4">
          <button
            onClick={() => reset()}
            className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Try again
          </button>
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            prefetch={false}
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
