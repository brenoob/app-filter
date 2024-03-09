import { Check, Loader2Icon, X } from "lucide-react";
import { Button } from "./button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createTagSchema = z.object({
    title: z.string().min(3, { message: "Minimus 3 characters" })
})

type CreateTagSchema = z.infer<typeof createTagSchema>

function getSlugFromString(input: string): string {
    return input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
}

export function CreateTagForm() {
    const queryClient = useQueryClient()

    const { register, handleSubmit, watch, formState } = useForm<CreateTagSchema>({
        resolver: zodResolver(createTagSchema)
    })

    const slug = watch('title')
        ? getSlugFromString(watch('title'))
        : ''

    const { mutateAsync } = useMutation({
        mutationFn: async ({ title }: CreateTagSchema) => {
            // delay de 2s para passar desta linha quando salvar a tag
            await new Promise(resolve => setTimeout(resolve, 2000))

            // a.log({ title, slug });
            await fetch('http://localhost:3333/tags', {
                method: 'POST',
                body: JSON.stringify({ title, slug, amountOfVideos: 0 })
            })

        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-tags'],
            })
        }
    })

    async function CreateTag({ title }: CreateTagSchema) {
        await mutateAsync({ title })
    }

    return (
        <form onSubmit={handleSubmit(CreateTag)} className="w-full space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium block" htmlFor="title">Tag title</label>
                <input
                    {...register('title')}
                    type="text"
                    id="title"
                    placeholder="insert Tag title"
                    className="border border-zinc-800 rounded-lg py-2 px-3 w-full bg-zinc-800/50"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium block" htmlFor="slug">Slug</label>
                <input
                    readOnly
                    value={slug}
                    type="text"
                    id="slug"
                    placeholder="insert slug"
                    className="border border-zinc-800 rounded-lg py-2 px-3 w-full bg-zinc-800/50"
                />
            </div>
            <div className="flex items-center justify-end gap-2">
                <Dialog.Close asChild>
                    <Button>
                        <X className="size-3" />
                        Cancel
                    </Button>
                </Dialog.Close>
                <Button type="submit" disabled={formState.isSubmitting} className="bg-teal-200 text-teal-950">
                    {formState.isSubmitting ? <Loader2Icon className="size-3 animate-spin" /> : <Check className="size-3" />}
                    Save
                </Button>
            </div>
        </form>
    )
}