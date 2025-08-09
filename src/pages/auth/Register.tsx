// src/pages/auth/Register.tsx
import { z } from "zod";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { register } from "@/store/slices/authSlice";
import TopBanner from "@/components/layout/TopBanner";
import DynamicForm from "@/components/form/DynamicForm";
import type { FieldConfig } from "@/components/form/DynamicForm";
import { Link } from "react-router-dom";

const registerSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const registerFields: FieldConfig[] = [
  { name: "name", label: "Name", type: "text", placeholder: "John Doe", col: 12 },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com", col: 12 },
  { name: "password", label: "Password", type: "password", placeholder: "••••••••", col: 12 },
  { name: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "••••••••", col: 12 },
];

export default function RegisterPage() {
  const dispatch = useDispatch<AppDispatch>();

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log("Register attempt:", values);
    dispatch(register(values));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-primary dark:text-white">Register</h1>
          <DynamicForm
            schema={registerSchema}
            fields={registerFields}
            defaultValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={onSubmit}
            submitText="Sign Up"
          />
           {/* Links Section */}
           <div className="mt-4 flex flex-col sm:flex-row sm:justify-between text-sm text-center sm:text-left">
            <Link
              to="/login"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Back to Login
            </Link>
            <span className="mt-2 sm:mt-0">
              Don’t have an account?{" "}
              <Link
                to="/forget"
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
