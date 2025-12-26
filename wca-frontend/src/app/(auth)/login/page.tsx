import React from 'react';

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center mb-4">Chat Login</h2>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter your username" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="card-actions justify-center mt-4">
                        {/* Use an anchor for now or a button that doesn't do anything yet, or simple form action */}
                        <a href="/inbox" className="btn btn-primary w-full max-w-xs">Enter Chat</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
