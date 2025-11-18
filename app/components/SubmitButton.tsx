"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonState = "default" | "loading" | "disabled" | "success" | "error";

interface SubmitButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  state?: ButtonState;
  successMessage?: string;
  errorMessage?: string;
  defaultText?: string;
  loadingText?: string;
  width?: "fixed" | "hug";
}

export default function SubmitButton({
  state = "default",
  successMessage = "See you on a demo!",
  errorMessage = "Something went wrong",
  defaultText = "Submit",
  loadingText = "Sending...",
  width = "fixed",
  ...props
}: SubmitButtonProps) {
  const isDisabled = state === "disabled" || state === "loading";
  const isSuccess = state === "success";
  const isError = state === "error";
  const isLoading = state === "loading";

  // Determine button text
  let buttonText = defaultText;
  if (isLoading) buttonText = loadingText;
  if (isSuccess) buttonText = successMessage;
  if (isError) buttonText = errorMessage;

  // Determine width classes
  const widthClass = width === "fixed" ? "w-full md:w-[160px]" : "w-auto";

  return (
    <div
      className={`p-1 rounded-xl ${widthClass}`}
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow:
          "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(105, 56, 239, 0.12)",
        opacity: state === "disabled" ? 0.4 : 1,
      }}
    >
      <button
        type="submit"
        disabled={isDisabled}
        className="flex items-center justify-center w-full gap-2 py-3 px-12 rounded-lg text-base font-medium"
        style={{
          background: isError
            ? "linear-gradient(180deg, rgba(239, 56, 56, 0.3) 0%, rgba(239, 56, 56, 0.1) 100%), #FFFFFF"
            : "linear-gradient(180deg, rgba(105, 56, 239, 0.3) 0%, rgba(105, 56, 239, 0.1) 100%), #FFFFFF",
          border: "1px solid rgba(255, 255, 255, 0.8)",
          color: isError ? "#EF3838" : "#6938EF",
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}
        {...props}
      >
        {isLoading && <LoadingSpinner />}
        {buttonText}
      </button>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div
      className="relative"
      style={{
        width: "16px",
        height: "16px",
      }}
    >
      {/* Inner circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: "12px",
          height: "12px",
          top: "2px",
          left: "2px",
          background: "rgba(105, 56, 239, 0.2)",
        }}
      />
      {/* Outer circle with gradient stroke */}
      <svg
        className="absolute animate-spin"
        style={{
          width: "12px",
          height: "12px",
          top: "2px",
          left: "2px",
        }}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="6"
          cy="6"
          r="5.5"
          stroke="url(#spinner-gradient)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient
            id="spinner-gradient"
            x1="11"
            y1="5.5"
            x2="6"
            y2="10.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6938EF" stopOpacity="1" />
            <stop offset="1" stopColor="#6938EF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
