import { bakbak } from "../utils/fonts";

export default function Home() {
  return (
    <main className="grid place-items-center h-full">
      <div>
        <p className="text-4xl text-center tracking-widest text-secondary dark:text-primary">
          Every tech news you need to know about.
        </p>
        <h1
          className={`text-[12rem] text-secondary dark:text-primary ${bakbak.className}`}
        >
          Tech Journal
        </h1>
        <div className="flex gap-8 justify-center">
          <button className="text-xl bg-primary dark:bg-secondary text-secondary dark:text-primary px-4 py-3 rounded-md border border-secondary dark:border-primary hover:scale-105 transition-transform">
            Start Posting
          </button>
          <button className="text-xl bg-secondary dark:bg-primary text-primary dark:text-secondary px-4 py-3 rounded-md border border-primary dark:border-secondary hover:scale-105 transition-transform">
            Start Reading
          </button>
        </div>
      </div>
    </main>
  );
}
