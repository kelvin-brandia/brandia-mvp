export default function UsageCard() {
  const used = 12;
  const limit = 40;
  const percent = (used / limit) * 100;

  return (
    <div className="border border-[#1E293B] rounded-xl p-6 bg-[#020617]">
      <h3 className="text-lg font-semibold text-white mb-2">
        Uso mensal
      </h3>

      <p className="text-[#94A3B8] mb-4">
        {used} de {limit} imagens usadas
      </p>

      <div className="w-full h-2 bg-[#1E293B] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#7C3AED]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
