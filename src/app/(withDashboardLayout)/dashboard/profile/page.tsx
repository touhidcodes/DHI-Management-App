// pages/profile.js
import React from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, CardTitle, CardContent } from "@shadcn/ui/card";
import { Avatar } from "@shadcn/ui/avatar";

const ProfilePage = () => {
  // Fetch profile data from the Redux store
  const profile = useSelector((state) => state.user.profile);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <CardHeader>
          <Avatar
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={profile?.avatar || "/default-avatar.png"}
            alt="Profile Picture"
          />
          <CardTitle className="text-center text-xl font-bold">
            {profile?.name || "John Doe"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">Email:</h3>
              <p className="text-sm text-gray-600">
                {profile?.email || "johndoe@example.com"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Phone:</h3>
              <p className="text-sm text-gray-600">{profile?.phone || "N/A"}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Address:</h3>
              <p className="text-sm text-gray-600">
                {profile?.address || "123 Main St, Anytown"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Bio:</h3>
              <p className="text-sm text-gray-600">
                {profile?.bio || "No bio available."}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
