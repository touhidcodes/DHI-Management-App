import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const ProfilePage = () => {
  // Fetch profile data from the Redux store
  const profile = {
    name: "Touhidur Zaman",
    email: "touhidur.zaman@example.com",
    phone: "+880-123-456-789",
    address: "Gopalganj, Bangladesh",
    bio: "I am a full-stack web developer with 2+ years of experience in building dynamic and responsive web applications. My expertise includes working with JavaScript, React.js, Next.js, Node.js, and databases like PostgreSQL and MongoDB.",
    avatar: "/images/avatar-demo.png",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <CardHeader>
          <Avatar className="w-24 h-24 rounded-full mx-auto mb-4">
            <AvatarImage
              src={profile?.avatar || "/default-avatar.png"}
              alt={profile?.name || "User Avatar"}
            />
            <AvatarFallback>{profile?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
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
            <div>
              <h3 className="text-sm font-semibold">Address:</h3>
              <p className="text-sm text-gray-600">
                {profile?.bio || "No address available."}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Phone:</h3>
              <p className="text-sm text-gray-600">
                {profile?.bio || "No phone available."}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Email:</h3>
              <p className="text-sm text-gray-600">
                {profile?.bio || "No email available."}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
