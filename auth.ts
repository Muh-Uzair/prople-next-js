import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      try {
        const email = user?.email;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/signup-google`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
            }),
          },
        );

        if (!res.ok) {
          console.error("Failed to create user");
          return false;
        }

        return true;
      } catch (err: unknown) {
        console.error("Error in signIn callback: Error => ", err);
        return false;
      }
    },
  },
});
