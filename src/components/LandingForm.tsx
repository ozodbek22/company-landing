"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ChartIcon, MagnifierIcon, WalletIcon} from "@/components/Icons.tsx";

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string().min(2, {
        message: "Phone must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
})

export function LandingForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }

    interface ServiceProps {
        title: string;
        description: string;
        icon: JSX.Element;
    }

    const serviceList: ServiceProps[] = [
        {
            title: "Code Collaboration",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
            icon: <ChartIcon/>,
        },
        {
            title: "Project Management",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
            icon: <WalletIcon/>,
        },
        {
            title: "Task Automation",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
            icon: <MagnifierIcon/>,
        },
    ];

    return (
        <Form {...form}>

            <section id="newsletter">
                <hr className="w-11/12 mx-auto"/>

                <div className="container py-24 sm:py-32">
                    <h3 className="text-center text-4xl md:text-5xl font-bold">
                        Let's move forward
                    </h3>
                    <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="grid lg:grid-cols-[1fr,1fr] gap-12 ">
                        <div>
                            <form onSubmit={form.handleSubmit(onSubmit)}
                                  className="flex flex-col w-full  gap-5 md:gap-2">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Name" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <div className="flex gap-4 w-full">
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({field}) => (
                                            <FormItem
                                                className="w-full"
                                            >
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Phone Number" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem
                                                className="w-full"
                                            >
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Email" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button className="mt-4" type="submit">Submit</Button>
                            </form>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
             What is{" "}
            </span>
                                Next
                            </h3>


                            <div className="flex flex-col gap-8">
                                {serviceList.map(({icon, title, description}: ServiceProps) => (
                                    <Card key={title}>
                                        <CardHeader
                                            className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                                            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                                                {icon}
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg">{title}</CardTitle>
                                                <CardDescription className=" mt-2">
                                                    {description}
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="w-11/12 mx-auto"/>
            </section>

        </Form>
    )
}
