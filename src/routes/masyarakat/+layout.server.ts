import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({locals}) => {
    const { user, session } = await locals.validateUser()
    if(!(user && session)) {
        throw redirect(302, "/pengunjung")
    }
    const userDetail = await prisma.user.findUnique({
        where: {
            id: user.userId
        } 
    })

    return {
        userDetail
    }
};