import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutProvider } from "@/components/shared/layout.provider";
import { Session } from "@/components/shared/session.card";
import { getSession } from "@/features/auth/lib";
import { SignOutButton } from "@/features/auth/components/sign-out.button";

export const NABIL_GITHUB_URL = "https://github.com/nabilfaturr/next-starter";

export default async function Home() {
  const session = await getSession();

  return (
    <LayoutProvider className="bg-foreground/2 p-8">
      <section className="space-y-4">
        <div className="space-y-20">
          <h2 className="text-3xl font-bold font-mono">
            <Link href={NABIL_GITHUB_URL} className="underline">
              Nabil
            </Link>{" "}
            Next.js starter kit.
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li className="list-none">Comes with</li>
            <li>Authentication (OAuth + Email magic link)</li>
            <li>UI components (using ShadCN UI + Tailwind CSS)</li>
            <li>Turso + Drizzle Integrated</li>
            <li>And more...</li>
          </ul>
          <div className="w-full flex justify-end gap-2">
            {!session ? (
              <Button asChild>
                <Link href="/auth/sign-in">Sign In</Link>
              </Button>
            ) : (
              <SignOutButton />
            )}
          </div>
        </div>
        <Session session={session} />
      </section>
    </LayoutProvider>
  );
}
