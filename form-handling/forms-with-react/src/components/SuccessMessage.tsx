export default function SuccessMessage() {
  return (
    <div
      role="status"
      className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-4 text-sm text-emerald-300"
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-base">
        ✓
      </span>

      <div>
        <p className="font-medium">Account created successfully</p>
        <p className="mt-1 text-xs text-emerald-300/70">
          Your form has been submitted.
        </p>
      </div>
    </div>
  );
}
