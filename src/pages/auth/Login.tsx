// src/pages/auth/Login.tsx
import { z } from "zod";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { login } from "@/store/slices/authSlice";
import TopBanner from "@/components/layout/TopBanner";
import DynamicForm from "@/components/form/DynamicForm";
import type { FieldConfig } from "@/components/form/DynamicForm"; // ✅ type-only import

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

const loginFields: FieldConfig[] = [
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com", col: 12 },
  { name: "password", label: "Password", type: "password", placeholder: "••••••••", col: 12 },
];

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log("Login attempt:", values);
    dispatch(login(values));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-primary dark:text-white">Login</h1>

          <DynamicForm
            schema={loginSchema}
            fields={loginFields}
            defaultValues={{
              email: "admin@gmail.com", // dev convenience
              password: "admin123",
            }}
            onSubmit={onSubmit}
            submitText="Login"
          />

          {/* Links Section */}
          <div className="mt-4 flex flex-col sm:flex-row sm:justify-between text-sm text-center sm:text-left">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Forgot Password?
            </Link>
            <span className="mt-2 sm:mt-0">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:underline dark:text-blue-400"
              >
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
