import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Index = () => {
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard");
  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="flex justify-end p-4">
        <Button variant="outline" onClick={handleLogin}>
          Login
        </Button>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-light tracking-tight text-foreground">
          Hello World
        </h1>
      </main>
    </div>
  );
};

export default Index;
