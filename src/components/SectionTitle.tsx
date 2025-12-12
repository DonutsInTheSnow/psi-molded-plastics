// src/components/SectionTitle.tsx
export default function SectionTitle({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-center pb-12 relative ${className}`}>
      <h2 className="text-3xl md:text-4xl text-gray-800 font-bold inline-block relative pb-5">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#a3abbd]"></span>
      </h2>
    </div>
  );
}