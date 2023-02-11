import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals}) => {
    const { user, session } = await locals.validateUser()
        if(!(user && session)) {
            throw redirect(302, "/pengunjung")
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
};