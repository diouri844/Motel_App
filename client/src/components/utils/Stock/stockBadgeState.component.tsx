import { Badge } from "@/components/ui/badge"

interface ActiveBadgeProps {
    isActive: boolean
}

export default function StockCardBadge({ isActive = false }: ActiveBadgeProps) {
    return (
        <Badge
            variant={isActive ? "default" : "secondary"}
            className={`${isActive ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"
                } transition-colors duration-200`}
        >
            {isActive ? "Active" : "Inactive"}
        </Badge>
    )
}