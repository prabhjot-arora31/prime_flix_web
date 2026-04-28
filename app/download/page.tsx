export default function DownloadPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">

      <div>
        <h1 className="text-4xl font-bold mb-6">
          Download PrimeFlix
        </h1>

        <p className="text-slate-400 mb-8">
          Get the latest version and start streaming instantly.
        </p>

        <a
          href="/primeflix.apk"
          download
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold text-lg"
        >
          Download APK
        </a>

        <p className="text-xs text-slate-500 mt-4">
          Android only • Safe download • No login required
        </p>
      </div>

    </main>
  );
}