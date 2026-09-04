export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-purple animate-bounce-gentle" />
          <span className="w-3 h-3 rounded-full bg-orange animate-bounce-gentle delay-100" />
          <span className="w-3 h-3 rounded-full bg-green animate-bounce-gentle delay-200" />
          <span className="w-3 h-3 rounded-full bg-pink animate-bounce-gentle delay-300" />
        </div>
        <p className="text-body text-sm font-display font-semibold">Loading...</p>
      </div>
    </div>
  )
}
