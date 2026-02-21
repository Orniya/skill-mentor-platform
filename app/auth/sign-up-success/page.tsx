import Link from "next/link";

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-md rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm text-center">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          Check your email
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          We&apos;ve sent you a confirmation link. Click it to verify your
          account, then you can log in.
        </p>
        <Link
          href="/auth/login"
          className="inline-block rounded-lg bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
        >
          Go to login
        </Link>
        <p className="mt-6">
          <Link
            href="/"
            className="text-sm text-slate-500 dark:text-slate-400 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
