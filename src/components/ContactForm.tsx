"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export type ContactFormType = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

const ContactForm: React.FC = () => {
    const router: AppRouterInstance = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormType>();

    const onSubmit = async (data: ContactFormType) => {
        try {
            setIsLoading(true);
            const response = await fetch("/api/send-email/v2", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                alert("Network response was not ok");
                setIsLoading(false);
                return;
            }

            setIsLoading(false);
            router.push("/");
        } catch (error: any) {
            console.error(error);
            alert(error.message);
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-start gap-4"
        >
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex w-full flex-col">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                        className="h-12 border border-white/25 bg-transparent px-4 text-white placeholder:text-white focus:border-white focus:outline-none"
                    />
                    {errors.name && (
                        <span className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                <div className="flex w-full flex-col">
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Invalid email address",
                            },
                        })}
                        className="h-12 border border-white/25 bg-transparent px-4 text-white placeholder:text-white focus:border-white focus:outline-none"
                    />
                    {errors.email && (
                        <span className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                        </span>
                    )}
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex w-full flex-col">
                    <input
                        type="text"
                        placeholder="Phone"
                        {...register("phone", {
                            required: "Phone is required",
                            pattern: {
                                value: /^[0-9]{10,}$/,
                                message: "Enter a valid phone number",
                            },
                        })}
                        className="h-12 border border-white/25 bg-transparent px-4 text-white placeholder:text-white focus:border-white focus:outline-none"
                    />
                    {errors.phone && (
                        <span className="mt-1 text-sm text-red-500">
                            {errors.phone.message}
                        </span>
                    )}
                </div>

                <div className="flex w-full flex-col">
                    <input
                        type="text"
                        placeholder="Subject"
                        {...register("subject", {
                            required: "Subject is required",
                        })}
                        className="h-12 border border-white/25 bg-transparent px-4 text-white placeholder:text-white focus:border-white focus:outline-none"
                    />
                    {errors.subject && (
                        <span className="mt-1 text-sm text-red-500">
                            {errors.subject.message}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex w-full flex-col">
                <textarea
                    placeholder="Message"
                    rows={4}
                    {...register("message", {
                        required: "Message is required",
                    })}
                    className="w-full resize-none border border-white/25 bg-transparent p-4 text-white placeholder:text-white focus:border-white focus:outline-none"
                ></textarea>
                {errors.message && (
                    <span className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                    </span>
                )}
            </div>

            <button
                type="submit"
                className="to-primary/50 h-12 cursor-pointer bg-gradient-to-b from-white/0 px-8 font-semibold text-white transition"
            >
                {isLoading ? "Sending..." : "Send"}
            </button>
        </form>
    );
};

export default ContactForm;
