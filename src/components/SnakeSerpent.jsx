import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const greenVariants = ["#3B9C4C", "#5DB075", "#7DDC8A"];
const SEGMENT_COUNT = 6;

const SnakeSerpent = ({ points }) => {
  const headX = useMotionValue(0);
  const headY = useMotionValue(0);

  const segments = useRef(
    Array.from({ length: SEGMENT_COUNT }, () => ({
      x: useMotionValue(0),
      y: useMotionValue(0),
    }))
  );

  const indexRef = useRef(0);
  const timeRef = useRef(0);

  useAnimationFrame((t) => {
    const dt = (t - timeRef.current) / 1000;
    timeRef.current = t;

    const point = points[indexRef.current];
    if (!point) return;

    const dx = point.left - headX.get();
    const dy = point.top - headY.get();

    const speed = 160; // pixels per second
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 2) {
      indexRef.current = (indexRef.current + 1) % points.length;
      return;
    }

    const angle = Math.atan2(dy, dx);
    const vx = Math.cos(angle) * speed * dt;
    const vy = Math.sin(angle) * speed * dt;

    headX.set(headX.get() + vx);
    headY.set(headY.get() + vy);

    for (let i = 0; i < SEGMENT_COUNT; i++) {
        const targetX = i === 0 ? headX : segments.current[i - 1].x;
        const targetY = i === 0 ? headY : segments.current[i - 1].y;
      
        const sx = segments.current[i].x.get();
        const sy = segments.current[i].y.get();
      
        const dx = targetX.get() - sx;
        const dy = targetY.get() - sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const followDist = 15;
      
        // Ratio de suivi
        if (dist > followDist) {
          const ratio = (dist - followDist) / dist;
          let baseX = sx + dx * ratio;
          let baseY = sy + dy * ratio;
      
          // 🔄 Oscillation en S
          const angle = Math.atan2(dy, dx);
          const normalX = -Math.sin(angle); // vecteur perpendiculaire
          const normalY = Math.cos(angle);
      
          const waveAmplitude = 2.1;
          const waveFrequency = 0.0001; // plus petit = plus fluide
          const wave = Math.sin(t * waveFrequency * 100 + i * 0.8) * waveAmplitude;
      
          baseX += normalX * wave;
          baseY += normalY * wave;
      
          segments.current[i].x.set(baseX);
          segments.current[i].y.set(baseY);
        }
      }
      
  });

  return (
    <>
      {/* Head */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-green-800 z-50 flex items-center justify-center"
        style={{ left: headX, top: headY }}
      >
        <div className="flex gap-[2px]">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>

      {/* Body */}
      {segments.current.map((seg, i) => (
        <motion.div
          key={i}
          className="absolute w-5 h-5 rounded-full z-40"
          style={{
            left: seg.x,
            top: seg.y,
            backgroundColor: greenVariants[i % greenVariants.length],
          }}
        />
      ))}
    </>
  );
};
export default SnakeSerpent