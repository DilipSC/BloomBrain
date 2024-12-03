import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Passionate software developer with a love for creating user-friendly applications.',
    location: 'San Francisco, CA',
    website: 'https://janedoe.dev',
    avatar: '/placeholder.svg'
  });

  const [editedDetails, setEditedDetails] = useState({ ...userDetails });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserDetails(editedDetails);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedDetails({ ...userDetails });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center mb-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={userDetails.avatar} alt={userDetails.name} />
              <AvatarFallback>{userDetails.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {!isEditing && <h2 className="mt-4 text-xl font-semibold">{userDetails.name}</h2>}
          </div>
          {isEditing ? (
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={editedDetails.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={editedDetails.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  rows="3"
                  value={editedDetails.bio}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  value={editedDetails.location}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  type="url"
                  id="website"
                  name="website"
                  value={editedDetails.website}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <Label>Email</Label>
                <p className="mt-1">{userDetails.email}</p>
              </div>
              <div>
                <Label>Bio</Label>
                <p className="mt-1">{userDetails.bio}</p>
              </div>
              <div>
                <Label>Location</Label>
                <p className="mt-1">{userDetails.location}</p>
              </div>
              <div>
                <Label>Website</Label>
                <a href={userDetails.website} className="mt-1 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {userDetails.website}
                </a>
              </div>
              <div className="flex justify-end">
                <Button onClick={handleEdit}>Edit Profile</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;

