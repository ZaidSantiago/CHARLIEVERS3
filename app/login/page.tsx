'use client';

export default function LoginPage() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{ backgroundColor: 'var(--bg2)', color: 'var(--fg0)' }}
    >
      {/* Header */}
      <h1 className="text-4xl font-bold mb-10">Chat with Charlie</h1>

      {/* Get Started button */}
      <a
        href="/auth/login"
        className="
          text-xs font-bold tracking-wider uppercase whitespace-nowrap 
          inline-flex items-center justify-center gap-2 shrink-0 rounded-full 
          cursor-pointer outline-none transition-colors duration-300
          focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
          disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-destructive/20 
          aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40 
          [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 
          bg-white text-black hover:bg-gray-200 focus:bg-gray-200 h-10 px-6 
          has-[>svg]:px-4 mt-6 w-64 font-mono
        "
      >
        Get Started
      </a>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-400">
        © Project CHARLIE 2025
      </footer>
    </div>
  );
}
