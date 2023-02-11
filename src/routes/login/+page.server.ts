import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals}) => {
    const session = await locals.validate()
    if(session) {
        throw redirect(302, "/")
    }
};

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const { username, password } = Object.fromEntries(
            await request.formData(),
        ) as Record<string, string>
    
        try {
            const key = await auth.validateKeyPassword("username", username, password)
            const session = await auth.createSession(key.userId)
            locals.setSession(session)
        } catch (error) {
            console.log(error);
            return fail(400, { message: "User tidak dapat login" })
        }

        const { user, session } = await locals.validateUser()
        if(!(user && session)) {
            throw redirect(302, "/login")
        }
        const level = await prisma.user.findUnique({
            where: {
                id: user.userId
            } 
        })

        if(level?.level == "MASYARAKAT"){
            throw redirect(302, "/masyarakat")
        } else if (level?.level == "ADMIN") {
            throw redirect(302, "/admin")
        } else if (level?.level == "PETUGAS") {
            throw redirect(302, "/petugas")
        }
    }
};