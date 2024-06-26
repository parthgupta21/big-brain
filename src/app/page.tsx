'use client'


import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { Content } from "next/font/google";
import Image from "next/image";
import { api } from "../../convex/_generated/api";

export default function Home() {

  const documents = useQuery(api.documents.getDocuments);
const createDocument = useMutation(api.documents.createDocument);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />

        <button onClick={() => {
          createDocument({ title: "Hello" })
        }}>ClickMe</button>

        {documents?.map((doc) => (
          <div key={doc._id} > {doc.title}</div>
        ))}
      </Authenticated>
    </main>
  );
}
