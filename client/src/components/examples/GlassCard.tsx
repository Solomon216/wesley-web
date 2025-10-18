import GlassCard from '../GlassCard';

export default function GlassCardExample() {
  return (
    <div className="bg-gradient-to-br from-purple-200 to-amber-100 p-8">
      <GlassCard className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">Glass Card Example</h3>
        <p className="text-muted-foreground">This is a reusable glassmorphic card component.</p>
      </GlassCard>
    </div>
  );
}
