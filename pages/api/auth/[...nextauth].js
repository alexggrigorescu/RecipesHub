import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

export default NextAuth({
  callbacks: {
    session: async (session, user) => {
      session.user.id = user.id;
      return session;
    },
  },
  adapter: Adapters.TypeORM.Adapter({
    username: "root",
    password: "root",
    type: "mysql",
    database: "db_recipeshub",
    synchronize: true,
  }),
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});
