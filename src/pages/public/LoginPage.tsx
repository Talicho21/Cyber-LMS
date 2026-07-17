import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PublicLayout } from "../../layouts/PublicLayout";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useAuthStore } from "../../store/authStore";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login(email.split("@")[0] || "Learner"); // mocked — no real auth call yet
    navigate("/dashboard");
  }

  return (
    <PublicLayout>
      <Card>
        <div className="mb-5 text-base font-medium text-navy-900">Log in</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-navy-200 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-500"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg border border-navy-200 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-500"
          />
          <Button type="submit" variant="primary" className="mt-1 w-full">
            Log in
          </Button>
        </form>
        <Link to="/register" className="mt-4 block text-center text-xs text-surface-muted hover:text-navy-700">
          Don't have an account? Register
        </Link>
      </Card>
    </PublicLayout>
  );
}