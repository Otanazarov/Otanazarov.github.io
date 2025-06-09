import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Calendar, Building } from "lucide-react"

interface Project {
  name: string
  url: string
}

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  achievements?: string[]
  projects?: Project[]
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  projects,
}: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center text-gray-600 mt-1">
              <Building className="h-4 w-4 mr-2" />
              <span className="font-medium">{company}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-500 mt-2 md:mt-0">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{period}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        {achievements&&<div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Asosiy yutuqlar:</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700 text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>}

        {projects && projects.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Loyihalar:</h4>
            <div className="flex flex-wrap gap-2">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors"
                >
                  {project.name}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
