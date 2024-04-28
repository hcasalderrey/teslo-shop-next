import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

 


export const metadata = {
 title: 'Login | Mi-Catalogo',
 description: ''
};

export default async function LoginLayout({
 children
}: {
 children: React.ReactNode;
}) {

    const session = await auth();
    console.log(session)
    if(session?.user){
        redirect('/')
    }

  return (
    <main className="flex justify-center ">
        <div className="w-full sm:w-[350px] px-10">     

        {children}
        </div>

    </main>
      
    
  );
}