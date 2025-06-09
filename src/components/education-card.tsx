import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Calendar } from "lucide-react"

interface EducationCardProps {
  institution: string
  degree: string
  field: string
  period: string
  type: "university" | "course"
}

export default function EducationCard({ institution, degree, field, period, type }: EducationCardProps) {
  const Icon = type === "university" ? GraduationCap : BookOpen

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Icon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{institution}</h3>
                <p className="text-purple-600 font-medium">{degree}</p>
                <p className="text-gray-600 mt-1">{field}</p>
              </div>
              <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{period}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
