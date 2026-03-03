import { useState } from 'react';
import { User, Mail, Phone, MapPin, Globe, Camera, Save, Edit2, Bell, Lock, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Anderson',
    email: 'john.anderson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'Central Valley, California, USA',
    farmSize: '125 hectares',
    language: 'English',
    timezone: 'Pacific Time (PT)',
    bio: 'Fourth-generation farmer focused on sustainable agriculture practices and innovative crop management.',
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsAlerts: false,
    weeklyReport: true,
    recommendations: true,
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
            Profile Settings
          </h1>
          <p className="text-gray-500">
            Manage your account information and preferences
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50 overflow-hidden mb-8"
        >
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          </div>

          {/* Profile Content */}
          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="relative -mt-16 mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl border-4 border-white shadow-xl flex items-center justify-center relative group">
                <User className="w-16 h-16 text-gray-400" />
                <button className="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex justify-end mb-6">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-600 rounded-2xl hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            {/* Profile Information */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20 focus:border-[#2e7d32] transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.name}</span>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20 focus:border-[#2e7d32] transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.email}</span>
                  </div>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20 focus:border-[#2e7d32] transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.phone}</span>
                  </div>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Location</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20 focus:border-[#2e7d32] transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.location}</span>
                  </div>
                )}
              </div>

              {/* Farm Size */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Farm Size</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.farmSize}
                    onChange={(e) => setProfileData({ ...profileData, farmSize: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20 focus:border-[#2e7d32] transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.farmSize}</span>
                  </div>
                )}
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Language</label>
                {isEditing ? (
                  <select
                    value={profileData.language}
                    onChange={(e) => setProfileData({ ...profileData, language: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20 focus:border-[#2e7d32] transition-all"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>Portuguese</option>
                  </select>
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.language}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-500 mb-2">Bio</label>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20 focus:border-[#2e7d32] transition-all resize-none"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-2xl">
                  <p className="text-gray-900">{profileData.bio}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Notifications Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50 p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-[#2e7d32]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Notifications</h2>
              <p className="text-sm text-gray-500">Manage how you receive updates</p>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(preferences).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <span className="text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setPreferences({ ...preferences, [key]: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2e7d32]"></div>
                </label>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50 p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-[#2e7d32]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Security</h2>
              <p className="text-sm text-gray-500">Manage your password and security settings</p>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full text-left p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
              <div className="font-medium text-gray-900">Change Password</div>
              <div className="text-sm text-gray-500">Update your password regularly for security</div>
            </button>
            <button className="w-full text-left p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
              <div className="font-medium text-gray-900">Two-Factor Authentication</div>
              <div className="text-sm text-gray-500">Add an extra layer of security to your account</div>
            </button>
            <button className="w-full text-left p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
              <div className="font-medium text-gray-900">Active Sessions</div>
              <div className="text-sm text-gray-500">Manage devices where you're signed in</div>
            </button>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-red-50/50 backdrop-blur-xl rounded-3xl border border-red-100 shadow-lg shadow-red-100/50 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Danger Zone</h2>
              <p className="text-sm text-gray-500">Irreversible actions</p>
            </div>
          </div>

          <button className="w-full p-4 bg-white border border-red-200 rounded-2xl hover:bg-red-50 transition-all">
            <div className="font-medium text-red-600">Delete Account</div>
            <div className="text-sm text-gray-500">Permanently delete your account and all data</div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
