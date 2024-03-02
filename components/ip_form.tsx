"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  ip: z.string().min(2),
});

export function IPForm() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ip: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/wheelchair/${values.ip}`);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full items-center justify-center space-y-4 md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row"
      >
        <FormField
          control={form.control}
          name="ip"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter the IP address"
                  className="w-full bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"outline"} type="submit">
          Connect
        </Button>
      </form>
    </Form>
  );
}
