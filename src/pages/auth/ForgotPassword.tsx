import { z } from "zod";
import { Link } from "react-router-dom";
import TopBanner from "@/components/layout/TopBanner";
import DynamicForm from "@/components/form/DynamicForm";
import type { FieldConfig } from "@/components/form/DynamicForm"; // ✅ type-only import

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});

const forgotPasswordFields: FieldConfig[] = [
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com", col: 12 },
];

export default function ForgotPasswordPage() {
  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    console.log("Forgot password request:", values);
    // TODO: Trigger password reset API
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-primary dark:text-white">Forgot Password</h1>

          <DynamicForm
            schema={forgotPasswordSchema}
            fields={forgotPasswordFields}
            defaultValues={{ email: "" }}
            onSubmit={onSubmit}
            submitText="Send Reset Link"
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
