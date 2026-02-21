import Link from "next/link";
import { LogoutButton } from "@/components/auth/logout-button";

export function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/protected"
          className="text-xl font-semibold text-teal-700 dark:text-teal-400"
        >
          Skill Mentor
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/protected"
            className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
          >
            Dashboard
          </Link>
          <Link
            href="/protected/stacks"
            className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
          >
            Stacks
          </Link>
          <Link
            href="/protected/profile"
            className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
          >
            Profile
          </Link>
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
