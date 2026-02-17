import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Dashboard = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="flex items-center justify-between p-4 border-b">
        <span className="text-sm text-muted-foreground">{user?.email}</span>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">User Interface</p>
      </main>
    </div>
  );
};

export default Dashboard;
