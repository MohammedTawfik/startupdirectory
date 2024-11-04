import React from "react";
import Link from "next/link";
import Image from "next/image";
import {auth, signIn, signOut} from "@/auth";

const NavBar = async () => {
    const userSession = await auth();
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans ">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="144" width={144} height={30}/>
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {userSession && userSession?.user ? (
                        <>
                            <Link
                                href="/startup/create"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                <span>Create</span>
                            </Link>
                            <form action={async () => {
                                "use server"
                                await signOut({redirectTo: "/"});
                            }}>

                                <button type="submit">
                                    <span>Log Out</span>
                                </button>
                            </form>

                            <Link href={`/user/${userSession?.user?.id}`}>
                                <span>{userSession?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server"
                            await signIn("github");
                        }}>
                            <button type="submit">
                                <span>Sign In</span>
                            </button>
                        </form>

                    )}
                </div>
            </nav>
        </header>
    )
        ;
};
export default NavBar;
