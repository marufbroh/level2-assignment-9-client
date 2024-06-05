"use client"

import { AuthKey } from "@/contants";

import { toast } from "sonner";

const ChangePassword = () => {
 
    const handlePasswordChange = async (e: any) => {
        e.preventDefault()
        const form = e.target
        const oldPassword = form.oldPassword.value;
        const newPassword = form.newPassword.value;
        const confirmPassword = form.confirmPassword.value;
        const payload = { oldPassword, newPassword }


        if (newPassword !== confirmPassword) {
            return toast.error("Password not match")
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/login/change-password`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem(AuthKey) as string
            },
            body: JSON.stringify(payload)
        })
        const data = await res.json()
        toast.success(data.message)

    }
    return (
        <div className="hero min-h-screen md:bg-base-400 rounded p-6">
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <form className="p-8" onSubmit={handlePasswordChange}>
                    <div className="form-control">
                        {/* you can enter company logo here */}
                        <div className="mb-10 flex justify-center">
                            <h1 className="text-2xl font-bold">Change your password</h1>
                        </div>
                        <label className="label" htmlFor="oldPassword">
                            <span className="label-text ">Your old password</span>
                        </label>
                        <input
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                            placeholder="Your Old Password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label" htmlFor="newPassword">
                            <span className="label-text ">New password</span>
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            placeholder="New Password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label" htmlFor="confirmPassword">
                            <span className="label-text ">Confirm your password</span>
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your Password"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control mt-6 mb-4">
                        <button type="submit" className="bg-[#C74D2F] px-5 py-2 text-xl text-white font-bold rounded-full">
                            <>Change Password</>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
