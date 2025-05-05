import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
                <h2 className="text-2xl font-bold mb-4">My Profile</h2>

                {user ? (
                    <div>
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold">{user.displayName}</h3>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                ) : (
                    <p className="text-red-500">User not logged in.</p>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
