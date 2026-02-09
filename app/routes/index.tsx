import {
  ArrowDownIcon,
  BotIcon,
  ChevronRightIcon,
  CreditCardIcon,
  DatabaseIcon,
  LockIcon,
  MailIcon,
  UploadIcon,
} from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* ========== DELETE THIS SECTION WHEN READY ========== */}
      <section className="border-b border-success/20 bg-success/10 py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-success"></span>
            </span>
            <span className="text-xl font-bold text-success">You're Live!</span>
          </div>
          <p className="text-success">
            Your app is deployed and running. Now make it yours.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded-lg bg-base-100 px-3 py-1.5 shadow-sm">
              <span className="text-sm text-base-content/70">1. Open</span>
              <code className="rounded bg-base-200 px-2 py-0.5 font-mono text-sm text-base-content">
                app/routes/index.tsx
              </code>
            </div>
            <span className="hidden text-base-content/30 sm:block">→</span>
            <div className="rounded-lg bg-base-100 px-3 py-1.5 text-sm text-base-content/70 shadow-sm">
              2. Delete this section
            </div>
            <span className="hidden text-base-content/30 sm:block">→</span>
            <div className="rounded-lg bg-base-100 px-3 py-1.5 text-sm text-base-content/70 shadow-sm">
              3. Edit everything below
            </div>
          </div>
        </div>
      </section>
      {/* ===================================================== */}

      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-base-100 to-secondary/5"></div>

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute top-[20%] left-[10%] h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="animate-float-delayed absolute top-[60%] right-[15%] h-48 w-48 rounded-full bg-secondary/10 blur-3xl"></div>
          <div className="animate-float absolute top-[10%] left-[60%] h-32 w-32 rounded-full bg-accent/10 blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative flex min-h-[90vh] items-center justify-center px-6">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/80 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium">Built with Gista.js</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-base-content sm:text-6xl lg:text-7xl">
              Your AI writes the code.
              <br />
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                You ship the product.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-balance text-base-content/70 sm:text-xl">
              Build real software without being an engineer. From vibe to live,
              lightspeed.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="btn shadow-lg transition-transform btn-lg btn-primary hover:scale-105">
                Get Started
              </button>
              <button className="btn btn-ghost btn-lg">
                See How It Works
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="h-6 w-6 text-base-content/40" />
        </div>
      </section>

      {/* Features */}
      <section className="bg-base-200/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="mb-4 badge badge-outline badge-primary">
              What You Get
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ship real software from day one
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
              Everything wired up. No setup headaches. Start building features,
              not fighting config.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<LockIcon className="h-8 w-8 text-primary" />}
              title="Login Ready"
              description="Signup, login, password reset — already wired. Add Google login with one config change."
            />
            <FeatureCard
              icon={<DatabaseIcon className="h-8 w-8 text-secondary" />}
              title="Database Included"
              description="SQLite locally, Turso in production. No Docker, no setup. Just works."
            />
            <FeatureCard
              icon={<MailIcon className="h-8 w-8 text-accent" />}
              title="Beautiful Emails"
              description="Welcome emails, password recovery, notifications. Swap providers anytime."
            />
            <FeatureCard
              icon={<BotIcon className="h-8 w-8 text-info" />}
              title="AI Superpowers"
              description="Streaming, reasoning, web search, tool calls. Your AI assistant is ready to help."
            />
            <FeatureCard
              icon={<CreditCardIcon className="h-8 w-8 text-success" />}
              title="Payments Wired"
              description="Subscriptions, one-time payments, webhooks. Start charging when you're ready."
            />
            <FeatureCard
              icon={<UploadIcon className="h-8 w-8 text-warning" />}
              title="File Uploads"
              description="Images, PDFs, CSVs — drag, drop, done. S3 or Cloudflare R2 ready."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="mb-4 badge badge-outline badge-secondary">
              How it works
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to live in minutes
            </h2>
          </div>

          <div className="mt-16 space-y-12">
            <Step
              number={1}
              title="Use This Template"
              description="Click 'Use this template' on GitHub, import to Vercel. Your app is live before you write a line of code."
            />
            <Step
              number={2}
              title="Tell Your AI What to Build"
              description="Open in Cursor or VS Code with Claude. Describe what you want. Watch it appear."
            />
            <Step
              number={3}
              title="Push and Ship"
              description="Every git push auto-deploys. Your users see changes in seconds."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-secondary py-24 text-primary-content">
        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-secondary/10 to-primary/20"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to build your thing?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-content/80">
            You came to ship. Let's make it happen.
          </p>

          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input w-full bg-white/10 text-primary-content placeholder:text-primary-content/50 focus:bg-white/20 sm:flex-1"
            />
            <button
              type="button"
              className="btn w-full border-white/20 bg-white/10 text-primary-content backdrop-blur-sm hover:bg-white/20 sm:w-auto"
            >
              Get Early Access
            </button>
          </div>

          <p className="mt-4 text-sm text-primary-content/60">
            $0 to start. Scale when you're ready.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-base-200 bg-base-100 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="font-semibold">Your Product</span>
            </div>

            <div className="flex gap-6 text-sm text-base-content/60">
              <a href="#" className="transition-colors hover:text-base-content">
                Docs
              </a>
              <a href="#" className="transition-colors hover:text-base-content">
                GitHub
              </a>
              <a href="#" className="transition-colors hover:text-base-content">
                Twitter
              </a>
            </div>

            <p className="text-sm text-base-content/60">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="card-body">
        <div className="mb-2">{icon}</div>
        <h3 className="card-title text-lg">{title}</h3>
        <p className="text-base-content/70">{description}</p>
      </div>
    </div>
  )
}

function Step({ number, title, description }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content">
          {number}
        </div>
        {number < 3 && <div className="mt-4 h-full w-px bg-base-300"></div>}
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-base-content/70">{description}</p>
      </div>
    </div>
  )
}
