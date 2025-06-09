import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarUrl: string
}

export default function TestimonialCard({ quote, author, role, avatarUrl }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <QuoteIcon className="h-8 w-8 text-purple-200 mb-4" />
        <p className="text-gray-700 mb-6">{quote}</p>
        <div className="flex items-center">
            <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
            <img src={avatarUrl || "/placeholder.svg"} alt={author} className="object-cover w-full h-full" />
            </div>
          <div>
            <p className="font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
