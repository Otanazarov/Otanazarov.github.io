import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card
      className={`overflow-hidden border-0 ${
        highlighted ? "shadow-xl ring-2 ring-purple-600 scale-105 z-10" : "shadow-md hover:shadow-lg"
      } transition-all duration-300`}
    >
      <CardHeader className={`pb-0 pt-6 ${highlighted ? "bg-purple-50" : ""}`}>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <div className="mt-4 flex items-baseline justify-center">
            <span className="text-4xl font-bold tracking-tight text-gray-900">{price}</span>
            <span className="ml-1 text-xl font-semibold text-gray-600">/month</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      </CardHeader>
      <CardContent className={`pt-6 ${highlighted ? "bg-purple-50" : ""}`}>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3 text-sm text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className={`pb-6 pt-4 ${highlighted ? "bg-purple-50" : ""}`}>
        <Button
          variant={buttonVariant}
          className={`w-full ${highlighted && buttonVariant === "default" ? "bg-purple-600 hover:bg-purple-700" : ""}`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
