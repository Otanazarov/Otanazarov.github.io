import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  title: string
  skills: string[]
  color: "purple" | "blue" | "green" | "orange" | "red" | "indigo"
}

const colorClasses = {
  purple: "bg-purple-100 text-purple-800 border-purple-200",
  blue: "bg-blue-100 text-blue-800 border-blue-200",
  green: "bg-green-100 text-green-800 border-green-200",
  orange: "bg-orange-100 text-orange-800 border-orange-200",
  red: "bg-red-100 text-red-800 border-red-200",
  indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
}

export default function SkillCard({ title, skills, color }: SkillCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 border ${colorClasses[color]}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
