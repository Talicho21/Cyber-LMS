import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PublicLayout } from "../../layouts/PublicLayout";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useAuthStore } from "../../store/authStore";

export function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login(fullName || "Learner"); // mocked — no real account creation yet
    navigate("/dashboard");
  }

  return (
    <PublicLayout>
      <Card>
        <div className="mb-5 text-base font-medium text-navy-900">Create your account</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            required
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="rounded-lg border border-navy-200 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-500"
          />
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
            Register
          </Button>
        </form>
        <Link to="/login" className="mt-4 block text-center text-xs text-surface-muted hover:text-navy-700">
          Already have an account? Log in
        </Link>
      </Card>
    </PublicLayout>
  );
}