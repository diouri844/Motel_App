export default function AmenityCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg border">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}