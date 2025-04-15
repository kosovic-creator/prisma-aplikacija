"use client";

import { toast } from "@/hooks/use-toast";

export default function ToastHandler({ message }: { message: string }) {
  if (message) {
    toast({
      title: "Validacija uspešna",
      description: message,
      variant: "default",
    });
  }

  return null;
}