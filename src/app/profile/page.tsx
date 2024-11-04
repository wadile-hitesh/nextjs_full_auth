"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");

    console.log(res.data);
    setData(res.data.data.username);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />

      <p>Profile page is under construction</p>
      <h2>
        {data === "" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />

      <button
        onClick={getUserDetails}
        className="p-2 mt-4 text-white bg-orange-500 rounded-md"
      >
        Get User Details
      </button>
      <button
        onClick={logout}
        className="p-2 mt-4 text-white bg-red-500 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
