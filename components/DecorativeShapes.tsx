import '@/styles/decorative-shapes.css'

interface DecorativeShapesProps {
  variant?: '1' | '2'
}

export default function DecorativeShapes({ variant = '1' }: DecorativeShapesProps) {
  return (
    <div className={`decorative-shapes section-shapes-${variant}`}>
      {/* Circle */}
      <div className="shape-element shape-circle shape-md shape-purple shape-float-1"></div>

      {/* Square */}
      <div className="shape-element shape-square shape-sm shape-purple-light shape-float-2"></div>

      {/* Ring */}
      <div className="shape-element shape-ring shape-lg shape-pink shape-float-3"></div>

      {/* Triangle */}
      <div className="shape-element shape-triangle shape-cyan shape-float-4"></div>

      {/* Plus */}
      <div className="shape-element shape-plus shape-purple shape-float-1"></div>

      {/* Small Circle */}
      <div className="shape-element shape-circle shape-sm shape-cyan shape-float-2"></div>

      {/* Medium Ring */}
      <div className="shape-element shape-ring shape-md shape-purple-light shape-float-3"></div>

      {/* Small Square */}
      <div className="shape-element shape-square shape-sm shape-pink shape-float-4"></div>
    </div>
  )
}
