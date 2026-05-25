import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div>
          <h1 className="text-7xl font-black text-primary/30">404</h1>
          <div className="h-1 w-16 bg-primary/20 mx-auto rounded-full mt-2" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-foreground">Ez az oldal nincs meg</h2>
          <p className="text-muted-foreground">
            A keresett útvonal nem található: <span className="font-bold">{location.pathname}</span>
          </p>
        </div>
        <Button asChild className="h-12 px-6 rounded-xl font-bold">
          <Link to="/">Vissza a főoldalra</Link>
        </Button>
      </div>
    </div>
  );
}
